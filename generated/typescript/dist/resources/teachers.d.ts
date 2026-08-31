import type { ApiClient, RequestOptions } from "../core.js";
import type { TeachersUpdateTeacherAvatarRequest } from "../types/teachers_update_teacher_avatar_request.js";
import type { TeachersListTeachersResponse } from "../types/teachers_list_teachers_response.js";
import type { TeachersCreateTeacherRequest } from "../types/teachers_create_teacher_request.js";
import type { TeachersCreateTeacherResponse } from "../types/teachers_create_teacher_response.js";
import type { TeachersGetTeacherByIdResponse } from "../types/teachers_get_teacher_by_id_response.js";
import type { TeachersUpdateTeacherRequest } from "../types/teachers_update_teacher_request.js";
import type { TeachersListTeacherClassesMembershipsResponse } from "../types/teachers_list_teacher_classes_memberships_response.js";
import type { TeachersListTeacherGroupsMembershipsResponse } from "../types/teachers_list_teacher_groups_memberships_response.js";
export interface TeachersUpdateTeacherAvatarParams {
    id: number;
    body: TeachersUpdateTeacherAvatarRequest;
}
export interface TeachersListTeachersParams {
    ids?: number[];
    archived?: boolean;
    modifiedSince?: string;
    page?: string;
    perPage?: string;
    deletedSince?: string;
    q?: string;
}
export interface TeachersCreateTeacherParams {
    body?: TeachersCreateTeacherRequest;
}
export interface TeachersUpdateTeacherParams {
    id: number;
    body?: TeachersUpdateTeacherRequest;
}
export interface TeachersListTeacherClassesMembershipsParams {
    id: number;
    showOnReports?: boolean;
    archived?: boolean;
}
export interface TeachersListTeacherGroupsMembershipsParams {
    id: number;
    archived?: boolean;
}
export declare class TeachersResource {
    private readonly client;
    constructor(client: ApiClient);
    updateTeacherAvatar(params: TeachersUpdateTeacherAvatarParams, options?: RequestOptions): Promise<unknown>;
    deleteTeacherAvatar(id: number, options?: RequestOptions): Promise<unknown>;
    listTeachers(params?: TeachersListTeachersParams, options?: RequestOptions): Promise<TeachersListTeachersResponse>;
    createTeacher(params?: TeachersCreateTeacherParams, options?: RequestOptions): Promise<TeachersCreateTeacherResponse>;
    getTeacherById(id: number, options?: RequestOptions): Promise<TeachersGetTeacherByIdResponse>;
    updateTeacher(params: TeachersUpdateTeacherParams, options?: RequestOptions): Promise<unknown>;
    archiveTeacher(id: number, options?: RequestOptions): Promise<unknown>;
    unarchiveTeacher(id: number, options?: RequestOptions): Promise<unknown>;
    listTeacherClassesMemberships(params: TeachersListTeacherClassesMembershipsParams, options?: RequestOptions): Promise<TeachersListTeacherClassesMembershipsResponse>;
    listTeacherGroupsMemberships(params: TeachersListTeacherGroupsMembershipsParams, options?: RequestOptions): Promise<TeachersListTeacherGroupsMembershipsResponse>;
    sendTeacherWelcomeEmail(id: number, options?: RequestOptions): Promise<unknown>;
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse(): {
        updateTeacherAvatar: (params: TeachersUpdateTeacherAvatarParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        deleteTeacherAvatar: (id: number, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        listTeachers: (params?: TeachersListTeachersParams, options?: RequestOptions) => Promise<{
            data: TeachersListTeachersResponse;
            response: globalThis.Response;
        }>;
        createTeacher: (params?: TeachersCreateTeacherParams, options?: RequestOptions) => Promise<{
            data: TeachersCreateTeacherResponse;
            response: globalThis.Response;
        }>;
        getTeacherById: (id: number, options?: RequestOptions) => Promise<{
            data: TeachersGetTeacherByIdResponse;
            response: globalThis.Response;
        }>;
        updateTeacher: (params: TeachersUpdateTeacherParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        archiveTeacher: (id: number, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        unarchiveTeacher: (id: number, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        listTeacherClassesMemberships: (params: TeachersListTeacherClassesMembershipsParams, options?: RequestOptions) => Promise<{
            data: TeachersListTeacherClassesMembershipsResponse;
            response: globalThis.Response;
        }>;
        listTeacherGroupsMemberships: (params: TeachersListTeacherGroupsMembershipsParams, options?: RequestOptions) => Promise<{
            data: TeachersListTeacherGroupsMembershipsResponse;
            response: globalThis.Response;
        }>;
        sendTeacherWelcomeEmail: (id: number, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
    };
}
