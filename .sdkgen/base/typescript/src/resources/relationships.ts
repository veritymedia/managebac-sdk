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

export class RelationshipsResource {

  constructor(private readonly client: ApiClient) {

  }

  async listOfParentChildrenRelationships(params: RelationshipsListOfParentChildrenRelationshipsParams, options: RequestOptions = {}): Promise<RelationshipsListOfParentChildrenRelationshipsResponse> {
    return this.client.request<RelationshipsListOfParentChildrenRelationshipsResponse>("get", `/v2p3/parents/${encodeURIComponent(String(params.parentId))}/children`, {
      ...options,
      query: {
        "page": params.page,
        "per_page": params.perPage,
      },
      body: undefined,
      responseType: "RelationshipsListOfParentChildrenRelationshipsResponse",
    });
  }

  async createParentChildRelationship(params: RelationshipsCreateParentChildRelationshipParams, options: RequestOptions = {}): Promise<RelationshipsCreateParentChildRelationshipResponse> {
    return this.client.request<RelationshipsCreateParentChildRelationshipResponse>("post", `/v2p3/parents/${encodeURIComponent(String(params.parentId))}/children`, {
      ...options,
      query: undefined,
      body: params.body,
      responseType: "RelationshipsCreateParentChildRelationshipResponse",
      requestType: "RelationshipsCreateParentChildRelationshipRequest",
    });
  }

  async bulkUpdateParentChildrenRelationships(params: RelationshipsBulkUpdateParentChildrenRelationshipsParams, options: RequestOptions = {}): Promise<RelationshipsBulkUpdateParentChildrenRelationshipsResponse> {
    return this.client.request<RelationshipsBulkUpdateParentChildrenRelationshipsResponse>("put", `/v2p3/parents/${encodeURIComponent(String(params.parentId))}/children`, {
      ...options,
      query: undefined,
      body: params.body,
      responseType: "RelationshipsBulkUpdateParentChildrenRelationshipsResponse",
      requestType: "RelationshipsBulkUpdateParentChildrenRelationshipsRequest",
    });
  }

  async getParentChildRelationship(params: RelationshipsGetParentChildRelationshipParams, options: RequestOptions = {}): Promise<RelationshipsGetParentChildRelationshipResponse> {
    return this.client.request<RelationshipsGetParentChildRelationshipResponse>("get", `/v2p3/parents/${encodeURIComponent(String(params.parentId))}/children/${encodeURIComponent(String(params.id))}`, {
      ...options,
      query: undefined,
      body: undefined,
      responseType: "RelationshipsGetParentChildRelationshipResponse",
    });
  }

  async updateParentChildRelationship(params: RelationshipsUpdateParentChildRelationshipParams, options: RequestOptions = {}): Promise<RelationshipsUpdateParentChildRelationshipResponse> {
    return this.client.request<RelationshipsUpdateParentChildRelationshipResponse>("put", `/v2p3/parents/${encodeURIComponent(String(params.parentId))}/children/${encodeURIComponent(String(params.id))}`, {
      ...options,
      query: undefined,
      body: params.body,
      responseType: "RelationshipsUpdateParentChildRelationshipResponse",
      requestType: "RelationshipsUpdateParentChildRelationshipRequest",
    });
  }

  async deleteParentChildRelationship(params: RelationshipsDeleteParentChildRelationshipParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("delete", `/v2p3/parents/${encodeURIComponent(String(params.parentId))}/children/${encodeURIComponent(String(params.id))}`, {
      ...options,
      query: undefined,
      body: undefined,
    });
  }

  /** Same methods, returning { data, response } with the raw HTTP Response. */
  get withRawResponse() {
    return {
      listOfParentChildrenRelationships: (params: RelationshipsListOfParentChildrenRelationshipsParams, options: RequestOptions = {}): Promise<{ data: RelationshipsListOfParentChildrenRelationshipsResponse; response: globalThis.Response }> =>
        this.client.requestRaw<RelationshipsListOfParentChildrenRelationshipsResponse>("get", `/v2p3/parents/${encodeURIComponent(String(params.parentId))}/children`, { ...options, query: {
      "page": params.page,
      "per_page": params.perPage,
    }, body: undefined, responseType: "RelationshipsListOfParentChildrenRelationshipsResponse", }),
      createParentChildRelationship: (params: RelationshipsCreateParentChildRelationshipParams, options: RequestOptions = {}): Promise<{ data: RelationshipsCreateParentChildRelationshipResponse; response: globalThis.Response }> =>
        this.client.requestRaw<RelationshipsCreateParentChildRelationshipResponse>("post", `/v2p3/parents/${encodeURIComponent(String(params.parentId))}/children`, { ...options, query: undefined, body: params.body, responseType: "RelationshipsCreateParentChildRelationshipResponse", requestType: "RelationshipsCreateParentChildRelationshipRequest", }),
      bulkUpdateParentChildrenRelationships: (params: RelationshipsBulkUpdateParentChildrenRelationshipsParams, options: RequestOptions = {}): Promise<{ data: RelationshipsBulkUpdateParentChildrenRelationshipsResponse; response: globalThis.Response }> =>
        this.client.requestRaw<RelationshipsBulkUpdateParentChildrenRelationshipsResponse>("put", `/v2p3/parents/${encodeURIComponent(String(params.parentId))}/children`, { ...options, query: undefined, body: params.body, responseType: "RelationshipsBulkUpdateParentChildrenRelationshipsResponse", requestType: "RelationshipsBulkUpdateParentChildrenRelationshipsRequest", }),
      getParentChildRelationship: (params: RelationshipsGetParentChildRelationshipParams, options: RequestOptions = {}): Promise<{ data: RelationshipsGetParentChildRelationshipResponse; response: globalThis.Response }> =>
        this.client.requestRaw<RelationshipsGetParentChildRelationshipResponse>("get", `/v2p3/parents/${encodeURIComponent(String(params.parentId))}/children/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: undefined, responseType: "RelationshipsGetParentChildRelationshipResponse", }),
      updateParentChildRelationship: (params: RelationshipsUpdateParentChildRelationshipParams, options: RequestOptions = {}): Promise<{ data: RelationshipsUpdateParentChildRelationshipResponse; response: globalThis.Response }> =>
        this.client.requestRaw<RelationshipsUpdateParentChildRelationshipResponse>("put", `/v2p3/parents/${encodeURIComponent(String(params.parentId))}/children/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: params.body, responseType: "RelationshipsUpdateParentChildRelationshipResponse", requestType: "RelationshipsUpdateParentChildRelationshipRequest", }),
      deleteParentChildRelationship: (params: RelationshipsDeleteParentChildRelationshipParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("delete", `/v2p3/parents/${encodeURIComponent(String(params.parentId))}/children/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: undefined, }),
    };
  }

}
