export interface TeachersListTeacherClassesMembershipsResponseClassesItem {
    /**
     * Unique identifier for the class.
     */
    id?: number;
    /**
     * A school-defined unique identifier for the class, used for external system integrations. May be null.
     */
    uniqId?: string | null;
    /**
     * Display name of the class.
     */
    name?: string;
    /**
     * Whether the class has been archived.
     */
    archived?: boolean;
    /**
     * ID of the academic term when this class starts. Null if no term is assigned.
     */
    startTermId?: number | null;
    /**
     * ID of the academic term when this class ends. Null if no term is assigned.
     */
    endTermId?: number | null;
    /**
     * Whether this teacher appears on report cards for this class.
     */
    showOnReports?: boolean;
}
