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

export class TeachersResource {

  constructor(private readonly client: ApiClient) {

  }

  async updateTeacherAvatar(params: TeachersUpdateTeacherAvatarParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("put", `/v2p3/teachers/${encodeURIComponent(String(params.id))}/avatar`, {
      ...options,
      query: undefined,
      body: params.body,
      requestType: "TeachersUpdateTeacherAvatarRequest",
    });
  }

  async deleteTeacherAvatar(id: number, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("delete", `/v2p3/teachers/${encodeURIComponent(String(id))}/avatar`, {
      ...options,
      query: undefined,
      body: undefined,
    });
  }

  async listTeachers(params: TeachersListTeachersParams = {}, options: RequestOptions = {}): Promise<TeachersListTeachersResponse> {
    return this.client.request<TeachersListTeachersResponse>("get", "/v2p3/teachers", {
      ...options,
      query: {
        "ids[]": params.ids,
        "archived": params.archived,
        "modified_since": params.modifiedSince,
        "page": params.page,
        "per_page": params.perPage,
        "deleted_since": params.deletedSince,
        "q": params.q,
      },
      body: undefined,
      responseType: "TeachersListTeachersResponse",
    });
  }

  async createTeacher(params: TeachersCreateTeacherParams = {}, options: RequestOptions = {}): Promise<TeachersCreateTeacherResponse> {
    return this.client.request<TeachersCreateTeacherResponse>("post", "/v2p3/teachers", {
      ...options,
      query: undefined,
      body: params.body,
      responseType: "TeachersCreateTeacherResponse",
      requestType: "TeachersCreateTeacherRequest",
    });
  }

  async getTeacherById(id: number, options: RequestOptions = {}): Promise<TeachersGetTeacherByIdResponse> {
    return this.client.request<TeachersGetTeacherByIdResponse>("get", `/v2p3/teachers/${encodeURIComponent(String(id))}`, {
      ...options,
      query: undefined,
      body: undefined,
      responseType: "TeachersGetTeacherByIdResponse",
    });
  }

  async updateTeacher(params: TeachersUpdateTeacherParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("patch", `/v2p3/teachers/${encodeURIComponent(String(params.id))}`, {
      ...options,
      query: undefined,
      body: params.body,
      requestType: "TeachersUpdateTeacherRequest",
    });
  }

  async archiveTeacher(id: number, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("put", `/v2p3/teachers/${encodeURIComponent(String(id))}/archive`, {
      ...options,
      query: undefined,
      body: undefined,
    });
  }

  async unarchiveTeacher(id: number, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("put", `/v2p3/teachers/${encodeURIComponent(String(id))}/unarchive`, {
      ...options,
      query: undefined,
      body: undefined,
    });
  }

  async listTeacherClassesMemberships(params: TeachersListTeacherClassesMembershipsParams, options: RequestOptions = {}): Promise<TeachersListTeacherClassesMembershipsResponse> {
    return this.client.request<TeachersListTeacherClassesMembershipsResponse>("get", `/v2p3/teachers/${encodeURIComponent(String(params.id))}/classes`, {
      ...options,
      query: {
        "show_on_reports": params.showOnReports,
        "archived": params.archived,
      },
      body: undefined,
      responseType: "TeachersListTeacherClassesMembershipsResponse",
    });
  }

  async listTeacherGroupsMemberships(params: TeachersListTeacherGroupsMembershipsParams, options: RequestOptions = {}): Promise<TeachersListTeacherGroupsMembershipsResponse> {
    return this.client.request<TeachersListTeacherGroupsMembershipsResponse>("get", `/v2p3/teachers/${encodeURIComponent(String(params.id))}/groups`, {
      ...options,
      query: {
        "archived": params.archived,
      },
      body: undefined,
      responseType: "TeachersListTeacherGroupsMembershipsResponse",
    });
  }

  async sendTeacherWelcomeEmail(id: number, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("post", `/v2p3/teachers/${encodeURIComponent(String(id))}/welcome_email`, {
      ...options,
      query: undefined,
      body: undefined,
    });
  }

