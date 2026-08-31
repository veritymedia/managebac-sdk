import type { YearGroupPblPresentationComponentStatusProgress } from "./year_group_pbl_presentation_component_status_progress.js";

export interface YearGroupPblPresentationComponentStatus {
  /**
   * Completed status
   */
  completed?: boolean;
  /**
   * Approved status
   */
  approved?: boolean;
  progress?: YearGroupPblPresentationComponentStatusProgress;
}
