import type { ApiClient, RequestOptions } from "../core.js";
import type { UnitClassAssignmentsListUnitClassAssignmentsResponse } from "../types/unit_class_assignments_list_unit_class_assignments_response.js";
export interface UnitClassAssignmentsListUnitClassAssignmentsParams {
    modifiedSince?: string;
    deletedSince?: string;
    archived?: boolean;
    page?: number;
    perPage?: number;
}
export declare class UnitClassAssignmentsResource {
    private readonly client;
    constructor(client: ApiClient);
    listUnitClassAssignments(params?: UnitClassAssignmentsListUnitClassAssignmentsParams, options?: RequestOptions): Promise<UnitClassAssignmentsListUnitClassAssignmentsResponse>;
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse(): {
        listUnitClassAssignments: (params?: UnitClassAssignmentsListUnitClassAssignmentsParams, options?: RequestOptions) => Promise<{
            data: UnitClassAssignmentsListUnitClassAssignmentsResponse;
            response: globalThis.Response;
        }>;
    };
}
