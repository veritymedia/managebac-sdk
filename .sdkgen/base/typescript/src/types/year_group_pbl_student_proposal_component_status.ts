import type { YearGroupPblStudentProposalComponentStatusProgress } from "./year_group_pbl_student_proposal_component_status_progress.js";

export interface YearGroupPblStudentProposalComponentStatus {
  /**
   * Completed status
   */
  completed?: boolean;
  /**
   * Approved status
   */
  approved?: boolean;
  progress?: YearGroupPblStudentProposalComponentStatusProgress;
}
