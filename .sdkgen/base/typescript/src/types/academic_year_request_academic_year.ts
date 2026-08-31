import type { AcademicTerm } from "./academic_term.js";

export interface AcademicYearRequestAcademicYear {
  /**
   * Academic Terms.
   */
  termsAttributes?: AcademicTerm[];
}
