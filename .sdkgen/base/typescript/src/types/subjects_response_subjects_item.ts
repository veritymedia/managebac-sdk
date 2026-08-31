export interface SubjectsResponseSubjectsItem {
  /**
   * Unique ID for subject in ManageBac.
   */
  id?: number;
  /**
   * Unique ID for subject group in ManageBac.
   */
  subjectGroupId?: number;
  /**
   * The boolean value defines whether the Subject is custom or system.
   */
  custom?: boolean;
  /**
   * Subject name.
   */
  name?: string;
  /**
   * Subject title.
   */
  title?: string;
  /**
   * Subject SL level.
   */
  sl?: boolean;
  /**
   * Subject HL level.
   */
  hl?: boolean;
  /**
   * Subject SL code
   */
  slCode?: string;
  /**
   * Subject HL code
   */
  hlCode?: string;
  /**
   * Subject description
   */
  description?: string;
  /**
   * Subject Scope & Sequence based on value.
   */
  scopeAndSequenceBasedOn?: string;
  /**
   * Updated date; yyyy-mm-dd.
   */
  updatedAt?: string;
  /**
   * Self taught subject
   */
  selfTaught?: boolean;
  phases?: string[];
  /**
   * Language levels
   */
  levels?: string[];
  /**
   * Describe if school subject enabled
   */
  enabled?: boolean;
}
