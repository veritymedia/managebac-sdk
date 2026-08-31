import type { YearGroupPblReflectionsComponentStatus } from "./year_group_pbl_reflections_component_status.js";
import type { YearGroupPblReflectionsComponentSupervisor } from "./year_group_pbl_reflections_component_supervisor.js";
import type { YearGroupPblReflectionsComponentComponent } from "./year_group_pbl_reflections_component_component.js";
export interface YearGroupPblReflectionsComponent {
    /**
     * Student ID
     */
    id?: number;
    /**
     * Student identifier
     */
    identifier?: string;
    status?: YearGroupPblReflectionsComponentStatus;
    supervisor?: YearGroupPblReflectionsComponentSupervisor;
    component?: YearGroupPblReflectionsComponentComponent;
}
