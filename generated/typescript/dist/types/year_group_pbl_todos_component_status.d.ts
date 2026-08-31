import type { YearGroupPblTodosComponentStatusProgress } from "./year_group_pbl_todos_component_status_progress.js";
export interface YearGroupPblTodosComponentStatus {
    /**
     * Completed status
     */
    completed?: boolean;
    /**
     * Approved status
     */
    approved?: boolean;
    progress?: YearGroupPblTodosComponentStatusProgress;
}
