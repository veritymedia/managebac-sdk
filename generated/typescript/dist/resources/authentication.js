export class AuthenticationResource {
    client;
    constructor(client) {
        this.client = client;
    }
    async listTokenResources(options = {}) {
        return this.client.request("get", "/v2p3/auth/permissions", {
            ...options,
            query: undefined,
            body: undefined,
            responseType: "AuthPermissionsResponse",
        });
    }
    async createOauthToken(params = {}, options = {}) {
        return this.client.request("post", "/oauth/token", {
            ...options,
            query: undefined,
            body: params.body,
            responseType: "OauthTokenResponse",
            requestType: "OauthTokenRequest",
        });
    }
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse() {
        return {
            listTokenResources: (options = {}) => this.client.requestRaw("get", "/v2p3/auth/permissions", { ...options, query: undefined, body: undefined, responseType: "AuthPermissionsResponse", }),
            createOauthToken: (params = {}, options = {}) => this.client.requestRaw("post", "/oauth/token", { ...options, query: undefined, body: params.body, responseType: "OauthTokenResponse", requestType: "OauthTokenRequest", }),
        };
    }
}
