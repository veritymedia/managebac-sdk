import type { ServiceLearningComponent } from "./service_learning_component.js";

export interface ServiceLearningSettingsServiceLearning {
  title?: string | null;
  description?: string | null;
  abbreviation?: string | null;
  components: ServiceLearningComponent[];
}
