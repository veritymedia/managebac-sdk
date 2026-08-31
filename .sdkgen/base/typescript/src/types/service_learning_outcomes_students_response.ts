import type { ServiceLearningOutcomeStudent } from "./service_learning_outcome_student.js";
import type { PaginationMeta } from "./pagination_meta.js";

export interface ServiceLearningOutcomesStudentsResponse {
  students: ServiceLearningOutcomeStudent[];
  meta: PaginationMeta;
}
