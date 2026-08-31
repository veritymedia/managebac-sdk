export interface BehaviorNote {
    /**
     * Unique ID for note in ManageBac.
     */
    id?: number;
    /**
     * School’s own unique ID for student.
     */
    studentId?: string;
    email?: string;
    /**
     * Student’s first given name.
     */
    firstName?: string;
    /**
     * Student’s surname.
     */
    lastName?: string;
    /**
     * Grade name.
     */
    grade?: string;
    /**
     * Date/time stamp for incident.
     */
    incidentTime?: string;
    /**
     * Behavior triggering intervention.
     */
    behaviorType?: string;
    /**
     * Reporter’s notes.
     */
    notes?: string;
    /**
     * Intervention.
     */
    nextStep?: string;
    /**
     * Date of intervention; yyyy-mm-dd.
     */
    nextStepDate?: string;
    /**
     * Reporter name.
     */
    reportedBy?: string;
    /**
     * Homeroom Advisor name.
     */
    homeroomAdvisor?: string;
}
