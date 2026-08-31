import type { ApiClient, RequestOptions } from "../core.js";
export declare class UtilitiesResource {
    private readonly client;
    constructor(client: ApiClient);
    showAvatarById(id: number, options?: RequestOptions): Promise<unknown>;
    ping(options?: RequestOptions): Promise<unknown>;
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse(): {
        showAvatarById: (id: number, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        ping: (options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
    };
}
