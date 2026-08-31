import type { ApiClient, RequestOptions } from "../core.js";
import type { BulkUpdateStudents } from "../types/bulk_update_students.js";
import type { UpsertClasses } from "../types/upsert_classes.js";
import type { UpsertClassesResponse } from "../types/upsert_classes_response.js";
import type { BulkUpdateAttendance } from "../types/bulk_update_attendance.js";
import type { ToggleSchoolSubjectsRequest } from "../types/toggle_school_subjects_request.js";
import type { UpdateAttendanceExcusalRequest } from "../types/update_attendance_excusal_request.js";
import type { AttendanceExcusalsResponse } from "../types/attendance_excusals_response.js";
import type { ExtendedApisSetStudentHomeroomAttendanceRequest } from "../types/extended_apis_set_student_homeroom_attendance_request.js";
import type { ExtendedApisUpdateStudentTaskGradesRequest } from "../types/extended_apis_update_student_task_grades_request.js";
import type { ExtendedApisUpdateStudentTaskGradesResponse } from "../types/extended_apis_update_student_task_grades_response.js";
import type { BulkUpdateStudentTaskGradeRequest } from "../types/bulk_update_student_task_grade_request.js";
import type { BulkStudentTaskGradeResponse } from "../types/bulk_student_task_grade_response.js";
import type { BulkUpdateTeachers } from "../types/bulk_update_teachers.js";


export interface ExtendedApisBulkUpdateStudentsFromClassParams {
  classId: number;
  body?: BulkUpdateStudents;
}

export interface ExtendedApisUpsertClassesParams {
  body: UpsertClasses;
}

export interface ExtendedApisSetClassAttendanceForStudentsParams {
  id: number;
  body: BulkUpdateAttendance;
}

export interface ExtendedApisBulkEnableSubjectsParams {
  programCode: string;
  body?: ToggleSchoolSubjectsRequest;
}

export interface ExtendedApisBulkDisableSubjectsParams {
  programCode: string;
  body?: ToggleSchoolSubjectsRequest;
}

export interface ExtendedApisUpdateStudentExcusalParams {
  studentId: number;
  id: number;
  body?: UpdateAttendanceExcusalRequest;
}

export interface ExtendedApisDeleteStudentExcusalParams {
  studentId: number;
  id: number;
}

export interface ExtendedApisSetStudentHomeroomAttendanceParams {
  id: number;
  body?: ExtendedApisSetStudentHomeroomAttendanceRequest;
}

export interface ExtendedApisUpdateStudentTaskGradesParams {
  taskId: number;
  studentId: number;
  body?: ExtendedApisUpdateStudentTaskGradesRequest;
}

export interface ExtendedApisBulkUpdateStudentTaskGradesParams {
  taskId: number;
  body?: BulkUpdateStudentTaskGradeRequest;
}

export interface ExtendedApisBulkUpdateTeacherMembershipsParams {
  classId: number;
  body?: BulkUpdateTeachers;
}

export class ExtendedApisResource {

  constructor(private readonly client: ApiClient) {

  }

  async bulkUpdateStudentsFromClass(params: ExtendedApisBulkUpdateStudentsFromClassParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("patch", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/students`, {
      ...options,
      query: undefined,
      body: params.body,
      requestType: "BulkUpdateStudents",
    });
  }

  async upsertClasses(params: ExtendedApisUpsertClassesParams, options: RequestOptions = {}): Promise<UpsertClassesResponse> {
    return this.client.request<UpsertClassesResponse>("patch", "/v2p3/classes", {
      ...options,
      query: undefined,
      body: params.body,
      responseType: "UpsertClassesResponse",
      requestType: "UpsertClasses",
    });
  }

  async setClassAttendanceForStudents(params: ExtendedApisSetClassAttendanceForStudentsParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("put", `/v2p3/classes/${encodeURIComponent(String(params.id))}/attendance`, {
      ...options,
      query: undefined,
      body: params.body,
      requestType: "BulkUpdateAttendance",
    });
  }

  async bulkEnableSubjects(params: ExtendedApisBulkEnableSubjectsParams, options: RequestOptions = {}): Promise<ToggleSchoolSubjectsRequest> {
    return this.client.request<ToggleSchoolSubjectsRequest>("post", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subjects/bulk-enable`, {
      ...options,
      query: undefined,
      body: params.body,
      responseType: "ToggleSchoolSubjectsRequest",
      requestType: "ToggleSchoolSubjectsRequest",
    });
  }

