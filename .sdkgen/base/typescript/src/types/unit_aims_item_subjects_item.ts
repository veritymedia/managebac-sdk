import type { UnitAimsItemSubjectsItemItemsItem } from "./unit_aims_item_subjects_item_items_item.js";

export interface UnitAimsItemSubjectsItem {
  subjectId?: number | null;
  subjectName?: string | null;
  items?: UnitAimsItemSubjectsItemItemsItem[];
}
