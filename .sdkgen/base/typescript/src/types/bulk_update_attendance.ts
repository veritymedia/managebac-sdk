import type { BulkUpdateAttendanceAttendancesItem } from "./bulk_update_attendance_attendances_item.js";

export interface BulkUpdateAttendance {
  /**
   * An array of Attendances data.
   */
  attendances: BulkUpdateAttendanceAttendancesItem[];
}
