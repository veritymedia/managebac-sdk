import type { YearGroupPblReflectionsComponentStatusProgress } from "./year_group_pbl_reflections_component_status_progress.js";

export interface YearGroupPblReflectionsComponentStatus {
  /**
   * Completed status
   */
  completed?: boolean;
  /**
   * Approved status
   */
  approved?: boolean;
  progress?: YearGroupPblReflectionsComponentStatusProgress;
}
