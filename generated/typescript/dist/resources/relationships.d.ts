import type { ApiClient, RequestOptions } from "../core.js";
import type { RelationshipsListOfParentChildrenRelationshipsResponse } from "../types/relationships_list_of_parent_children_relationships_response.js";
import type { RelationshipsCreateParentChildRelationshipRequest } from "../types/relationships_create_parent_child_relationship_request.js";
import type { RelationshipsCreateParentChildRelationshipResponse } from "../types/relationships_create_parent_child_relationship_response.js";
import type { RelationshipsBulkUpdateParentChildrenRelationshipsRequest } from "../types/relationships_bulk_update_parent_children_relationships_request.js";
import type { RelationshipsBulkUpdateParentChildrenRelationshipsResponse } from "../types/relationships_bulk_update_parent_children_relationships_response.js";
import type { RelationshipsGetParentChildRelationshipResponse } from "../types/relationships_get_parent_child_relationship_response.js";
import type { RelationshipsUpdateParentChildRelationshipRequest } from "../types/relationships_update_parent_child_relationship_request.js";
import type { RelationshipsUpdateParentChildRelationshipResponse } from "../types/relationships_update_parent_child_relationship_response.js";
export interface RelationshipsListOfParentChildrenRelationshipsParams {
    parentId: string;
    page?: string;
    perPage?: string;
}
export interface RelationshipsCreateParentChildRelationshipParams {
    parentId: string;
    body?: RelationshipsCreateParentChildRelationshipRequest;
}
export interface RelationshipsBulkUpdateParentChildrenRelationshipsParams {
    parentId: string;
    body?: RelationshipsBulkUpdateParentChildrenRelationshipsRequest;
}
export interface RelationshipsGetParentChildRelationshipParams {
    parentId: string;
    id: string;
}
export interface RelationshipsUpdateParentChildRelationshipParams {
    parentId: string;
    id: string;
    body?: RelationshipsUpdateParentChildRelationshipRequest;
}
export interface RelationshipsDeleteParentChildRelationshipParams {
    parentId: string;
    id: string;
}
export declare class RelationshipsResource {
    private readonly client;
    constructor(client: ApiClient);
    listOfParentChildrenRelationships(params: RelationshipsListOfParentChildrenRelationshipsParams, options?: RequestOptions): Promise<RelationshipsListOfParentChildrenRelationshipsResponse>;
    createParentChildRelationship(params: RelationshipsCreateParentChildRelationshipParams, options?: RequestOptions): Promise<RelationshipsCreateParentChildRelationshipResponse>;
    bulkUpdateParentChildrenRelationships(params: RelationshipsBulkUpdateParentChildrenRelationshipsParams, options?: RequestOptions): Promise<RelationshipsBulkUpdateParentChildrenRelationshipsResponse>;
    getParentChildRelationship(params: RelationshipsGetParentChildRelationshipParams, options?: RequestOptions): Promise<RelationshipsGetParentChildRelationshipResponse>;
    updateParentChildRelationship(params: RelationshipsUpdateParentChildRelationshipParams, options?: RequestOptions): Promise<RelationshipsUpdateParentChildRelationshipResponse>;
    deleteParentChildRelationship(params: RelationshipsDeleteParentChildRelationshipParams, options?: RequestOptions): Promise<unknown>;
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse(): {
        listOfParentChildrenRelationships: (params: RelationshipsListOfParentChildrenRelationshipsParams, options?: RequestOptions) => Promise<{
            data: RelationshipsListOfParentChildrenRelationshipsResponse;
            response: globalThis.Response;
        }>;
        createParentChildRelationship: (params: RelationshipsCreateParentChildRelationshipParams, options?: RequestOptions) => Promise<{
            data: RelationshipsCreateParentChildRelationshipResponse;
            response: globalThis.Response;
        }>;
        bulkUpdateParentChildrenRelationships: (params: RelationshipsBulkUpdateParentChildrenRelationshipsParams, options?: RequestOptions) => Promise<{
            data: RelationshipsBulkUpdateParentChildrenRelationshipsResponse;
            response: globalThis.Response;
        }>;
        getParentChildRelationship: (params: RelationshipsGetParentChildRelationshipParams, options?: RequestOptions) => Promise<{
            data: RelationshipsGetParentChildRelationshipResponse;
            response: globalThis.Response;
        }>;
        updateParentChildRelationship: (params: RelationshipsUpdateParentChildRelationshipParams, options?: RequestOptions) => Promise<{
            data: RelationshipsUpdateParentChildRelationshipResponse;
            response: globalThis.Response;
        }>;
        deleteParentChildRelationship: (params: RelationshipsDeleteParentChildRelationshipParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
    };
}
