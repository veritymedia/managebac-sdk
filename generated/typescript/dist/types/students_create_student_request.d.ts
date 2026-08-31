import type { StudentsCreateStudentRequestStudent } from "./students_create_student_request_student.js";
import type { StudentsCreateStudentRequestOptions } from "./students_create_student_request_options.js";
export interface StudentsCreateStudentRequest {
    student: StudentsCreateStudentRequestStudent;
    /**
     * Request directives applied during the create operation.
     */
    options?: StudentsCreateStudentRequestOptions;
}
