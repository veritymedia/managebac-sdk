import type { ApiClient, RequestOptions } from "../core.js";
import type { AcademicTermRequest } from "../types/academic_term_request.js";
import type { AcademicTermResponse } from "../types/academic_term_response.js";
import type { AcademicYearResponse } from "../types/academic_year_response.js";
import type { AcademicYearRequest } from "../types/academic_year_request.js";
import type { AssessmentTypesResponse } from "../types/assessment_types_response.js";
import type { AcademicYearCalendarResponse } from "../types/academic_year_calendar_response.js";
import type { AcademicsGetAllTermReportsResponse } from "../types/academics_get_all_term_reports_response.js";
import type { AcademicsGetTermReportResponse } from "../types/academics_get_term_report_response.js";
import type { SubjectGroupsResponse } from "../types/subject_groups_response.js";
import type { SubjectGroupRequest } from "../types/subject_group_request.js";
import type { SubjectGroupResponse } from "../types/subject_group_response.js";
import type { SubjectsResponse } from "../types/subjects_response.js";
import type { SubjectRequest } from "../types/subject_request.js";
import type { SubjectResponse } from "../types/subject_response.js";
import type { AcademicsListGradesResponse } from "../types/academics_list_grades_response.js";
import type { AcademicsListSchoolTermGradeScalesResponse } from "../types/academics_list_school_term_grade_scales_response.js";
export interface AcademicsCreateAcademicTermParams {
    programCode: string;
    academicYearId: string;
    body?: AcademicTermRequest;
}
export interface AcademicsUpdateAcademicTermParams {
    programCode: string;
    academicYearId: string;
    id: string;
    body?: AcademicTermRequest;
}
export interface AcademicsDeleteAcademicTermParams {
    programCode: string;
    academicYearId: number;
    id: number;
}
export interface AcademicsRetrieveParams {
    programCode: string;
    id: number;
}
export interface AcademicsCreateAcademicYearParams {
    programCode: string;
    body?: AcademicYearRequest;
}
export interface AcademicsListParams {
    programCode: string;
    academicYearId: number;
}
export interface AcademicsGetAllTermReportsParams {
    program: string;
    academicTermId?: number;
    type?: string;
}
export interface AcademicsGetTermReportParams {
    program: string;
    id: number;
}
export interface AcademicsDownloadTermReportFileParams {
    program: string;
    id: number;
    kind: string;
}
export interface AcademicsGetSubjectGroupsParams {
    programCode: string;
    page?: string;
    perPage?: string;
    modifiedSince?: string;
}
export interface AcademicsCreateSubjectGroupParams {
    programCode: string;
    body?: SubjectGroupRequest;
}
export interface AcademicsGetSubjectGroupParams {
    programCode: string;
    id: number;
}
export interface AcademicsUpdateSubjectGroupParams {
    programCode: string;
    id: number;
    body?: SubjectGroupRequest;
}
export interface AcademicsDestroySubjectGroupParams {
    programCode: string;
    id: number;
}
export interface AcademicsGetSubjectsParams {
    programCode: string;
    page?: string;
    perPage?: string;
}
export interface AcademicsCreateSubjectParams {
    programCode: string;
    body?: SubjectRequest;
}
export interface AcademicsGetSubjectParams {
    programCode: string;
    id: number;
}
export interface AcademicsUpdateSubjectParams {
    programCode: string;
    id: number;
    body?: SubjectRequest;
}
export interface AcademicsDeleteSubjectParams {
    programCode: string;
    id: number;
}
export interface AcademicsListAcademicYearsParams {
    programCode?: string;
    active?: boolean;
}
export declare class AcademicsResource {
    private readonly client;
    constructor(client: ApiClient);
    createAcademicTerm(params: AcademicsCreateAcademicTermParams, options?: RequestOptions): Promise<AcademicTermResponse>;
    updateAcademicTerm(params: AcademicsUpdateAcademicTermParams, options?: RequestOptions): Promise<AcademicTermResponse>;
    deleteAcademicTerm(params: AcademicsDeleteAcademicTermParams, options?: RequestOptions): Promise<AcademicTermResponse>;
    retrieve(params: AcademicsRetrieveParams, options?: RequestOptions): Promise<AcademicYearResponse>;
    createAcademicYear(params: AcademicsCreateAcademicYearParams, options?: RequestOptions): Promise<AcademicYearResponse>;
    getAssessmentTypes(programCode: string, options?: RequestOptions): Promise<AssessmentTypesResponse>;
    list(params: AcademicsListParams, options?: RequestOptions): Promise<AcademicYearCalendarResponse>;
    getAllTermReports(params: AcademicsGetAllTermReportsParams, options?: RequestOptions): Promise<AcademicsGetAllTermReportsResponse>;
    getTermReport(params: AcademicsGetTermReportParams, options?: RequestOptions): Promise<AcademicsGetTermReportResponse>;
    downloadTermReportFile(params: AcademicsDownloadTermReportFileParams, options?: RequestOptions): Promise<unknown>;
    getSubjectGroups(params: AcademicsGetSubjectGroupsParams, options?: RequestOptions): Promise<SubjectGroupsResponse>;
    createSubjectGroup(params: AcademicsCreateSubjectGroupParams, options?: RequestOptions): Promise<SubjectGroupResponse>;
    getSubjectGroup(params: AcademicsGetSubjectGroupParams, options?: RequestOptions): Promise<SubjectGroupResponse>;
    updateSubjectGroup(params: AcademicsUpdateSubjectGroupParams, options?: RequestOptions): Promise<SubjectGroupResponse>;
    destroySubjectGroup(params: AcademicsDestroySubjectGroupParams, options?: RequestOptions): Promise<SubjectGroupResponse>;
    getSubjects(params: AcademicsGetSubjectsParams, options?: RequestOptions): Promise<SubjectsResponse>;
    createSubject(params: AcademicsCreateSubjectParams, options?: RequestOptions): Promise<SubjectResponse>;
    getSubject(params: AcademicsGetSubjectParams, options?: RequestOptions): Promise<SubjectResponse>;
    updateSubject(params: AcademicsUpdateSubjectParams, options?: RequestOptions): Promise<SubjectResponse>;
    deleteSubject(params: AcademicsDeleteSubjectParams, options?: RequestOptions): Promise<SubjectResponse>;
    getSchool(options?: RequestOptions): Promise<unknown>;
    listAcademicYears(params?: AcademicsListAcademicYearsParams, options?: RequestOptions): Promise<unknown>;
    listGrades(options?: RequestOptions): Promise<AcademicsListGradesResponse>;
    listSubjects(options?: RequestOptions): Promise<unknown>;
    listSchoolTermGradeScales(options?: RequestOptions): Promise<AcademicsListSchoolTermGradeScalesResponse>;
    listTermRubrics(options?: RequestOptions): Promise<unknown>;
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse(): {
        createAcademicTerm: (params: AcademicsCreateAcademicTermParams, options?: RequestOptions) => Promise<{
            data: AcademicTermResponse;
            response: globalThis.Response;
        }>;
        updateAcademicTerm: (params: AcademicsUpdateAcademicTermParams, options?: RequestOptions) => Promise<{
            data: AcademicTermResponse;
            response: globalThis.Response;
        }>;
        deleteAcademicTerm: (params: AcademicsDeleteAcademicTermParams, options?: RequestOptions) => Promise<{
            data: AcademicTermResponse;
            response: globalThis.Response;
        }>;
        retrieve: (params: AcademicsRetrieveParams, options?: RequestOptions) => Promise<{
            data: AcademicYearResponse;
            response: globalThis.Response;
        }>;
        createAcademicYear: (params: AcademicsCreateAcademicYearParams, options?: RequestOptions) => Promise<{
            data: AcademicYearResponse;
            response: globalThis.Response;
        }>;
        getAssessmentTypes: (programCode: string, options?: RequestOptions) => Promise<{
            data: AssessmentTypesResponse;
            response: globalThis.Response;
        }>;
        list: (params: AcademicsListParams, options?: RequestOptions) => Promise<{
            data: AcademicYearCalendarResponse;
            response: globalThis.Response;
        }>;
        getAllTermReports: (params: AcademicsGetAllTermReportsParams, options?: RequestOptions) => Promise<{
            data: AcademicsGetAllTermReportsResponse;
            response: globalThis.Response;
        }>;
        getTermReport: (params: AcademicsGetTermReportParams, options?: RequestOptions) => Promise<{
            data: AcademicsGetTermReportResponse;
            response: globalThis.Response;
        }>;
        downloadTermReportFile: (params: AcademicsDownloadTermReportFileParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        getSubjectGroups: (params: AcademicsGetSubjectGroupsParams, options?: RequestOptions) => Promise<{
            data: SubjectGroupsResponse;
            response: globalThis.Response;
        }>;
        createSubjectGroup: (params: AcademicsCreateSubjectGroupParams, options?: RequestOptions) => Promise<{
            data: SubjectGroupResponse;
            response: globalThis.Response;
        }>;
        getSubjectGroup: (params: AcademicsGetSubjectGroupParams, options?: RequestOptions) => Promise<{
            data: SubjectGroupResponse;
            response: globalThis.Response;
        }>;
        updateSubjectGroup: (params: AcademicsUpdateSubjectGroupParams, options?: RequestOptions) => Promise<{
            data: SubjectGroupResponse;
            response: globalThis.Response;
        }>;
        destroySubjectGroup: (params: AcademicsDestroySubjectGroupParams, options?: RequestOptions) => Promise<{
            data: SubjectGroupResponse;
            response: globalThis.Response;
        }>;
        getSubjects: (params: AcademicsGetSubjectsParams, options?: RequestOptions) => Promise<{
            data: SubjectsResponse;
            response: globalThis.Response;
        }>;
        createSubject: (params: AcademicsCreateSubjectParams, options?: RequestOptions) => Promise<{
            data: SubjectResponse;
            response: globalThis.Response;
        }>;
        getSubject: (params: AcademicsGetSubjectParams, options?: RequestOptions) => Promise<{
            data: SubjectResponse;
            response: globalThis.Response;
        }>;
        updateSubject: (params: AcademicsUpdateSubjectParams, options?: RequestOptions) => Promise<{
            data: SubjectResponse;
            response: globalThis.Response;
        }>;
        deleteSubject: (params: AcademicsDeleteSubjectParams, options?: RequestOptions) => Promise<{
            data: SubjectResponse;
            response: globalThis.Response;
        }>;
        getSchool: (options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        listAcademicYears: (params?: AcademicsListAcademicYearsParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        listGrades: (options?: RequestOptions) => Promise<{
            data: AcademicsListGradesResponse;
            response: globalThis.Response;
        }>;
        listSubjects: (options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        listSchoolTermGradeScales: (options?: RequestOptions) => Promise<{
            data: AcademicsListSchoolTermGradeScalesResponse;
            response: globalThis.Response;
        }>;
        listTermRubrics: (options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
    };
}
