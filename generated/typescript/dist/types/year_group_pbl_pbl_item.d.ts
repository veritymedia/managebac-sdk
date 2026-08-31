import type { YearGroupPblPblItemSubject } from "./year_group_pbl_pbl_item_subject.js";
import type { YearGroupPblPblItemComponentsItem } from "./year_group_pbl_pbl_item_components_item.js";
export interface YearGroupPblPblItem {
    id?: number;
    title?: string;
    abbreviation?: string;
    archived?: boolean;
    subject?: YearGroupPblPblItemSubject;
    description?: string;
    components?: YearGroupPblPblItemComponentsItem[];
}
