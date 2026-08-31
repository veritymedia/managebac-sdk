import type { AcademicTermAttributes } from "./academic_term_attributes.js";
export interface AcademicYearResponseAcademicYear {
    /**
     * Unique ID in ManageBac.
     */
    id?: number;
    /**
     * Academic Year name.
     */
    name?: string;
    /**
     * Academic Year start date.
     */
    startsOn?: string;
    /**
     * Academic Year end date.
     */
    endsOn?: string;
    /**
     * Updated date; yyyy-mm-dd.
     */
    updatedAt?: string;
    /**
     * Academic Year program.
     */
    program?: string;
    /**
     * Academic Terms.
     */
    academicTerms?: AcademicTermAttributes[];
}
