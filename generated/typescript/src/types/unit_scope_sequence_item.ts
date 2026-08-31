import type { UnitScopeSequenceItemPhasesOrGradesItem } from "./unit_scope_sequence_item_phases_or_grades_item.js";

export interface UnitScopeSequenceItem {
  subjectId?: number | null;
  subjectName?: string | null;
  phasesOrGrades?: UnitScopeSequenceItemPhasesOrGradesItem[];
}
