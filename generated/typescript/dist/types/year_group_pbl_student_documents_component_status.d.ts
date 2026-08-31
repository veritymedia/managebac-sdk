import type { YearGroupPblStudentDocumentsComponentStatusProgress } from "./year_group_pbl_student_documents_component_status_progress.js";
export interface YearGroupPblStudentDocumentsComponentStatus {
    /**
     * Completed status
     */
    completed?: boolean;
    /**
     * Approved status
     */
    approved?: boolean;
    progress?: YearGroupPblStudentDocumentsComponentStatusProgress;
}
