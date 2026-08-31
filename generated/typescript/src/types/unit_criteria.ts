import type { UnitCriteriaCriteriaItem } from "./unit_criteria_criteria_item.js";

/**
 * Assessment criteria grouped by subject and level with description.
 */
export interface UnitCriteria {
  criteria?: UnitCriteriaCriteriaItem[];
  criteriaDescription?: string | null;
}
