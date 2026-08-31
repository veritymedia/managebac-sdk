import type { UnitClassAssignmentStatus } from "./unit_class_assignment_status.js";

export interface UnitClassAssignment {
  /**
   * Unique ID of the assignment record in ManageBac.
   */
  id?: number;
  /**
   * ID of the unit (matches `id` in `GET /v2/units`).
   */
  unitId?: number;
  /**
   * ID of the class this unit is assigned to.
   */
  classId?: number;
  /**
   * Whether the unit is published (`active`) or in a provisional state (`draft`) within this class. Omitted when the response was filtered by `deleted_since`.
   */
  status?: UnitClassAssignmentStatus;
  /**
   * ISO 8601 timestamp — when the assignment was first created.
   */
  createdAt?: string;
  /**
   * ISO 8601 timestamp — when the assignment was last modified. Omitted when the response was filtered by `deleted_since`.
   */
  updatedAt?: string;
  /**
   * ISO 8601 timestamp — when the assignment was removed. Only present in responses filtered by `deleted_since`.
   */
  deletedAt?: string;
}
