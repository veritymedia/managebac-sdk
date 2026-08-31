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

export class YearGroupsResource {

  constructor(private readonly client: ApiClient) {

  }

  async listYearGroupServiceLearningCategoriesStudents(params: YearGroupsListYearGroupServiceLearningCategoriesStudentsParams, options: RequestOptions = {}): Promise<ServiceLearningCategoriesStudentsResponse> {
    return this.client.request<ServiceLearningCategoriesStudentsResponse>("get", `/v2p3/year-groups/${encodeURIComponent(String(params.id))}/projects/sl/categories/students`, {
      ...options,
      query: {
        "student_ids[]": params.studentIds,
        "page": params.page,
        "per_page": params.perPage,
      },
      body: undefined,
      responseType: "ServiceLearningCategoriesStudentsResponse",
    });
  }

  async listYearGroupServiceLearningOutcomesStudents(params: YearGroupsListYearGroupServiceLearningOutcomesStudentsParams, options: RequestOptions = {}): Promise<ServiceLearningOutcomesStudentsResponse> {
    return this.client.request<ServiceLearningOutcomesStudentsResponse>("get", `/v2p3/year-groups/${encodeURIComponent(String(params.id))}/projects/sl/outcomes/students`, {
      ...options,
      query: {
        "student_ids[]": params.studentIds,
        "page": params.page,
        "per_page": params.perPage,
      },
      body: undefined,
      responseType: "ServiceLearningOutcomesStudentsResponse",
    });
  }

  async getYearGroupServiceLearning(id: number, options: RequestOptions = {}): Promise<ServiceLearningSettings> {
    return this.client.request<ServiceLearningSettings>("get", `/v2p3/year-groups/${encodeURIComponent(String(id))}/projects/sl`, {
      ...options,
      query: undefined,
      body: undefined,
      responseType: "ServiceLearningSettings",
    });
  }

  async listYearGroups(params: YearGroupsListYearGroupsParams = {}, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", "/v2p3/year-groups", {
      ...options,
      query: {
        "modified_since": params.modifiedSince,
        "page": params.page,
        "per_page": params.perPage,
        "archived": params.archived,
        "student_ids": params.studentIds,
      },
      body: undefined,
    });
  }

  async listStudentsFromYearGroups(params: YearGroupsListStudentsFromYearGroupsParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", `/v2p3/year-groups/${encodeURIComponent(String(params.id))}/students`, {
      ...options,
      query: {
        "page": params.page,
        "per_page": params.perPage,
        "student_ids": params.studentIds,
      },
      body: undefined,
    });
  }

  async addStudentToYearGroup(params: YearGroupsAddStudentToYearGroupParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("post", `/v2p3/year-groups/${encodeURIComponent(String(params.id))}/add_students`, {
      ...options,
      query: undefined,
      body: params.body,
      requestType: "YearGroupsAddStudentToYearGroupRequest",
    });
  }

  async removeStudentToYearGroup(params: YearGroupsRemoveStudentToYearGroupParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("post", `/v2p3/year-groups/${encodeURIComponent(String(params.id))}/remove_students`, {
      ...options,
      query: undefined,
      body: params.body,
      requestType: "YearGroupsRemoveStudentToYearGroupRequest",
    });
  }

  async listAdvisorsFromYearGroup(id: number, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", `/v2p3/year-groups/${encodeURIComponent(String(id))}/advisors`, {
      ...options,
      query: undefined,
      body: undefined,
    });
  }

  /** Same methods, returning { data, response } with the raw HTTP Response. */
  get withRawResponse() {
    return {
      listYearGroupServiceLearningCategoriesStudents: (params: YearGroupsListYearGroupServiceLearningCategoriesStudentsParams, options: RequestOptions = {}): Promise<{ data: ServiceLearningCategoriesStudentsResponse; response: globalThis.Response }> =>
        this.client.requestRaw<ServiceLearningCategoriesStudentsResponse>("get", `/v2p3/year-groups/${encodeURIComponent(String(params.id))}/projects/sl/categories/students`, { ...options, query: {
      "student_ids[]": params.studentIds,
      "page": params.page,
      "per_page": params.perPage,
    }, body: undefined, responseType: "ServiceLearningCategoriesStudentsResponse", }),
      listYearGroupServiceLearningOutcomesStudents: (params: YearGroupsListYearGroupServiceLearningOutcomesStudentsParams, options: RequestOptions = {}): Promise<{ data: ServiceLearningOutcomesStudentsResponse; response: globalThis.Response }> =>
        this.client.requestRaw<ServiceLearningOutcomesStudentsResponse>("get", `/v2p3/year-groups/${encodeURIComponent(String(params.id))}/projects/sl/outcomes/students`, { ...options, query: {
      "student_ids[]": params.studentIds,
      "page": params.page,
      "per_page": params.perPage,
    }, body: undefined, responseType: "ServiceLearningOutcomesStudentsResponse", }),
      getYearGroupServiceLearning: (id: number, options: RequestOptions = {}): Promise<{ data: ServiceLearningSettings; response: globalThis.Response }> =>
        this.client.requestRaw<ServiceLearningSettings>("get", `/v2p3/year-groups/${encodeURIComponent(String(id))}/projects/sl`, { ...options, query: undefined, body: undefined, responseType: "ServiceLearningSettings", }),
      listYearGroups: (params: YearGroupsListYearGroupsParams = {}, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", "/v2p3/year-groups", { ...options, query: {
      "modified_since": params.modifiedSince,
      "page": params.page,
      "per_page": params.perPage,
      "archived": params.archived,
      "student_ids": params.studentIds,
    }, body: undefined, }),
      listStudentsFromYearGroups: (params: YearGroupsListStudentsFromYearGroupsParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", `/v2p3/year-groups/${encodeURIComponent(String(params.id))}/students`, { ...options, query: {
      "page": params.page,
      "per_page": params.perPage,
      "student_ids": params.studentIds,
    }, body: undefined, }),
      addStudentToYearGroup: (params: YearGroupsAddStudentToYearGroupParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("post", `/v2p3/year-groups/${encodeURIComponent(String(params.id))}/add_students`, { ...options, query: undefined, body: params.body, requestType: "YearGroupsAddStudentToYearGroupRequest", }),
      removeStudentToYearGroup: (params: YearGroupsRemoveStudentToYearGroupParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("post", `/v2p3/year-groups/${encodeURIComponent(String(params.id))}/remove_students`, { ...options, query: undefined, body: params.body, requestType: "YearGroupsRemoveStudentToYearGroupRequest", }),
      listAdvisorsFromYearGroup: (id: number, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", `/v2p3/year-groups/${encodeURIComponent(String(id))}/advisors`, { ...options, query: undefined, body: undefined, }),
    };
  }

}
