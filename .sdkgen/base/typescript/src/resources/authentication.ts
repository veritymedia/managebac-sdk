import type { ApiClient, RequestOptions } from "../core.js";
import type { AuthPermissionsResponse } from "../types/auth_permissions_response.js";
import type { OauthTokenRequest } from "../types/oauth_token_request.js";
import type { OauthTokenResponse } from "../types/oauth_token_response.js";


export interface AuthenticationCreateOauthTokenParams {
  body?: OauthTokenRequest;
}

export class AuthenticationResource {

  constructor(private readonly client: ApiClient) {

  }

  async listTokenResources(options: RequestOptions = {}): Promise<AuthPermissionsResponse> {
    return this.client.request<AuthPermissionsResponse>("get", "/v2p3/auth/permissions", {
      ...options,
      query: undefined,
      body: undefined,
      responseType: "AuthPermissionsResponse",
    });
  }

  async createOauthToken(params: AuthenticationCreateOauthTokenParams = {}, options: RequestOptions = {}): Promise<OauthTokenResponse> {
    return this.client.request<OauthTokenResponse>("post", "/oauth/token", {
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
      listTokenResources: (options: RequestOptions = {}): Promise<{ data: AuthPermissionsResponse; response: globalThis.Response }> =>
        this.client.requestRaw<AuthPermissionsResponse>("get", "/v2p3/auth/permissions", { ...options, query: undefined, body: undefined, responseType: "AuthPermissionsResponse", }),
      createOauthToken: (params: AuthenticationCreateOauthTokenParams = {}, options: RequestOptions = {}): Promise<{ data: OauthTokenResponse; response: globalThis.Response }> =>
        this.client.requestRaw<OauthTokenResponse>("post", "/oauth/token", { ...options, query: undefined, body: params.body, responseType: "OauthTokenResponse", requestType: "OauthTokenRequest", }),
    };
  }

}
