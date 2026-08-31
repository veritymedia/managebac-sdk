import type { OauthTokenResponseTokenType } from "./oauth_token_response_token_type.js";

export interface OauthTokenResponse {
  /**
   * The Bearer token (JWT) to use in the Authorization header.
   */
  accessToken: string;
  /**
   * Always `Bearer`.
   */
  tokenType: OauthTokenResponseTokenType;
  /**
   * Token lifetime in seconds.
   */
  expiresIn: number;
  /**
   * Space-separated list of granted scopes.
   */
  scope: string;
  /**
   * Token creation timestamp (Unix epoch).
   */
  createdAt: number;
}
