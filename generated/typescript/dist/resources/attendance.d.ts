import type { ApiClient, RequestOptions } from "../core.js";
import type { SetAttendanceSettingsRequest } from "../types/set_attendance_settings_request.js";
import type { AttendanceListCategoriesResponse } from "../types/attendance_list_categories_response.js";
import type { AttendanceGetDateExcusalsResponse } from "../types/attendance_get_date_excusals_response.js";
import type { AttendanceGetStudentExcusalsResponse } from "../types/attendance_get_student_excusals_response.js";
import type { CreateAttendanceExcusalRequest } from "../types/create_attendance_excusal_request.js";
import type { AttendanceExcusalsResponse } from "../types/attendance_excusals_response.js";
export interface AttendanceSetAttendanceSettingsParams {
    classId: number;
    academicYearId: number;
    body: SetAttendanceSettingsRequest;
}
export interface AttendanceGetClassTimetableParams {
    classId: number;
    includeDisabled?: boolean;
}
export interface AttendanceGetAttendanceForClassParams {
    id: number;
    termId: number;
    archivedStudents?: boolean;
    studentIds?: number[];
}
export interface AttendanceGetClassAttendanceForDateParams {
    id: number;
    date: string;
    studentIds?: number[];
}
export interface AttendanceGetDateExcusalsParams {
    date: string;
    page?: string;
    perPage?: string;
    studentIds?: number[];
}
export interface AttendanceGetAttendanceForYearGroupByTermParams {
    yearGroupId: number;
    termId: number;
    archivedStudents?: boolean;
    studentIds?: number[];
}
export interface AttendanceGetAttendanceForYearGroupByDateParams {
    yearGroupId: number;
    date: string;
    studentIds?: number[];
}
export interface AttendanceGetAttendanceAdjustmentsForYearGroupByTermParams {
    yearGroupId: number;
    termId: number;
}
export interface AttendanceGetStudentExcusalsParams {
    studentId: number;
    appliesOn?: string;
    page?: string;
    perPage?: string;
}
export interface AttendanceCreateStudentExcusalParams {
    studentId: number;
    body?: CreateAttendanceExcusalRequest;
}
export declare class AttendanceResource {
    private readonly client;
    constructor(client: ApiClient);
    setAttendanceSettings(params: AttendanceSetAttendanceSettingsParams, options?: RequestOptions): Promise<unknown>;
    listCategories(academicYearId: string, options?: RequestOptions): Promise<AttendanceListCategoriesResponse>;
    getClassTimetable(params: AttendanceGetClassTimetableParams, options?: RequestOptions): Promise<unknown>;
    getAttendanceForClass(params: AttendanceGetAttendanceForClassParams, options?: RequestOptions): Promise<unknown>;
    getClassAttendanceForDate(params: AttendanceGetClassAttendanceForDateParams, options?: RequestOptions): Promise<unknown>;
    getDateExcusals(params: AttendanceGetDateExcusalsParams, options?: RequestOptions): Promise<AttendanceGetDateExcusalsResponse>;
    getAttendanceForYearGroupByTerm(params: AttendanceGetAttendanceForYearGroupByTermParams, options?: RequestOptions): Promise<unknown>;
    getAttendanceForYearGroupByDate(params: AttendanceGetAttendanceForYearGroupByDateParams, options?: RequestOptions): Promise<unknown>;
    getAttendanceAdjustmentsForYearGroupByTerm(params: AttendanceGetAttendanceAdjustmentsForYearGroupByTermParams, options?: RequestOptions): Promise<unknown>;
    getStudentExcusals(params: AttendanceGetStudentExcusalsParams, options?: RequestOptions): Promise<AttendanceGetStudentExcusalsResponse>;
    createStudentExcusal(params: AttendanceCreateStudentExcusalParams, options?: RequestOptions): Promise<AttendanceExcusalsResponse>;
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse(): {
        setAttendanceSettings: (params: AttendanceSetAttendanceSettingsParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        listCategories: (academicYearId: string, options?: RequestOptions) => Promise<{
            data: AttendanceListCategoriesResponse;
            response: globalThis.Response;
        }>;
        getClassTimetable: (params: AttendanceGetClassTimetableParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        getAttendanceForClass: (params: AttendanceGetAttendanceForClassParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        getClassAttendanceForDate: (params: AttendanceGetClassAttendanceForDateParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        getDateExcusals: (params: AttendanceGetDateExcusalsParams, options?: RequestOptions) => Promise<{
            data: AttendanceGetDateExcusalsResponse;
            response: globalThis.Response;
        }>;
        getAttendanceForYearGroupByTerm: (params: AttendanceGetAttendanceForYearGroupByTermParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        getAttendanceForYearGroupByDate: (params: AttendanceGetAttendanceForYearGroupByDateParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        getAttendanceAdjustmentsForYearGroupByTerm: (params: AttendanceGetAttendanceAdjustmentsForYearGroupByTermParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        getStudentExcusals: (params: AttendanceGetStudentExcusalsParams, options?: RequestOptions) => Promise<{
            data: AttendanceGetStudentExcusalsResponse;
            response: globalThis.Response;
        }>;
        createStudentExcusal: (params: AttendanceCreateStudentExcusalParams, options?: RequestOptions) => Promise<{
            data: AttendanceExcusalsResponse;
            response: globalThis.Response;
        }>;
    };
}
