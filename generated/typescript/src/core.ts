import { deserialize, serialize } from "./serde.js";

export interface ClientOptions {
  apiKey?: string;
  clientId?: string;
  clientSecret?: string;
  username?: string;
  password?: string;
  baseUrl?: string;
  environment?: string;
  timeoutMs?: number;
  maxRetries?: number;
  retryStatuses?: number[];
  packageVersion?: string;
  omitStainlessHeaders?: boolean;
  idempotencyHeader?: string | null;
  webhookSecret?: string;
  hooks?: ClientHooks;
  validateResponses?: boolean;
}

export interface OAuth2Config {
  tokenUrl: string;
  scopes: string[];
  authStyle: "post" | "basic";
  clientId?: string;
  clientSecret?: string;
  authorizationUrl?: string;
  deviceAuthorizationUrl?: string;
}

export interface DeviceCodeResponse {
  device_code: string;
  user_code: string;
  verification_uri: string;
  verification_uri_complete?: string;
  interval?: number;
  expires_in?: number;
}

/** Observability hooks. Wire OpenTelemetry/metrics/logging here; default is no-op (zero deps). */
export interface RequestHookInfo {
  method: string;
  url: string;
  attempt: number;
}
export interface ResponseHookInfo extends RequestHookInfo {
  status: number;
  durationMs: number;
}
export interface ErrorHookInfo extends RequestHookInfo {
  error: unknown;
}
export interface ClientHooks {
  onRequest?: (info: RequestHookInfo) => void;
  onResponse?: (info: ResponseHookInfo) => void;
  onError?: (info: ErrorHookInfo) => void;
}

export interface RequestOptions {
  headers?: Record<string, string>;
  query?: Record<string, unknown>;
  body?: unknown;
  multipart?: boolean;
  signal?: AbortSignal;
  timeoutMs?: number;
  maxRetries?: number;
  idempotencyKey?: string;
  responseType?: string;
  /** Name of the request-body type, used to map camelCase fields to spec wire names before sending. */
  requestType?: string;
  /** Encode the body as application/x-www-form-urlencoded (bracket notation for nested values). */
  formUrlencoded?: boolean;
  /** Send the body as a raw text/plain string. */
  textBody?: boolean;
  /** When true, the success response body is returned as raw bytes (binary download). */
  binary?: boolean;
}

export interface StreamOptions extends RequestOptions {
  sse?: boolean;
  doneSentinel?: string;
}

export class ApiError extends Error {
  readonly status: number;
  readonly body: unknown;
  /** Value of the response's x-request-id header, for correlating with server logs. */
  readonly requestId?: string;
  readonly headers?: Headers;

  constructor(status: number, body: unknown, requestId?: string, headers?: Headers) {
    super(`API request failed with status ${status}${requestId ? ` (request id: ${requestId})` : ""}`);
    this.status = status;
    this.body = body;
    this.requestId = requestId;
    this.headers = headers;
    this.name = new.target.name;
  }
}

// Per-status error subclasses so callers can `catch`/`instanceof` specific failures.
export class BadRequestError extends ApiError {}          // 400
export class AuthenticationError extends ApiError {}      // 401
export class PermissionDeniedError extends ApiError {}    // 403
export class NotFoundError extends ApiError {}            // 404
export class ConflictError extends ApiError {}            // 409
export class UnprocessableEntityError extends ApiError {} // 422
export class RateLimitError extends ApiError {}           // 429
export class InternalServerError extends ApiError {}      // >= 500

export function createApiError(status: number, body: unknown, requestId?: string, headers?: Headers): ApiError {
  switch (status) {
    case 400: return new BadRequestError(status, body, requestId, headers);
    case 401: return new AuthenticationError(status, body, requestId, headers);
    case 403: return new PermissionDeniedError(status, body, requestId, headers);
    case 404: return new NotFoundError(status, body, requestId, headers);
    case 409: return new ConflictError(status, body, requestId, headers);
    case 422: return new UnprocessableEntityError(status, body, requestId, headers);
    case 429: return new RateLimitError(status, body, requestId, headers);
  }
  if (status >= 500) return new InternalServerError(status, body, requestId, headers);
  return new ApiError(status, body, requestId, headers);
}

/** Async-iterable wrapper over an SSE or JSONL response body. */
export class Stream<T> implements AsyncIterable<T> {
  constructor(
    private readonly body: ReadableStream<Uint8Array>,
    private readonly sse: boolean,
    private readonly doneSentinel?: string,
    private readonly typeName?: string,
  ) {}

