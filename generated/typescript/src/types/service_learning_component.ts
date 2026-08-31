import type { ServiceLearningCategoryType } from "./service_learning_category_type.js";
import type { ServiceLearningConfiguredOutcome } from "./service_learning_configured_outcome.js";

export interface ServiceLearningComponent {
  slug: string;
  label: string;
  types?: ServiceLearningCategoryType[] | null;
  outcomes?: ServiceLearningConfiguredOutcome[] | null;
}
