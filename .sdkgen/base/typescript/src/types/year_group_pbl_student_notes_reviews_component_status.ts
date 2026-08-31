import type { YearGroupPblStudentNotesReviewsComponentStatusProgress } from "./year_group_pbl_student_notes_reviews_component_status_progress.js";

export interface YearGroupPblStudentNotesReviewsComponentStatus {
  /**
   * Completed status
   */
  completed?: boolean;
  /**
   * Approved status
   */
  approved?: boolean;
  progress?: YearGroupPblStudentNotesReviewsComponentStatusProgress;
}
