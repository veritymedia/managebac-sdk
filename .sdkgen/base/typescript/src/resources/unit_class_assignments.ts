import type { ApiClient, RequestOptions } from "../core.js";
import type { UnitClassAssignmentsListUnitClassAssignmentsResponse } from "../types/unit_class_assignments_list_unit_class_assignments_response.js";


export interface UnitClassAssignmentsListUnitClassAssignmentsParams {
  modifiedSince?: string;
  deletedSince?: string;
  archived?: boolean;
  page?: number;
  perPage?: number;
}

export class UnitClassAssignmentsResource {

  constructor(private readonly client: ApiClient) {

  }

  async listUnitClassAssignments(params: UnitClassAssignmentsListUnitClassAssignmentsParams = {}, options: RequestOptions = {}): Promise<UnitClassAssignmentsListUnitClassAssignmentsResponse> {
    return this.client.request<UnitClassAssignmentsListUnitClassAssignmentsResponse>("get", "/v2p3/unit-class-assignments", {
      ...options,
      query: {
        "modified_since": params.modifiedSince,
        "deleted_since": params.deletedSince,
        "archived": params.archived,
        "page": params.page,
        "per_page": params.perPage,
      },
      body: undefined,
      responseType: "UnitClassAssignmentsListUnitClassAssignmentsResponse",
    });
  }

  /** Same methods, returning { data, response } with the raw HTTP Response. */
  get withRawResponse() {
    return {
      listUnitClassAssignments: (params: UnitClassAssignmentsListUnitClassAssignmentsParams = {}, options: RequestOptions = {}): Promise<{ data: UnitClassAssignmentsListUnitClassAssignmentsResponse; response: globalThis.Response }> =>
        this.client.requestRaw<UnitClassAssignmentsListUnitClassAssignmentsResponse>("get", "/v2p3/unit-class-assignments", { ...options, query: {
      "modified_since": params.modifiedSince,
      "deleted_since": params.deletedSince,
      "archived": params.archived,
      "page": params.page,
      "per_page": params.perPage,
    }, body: undefined, responseType: "UnitClassAssignmentsListUnitClassAssignmentsResponse", }),
    };
  }

}
