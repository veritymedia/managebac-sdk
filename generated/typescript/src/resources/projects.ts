import type { ApiClient, RequestOptions } from "../core.js";
import type { CasExperiencesStudentsResponse } from "../types/cas_experiences_students_response.js";
import type { CasSettings } from "../types/cas_settings.js";


export interface ProjectsListYearGroupCasExperiencesStudentsParams {
  id: number;
  studentIds?: number[];
  page?: number;
  perPage?: number;
}

export interface ProjectsListYearGroupPblProposalStudentsDetailsParams {
  yearGroupId: number;
  projectId: number;
  archived?: boolean;
  includeArchivedStudents?: boolean;
}

export interface ProjectsListYearGroupPblReflectionsStudentsDetailsParams {
  yearGroupId: number;
  projectId: number;
  archived?: boolean;
  includeArchivedStudents?: boolean;
}

export interface ProjectsListYearGroupPblTodosStudentsDetailsParams {
  yearGroupId: number;
  projectId: number;
  archived?: boolean;
  includeArchivedStudents?: boolean;
  page?: number;
  perPage?: number;
}

export interface ProjectsListYearGroupPblJournalStudentsDetailsParams {
  yearGroupId: number;
  projectId: number;
  archived?: boolean;
  includeArchivedStudents?: boolean;
}

export interface ProjectsListYearGroupPblDocumentsStudentsDetailsParams {
  yearGroupId: number;
  projectId: number;
  archived?: boolean;
  includeArchivedStudents?: boolean;
}

export interface ProjectsListYearGroupPblPresentationStudentsDetailsParams {
  yearGroupId: number;
  projectId: number;
  archived?: boolean;
  includeArchivedStudents?: boolean;
}

export interface ProjectsListYearGroupPblNotesAndInterviewsStudentsDetailsParams {
  yearGroupId: number;
  projectId: number;
  archived?: boolean;
  includeArchivedStudents?: boolean;
}

export interface ProjectsListYearGroupProjectBasedLearningTemplatesParams {
  id: number;
  archived?: boolean;
}

export class ProjectsResource {

  constructor(private readonly client: ApiClient) {

  }

  async listYearGroupCasExperiencesStudents(params: ProjectsListYearGroupCasExperiencesStudentsParams, options: RequestOptions = {}): Promise<CasExperiencesStudentsResponse> {
    return this.client.request<CasExperiencesStudentsResponse>("get", `/v2p3/year-groups/${encodeURIComponent(String(params.id))}/projects/cas/experiences/students`, {
      ...options,
      query: {
        "student_ids[]": params.studentIds,
        "page": params.page,
        "per_page": params.perPage,
      },
      body: undefined,
      responseType: "CasExperiencesStudentsResponse",
    });
  }

  async getYearGroupCas(id: number, options: RequestOptions = {}): Promise<CasSettings> {
    return this.client.request<CasSettings>("get", `/v2p3/year-groups/${encodeURIComponent(String(id))}/projects/cas`, {
      ...options,
      query: undefined,
      body: undefined,
      responseType: "CasSettings",
    });
  }

