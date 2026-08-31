const SPAN_KIND_CLIENT = 3; // SpanKind.CLIENT
const STATUS_ERROR = 2; // SpanStatusCode.ERROR
export function createOtelHooks(tracer) {
    const spans = new Map();
    const key = (method, url, attempt) => `${method} ${url} #${attempt}`;
    return {
        onRequest(info) {
            let host = "";
            let port;
            let full = info.url;
            try {
                const parsed = new URL(info.url);
                host = parsed.hostname;
                port = parsed.port ? Number(parsed.port) : undefined;
                full = parsed.href;
            }
            catch {
                // leave defaults when the URL is not absolute
            }
            const span = tracer.startSpan(info.method, { kind: SPAN_KIND_CLIENT });
            span.setAttribute("http.request.method", info.method);
            span.setAttribute("url.full", full);
            if (host)
                span.setAttribute("server.address", host);
            if (port !== undefined)
                span.setAttribute("server.port", port);
            if (info.attempt > 0)
                span.setAttribute("http.request.resend_count", info.attempt);
            spans.set(key(info.method, info.url, info.attempt), span);
        },
        onResponse(info) {
            const span = spans.get(key(info.method, info.url, info.attempt));
            if (!span)
                return;
            span.setAttribute("http.response.status_code", info.status);
            if (info.status >= 400)
                span.setStatus({ code: STATUS_ERROR });
            span.end();
            spans.delete(key(info.method, info.url, info.attempt));
        },
        onError(info) {
            const span = spans.get(key(info.method, info.url, info.attempt));
            if (!span)
                return;
            span.setAttribute("error.type", info.error instanceof Error ? info.error.name : "error");
            span.setStatus({ code: STATUS_ERROR, message: info.error instanceof Error ? info.error.message : String(info.error) });
            span.recordException?.(info.error);
            span.end();
            spans.delete(key(info.method, info.url, info.attempt));
        },
    };
}
