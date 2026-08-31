import type { YearGroupPblStudentJournalComponentStatusProgress } from "./year_group_pbl_student_journal_component_status_progress.js";
export interface YearGroupPblStudentJournalComponentStatus {
    /**
     * Completed status
     */
    completed?: boolean;
    /**
     * Approved status
     */
    approved?: boolean;
    progress?: YearGroupPblStudentJournalComponentStatusProgress;
}
