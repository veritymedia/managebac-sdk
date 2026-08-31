export class UnitClassAssignmentsResource {
    client;
    constructor(client) {
        this.client = client;
    }
    async listUnitClassAssignments(params = {}, options = {}) {
        return this.client.request("get", "/v2p3/unit-class-assignments", {
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
            listUnitClassAssignments: (params = {}, options = {}) => this.client.requestRaw("get", "/v2p3/unit-class-assignments", { ...options, query: {
                    "modified_since": params.modifiedSince,
                    "deleted_since": params.deletedSince,
                    "archived": params.archived,
                    "page": params.page,
                    "per_page": params.perPage,
                }, body: undefined, responseType: "UnitClassAssignmentsListUnitClassAssignmentsResponse", }),
        };
    }
}
