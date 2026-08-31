import type { Meta } from "./meta.js";
import type { SubjectsResponseSubjectsItem } from "./subjects_response_subjects_item.js";
export interface SubjectsResponse {
    meta?: Meta;
    subjects?: SubjectsResponseSubjectsItem[];
}
