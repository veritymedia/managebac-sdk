import type { CasExperienceStatusProgress } from "./cas_experience_status_progress.js";

export interface CasExperienceStatus {
  postApproved: boolean;
  preApproved: boolean;
  progress: CasExperienceStatusProgress;
}
