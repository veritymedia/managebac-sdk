import type { UnitScopeSequenceItemPhasesOrGradesItemStrandsItem } from "./unit_scope_sequence_item_phases_or_grades_item_strands_item.js";

export interface UnitScopeSequenceItemPhasesOrGradesItem {
  phaseOrGrade?: string | null;
  strands?: UnitScopeSequenceItemPhasesOrGradesItemStrandsItem[];
}
