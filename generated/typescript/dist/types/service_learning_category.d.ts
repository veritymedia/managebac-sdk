import type { ServiceLearningCategoryStatus } from "./service_learning_category_status.js";
import type { ServiceLearningCategoryStatusAnnotations } from "./service_learning_category_status_annotations.js";
import type { ServiceLearningCategorySupervisor } from "./service_learning_category_supervisor.js";
import type { ServiceLearningCategoryLearningOutcome } from "./service_learning_category_learning_outcome.js";
export interface ServiceLearningCategory {
    id: number;
    name: string;
    status: ServiceLearningCategoryStatus;
    statusAnnotations?: ServiceLearningCategoryStatusAnnotations;
    supervisor?: ServiceLearningCategorySupervisor;
    activityType?: string;
    startDate?: string | null;
    endDate?: string | null;
    learningOutcomes?: ServiceLearningCategoryLearningOutcome[];
    slug: string;
}
