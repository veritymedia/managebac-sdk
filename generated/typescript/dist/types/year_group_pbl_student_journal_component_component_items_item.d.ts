import type { YearGroupPblStudentJournalComponentComponentItemsItemFilesItem } from "./year_group_pbl_student_journal_component_component_items_item_files_item.js";
import type { YearGroupPblStudentJournalComponentComponentItemsItemPhotosItem } from "./year_group_pbl_student_journal_component_component_items_item_photos_item.js";
export interface YearGroupPblStudentJournalComponentComponentItemsItem {
    /**
     * Journal entry ID
     */
    id?: number;
    /**
     * Entry kind
     */
    kind?: string;
    /**
     * Entry title
     */
    title?: string | null;
    /**
     * Entry description
     */
    description?: string | null;
    /**
     * Entry author ID
     */
    authorId?: number;
    /**
     * Entry creation time (ISO 8601)
     */
    createdAt?: string;
    files?: YearGroupPblStudentJournalComponentComponentItemsItemFilesItem[];
    /**
     * Entry body
     */
    body?: string;
    photos?: YearGroupPblStudentJournalComponentComponentItemsItemPhotosItem[];
    /**
     * Entry URL
     */
    url?: string | null;
}
