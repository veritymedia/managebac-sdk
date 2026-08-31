import type { ChildRelation } from "./child_relation.js";
import type { Meta } from "./meta.js";

export interface RelationshipsListOfParentChildrenRelationshipsResponse {
  children?: ChildRelation[];
  meta?: Meta;
}
