import type { BulkUpdateTeachersTeachersItem } from "./bulk_update_teachers_teachers_item.js";
export interface BulkUpdateTeachers {
    /**
     * An array of teacher IDs to add or update in the class.
     */
    teachers: BulkUpdateTeachersTeachersItem[];
}
