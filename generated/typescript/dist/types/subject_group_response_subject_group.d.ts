export interface SubjectGroupResponseSubjectGroup {
    /**
     * Unique ID for Subject Group in ManageBac.
     */
    id?: number;
    /**
     * Subject Group name.
     */
    name?: string;
    /**
     * Whether the Subject Group is a custom one created by the school.
     */
    custom?: boolean;
    /**
     * Phases Range (only allowed in the IB PYP program). Possible values are '4' or '5'. The default value is '5'.
     */
    maxPhase?: string;
    /**
     * Program code (allowed values are ib_pyp, hs, ms, ps).
     */
    program?: string;
    /**
     * Updated datetime.
     */
    updatedAt?: string;
}
