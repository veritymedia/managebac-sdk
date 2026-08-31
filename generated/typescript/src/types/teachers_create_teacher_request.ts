import type { TeachersCreateTeacherRequestTeacher } from "./teachers_create_teacher_request_teacher.js";
import type { TeachersCreateTeacherRequestOptions } from "./teachers_create_teacher_request_options.js";

export interface TeachersCreateTeacherRequest {
  teacher: TeachersCreateTeacherRequestTeacher;
  /**
   * Request directives applied during the create operation.
   */
  options?: TeachersCreateTeacherRequestOptions;
}
