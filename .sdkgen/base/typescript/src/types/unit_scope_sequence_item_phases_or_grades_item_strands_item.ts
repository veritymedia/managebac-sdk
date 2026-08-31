import type { UnitScopeSequenceItemPhasesOrGradesItemStrandsItemKindsValueItem } from "./unit_scope_sequence_item_phases_or_grades_item_strands_item_kinds_value_item.js";

export interface UnitScopeSequenceItemPhasesOrGradesItemStrandsItem {
  strandId?: number;
  strandName?: string;
  kinds?: { [key: string]: UnitScopeSequenceItemPhasesOrGradesItemStrandsItemKindsValueItem[] };
}
