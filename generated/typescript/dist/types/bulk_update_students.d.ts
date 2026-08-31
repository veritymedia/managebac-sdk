import type { BulkUpdateStudentsStudentsItem } from "./bulk_update_students_students_item.js";
export interface BulkUpdateStudents {
    /**
     * An array of student IDs to add or update in the class.
     */
    students: BulkUpdateStudentsStudentsItem[];
}
