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

export class ClassesResource {

  constructor(private readonly client: ApiClient) {

  }

  async listClasses(params: ClassesListClassesParams = {}, options: RequestOptions = {}): Promise<ClassesListClassesResponse> {
    return this.client.request<ClassesListClassesResponse>("get", "/v2p3/classes", {
      ...options,
      query: {
        "modified_since": params.modifiedSince,
        "deleted_since": params.deletedSince,
        "page": params.page,
        "per_page": params.perPage,
        "archived": params.archived,
      },
      body: undefined,
      responseType: "ClassesListClassesResponse",
    });
  }

  async createClass(params: ClassesCreateClassParams, options: RequestOptions = {}): Promise<Class> {
    return this.client.request<Class>("post", "/v2p3/classes", {
      ...options,
      query: undefined,
      body: params.body,
      responseType: "Class",
      requestType: "CreateClass",
    });
  }

  async getClassById(id: number, options: RequestOptions = {}): Promise<ClassesGetClassByIdResponse> {
    return this.client.request<ClassesGetClassByIdResponse>("get", `/v2p3/classes/${encodeURIComponent(String(id))}`, {
      ...options,
      query: undefined,
      body: undefined,
      responseType: "ClassesGetClassByIdResponse",
    });
  }

  async updateClass(params: ClassesUpdateClassParams, options: RequestOptions = {}): Promise<Class> {
    return this.client.request<Class>("patch", `/v2p3/classes/${encodeURIComponent(String(params.id))}`, {
      ...options,
      query: undefined,
      body: params.body,
      responseType: "Class",
      requestType: "UpdateClass",
    });
  }

  async addStudentsToClass(params: ClassesAddStudentsToClassParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("post", `/v2p3/classes/${encodeURIComponent(String(params.id))}/add_students`, {
      ...options,
      query: undefined,
      body: params.body,
      requestType: "ClassesAddStudentsToClassRequest",
    });
  }

  async removeStudentsFromClass(params: ClassesRemoveStudentsFromClassParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("post", `/v2p3/classes/${encodeURIComponent(String(params.id))}/remove_students`, {
      ...options,
      query: undefined,
      body: params.body,
      requestType: "ClassesRemoveStudentsFromClassRequest",
    });
  }

  async getClassTerms(params: ClassesGetClassTermsParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", `/v2p3/classes/${encodeURIComponent(String(params.id))}/terms`, {
      ...options,
      query: {
        "academic_year_id": params.academicYearId,
        "active_only": params.activeOnly,
      },
      body: undefined,
    });
  }

  async addTeachersToClass(params: ClassesAddTeachersToClassParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("post", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/teachers/add_teachers`, {
      ...options,
      query: undefined,
      body: params.body,
      requestType: "ClassesAddTeachersToClassRequest",
    });
  }

  /** Same methods, returning { data, response } with the raw HTTP Response. */
  get withRawResponse() {
    return {
      listClasses: (params: ClassesListClassesParams = {}, options: RequestOptions = {}): Promise<{ data: ClassesListClassesResponse; response: globalThis.Response }> =>
        this.client.requestRaw<ClassesListClassesResponse>("get", "/v2p3/classes", { ...options, query: {
      "modified_since": params.modifiedSince,
      "deleted_since": params.deletedSince,
      "page": params.page,
      "per_page": params.perPage,
      "archived": params.archived,
    }, body: undefined, responseType: "ClassesListClassesResponse", }),
      createClass: (params: ClassesCreateClassParams, options: RequestOptions = {}): Promise<{ data: Class; response: globalThis.Response }> =>
        this.client.requestRaw<Class>("post", "/v2p3/classes", { ...options, query: undefined, body: params.body, responseType: "Class", requestType: "CreateClass", }),
      getClassById: (id: number, options: RequestOptions = {}): Promise<{ data: ClassesGetClassByIdResponse; response: globalThis.Response }> =>
        this.client.requestRaw<ClassesGetClassByIdResponse>("get", `/v2p3/classes/${encodeURIComponent(String(id))}`, { ...options, query: undefined, body: undefined, responseType: "ClassesGetClassByIdResponse", }),
      updateClass: (params: ClassesUpdateClassParams, options: RequestOptions = {}): Promise<{ data: Class; response: globalThis.Response }> =>
        this.client.requestRaw<Class>("patch", `/v2p3/classes/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: params.body, responseType: "Class", requestType: "UpdateClass", }),
      addStudentsToClass: (params: ClassesAddStudentsToClassParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("post", `/v2p3/classes/${encodeURIComponent(String(params.id))}/add_students`, { ...options, query: undefined, body: params.body, requestType: "ClassesAddStudentsToClassRequest", }),
      removeStudentsFromClass: (params: ClassesRemoveStudentsFromClassParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("post", `/v2p3/classes/${encodeURIComponent(String(params.id))}/remove_students`, { ...options, query: undefined, body: params.body, requestType: "ClassesRemoveStudentsFromClassRequest", }),
      getClassTerms: (params: ClassesGetClassTermsParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", `/v2p3/classes/${encodeURIComponent(String(params.id))}/terms`, { ...options, query: {
      "academic_year_id": params.academicYearId,
      "active_only": params.activeOnly,
    }, body: undefined, }),
      addTeachersToClass: (params: ClassesAddTeachersToClassParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("post", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/teachers/add_teachers`, { ...options, query: undefined, body: params.body, requestType: "ClassesAddTeachersToClassRequest", }),
    };
  }

}
