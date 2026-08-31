export interface YearGroup {
    /**
     * Year Group ID.
     */
    id?: number;
    /**
     * Year Group name
     */
    name?: string;
    /**
     * Year Group short name
     */
    shortName?: string;
    /**
     * Full display name of the curriculum program this year group belongs to.
     */
    program?: string;
    /**
     * Short code identifying the curriculum program (e.g. "myp", "diploma", "igcse").
     */
    programCode?: string;
    /**
     * Grade name
     */
    grade?: string;
    /**
     * Whether this year group has been archived. Archived year groups are hidden from most views but retain historical data.
     */
    archived?: boolean;
    /**
     * Numeric grade level used for sorting and matching across programs.
     */
    gradeNumber?: number;
    /**
     * The calendar year in which students in this year group are expected to graduate.
     */
    graduationYear?: number;
    studentIds?: number[];
}
