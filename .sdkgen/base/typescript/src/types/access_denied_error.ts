/**
 * Returned when the API token is missing, invalid, or has been disabled.
 */
export interface AccessDeniedError {
  /**
   * Unauthorized to perform an action
   */
  error?: string;
}