  /** Parse one event payload, mapping wire names to camelCase when the event type is known. */
  private decode(raw: string): T {
    const value = JSON.parse(raw);
    return this.typeName !== undefined ? deserialize<T>(value, this.typeName) : (value as T);
  }

  async *[Symbol.asyncIterator](): AsyncIterator<T> {
    const decoder = new TextDecoder();
    let buffer = "";
    let dataLines: string[] = [];
    for await (const chunk of this.body as unknown as AsyncIterable<Uint8Array>) {
      buffer += decoder.decode(chunk, { stream: true });
      let newlineIndex: number;
      while ((newlineIndex = buffer.indexOf("\n")) !== -1) {
        const line = buffer.slice(0, newlineIndex).replace(/\r$/, "");
        buffer = buffer.slice(newlineIndex + 1);
        if (this.sse) {
          if (line === "") {
            const event = this.flush(dataLines);
            dataLines = [];
            if (event === DONE) return;
            if (event !== undefined) yield event as T;
            continue;
          }
          if (line.startsWith(":")) continue;
          if (line.startsWith("data:")) dataLines.push(line.slice(5).replace(/^ /, ""));
        } else if (line.trim() !== "") {
          if (this.doneSentinel !== undefined && line.trim() === this.doneSentinel) return;
          yield this.decode(line);
        }
      }
    }
    if (this.sse) {
      const event = this.flush(dataLines);
      if (event !== undefined && event !== DONE) yield event as T;
    } else if (buffer.trim() !== "") {
      yield this.decode(buffer);
    }
  }

  private flush(dataLines: string[]): T | typeof DONE | undefined {
    if (dataLines.length === 0) return undefined;
    const data = dataLines.join("\n");
    if (this.doneSentinel !== undefined && data === this.doneSentinel) return DONE;
    return this.decode(data);
  }

  private readonly listeners: { chunk: Array<(value: T) => void>; end: Array<() => void>; error: Array<(error: unknown) => void> } = { chunk: [], end: [], error: [] };
  private consuming = false;

  /** Event-emitter API over the stream. Use this OR async iteration, not both. Chainable. */
  on(event: "chunk", listener: (value: T) => void): this;
  on(event: "end", listener: () => void): this;
  on(event: "error", listener: (error: unknown) => void): this;
  on(event: "chunk" | "end" | "error", listener: (arg?: any) => void): this {
    (this.listeners[event] as Array<(arg?: any) => void>).push(listener);
    this.consume();
    return this;
  }

  private consume(): void {
    if (this.consuming) return;
    this.consuming = true;
    // Defer so all chained .on(...) listeners register before consumption begins.
    queueMicrotask(async () => {
      try {
        for await (const value of this) for (const cb of this.listeners.chunk) cb(value);
        for (const cb of this.listeners.end) cb();
      } catch (error) {
        if (this.listeners.error.length > 0) for (const cb of this.listeners.error) cb(error);
        else throw error;
      }
    });
  }
}

const DONE = Symbol("stream.done");

/** Typed bidirectional WebSocket connection. */
export class WebSocketConnection<ClientEvent, ServerEvent> {
  constructor(
    private readonly ws: WebSocket,
    private readonly clientType?: string,
    private readonly serverType?: string,
  ) {}

  onOpen(handler: () => void): this {
    this.ws.addEventListener("open", () => handler());
    return this;
  }

  onMessage(handler: (event: ServerEvent) => void): this {
    this.ws.addEventListener("message", (event: MessageEvent) => {
      const data = typeof event.data === "string" ? event.data : String(event.data);
      const parsed = JSON.parse(data);
      handler((this.serverType !== undefined ? deserialize<ServerEvent>(parsed, this.serverType) : parsed) as ServerEvent);
    });
    return this;
  }

  onClose(handler: () => void): this {
    this.ws.addEventListener("close", () => handler());
    return this;
  }

  send(event: ClientEvent): void {
    const payload = this.clientType !== undefined ? serialize(event, this.clientType) : event;
    this.ws.send(JSON.stringify(payload));
  }

  close(): void {
    this.ws.close();
  }

  get socket(): WebSocket {
    return this.ws;
  }
}

