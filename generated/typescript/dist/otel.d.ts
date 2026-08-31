import type { ClientHooks } from "./core.js";
export interface OtelSpan {
    setAttribute(key: string, value: string | number | boolean): void;
    setStatus(status: {
        code: number;
        message?: string;
    }): void;
    recordException?(error: unknown): void;
    end(): void;
}
export interface OtelTracer {
    startSpan(name: string, options?: {
        kind?: number;
    }): OtelSpan;
}
export declare function createOtelHooks(tracer: OtelTracer): ClientHooks;