  async bulkDisableSubjects(params: ExtendedApisBulkDisableSubjectsParams, options: RequestOptions = {}): Promise<ToggleSchoolSubjectsRequest> {
    return this.client.request<ToggleSchoolSubjectsRequest>("post", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subjects/bulk-disable`, {
      ...options,
      query: undefined,
      body: params.body,
      responseType: "ToggleSchoolSubjectsRequest",
      requestType: "ToggleSchoolSubjectsRequest",
    });
  }

  async updateStudentExcusal(params: ExtendedApisUpdateStudentExcusalParams, options: RequestOptions = {}): Promise<AttendanceExcusalsResponse> {
    return this.client.request<AttendanceExcusalsResponse>("patch", `/v2p3/students/${encodeURIComponent(String(params.studentId))}/excusals/${encodeURIComponent(String(params.id))}`, {
      ...options,
      query: undefined,
      body: params.body,
      responseType: "AttendanceExcusalsResponse",
      requestType: "UpdateAttendanceExcusalRequest",
    });
  }

  async deleteStudentExcusal(params: ExtendedApisDeleteStudentExcusalParams, options: RequestOptions = {}): Promise<AttendanceExcusalsResponse> {
    return this.client.request<AttendanceExcusalsResponse>("delete", `/v2p3/students/${encodeURIComponent(String(params.studentId))}/excusals/${encodeURIComponent(String(params.id))}`, {
      ...options,
      query: undefined,
      body: undefined,
      responseType: "AttendanceExcusalsResponse",
    });
  }

  async setStudentHomeroomAttendance(params: ExtendedApisSetStudentHomeroomAttendanceParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("put", `/v2p3/students/${encodeURIComponent(String(params.id))}/set_homeroom_attendance`, {
      ...options,
      query: undefined,
      body: params.body,
      requestType: "ExtendedApisSetStudentHomeroomAttendanceRequest",
    });
  }

  async updateStudentTaskGrades(params: ExtendedApisUpdateStudentTaskGradesParams, options: RequestOptions = {}): Promise<ExtendedApisUpdateStudentTaskGradesResponse> {
    return this.client.request<ExtendedApisUpdateStudentTaskGradesResponse>("patch", `/v2p3/tasks/${encodeURIComponent(String(params.taskId))}/students/${encodeURIComponent(String(params.studentId))}`, {
      ...options,
      query: undefined,
      body: params.body,
      responseType: "ExtendedApisUpdateStudentTaskGradesResponse",
      requestType: "ExtendedApisUpdateStudentTaskGradesRequest",
    });
  }

  async bulkUpdateStudentTaskGrades(params: ExtendedApisBulkUpdateStudentTaskGradesParams, options: RequestOptions = {}): Promise<BulkStudentTaskGradeResponse> {
    return this.client.request<BulkStudentTaskGradeResponse>("patch", `/v2p3/tasks/${encodeURIComponent(String(params.taskId))}/students`, {
      ...options,
      query: undefined,
      body: params.body,
      responseType: "BulkStudentTaskGradeResponse",
      requestType: "BulkUpdateStudentTaskGradeRequest",
    });
  }

  async bulkUpdateTeacherMemberships(params: ExtendedApisBulkUpdateTeacherMembershipsParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("put", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/teachers`, {
      ...options,
      query: undefined,
      body: params.body,
      requestType: "BulkUpdateTeachers",
    });
  }

