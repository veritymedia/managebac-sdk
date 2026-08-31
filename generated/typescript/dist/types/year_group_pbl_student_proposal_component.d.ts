import type { YearGroupPblStudentProposalComponentStatus } from "./year_group_pbl_student_proposal_component_status.js";
import type { YearGroupPblStudentProposalComponentSupervisor } from "./year_group_pbl_student_proposal_component_supervisor.js";
import type { YearGroupPblStudentProposalComponentComponent } from "./year_group_pbl_student_proposal_component_component.js";
export interface YearGroupPblStudentProposalComponent {
    /**
     * Student ID
     */
    id?: number;
    /**
     * Student identifier
     */
    identifier?: string;
    status?: YearGroupPblStudentProposalComponentStatus;
    supervisor?: YearGroupPblStudentProposalComponentSupervisor;
    component?: YearGroupPblStudentProposalComponentComponent;
}
