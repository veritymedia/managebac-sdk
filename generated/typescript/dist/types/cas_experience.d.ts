import type { CasExperienceStatus } from "./cas_experience_status.js";
import type { CasExperienceStatusAnnotations } from "./cas_experience_status_annotations.js";
import type { CasExperienceSupervisor } from "./cas_experience_supervisor.js";
import type { CasExperienceServiceActionType } from "./cas_experience_service_action_type.js";
export interface CasExperience {
    id: number;
    name: string;
    status: CasExperienceStatus;
    statusAnnotations?: CasExperienceStatusAnnotations;
    supervisor?: CasExperienceSupervisor;
    casProject?: boolean;
    creativity?: boolean;
    creativityHours?: number;
    activity?: boolean;
    activityHours?: number;
    service?: boolean;
    serviceHours?: number;
    serviceActionType?: CasExperienceServiceActionType | null;
    ongoingApproach?: boolean;
    schoolBasedApproach?: boolean;
    communityBasedApproach?: boolean;
    individualApproach?: boolean;
    startDate?: string | null;
    endDate?: string | null;
    slug: string;
}
