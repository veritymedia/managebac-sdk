import type { UpdateOnlineAssessmentMode } from "./update_online_assessment_mode.js";
import type { UpdateOnlineAssessmentStatus } from "./update_online_assessment_status.js";
import type { UpdateOnlineAssessmentCriteriaLabelsItem } from "./update_online_assessment_criteria_labels_item.js";
export interface UpdateOnlineAssessment {
    /**
     * Unique identifier for an AssessPrep task
     */
    assessPrepUid?: string;
    /**
     * New ManageBac task title
     */
    title: string;
    /**
     * Online Assessment mode
     */
    mode: UpdateOnlineAssessmentMode;
    /**
     * Questions count in online assessment
     */
    questionsCount?: number;
    /**
     * Max points for Diploma task with points assessment model or MYP task with local points assessment model
     */
    points?: number;
    /**
     * Online Assessment duration in minutes
     */
    duration?: number;
    /**
     * ISO8601 datetime for Online Assessment due date & time.
     */
    startAt?: string;
    status?: UpdateOnlineAssessmentStatus;
    /**
     * Switch to enable/disable video monitoring
     */
    videoMonitoring?: boolean;
    /**
     * Criteria labels
     */
    criteriaLabels?: UpdateOnlineAssessmentCriteriaLabelsItem[];
}
