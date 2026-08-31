import type { YearGroupPblStudentNotesReviewsComponentComponentItemsItemAuthor } from "./year_group_pbl_student_notes_reviews_component_component_items_item_author.js";
export interface YearGroupPblStudentNotesReviewsComponentComponentItemsItem {
    /**
     * Note ID
     */
    id?: number;
    author?: YearGroupPblStudentNotesReviewsComponentComponentItemsItemAuthor;
    /**
     * Identifies interview
     */
    interview?: boolean;
    /**
     * Interview title
     */
    title?: string | null;
    /**
     * Note details
     */
    body?: string;
    /**
     * When the note/interview was posted (ISO 8601 datetime).
     */
    postedAt?: string;
}
