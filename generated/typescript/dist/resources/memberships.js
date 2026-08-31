export class MembershipsResource {
    client;
    constructor(client) {
        this.client = client;
    }
    async getStudentsForClass(params, options = {}) {
        return this.client.request("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/students`, {
            ...options,
            query: {
                "include_archived_students": params.includeArchivedStudents,
                "student_ids": params.studentIds,
            },
            body: undefined,
        });
    }
    async listMemberships(params = {}, options = {}) {
        return this.client.request("get", "/v2p3/memberships", {
            ...options,
            query: {
                "class_ids[]": params.classIds,
                "modified_since": params.modifiedSince,
                "deleted_since": params.deletedSince,
                "page": params.page,
                "per_page": params.perPage,
                "user_ids[]": params.userIds,
                "user_ids": params.userIds2,
                "class_happens_on": params.classHappensOn,
                "student_ids": params.studentIds,
            },
            body: undefined,
            responseType: "MembershipsListMembershipsResponse",
        });
    }
    async getStudentMemberships(params, options = {}) {
        return this.client.request("get", `/v2p3/students/${encodeURIComponent(String(params.id))}/memberships`, {
            ...options,
            query: {
                "archived": params.archived,
            },
            body: undefined,
            responseType: "MembershipsGetStudentMembershipsResponse",
        });
    }
    async getTeacherMemberships(classId, options = {}) {
        return this.client.request("get", `/v2p3/classes/${encodeURIComponent(String(classId))}/teachers`, {
            ...options,
            query: undefined,
            body: undefined,
        });
    }
    async removeTeachersFromClass(params, options = {}) {
        return this.client.request("delete", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/teachers/remove_teachers`, {
            ...options,
            query: undefined,
            body: params.body,
            requestType: "MembershipsRemoveTeachersFromClassRequest",
        });
    }
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse() {
        return {
            getStudentsForClass: (params, options = {}) => this.client.requestRaw("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/students`, { ...options, query: {
                    "include_archived_students": params.includeArchivedStudents,
                    "student_ids": params.studentIds,
                }, body: undefined, }),
            listMemberships: (params = {}, options = {}) => this.client.requestRaw("get", "/v2p3/memberships", { ...options, query: {
                    "class_ids[]": params.classIds,
                    "modified_since": params.modifiedSince,
                    "deleted_since": params.deletedSince,
                    "page": params.page,
                    "per_page": params.perPage,
                    "user_ids[]": params.userIds,
                    "user_ids": params.userIds2,
                    "class_happens_on": params.classHappensOn,
                    "student_ids": params.studentIds,
                }, body: undefined, responseType: "MembershipsListMembershipsResponse", }),
            getStudentMemberships: (params, options = {}) => this.client.requestRaw("get", `/v2p3/students/${encodeURIComponent(String(params.id))}/memberships`, { ...options, query: {
                    "archived": params.archived,
                }, body: undefined, responseType: "MembershipsGetStudentMembershipsResponse", }),
            getTeacherMemberships: (classId, options = {}) => this.client.requestRaw("get", `/v2p3/classes/${encodeURIComponent(String(classId))}/teachers`, { ...options, query: undefined, body: undefined, }),
            removeTeachersFromClass: (params, options = {}) => this.client.requestRaw("delete", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/teachers/remove_teachers`, { ...options, query: undefined, body: params.body, requestType: "MembershipsRemoveTeachersFromClassRequest", }),
        };
    }
}
