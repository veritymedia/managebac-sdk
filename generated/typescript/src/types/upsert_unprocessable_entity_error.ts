export interface UpsertUnprocessableEntityError {
  /**
   * Positional item index
   */
  index?: number;
  /**
   * Validation errors
   */
  errors?: unknown;
  /**
   * Status code
   */
  status?: string;
}
