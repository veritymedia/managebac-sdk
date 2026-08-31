import type { ApiClient, RequestOptions } from "../core.js";
import type { MembershipsListMembershipsResponse } from "../types/memberships_list_memberships_response.js";
import type { MembershipsGetStudentMembershipsResponse } from "../types/memberships_get_student_memberships_response.js";
import type { MembershipsRemoveTeachersFromClassRequest } from "../types/memberships_remove_teachers_from_class_request.js";
export interface MembershipsGetStudentsForClassParams {
    classId: number;
    includeArchivedStudents?: boolean;
    studentIds?: number[];
}
export interface MembershipsListMembershipsParams {
    classIds?: number[];
    modifiedSince?: string;
    deletedSince?: string;
    page?: string;
    perPage?: string;
    userIds?: number[];
    userIds2?: number[];
    classHappensOn?: string;
    studentIds?: number[];
}
export interface MembershipsGetStudentMembershipsParams {
    id: number;
    archived?: boolean;
}
export interface MembershipsRemoveTeachersFromClassParams {
    classId: number;
    body?: MembershipsRemoveTeachersFromClassRequest;
}
export declare class MembershipsResource {
    private readonly client;
    constructor(client: ApiClient);
    getStudentsForClass(params: MembershipsGetStudentsForClassParams, options?: RequestOptions): Promise<unknown>;
    listMemberships(params?: MembershipsListMembershipsParams, options?: RequestOptions): Promise<MembershipsListMembershipsResponse>;
    getStudentMemberships(params: MembershipsGetStudentMembershipsParams, options?: RequestOptions): Promise<MembershipsGetStudentMembershipsResponse>;
    getTeacherMemberships(classId: number, options?: RequestOptions): Promise<unknown>;
    removeTeachersFromClass(params: MembershipsRemoveTeachersFromClassParams, options?: RequestOptions): Promise<unknown>;
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse(): {
        getStudentsForClass: (params: MembershipsGetStudentsForClassParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        listMemberships: (params?: MembershipsListMembershipsParams, options?: RequestOptions) => Promise<{
            data: MembershipsListMembershipsResponse;
            response: globalThis.Response;
        }>;
        getStudentMemberships: (params: MembershipsGetStudentMembershipsParams, options?: RequestOptions) => Promise<{
            data: MembershipsGetStudentMembershipsResponse;
            response: globalThis.Response;
        }>;
        getTeacherMemberships: (classId: number, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        removeTeachersFromClass: (params: MembershipsRemoveTeachersFromClassParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
    };
}
