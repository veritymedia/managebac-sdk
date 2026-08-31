import type { AttendanceExcusalsResponse } from "./attendance_excusals_response.js";
import type { Meta } from "./meta.js";

export interface AttendanceGetStudentExcusalsResponse {
  excusals?: AttendanceExcusalsResponse[];
  meta?: Meta;
}
