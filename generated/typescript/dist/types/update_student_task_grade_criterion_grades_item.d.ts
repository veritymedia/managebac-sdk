export interface UpdateStudentTaskGradeCriterionGradesItem {
    /**
     * Criterion letter, e.g. "A"
     */
    label?: string;
    /**
     * Criterion name (response only), e.g. "Analysing"
     */
    criterion?: string;
    /**
     * Achievement level for the criterion (-1 marks it N/A)
     */
    score?: number;
}
