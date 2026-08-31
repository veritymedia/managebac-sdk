import type { YearGroupPblPresentationComponentStatus } from "./year_group_pbl_presentation_component_status.js";
import type { YearGroupPblPresentationComponentSupervisor } from "./year_group_pbl_presentation_component_supervisor.js";
import type { YearGroupPblPresentationComponentComponent } from "./year_group_pbl_presentation_component_component.js";
export interface YearGroupPblPresentationComponent {
    /**
     * Student ID
     */
    id?: number;
    /**
     * Student identifier
     */
    identifier?: string;
    status?: YearGroupPblPresentationComponentStatus;
    supervisor?: YearGroupPblPresentationComponentSupervisor;
    component?: YearGroupPblPresentationComponentComponent;
}
