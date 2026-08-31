export interface BulkUpdateAttendanceAttendancesItem {
  /**
   * Student ID.
   */
  studentId?: number;
  /**
   * Date of attendance.
   */
  date?: string;
  /**
   * Attendance period number.
   */
  period?: number;
  /**
   * Attendance status ID.
   */
  status?: number;
  /**
   * Teacher notes.
   */
  notes?: string;
}
