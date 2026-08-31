export interface AttendanceExcusalsResponseExcusalsItem {
  /**
   * Unique ID for the excusal.
   */
  id?: number;
  /**
   * Unique ID for the student.
   */
  studentId?: number;
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
   * Duration of the excusal in days.
   */
  duration?: number;
  /**
   * Comment or reason for the excusal.
   */
  comment?: string;
  /**
   * Created datetime.
   */
  createdAt?: string;
  /**
   * Updated datetime.
   */
  updatedAt?: string;
}