export class ApiClient {
  private readonly baseUrl: string;
  private readonly apiKey?: string;
  private readonly timeoutMs: number;
  private readonly maxRetries: number;
  private readonly retryStatuses: Set<number>;
  private readonly packageVersion: string;
  private readonly omitStainlessHeaders: boolean;
  private readonly idempotencyHeader?: string | null;
  private readonly oauth2?: OAuth2Config;
  private readonly basicAuth?: string;
  private readonly authPrefix: string;
  private readonly hooks?: ClientHooks;
  private readonly validateResponses: boolean;
  private readonly validate?: (value: unknown, typeName: string) => void;
  private cachedToken?: string;
  private tokenExpiresAt = 0;

  constructor(options: Required<Pick<ClientOptions, "baseUrl" | "timeoutMs" | "maxRetries" | "retryStatuses">> & Pick<ClientOptions, "apiKey" | "packageVersion" | "omitStainlessHeaders" | "idempotencyHeader" | "hooks"> & { oauth2?: OAuth2Config; basicAuth?: string; authPrefix?: string; validateResponses?: boolean; validate?: (value: unknown, typeName: string) => void }) {
    this.baseUrl = options.baseUrl.replace(/\/$/, "");
    this.apiKey = options.apiKey;
    this.basicAuth = options.basicAuth;
    this.authPrefix = options.authPrefix ?? "Bearer ";
    this.timeoutMs = options.timeoutMs;
    this.maxRetries = options.maxRetries;
    this.retryStatuses = new Set(options.retryStatuses);
    this.packageVersion = options.packageVersion ?? "0.1.0";
    this.omitStainlessHeaders = options.omitStainlessHeaders ?? false;
    this.idempotencyHeader = options.idempotencyHeader;
    this.oauth2 = options.oauth2;
    this.hooks = options.hooks;
    this.validateResponses = options.validateResponses ?? false;
    this.validate = options.validate;
  }

  /** OAuth2 client-credentials: fetch, cache, and refresh the bearer token. */
  private async getAccessToken(force = false): Promise<string | undefined> {
    if (!this.oauth2?.clientId || !this.oauth2?.clientSecret) return undefined;
    if (!force && this.cachedToken && Date.now() < this.tokenExpiresAt) return this.cachedToken;
    const tokenUrl = this.oauth2.tokenUrl.startsWith("http") ? this.oauth2.tokenUrl : `${this.baseUrl}${this.oauth2.tokenUrl}`;
    const headers: Record<string, string> = { "content-type": "application/x-www-form-urlencoded", accept: "application/json" };
    const params = new URLSearchParams({ grant_type: "client_credentials" });
    if (this.oauth2.scopes.length) params.set("scope", this.oauth2.scopes.join(" "));
    if (this.oauth2.authStyle === "basic") {
      headers.authorization = "Basic " + Buffer.from(`${this.oauth2.clientId}:${this.oauth2.clientSecret}`).toString("base64");
    } else {
      params.set("client_id", this.oauth2.clientId);
      params.set("client_secret", this.oauth2.clientSecret);
    }
    const response = await fetch(tokenUrl, { method: "POST", headers, body: params.toString() });
    if (!response.ok) throw createApiError(response.status, await response.text(), response.headers.get("x-request-id") ?? undefined, response.headers);
    const data = (await response.json()) as { access_token: string; expires_in?: number };
    this.cachedToken = data.access_token;
    this.tokenExpiresAt = Date.now() + ((data.expires_in ?? 3600) - 30) * 1000;
    return this.cachedToken;
  }

  private async resolveBearer(): Promise<string | undefined> {
    if (this.oauth2?.clientId && this.oauth2?.clientSecret) return this.getAccessToken();
    return this.apiKey;
  }

  /** OAuth2 authorization-code flow: build the URL to send the user to for consent. */
  authorizationUrl(redirectUri: string, options: { state?: string; scopes?: string[] } = {}): string {
    if (!this.oauth2?.authorizationUrl) throw new ApiError(0, "authorization_url is not configured");
    const base = this.oauth2.authorizationUrl.startsWith("http") ? this.oauth2.authorizationUrl : `${this.baseUrl}${this.oauth2.authorizationUrl}`;
    const url = new URL(base);
    url.searchParams.set("response_type", "code");
    if (this.oauth2.clientId) url.searchParams.set("client_id", this.oauth2.clientId);
    url.searchParams.set("redirect_uri", redirectUri);
    const scopes = options.scopes ?? this.oauth2.scopes;
    if (scopes.length) url.searchParams.set("scope", scopes.join(" "));
    if (options.state) url.searchParams.set("state", options.state);
    return url.toString();
  }

  /** OAuth2 authorization-code flow: exchange the returned code for an access token (cached as the bearer). */
  async exchangeCode(code: string, redirectUri: string): Promise<string> {
    return this.oauthTokenRequest({ grant_type: "authorization_code", code, redirect_uri: redirectUri });
  }

