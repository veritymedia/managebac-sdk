/**
 * The OAuth 2.0 grant type. Only `client_credentials` is supported for server-to-server API access.
 */
export type OauthTokenRequestGrantType = "client_credentials" | (string & {});
