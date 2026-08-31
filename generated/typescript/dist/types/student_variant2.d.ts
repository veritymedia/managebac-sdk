export interface StudentVariant2 {
    /**
     * Unique numeric identifier for this student in ManageBac. Read-only.
     */
    id?: number;
    /**
     * External identifier from SchoolsBuddy, if the school uses that integration. May be null.
     */
    sbId?: string;
    /**
     * External identifier from OpenApply, if the school uses that integration. May be null.
     */
    oaId?: string;
    /**
     * Date when the student graduated, in yyyy-mm-dd format. Only present for students with a "graduated" status. Null for active or withdrawn students.
     *
     */
    graduatedOn?: string;
    /**
     * Date when the student was withdrawn from the school, in yyyy-mm-dd format. Only present for students with a "withdrawn" status. Null for active or graduated students.
     *
     */
    withdrawnOn?: string;
    /**
     * The school’s own unique identifier for this student (e.g. a student number). Set by the school, not by ManageBac.
     */
    studentId?: string;
    /**
     * ManageBac ID of the teacher assigned as this student’s homeroom advisor (tutor). Null if not assigned.
     */
    homeroomAdvisorId?: number;
    /**
     * ManageBac ID of the year group this student is currently enrolled in.
     */
    yearGroupId?: number;
    /**
     * The calendar year in which the student is expected to graduate. This is a four-digit year, not a date.
     */
    graduatingYear?: number;
    /**
     * ManageBac IDs of the parent/guardian records linked to this student.
     */
    parentIds?: number[];
}
