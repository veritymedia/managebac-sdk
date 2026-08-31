import type { UnitStandardsStandardsItemAtlasGrade } from "./unit_standards_standards_item_atlas_grade.js";
export interface UnitStandardsStandardsItem {
    id?: number;
    name?: string;
    kind?: string;
    atlasGrade?: UnitStandardsStandardsItemAtlasGrade | null;
    children?: unknown[];
}
