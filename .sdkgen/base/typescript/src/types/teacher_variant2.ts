export interface TeacherVariant2 {
  /**
   * Unique numeric identifier for this teacher in ManageBac. Read-only.
   */
  id?: number;
  /**
   * The user's role. Always "Teacher" for records returned by the Teachers endpoint.
   */
  role?: string;
  /**
   * External identifier from SchoolsBuddy, if the school uses that integration. May be null.
   */
  sbId?: string;
  /**
   * External identifier from OpenApply, if the school uses that integration. May be null.
   */
  oaId?: string;
  /**
   * Program UIDs the teacher is assigned to teach. Format is "{program_uid}" matching the uid field in the Program schema. Controls which programs the teacher appears in.
   * 
   */
  programs?: string[];
}
