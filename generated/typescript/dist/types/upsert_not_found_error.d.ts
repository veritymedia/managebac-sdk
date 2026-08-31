import type { UpsertNotFoundErrorErrors } from "./upsert_not_found_error_errors.js";
export interface UpsertNotFoundError {
    /**
     * Positional item index
     */
    index?: number;
    errors?: UpsertNotFoundErrorErrors;
    /**
     * Status code
     */
    status?: string;
}
