import type { MembershipLevel } from "./membership_level.js";
/**
 * Represents a user’s enrollment in a class, with their role and level.
 */
export interface Membership {
    /**
     * Unique numeric identifier for this membership record.
     */
    id?: number;
    /**
     * ManageBac ID of the user (student or teacher) in this membership.
     */
    userId?: number;
    /**
     * Course level for IB Diploma classes. 0 = Standard Level (SL), 1 = Higher Level (HL). Not applicable for non-IB programs.
     */
    level?: MembershipLevel;
    /**
     * When this membership was created, in ISO 8601 format.
     */
    createdAt?: string;
    /**
     * When this membership was last modified, in ISO 8601 format.
     */
    updatedAt?: string;
    /**
     * ManageBac ID of the class this membership belongs to.
     */
    classId?: number;
    /**
     * Email address of the enrolled user.
     */
    userEmail?: string;
    /**
     * The school’s own unique identifier for the class (set by the school, not by ManageBac).
     */
    uniqClassId?: string;
    /**
     * The school’s own unique identifier for the student (same as student_id on the Student schema).
     */
    uniqStudentId?: string;
    /**
     * The user’s role in this class, either "student" or "teacher".
     */
    role?: string;
}
