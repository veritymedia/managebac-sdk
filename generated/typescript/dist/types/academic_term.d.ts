/**
 * A term (semester/trimester/quarter) within an academic year. Terms define the time periods for which term grades are recorded.
 */
export interface AcademicTerm {
    /**
     * Display name for this term (e.g. "Semester 1", "Term 2"). Required on create.
     */
    name: string;
    /**
     * First day of the term in yyyy-mm-dd format. Required on create.
     */
    startsOn: string;
    /**
     * Last day of the term in yyyy-mm-dd format. Required on create.
     */
    endsOn: string;
    /**
     * When true, teachers cannot edit term grades for this term. Typically locked after grades are finalized and published.
     */
    locked?: boolean;
    /**
     * When true, an additional exam grade column is available alongside the regular term grade. Used in IB Diploma for predicted vs exam grades.
     */
    enableExamGrade?: boolean;
}
