import type { Teacher } from "./teacher.js";
import type { TeachersCreateTeacherResponseOptions } from "./teachers_create_teacher_response_options.js";
export interface TeachersCreateTeacherResponse {
    teacher?: Teacher;
    options?: TeachersCreateTeacherResponseOptions;
}
