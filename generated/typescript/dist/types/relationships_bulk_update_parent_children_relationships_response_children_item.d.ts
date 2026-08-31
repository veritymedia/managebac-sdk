import type { RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItemRelationship } from "./relationships_bulk_update_parent_children_relationships_response_children_item_relationship.js";
export interface RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItem {
    /**
     * ManageBac ID of the child (student) record.
     */
    id?: number;
    /**
     * The relationship of the parent/guardian to the child. Null if not specified.
     */
    relationship?: RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItemRelationship | null;
}
