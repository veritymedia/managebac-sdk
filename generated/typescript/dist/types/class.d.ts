import type { ClassSubjectsItem } from "./class_subjects_item.js";
import type { ClassTeachersItem } from "./class_teachers_item.js";
export interface Class {
    /**
     * Unique ID in ManageBac.
     */
    id?: number;
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
     * Academic term ID.
     */
    startTermId?: number;
    /**
     * Academic term ID.
     */
    endTermId?: number;
    /**
     * Created date; yyyy-mm-dd.
     */
    createdAt?: string;
    /**
     * Updated date; yyyy-mm-dd.
     */
    updatedAt?: string;
    /**
     * Grade name.
     */
    grade?: string;
    /**
     * Grade number.
     */
    gradeNumber?: number;
    /**
     * Applicable Levels.
     */
    applicableLevels?: string[];
    /**
     * Program name.
     */
    program?: string;
    /**
     * Program code.
     */
    programCode?: string;
    /**
     * Subject’s unique ID.
     */
    subjectId?: number;
    /**
     * Subject Name.
     */
    subjectName?: string;
    /**
     * Subject group.
     */
    subjectGroup?: string;
    /**
     * Subject option.
     */
    subjectOption?: string;
    /**
     * Lock Memberships.
     */
    lockMemberships?: string;
    /**
     * Archive Class.
     */
    archived?: boolean;
    subjects?: ClassSubjectsItem[];
    teachers?: ClassTeachersItem[];
}
