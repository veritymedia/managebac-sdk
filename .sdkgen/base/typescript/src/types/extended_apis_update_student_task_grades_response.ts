import type { UpdateStudentTaskGrade } from "./update_student_task_grade.js";
import type { StudentAssessPrepTaskGrade } from "./student_assess_prep_task_grade.js";

export type ExtendedApisUpdateStudentTaskGradesResponse = UpdateStudentTaskGrade | StudentAssessPrepTaskGrade | { [key: string]: unknown };