  /** OAuth2 device flow: request a device + user code from the authorization server. */
  async requestDeviceCode(): Promise<DeviceCodeResponse> {
    if (!this.oauth2?.deviceAuthorizationUrl) throw new ApiError(0, "device_authorization_url is not configured");
    const url = this.oauth2.deviceAuthorizationUrl.startsWith("http") ? this.oauth2.deviceAuthorizationUrl : `${this.baseUrl}${this.oauth2.deviceAuthorizationUrl}`;
    const params = new URLSearchParams();
    if (this.oauth2.clientId) params.set("client_id", this.oauth2.clientId);
    if (this.oauth2.scopes.length) params.set("scope", this.oauth2.scopes.join(" "));
    const response = await fetch(url, { method: "POST", headers: { "content-type": "application/x-www-form-urlencoded", accept: "application/json" }, body: params.toString() });
    if (!response.ok) throw createApiError(response.status, await response.text(), response.headers.get("x-request-id") ?? undefined, response.headers);
    return (await response.json()) as DeviceCodeResponse;
  }

  /** OAuth2 device flow: poll the token endpoint until the user authorizes (or it errors). */
  async pollDeviceToken(deviceCode: string, intervalSeconds = 5): Promise<string> {
    for (;;) {
      try {
        return await this.oauthTokenRequest({ grant_type: "urn:ietf:params:oauth:grant-type:device_code", device_code: deviceCode });
      } catch (error) {
        const body = error instanceof ApiError ? error.body : undefined;
        const code = body && typeof body === "object" ? (body as Record<string, unknown>).error : undefined;
        if (code === "authorization_pending" || code === "slow_down") {
          await sleep(intervalSeconds * 1000);
          continue;
        }
        throw error;
      }
    }
  }

  private async oauthTokenRequest(extra: Record<string, string>): Promise<string> {
    const tokenUrl = this.oauth2!.tokenUrl.startsWith("http") ? this.oauth2!.tokenUrl : `${this.baseUrl}${this.oauth2!.tokenUrl}`;
    const headers: Record<string, string> = { "content-type": "application/x-www-form-urlencoded", accept: "application/json" };
    const params = new URLSearchParams(extra);
    if (this.oauth2?.clientId) params.set("client_id", this.oauth2.clientId);
    if (this.oauth2?.clientSecret) params.set("client_secret", this.oauth2.clientSecret);
    const response = await fetch(tokenUrl, { method: "POST", headers, body: params.toString() });
    if (!response.ok) {
      const text = await response.text();
      throw createApiError(response.status, text ? safeJson(text) : undefined, response.headers.get("x-request-id") ?? undefined, response.headers);
    }
    const data = (await response.json()) as { access_token: string; expires_in?: number };
    this.cachedToken = data.access_token;
    this.tokenExpiresAt = Date.now() + ((data.expires_in ?? 3600) - 30) * 1000;
    return data.access_token;
  }

  private buildUrl(path: string, query: Record<string, unknown> | undefined): URL {
    const url = new URL(`${this.baseUrl}${path}`);
    for (const [key, value] of Object.entries(query ?? {})) {
      if (value === undefined || value === null) continue;
      if (Array.isArray(value)) {
        for (const item of value) url.searchParams.append(key, String(item));
      } else {
        url.searchParams.set(key, String(value));
      }
    }
    return url;
  }

