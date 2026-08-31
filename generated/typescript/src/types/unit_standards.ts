import type { UnitStandardsCoreStandardsItem } from "./unit_standards_core_standards_item.js";
import type { UnitStandardsStandardsItem } from "./unit_standards_standards_item.js";

/**
 * Standards with core_standards and curriculum standards.
 */
export interface UnitStandards {
  coreStandards?: UnitStandardsCoreStandardsItem[];
  standards?: UnitStandardsStandardsItem[];
}
