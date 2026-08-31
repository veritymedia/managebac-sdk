import type { UpsertClassesClassesItemVariant1SubjectOption } from "./upsert_classes_classes_item_variant1_subject_option.js";
export interface UpsertClassesClassesItemVariant1 {
    /**
     * Unique ID in ManageBac.
     */
    id?: number;
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
    subjectOption?: UpsertClassesClassesItemVariant1SubjectOption;
    /**
     * Lock Memberships.
     */
    lockMemberships?: string;
}
