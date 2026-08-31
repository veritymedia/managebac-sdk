import type { UpdateClassSubjectOption } from "./update_class_subject_option.js";

export interface UpdateClass {
  /**
   * Archive Class.
   */
  archived?: boolean;
  /**
   * Class Name.
   */
  name?: string;
  /**
   * Class description.
   */
  description?: string;
  /**
   * Language of Instruction. Receives a language code.
   */
  language?: string;
  /**
   * Unique ID in ManageBac.
   */
  uniqId?: string;
  /**
   * Identifier for a duplicated class/grade.
   */
  classSection?: string;
  /**
   * Subjects unique IDs.
   */
  subjectIds?: number[];
  /**
   * SL level
   */
  sl?: boolean;
  /**
   * HL level
   */
  hl?: boolean;
  /**
   * Subject option.
   */
  subjectOption?: UpdateClassSubjectOption;
  /**
   * Lock Memberships.
   */
  lockMemberships?: string;
}
