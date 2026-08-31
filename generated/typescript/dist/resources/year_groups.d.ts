import type { ApiClient, RequestOptions } from "../core.js";
import type { ServiceLearningCategoriesStudentsResponse } from "../types/service_learning_categories_students_response.js";
import type { ServiceLearningOutcomesStudentsResponse } from "../types/service_learning_outcomes_students_response.js";
import type { ServiceLearningSettings } from "../types/service_learning_settings.js";
import type { YearGroupsAddStudentToYearGroupRequest } from "../types/year_groups_add_student_to_year_group_request.js";
import type { YearGroupsRemoveStudentToYearGroupRequest } from "../types/year_groups_remove_student_to_year_group_request.js";
export interface YearGroupsListYearGroupServiceLearningCategoriesStudentsParams {
    id: number;
    studentIds?: number[];
    page?: number;
    perPage?: number;
}
export interface YearGroupsListYearGroupServiceLearningOutcomesStudentsParams {
    id: number;
    studentIds?: number[];
    page?: number;
    perPage?: number;
}
export interface YearGroupsListYearGroupsParams {
    modifiedSince?: string;
    page?: string;
    perPage?: string;
    archived?: boolean;
    studentIds?: number[];
}
export interface YearGroupsListStudentsFromYearGroupsParams {
    id: number;
    page?: string;
    perPage?: string;
    studentIds?: number[];
}
export interface YearGroupsAddStudentToYearGroupParams {
    id: number;
    body?: YearGroupsAddStudentToYearGroupRequest;
}
export interface YearGroupsRemoveStudentToYearGroupParams {
    id: number;
    body?: YearGroupsRemoveStudentToYearGroupRequest;
}
export declare class YearGroupsResource {
    private readonly client;
    constructor(client: ApiClient);
    listYearGroupServiceLearningCategoriesStudents(params: YearGroupsListYearGroupServiceLearningCategoriesStudentsParams, options?: RequestOptions): Promise<ServiceLearningCategoriesStudentsResponse>;
    listYearGroupServiceLearningOutcomesStudents(params: YearGroupsListYearGroupServiceLearningOutcomesStudentsParams, options?: RequestOptions): Promise<ServiceLearningOutcomesStudentsResponse>;
    getYearGroupServiceLearning(id: number, options?: RequestOptions): Promise<ServiceLearningSettings>;
    listYearGroups(params?: YearGroupsListYearGroupsParams, options?: RequestOptions): Promise<unknown>;
    listStudentsFromYearGroups(params: YearGroupsListStudentsFromYearGroupsParams, options?: RequestOptions): Promise<unknown>;
    addStudentToYearGroup(params: YearGroupsAddStudentToYearGroupParams, options?: RequestOptions): Promise<unknown>;
    removeStudentToYearGroup(params: YearGroupsRemoveStudentToYearGroupParams, options?: RequestOptions): Promise<unknown>;
    listAdvisorsFromYearGroup(id: number, options?: RequestOptions): Promise<unknown>;
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse(): {
        listYearGroupServiceLearningCategoriesStudents: (params: YearGroupsListYearGroupServiceLearningCategoriesStudentsParams, options?: RequestOptions) => Promise<{
            data: ServiceLearningCategoriesStudentsResponse;
            response: globalThis.Response;
        }>;
        listYearGroupServiceLearningOutcomesStudents: (params: YearGroupsListYearGroupServiceLearningOutcomesStudentsParams, options?: RequestOptions) => Promise<{
            data: ServiceLearningOutcomesStudentsResponse;
            response: globalThis.Response;
        }>;
        getYearGroupServiceLearning: (id: number, options?: RequestOptions) => Promise<{
            data: ServiceLearningSettings;
            response: globalThis.Response;
        }>;
        listYearGroups: (params?: YearGroupsListYearGroupsParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        listStudentsFromYearGroups: (params: YearGroupsListStudentsFromYearGroupsParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        addStudentToYearGroup: (params: YearGroupsAddStudentToYearGroupParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        removeStudentToYearGroup: (params: YearGroupsRemoveStudentToYearGroupParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        listAdvisorsFromYearGroup: (id: number, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
    };
}
