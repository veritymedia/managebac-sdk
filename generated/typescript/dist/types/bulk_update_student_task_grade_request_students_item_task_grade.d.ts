import type { UpdateStudentTaskGrade } from "./update_student_task_grade.js";
import type { UpdateStudentAssessPrepTaskGrade } from "./update_student_assess_prep_task_grade.js";
export type BulkUpdateStudentTaskGradeRequestStudentsItemTaskGrade = UpdateStudentTaskGrade | UpdateStudentAssessPrepTaskGrade | {
    [key: string]: unknown;
};