  /** Same methods, returning { data, response } with the raw HTTP Response. */
  get withRawResponse() {
    return {
      bulkUpdateStudentsFromClass: (params: ExtendedApisBulkUpdateStudentsFromClassParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("patch", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/students`, { ...options, query: undefined, body: params.body, requestType: "BulkUpdateStudents", }),
      upsertClasses: (params: ExtendedApisUpsertClassesParams, options: RequestOptions = {}): Promise<{ data: UpsertClassesResponse; response: globalThis.Response }> =>
        this.client.requestRaw<UpsertClassesResponse>("patch", "/v2p3/classes", { ...options, query: undefined, body: params.body, responseType: "UpsertClassesResponse", requestType: "UpsertClasses", }),
      setClassAttendanceForStudents: (params: ExtendedApisSetClassAttendanceForStudentsParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("put", `/v2p3/classes/${encodeURIComponent(String(params.id))}/attendance`, { ...options, query: undefined, body: params.body, requestType: "BulkUpdateAttendance", }),
      bulkEnableSubjects: (params: ExtendedApisBulkEnableSubjectsParams, options: RequestOptions = {}): Promise<{ data: ToggleSchoolSubjectsRequest; response: globalThis.Response }> =>
        this.client.requestRaw<ToggleSchoolSubjectsRequest>("post", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subjects/bulk-enable`, { ...options, query: undefined, body: params.body, responseType: "ToggleSchoolSubjectsRequest", requestType: "ToggleSchoolSubjectsRequest", }),
      bulkDisableSubjects: (params: ExtendedApisBulkDisableSubjectsParams, options: RequestOptions = {}): Promise<{ data: ToggleSchoolSubjectsRequest; response: globalThis.Response }> =>
        this.client.requestRaw<ToggleSchoolSubjectsRequest>("post", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subjects/bulk-disable`, { ...options, query: undefined, body: params.body, responseType: "ToggleSchoolSubjectsRequest", requestType: "ToggleSchoolSubjectsRequest", }),
      updateStudentExcusal: (params: ExtendedApisUpdateStudentExcusalParams, options: RequestOptions = {}): Promise<{ data: AttendanceExcusalsResponse; response: globalThis.Response }> =>
        this.client.requestRaw<AttendanceExcusalsResponse>("patch", `/v2p3/students/${encodeURIComponent(String(params.studentId))}/excusals/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: params.body, responseType: "AttendanceExcusalsResponse", requestType: "UpdateAttendanceExcusalRequest", }),
      deleteStudentExcusal: (params: ExtendedApisDeleteStudentExcusalParams, options: RequestOptions = {}): Promise<{ data: AttendanceExcusalsResponse; response: globalThis.Response }> =>
        this.client.requestRaw<AttendanceExcusalsResponse>("delete", `/v2p3/students/${encodeURIComponent(String(params.studentId))}/excusals/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: undefined, responseType: "AttendanceExcusalsResponse", }),
      setStudentHomeroomAttendance: (params: ExtendedApisSetStudentHomeroomAttendanceParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("put", `/v2p3/students/${encodeURIComponent(String(params.id))}/set_homeroom_attendance`, { ...options, query: undefined, body: params.body, requestType: "ExtendedApisSetStudentHomeroomAttendanceRequest", }),
      updateStudentTaskGrades: (params: ExtendedApisUpdateStudentTaskGradesParams, options: RequestOptions = {}): Promise<{ data: ExtendedApisUpdateStudentTaskGradesResponse; response: globalThis.Response }> =>
        this.client.requestRaw<ExtendedApisUpdateStudentTaskGradesResponse>("patch", `/v2p3/tasks/${encodeURIComponent(String(params.taskId))}/students/${encodeURIComponent(String(params.studentId))}`, { ...options, query: undefined, body: params.body, responseType: "ExtendedApisUpdateStudentTaskGradesResponse", requestType: "ExtendedApisUpdateStudentTaskGradesRequest", }),
      bulkUpdateStudentTaskGrades: (params: ExtendedApisBulkUpdateStudentTaskGradesParams, options: RequestOptions = {}): Promise<{ data: BulkStudentTaskGradeResponse; response: globalThis.Response }> =>
        this.client.requestRaw<BulkStudentTaskGradeResponse>("patch", `/v2p3/tasks/${encodeURIComponent(String(params.taskId))}/students`, { ...options, query: undefined, body: params.body, responseType: "BulkStudentTaskGradeResponse", requestType: "BulkUpdateStudentTaskGradeRequest", }),
      bulkUpdateTeacherMemberships: (params: ExtendedApisBulkUpdateTeacherMembershipsParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("put", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/teachers`, { ...options, query: undefined, body: params.body, requestType: "BulkUpdateTeachers", }),
    };
  }

}
