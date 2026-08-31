import type { ServiceLearningCategoryStatusProgress } from "./service_learning_category_status_progress.js";
export interface ServiceLearningCategoryStatus {
    postApproved: boolean;
    preApproved: boolean;
    progress: ServiceLearningCategoryStatusProgress;
}
