import type { StudentsArchiveStudentRequestVariant1 } from "./students_archive_student_request_variant1.js";
import type { StudentsArchiveStudentRequestVariant2 } from "./students_archive_student_request_variant2.js";

export type StudentsArchiveStudentRequest = StudentsArchiveStudentRequestVariant1 | StudentsArchiveStudentRequestVariant2 | { [key: string]: unknown };
