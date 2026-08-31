export class YearGroupsResource {
    client;
    constructor(client) {
        this.client = client;
    }
    async listYearGroupServiceLearningCategoriesStudents(params, options = {}) {
        return this.client.request("get", `/v2p3/year-groups/${encodeURIComponent(String(params.id))}/projects/sl/categories/students`, {
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
    async listYearGroupServiceLearningOutcomesStudents(params, options = {}) {
        return this.client.request("get", `/v2p3/year-groups/${encodeURIComponent(String(params.id))}/projects/sl/outcomes/students`, {
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
    async getYearGroupServiceLearning(id, options = {}) {
        return this.client.request("get", `/v2p3/year-groups/${encodeURIComponent(String(id))}/projects/sl`, {
            ...options,
            query: undefined,
            body: undefined,
            responseType: "ServiceLearningSettings",
        });
    }
    async listYearGroups(params = {}, options = {}) {
        return this.client.request("get", "/v2p3/year-groups", {
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
    async listStudentsFromYearGroups(params, options = {}) {
        return this.client.request("get", `/v2p3/year-groups/${encodeURIComponent(String(params.id))}/students`, {
            ...options,
            query: {
                "page": params.page,
                "per_page": params.perPage,
                "student_ids": params.studentIds,
            },
            body: undefined,
        });
    }
    async addStudentToYearGroup(params, options = {}) {
        return this.client.request("post", `/v2p3/year-groups/${encodeURIComponent(String(params.id))}/add_students`, {
            ...options,
            query: undefined,
            body: params.body,
            requestType: "YearGroupsAddStudentToYearGroupRequest",
        });
    }
    async removeStudentToYearGroup(params, options = {}) {
        return this.client.request("post", `/v2p3/year-groups/${encodeURIComponent(String(params.id))}/remove_students`, {
            ...options,
            query: undefined,
            body: params.body,
            requestType: "YearGroupsRemoveStudentToYearGroupRequest",
        });
    }
    async listAdvisorsFromYearGroup(id, options = {}) {
        return this.client.request("get", `/v2p3/year-groups/${encodeURIComponent(String(id))}/advisors`, {
            ...options,
            query: undefined,
            body: undefined,
        });
    }
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse() {
        return {
            listYearGroupServiceLearningCategoriesStudents: (params, options = {}) => this.client.requestRaw("get", `/v2p3/year-groups/${encodeURIComponent(String(params.id))}/projects/sl/categories/students`, { ...options, query: {
                    "student_ids[]": params.studentIds,
                    "page": params.page,
                    "per_page": params.perPage,
                }, body: undefined, responseType: "ServiceLearningCategoriesStudentsResponse", }),
            listYearGroupServiceLearningOutcomesStudents: (params, options = {}) => this.client.requestRaw("get", `/v2p3/year-groups/${encodeURIComponent(String(params.id))}/projects/sl/outcomes/students`, { ...options, query: {
                    "student_ids[]": params.studentIds,
                    "page": params.page,
                    "per_page": params.perPage,
                }, body: undefined, responseType: "ServiceLearningOutcomesStudentsResponse", }),
            getYearGroupServiceLearning: (id, options = {}) => this.client.requestRaw("get", `/v2p3/year-groups/${encodeURIComponent(String(id))}/projects/sl`, { ...options, query: undefined, body: undefined, responseType: "ServiceLearningSettings", }),
            listYearGroups: (params = {}, options = {}) => this.client.requestRaw("get", "/v2p3/year-groups", { ...options, query: {
                    "modified_since": params.modifiedSince,
                    "page": params.page,
                    "per_page": params.perPage,
                    "archived": params.archived,
                    "student_ids": params.studentIds,
                }, body: undefined, }),
            listStudentsFromYearGroups: (params, options = {}) => this.client.requestRaw("get", `/v2p3/year-groups/${encodeURIComponent(String(params.id))}/students`, { ...options, query: {
                    "page": params.page,
                    "per_page": params.perPage,
                    "student_ids": params.studentIds,
                }, body: undefined, }),
            addStudentToYearGroup: (params, options = {}) => this.client.requestRaw("post", `/v2p3/year-groups/${encodeURIComponent(String(params.id))}/add_students`, { ...options, query: undefined, body: params.body, requestType: "YearGroupsAddStudentToYearGroupRequest", }),
            removeStudentToYearGroup: (params, options = {}) => this.client.requestRaw("post", `/v2p3/year-groups/${encodeURIComponent(String(params.id))}/remove_students`, { ...options, query: undefined, body: params.body, requestType: "YearGroupsRemoveStudentToYearGroupRequest", }),
            listAdvisorsFromYearGroup: (id, options = {}) => this.client.requestRaw("get", `/v2p3/year-groups/${encodeURIComponent(String(id))}/advisors`, { ...options, query: undefined, body: undefined, }),
        };
    }
}
