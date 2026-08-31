import type { UpsertUnprocessableEntityError } from "./upsert_unprocessable_entity_error.js";
import type { UpsertNotFoundError } from "./upsert_not_found_error.js";
import type { UpsertClassesResponseValueItemVariant3 } from "./upsert_classes_response_value_item_variant3.js";

export type UpsertClassesResponseValueItem = UpsertUnprocessableEntityError | UpsertNotFoundError | UpsertClassesResponseValueItemVariant3 | { [key: string]: unknown };
