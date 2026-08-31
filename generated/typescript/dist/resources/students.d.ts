import type { ApiClient, RequestOptions } from "../core.js";
import type { StudentsUpdateStudentAvatarRequest } from "../types/students_update_student_avatar_request.js";
import type { StudentsUpdateStudentAvatarResponse } from "../types/students_update_student_avatar_response.js";
import type { StudentsDeleteStudentAvatarResponse } from "../types/students_delete_student_avatar_response.js";
import type { StudentsListStudentsResponse } from "../types/students_list_students_response.js";
import type { StudentsCreateStudentRequest } from "../types/students_create_student_request.js";
import type { StudentsCreateStudentResponse } from "../types/students_create_student_response.js";
import type { StudentsGetStudentByIdResponse } from "../types/students_get_student_by_id_response.js";
import type { StudentsUpdateStudentRequest } from "../types/students_update_student_request.js";
import type { StudentsUpdateStudentResponse } from "../types/students_update_student_response.js";
import type { StudentsArchiveStudentRequest } from "../types/students_archive_student_request.js";
export interface StudentsUpdateStudentAvatarParams {
    id: number;
    body: StudentsUpdateStudentAvatarRequest;
}
export interface StudentsListStudentsParams {
    ids?: number[];
    archived?: boolean;
    status?: string;
    modifiedSince?: string;
    yearGroupIds?: number[];
    yearGroupIds2?: number[];
    homeroomAdvisorIds?: number[];
    homeroomAdvisorIds2?: number[];
    page?: string;
    perPage?: string;
    deletedSince?: string;
    q?: string;
    ids2?: number[];
}
export interface StudentsCreateStudentParams {
    body?: StudentsCreateStudentRequest;
}
export interface StudentsUpdateStudentParams {
    id: number;
    body?: StudentsUpdateStudentRequest;
}
export interface StudentsArchiveStudentParams {
    id: number;
    body?: StudentsArchiveStudentRequest;
}
export declare class StudentsResource {
    private readonly client;
    constructor(client: ApiClient);
    updateStudentAvatar(params: StudentsUpdateStudentAvatarParams, options?: RequestOptions): Promise<StudentsUpdateStudentAvatarResponse>;
    deleteStudentAvatar(id: number, options?: RequestOptions): Promise<StudentsDeleteStudentAvatarResponse>;
    listStudents(params?: StudentsListStudentsParams, options?: RequestOptions): Promise<StudentsListStudentsResponse>;
    createStudent(params?: StudentsCreateStudentParams, options?: RequestOptions): Promise<StudentsCreateStudentResponse>;
    getStudentById(id: number, options?: RequestOptions): Promise<StudentsGetStudentByIdResponse>;
    updateStudent(params: StudentsUpdateStudentParams, options?: RequestOptions): Promise<StudentsUpdateStudentResponse>;
    archiveStudent(params: StudentsArchiveStudentParams, options?: RequestOptions): Promise<unknown>;
    unarchiveStudent(id: number, options?: RequestOptions): Promise<unknown>;
    sendStudentWelcomeEmail(id: number, options?: RequestOptions): Promise<unknown>;
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse(): {
        updateStudentAvatar: (params: StudentsUpdateStudentAvatarParams, options?: RequestOptions) => Promise<{
            data: StudentsUpdateStudentAvatarResponse;
            response: globalThis.Response;
        }>;
        deleteStudentAvatar: (id: number, options?: RequestOptions) => Promise<{
            data: StudentsDeleteStudentAvatarResponse;
            response: globalThis.Response;
        }>;
        listStudents: (params?: StudentsListStudentsParams, options?: RequestOptions) => Promise<{
            data: StudentsListStudentsResponse;
            response: globalThis.Response;
        }>;
        createStudent: (params?: StudentsCreateStudentParams, options?: RequestOptions) => Promise<{
            data: StudentsCreateStudentResponse;
            response: globalThis.Response;
        }>;
        getStudentById: (id: number, options?: RequestOptions) => Promise<{
            data: StudentsGetStudentByIdResponse;
            response: globalThis.Response;
        }>;
        updateStudent: (params: StudentsUpdateStudentParams, options?: RequestOptions) => Promise<{
            data: StudentsUpdateStudentResponse;
            response: globalThis.Response;
        }>;
        archiveStudent: (params: StudentsArchiveStudentParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        unarchiveStudent: (id: number, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        sendStudentWelcomeEmail: (id: number, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
    };
}
