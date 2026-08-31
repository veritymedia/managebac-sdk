import type { ApiClient, RequestOptions } from "../core.js";
import type { BehaviorNotesListBehaviorNotesResponse } from "../types/behavior_notes_list_behavior_notes_response.js";
export interface BehaviorNotesListBehaviorNotesParams {
    modifiedSince?: string;
    page?: string;
    perPage?: string;
    studentIds?: number[];
}
export declare class BehaviorNotesResource {
    private readonly client;
    constructor(client: ApiClient);
    listBehaviorNotes(params?: BehaviorNotesListBehaviorNotesParams, options?: RequestOptions): Promise<BehaviorNotesListBehaviorNotesResponse>;
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse(): {
        listBehaviorNotes: (params?: BehaviorNotesListBehaviorNotesParams, options?: RequestOptions) => Promise<{
            data: BehaviorNotesListBehaviorNotesResponse;
            response: globalThis.Response;
        }>;
    };
}
