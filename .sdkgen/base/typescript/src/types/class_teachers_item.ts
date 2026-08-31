export interface ClassTeachersItem {
  /**
   * Uniq ID in ManageBac.
   */
  teacherId?: number;
  /**
   * Determines if teach should be shown on reports.
   */
  showOnReports?: boolean;
  /**
   * DDetermines if teacher is archived.
   */
  teacherArchived?: boolean;
}
