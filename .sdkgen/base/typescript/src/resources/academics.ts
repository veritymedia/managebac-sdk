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

export class AcademicsResource {

  constructor(private readonly client: ApiClient) {

  }

  async createAcademicTerm(params: AcademicsCreateAcademicTermParams, options: RequestOptions = {}): Promise<AcademicTermResponse> {
    return this.client.request<AcademicTermResponse>("post", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/academic-years/${encodeURIComponent(String(params.academicYearId))}/academic-terms`, {
      ...options,
      query: undefined,
      body: params.body,
      responseType: "AcademicTermResponse",
      requestType: "AcademicTermRequest",
    });
  }

  async updateAcademicTerm(params: AcademicsUpdateAcademicTermParams, options: RequestOptions = {}): Promise<AcademicTermResponse> {
    return this.client.request<AcademicTermResponse>("patch", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/academic-years/${encodeURIComponent(String(params.academicYearId))}/academic-terms/${encodeURIComponent(String(params.id))}`, {
      ...options,
      query: undefined,
      body: params.body,
      responseType: "AcademicTermResponse",
      requestType: "AcademicTermRequest",
    });
  }

  async deleteAcademicTerm(params: AcademicsDeleteAcademicTermParams, options: RequestOptions = {}): Promise<AcademicTermResponse> {
    return this.client.request<AcademicTermResponse>("delete", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/academic-years/${encodeURIComponent(String(params.academicYearId))}/academic-terms/${encodeURIComponent(String(params.id))}`, {
      ...options,
      query: undefined,
      body: undefined,
      responseType: "AcademicTermResponse",
    });
  }

  async retrieve(params: AcademicsRetrieveParams, options: RequestOptions = {}): Promise<AcademicYearResponse> {
    return this.client.request<AcademicYearResponse>("get", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/academic-years/${encodeURIComponent(String(params.id))}`, {
      ...options,
      query: undefined,
      body: undefined,
      responseType: "AcademicYearResponse",
    });
  }

  async createAcademicYear(params: AcademicsCreateAcademicYearParams, options: RequestOptions = {}): Promise<AcademicYearResponse> {
    return this.client.request<AcademicYearResponse>("post", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/academic-years`, {
      ...options,
      query: undefined,
      body: params.body,
      responseType: "AcademicYearResponse",
      requestType: "AcademicYearRequest",
    });
  }

  async getAssessmentTypes(programCode: string, options: RequestOptions = {}): Promise<AssessmentTypesResponse> {
    return this.client.request<AssessmentTypesResponse>("get", `/v2p3/school/programs/${encodeURIComponent(String(programCode))}/assessment_types`, {
      ...options,
      query: undefined,
      body: undefined,
      responseType: "AssessmentTypesResponse",
    });
  }

  async list(params: AcademicsListParams, options: RequestOptions = {}): Promise<AcademicYearCalendarResponse> {
    return this.client.request<AcademicYearCalendarResponse>("get", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/academic-years/${encodeURIComponent(String(params.academicYearId))}/calendar`, {
      ...options,
      query: undefined,
      body: undefined,
      responseType: "AcademicYearCalendarResponse",
    });
  }

  async getAllTermReports(params: AcademicsGetAllTermReportsParams, options: RequestOptions = {}): Promise<AcademicsGetAllTermReportsResponse> {
    return this.client.request<AcademicsGetAllTermReportsResponse>("get", `/v2p3/school/programs/${encodeURIComponent(String(params.program))}/reports`, {
      ...options,
      query: {
        "academic_term_id": params.academicTermId,
        "type": params.type,
      },
      body: undefined,
      responseType: "AcademicsGetAllTermReportsResponse",
    });
  }

  async getTermReport(params: AcademicsGetTermReportParams, options: RequestOptions = {}): Promise<AcademicsGetTermReportResponse> {
    return this.client.request<AcademicsGetTermReportResponse>("get", `/v2p3/school/programs/${encodeURIComponent(String(params.program))}/reports/${encodeURIComponent(String(params.id))}`, {
      ...options,
      query: undefined,
      body: undefined,
      responseType: "AcademicsGetTermReportResponse",
    });
  }

