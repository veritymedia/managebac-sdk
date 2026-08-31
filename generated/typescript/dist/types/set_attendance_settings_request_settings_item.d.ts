export interface SetAttendanceSettingsRequestSettingsItem {
    /**
     * Attendance period number.
     */
    period: number;
    /**
     * Day of the week or rotation day number.
     */
    day: number;
    /**
     * Lesson location.
     */
    location?: string;
}
