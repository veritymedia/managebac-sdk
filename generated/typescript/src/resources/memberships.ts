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

export class MembershipsResource {

  constructor(private readonly client: ApiClient) {

  }

  async getStudentsForClass(params: MembershipsGetStudentsForClassParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/students`, {
      ...options,
      query: {
        "include_archived_students": params.includeArchivedStudents,
        "student_ids": params.studentIds,
      },
      body: undefined,
    });
  }

  async listMemberships(params: MembershipsListMembershipsParams = {}, options: RequestOptions = {}): Promise<MembershipsListMembershipsResponse> {
    return this.client.request<MembershipsListMembershipsResponse>("get", "/v2p3/memberships", {
      ...options,
      query: {
        "class_ids[]": params.classIds,
        "modified_since": params.modifiedSince,
        "deleted_since": params.deletedSince,
        "page": params.page,
        "per_page": params.perPage,
        "user_ids[]": params.userIds,
        "user_ids": params.userIds2,
        "class_happens_on": params.classHappensOn,
        "student_ids": params.studentIds,
      },
      body: undefined,
      responseType: "MembershipsListMembershipsResponse",
    });
  }

  async getStudentMemberships(params: MembershipsGetStudentMembershipsParams, options: RequestOptions = {}): Promise<MembershipsGetStudentMembershipsResponse> {
    return this.client.request<MembershipsGetStudentMembershipsResponse>("get", `/v2p3/students/${encodeURIComponent(String(params.id))}/memberships`, {
      ...options,
      query: {
        "archived": params.archived,
      },
      body: undefined,
      responseType: "MembershipsGetStudentMembershipsResponse",
    });
  }

  async getTeacherMemberships(classId: number, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", `/v2p3/classes/${encodeURIComponent(String(classId))}/teachers`, {
      ...options,
      query: undefined,
      body: undefined,
    });
  }

  async removeTeachersFromClass(params: MembershipsRemoveTeachersFromClassParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("delete", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/teachers/remove_teachers`, {
      ...options,
      query: undefined,
      body: params.body,
      requestType: "MembershipsRemoveTeachersFromClassRequest",
    });
  }

  /** Same methods, returning { data, response } with the raw HTTP Response. */
  get withRawResponse() {
    return {
      getStudentsForClass: (params: MembershipsGetStudentsForClassParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/students`, { ...options, query: {
      "include_archived_students": params.includeArchivedStudents,
      "student_ids": params.studentIds,
    }, body: undefined, }),
      listMemberships: (params: MembershipsListMembershipsParams = {}, options: RequestOptions = {}): Promise<{ data: MembershipsListMembershipsResponse; response: globalThis.Response }> =>
        this.client.requestRaw<MembershipsListMembershipsResponse>("get", "/v2p3/memberships", { ...options, query: {
      "class_ids[]": params.classIds,
      "modified_since": params.modifiedSince,
      "deleted_since": params.deletedSince,
      "page": params.page,
      "per_page": params.perPage,
      "user_ids[]": params.userIds,
      "user_ids": params.userIds2,
      "class_happens_on": params.classHappensOn,
      "student_ids": params.studentIds,
    }, body: undefined, responseType: "MembershipsListMembershipsResponse", }),
      getStudentMemberships: (params: MembershipsGetStudentMembershipsParams, options: RequestOptions = {}): Promise<{ data: MembershipsGetStudentMembershipsResponse; response: globalThis.Response }> =>
        this.client.requestRaw<MembershipsGetStudentMembershipsResponse>("get", `/v2p3/students/${encodeURIComponent(String(params.id))}/memberships`, { ...options, query: {
      "archived": params.archived,
    }, body: undefined, responseType: "MembershipsGetStudentMembershipsResponse", }),
      getTeacherMemberships: (classId: number, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", `/v2p3/classes/${encodeURIComponent(String(classId))}/teachers`, { ...options, query: undefined, body: undefined, }),
      removeTeachersFromClass: (params: MembershipsRemoveTeachersFromClassParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("delete", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/teachers/remove_teachers`, { ...options, query: undefined, body: params.body, requestType: "MembershipsRemoveTeachersFromClassRequest", }),
    };
  }

}
