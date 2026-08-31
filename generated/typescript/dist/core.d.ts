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
export declare class ApiError extends Error {
    readonly status: number;
    readonly body: unknown;
    /** Value of the response's x-request-id header, for correlating with server logs. */
    readonly requestId?: string;
    readonly headers?: Headers;
    constructor(status: number, body: unknown, requestId?: string, headers?: Headers);
}
export declare class BadRequestError extends ApiError {
}
export declare class AuthenticationError extends ApiError {
}
export declare class PermissionDeniedError extends ApiError {
}
export declare class NotFoundError extends ApiError {
}
export declare class ConflictError extends ApiError {
}
export declare class UnprocessableEntityError extends ApiError {
}
export declare class RateLimitError extends ApiError {
}
export declare class InternalServerError extends ApiError {
}
export declare function createApiError(status: number, body: unknown, requestId?: string, headers?: Headers): ApiError;
/** Async-iterable wrapper over an SSE or JSONL response body. */
export declare class Stream<T> implements AsyncIterable<T> {
    private readonly body;
    private readonly sse;
    private readonly doneSentinel?;
    private readonly typeName?;
    constructor(body: ReadableStream<Uint8Array>, sse: boolean, doneSentinel?: string | undefined, typeName?: string | undefined);
    /** Parse one event payload, mapping wire names to camelCase when the event type is known. */
    private decode;
    [Symbol.asyncIterator](): AsyncIterator<T>;
    private flush;
    private readonly listeners;
    private consuming;
    /** Event-emitter API over the stream. Use this OR async iteration, not both. Chainable. */
    on(event: "chunk", listener: (value: T) => void): this;
    on(event: "end", listener: () => void): this;
    on(event: "error", listener: (error: unknown) => void): this;
    private consume;
}
/** Typed bidirectional WebSocket connection. */
export declare class WebSocketConnection<ClientEvent, ServerEvent> {
    private readonly ws;
    private readonly clientType?;
    private readonly serverType?;
    constructor(ws: WebSocket, clientType?: string | undefined, serverType?: string | undefined);
    onOpen(handler: () => void): this;
    onMessage(handler: (event: ServerEvent) => void): this;
    onClose(handler: () => void): this;
    send(event: ClientEvent): void;
    close(): void;
    get socket(): WebSocket;
}
export declare class ApiClient {
    private readonly baseUrl;
    private readonly apiKey?;
    private readonly timeoutMs;
    private readonly maxRetries;
    private readonly retryStatuses;
    private readonly packageVersion;
    private readonly omitStainlessHeaders;
    private readonly idempotencyHeader?;
    private readonly oauth2?;
    private readonly basicAuth?;
    private readonly authPrefix;
    private readonly hooks?;
    private readonly validateResponses;
    private readonly validate?;
    private cachedToken?;
    private tokenExpiresAt;
    constructor(options: Required<Pick<ClientOptions, "baseUrl" | "timeoutMs" | "maxRetries" | "retryStatuses">> & Pick<ClientOptions, "apiKey" | "packageVersion" | "omitStainlessHeaders" | "idempotencyHeader" | "hooks"> & {
        oauth2?: OAuth2Config;
        basicAuth?: string;
        authPrefix?: string;
        validateResponses?: boolean;
        validate?: (value: unknown, typeName: string) => void;
    });
    /** OAuth2 client-credentials: fetch, cache, and refresh the bearer token. */
    private getAccessToken;
    private resolveBearer;
    /** OAuth2 authorization-code flow: build the URL to send the user to for consent. */
    authorizationUrl(redirectUri: string, options?: {
        state?: string;
        scopes?: string[];
    }): string;
    /** OAuth2 authorization-code flow: exchange the returned code for an access token (cached as the bearer). */
    exchangeCode(code: string, redirectUri: string): Promise<string>;
    /** OAuth2 device flow: request a device + user code from the authorization server. */
    requestDeviceCode(): Promise<DeviceCodeResponse>;
    /** OAuth2 device flow: poll the token endpoint until the user authorizes (or it errors). */
    pollDeviceToken(deviceCode: string, intervalSeconds?: number): Promise<string>;
    private oauthTokenRequest;
    private buildUrl;
    private buildHeaders;
    request<T>(method: string, path: string, options?: RequestOptions): Promise<T>;
    /** Like request(), but returns the parsed data alongside the raw Response. */
    requestRaw<T>(method: string, path: string, options?: RequestOptions): Promise<{
        data: T;
        response: Response;
    }>;
    /** Issues a request and returns a typed event stream (SSE or JSONL). Streaming requests are not retried. */
    stream<T>(method: string, path: string, options?: StreamOptions): Promise<Stream<T>>;
    /** Opens a typed WebSocket connection to the given path. */
    connectWebSocket<ClientEvent, ServerEvent>(path: string, clientType?: string, serverType?: string): WebSocketConnection<ClientEvent, ServerEvent>;
    /** Follows an absolute URL returned by cursor_url pagination. */
    requestAbsolute<T>(absoluteUrl: string, options?: RequestOptions): Promise<T>;
    /** Like requestAbsolute(), but returns the raw Response too (for Link-header pagination). */
    requestAbsoluteRaw<T>(absoluteUrl: string, options?: RequestOptions): Promise<{
        data: T;
        response: Response;
    }>;
    /** Parses an RFC 5988 Link header and returns the rel="next" URL, if present. */
    nextLink(response: Response): string | undefined;
}
