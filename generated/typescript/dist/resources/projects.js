export class ProjectsResource {
    client;
    constructor(client) {
        this.client = client;
    }
    async listYearGroupCasExperiencesStudents(params, options = {}) {
        return this.client.request("get", `/v2p3/year-groups/${encodeURIComponent(String(params.id))}/projects/cas/experiences/students`, {
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
    async getYearGroupCas(id, options = {}) {
        return this.client.request("get", `/v2p3/year-groups/${encodeURIComponent(String(id))}/projects/cas`, {
            ...options,
            query: undefined,
            body: undefined,
            responseType: "CasSettings",
        });
    }
    async listYearGroupPblProposalStudentsDetails(params, options = {}) {
        return this.client.request("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/projects/pbl/${encodeURIComponent(String(params.projectId))}/proposal/students`, {
            ...options,
            query: {
                "archived": params.archived,
                "include_archived_students": params.includeArchivedStudents,
            },
            body: undefined,
        });
    }
    async listYearGroupPblReflectionsStudentsDetails(params, options = {}) {
        return this.client.request("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/projects/pbl/${encodeURIComponent(String(params.projectId))}/reflections/students`, {
            ...options,
            query: {
                "archived": params.archived,
                "include_archived_students": params.includeArchivedStudents,
            },
            body: undefined,
        });
    }
    async listYearGroupPblTodosStudentsDetails(params, options = {}) {
        return this.client.request("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/projects/pbl/${encodeURIComponent(String(params.projectId))}/todos/students`, {
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
    async listYearGroupPblJournalStudentsDetails(params, options = {}) {
        return this.client.request("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/projects/pbl/${encodeURIComponent(String(params.projectId))}/journal/students`, {
            ...options,
            query: {
                "archived": params.archived,
                "include_archived_students": params.includeArchivedStudents,
            },
            body: undefined,
        });
    }
    async listYearGroupPblDocumentsStudentsDetails(params, options = {}) {
        return this.client.request("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/projects/pbl/${encodeURIComponent(String(params.projectId))}/documents/students`, {
            ...options,
            query: {
                "archived": params.archived,
                "include_archived_students": params.includeArchivedStudents,
            },
            body: undefined,
        });
    }
    async listYearGroupPblPresentationStudentsDetails(params, options = {}) {
        return this.client.request("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/projects/pbl/${encodeURIComponent(String(params.projectId))}/presentation/students`, {
            ...options,
            query: {
                "archived": params.archived,
                "include_archived_students": params.includeArchivedStudents,
            },
            body: undefined,
        });
    }
    async listYearGroupPblNotesAndInterviewsStudentsDetails(params, options = {}) {
        return this.client.request("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/projects/pbl/${encodeURIComponent(String(params.projectId))}/notes_and_interviews/students`, {
            ...options,
            query: {
                "archived": params.archived,
                "include_archived_students": params.includeArchivedStudents,
            },
            body: undefined,
        });
    }
    async listYearGroupProjectBasedLearningTemplates(params, options = {}) {
        return this.client.request("get", `/v2p3/year-groups/${encodeURIComponent(String(params.id))}/projects/pbl`, {
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
            listYearGroupCasExperiencesStudents: (params, options = {}) => this.client.requestRaw("get", `/v2p3/year-groups/${encodeURIComponent(String(params.id))}/projects/cas/experiences/students`, { ...options, query: {
                    "student_ids[]": params.studentIds,
                    "page": params.page,
                    "per_page": params.perPage,
                }, body: undefined, responseType: "CasExperiencesStudentsResponse", }),
            getYearGroupCas: (id, options = {}) => this.client.requestRaw("get", `/v2p3/year-groups/${encodeURIComponent(String(id))}/projects/cas`, { ...options, query: undefined, body: undefined, responseType: "CasSettings", }),
            listYearGroupPblProposalStudentsDetails: (params, options = {}) => this.client.requestRaw("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/projects/pbl/${encodeURIComponent(String(params.projectId))}/proposal/students`, { ...options, query: {
                    "archived": params.archived,
                    "include_archived_students": params.includeArchivedStudents,
                }, body: undefined, }),
            listYearGroupPblReflectionsStudentsDetails: (params, options = {}) => this.client.requestRaw("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/projects/pbl/${encodeURIComponent(String(params.projectId))}/reflections/students`, { ...options, query: {
                    "archived": params.archived,
                    "include_archived_students": params.includeArchivedStudents,
                }, body: undefined, }),
            listYearGroupPblTodosStudentsDetails: (params, options = {}) => this.client.requestRaw("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/projects/pbl/${encodeURIComponent(String(params.projectId))}/todos/students`, { ...options, query: {
                    "archived": params.archived,
                    "include_archived_students": params.includeArchivedStudents,
                    "page": params.page,
                    "per_page": params.perPage,
                }, body: undefined, }),
            listYearGroupPblJournalStudentsDetails: (params, options = {}) => this.client.requestRaw("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/projects/pbl/${encodeURIComponent(String(params.projectId))}/journal/students`, { ...options, query: {
                    "archived": params.archived,
                    "include_archived_students": params.includeArchivedStudents,
                }, body: undefined, }),
            listYearGroupPblDocumentsStudentsDetails: (params, options = {}) => this.client.requestRaw("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/projects/pbl/${encodeURIComponent(String(params.projectId))}/documents/students`, { ...options, query: {
                    "archived": params.archived,
                    "include_archived_students": params.includeArchivedStudents,
                }, body: undefined, }),
            listYearGroupPblPresentationStudentsDetails: (params, options = {}) => this.client.requestRaw("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/projects/pbl/${encodeURIComponent(String(params.projectId))}/presentation/students`, { ...options, query: {
                    "archived": params.archived,
                    "include_archived_students": params.includeArchivedStudents,
                }, body: undefined, }),
            listYearGroupPblNotesAndInterviewsStudentsDetails: (params, options = {}) => this.client.requestRaw("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/projects/pbl/${encodeURIComponent(String(params.projectId))}/notes_and_interviews/students`, { ...options, query: {
                    "archived": params.archived,
                    "include_archived_students": params.includeArchivedStudents,
                }, body: undefined, }),
            listYearGroupProjectBasedLearningTemplates: (params, options = {}) => this.client.requestRaw("get", `/v2p3/year-groups/${encodeURIComponent(String(params.id))}/projects/pbl`, { ...options, query: {
                    "archived": params.archived,
                }, body: undefined, }),
        };
    }
}
