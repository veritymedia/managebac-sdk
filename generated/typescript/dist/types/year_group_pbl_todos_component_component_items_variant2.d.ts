import type { YearGroupPblTodosComponentComponentItemsVariant2Status } from "./year_group_pbl_todos_component_component_items_variant2_status.js";
import type { YearGroupPblTodosComponentComponentItemsVariant2TodosItem } from "./year_group_pbl_todos_component_component_items_variant2_todos_item.js";
export interface YearGroupPblTodosComponentComponentItemsVariant2 {
    /**
     * Item ID
     */
    id?: number;
    /**
     * Item type
     */
    type?: string;
    /**
     * Item title
     */
    title?: string;
    /**
     * Deadline due date (ISO 8601 datetime).
     */
    dueDate?: string;
    /**
     * Student submission state for the deadline; null when the deadline has no dropbox.
     */
    status?: YearGroupPblTodosComponentComponentItemsVariant2Status | null;
    todos?: YearGroupPblTodosComponentComponentItemsVariant2TodosItem[];
}