  async listYearGroupPblProposalStudentsDetails(params: ProjectsListYearGroupPblProposalStudentsDetailsParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/projects/pbl/${encodeURIComponent(String(params.projectId))}/proposal/students`, {
      ...options,
      query: {
        "archived": params.archived,
        "include_archived_students": params.includeArchivedStudents,
      },
      body: undefined,
    });
  }

  async listYearGroupPblReflectionsStudentsDetails(params: ProjectsListYearGroupPblReflectionsStudentsDetailsParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/projects/pbl/${encodeURIComponent(String(params.projectId))}/reflections/students`, {
      ...options,
      query: {
        "archived": params.archived,
        "include_archived_students": params.includeArchivedStudents,
      },
      body: undefined,
    });
  }

  async listYearGroupPblTodosStudentsDetails(params: ProjectsListYearGroupPblTodosStudentsDetailsParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/projects/pbl/${encodeURIComponent(String(params.projectId))}/todos/students`, {
      ...options,
      query: {
        "archived": params.archived,
        "include_archived_students": params.includeArchivedStudents,
        "page": params.page,
        "per_page": params.perPage,
      },
      body: undefined,
    });
  }

  async listYearGroupPblJournalStudentsDetails(params: ProjectsListYearGroupPblJournalStudentsDetailsParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/projects/pbl/${encodeURIComponent(String(params.projectId))}/journal/students`, {
      ...options,
      query: {
        "archived": params.archived,
        "include_archived_students": params.includeArchivedStudents,
      },
      body: undefined,
    });
  }

  async listYearGroupPblDocumentsStudentsDetails(params: ProjectsListYearGroupPblDocumentsStudentsDetailsParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/projects/pbl/${encodeURIComponent(String(params.projectId))}/documents/students`, {
      ...options,
      query: {
        "archived": params.archived,
        "include_archived_students": params.includeArchivedStudents,
      },
      body: undefined,
    });
  }

  async listYearGroupPblPresentationStudentsDetails(params: ProjectsListYearGroupPblPresentationStudentsDetailsParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/projects/pbl/${encodeURIComponent(String(params.projectId))}/presentation/students`, {
      ...options,
      query: {
        "archived": params.archived,
        "include_archived_students": params.includeArchivedStudents,
      },
      body: undefined,
    });
  }

  async listYearGroupPblNotesAndInterviewsStudentsDetails(params: ProjectsListYearGroupPblNotesAndInterviewsStudentsDetailsParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/projects/pbl/${encodeURIComponent(String(params.projectId))}/notes_and_interviews/students`, {
      ...options,
      query: {
        "archived": params.archived,
        "include_archived_students": params.includeArchivedStudents,
      },
      body: undefined,
    });
  }

  async listYearGroupProjectBasedLearningTemplates(params: ProjectsListYearGroupProjectBasedLearningTemplatesParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", `/v2p3/year-groups/${encodeURIComponent(String(params.id))}/projects/pbl`, {
      ...options,
      query: {
        "archived": params.archived,
      },
      body: undefined,
    });
  }

  /** Same methods, returning { data, response } with the raw HTTP Response. */
  get withRawResponse() {
    return {
      listYearGroupCasExperiencesStudents: (params: ProjectsListYearGroupCasExperiencesStudentsParams, options: RequestOptions = {}): Promise<{ data: CasExperiencesStudentsResponse; response: globalThis.Response }> =>
        this.client.requestRaw<CasExperiencesStudentsResponse>("get", `/v2p3/year-groups/${encodeURIComponent(String(params.id))}/projects/cas/experiences/students`, { ...options, query: {
      "student_ids[]": params.studentIds,
      "page": params.page,
      "per_page": params.perPage,
    }, body: undefined, responseType: "CasExperiencesStudentsResponse", }),
      getYearGroupCas: (id: number, options: RequestOptions = {}): Promise<{ data: CasSettings; response: globalThis.Response }> =>
        this.client.requestRaw<CasSettings>("get", `/v2p3/year-groups/${encodeURIComponent(String(id))}/projects/cas`, { ...options, query: undefined, body: undefined, responseType: "CasSettings", }),
      listYearGroupPblProposalStudentsDetails: (params: ProjectsListYearGroupPblProposalStudentsDetailsParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/projects/pbl/${encodeURIComponent(String(params.projectId))}/proposal/students`, { ...options, query: {
      "archived": params.archived,
      "include_archived_students": params.includeArchivedStudents,
    }, body: undefined, }),
      listYearGroupPblReflectionsStudentsDetails: (params: ProjectsListYearGroupPblReflectionsStudentsDetailsParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/projects/pbl/${encodeURIComponent(String(params.projectId))}/reflections/students`, { ...options, query: {
      "archived": params.archived,
      "include_archived_students": params.includeArchivedStudents,
    }, body: undefined, }),
      listYearGroupPblTodosStudentsDetails: (params: ProjectsListYearGroupPblTodosStudentsDetailsParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/projects/pbl/${encodeURIComponent(String(params.projectId))}/todos/students`, { ...options, query: {
      "archived": params.archived,
      "include_archived_students": params.includeArchivedStudents,
      "page": params.page,
      "per_page": params.perPage,
    }, body: undefined, }),
      listYearGroupPblJournalStudentsDetails: (params: ProjectsListYearGroupPblJournalStudentsDetailsParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/projects/pbl/${encodeURIComponent(String(params.projectId))}/journal/students`, { ...options, query: {
      "archived": params.archived,
      "include_archived_students": params.includeArchivedStudents,
    }, body: undefined, }),
      listYearGroupPblDocumentsStudentsDetails: (params: ProjectsListYearGroupPblDocumentsStudentsDetailsParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/projects/pbl/${encodeURIComponent(String(params.projectId))}/documents/students`, { ...options, query: {
      "archived": params.archived,
      "include_archived_students": params.includeArchivedStudents,
    }, body: undefined, }),
      listYearGroupPblPresentationStudentsDetails: (params: ProjectsListYearGroupPblPresentationStudentsDetailsParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/projects/pbl/${encodeURIComponent(String(params.projectId))}/presentation/students`, { ...options, query: {
      "archived": params.archived,
      "include_archived_students": params.includeArchivedStudents,
    }, body: undefined, }),
      listYearGroupPblNotesAndInterviewsStudentsDetails: (params: ProjectsListYearGroupPblNotesAndInterviewsStudentsDetailsParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/projects/pbl/${encodeURIComponent(String(params.projectId))}/notes_and_interviews/students`, { ...options, query: {
      "archived": params.archived,
      "include_archived_students": params.includeArchivedStudents,
    }, body: undefined, }),
      listYearGroupProjectBasedLearningTemplates: (params: ProjectsListYearGroupProjectBasedLearningTemplatesParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", `/v2p3/year-groups/${encodeURIComponent(String(params.id))}/projects/pbl`, { ...options, query: {
      "archived": params.archived,
    }, body: undefined, }),
    };
  }

}
