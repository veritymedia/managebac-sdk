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

export class StudentsResource {

  constructor(private readonly client: ApiClient) {

  }

  async updateStudentAvatar(params: StudentsUpdateStudentAvatarParams, options: RequestOptions = {}): Promise<StudentsUpdateStudentAvatarResponse> {
    return this.client.request<StudentsUpdateStudentAvatarResponse>("put", `/v2p3/students/${encodeURIComponent(String(params.id))}/avatar`, {
      ...options,
      query: undefined,
      body: params.body,
      responseType: "StudentsUpdateStudentAvatarResponse",
      requestType: "StudentsUpdateStudentAvatarRequest",
    });
  }

  async deleteStudentAvatar(id: number, options: RequestOptions = {}): Promise<StudentsDeleteStudentAvatarResponse> {
    return this.client.request<StudentsDeleteStudentAvatarResponse>("delete", `/v2p3/students/${encodeURIComponent(String(id))}/avatar`, {
      ...options,
      query: undefined,
      body: undefined,
      responseType: "StudentsDeleteStudentAvatarResponse",
    });
  }

  async listStudents(params: StudentsListStudentsParams = {}, options: RequestOptions = {}): Promise<StudentsListStudentsResponse> {
    return this.client.request<StudentsListStudentsResponse>("get", "/v2p3/students", {
      ...options,
      query: {
        "ids[]": params.ids,
        "archived": params.archived,
        "status": params.status,
        "modified_since": params.modifiedSince,
        "year_group_ids": params.yearGroupIds,
        "year_group_ids[]": params.yearGroupIds2,
        "homeroom_advisor_ids": params.homeroomAdvisorIds,
        "homeroom_advisor_ids[]": params.homeroomAdvisorIds2,
        "page": params.page,
        "per_page": params.perPage,
        "deleted_since": params.deletedSince,
        "q": params.q,
        "ids": params.ids2,
      },
      body: undefined,
      responseType: "StudentsListStudentsResponse",
    });
  }

  async createStudent(params: StudentsCreateStudentParams = {}, options: RequestOptions = {}): Promise<StudentsCreateStudentResponse> {
    return this.client.request<StudentsCreateStudentResponse>("post", "/v2p3/students", {
      ...options,
      query: undefined,
      body: params.body,
      responseType: "StudentsCreateStudentResponse",
      requestType: "StudentsCreateStudentRequest",
    });
  }

  async getStudentById(id: number, options: RequestOptions = {}): Promise<StudentsGetStudentByIdResponse> {
    return this.client.request<StudentsGetStudentByIdResponse>("get", `/v2p3/students/${encodeURIComponent(String(id))}`, {
      ...options,
      query: undefined,
      body: undefined,
      responseType: "StudentsGetStudentByIdResponse",
    });
  }

  async updateStudent(params: StudentsUpdateStudentParams, options: RequestOptions = {}): Promise<StudentsUpdateStudentResponse> {
    return this.client.request<StudentsUpdateStudentResponse>("patch", `/v2p3/students/${encodeURIComponent(String(params.id))}`, {
      ...options,
      query: undefined,
      body: params.body,
      responseType: "StudentsUpdateStudentResponse",
      requestType: "StudentsUpdateStudentRequest",
    });
  }

  async archiveStudent(params: StudentsArchiveStudentParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("put", `/v2p3/students/${encodeURIComponent(String(params.id))}/archive`, {
      ...options,
      query: undefined,
      body: params.body,
      requestType: "StudentsArchiveStudentRequest",
    });
  }

  async unarchiveStudent(id: number, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("put", `/v2p3/students/${encodeURIComponent(String(id))}/unarchive`, {
      ...options,
      query: undefined,
      body: undefined,
    });
  }

  async sendStudentWelcomeEmail(id: number, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("post", `/v2p3/students/${encodeURIComponent(String(id))}/welcome_email`, {
      ...options,
      query: undefined,
      body: undefined,
    });
  }

