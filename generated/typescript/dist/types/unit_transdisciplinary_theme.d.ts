import type { UnitTransdisciplinaryThemeListItem } from "./unit_transdisciplinary_theme_list_item.js";
/**
 * PYP transdisciplinary theme with selected descriptions.
 */
export interface UnitTransdisciplinaryTheme {
    id?: number;
    title?: string;
    list?: UnitTransdisciplinaryThemeListItem[];
}
