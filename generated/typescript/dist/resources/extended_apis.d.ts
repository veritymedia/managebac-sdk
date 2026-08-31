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
export declare class ExtendedApisResource {
    private readonly client;
    constructor(client: ApiClient);
    bulkUpdateStudentsFromClass(params: ExtendedApisBulkUpdateStudentsFromClassParams, options?: RequestOptions): Promise<unknown>;
    upsertClasses(params: ExtendedApisUpsertClassesParams, options?: RequestOptions): Promise<UpsertClassesResponse>;
    setClassAttendanceForStudents(params: ExtendedApisSetClassAttendanceForStudentsParams, options?: RequestOptions): Promise<unknown>;
    bulkEnableSubjects(params: ExtendedApisBulkEnableSubjectsParams, options?: RequestOptions): Promise<ToggleSchoolSubjectsRequest>;
    bulkDisableSubjects(params: ExtendedApisBulkDisableSubjectsParams, options?: RequestOptions): Promise<ToggleSchoolSubjectsRequest>;
    updateStudentExcusal(params: ExtendedApisUpdateStudentExcusalParams, options?: RequestOptions): Promise<AttendanceExcusalsResponse>;
    deleteStudentExcusal(params: ExtendedApisDeleteStudentExcusalParams, options?: RequestOptions): Promise<AttendanceExcusalsResponse>;
    setStudentHomeroomAttendance(params: ExtendedApisSetStudentHomeroomAttendanceParams, options?: RequestOptions): Promise<unknown>;
    updateStudentTaskGrades(params: ExtendedApisUpdateStudentTaskGradesParams, options?: RequestOptions): Promise<ExtendedApisUpdateStudentTaskGradesResponse>;
    bulkUpdateStudentTaskGrades(params: ExtendedApisBulkUpdateStudentTaskGradesParams, options?: RequestOptions): Promise<BulkStudentTaskGradeResponse>;
    bulkUpdateTeacherMemberships(params: ExtendedApisBulkUpdateTeacherMembershipsParams, options?: RequestOptions): Promise<unknown>;
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse(): {
        bulkUpdateStudentsFromClass: (params: ExtendedApisBulkUpdateStudentsFromClassParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        upsertClasses: (params: ExtendedApisUpsertClassesParams, options?: RequestOptions) => Promise<{
            data: UpsertClassesResponse;
            response: globalThis.Response;
        }>;
        setClassAttendanceForStudents: (params: ExtendedApisSetClassAttendanceForStudentsParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        bulkEnableSubjects: (params: ExtendedApisBulkEnableSubjectsParams, options?: RequestOptions) => Promise<{
            data: ToggleSchoolSubjectsRequest;
            response: globalThis.Response;
        }>;
        bulkDisableSubjects: (params: ExtendedApisBulkDisableSubjectsParams, options?: RequestOptions) => Promise<{
            data: ToggleSchoolSubjectsRequest;
            response: globalThis.Response;
        }>;
        updateStudentExcusal: (params: ExtendedApisUpdateStudentExcusalParams, options?: RequestOptions) => Promise<{
            data: AttendanceExcusalsResponse;
            response: globalThis.Response;
        }>;
        deleteStudentExcusal: (params: ExtendedApisDeleteStudentExcusalParams, options?: RequestOptions) => Promise<{
            data: AttendanceExcusalsResponse;
            response: globalThis.Response;
        }>;
        setStudentHomeroomAttendance: (params: ExtendedApisSetStudentHomeroomAttendanceParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        updateStudentTaskGrades: (params: ExtendedApisUpdateStudentTaskGradesParams, options?: RequestOptions) => Promise<{
            data: ExtendedApisUpdateStudentTaskGradesResponse;
            response: globalThis.Response;
        }>;
        bulkUpdateStudentTaskGrades: (params: ExtendedApisBulkUpdateStudentTaskGradesParams, options?: RequestOptions) => Promise<{
            data: BulkStudentTaskGradeResponse;
            response: globalThis.Response;
        }>;
        bulkUpdateTeacherMemberships: (params: ExtendedApisBulkUpdateTeacherMembershipsParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
    };
}
