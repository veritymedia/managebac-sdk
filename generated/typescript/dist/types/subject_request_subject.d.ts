export interface SubjectRequestSubject {
    /**
     * Unique ID for subject group in ManageBac.
     */
    subjectGroupId?: number;
    /**
     * Subject name.
     */
    name?: string;
    /**
     * Subject title.
     */
    title?: string;
    /**
     * Subject description.
     */
    description?: string;
    /**
     * Subject Scope & Sequence based on value.
     */
    scopeAndSequenceBasedOn?: string;
    /**
     * Subject SL level.
     */
    sl?: boolean;
    /**
     * Subject HL level.
     */
    hl?: boolean;
    /**
     * Enable/disable school subject.
     */
    enabled?: boolean;
    /**
     * Subject custom code
     */
    code?: string;
}
