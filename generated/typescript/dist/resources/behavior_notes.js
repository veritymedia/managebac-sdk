export class BehaviorNotesResource {
    client;
    constructor(client) {
        this.client = client;
    }
    async listBehaviorNotes(params = {}, options = {}) {
        return this.client.request("get", "/v2p3/behavior/notes", {
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
            listBehaviorNotes: (params = {}, options = {}) => this.client.requestRaw("get", "/v2p3/behavior/notes", { ...options, query: {
                    "modified_since": params.modifiedSince,
                    "page": params.page,
                    "per_page": params.perPage,
                    "student_ids": params.studentIds,
                }, body: undefined, responseType: "BehaviorNotesListBehaviorNotesResponse", }),
        };
    }
}
