export class UtilitiesResource {
    client;
    constructor(client) {
        this.client = client;
    }
    async showAvatarById(id, options = {}) {
        return this.client.request("get", `/v2p3/avatars/${encodeURIComponent(String(id))}`, {
            ...options,
            query: undefined,
            body: undefined,
        });
    }
    async ping(options = {}) {
        return this.client.request("get", "/v2p3/ping", {
            ...options,
            query: undefined,
            body: undefined,
        });
    }
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse() {
        return {
            showAvatarById: (id, options = {}) => this.client.requestRaw("get", `/v2p3/avatars/${encodeURIComponent(String(id))}`, { ...options, query: undefined, body: undefined, }),
            ping: (options = {}) => this.client.requestRaw("get", "/v2p3/ping", { ...options, query: undefined, body: undefined, }),
        };
    }
}
