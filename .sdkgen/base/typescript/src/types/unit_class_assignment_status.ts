/**
 * Whether the unit is published (`active`) or in a provisional state (`draft`) within this class. Omitted when the response was filtered by `deleted_since`.
 */
export type UnitClassAssignmentStatus = "active" | "draft" | (string & {});
