import type { Meta } from "./meta.js";
import type { SubjectGroupsResponseSubjectGroupsItem } from "./subject_groups_response_subject_groups_item.js";
export interface SubjectGroupsResponse {
    meta?: Meta;
    subjectGroups?: SubjectGroupsResponseSubjectGroupsItem[];
}
