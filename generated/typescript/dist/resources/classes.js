export class ClassesResource {
    client;
    constructor(client) {
        this.client = client;
    }
    async listClasses(params = {}, options = {}) {
        return this.client.request("get", "/v2p3/classes", {
            ...options,
            query: {
                "modified_since": params.modifiedSince,
                "deleted_since": params.deletedSince,
                "page": params.page,
                "per_page": params.perPage,
                "archived": params.archived,
            },
            body: undefined,
            responseType: "ClassesListClassesResponse",
        });
    }
    async createClass(params, options = {}) {
        return this.client.request("post", "/v2p3/classes", {
            ...options,
            query: undefined,
            body: params.body,
            responseType: "Class",
            requestType: "CreateClass",
        });
    }
    async getClassById(id, options = {}) {
        return this.client.request("get", `/v2p3/classes/${encodeURIComponent(String(id))}`, {
            ...options,
            query: undefined,
            body: undefined,
            responseType: "ClassesGetClassByIdResponse",
        });
    }
    async updateClass(params, options = {}) {
        return this.client.request("patch", `/v2p3/classes/${encodeURIComponent(String(params.id))}`, {
            ...options,
            query: undefined,
            body: params.body,
            responseType: "Class",
            requestType: "UpdateClass",
        });
    }
    async addStudentsToClass(params, options = {}) {
        return this.client.request("post", `/v2p3/classes/${encodeURIComponent(String(params.id))}/add_students`, {
            ...options,
            query: undefined,
            body: params.body,
            requestType: "ClassesAddStudentsToClassRequest",
        });
    }
    async removeStudentsFromClass(params, options = {}) {
        return this.client.request("post", `/v2p3/classes/${encodeURIComponent(String(params.id))}/remove_students`, {
            ...options,
            query: undefined,
            body: params.body,
            requestType: "ClassesRemoveStudentsFromClassRequest",
        });
    }
    async getClassTerms(params, options = {}) {
        return this.client.request("get", `/v2p3/classes/${encodeURIComponent(String(params.id))}/terms`, {
            ...options,
            query: {
                "academic_year_id": params.academicYearId,
                "active_only": params.activeOnly,
            },
            body: undefined,
        });
    }
    async addTeachersToClass(params, options = {}) {
        return this.client.request("post", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/teachers/add_teachers`, {
            ...options,
            query: undefined,
            body: params.body,
            requestType: "ClassesAddTeachersToClassRequest",
        });
    }
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse() {
        return {
            listClasses: (params = {}, options = {}) => this.client.requestRaw("get", "/v2p3/classes", { ...options, query: {
                    "modified_since": params.modifiedSince,
                    "deleted_since": params.deletedSince,
                    "page": params.page,
                    "per_page": params.perPage,
                    "archived": params.archived,
                }, body: undefined, responseType: "ClassesListClassesResponse", }),
            createClass: (params, options = {}) => this.client.requestRaw("post", "/v2p3/classes", { ...options, query: undefined, body: params.body, responseType: "Class", requestType: "CreateClass", }),
            getClassById: (id, options = {}) => this.client.requestRaw("get", `/v2p3/classes/${encodeURIComponent(String(id))}`, { ...options, query: undefined, body: undefined, responseType: "ClassesGetClassByIdResponse", }),
            updateClass: (params, options = {}) => this.client.requestRaw("patch", `/v2p3/classes/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: params.body, responseType: "Class", requestType: "UpdateClass", }),
            addStudentsToClass: (params, options = {}) => this.client.requestRaw("post", `/v2p3/classes/${encodeURIComponent(String(params.id))}/add_students`, { ...options, query: undefined, body: params.body, requestType: "ClassesAddStudentsToClassRequest", }),
            removeStudentsFromClass: (params, options = {}) => this.client.requestRaw("post", `/v2p3/classes/${encodeURIComponent(String(params.id))}/remove_students`, { ...options, query: undefined, body: params.body, requestType: "ClassesRemoveStudentsFromClassRequest", }),
            getClassTerms: (params, options = {}) => this.client.requestRaw("get", `/v2p3/classes/${encodeURIComponent(String(params.id))}/terms`, { ...options, query: {
                    "academic_year_id": params.academicYearId,
                    "active_only": params.activeOnly,
                }, body: undefined, }),
            addTeachersToClass: (params, options = {}) => this.client.requestRaw("post", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/teachers/add_teachers`, { ...options, query: undefined, body: params.body, requestType: "ClassesAddTeachersToClassRequest", }),
        };
    }
}
