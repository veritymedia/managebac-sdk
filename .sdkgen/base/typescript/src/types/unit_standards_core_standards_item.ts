import type { UnitStandardsCoreStandardsItemChildrenItem } from "./unit_standards_core_standards_item_children_item.js";

export interface UnitStandardsCoreStandardsItem {
  id?: number;
  name?: string;
  children?: UnitStandardsCoreStandardsItemChildrenItem[];
}
