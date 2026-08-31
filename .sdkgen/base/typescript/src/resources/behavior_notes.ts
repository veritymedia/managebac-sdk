import type { ApiClient, RequestOptions } from "../core.js";
import type { BehaviorNotesListBehaviorNotesResponse } from "../types/behavior_notes_list_behavior_notes_response.js";


export interface BehaviorNotesListBehaviorNotesParams {
  modifiedSince?: string;
  page?: string;
  perPage?: string;
  studentIds?: number[];
}

export class BehaviorNotesResource {

  constructor(private readonly client: ApiClient) {

  }

  async listBehaviorNotes(params: BehaviorNotesListBehaviorNotesParams = {}, options: RequestOptions = {}): Promise<BehaviorNotesListBehaviorNotesResponse> {
    return this.client.request<BehaviorNotesListBehaviorNotesResponse>("get", "/v2p3/behavior/notes", {
      ...options,
      query: {
        "modified_since": params.modifiedSince,
        "page": params.page,
        "per_page": params.perPage,
        "student_ids": params.studentIds,
      },
      body: undefined,
      responseType: "BehaviorNotesListBehaviorNotesResponse",
    });
  }

  /** Same methods, returning { data, response } with the raw HTTP Response. */
  get withRawResponse() {
    return {
      listBehaviorNotes: (params: BehaviorNotesListBehaviorNotesParams = {}, options: RequestOptions = {}): Promise<{ data: BehaviorNotesListBehaviorNotesResponse; response: globalThis.Response }> =>
        this.client.requestRaw<BehaviorNotesListBehaviorNotesResponse>("get", "/v2p3/behavior/notes", { ...options, query: {
      "modified_since": params.modifiedSince,
      "page": params.page,
      "per_page": params.perPage,
      "student_ids": params.studentIds,
    }, body: undefined, responseType: "BehaviorNotesListBehaviorNotesResponse", }),
    };
  }

}
