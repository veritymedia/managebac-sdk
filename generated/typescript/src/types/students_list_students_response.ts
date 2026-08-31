import type { Student } from "./student.js";
import type { Meta } from "./meta.js";

export interface StudentsListStudentsResponse {
  students?: Student[];
  meta?: Meta;
}
