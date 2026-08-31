import { deserialize, serialize } from "./serde.js";
export class ApiError extends Error {
    status;
    body;
    /** Value of the response's x-request-id header, for correlating with server logs. */
    requestId;
    headers;
    constructor(status, body, requestId, headers) {
        super(`API request failed with status ${status}${requestId ? ` (request id: ${requestId})` : ""}`);
        this.status = status;
        this.body = body;
        this.requestId = requestId;
        this.headers = headers;
        this.name = new.target.name;
    }
}
// Per-status error subclasses so callers can `catch`/`instanceof` specific failures.
export class BadRequestError extends ApiError {
} // 400
export class AuthenticationError extends ApiError {
} // 401
export class PermissionDeniedError extends ApiError {
} // 403
export class NotFoundError extends ApiError {
} // 404
export class ConflictError extends ApiError {
} // 409
export class UnprocessableEntityError extends ApiError {
} // 422
export class RateLimitError extends ApiError {
} // 429
export class InternalServerError extends ApiError {
} // >= 500
export function createApiError(status, body, requestId, headers) {
    switch (status) {
        case 400: return new BadRequestError(status, body, requestId, headers);
        case 401: return new AuthenticationError(status, body, requestId, headers);
        case 403: return new PermissionDeniedError(status, body, requestId, headers);
        case 404: return new NotFoundError(status, body, requestId, headers);
        case 409: return new ConflictError(status, body, requestId, headers);
        case 422: return new UnprocessableEntityError(status, body, requestId, headers);
        case 429: return new RateLimitError(status, body, requestId, headers);
    }
    if (status >= 500)
        return new InternalServerError(status, body, requestId, headers);
    return new ApiError(status, body, requestId, headers);
}
/** Async-iterable wrapper over an SSE or JSONL response body. */
export class Stream {
    body;
    sse;
    doneSentinel;
    typeName;
    constructor(body, sse, doneSentinel, typeName) {
        this.body = body;
        this.sse = sse;
        this.doneSentinel = doneSentinel;
        this.typeName = typeName;
    }
    /** Parse one event payload, mapping wire names to camelCase when the event type is known. */
    decode(raw) {
        const value = JSON.parse(raw);
        return this.typeName !== undefined ? deserialize(value, this.typeName) : value;
    }
    async *[Symbol.asyncIterator]() {
        const decoder = new TextDecoder();
        let buffer = "";
        let dataLines = [];
        for await (const chunk of this.body) {
            buffer += decoder.decode(chunk, { stream: true });
            let newlineIndex;
            while ((newlineIndex = buffer.indexOf("\n")) !== -1) {
                const line = buffer.slice(0, newlineIndex).replace(/\r$/, "");
                buffer = buffer.slice(newlineIndex + 1);
                if (this.sse) {
                    if (line === "") {
                        const event = this.flush(dataLines);
                        dataLines = [];
                        if (event === DONE)
                            return;
                        if (event !== undefined)
                            yield event;
                        continue;
                    }
                    if (line.startsWith(":"))
                        continue;
                    if (line.startsWith("data:"))
                        dataLines.push(line.slice(5).replace(/^ /, ""));
                }
                else if (line.trim() !== "") {
                    if (this.doneSentinel !== undefined && line.trim() === this.doneSentinel)
                        return;
                    yield this.decode(line);
                }
            }
        }
        if (this.sse) {
            const event = this.flush(dataLines);
            if (event !== undefined && event !== DONE)
                yield event;
        }
        else if (buffer.trim() !== "") {
            yield this.decode(buffer);
        }
    }
    flush(dataLines) {
        if (dataLines.length === 0)
            return undefined;
        const data = dataLines.join("\n");
        if (this.doneSentinel !== undefined && data === this.doneSentinel)
            return DONE;
        return this.decode(data);
    }
    listeners = { chunk: [], end: [], error: [] };
    consuming = false;
    on(event, listener) {
        this.listeners[event].push(listener);
        this.consume();
        return this;
    }
    consume() {
        if (this.consuming)
            return;
        this.consuming = true;
        // Defer so all chained .on(...) listeners register before consumption begins.
        queueMicrotask(async () => {
            try {
                for await (const value of this)
                    for (const cb of this.listeners.chunk)
                        cb(value);
                for (const cb of this.listeners.end)
                    cb();
            }
            catch (error) {
                if (this.listeners.error.length > 0)
                    for (const cb of this.listeners.error)
                        cb(error);
                else
                    throw error;
            }
        });
    }
}
const DONE = Symbol("stream.done");
/** Typed bidirectional WebSocket connection. */
export class WebSocketConnection {
    ws;
    clientType;
    serverType;
    constructor(ws, clientType, serverType) {
        this.ws = ws;
        this.clientType = clientType;
        this.serverType = serverType;
    }
    onOpen(handler) {
        this.ws.addEventListener("open", () => handler());
        return this;
    }
    onMessage(handler) {
        this.ws.addEventListener("message", (event) => {
            const data = typeof event.data === "string" ? event.data : String(event.data);
            const parsed = JSON.parse(data);
            handler((this.serverType !== undefined ? deserialize(parsed, this.serverType) : parsed));
        });
        return this;
    }
    onClose(handler) {
        this.ws.addEventListener("close", () => handler());
        return this;
    }
    send(event) {
        const payload = this.clientType !== undefined ? serialize(event, this.clientType) : event;
        this.ws.send(JSON.stringify(payload));
    }
    close() {
        this.ws.close();
    }
    get socket() {
        return this.ws;
    }
}
export class ApiClient {
    baseUrl;
    apiKey;
    timeoutMs;
    maxRetries;
    retryStatuses;
    packageVersion;
    omitStainlessHeaders;
    idempotencyHeader;
    oauth2;
    basicAuth;
    authPrefix;
    hooks;
    validateResponses;
    validate;
    cachedToken;
    tokenExpiresAt = 0;
    constructor(options) {
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
    async getAccessToken(force = false) {
        if (!this.oauth2?.clientId || !this.oauth2?.clientSecret)
            return undefined;
        if (!force && this.cachedToken && Date.now() < this.tokenExpiresAt)
            return this.cachedToken;
        const tokenUrl = this.oauth2.tokenUrl.startsWith("http") ? this.oauth2.tokenUrl : `${this.baseUrl}${this.oauth2.tokenUrl}`;
        const headers = { "content-type": "application/x-www-form-urlencoded", accept: "application/json" };
        const params = new URLSearchParams({ grant_type: "client_credentials" });
        if (this.oauth2.scopes.length)
            params.set("scope", this.oauth2.scopes.join(" "));
        if (this.oauth2.authStyle === "basic") {
            headers.authorization = "Basic " + Buffer.from(`${this.oauth2.clientId}:${this.oauth2.clientSecret}`).toString("base64");
        }
        else {
            params.set("client_id", this.oauth2.clientId);
            params.set("client_secret", this.oauth2.clientSecret);
        }
        const response = await fetch(tokenUrl, { method: "POST", headers, body: params.toString() });
        if (!response.ok)
            throw createApiError(response.status, await response.text(), response.headers.get("x-request-id") ?? undefined, response.headers);
        const data = (await response.json());
        this.cachedToken = data.access_token;
        this.tokenExpiresAt = Date.now() + ((data.expires_in ?? 3600) - 30) * 1000;
        return this.cachedToken;
    }
    async resolveBearer() {
        if (this.oauth2?.clientId && this.oauth2?.clientSecret)
            return this.getAccessToken();
        return this.apiKey;
    }
    /** OAuth2 authorization-code flow: build the URL to send the user to for consent. */
    authorizationUrl(redirectUri, options = {}) {
        if (!this.oauth2?.authorizationUrl)
            throw new ApiError(0, "authorization_url is not configured");
        const base = this.oauth2.authorizationUrl.startsWith("http") ? this.oauth2.authorizationUrl : `${this.baseUrl}${this.oauth2.authorizationUrl}`;
        const url = new URL(base);
        url.searchParams.set("response_type", "code");
        if (this.oauth2.clientId)
            url.searchParams.set("client_id", this.oauth2.clientId);
        url.searchParams.set("redirect_uri", redirectUri);
        const scopes = options.scopes ?? this.oauth2.scopes;
        if (scopes.length)
            url.searchParams.set("scope", scopes.join(" "));
        if (options.state)
            url.searchParams.set("state", options.state);
        return url.toString();
    }
    /** OAuth2 authorization-code flow: exchange the returned code for an access token (cached as the bearer). */
    async exchangeCode(code, redirectUri) {
        return this.oauthTokenRequest({ grant_type: "authorization_code", code, redirect_uri: redirectUri });
    }
    /** OAuth2 device flow: request a device + user code from the authorization server. */
    async requestDeviceCode() {
        if (!this.oauth2?.deviceAuthorizationUrl)
            throw new ApiError(0, "device_authorization_url is not configured");
        const url = this.oauth2.deviceAuthorizationUrl.startsWith("http") ? this.oauth2.deviceAuthorizationUrl : `${this.baseUrl}${this.oauth2.deviceAuthorizationUrl}`;
        const params = new URLSearchParams();
        if (this.oauth2.clientId)
            params.set("client_id", this.oauth2.clientId);
        if (this.oauth2.scopes.length)
            params.set("scope", this.oauth2.scopes.join(" "));
        const response = await fetch(url, { method: "POST", headers: { "content-type": "application/x-www-form-urlencoded", accept: "application/json" }, body: params.toString() });
        if (!response.ok)
            throw createApiError(response.status, await response.text(), response.headers.get("x-request-id") ?? undefined, response.headers);
        return (await response.json());
    }
    /** OAuth2 device flow: poll the token endpoint until the user authorizes (or it errors). */
    async pollDeviceToken(deviceCode, intervalSeconds = 5) {
        for (;;) {
            try {
                return await this.oauthTokenRequest({ grant_type: "urn:ietf:params:oauth:grant-type:device_code", device_code: deviceCode });
            }
            catch (error) {
                const body = error instanceof ApiError ? error.body : undefined;
                const code = body && typeof body === "object" ? body.error : undefined;
                if (code === "authorization_pending" || code === "slow_down") {
                    await sleep(intervalSeconds * 1000);
                    continue;
                }
                throw error;
            }
        }
    }
    async oauthTokenRequest(extra) {
        const tokenUrl = this.oauth2.tokenUrl.startsWith("http") ? this.oauth2.tokenUrl : `${this.baseUrl}${this.oauth2.tokenUrl}`;
        const headers = { "content-type": "application/x-www-form-urlencoded", accept: "application/json" };
        const params = new URLSearchParams(extra);
        if (this.oauth2?.clientId)
            params.set("client_id", this.oauth2.clientId);
        if (this.oauth2?.clientSecret)
            params.set("client_secret", this.oauth2.clientSecret);
        const response = await fetch(tokenUrl, { method: "POST", headers, body: params.toString() });
        if (!response.ok) {
            const text = await response.text();
            throw createApiError(response.status, text ? safeJson(text) : undefined, response.headers.get("x-request-id") ?? undefined, response.headers);
        }
        const data = (await response.json());
        this.cachedToken = data.access_token;
        this.tokenExpiresAt = Date.now() + ((data.expires_in ?? 3600) - 30) * 1000;
        return data.access_token;
    }
    buildUrl(path, query) {
        const url = new URL(`${this.baseUrl}${path}`);
        for (const [key, value] of Object.entries(query ?? {})) {
            if (value === undefined || value === null)
                continue;
            if (Array.isArray(value)) {
                for (const item of value)
                    url.searchParams.append(key, String(item));
            }
            else {
                url.searchParams.set(key, String(value));
            }
        }
        return url;
    }
    buildHeaders(method, options, attempt, streaming, bearer) {
        const headers = {
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
        if (bearer)
            headers.authorization = this.authPrefix + bearer;
        else if (this.basicAuth)
            headers.authorization = this.basicAuth;
        let body;
        // Map idiomatic camelCase body fields to spec wire names (file/Blob values pass through).
        const outBody = options.requestType !== undefined && options.body !== undefined
            ? serialize(options.body, options.requestType)
            : options.body;
        if (options.multipart && outBody && typeof outBody === "object") {
            body = toFormData(outBody);
            // content-type (with boundary) is set by fetch for FormData bodies.
        }
        else if (options.formUrlencoded && outBody && typeof outBody === "object") {
            headers["content-type"] = "application/x-www-form-urlencoded";
            body = toFormUrlencoded(outBody);
        }
        else if (options.textBody && outBody !== undefined) {
            headers["content-type"] = "text/plain";
            body = typeof outBody === "string" ? outBody : String(outBody);
        }
        else if (outBody !== undefined) {
            headers["content-type"] = "application/json";
            body = JSON.stringify(outBody);
        }
        if (this.idempotencyHeader && method.toLowerCase() !== "get" && !hasHeader(headers, this.idempotencyHeader)) {
            headers[this.idempotencyHeader] = options.idempotencyKey ?? `stainless-retry-${randomId()}`;
        }
        return { headers, body };
    }
    async request(method, path, options = {}) {
        return (await this.requestRaw(method, path, options)).data;
    }
    /** Like request(), but returns the parsed data alongside the raw Response. */
    async requestRaw(method, path, options = {}) {
        const url = this.buildUrl(path, options.query);
        let lastError;
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
                    return { data: new Uint8Array(await response.arrayBuffer()), response };
                }
                const responseText = await response.text();
                const parsed = responseText ? JSON.parse(responseText) : undefined;
                if (response.ok) {
                    // Validation runs on the raw (wire-named) body before deserialization remaps keys.
                    if (this.validateResponses && options.responseType && parsed !== undefined && this.validate) {
                        this.validate(parsed, options.responseType);
                    }
                    const data = options.responseType !== undefined && parsed !== undefined
                        ? deserialize(parsed, options.responseType)
                        : parsed;
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
            }
            catch (error) {
                clearTimeout(timeout);
                lastError = error;
                this.hooks?.onError?.({ ...hookInfo, error });
                if (error instanceof ApiError)
                    throw error;
                if (attempt >= maxRetries)
                    throw error;
                await sleep(backoffMs(attempt));
            }
        }
        throw lastError;
    }
    /** Issues a request and returns a typed event stream (SSE or JSONL). Streaming requests are not retried. */
    async stream(method, path, options = {}) {
        const url = this.buildUrl(path, options.query);
        const bearer = await this.resolveBearer();
        const { headers, body } = this.buildHeaders(method, options, 0, true, bearer);
        const controller = new AbortController();
        const response = await fetch(url, { method: method.toUpperCase(), headers, body, signal: options.signal ?? controller.signal });
        if (!response.ok) {
            const text = await response.text();
            throw createApiError(response.status, text ? safeJson(text) : undefined, response.headers.get("x-request-id") ?? undefined, response.headers);
        }
        if (!response.body)
            throw new ApiError(response.status, "missing response stream body");
        return new Stream(response.body, options.sse ?? true, options.doneSentinel, options.responseType);
    }
    /** Opens a typed WebSocket connection to the given path. */
    connectWebSocket(path, clientType, serverType) {
        const wsUrl = this.baseUrl.replace(/^http/, "ws") + path;
        return new WebSocketConnection(new WebSocket(wsUrl), clientType, serverType);
    }
    /** Follows an absolute URL returned by cursor_url pagination. */
    async requestAbsolute(absoluteUrl, options = {}) {
        const path = absoluteUrl.startsWith(this.baseUrl) ? absoluteUrl.slice(this.baseUrl.length) : new URL(absoluteUrl).pathname + new URL(absoluteUrl).search;
        return this.request("get", path, options);
    }
    /** Like requestAbsolute(), but returns the raw Response too (for Link-header pagination). */
    async requestAbsoluteRaw(absoluteUrl, options = {}) {
        const path = absoluteUrl.startsWith(this.baseUrl) ? absoluteUrl.slice(this.baseUrl.length) : new URL(absoluteUrl).pathname + new URL(absoluteUrl).search;
        return this.requestRaw("get", path, options);
    }
    /** Parses an RFC 5988 Link header and returns the rel="next" URL, if present. */
    nextLink(response) {
        const value = response.headers.get("link");
        if (!value)
            return undefined;
        for (const part of value.split(",")) {
            const match = part.match(/<([^>]+)>\s*;\s*rel="?next"?/);
            if (match)
                return match[1];
        }
        return undefined;
    }
}
function safeJson(text) {
    try {
        return JSON.parse(text);
    }
    catch {
        return text;
    }
}
// application/x-www-form-urlencoded with bracket notation for nested objects/arrays
// (e.g. Stripe: metadata[key]=value, items[0]=x). Mirrors common deep-form encoders.
function toFormUrlencoded(body) {
    const parts = [];
    const add = (key, value) => {
        if (value === undefined || value === null)
            return;
        if (Array.isArray(value))
            value.forEach((item, index) => add(`${key}[${index}]`, item));
        else if (typeof value === "object")
            for (const [k, v] of Object.entries(value))
                add(`${key}[${k}]`, v);
        else
            parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
    };
    for (const [key, value] of Object.entries(body))
        add(key, value);
    return parts.join("&");
}
function toFormData(body) {
    const form = new FormData();
    for (const [key, value] of Object.entries(body)) {
        if (value === undefined || value === null)
            continue;
        if (value instanceof Blob)
            form.append(key, value);
        else if (value instanceof ArrayBuffer)
            form.append(key, new Blob([value]));
        else if (ArrayBuffer.isView(value))
            form.append(key, new Blob([value]));
        else if (typeof value === "object")
            form.append(key, JSON.stringify(value));
        else
            form.append(key, String(value));
    }
    return form;
}
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
function shouldRetryResponse(response, retryStatuses) {
    const shouldRetry = response.headers.get("x-should-retry")?.toLowerCase();
    if (shouldRetry === "true")
        return true;
    if (shouldRetry === "false")
        return false;
    return retryStatuses.has(response.status) || response.status >= 500;
}
function backoffMs(attempt, retryAfter, retryAfterMs) {
    if (retryAfterMs) {
        const milliseconds = Number(retryAfterMs);
        if (Number.isFinite(milliseconds) && milliseconds >= 0 && milliseconds < 60_000)
            return milliseconds;
    }
    if (retryAfter) {
        const seconds = Number(retryAfter);
        if (Number.isFinite(seconds) && seconds >= 0 && seconds < 60)
            return seconds * 1000;
        const date = Date.parse(retryAfter);
        if (Number.isFinite(date)) {
            const delay = date - Date.now();
            if (delay >= 0 && delay < 60_000)
                return delay;
        }
    }
    const base = Math.min(8000, 500 * 2 ** attempt);
    return Math.round(base * (0.75 + Math.random() * 0.5));
}
function randomId() {
    return globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);
}
function hasHeader(headers, headerName) {
    const normalized = headerName.toLowerCase();
    return Object.keys(headers).some((key) => key.toLowerCase() === normalized);
}
