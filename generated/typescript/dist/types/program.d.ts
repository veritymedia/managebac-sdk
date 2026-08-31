import type { ProgramGradesItem } from "./program_grades_item.js";
export interface Program {
    /**
     * Program name in full.
     */
    name?: string;
    /**
     * Short program name.
     */
    shortName?: string;
    /**
     * Unique identificator for a program.
     */
    uid?: number;
    /**
     * Program code.
     */
    code?: string;
    /**
     * Grade of program.
     */
    grades?: ProgramGradesItem[];
}
