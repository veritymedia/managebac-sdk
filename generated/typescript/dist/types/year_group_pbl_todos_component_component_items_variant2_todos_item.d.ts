import type { YearGroupPblTodosComponentComponentItemsVariant2TodosItemResponsibleGroup } from "./year_group_pbl_todos_component_component_items_variant2_todos_item_responsible_group.js";
export interface YearGroupPblTodosComponentComponentItemsVariant2TodosItem {
    /**
     * Todo ID
     */
    id?: number;
    /**
     * Todo type
     */
    type?: string;
    /**
     * Todo title
     */
    title?: string;
    /**
     * Student completion status for a todo
     */
    completed?: boolean;
    /**
     * Who is responsible for the todo; null when unset (e.g. personal todos).
     */
    responsibleGroup?: YearGroupPblTodosComponentComponentItemsVariant2TodosItemResponsibleGroup | null;
}
