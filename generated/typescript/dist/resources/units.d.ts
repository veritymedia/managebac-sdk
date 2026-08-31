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
export declare class UnitsResource {
    private readonly client;
    constructor(client: ApiClient);
    listUnits(params?: UnitsListUnitsParams, options?: RequestOptions): Promise<UnitsListUnitsResponse>;
    getUnitById(id: number, options?: RequestOptions): Promise<UnitsGetUnitByIdResponse>;
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse(): {
        listUnits: (params?: UnitsListUnitsParams, options?: RequestOptions) => Promise<{
            data: UnitsListUnitsResponse;
            response: globalThis.Response;
        }>;
        getUnitById: (id: number, options?: RequestOptions) => Promise<{
            data: UnitsGetUnitByIdResponse;
            response: globalThis.Response;
        }>;
    };
}
