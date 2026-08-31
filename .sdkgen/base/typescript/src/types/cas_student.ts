import type { CasStudentOverallProgress } from "./cas_student_overall_progress.js";
import type { CasStudentComponent } from "./cas_student_component.js";

export interface CasStudent {
  id: number;
  identifier?: string | null;
  /**
   * The student's CAS aims and goals statement. May be blank and may contain HTML markup.
   */
  aimsAndGoals: string;
  /**
   * Normalized overall CAS progress slug (standard CAS scale). A subset of the Service Learning Outcomes overall_progress vocabulary.
   */
  overallProgress: CasStudentOverallProgress;
  component: CasStudentComponent;
}
