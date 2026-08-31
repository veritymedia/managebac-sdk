import type { ApiClient, RequestOptions } from "../core.js";
import type { AuthPermissionsResponse } from "../types/auth_permissions_response.js";
import type { OauthTokenRequest } from "../types/oauth_token_request.js";
import type { OauthTokenResponse } from "../types/oauth_token_response.js";
export interface AuthenticationCreateOauthTokenParams {
    body?: OauthTokenRequest;
}
export declare class AuthenticationResource {
    private readonly client;
    constructor(client: ApiClient);
    listTokenResources(options?: RequestOptions): Promise<AuthPermissionsResponse>;
    createOauthToken(params?: AuthenticationCreateOauthTokenParams, options?: RequestOptions): Promise<OauthTokenResponse>;
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse(): {
        listTokenResources: (options?: RequestOptions) => Promise<{
            data: AuthPermissionsResponse;
            response: globalThis.Response;
        }>;
        createOauthToken: (params?: AuthenticationCreateOauthTokenParams, options?: RequestOptions) => Promise<{
            data: OauthTokenResponse;
            response: globalThis.Response;
        }>;
    };
}
