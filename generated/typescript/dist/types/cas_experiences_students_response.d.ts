import type { CasStudent } from "./cas_student.js";
import type { PaginationMeta } from "./pagination_meta.js";
export interface CasExperiencesStudentsResponse {
    students: CasStudent[];
    meta: PaginationMeta;
}
