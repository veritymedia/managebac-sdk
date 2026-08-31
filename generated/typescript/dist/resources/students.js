export class StudentsResource {
    client;
    constructor(client) {
        this.client = client;
    }
    async updateStudentAvatar(params, options = {}) {
        return this.client.request("put", `/v2p3/students/${encodeURIComponent(String(params.id))}/avatar`, {
            ...options,
            query: undefined,
            body: params.body,
            responseType: "StudentsUpdateStudentAvatarResponse",
            requestType: "StudentsUpdateStudentAvatarRequest",
        });
    }
    async deleteStudentAvatar(id, options = {}) {
        return this.client.request("delete", `/v2p3/students/${encodeURIComponent(String(id))}/avatar`, {
            ...options,
            query: undefined,
            body: undefined,
            responseType: "StudentsDeleteStudentAvatarResponse",
        });
    }
    async listStudents(params = {}, options = {}) {
        return this.client.request("get", "/v2p3/students", {
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
    async createStudent(params = {}, options = {}) {
        return this.client.request("post", "/v2p3/students", {
            ...options,
            query: undefined,
            body: params.body,
            responseType: "StudentsCreateStudentResponse",
            requestType: "StudentsCreateStudentRequest",
        });
    }
    async getStudentById(id, options = {}) {
        return this.client.request("get", `/v2p3/students/${encodeURIComponent(String(id))}`, {
            ...options,
            query: undefined,
            body: undefined,
            responseType: "StudentsGetStudentByIdResponse",
        });
    }
    async updateStudent(params, options = {}) {
        return this.client.request("patch", `/v2p3/students/${encodeURIComponent(String(params.id))}`, {
            ...options,
            query: undefined,
            body: params.body,
            responseType: "StudentsUpdateStudentResponse",
            requestType: "StudentsUpdateStudentRequest",
        });
    }
    async archiveStudent(params, options = {}) {
        return this.client.request("put", `/v2p3/students/${encodeURIComponent(String(params.id))}/archive`, {
            ...options,
            query: undefined,
            body: params.body,
            requestType: "StudentsArchiveStudentRequest",
        });
    }
    async unarchiveStudent(id, options = {}) {
        return this.client.request("put", `/v2p3/students/${encodeURIComponent(String(id))}/unarchive`, {
            ...options,
            query: undefined,
            body: undefined,
        });
    }
    async sendStudentWelcomeEmail(id, options = {}) {
        return this.client.request("post", `/v2p3/students/${encodeURIComponent(String(id))}/welcome_email`, {
            ...options,
            query: undefined,
            body: undefined,
        });
    }
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse() {
        return {
            updateStudentAvatar: (params, options = {}) => this.client.requestRaw("put", `/v2p3/students/${encodeURIComponent(String(params.id))}/avatar`, { ...options, query: undefined, body: params.body, responseType: "StudentsUpdateStudentAvatarResponse", requestType: "StudentsUpdateStudentAvatarRequest", }),
            deleteStudentAvatar: (id, options = {}) => this.client.requestRaw("delete", `/v2p3/students/${encodeURIComponent(String(id))}/avatar`, { ...options, query: undefined, body: undefined, responseType: "StudentsDeleteStudentAvatarResponse", }),
            listStudents: (params = {}, options = {}) => this.client.requestRaw("get", "/v2p3/students", { ...options, query: {
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
            createStudent: (params = {}, options = {}) => this.client.requestRaw("post", "/v2p3/students", { ...options, query: undefined, body: params.body, responseType: "StudentsCreateStudentResponse", requestType: "StudentsCreateStudentRequest", }),
            getStudentById: (id, options = {}) => this.client.requestRaw("get", `/v2p3/students/${encodeURIComponent(String(id))}`, { ...options, query: undefined, body: undefined, responseType: "StudentsGetStudentByIdResponse", }),
            updateStudent: (params, options = {}) => this.client.requestRaw("patch", `/v2p3/students/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: params.body, responseType: "StudentsUpdateStudentResponse", requestType: "StudentsUpdateStudentRequest", }),
            archiveStudent: (params, options = {}) => this.client.requestRaw("put", `/v2p3/students/${encodeURIComponent(String(params.id))}/archive`, { ...options, query: undefined, body: params.body, requestType: "StudentsArchiveStudentRequest", }),
            unarchiveStudent: (id, options = {}) => this.client.requestRaw("put", `/v2p3/students/${encodeURIComponent(String(id))}/unarchive`, { ...options, query: undefined, body: undefined, }),
            sendStudentWelcomeEmail: (id, options = {}) => this.client.requestRaw("post", `/v2p3/students/${encodeURIComponent(String(id))}/welcome_email`, { ...options, query: undefined, body: undefined, }),
        };
    }
}
