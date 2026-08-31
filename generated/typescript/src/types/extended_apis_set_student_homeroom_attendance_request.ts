import type { ExtendedApisSetStudentHomeroomAttendanceRequestStatus } from "./extended_apis_set_student_homeroom_attendance_request_status.js";

export interface ExtendedApisSetStudentHomeroomAttendanceRequest {
  /**
   * Attendance date in yyyy-mm-dd format
   */
  date?: string;
  /**
   * Available statuses:  
   *  0 - Absent  
   * 1 - Present  
   * 2 - Late  
   * 3 - Dress Code  
   * 4 - Late & Dress Code  
   * 5 - Dismissed  
   * 10 - Health  
   * 11 - Sports  
   * 12 - Fieldtrip  
   * 13 - Excused  
   * 14 - Other  
   * 15 - Custom 1  
   * 16 - Custom 2  
   * 17 - Custom 3  
   * 18 - Custom 4
   */
  status?: ExtendedApisSetStudentHomeroomAttendanceRequestStatus;
  /**
   * Optional free-text notes for the attendance record
   */
  notes?: string;
}
