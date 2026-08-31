export interface BulkStudentTaskGradeResponseValueItem {
    /**
     * Unique identifier for a student in ManageBac
     */
    id?: number;
    /**
     * Response status for a student
     */
    status?: string;
    /**
     * Error details if any
     */
    error?: unknown;
}
