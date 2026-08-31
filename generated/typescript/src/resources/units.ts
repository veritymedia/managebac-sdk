import type { ApiClient, RequestOptions } from "../core.js";
import type { UnitsListUnitsResponse } from "../types/units_list_units_response.js";
import type { UnitsGetUnitByIdResponse } from "../types/units_get_unit_by_id_response.js";


export interface UnitsListUnitsParams {
  modifiedSince?: string;
  page?: string;
  perPage?: string;
  archived?: boolean;
  classIds?: string;
}

export class UnitsResource {

  constructor(private readonly client: ApiClient) {

  }

  async listUnits(params: UnitsListUnitsParams = {}, options: RequestOptions = {}): Promise<UnitsListUnitsResponse> {
    return this.client.request<UnitsListUnitsResponse>("get", "/v2p3/units", {
      ...options,
      query: {
        "modified_since": params.modifiedSince,
        "page": params.page,
        "per_page": params.perPage,
        "archived": params.archived,
        "class_ids": params.classIds,
      },
      body: undefined,
      responseType: "UnitsListUnitsResponse",
    });
  }

  async getUnitById(id: number, options: RequestOptions = {}): Promise<UnitsGetUnitByIdResponse> {
    return this.client.request<UnitsGetUnitByIdResponse>("get", `/v2p3/units/${encodeURIComponent(String(id))}`, {
      ...options,
      query: undefined,
      body: undefined,
      responseType: "UnitsGetUnitByIdResponse",
    });
  }

  /** Same methods, returning { data, response } with the raw HTTP Response. */
  get withRawResponse() {
    return {
      listUnits: (params: UnitsListUnitsParams = {}, options: RequestOptions = {}): Promise<{ data: UnitsListUnitsResponse; response: globalThis.Response }> =>
        this.client.requestRaw<UnitsListUnitsResponse>("get", "/v2p3/units", { ...options, query: {
      "modified_since": params.modifiedSince,
      "page": params.page,
      "per_page": params.perPage,
      "archived": params.archived,
      "class_ids": params.classIds,
    }, body: undefined, responseType: "UnitsListUnitsResponse", }),
      getUnitById: (id: number, options: RequestOptions = {}): Promise<{ data: UnitsGetUnitByIdResponse; response: globalThis.Response }> =>
        this.client.requestRaw<UnitsGetUnitByIdResponse>("get", `/v2p3/units/${encodeURIComponent(String(id))}`, { ...options, query: undefined, body: undefined, responseType: "UnitsGetUnitByIdResponse", }),
    };
  }

}
