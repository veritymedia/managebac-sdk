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
export declare class ProjectsResource {
    private readonly client;
    constructor(client: ApiClient);
    listYearGroupCasExperiencesStudents(params: ProjectsListYearGroupCasExperiencesStudentsParams, options?: RequestOptions): Promise<CasExperiencesStudentsResponse>;
    getYearGroupCas(id: number, options?: RequestOptions): Promise<CasSettings>;
    listYearGroupPblProposalStudentsDetails(params: ProjectsListYearGroupPblProposalStudentsDetailsParams, options?: RequestOptions): Promise<unknown>;
    listYearGroupPblReflectionsStudentsDetails(params: ProjectsListYearGroupPblReflectionsStudentsDetailsParams, options?: RequestOptions): Promise<unknown>;
    listYearGroupPblTodosStudentsDetails(params: ProjectsListYearGroupPblTodosStudentsDetailsParams, options?: RequestOptions): Promise<unknown>;
    listYearGroupPblJournalStudentsDetails(params: ProjectsListYearGroupPblJournalStudentsDetailsParams, options?: RequestOptions): Promise<unknown>;
    listYearGroupPblDocumentsStudentsDetails(params: ProjectsListYearGroupPblDocumentsStudentsDetailsParams, options?: RequestOptions): Promise<unknown>;
    listYearGroupPblPresentationStudentsDetails(params: ProjectsListYearGroupPblPresentationStudentsDetailsParams, options?: RequestOptions): Promise<unknown>;
    listYearGroupPblNotesAndInterviewsStudentsDetails(params: ProjectsListYearGroupPblNotesAndInterviewsStudentsDetailsParams, options?: RequestOptions): Promise<unknown>;
    listYearGroupProjectBasedLearningTemplates(params: ProjectsListYearGroupProjectBasedLearningTemplatesParams, options?: RequestOptions): Promise<unknown>;
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse(): {
        listYearGroupCasExperiencesStudents: (params: ProjectsListYearGroupCasExperiencesStudentsParams, options?: RequestOptions) => Promise<{
            data: CasExperiencesStudentsResponse;
            response: globalThis.Response;
        }>;
        getYearGroupCas: (id: number, options?: RequestOptions) => Promise<{
            data: CasSettings;
            response: globalThis.Response;
        }>;
        listYearGroupPblProposalStudentsDetails: (params: ProjectsListYearGroupPblProposalStudentsDetailsParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        listYearGroupPblReflectionsStudentsDetails: (params: ProjectsListYearGroupPblReflectionsStudentsDetailsParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        listYearGroupPblTodosStudentsDetails: (params: ProjectsListYearGroupPblTodosStudentsDetailsParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        listYearGroupPblJournalStudentsDetails: (params: ProjectsListYearGroupPblJournalStudentsDetailsParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        listYearGroupPblDocumentsStudentsDetails: (params: ProjectsListYearGroupPblDocumentsStudentsDetailsParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        listYearGroupPblPresentationStudentsDetails: (params: ProjectsListYearGroupPblPresentationStudentsDetailsParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        listYearGroupPblNotesAndInterviewsStudentsDetails: (params: ProjectsListYearGroupPblNotesAndInterviewsStudentsDetailsParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        listYearGroupProjectBasedLearningTemplates: (params: ProjectsListYearGroupProjectBasedLearningTemplatesParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
    };
}
