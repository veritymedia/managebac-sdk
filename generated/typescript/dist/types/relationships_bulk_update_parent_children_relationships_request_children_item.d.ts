import type { RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItemRelationship } from "./relationships_bulk_update_parent_children_relationships_request_children_item_relationship.js";
export interface RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItem {
    /**
     * ManageBac ID of the child (student) record.
     */
    id?: number;
    /**
     * The relationship of the parent/guardian to the child. Null if not specified.
     */
    relationship?: RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItemRelationship | null;
}
