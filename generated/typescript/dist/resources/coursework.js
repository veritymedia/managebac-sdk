export class CourseworkResource {
    client;
    constructor(client) {
        this.client = client;
    }
    async listGradesForClass(params, options = {}) {
        return this.client.request("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/assessments/term/${encodeURIComponent(String(params.termId))}/grades`, {
            ...options,
            query: {
                "student_ids": params.studentIds,
                "include_archived_students": params.includeArchivedStudents,
            },
            body: undefined,
        });
    }
    async listTermGradesForClass(params, options = {}) {
        return this.client.request("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/assessments/term/${encodeURIComponent(String(params.termId))}/term-grades`, {
            ...options,
            query: {
                "student_ids": params.studentIds,
                "include_archived_students": params.includeArchivedStudents,
                "unenrolled_only": params.unenrolledOnly,
            },
            body: undefined,
        });
    }
    async listCriteriaforClass(id, options = {}) {
        return this.client.request("get", `/v2p3/classes/${encodeURIComponent(String(id))}/criteria`, {
            ...options,
            query: undefined,
            body: undefined,
            responseType: "CriteriaResponse",
        });
    }
    async listClassTaskCategories(id, options = {}) {
        return this.client.request("get", `/v2p3/classes/${encodeURIComponent(String(id))}/task_categories`, {
            ...options,
            query: undefined,
            body: undefined,
            responseType: "CourseworkListClassTaskCategoriesResponse",
        });
    }
    async downloadSubmissionFile(params, options = {}) {
        return this.client.request("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.taskId))}/submissions/${encodeURIComponent(String(params.studentId))}/files/${encodeURIComponent(String(params.assetId))}`, {
            ...options,
            query: undefined,
            body: undefined,
        });
    }
    async listTaskSubmissions(params, options = {}) {
        return this.client.request("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.taskId))}/submissions`, {
            ...options,
            query: {
                "modified_since": params.modifiedSince,
                "page": params.page,
                "per_page": params.perPage,
            },
            body: undefined,
            responseType: "CourseworkListTaskSubmissionsResponse",
        });
    }
    async getTaskSubmission(params, options = {}) {
        return this.client.request("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.taskId))}/submissions/${encodeURIComponent(String(params.studentId))}`, {
            ...options,
            query: undefined,
            body: undefined,
            responseType: "CourseworkGetTaskSubmissionResponse",
        });
    }
    async listTasksforClass(params, options = {}) {
        return this.client.request("get", `/v2p3/classes/${encodeURIComponent(String(params.id))}/tasks`, {
            ...options,
            query: {
                "term_id": params.termId,
            },
            body: undefined,
        });
    }
    async getTasksByIdforClass(params, options = {}) {
        return this.client.request("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.id))}`, {
            ...options,
            query: undefined,
            body: undefined,
        });
    }
    async updateTaskforClass(params, options = {}) {
        return this.client.request("put", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.id))}`, {
            ...options,
            query: undefined,
            body: params.body,
            requestType: "CourseworkUpdateTaskforClassRequest",
        });
    }
    async partialUpdateTaskforClass(params, options = {}) {
        return this.client.request("patch", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.id))}`, {
            ...options,
            query: undefined,
            body: params.body,
            responseType: "CourseworkPartialUpdateTaskforClassResponse",
            requestType: "CourseworkPartialUpdateTaskforClassRequest",
        });
    }
    async deleteTaskforClass(params, options = {}) {
        return this.client.request("delete", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.id))}`, {
            ...options,
            query: undefined,
            body: undefined,
        });
    }
    async listStudentAssessmentResultsForClassTask(params, options = {}) {
        return this.client.request("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.id))}/students`, {
            ...options,
            query: {
                "student_ids": params.studentIds,
            },
            body: undefined,
        });
    }
    async bulkResetStudentsTaskGrades(params, options = {}) {
        return this.client.request("delete", `/v2p3/tasks/${encodeURIComponent(String(params.taskId))}/students`, {
            ...options,
            query: undefined,
            body: params.body,
            responseType: "BulkStudentTaskGradeResponse",
            requestType: "BulkDestroyStudentTaskGradeRequest",
        });
    }
    async createTaskforClass(params, options = {}) {
        return this.client.request("post", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks`, {
            ...options,
            query: undefined,
            body: params.body,
            requestType: "CourseworkCreateTaskforClassRequest",
        });
    }
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse() {
        return {
            listGradesForClass: (params, options = {}) => this.client.requestRaw("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/assessments/term/${encodeURIComponent(String(params.termId))}/grades`, { ...options, query: {
                    "student_ids": params.studentIds,
                    "include_archived_students": params.includeArchivedStudents,
                }, body: undefined, }),
            listTermGradesForClass: (params, options = {}) => this.client.requestRaw("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/assessments/term/${encodeURIComponent(String(params.termId))}/term-grades`, { ...options, query: {
                    "student_ids": params.studentIds,
                    "include_archived_students": params.includeArchivedStudents,
                    "unenrolled_only": params.unenrolledOnly,
                }, body: undefined, }),
            listCriteriaforClass: (id, options = {}) => this.client.requestRaw("get", `/v2p3/classes/${encodeURIComponent(String(id))}/criteria`, { ...options, query: undefined, body: undefined, responseType: "CriteriaResponse", }),
            listClassTaskCategories: (id, options = {}) => this.client.requestRaw("get", `/v2p3/classes/${encodeURIComponent(String(id))}/task_categories`, { ...options, query: undefined, body: undefined, responseType: "CourseworkListClassTaskCategoriesResponse", }),
            downloadSubmissionFile: (params, options = {}) => this.client.requestRaw("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.taskId))}/submissions/${encodeURIComponent(String(params.studentId))}/files/${encodeURIComponent(String(params.assetId))}`, { ...options, query: undefined, body: undefined, }),
            listTaskSubmissions: (params, options = {}) => this.client.requestRaw("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.taskId))}/submissions`, { ...options, query: {
                    "modified_since": params.modifiedSince,
                    "page": params.page,
                    "per_page": params.perPage,
                }, body: undefined, responseType: "CourseworkListTaskSubmissionsResponse", }),
            getTaskSubmission: (params, options = {}) => this.client.requestRaw("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.taskId))}/submissions/${encodeURIComponent(String(params.studentId))}`, { ...options, query: undefined, body: undefined, responseType: "CourseworkGetTaskSubmissionResponse", }),
            listTasksforClass: (params, options = {}) => this.client.requestRaw("get", `/v2p3/classes/${encodeURIComponent(String(params.id))}/tasks`, { ...options, query: {
                    "term_id": params.termId,
                }, body: undefined, }),
            getTasksByIdforClass: (params, options = {}) => this.client.requestRaw("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: undefined, }),
            updateTaskforClass: (params, options = {}) => this.client.requestRaw("put", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: params.body, requestType: "CourseworkUpdateTaskforClassRequest", }),
            partialUpdateTaskforClass: (params, options = {}) => this.client.requestRaw("patch", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: params.body, responseType: "CourseworkPartialUpdateTaskforClassResponse", requestType: "CourseworkPartialUpdateTaskforClassRequest", }),
            deleteTaskforClass: (params, options = {}) => this.client.requestRaw("delete", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: undefined, }),
            listStudentAssessmentResultsForClassTask: (params, options = {}) => this.client.requestRaw("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.id))}/students`, { ...options, query: {
                    "student_ids": params.studentIds,
                }, body: undefined, }),
            bulkResetStudentsTaskGrades: (params, options = {}) => this.client.requestRaw("delete", `/v2p3/tasks/${encodeURIComponent(String(params.taskId))}/students`, { ...options, query: undefined, body: params.body, responseType: "BulkStudentTaskGradeResponse", requestType: "BulkDestroyStudentTaskGradeRequest", }),
            createTaskforClass: (params, options = {}) => this.client.requestRaw("post", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks`, { ...options, query: undefined, body: params.body, requestType: "CourseworkCreateTaskforClassRequest", }),
        };
    }
}
