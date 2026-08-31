export class UnitsResource {
    client;
    constructor(client) {
        this.client = client;
    }
    async listUnits(params = {}, options = {}) {
        return this.client.request("get", "/v2p3/units", {
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
    async getUnitById(id, options = {}) {
        return this.client.request("get", `/v2p3/units/${encodeURIComponent(String(id))}`, {
            ...options,
            query: undefined,
            body: undefined,
            responseType: "UnitsGetUnitByIdResponse",
        });
    }
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse() {
        return {
            listUnits: (params = {}, options = {}) => this.client.requestRaw("get", "/v2p3/units", { ...options, query: {
                    "modified_since": params.modifiedSince,
                    "page": params.page,
                    "per_page": params.perPage,
                    "archived": params.archived,
                    "class_ids": params.classIds,
                }, body: undefined, responseType: "UnitsListUnitsResponse", }),
            getUnitById: (id, options = {}) => this.client.requestRaw("get", `/v2p3/units/${encodeURIComponent(String(id))}`, { ...options, query: undefined, body: undefined, responseType: "UnitsGetUnitByIdResponse", }),
        };
    }
}