  async downloadTermReportFile(params: AcademicsDownloadTermReportFileParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", `/v2p3/school/programs/${encodeURIComponent(String(params.program))}/reports/${encodeURIComponent(String(params.id))}/download/${encodeURIComponent(String(params.kind))}`, {
      ...options,
      query: undefined,
      body: undefined,
    });
  }

  async getSubjectGroups(params: AcademicsGetSubjectGroupsParams, options: RequestOptions = {}): Promise<SubjectGroupsResponse> {
    return this.client.request<SubjectGroupsResponse>("get", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subject-groups`, {
      ...options,
      query: {
        "page": params.page,
        "per_page": params.perPage,
        "modified_since": params.modifiedSince,
      },
      body: undefined,
      responseType: "SubjectGroupsResponse",
    });
  }

  async createSubjectGroup(params: AcademicsCreateSubjectGroupParams, options: RequestOptions = {}): Promise<SubjectGroupResponse> {
    return this.client.request<SubjectGroupResponse>("post", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subject-groups`, {
      ...options,
      query: undefined,
      body: params.body,
      responseType: "SubjectGroupResponse",
      requestType: "SubjectGroupRequest",
    });
  }

  async getSubjectGroup(params: AcademicsGetSubjectGroupParams, options: RequestOptions = {}): Promise<SubjectGroupResponse> {
    return this.client.request<SubjectGroupResponse>("get", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subject-groups/${encodeURIComponent(String(params.id))}`, {
      ...options,
      query: undefined,
      body: undefined,
      responseType: "SubjectGroupResponse",
    });
  }

  async updateSubjectGroup(params: AcademicsUpdateSubjectGroupParams, options: RequestOptions = {}): Promise<SubjectGroupResponse> {
    return this.client.request<SubjectGroupResponse>("patch", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subject-groups/${encodeURIComponent(String(params.id))}`, {
      ...options,
      query: undefined,
      body: params.body,
      responseType: "SubjectGroupResponse",
      requestType: "SubjectGroupRequest",
    });
  }

  async destroySubjectGroup(params: AcademicsDestroySubjectGroupParams, options: RequestOptions = {}): Promise<SubjectGroupResponse> {
    return this.client.request<SubjectGroupResponse>("delete", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subject-groups/${encodeURIComponent(String(params.id))}`, {
      ...options,
      query: undefined,
      body: undefined,
      responseType: "SubjectGroupResponse",
    });
  }

  async getSubjects(params: AcademicsGetSubjectsParams, options: RequestOptions = {}): Promise<SubjectsResponse> {
    return this.client.request<SubjectsResponse>("get", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subjects`, {
      ...options,
      query: {
        "page": params.page,
        "per_page": params.perPage,
      },
      body: undefined,
      responseType: "SubjectsResponse",
    });
  }

  async createSubject(params: AcademicsCreateSubjectParams, options: RequestOptions = {}): Promise<SubjectResponse> {
    return this.client.request<SubjectResponse>("post", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subjects`, {
      ...options,
      query: undefined,
      body: params.body,
      responseType: "SubjectResponse",
      requestType: "SubjectRequest",
    });
  }

  async getSubject(params: AcademicsGetSubjectParams, options: RequestOptions = {}): Promise<SubjectResponse> {
    return this.client.request<SubjectResponse>("get", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subjects/${encodeURIComponent(String(params.id))}`, {
      ...options,
      query: undefined,
      body: undefined,
      responseType: "SubjectResponse",
    });
  }

  async updateSubject(params: AcademicsUpdateSubjectParams, options: RequestOptions = {}): Promise<SubjectResponse> {
    return this.client.request<SubjectResponse>("put", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subjects/${encodeURIComponent(String(params.id))}`, {
      ...options,
      query: undefined,
      body: params.body,
      responseType: "SubjectResponse",
      requestType: "SubjectRequest",
    });
  }

  async deleteSubject(params: AcademicsDeleteSubjectParams, options: RequestOptions = {}): Promise<SubjectResponse> {
    return this.client.request<SubjectResponse>("delete", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subjects/${encodeURIComponent(String(params.id))}`, {
      ...options,
      query: undefined,
      body: undefined,
      responseType: "SubjectResponse",
    });
  }

  async getSchool(options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", "/v2p3/school", {
      ...options,
      query: undefined,
      body: undefined,
    });
  }

  async listAcademicYears(params: AcademicsListAcademicYearsParams = {}, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", "/v2p3/school/academic-years", {
      ...options,
      query: {
        "program_code": params.programCode,
        "active": params.active,
      },
      body: undefined,
    });
  }

  async listGrades(options: RequestOptions = {}): Promise<AcademicsListGradesResponse> {
    return this.client.request<AcademicsListGradesResponse>("get", "/v2p3/school/grades", {
      ...options,
      query: undefined,
      body: undefined,
      responseType: "AcademicsListGradesResponse",
    });
  }

  async listSubjects(options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", "/v2p3/school/subjects", {
      ...options,
      query: undefined,
      body: undefined,
    });
  }

  async listSchoolTermGradeScales(options: RequestOptions = {}): Promise<AcademicsListSchoolTermGradeScalesResponse> {
    return this.client.request<AcademicsListSchoolTermGradeScalesResponse>("get", "/v2p3/school/term-grade-scales", {
      ...options,
      query: undefined,
      body: undefined,
      responseType: "AcademicsListSchoolTermGradeScalesResponse",
    });
  }

  async listTermRubrics(options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", "/v2p3/school/term-rubrics", {
      ...options,
      query: undefined,
      body: undefined,
    });
  }

  /** Same methods, returning { data, response } with the raw HTTP Response. */
  get withRawResponse() {
    return {
      createAcademicTerm: (params: AcademicsCreateAcademicTermParams, options: RequestOptions = {}): Promise<{ data: AcademicTermResponse; response: globalThis.Response }> =>
        this.client.requestRaw<AcademicTermResponse>("post", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/academic-years/${encodeURIComponent(String(params.academicYearId))}/academic-terms`, { ...options, query: undefined, body: params.body, responseType: "AcademicTermResponse", requestType: "AcademicTermRequest", }),
      updateAcademicTerm: (params: AcademicsUpdateAcademicTermParams, options: RequestOptions = {}): Promise<{ data: AcademicTermResponse; response: globalThis.Response }> =>
        this.client.requestRaw<AcademicTermResponse>("patch", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/academic-years/${encodeURIComponent(String(params.academicYearId))}/academic-terms/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: params.body, responseType: "AcademicTermResponse", requestType: "AcademicTermRequest", }),
      deleteAcademicTerm: (params: AcademicsDeleteAcademicTermParams, options: RequestOptions = {}): Promise<{ data: AcademicTermResponse; response: globalThis.Response }> =>
        this.client.requestRaw<AcademicTermResponse>("delete", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/academic-years/${encodeURIComponent(String(params.academicYearId))}/academic-terms/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: undefined, responseType: "AcademicTermResponse", }),
      retrieve: (params: AcademicsRetrieveParams, options: RequestOptions = {}): Promise<{ data: AcademicYearResponse; response: globalThis.Response }> =>
        this.client.requestRaw<AcademicYearResponse>("get", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/academic-years/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: undefined, responseType: "AcademicYearResponse", }),
      createAcademicYear: (params: AcademicsCreateAcademicYearParams, options: RequestOptions = {}): Promise<{ data: AcademicYearResponse; response: globalThis.Response }> =>
        this.client.requestRaw<AcademicYearResponse>("post", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/academic-years`, { ...options, query: undefined, body: params.body, responseType: "AcademicYearResponse", requestType: "AcademicYearRequest", }),
      getAssessmentTypes: (programCode: string, options: RequestOptions = {}): Promise<{ data: AssessmentTypesResponse; response: globalThis.Response }> =>
        this.client.requestRaw<AssessmentTypesResponse>("get", `/v2p3/school/programs/${encodeURIComponent(String(programCode))}/assessment_types`, { ...options, query: undefined, body: undefined, responseType: "AssessmentTypesResponse", }),
      list: (params: AcademicsListParams, options: RequestOptions = {}): Promise<{ data: AcademicYearCalendarResponse; response: globalThis.Response }> =>
        this.client.requestRaw<AcademicYearCalendarResponse>("get", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/academic-years/${encodeURIComponent(String(params.academicYearId))}/calendar`, { ...options, query: undefined, body: undefined, responseType: "AcademicYearCalendarResponse", }),
      getAllTermReports: (params: AcademicsGetAllTermReportsParams, options: RequestOptions = {}): Promise<{ data: AcademicsGetAllTermReportsResponse; response: globalThis.Response }> =>
        this.client.requestRaw<AcademicsGetAllTermReportsResponse>("get", `/v2p3/school/programs/${encodeURIComponent(String(params.program))}/reports`, { ...options, query: {
      "academic_term_id": params.academicTermId,
      "type": params.type,
    }, body: undefined, responseType: "AcademicsGetAllTermReportsResponse", }),
      getTermReport: (params: AcademicsGetTermReportParams, options: RequestOptions = {}): Promise<{ data: AcademicsGetTermReportResponse; response: globalThis.Response }> =>
        this.client.requestRaw<AcademicsGetTermReportResponse>("get", `/v2p3/school/programs/${encodeURIComponent(String(params.program))}/reports/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: undefined, responseType: "AcademicsGetTermReportResponse", }),
      downloadTermReportFile: (params: AcademicsDownloadTermReportFileParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", `/v2p3/school/programs/${encodeURIComponent(String(params.program))}/reports/${encodeURIComponent(String(params.id))}/download/${encodeURIComponent(String(params.kind))}`, { ...options, query: undefined, body: undefined, }),
      getSubjectGroups: (params: AcademicsGetSubjectGroupsParams, options: RequestOptions = {}): Promise<{ data: SubjectGroupsResponse; response: globalThis.Response }> =>
        this.client.requestRaw<SubjectGroupsResponse>("get", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subject-groups`, { ...options, query: {
      "page": params.page,
      "per_page": params.perPage,
      "modified_since": params.modifiedSince,
    }, body: undefined, responseType: "SubjectGroupsResponse", }),
      createSubjectGroup: (params: AcademicsCreateSubjectGroupParams, options: RequestOptions = {}): Promise<{ data: SubjectGroupResponse; response: globalThis.Response }> =>
        this.client.requestRaw<SubjectGroupResponse>("post", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subject-groups`, { ...options, query: undefined, body: params.body, responseType: "SubjectGroupResponse", requestType: "SubjectGroupRequest", }),
      getSubjectGroup: (params: AcademicsGetSubjectGroupParams, options: RequestOptions = {}): Promise<{ data: SubjectGroupResponse; response: globalThis.Response }> =>
        this.client.requestRaw<SubjectGroupResponse>("get", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subject-groups/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: undefined, responseType: "SubjectGroupResponse", }),
      updateSubjectGroup: (params: AcademicsUpdateSubjectGroupParams, options: RequestOptions = {}): Promise<{ data: SubjectGroupResponse; response: globalThis.Response }> =>
        this.client.requestRaw<SubjectGroupResponse>("patch", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subject-groups/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: params.body, responseType: "SubjectGroupResponse", requestType: "SubjectGroupRequest", }),
      destroySubjectGroup: (params: AcademicsDestroySubjectGroupParams, options: RequestOptions = {}): Promise<{ data: SubjectGroupResponse; response: globalThis.Response }> =>
        this.client.requestRaw<SubjectGroupResponse>("delete", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subject-groups/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: undefined, responseType: "SubjectGroupResponse", }),
      getSubjects: (params: AcademicsGetSubjectsParams, options: RequestOptions = {}): Promise<{ data: SubjectsResponse; response: globalThis.Response }> =>
        this.client.requestRaw<SubjectsResponse>("get", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subjects`, { ...options, query: {
      "page": params.page,
      "per_page": params.perPage,
    }, body: undefined, responseType: "SubjectsResponse", }),
      createSubject: (params: AcademicsCreateSubjectParams, options: RequestOptions = {}): Promise<{ data: SubjectResponse; response: globalThis.Response }> =>
        this.client.requestRaw<SubjectResponse>("post", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subjects`, { ...options, query: undefined, body: params.body, responseType: "SubjectResponse", requestType: "SubjectRequest", }),
      getSubject: (params: AcademicsGetSubjectParams, options: RequestOptions = {}): Promise<{ data: SubjectResponse; response: globalThis.Response }> =>
        this.client.requestRaw<SubjectResponse>("get", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subjects/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: undefined, responseType: "SubjectResponse", }),
      updateSubject: (params: AcademicsUpdateSubjectParams, options: RequestOptions = {}): Promise<{ data: SubjectResponse; response: globalThis.Response }> =>
        this.client.requestRaw<SubjectResponse>("put", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subjects/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: params.body, responseType: "SubjectResponse", requestType: "SubjectRequest", }),
      deleteSubject: (params: AcademicsDeleteSubjectParams, options: RequestOptions = {}): Promise<{ data: SubjectResponse; response: globalThis.Response }> =>
        this.client.requestRaw<SubjectResponse>("delete", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subjects/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: undefined, responseType: "SubjectResponse", }),
      getSchool: (options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", "/v2p3/school", { ...options, query: undefined, body: undefined, }),
      listAcademicYears: (params: AcademicsListAcademicYearsParams = {}, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", "/v2p3/school/academic-years", { ...options, query: {
      "program_code": params.programCode,
      "active": params.active,
    }, body: undefined, }),
      listGrades: (options: RequestOptions = {}): Promise<{ data: AcademicsListGradesResponse; response: globalThis.Response }> =>
        this.client.requestRaw<AcademicsListGradesResponse>("get", "/v2p3/school/grades", { ...options, query: undefined, body: undefined, responseType: "AcademicsListGradesResponse", }),
      listSubjects: (options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", "/v2p3/school/subjects", { ...options, query: undefined, body: undefined, }),
      listSchoolTermGradeScales: (options: RequestOptions = {}): Promise<{ data: AcademicsListSchoolTermGradeScalesResponse; response: globalThis.Response }> =>
        this.client.requestRaw<AcademicsListSchoolTermGradeScalesResponse>("get", "/v2p3/school/term-grade-scales", { ...options, query: undefined, body: undefined, responseType: "AcademicsListSchoolTermGradeScalesResponse", }),
      listTermRubrics: (options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", "/v2p3/school/term-rubrics", { ...options, query: undefined, body: undefined, }),
    };
  }

}
