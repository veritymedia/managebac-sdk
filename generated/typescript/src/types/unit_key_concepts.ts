import type { UnitKeyConceptsKeyConceptsItem } from "./unit_key_concepts_key_concepts_item.js";
import type { UnitKeyConceptsUnitKeyConceptsItem } from "./unit_key_concepts_unit_key_concepts_item.js";

/**
 * Key concepts and unit key concepts for the unit.
 */
export interface UnitKeyConcepts {
  keyConcepts?: UnitKeyConceptsKeyConceptsItem[];
  unitKeyConcepts?: UnitKeyConceptsUnitKeyConceptsItem[];
}
