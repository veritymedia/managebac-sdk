import type { UnitGuidingQuestionsInquiryQuestionsItemSubjectsItem } from "./unit_guiding_questions_inquiry_questions_item_subjects_item.js";
import type { UnitGuidingQuestionsInquiryQuestionsItemLabelsItem } from "./unit_guiding_questions_inquiry_questions_item_labels_item.js";
export interface UnitGuidingQuestionsInquiryQuestionsItem {
    id?: number;
    lineOfInquiry?: string | null;
    question?: string | null;
    subjects?: UnitGuidingQuestionsInquiryQuestionsItemSubjectsItem[];
    labels?: UnitGuidingQuestionsInquiryQuestionsItemLabelsItem[];
}