  /** Same methods, returning { data, response } with the raw HTTP Response. */
  get withRawResponse() {
    return {
      updateStudentAvatar: (params: StudentsUpdateStudentAvatarParams, options: RequestOptions = {}): Promise<{ data: StudentsUpdateStudentAvatarResponse; response: globalThis.Response }> =>
        this.client.requestRaw<StudentsUpdateStudentAvatarResponse>("put", `/v2p3/students/${encodeURIComponent(String(params.id))}/avatar`, { ...options, query: undefined, body: params.body, responseType: "StudentsUpdateStudentAvatarResponse", requestType: "StudentsUpdateStudentAvatarRequest", }),
      deleteStudentAvatar: (id: number, options: RequestOptions = {}): Promise<{ data: StudentsDeleteStudentAvatarResponse; response: globalThis.Response }> =>
        this.client.requestRaw<StudentsDeleteStudentAvatarResponse>("delete", `/v2p3/students/${encodeURIComponent(String(id))}/avatar`, { ...options, query: undefined, body: undefined, responseType: "StudentsDeleteStudentAvatarResponse", }),
      listStudents: (params: StudentsListStudentsParams = {}, options: RequestOptions = {}): Promise<{ data: StudentsListStudentsResponse; response: globalThis.Response }> =>
        this.client.requestRaw<StudentsListStudentsResponse>("get", "/v2p3/students", { ...options, query: {
      "ids[]": params.ids,
      "archived": params.archived,
      "status": params.status,
      "modified_since": params.modifiedSince,
      "year_group_ids": params.yearGroupIds,
      "year_group_ids[]": params.yearGroupIds2,
      "homeroom_advisor_ids": params.homeroomAdvisorIds,
      "homeroom_advisor_ids[]": params.homeroomAdvisorIds2,
      "page": params.page,
      "per_page": params.perPage,
      "deleted_since": params.deletedSince,
      "q": params.q,
      "ids": params.ids2,
    }, body: undefined, responseType: "StudentsListStudentsResponse", }),
      createStudent: (params: StudentsCreateStudentParams = {}, options: RequestOptions = {}): Promise<{ data: StudentsCreateStudentResponse; response: globalThis.Response }> =>
        this.client.requestRaw<StudentsCreateStudentResponse>("post", "/v2p3/students", { ...options, query: undefined, body: params.body, responseType: "StudentsCreateStudentResponse", requestType: "StudentsCreateStudentRequest", }),
      getStudentById: (id: number, options: RequestOptions = {}): Promise<{ data: StudentsGetStudentByIdResponse; response: globalThis.Response }> =>
        this.client.requestRaw<StudentsGetStudentByIdResponse>("get", `/v2p3/students/${encodeURIComponent(String(id))}`, { ...options, query: undefined, body: undefined, responseType: "StudentsGetStudentByIdResponse", }),
      updateStudent: (params: StudentsUpdateStudentParams, options: RequestOptions = {}): Promise<{ data: StudentsUpdateStudentResponse; response: globalThis.Response }> =>
        this.client.requestRaw<StudentsUpdateStudentResponse>("patch", `/v2p3/students/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: params.body, responseType: "StudentsUpdateStudentResponse", requestType: "StudentsUpdateStudentRequest", }),
      archiveStudent: (params: StudentsArchiveStudentParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("put", `/v2p3/students/${encodeURIComponent(String(params.id))}/archive`, { ...options, query: undefined, body: params.body, requestType: "StudentsArchiveStudentRequest", }),
      unarchiveStudent: (id: number, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("put", `/v2p3/students/${encodeURIComponent(String(id))}/unarchive`, { ...options, query: undefined, body: undefined, }),
      sendStudentWelcomeEmail: (id: number, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("post", `/v2p3/students/${encodeURIComponent(String(id))}/welcome_email`, { ...options, query: undefined, body: undefined, }),
    };
  }

}
