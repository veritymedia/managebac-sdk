import type { ServiceLearningOutcomeStudentOverallProgress } from "./service_learning_outcome_student_overall_progress.js";
import type { ServiceLearningOutcomeStudentComponent } from "./service_learning_outcome_student_component.js";
export interface ServiceLearningOutcomeStudent {
    id: number;
    identifier?: string | null;
    /**
     * The student's assigned SL status title (or translated standard CAS label). Falls back to the school's default status (or "To Be Determined" on the standard scale) when none is assigned; always present, never null.
     */
    status: string;
    /**
     * Normalized status slug. Falls back to "to_be_determined" when no status is assigned; always present, never null.
     */
    overallProgress: ServiceLearningOutcomeStudentOverallProgress;
    component: ServiceLearningOutcomeStudentComponent;
}
