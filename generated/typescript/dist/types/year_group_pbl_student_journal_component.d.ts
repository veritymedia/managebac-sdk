import type { YearGroupPblStudentJournalComponentStatus } from "./year_group_pbl_student_journal_component_status.js";
import type { YearGroupPblStudentJournalComponentSupervisor } from "./year_group_pbl_student_journal_component_supervisor.js";
import type { YearGroupPblStudentJournalComponentComponent } from "./year_group_pbl_student_journal_component_component.js";
export interface YearGroupPblStudentJournalComponent {
    /**
     * Student ID
     */
    id?: number;
    /**
     * Student identifier
     */
    identifier?: string;
    status?: YearGroupPblStudentJournalComponentStatus;
    supervisor?: YearGroupPblStudentJournalComponentSupervisor;
    component?: YearGroupPblStudentJournalComponentComponent;
}
