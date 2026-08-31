export interface CreateAttendanceExcusalRequestExcusal {
    /**
     * Unique ID for the parent.
     */
    parentId?: number;
    /**
     * Start date of the excusal.
     */
    startDate?: string;
    /**
     * End date of the excusal.
     */
    endDate?: string;
    /**
     * Comment or reason for the excusal.
     */
    comment?: string;
}
