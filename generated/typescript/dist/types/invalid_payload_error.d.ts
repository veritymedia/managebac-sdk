/**
 * Returned when the request body fails validation or contains unpermitted parameters.
 */
export interface InvalidPayloadError {
    /**
     * A human-readable message describing the validation failure. For unpermitted parameters, includes an allowed_params array listing the accepted field names.
     *
     */
    error?: string;
}
