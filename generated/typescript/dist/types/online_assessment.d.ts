import type { OnlineAssessmentMode } from "./online_assessment_mode.js";
export interface OnlineAssessment {
    /**
     * Unique ID in ManageBac
     */
    id?: number;
    /**
     * Unique user ID in ManageBac
     */
    userId?: number;
    /**
     * Online Assessment title
     */
    title?: string;
    mode?: OnlineAssessmentMode;
    /**
     * Max points for Diploma task with points assessment model or MYP task with local points assessment model
     */
    points?: number;
    /**
     * Online Assessment duration in minutes
     */
    duration?: number;
    /**
     * Unique identifier for an AssessPrep task
     */
    assessPrepUid?: string;
    /**
     * Unique AssessPrep task UUID
     */
    assessPrepUuid?: string;
    /**
     * ISO8601 datetime for Online Assessment due date & time.
     */
    startAt?: string;
    /**
     * Created date; yyyy-mm-dd.
     */
    createdAt?: string;
    /**
     * Updated date; yyy-mm-dd
     */
    updatedAt?: string;
    /**
     * Unique task ID in ManageBac
     */
    taskId?: number;
    /**
     * Author email
     */
    email?: string;
    /**
     * Program code
     */
    programCode?: string;
    /**
     * Grade code
     */
    gradeCode?: string;
    /**
     * Author role in ManageBac
     */
    role?: string;
    /**
     * Subject name
     */
    subject?: string;
    /**
     * Subject Group name
     */
    subjectGroup?: string;
}
