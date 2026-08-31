export interface AcademicTermAttributes {
    /**
     * Unique ID in ManageBac.
     */
    id?: number;
    /**
     * Unique ID in ManageBac.
     */
    academicYearId?: number;
    /**
     * Academic Term name.
     */
    name?: string;
    /**
     * Academic Term start date
     */
    startsOn?: string;
    /**
     * Academic Term end date
     */
    endsOn?: string;
    /**
     * Restrict teachers from making any changes to term grades.
     */
    locked?: boolean;
    /**
     * Enable Exam Grade.
     */
    examGrade?: boolean;
    /**
     * Updated date; yyyy-mm-dd.
     */
    updatedAt?: string;
}
