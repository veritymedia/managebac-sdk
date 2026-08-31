export class AcademicsResource {
    client;
    constructor(client) {
        this.client = client;
    }
    async createAcademicTerm(params, options = {}) {
        return this.client.request("post", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/academic-years/${encodeURIComponent(String(params.academicYearId))}/academic-terms`, {
            ...options,
            query: undefined,
            body: params.body,
            responseType: "AcademicTermResponse",
            requestType: "AcademicTermRequest",
        });
    }
    async updateAcademicTerm(params, options = {}) {
        return this.client.request("patch", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/academic-years/${encodeURIComponent(String(params.academicYearId))}/academic-terms/${encodeURIComponent(String(params.id))}`, {
            ...options,
            query: undefined,
            body: params.body,
            responseType: "AcademicTermResponse",
            requestType: "AcademicTermRequest",
        });
    }
    async deleteAcademicTerm(params, options = {}) {
        return this.client.request("delete", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/academic-years/${encodeURIComponent(String(params.academicYearId))}/academic-terms/${encodeURIComponent(String(params.id))}`, {
            ...options,
            query: undefined,
            body: undefined,
            responseType: "AcademicTermResponse",
        });
    }
    async retrieve(params, options = {}) {
        return this.client.request("get", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/academic-years/${encodeURIComponent(String(params.id))}`, {
            ...options,
            query: undefined,
            body: undefined,
            responseType: "AcademicYearResponse",
        });
    }
    async createAcademicYear(params, options = {}) {
        return this.client.request("post", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/academic-years`, {
            ...options,
            query: undefined,
            body: params.body,
            responseType: "AcademicYearResponse",
            requestType: "AcademicYearRequest",
        });
    }
    async getAssessmentTypes(programCode, options = {}) {
        return this.client.request("get", `/v2p3/school/programs/${encodeURIComponent(String(programCode))}/assessment_types`, {
            ...options,
            query: undefined,
            body: undefined,
            responseType: "AssessmentTypesResponse",
        });
    }
    async list(params, options = {}) {
        return this.client.request("get", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/academic-years/${encodeURIComponent(String(params.academicYearId))}/calendar`, {
            ...options,
            query: undefined,
            body: undefined,
            responseType: "AcademicYearCalendarResponse",
        });
    }
    async getAllTermReports(params, options = {}) {
        return this.client.request("get", `/v2p3/school/programs/${encodeURIComponent(String(params.program))}/reports`, {
            ...options,
            query: {
                "academic_term_id": params.academicTermId,
                "type": params.type,
            },
            body: undefined,
            responseType: "AcademicsGetAllTermReportsResponse",
        });
    }
    async getTermReport(params, options = {}) {
        return this.client.request("get", `/v2p3/school/programs/${encodeURIComponent(String(params.program))}/reports/${encodeURIComponent(String(params.id))}`, {
            ...options,
            query: undefined,
            body: undefined,
            responseType: "AcademicsGetTermReportResponse",
        });
    }
    async downloadTermReportFile(params, options = {}) {
        return this.client.request("get", `/v2p3/school/programs/${encodeURIComponent(String(params.program))}/reports/${encodeURIComponent(String(params.id))}/download/${encodeURIComponent(String(params.kind))}`, {
            ...options,
            query: undefined,
            body: undefined,
        });
    }
    async getSubjectGroups(params, options = {}) {
        return this.client.request("get", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subject-groups`, {
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
    async createSubjectGroup(params, options = {}) {
        return this.client.request("post", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subject-groups`, {
            ...options,
            query: undefined,
            body: params.body,
            responseType: "SubjectGroupResponse",
            requestType: "SubjectGroupRequest",
        });
    }
    async getSubjectGroup(params, options = {}) {
        return this.client.request("get", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subject-groups/${encodeURIComponent(String(params.id))}`, {
            ...options,
            query: undefined,
            body: undefined,
            responseType: "SubjectGroupResponse",
        });
    }
    async updateSubjectGroup(params, options = {}) {
        return this.client.request("patch", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subject-groups/${encodeURIComponent(String(params.id))}`, {
            ...options,
            query: undefined,
            body: params.body,
            responseType: "SubjectGroupResponse",
            requestType: "SubjectGroupRequest",
        });
    }
    async destroySubjectGroup(params, options = {}) {
        return this.client.request("delete", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subject-groups/${encodeURIComponent(String(params.id))}`, {
            ...options,
            query: undefined,
            body: undefined,
            responseType: "SubjectGroupResponse",
        });
    }
    async getSubjects(params, options = {}) {
        return this.client.request("get", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subjects`, {
            ...options,
            query: {
                "page": params.page,
                "per_page": params.perPage,
            },
            body: undefined,
            responseType: "SubjectsResponse",
        });
    }
    async createSubject(params, options = {}) {
        return this.client.request("post", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subjects`, {
            ...options,
            query: undefined,
            body: params.body,
            responseType: "SubjectResponse",
            requestType: "SubjectRequest",
        });
    }
    async getSubject(params, options = {}) {
        return this.client.request("get", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subjects/${encodeURIComponent(String(params.id))}`, {
            ...options,
            query: undefined,
            body: undefined,
            responseType: "SubjectResponse",
        });
    }
    async updateSubject(params, options = {}) {
        return this.client.request("put", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subjects/${encodeURIComponent(String(params.id))}`, {
            ...options,
            query: undefined,
            body: params.body,
            responseType: "SubjectResponse",
            requestType: "SubjectRequest",
        });
    }
    async deleteSubject(params, options = {}) {
        return this.client.request("delete", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subjects/${encodeURIComponent(String(params.id))}`, {
            ...options,
            query: undefined,
            body: undefined,
            responseType: "SubjectResponse",
        });
    }
    async getSchool(options = {}) {
        return this.client.request("get", "/v2p3/school", {
            ...options,
            query: undefined,
            body: undefined,
        });
    }
    async listAcademicYears(params = {}, options = {}) {
        return this.client.request("get", "/v2p3/school/academic-years", {
            ...options,
            query: {
                "program_code": params.programCode,
                "active": params.active,
            },
            body: undefined,
        });
    }
    async listGrades(options = {}) {
        return this.client.request("get", "/v2p3/school/grades", {
            ...options,
            query: undefined,
            body: undefined,
            responseType: "AcademicsListGradesResponse",
        });
    }
    async listSubjects(options = {}) {
        return this.client.request("get", "/v2p3/school/subjects", {
            ...options,
            query: undefined,
            body: undefined,
        });
    }
    async listSchoolTermGradeScales(options = {}) {
        return this.client.request("get", "/v2p3/school/term-grade-scales", {
            ...options,
            query: undefined,
            body: undefined,
            responseType: "AcademicsListSchoolTermGradeScalesResponse",
        });
    }
    async listTermRubrics(options = {}) {
        return this.client.request("get", "/v2p3/school/term-rubrics", {
            ...options,
            query: undefined,
            body: undefined,
        });
    }
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse() {
        return {
            createAcademicTerm: (params, options = {}) => this.client.requestRaw("post", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/academic-years/${encodeURIComponent(String(params.academicYearId))}/academic-terms`, { ...options, query: undefined, body: params.body, responseType: "AcademicTermResponse", requestType: "AcademicTermRequest", }),
            updateAcademicTerm: (params, options = {}) => this.client.requestRaw("patch", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/academic-years/${encodeURIComponent(String(params.academicYearId))}/academic-terms/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: params.body, responseType: "AcademicTermResponse", requestType: "AcademicTermRequest", }),
            deleteAcademicTerm: (params, options = {}) => this.client.requestRaw("delete", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/academic-years/${encodeURIComponent(String(params.academicYearId))}/academic-terms/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: undefined, responseType: "AcademicTermResponse", }),
            retrieve: (params, options = {}) => this.client.requestRaw("get", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/academic-years/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: undefined, responseType: "AcademicYearResponse", }),
            createAcademicYear: (params, options = {}) => this.client.requestRaw("post", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/academic-years`, { ...options, query: undefined, body: params.body, responseType: "AcademicYearResponse", requestType: "AcademicYearRequest", }),
            getAssessmentTypes: (programCode, options = {}) => this.client.requestRaw("get", `/v2p3/school/programs/${encodeURIComponent(String(programCode))}/assessment_types`, { ...options, query: undefined, body: undefined, responseType: "AssessmentTypesResponse", }),
            list: (params, options = {}) => this.client.requestRaw("get", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/academic-years/${encodeURIComponent(String(params.academicYearId))}/calendar`, { ...options, query: undefined, body: undefined, responseType: "AcademicYearCalendarResponse", }),
            getAllTermReports: (params, options = {}) => this.client.requestRaw("get", `/v2p3/school/programs/${encodeURIComponent(String(params.program))}/reports`, { ...options, query: {
                    "academic_term_id": params.academicTermId,
                    "type": params.type,
                }, body: undefined, responseType: "AcademicsGetAllTermReportsResponse", }),
            getTermReport: (params, options = {}) => this.client.requestRaw("get", `/v2p3/school/programs/${encodeURIComponent(String(params.program))}/reports/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: undefined, responseType: "AcademicsGetTermReportResponse", }),
            downloadTermReportFile: (params, options = {}) => this.client.requestRaw("get", `/v2p3/school/programs/${encodeURIComponent(String(params.program))}/reports/${encodeURIComponent(String(params.id))}/download/${encodeURIComponent(String(params.kind))}`, { ...options, query: undefined, body: undefined, }),
            getSubjectGroups: (params, options = {}) => this.client.requestRaw("get", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subject-groups`, { ...options, query: {
                    "page": params.page,
                    "per_page": params.perPage,
                    "modified_since": params.modifiedSince,
                }, body: undefined, responseType: "SubjectGroupsResponse", }),
            createSubjectGroup: (params, options = {}) => this.client.requestRaw("post", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subject-groups`, { ...options, query: undefined, body: params.body, responseType: "SubjectGroupResponse", requestType: "SubjectGroupRequest", }),
            getSubjectGroup: (params, options = {}) => this.client.requestRaw("get", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subject-groups/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: undefined, responseType: "SubjectGroupResponse", }),
            updateSubjectGroup: (params, options = {}) => this.client.requestRaw("patch", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subject-groups/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: params.body, responseType: "SubjectGroupResponse", requestType: "SubjectGroupRequest", }),
            destroySubjectGroup: (params, options = {}) => this.client.requestRaw("delete", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subject-groups/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: undefined, responseType: "SubjectGroupResponse", }),
            getSubjects: (params, options = {}) => this.client.requestRaw("get", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subjects`, { ...options, query: {
                    "page": params.page,
                    "per_page": params.perPage,
                }, body: undefined, responseType: "SubjectsResponse", }),
            createSubject: (params, options = {}) => this.client.requestRaw("post", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subjects`, { ...options, query: undefined, body: params.body, responseType: "SubjectResponse", requestType: "SubjectRequest", }),
            getSubject: (params, options = {}) => this.client.requestRaw("get", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subjects/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: undefined, responseType: "SubjectResponse", }),
            updateSubject: (params, options = {}) => this.client.requestRaw("put", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subjects/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: params.body, responseType: "SubjectResponse", requestType: "SubjectRequest", }),
            deleteSubject: (params, options = {}) => this.client.requestRaw("delete", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subjects/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: undefined, responseType: "SubjectResponse", }),
            getSchool: (options = {}) => this.client.requestRaw("get", "/v2p3/school", { ...options, query: undefined, body: undefined, }),
            listAcademicYears: (params = {}, options = {}) => this.client.requestRaw("get", "/v2p3/school/academic-years", { ...options, query: {
                    "program_code": params.programCode,
                    "active": params.active,
                }, body: undefined, }),
            listGrades: (options = {}) => this.client.requestRaw("get", "/v2p3/school/grades", { ...options, query: undefined, body: undefined, responseType: "AcademicsListGradesResponse", }),
            listSubjects: (options = {}) => this.client.requestRaw("get", "/v2p3/school/subjects", { ...options, query: undefined, body: undefined, }),
            listSchoolTermGradeScales: (options = {}) => this.client.requestRaw("get", "/v2p3/school/term-grade-scales", { ...options, query: undefined, body: undefined, responseType: "AcademicsListSchoolTermGradeScalesResponse", }),
            listTermRubrics: (options = {}) => this.client.requestRaw("get", "/v2p3/school/term-rubrics", { ...options, query: undefined, body: undefined, }),
        };
    }
}
