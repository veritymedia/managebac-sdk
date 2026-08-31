import type { YearGroupPblTodosComponentStatus } from "./year_group_pbl_todos_component_status.js";
import type { YearGroupPblTodosComponentSupervisor } from "./year_group_pbl_todos_component_supervisor.js";
import type { YearGroupPblTodosComponentComponent } from "./year_group_pbl_todos_component_component.js";

export interface YearGroupPblTodosComponent {
  /**
   * Student ID
   */
  id?: number;
  /**
   * Student identifier
   */
  identifier?: string;
  status?: YearGroupPblTodosComponentStatus;
  supervisor?: YearGroupPblTodosComponentSupervisor;
  component?: YearGroupPblTodosComponentComponent;
}
