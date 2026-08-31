import type { ServiceLearningCategoryStudentComponent } from "./service_learning_category_student_component.js";

export interface ServiceLearningCategoryStudent {
  id: number;
  identifier?: string | null;
  component: ServiceLearningCategoryStudentComponent;
}
