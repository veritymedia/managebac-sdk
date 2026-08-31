import type { UnitRelatedConceptsRelatedConceptsItem } from "./unit_related_concepts_related_concepts_item.js";

/**
 * Related concepts for the unit (MYP only).
 */
export interface UnitRelatedConcepts {
  relatedConcepts?: UnitRelatedConceptsRelatedConceptsItem[];
  other?: string | null;
}
