export class ExtendedApisResource {
    client;
    constructor(client) {
        this.client = client;
    }
    async bulkUpdateStudentsFromClass(params, options = {}) {
        return this.client.request("patch", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/students`, {
            ...options,
            query: undefined,
            body: params.body,
            requestType: "BulkUpdateStudents",
        });
    }
    async upsertClasses(params, options = {}) {
        return this.client.request("patch", "/v2p3/classes", {
            ...options,
            query: undefined,
            body: params.body,
            responseType: "UpsertClassesResponse",
            requestType: "UpsertClasses",
        });
    }
    async setClassAttendanceForStudents(params, options = {}) {
        return this.client.request("put", `/v2p3/classes/${encodeURIComponent(String(params.id))}/attendance`, {
            ...options,
            query: undefined,
            body: params.body,
            requestType: "BulkUpdateAttendance",
        });
    }
    async bulkEnableSubjects(params, options = {}) {
        return this.client.request("post", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subjects/bulk-enable`, {
            ...options,
            query: undefined,
            body: params.body,
            responseType: "ToggleSchoolSubjectsRequest",
            requestType: "ToggleSchoolSubjectsRequest",
        });
    }
    async bulkDisableSubjects(params, options = {}) {
        return this.client.request("post", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subjects/bulk-disable`, {
            ...options,
            query: undefined,
            body: params.body,
            responseType: "ToggleSchoolSubjectsRequest",
            requestType: "ToggleSchoolSubjectsRequest",
        });
    }
    async updateStudentExcusal(params, options = {}) {
        return this.client.request("patch", `/v2p3/students/${encodeURIComponent(String(params.studentId))}/excusals/${encodeURIComponent(String(params.id))}`, {
            ...options,
            query: undefined,
            body: params.body,
            responseType: "AttendanceExcusalsResponse",
            requestType: "UpdateAttendanceExcusalRequest",
        });
    }
    async deleteStudentExcusal(params, options = {}) {
        return this.client.request("delete", `/v2p3/students/${encodeURIComponent(String(params.studentId))}/excusals/${encodeURIComponent(String(params.id))}`, {
            ...options,
            query: undefined,
            body: undefined,
            responseType: "AttendanceExcusalsResponse",
        });
    }
    async setStudentHomeroomAttendance(params, options = {}) {
        return this.client.request("put", `/v2p3/students/${encodeURIComponent(String(params.id))}/set_homeroom_attendance`, {
            ...options,
            query: undefined,
            body: params.body,
            requestType: "ExtendedApisSetStudentHomeroomAttendanceRequest",
        });
    }
    async updateStudentTaskGrades(params, options = {}) {
        return this.client.request("patch", `/v2p3/tasks/${encodeURIComponent(String(params.taskId))}/students/${encodeURIComponent(String(params.studentId))}`, {
            ...options,
            query: undefined,
            body: params.body,
            responseType: "ExtendedApisUpdateStudentTaskGradesResponse",
            requestType: "ExtendedApisUpdateStudentTaskGradesRequest",
        });
    }
    async bulkUpdateStudentTaskGrades(params, options = {}) {
        return this.client.request("patch", `/v2p3/tasks/${encodeURIComponent(String(params.taskId))}/students`, {
            ...options,
            query: undefined,
            body: params.body,
            responseType: "BulkStudentTaskGradeResponse",
            requestType: "BulkUpdateStudentTaskGradeRequest",
        });
    }
    async bulkUpdateTeacherMemberships(params, options = {}) {
        return this.client.request("put", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/teachers`, {
            ...options,
            query: undefined,
            body: params.body,
            requestType: "BulkUpdateTeachers",
        });
    }
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse() {
        return {
            bulkUpdateStudentsFromClass: (params, options = {}) => this.client.requestRaw("patch", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/students`, { ...options, query: undefined, body: params.body, requestType: "BulkUpdateStudents", }),
            upsertClasses: (params, options = {}) => this.client.requestRaw("patch", "/v2p3/classes", { ...options, query: undefined, body: params.body, responseType: "UpsertClassesResponse", requestType: "UpsertClasses", }),
            setClassAttendanceForStudents: (params, options = {}) => this.client.requestRaw("put", `/v2p3/classes/${encodeURIComponent(String(params.id))}/attendance`, { ...options, query: undefined, body: params.body, requestType: "BulkUpdateAttendance", }),
            bulkEnableSubjects: (params, options = {}) => this.client.requestRaw("post", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subjects/bulk-enable`, { ...options, query: undefined, body: params.body, responseType: "ToggleSchoolSubjectsRequest", requestType: "ToggleSchoolSubjectsRequest", }),
            bulkDisableSubjects: (params, options = {}) => this.client.requestRaw("post", `/v2p3/school/programs/${encodeURIComponent(String(params.programCode))}/subjects/bulk-disable`, { ...options, query: undefined, body: params.body, responseType: "ToggleSchoolSubjectsRequest", requestType: "ToggleSchoolSubjectsRequest", }),
            updateStudentExcusal: (params, options = {}) => this.client.requestRaw("patch", `/v2p3/students/${encodeURIComponent(String(params.studentId))}/excusals/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: params.body, responseType: "AttendanceExcusalsResponse", requestType: "UpdateAttendanceExcusalRequest", }),
            deleteStudentExcusal: (params, options = {}) => this.client.requestRaw("delete", `/v2p3/students/${encodeURIComponent(String(params.studentId))}/excusals/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: undefined, responseType: "AttendanceExcusalsResponse", }),
            setStudentHomeroomAttendance: (params, options = {}) => this.client.requestRaw("put", `/v2p3/students/${encodeURIComponent(String(params.id))}/set_homeroom_attendance`, { ...options, query: undefined, body: params.body, requestType: "ExtendedApisSetStudentHomeroomAttendanceRequest", }),
            updateStudentTaskGrades: (params, options = {}) => this.client.requestRaw("patch", `/v2p3/tasks/${encodeURIComponent(String(params.taskId))}/students/${encodeURIComponent(String(params.studentId))}`, { ...options, query: undefined, body: params.body, responseType: "ExtendedApisUpdateStudentTaskGradesResponse", requestType: "ExtendedApisUpdateStudentTaskGradesRequest", }),
            bulkUpdateStudentTaskGrades: (params, options = {}) => this.client.requestRaw("patch", `/v2p3/tasks/${encodeURIComponent(String(params.taskId))}/students`, { ...options, query: undefined, body: params.body, responseType: "BulkStudentTaskGradeResponse", requestType: "BulkUpdateStudentTaskGradeRequest", }),
            bulkUpdateTeacherMemberships: (params, options = {}) => this.client.requestRaw("put", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/teachers`, { ...options, query: undefined, body: params.body, requestType: "BulkUpdateTeachers", }),
        };
    }
}
