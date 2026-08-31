export class TeachersResource {
    client;
    constructor(client) {
        this.client = client;
    }
    async updateTeacherAvatar(params, options = {}) {
        return this.client.request("put", `/v2p3/teachers/${encodeURIComponent(String(params.id))}/avatar`, {
            ...options,
            query: undefined,
            body: params.body,
            requestType: "TeachersUpdateTeacherAvatarRequest",
        });
    }
    async deleteTeacherAvatar(id, options = {}) {
        return this.client.request("delete", `/v2p3/teachers/${encodeURIComponent(String(id))}/avatar`, {
            ...options,
            query: undefined,
            body: undefined,
        });
    }
    async listTeachers(params = {}, options = {}) {
        return this.client.request("get", "/v2p3/teachers", {
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
    async createTeacher(params = {}, options = {}) {
        return this.client.request("post", "/v2p3/teachers", {
            ...options,
            query: undefined,
            body: params.body,
            responseType: "TeachersCreateTeacherResponse",
            requestType: "TeachersCreateTeacherRequest",
        });
    }
    async getTeacherById(id, options = {}) {
        return this.client.request("get", `/v2p3/teachers/${encodeURIComponent(String(id))}`, {
            ...options,
            query: undefined,
            body: undefined,
            responseType: "TeachersGetTeacherByIdResponse",
        });
    }
    async updateTeacher(params, options = {}) {
        return this.client.request("patch", `/v2p3/teachers/${encodeURIComponent(String(params.id))}`, {
            ...options,
            query: undefined,
            body: params.body,
            requestType: "TeachersUpdateTeacherRequest",
        });
    }
    async archiveTeacher(id, options = {}) {
        return this.client.request("put", `/v2p3/teachers/${encodeURIComponent(String(id))}/archive`, {
            ...options,
            query: undefined,
            body: undefined,
        });
    }
    async unarchiveTeacher(id, options = {}) {
        return this.client.request("put", `/v2p3/teachers/${encodeURIComponent(String(id))}/unarchive`, {
            ...options,
            query: undefined,
            body: undefined,
        });
    }
    async listTeacherClassesMemberships(params, options = {}) {
        return this.client.request("get", `/v2p3/teachers/${encodeURIComponent(String(params.id))}/classes`, {
            ...options,
            query: {
                "show_on_reports": params.showOnReports,
                "archived": params.archived,
            },
            body: undefined,
            responseType: "TeachersListTeacherClassesMembershipsResponse",
        });
    }
    async listTeacherGroupsMemberships(params, options = {}) {
        return this.client.request("get", `/v2p3/teachers/${encodeURIComponent(String(params.id))}/groups`, {
            ...options,
            query: {
                "archived": params.archived,
            },
            body: undefined,
            responseType: "TeachersListTeacherGroupsMembershipsResponse",
        });
    }
    async sendTeacherWelcomeEmail(id, options = {}) {
        return this.client.request("post", `/v2p3/teachers/${encodeURIComponent(String(id))}/welcome_email`, {
            ...options,
            query: undefined,
            body: undefined,
        });
    }
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse() {
        return {
            updateTeacherAvatar: (params, options = {}) => this.client.requestRaw("put", `/v2p3/teachers/${encodeURIComponent(String(params.id))}/avatar`, { ...options, query: undefined, body: params.body, requestType: "TeachersUpdateTeacherAvatarRequest", }),
            deleteTeacherAvatar: (id, options = {}) => this.client.requestRaw("delete", `/v2p3/teachers/${encodeURIComponent(String(id))}/avatar`, { ...options, query: undefined, body: undefined, }),
            listTeachers: (params = {}, options = {}) => this.client.requestRaw("get", "/v2p3/teachers", { ...options, query: {
                    "ids[]": params.ids,
                    "archived": params.archived,
                    "modified_since": params.modifiedSince,
                    "page": params.page,
                    "per_page": params.perPage,
                    "deleted_since": params.deletedSince,
                    "q": params.q,
                }, body: undefined, responseType: "TeachersListTeachersResponse", }),
            createTeacher: (params = {}, options = {}) => this.client.requestRaw("post", "/v2p3/teachers", { ...options, query: undefined, body: params.body, responseType: "TeachersCreateTeacherResponse", requestType: "TeachersCreateTeacherRequest", }),
            getTeacherById: (id, options = {}) => this.client.requestRaw("get", `/v2p3/teachers/${encodeURIComponent(String(id))}`, { ...options, query: undefined, body: undefined, responseType: "TeachersGetTeacherByIdResponse", }),
            updateTeacher: (params, options = {}) => this.client.requestRaw("patch", `/v2p3/teachers/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: params.body, requestType: "TeachersUpdateTeacherRequest", }),
            archiveTeacher: (id, options = {}) => this.client.requestRaw("put", `/v2p3/teachers/${encodeURIComponent(String(id))}/archive`, { ...options, query: undefined, body: undefined, }),
            unarchiveTeacher: (id, options = {}) => this.client.requestRaw("put", `/v2p3/teachers/${encodeURIComponent(String(id))}/unarchive`, { ...options, query: undefined, body: undefined, }),
            listTeacherClassesMemberships: (params, options = {}) => this.client.requestRaw("get", `/v2p3/teachers/${encodeURIComponent(String(params.id))}/classes`, { ...options, query: {
                    "show_on_reports": params.showOnReports,
                    "archived": params.archived,
                }, body: undefined, responseType: "TeachersListTeacherClassesMembershipsResponse", }),
            listTeacherGroupsMemberships: (params, options = {}) => this.client.requestRaw("get", `/v2p3/teachers/${encodeURIComponent(String(params.id))}/groups`, { ...options, query: {
                    "archived": params.archived,
                }, body: undefined, responseType: "TeachersListTeacherGroupsMembershipsResponse", }),
            sendTeacherWelcomeEmail: (id, options = {}) => this.client.requestRaw("post", `/v2p3/teachers/${encodeURIComponent(String(id))}/welcome_email`, { ...options, query: undefined, body: undefined, }),
        };
    }
}
