import type { YearGroupPblStudentDocumentsComponentStatus } from "./year_group_pbl_student_documents_component_status.js";
import type { YearGroupPblStudentDocumentsComponentSupervisor } from "./year_group_pbl_student_documents_component_supervisor.js";
import type { YearGroupPblStudentDocumentsComponentComponent } from "./year_group_pbl_student_documents_component_component.js";

export interface YearGroupPblStudentDocumentsComponent {
  /**
   * Student ID
   */
  id?: number;
  /**
   * Student identifier
   */
  identifier?: string;
  status?: YearGroupPblStudentDocumentsComponentStatus;
  supervisor?: YearGroupPblStudentDocumentsComponentSupervisor;
  component?: YearGroupPblStudentDocumentsComponentComponent;
}