  private buildHeaders(method: string, options: RequestOptions, attempt: number, streaming: boolean, bearer: string | undefined): { headers: Record<string, string>; body: BodyInit | undefined } {
    const headers: Record<string, string> = {
      accept: streaming ? "text/event-stream" : "application/json",
      ...options.headers,
    };
    if (!this.omitStainlessHeaders) {
      headers["x-stainless-lang"] = "typescript";
      headers["x-stainless-package-version"] = this.packageVersion;
      headers["x-stainless-runtime"] = "node";
      headers["x-stainless-runtime-version"] = process.version;
      headers["x-stainless-timeout"] = String((options.timeoutMs ?? this.timeoutMs) / 1000);
      headers["x-stainless-retry-count"] = String(attempt);
    }
    if (bearer) headers.authorization = this.authPrefix + bearer;
    else if (this.basicAuth) headers.authorization = this.basicAuth;

    let body: BodyInit | undefined;
    // Map idiomatic camelCase body fields to spec wire names (file/Blob values pass through).
    const outBody = options.requestType !== undefined && options.body !== undefined
      ? serialize(options.body, options.requestType)
      : options.body;
    if (options.multipart && outBody && typeof outBody === "object") {
      body = toFormData(outBody as Record<string, unknown>);
      // content-type (with boundary) is set by fetch for FormData bodies.
    } else if (options.formUrlencoded && outBody && typeof outBody === "object") {
      headers["content-type"] = "application/x-www-form-urlencoded";
      body = toFormUrlencoded(outBody as Record<string, unknown>);
    } else if (options.textBody && outBody !== undefined) {
      headers["content-type"] = "text/plain";
      body = typeof outBody === "string" ? outBody : String(outBody);
    } else if (outBody !== undefined) {
      headers["content-type"] = "application/json";
      body = JSON.stringify(outBody);
    }
    if (this.idempotencyHeader && method.toLowerCase() !== "get" && !hasHeader(headers, this.idempotencyHeader)) {
      headers[this.idempotencyHeader] = options.idempotencyKey ?? `stainless-retry-${randomId()}`;
    }
    return { headers, body };
  }

  async request<T>(method: string, path: string, options: RequestOptions = {}): Promise<T> {
    return (await this.requestRaw<T>(method, path, options)).data;
  }

  /** Like request(), but returns the parsed data alongside the raw Response. */
  async requestRaw<T>(method: string, path: string, options: RequestOptions = {}): Promise<{ data: T; response: Response }> {
    const url = this.buildUrl(path, options.query);
    let lastError: unknown;
    let bearer = await this.resolveBearer();
    let refreshed = false;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    for (let attempt = 0; attempt <= maxRetries; attempt += 1) {
      const { headers, body } = this.buildHeaders(method, options, attempt, false, bearer);
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), options.timeoutMs ?? this.timeoutMs);
      const startedAt = Date.now();
      const hookInfo = { method: method.toUpperCase(), url: url.toString(), attempt };
      this.hooks?.onRequest?.(hookInfo);
      try {
        const response = await fetch(url, { method: method.toUpperCase(), headers, body, signal: options.signal ?? controller.signal });
        clearTimeout(timeout);
        this.hooks?.onResponse?.({ ...hookInfo, status: response.status, durationMs: Date.now() - startedAt });
        if (options.binary && response.ok) {
          return { data: new Uint8Array(await response.arrayBuffer()) as T, response };
        }
        const responseText = await response.text();
        const parsed = responseText ? JSON.parse(responseText) : undefined;
        if (response.ok) {
          // Validation runs on the raw (wire-named) body before deserialization remaps keys.
          if (this.validateResponses && options.responseType && parsed !== undefined && this.validate) {
            this.validate(parsed, options.responseType);
          }
          const data = options.responseType !== undefined && parsed !== undefined
            ? deserialize<T>(parsed, options.responseType)
            : (parsed as T);
          return { data, response };
        }
        if (response.status === 401 && this.oauth2?.clientId && !refreshed) {
          refreshed = true;
          bearer = await this.getAccessToken(true);
          continue;
        }
        if (attempt < maxRetries && shouldRetryResponse(response, this.retryStatuses)) {
          await sleep(backoffMs(attempt, response.headers.get("retry-after"), response.headers.get("retry-after-ms")));
          continue;
        }
        throw createApiError(response.status, parsed, response.headers.get("x-request-id") ?? undefined, response.headers);
      } catch (error) {
        clearTimeout(timeout);
        lastError = error;
        this.hooks?.onError?.({ ...hookInfo, error });
        if (error instanceof ApiError) throw error;
        if (attempt >= maxRetries) throw error;
        await sleep(backoffMs(attempt));
      }
    }
    throw lastError;
  }

  /** Issues a request and returns a typed event stream (SSE or JSONL). Streaming requests are not retried. */
  async stream<T>(method: string, path: string, options: StreamOptions = {}): Promise<Stream<T>> {
    const url = this.buildUrl(path, options.query);
    const bearer = await this.resolveBearer();
    const { headers, body } = this.buildHeaders(method, options, 0, true, bearer);
    const controller = new AbortController();
    const response = await fetch(url, { method: method.toUpperCase(), headers, body, signal: options.signal ?? controller.signal });
    if (!response.ok) {
      const text = await response.text();
      throw createApiError(response.status, text ? safeJson(text) : undefined, response.headers.get("x-request-id") ?? undefined, response.headers);
    }
    if (!response.body) throw new ApiError(response.status, "missing response stream body");
    return new Stream<T>(response.body, options.sse ?? true, options.doneSentinel, options.responseType);
  }

  /** Opens a typed WebSocket connection to the given path. */
  connectWebSocket<ClientEvent, ServerEvent>(path: string, clientType?: string, serverType?: string): WebSocketConnection<ClientEvent, ServerEvent> {
    const wsUrl = this.baseUrl.replace(/^http/, "ws") + path;
    return new WebSocketConnection<ClientEvent, ServerEvent>(new WebSocket(wsUrl), clientType, serverType);
  }

  /** Follows an absolute URL returned by cursor_url pagination. */
  async requestAbsolute<T>(absoluteUrl: string, options: RequestOptions = {}): Promise<T> {
    const path = absoluteUrl.startsWith(this.baseUrl) ? absoluteUrl.slice(this.baseUrl.length) : new URL(absoluteUrl).pathname + new URL(absoluteUrl).search;
    return this.request<T>("get", path, options);
  }

  /** Like requestAbsolute(), but returns the raw Response too (for Link-header pagination). */
  async requestAbsoluteRaw<T>(absoluteUrl: string, options: RequestOptions = {}): Promise<{ data: T; response: Response }> {
    const path = absoluteUrl.startsWith(this.baseUrl) ? absoluteUrl.slice(this.baseUrl.length) : new URL(absoluteUrl).pathname + new URL(absoluteUrl).search;
    return this.requestRaw<T>("get", path, options);
  }

  /** Parses an RFC 5988 Link header and returns the rel="next" URL, if present. */
  nextLink(response: Response): string | undefined {
    const value = response.headers.get("link");
    if (!value) return undefined;
    for (const part of value.split(",")) {
      const match = part.match(/<([^>]+)>\s*;\s*rel="?next"?/);
      if (match) return match[1];
    }
    return undefined;
  }
}

