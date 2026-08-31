import type { ApiClient, RequestOptions } from "../core.js";
import type { ParentsListParentsResponse } from "../types/parents_list_parents_response.js";
import type { ParentsCreateParentRequest } from "../types/parents_create_parent_request.js";
import type { ParentsCreateParentResponse } from "../types/parents_create_parent_response.js";
import type { ParentsGetParentByIdResponse } from "../types/parents_get_parent_by_id_response.js";
import type { ParentsUpdateParentRequest } from "../types/parents_update_parent_request.js";
import type { ParentsUpdateParentResponse } from "../types/parents_update_parent_response.js";
export interface ParentsListParentsParams {
    ids?: number[];
    archived?: boolean;
    modifiedSince?: string;
    page?: string;
    perPage?: string;
    deletedSince?: string;
    q?: string;
}
export interface ParentsCreateParentParams {
    body?: ParentsCreateParentRequest;
}
export interface ParentsUpdateParentParams {
    id: number;
    body?: ParentsUpdateParentRequest;
}
export declare class ParentsResource {
    private readonly client;
    constructor(client: ApiClient);
    listParents(params?: ParentsListParentsParams, options?: RequestOptions): Promise<ParentsListParentsResponse>;
    createParent(params?: ParentsCreateParentParams, options?: RequestOptions): Promise<ParentsCreateParentResponse>;
    getParentById(id: number, options?: RequestOptions): Promise<ParentsGetParentByIdResponse>;
    updateParent(params: ParentsUpdateParentParams, options?: RequestOptions): Promise<ParentsUpdateParentResponse>;
    archiveParent(id: number, options?: RequestOptions): Promise<unknown>;
    unarchiveParent(id: number, options?: RequestOptions): Promise<unknown>;
    sendParentWelcomeEmail(id: number, options?: RequestOptions): Promise<unknown>;
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse(): {
        listParents: (params?: ParentsListParentsParams, options?: RequestOptions) => Promise<{
            data: ParentsListParentsResponse;
            response: globalThis.Response;
        }>;
        createParent: (params?: ParentsCreateParentParams, options?: RequestOptions) => Promise<{
            data: ParentsCreateParentResponse;
            response: globalThis.Response;
        }>;
        getParentById: (id: number, options?: RequestOptions) => Promise<{
            data: ParentsGetParentByIdResponse;
            response: globalThis.Response;
        }>;
        updateParent: (params: ParentsUpdateParentParams, options?: RequestOptions) => Promise<{
            data: ParentsUpdateParentResponse;
            response: globalThis.Response;
        }>;
        archiveParent: (id: number, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        unarchiveParent: (id: number, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        sendParentWelcomeEmail: (id: number, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
    };
}
