import type { OauthTokenRequestGrantType } from "./oauth_token_request_grant_type.js";
export interface OauthTokenRequest {
    /**
     * The OAuth 2.0 grant type. Only `client_credentials` is supported for server-to-server API access.
     */
    grantType: OauthTokenRequestGrantType;
    /**
     * The `client_id` (Application ID) of your OAuth application.
     */
    clientId: string;
    /**
     * The `client_secret` of your OAuth application.
     */
    clientSecret: string;
    /**
     * A space-separated list of scopes to request. Must be a subset of the scopes configured on the application. If omitted, all scopes defined on client creation will be granted.
     */
    scope?: string;
}
