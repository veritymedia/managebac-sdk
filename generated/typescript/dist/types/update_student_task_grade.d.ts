import type { UpdateStudentTaskGradeCriterionGradesItem } from "./update_student_task_grade_criterion_grades_item.js";
export interface UpdateStudentTaskGrade {
    /**
     * Unique identifier for an author in ManageBac
     */
    authorId?: number;
    /**
     * Grade points
     */
    points?: number;
    /**
     * Grade comment
     */
    comment?: string;
    /**
     * Determines if task is completed or not
     */
    binary?: boolean;
    /**
     * Optional per-criterion achievement levels for MYP criteria-based tasks (summative, or formative with criteria). Providing it for a non-criteria task returns a 422. A score of -1 marks the criterion as N/A. On the response each entry also includes the criterion name under `criterion`.
     */
    criterionGrades?: UpdateStudentTaskGradeCriterionGradesItem[];
}
