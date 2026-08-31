import type { ServiceLearningCategoryStudent } from "./service_learning_category_student.js";
import type { PaginationMeta } from "./pagination_meta.js";
export interface ServiceLearningCategoriesStudentsResponse {
    students: ServiceLearningCategoryStudent[];
    meta: PaginationMeta;
}
