export class RelationshipsResource {
    client;
    constructor(client) {
        this.client = client;
    }
    async listOfParentChildrenRelationships(params, options = {}) {
        return this.client.request("get", `/v2p3/parents/${encodeURIComponent(String(params.parentId))}/children`, {
            ...options,
            query: {
                "page": params.page,
                "per_page": params.perPage,
            },
            body: undefined,
            responseType: "RelationshipsListOfParentChildrenRelationshipsResponse",
        });
    }
    async createParentChildRelationship(params, options = {}) {
        return this.client.request("post", `/v2p3/parents/${encodeURIComponent(String(params.parentId))}/children`, {
            ...options,
            query: undefined,
            body: params.body,
            responseType: "RelationshipsCreateParentChildRelationshipResponse",
            requestType: "RelationshipsCreateParentChildRelationshipRequest",
        });
    }
    async bulkUpdateParentChildrenRelationships(params, options = {}) {
        return this.client.request("put", `/v2p3/parents/${encodeURIComponent(String(params.parentId))}/children`, {
            ...options,
            query: undefined,
            body: params.body,
            responseType: "RelationshipsBulkUpdateParentChildrenRelationshipsResponse",
            requestType: "RelationshipsBulkUpdateParentChildrenRelationshipsRequest",
        });
    }
    async getParentChildRelationship(params, options = {}) {
        return this.client.request("get", `/v2p3/parents/${encodeURIComponent(String(params.parentId))}/children/${encodeURIComponent(String(params.id))}`, {
            ...options,
            query: undefined,
            body: undefined,
            responseType: "RelationshipsGetParentChildRelationshipResponse",
        });
    }
    async updateParentChildRelationship(params, options = {}) {
        return this.client.request("put", `/v2p3/parents/${encodeURIComponent(String(params.parentId))}/children/${encodeURIComponent(String(params.id))}`, {
            ...options,
            query: undefined,
            body: params.body,
            responseType: "RelationshipsUpdateParentChildRelationshipResponse",
            requestType: "RelationshipsUpdateParentChildRelationshipRequest",
        });
    }
    async deleteParentChildRelationship(params, options = {}) {
        return this.client.request("delete", `/v2p3/parents/${encodeURIComponent(String(params.parentId))}/children/${encodeURIComponent(String(params.id))}`, {
            ...options,
            query: undefined,
            body: undefined,
        });
    }
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse() {
        return {
            listOfParentChildrenRelationships: (params, options = {}) => this.client.requestRaw("get", `/v2p3/parents/${encodeURIComponent(String(params.parentId))}/children`, { ...options, query: {
                    "page": params.page,
                    "per_page": params.perPage,
                }, body: undefined, responseType: "RelationshipsListOfParentChildrenRelationshipsResponse", }),
            createParentChildRelationship: (params, options = {}) => this.client.requestRaw("post", `/v2p3/parents/${encodeURIComponent(String(params.parentId))}/children`, { ...options, query: undefined, body: params.body, responseType: "RelationshipsCreateParentChildRelationshipResponse", requestType: "RelationshipsCreateParentChildRelationshipRequest", }),
            bulkUpdateParentChildrenRelationships: (params, options = {}) => this.client.requestRaw("put", `/v2p3/parents/${encodeURIComponent(String(params.parentId))}/children`, { ...options, query: undefined, body: params.body, responseType: "RelationshipsBulkUpdateParentChildrenRelationshipsResponse", requestType: "RelationshipsBulkUpdateParentChildrenRelationshipsRequest", }),
            getParentChildRelationship: (params, options = {}) => this.client.requestRaw("get", `/v2p3/parents/${encodeURIComponent(String(params.parentId))}/children/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: undefined, responseType: "RelationshipsGetParentChildRelationshipResponse", }),
            updateParentChildRelationship: (params, options = {}) => this.client.requestRaw("put", `/v2p3/parents/${encodeURIComponent(String(params.parentId))}/children/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: params.body, responseType: "RelationshipsUpdateParentChildRelationshipResponse", requestType: "RelationshipsUpdateParentChildRelationshipRequest", }),
            deleteParentChildRelationship: (params, options = {}) => this.client.requestRaw("delete", `/v2p3/parents/${encodeURIComponent(String(params.parentId))}/children/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: undefined, }),
        };
    }
}