  /** Same methods, returning { data, response } with the raw HTTP Response. */
  get withRawResponse() {
    return {
      updateTeacherAvatar: (params: TeachersUpdateTeacherAvatarParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("put", `/v2p3/teachers/${encodeURIComponent(String(params.id))}/avatar`, { ...options, query: undefined, body: params.body, requestType: "TeachersUpdateTeacherAvatarRequest", }),
      deleteTeacherAvatar: (id: number, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("delete", `/v2p3/teachers/${encodeURIComponent(String(id))}/avatar`, { ...options, query: undefined, body: undefined, }),
      listTeachers: (params: TeachersListTeachersParams = {}, options: RequestOptions = {}): Promise<{ data: TeachersListTeachersResponse; response: globalThis.Response }> =>
        this.client.requestRaw<TeachersListTeachersResponse>("get", "/v2p3/teachers", { ...options, query: {
      "ids[]": params.ids,
      "archived": params.archived,
      "modified_since": params.modifiedSince,
      "page": params.page,
      "per_page": params.perPage,
      "deleted_since": params.deletedSince,
      "q": params.q,
    }, body: undefined, responseType: "TeachersListTeachersResponse", }),
      createTeacher: (params: TeachersCreateTeacherParams = {}, options: RequestOptions = {}): Promise<{ data: TeachersCreateTeacherResponse; response: globalThis.Response }> =>
        this.client.requestRaw<TeachersCreateTeacherResponse>("post", "/v2p3/teachers", { ...options, query: undefined, body: params.body, responseType: "TeachersCreateTeacherResponse", requestType: "TeachersCreateTeacherRequest", }),
      getTeacherById: (id: number, options: RequestOptions = {}): Promise<{ data: TeachersGetTeacherByIdResponse; response: globalThis.Response }> =>
        this.client.requestRaw<TeachersGetTeacherByIdResponse>("get", `/v2p3/teachers/${encodeURIComponent(String(id))}`, { ...options, query: undefined, body: undefined, responseType: "TeachersGetTeacherByIdResponse", }),
      updateTeacher: (params: TeachersUpdateTeacherParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("patch", `/v2p3/teachers/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: params.body, requestType: "TeachersUpdateTeacherRequest", }),
      archiveTeacher: (id: number, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("put", `/v2p3/teachers/${encodeURIComponent(String(id))}/archive`, { ...options, query: undefined, body: undefined, }),
      unarchiveTeacher: (id: number, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("put", `/v2p3/teachers/${encodeURIComponent(String(id))}/unarchive`, { ...options, query: undefined, body: undefined, }),
      listTeacherClassesMemberships: (params: TeachersListTeacherClassesMembershipsParams, options: RequestOptions = {}): Promise<{ data: TeachersListTeacherClassesMembershipsResponse; response: globalThis.Response }> =>
        this.client.requestRaw<TeachersListTeacherClassesMembershipsResponse>("get", `/v2p3/teachers/${encodeURIComponent(String(params.id))}/classes`, { ...options, query: {
      "show_on_reports": params.showOnReports,
      "archived": params.archived,
    }, body: undefined, responseType: "TeachersListTeacherClassesMembershipsResponse", }),
      listTeacherGroupsMemberships: (params: TeachersListTeacherGroupsMembershipsParams, options: RequestOptions = {}): Promise<{ data: TeachersListTeacherGroupsMembershipsResponse; response: globalThis.Response }> =>
        this.client.requestRaw<TeachersListTeacherGroupsMembershipsResponse>("get", `/v2p3/teachers/${encodeURIComponent(String(params.id))}/groups`, { ...options, query: {
      "archived": params.archived,
    }, body: undefined, responseType: "TeachersListTeacherGroupsMembershipsResponse", }),
      sendTeacherWelcomeEmail: (id: number, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("post", `/v2p3/teachers/${encodeURIComponent(String(id))}/welcome_email`, { ...options, query: undefined, body: undefined, }),
    };
  }

}