function safeJson(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

// application/x-www-form-urlencoded with bracket notation for nested objects/arrays
// (e.g. Stripe: metadata[key]=value, items[0]=x). Mirrors common deep-form encoders.
function toFormUrlencoded(body: Record<string, unknown>): string {
  const parts: string[] = [];
  const add = (key: string, value: unknown): void => {
    if (value === undefined || value === null) return;
    if (Array.isArray(value)) value.forEach((item, index) => add(`${key}[${index}]`, item));
    else if (typeof value === "object") for (const [k, v] of Object.entries(value as Record<string, unknown>)) add(`${key}[${k}]`, v);
    else parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
  };
  for (const [key, value] of Object.entries(body)) add(key, value);
  return parts.join("&");
}

function toFormData(body: Record<string, unknown>): FormData {
  const form = new FormData();
  for (const [key, value] of Object.entries(body)) {
    if (value === undefined || value === null) continue;
    if (value instanceof Blob) form.append(key, value);
    else if (value instanceof ArrayBuffer) form.append(key, new Blob([value]));
    else if (ArrayBuffer.isView(value)) form.append(key, new Blob([value as unknown as BlobPart]));
    else if (typeof value === "object") form.append(key, JSON.stringify(value));
    else form.append(key, String(value));
  }
  return form;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function shouldRetryResponse(response: Response, retryStatuses: Set<number>): boolean {
  const shouldRetry = response.headers.get("x-should-retry")?.toLowerCase();
  if (shouldRetry === "true") return true;
  if (shouldRetry === "false") return false;
  return retryStatuses.has(response.status) || response.status >= 500;
}

function backoffMs(attempt: number, retryAfter?: string | null, retryAfterMs?: string | null): number {
  if (retryAfterMs) {
    const milliseconds = Number(retryAfterMs);
    if (Number.isFinite(milliseconds) && milliseconds >= 0 && milliseconds < 60_000) return milliseconds;
  }
  if (retryAfter) {
    const seconds = Number(retryAfter);
    if (Number.isFinite(seconds) && seconds >= 0 && seconds < 60) return seconds * 1000;
    const date = Date.parse(retryAfter);
    if (Number.isFinite(date)) {
      const delay = date - Date.now();
      if (delay >= 0 && delay < 60_000) return delay;
    }
  }
  const base = Math.min(8000, 500 * 2 ** attempt);
  return Math.round(base * (0.75 + Math.random() * 0.5));
}

function randomId(): string {
  return globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);
}

function hasHeader(headers: Record<string, string>, headerName: string): boolean {
  const normalized = headerName.toLowerCase();
  return Object.keys(headers).some((key) => key.toLowerCase() === normalized);
}
