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

export class ParentsResource {

  constructor(private readonly client: ApiClient) {

  }

  async listParents(params: ParentsListParentsParams = {}, options: RequestOptions = {}): Promise<ParentsListParentsResponse> {
    return this.client.request<ParentsListParentsResponse>("get", "/v2p3/parents", {
      ...options,
      query: {
        "ids[]": params.ids,
        "archived": params.archived,
        "modified_since": params.modifiedSince,
        "page": params.page,
        "per_page": params.perPage,
        "deleted_since": params.deletedSince,
        "q": params.q,
      },
      body: undefined,
      responseType: "ParentsListParentsResponse",
    });
  }

  async createParent(params: ParentsCreateParentParams = {}, options: RequestOptions = {}): Promise<ParentsCreateParentResponse> {
    return this.client.request<ParentsCreateParentResponse>("post", "/v2p3/parents", {
      ...options,
      query: undefined,
      body: params.body,
      responseType: "ParentsCreateParentResponse",
      requestType: "ParentsCreateParentRequest",
    });
  }

  async getParentById(id: number, options: RequestOptions = {}): Promise<ParentsGetParentByIdResponse> {
    return this.client.request<ParentsGetParentByIdResponse>("get", `/v2p3/parents/${encodeURIComponent(String(id))}`, {
      ...options,
      query: undefined,
      body: undefined,
      responseType: "ParentsGetParentByIdResponse",
    });
  }

  async updateParent(params: ParentsUpdateParentParams, options: RequestOptions = {}): Promise<ParentsUpdateParentResponse> {
    return this.client.request<ParentsUpdateParentResponse>("patch", `/v2p3/parents/${encodeURIComponent(String(params.id))}`, {
      ...options,
      query: undefined,
      body: params.body,
      responseType: "ParentsUpdateParentResponse",
      requestType: "ParentsUpdateParentRequest",
    });
  }

  async archiveParent(id: number, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("put", `/v2p3/parents/${encodeURIComponent(String(id))}/archive`, {
      ...options,
      query: undefined,
      body: undefined,
    });
  }

  async unarchiveParent(id: number, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("put", `/v2p3/parents/${encodeURIComponent(String(id))}/unarchive`, {
      ...options,
      query: undefined,
      body: undefined,
    });
  }

  async sendParentWelcomeEmail(id: number, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("post", `/v2p3/parents/${encodeURIComponent(String(id))}/welcome_email`, {
      ...options,
      query: undefined,
      body: undefined,
    });
  }

  /** Same methods, returning { data, response } with the raw HTTP Response. */
  get withRawResponse() {
    return {
      listParents: (params: ParentsListParentsParams = {}, options: RequestOptions = {}): Promise<{ data: ParentsListParentsResponse; response: globalThis.Response }> =>
        this.client.requestRaw<ParentsListParentsResponse>("get", "/v2p3/parents", { ...options, query: {
      "ids[]": params.ids,
      "archived": params.archived,
      "modified_since": params.modifiedSince,
      "page": params.page,
      "per_page": params.perPage,
      "deleted_since": params.deletedSince,
      "q": params.q,
    }, body: undefined, responseType: "ParentsListParentsResponse", }),
      createParent: (params: ParentsCreateParentParams = {}, options: RequestOptions = {}): Promise<{ data: ParentsCreateParentResponse; response: globalThis.Response }> =>
        this.client.requestRaw<ParentsCreateParentResponse>("post", "/v2p3/parents", { ...options, query: undefined, body: params.body, responseType: "ParentsCreateParentResponse", requestType: "ParentsCreateParentRequest", }),
      getParentById: (id: number, options: RequestOptions = {}): Promise<{ data: ParentsGetParentByIdResponse; response: globalThis.Response }> =>
        this.client.requestRaw<ParentsGetParentByIdResponse>("get", `/v2p3/parents/${encodeURIComponent(String(id))}`, { ...options, query: undefined, body: undefined, responseType: "ParentsGetParentByIdResponse", }),
      updateParent: (params: ParentsUpdateParentParams, options: RequestOptions = {}): Promise<{ data: ParentsUpdateParentResponse; response: globalThis.Response }> =>
        this.client.requestRaw<ParentsUpdateParentResponse>("patch", `/v2p3/parents/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: params.body, responseType: "ParentsUpdateParentResponse", requestType: "ParentsUpdateParentRequest", }),
      archiveParent: (id: number, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("put", `/v2p3/parents/${encodeURIComponent(String(id))}/archive`, { ...options, query: undefined, body: undefined, }),
      unarchiveParent: (id: number, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("put", `/v2p3/parents/${encodeURIComponent(String(id))}/unarchive`, { ...options, query: undefined, body: undefined, }),
      sendParentWelcomeEmail: (id: number, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("post", `/v2p3/parents/${encodeURIComponent(String(id))}/welcome_email`, { ...options, query: undefined, body: undefined, }),
    };
  }

}
