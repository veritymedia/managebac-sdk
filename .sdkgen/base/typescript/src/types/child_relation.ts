import type { ChildRelationRelationship } from "./child_relation_relationship.js";

/**
 * Represents the link between a parent/guardian and a student, including the relationship type.
 */
export interface ChildRelation {
  /**
   * ManageBac ID of the child (student) record.
   */
  id?: number;
  /**
   * The relationship of the parent/guardian to the child. Null if not specified.
   */
  relationship?: ChildRelationRelationship | null;
}
