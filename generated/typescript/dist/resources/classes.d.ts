import type { ApiClient, RequestOptions } from "../core.js";
import type { ClassesListClassesResponse } from "../types/classes_list_classes_response.js";
import type { CreateClass } from "../types/create_class.js";
import type { Class } from "../types/class.js";
import type { ClassesGetClassByIdResponse } from "../types/classes_get_class_by_id_response.js";
import type { UpdateClass } from "../types/update_class.js";
import type { ClassesAddStudentsToClassRequest } from "../types/classes_add_students_to_class_request.js";
import type { ClassesRemoveStudentsFromClassRequest } from "../types/classes_remove_students_from_class_request.js";
import type { ClassesAddTeachersToClassRequest } from "../types/classes_add_teachers_to_class_request.js";
export interface ClassesListClassesParams {
    modifiedSince?: string;
    deletedSince?: string;
    page?: string;
    perPage?: string;
    archived?: boolean;
}
export interface ClassesCreateClassParams {
    body: CreateClass;
}
export interface ClassesUpdateClassParams {
    id: number;
    body: UpdateClass;
}
export interface ClassesAddStudentsToClassParams {
    id: number;
    body?: ClassesAddStudentsToClassRequest;
}
export interface ClassesRemoveStudentsFromClassParams {
    id: number;
    body?: ClassesRemoveStudentsFromClassRequest;
}
export interface ClassesGetClassTermsParams {
    id: number;
    academicYearId?: number;
    activeOnly?: boolean;
}
export interface ClassesAddTeachersToClassParams {
    classId: number;
    body?: ClassesAddTeachersToClassRequest;
}
export declare class ClassesResource {
    private readonly client;
    constructor(client: ApiClient);
    listClasses(params?: ClassesListClassesParams, options?: RequestOptions): Promise<ClassesListClassesResponse>;
    createClass(params: ClassesCreateClassParams, options?: RequestOptions): Promise<Class>;
    getClassById(id: number, options?: RequestOptions): Promise<ClassesGetClassByIdResponse>;
    updateClass(params: ClassesUpdateClassParams, options?: RequestOptions): Promise<Class>;
    addStudentsToClass(params: ClassesAddStudentsToClassParams, options?: RequestOptions): Promise<unknown>;
    removeStudentsFromClass(params: ClassesRemoveStudentsFromClassParams, options?: RequestOptions): Promise<unknown>;
    getClassTerms(params: ClassesGetClassTermsParams, options?: RequestOptions): Promise<unknown>;
    addTeachersToClass(params: ClassesAddTeachersToClassParams, options?: RequestOptions): Promise<unknown>;
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse(): {
        listClasses: (params?: ClassesListClassesParams, options?: RequestOptions) => Promise<{
            data: ClassesListClassesResponse;
            response: globalThis.Response;
        }>;
        createClass: (params: ClassesCreateClassParams, options?: RequestOptions) => Promise<{
            data: Class;
            response: globalThis.Response;
        }>;
        getClassById: (id: number, options?: RequestOptions) => Promise<{
            data: ClassesGetClassByIdResponse;
            response: globalThis.Response;
        }>;
        updateClass: (params: ClassesUpdateClassParams, options?: RequestOptions) => Promise<{
            data: Class;
            response: globalThis.Response;
        }>;
        addStudentsToClass: (params: ClassesAddStudentsToClassParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        removeStudentsFromClass: (params: ClassesRemoveStudentsFromClassParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        getClassTerms: (params: ClassesGetClassTermsParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        addTeachersToClass: (params: ClassesAddTeachersToClassParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
    };
}
