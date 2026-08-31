import type { YearGroupPblStudentNotesReviewsComponentStatus } from "./year_group_pbl_student_notes_reviews_component_status.js";
import type { YearGroupPblStudentNotesReviewsComponentSupervisor } from "./year_group_pbl_student_notes_reviews_component_supervisor.js";
import type { YearGroupPblStudentNotesReviewsComponentComponent } from "./year_group_pbl_student_notes_reviews_component_component.js";

export interface YearGroupPblStudentNotesReviewsComponent {
  /**
   * Student ID
   */
  id?: number;
  /**
   * Student identifier
   */
  identifier?: string;
  status?: YearGroupPblStudentNotesReviewsComponentStatus;
  supervisor?: YearGroupPblStudentNotesReviewsComponentSupervisor;
  component?: YearGroupPblStudentNotesReviewsComponentComponent;
}
