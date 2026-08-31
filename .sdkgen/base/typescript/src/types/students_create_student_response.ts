import type { Student } from "./student.js";
import type { StudentsCreateStudentResponseOptions } from "./students_create_student_response_options.js";

export interface StudentsCreateStudentResponse {
  student?: Student;
  options?: StudentsCreateStudentResponseOptions;
}
