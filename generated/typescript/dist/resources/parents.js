export class ParentsResource {
    client;
    constructor(client) {
        this.client = client;
    }
    async listParents(params = {}, options = {}) {
        return this.client.request("get", "/v2p3/parents", {
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
    async createParent(params = {}, options = {}) {
        return this.client.request("post", "/v2p3/parents", {
            ...options,
            query: undefined,
            body: params.body,
            responseType: "ParentsCreateParentResponse",
            requestType: "ParentsCreateParentRequest",
        });
    }
    async getParentById(id, options = {}) {
        return this.client.request("get", `/v2p3/parents/${encodeURIComponent(String(id))}`, {
            ...options,
            query: undefined,
            body: undefined,
            responseType: "ParentsGetParentByIdResponse",
        });
    }
    async updateParent(params, options = {}) {
        return this.client.request("patch", `/v2p3/parents/${encodeURIComponent(String(params.id))}`, {
            ...options,
            query: undefined,
            body: params.body,
            responseType: "ParentsUpdateParentResponse",
            requestType: "ParentsUpdateParentRequest",
        });
    }
    async archiveParent(id, options = {}) {
        return this.client.request("put", `/v2p3/parents/${encodeURIComponent(String(id))}/archive`, {
            ...options,
            query: undefined,
            body: undefined,
        });
    }
    async unarchiveParent(id, options = {}) {
        return this.client.request("put", `/v2p3/parents/${encodeURIComponent(String(id))}/unarchive`, {
            ...options,
            query: undefined,
            body: undefined,
        });
    }
    async sendParentWelcomeEmail(id, options = {}) {
        return this.client.request("post", `/v2p3/parents/${encodeURIComponent(String(id))}/welcome_email`, {
            ...options,
            query: undefined,
            body: undefined,
        });
    }
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse() {
        return {
            listParents: (params = {}, options = {}) => this.client.requestRaw("get", "/v2p3/parents", { ...options, query: {
                    "ids[]": params.ids,
                    "archived": params.archived,
                    "modified_since": params.modifiedSince,
                    "page": params.page,
                    "per_page": params.perPage,
                    "deleted_since": params.deletedSince,
                    "q": params.q,
                }, body: undefined, responseType: "ParentsListParentsResponse", }),
            createParent: (params = {}, options = {}) => this.client.requestRaw("post", "/v2p3/parents", { ...options, query: undefined, body: params.body, responseType: "ParentsCreateParentResponse", requestType: "ParentsCreateParentRequest", }),
            getParentById: (id, options = {}) => this.client.requestRaw("get", `/v2p3/parents/${encodeURIComponent(String(id))}`, { ...options, query: undefined, body: undefined, responseType: "ParentsGetParentByIdResponse", }),
            updateParent: (params, options = {}) => this.client.requestRaw("patch", `/v2p3/parents/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: params.body, responseType: "ParentsUpdateParentResponse", requestType: "ParentsUpdateParentRequest", }),
            archiveParent: (id, options = {}) => this.client.requestRaw("put", `/v2p3/parents/${encodeURIComponent(String(id))}/archive`, { ...options, query: undefined, body: undefined, }),
            unarchiveParent: (id, options = {}) => this.client.requestRaw("put", `/v2p3/parents/${encodeURIComponent(String(id))}/unarchive`, { ...options, query: undefined, body: undefined, }),
            sendParentWelcomeEmail: (id, options = {}) => this.client.requestRaw("post", `/v2p3/parents/${encodeURIComponent(String(id))}/welcome_email`, { ...options, query: undefined, body: undefined, }),
        };
    }
}
