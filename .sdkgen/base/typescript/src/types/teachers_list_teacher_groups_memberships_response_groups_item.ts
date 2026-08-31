export interface TeachersListTeacherGroupsMembershipsResponseGroupsItem {
  /**
   * Unique identifier for the group.
   */
  id?: number;
  /**
   * Display name of the group.
   */
  name?: string;
  /**
   * Whether the group has been archived.
   */
  archived?: boolean;
  /**
   * Whether this teacher is an advisor for the group.
   */
  groupAdvisor?: boolean;
  /**
   * Whether this teacher is the primary advisor. Each group can have one primary advisor.
   */
  primaryGroupAdvisor?: boolean;
}
