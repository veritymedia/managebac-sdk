import type { UnitCriteriaCriteriaItemCriteriaItem } from "./unit_criteria_criteria_item_criteria_item.js";
export interface UnitCriteriaCriteriaItem {
    subjectId?: number | null;
    subjectName?: string | null;
    /**
     * 'hl' or 'sl'
     */
    level?: string;
    criteria?: UnitCriteriaCriteriaItemCriteriaItem[];
}
