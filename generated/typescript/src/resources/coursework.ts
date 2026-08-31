import type { ApiClient, RequestOptions } from "../core.js";
import type { CriteriaResponse } from "../types/criteria_response.js";
import type { CourseworkListClassTaskCategoriesResponse } from "../types/coursework_list_class_task_categories_response.js";
import type { CourseworkListTaskSubmissionsResponse } from "../types/coursework_list_task_submissions_response.js";
import type { CourseworkGetTaskSubmissionResponse } from "../types/coursework_get_task_submission_response.js";
import type { CourseworkUpdateTaskforClassRequest } from "../types/coursework_update_taskfor_class_request.js";
import type { CourseworkPartialUpdateTaskforClassRequest } from "../types/coursework_partial_update_taskfor_class_request.js";
import type { CourseworkPartialUpdateTaskforClassResponse } from "../types/coursework_partial_update_taskfor_class_response.js";
import type { BulkDestroyStudentTaskGradeRequest } from "../types/bulk_destroy_student_task_grade_request.js";
import type { BulkStudentTaskGradeResponse } from "../types/bulk_student_task_grade_response.js";
import type { CourseworkCreateTaskforClassRequest } from "../types/coursework_create_taskfor_class_request.js";


export interface CourseworkListGradesForClassParams {
  classId: number;
  termId: number;
  studentIds?: number[];
  includeArchivedStudents?: boolean;
}

export interface CourseworkListTermGradesForClassParams {
  classId: number;
  termId: number;
  studentIds?: number[];
  includeArchivedStudents?: boolean;
  unenrolledOnly?: boolean;
}

export interface CourseworkDownloadSubmissionFileParams {
  classId: number;
  taskId: number;
  studentId: number;
  assetId: number;
}

export interface CourseworkListTaskSubmissionsParams {
  classId: number;
  taskId: number;
  modifiedSince?: string;
  page?: number;
  perPage?: number;
}

export interface CourseworkGetTaskSubmissionParams {
  classId: number;
  taskId: number;
  studentId: number;
}

export interface CourseworkListTasksforClassParams {
  id: number;
  termId?: number;
}

export interface CourseworkGetTasksByIdforClassParams {
  id: number;
  classId: number;
}

export interface CourseworkUpdateTaskforClassParams {
  classId: number;
  id: number;
  body: CourseworkUpdateTaskforClassRequest;
}

export interface CourseworkPartialUpdateTaskforClassParams {
  classId: number;
  id: number;
  body: CourseworkPartialUpdateTaskforClassRequest;
}

export interface CourseworkDeleteTaskforClassParams {
  classId: number;
  id: number;
}

export interface CourseworkListStudentAssessmentResultsForClassTaskParams {
  id: number;
  classId: number;
  studentIds?: number[];
}

export interface CourseworkBulkResetStudentsTaskGradesParams {
  taskId: number;
  body?: BulkDestroyStudentTaskGradeRequest;
}

export interface CourseworkCreateTaskforClassParams {
  classId: number;
  body: CourseworkCreateTaskforClassRequest;
}

export class CourseworkResource {

  constructor(private readonly client: ApiClient) {

  }

  async listGradesForClass(params: CourseworkListGradesForClassParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/assessments/term/${encodeURIComponent(String(params.termId))}/grades`, {
      ...options,
      query: {
        "student_ids": params.studentIds,
        "include_archived_students": params.includeArchivedStudents,
      },
      body: undefined,
    });
  }

  async listTermGradesForClass(params: CourseworkListTermGradesForClassParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/assessments/term/${encodeURIComponent(String(params.termId))}/term-grades`, {
      ...options,
      query: {
        "student_ids": params.studentIds,
        "include_archived_students": params.includeArchivedStudents,
        "unenrolled_only": params.unenrolledOnly,
      },
      body: undefined,
    });
  }

  async listCriteriaforClass(id: number, options: RequestOptions = {}): Promise<CriteriaResponse> {
    return this.client.request<CriteriaResponse>("get", `/v2p3/classes/${encodeURIComponent(String(id))}/criteria`, {
      ...options,
      query: undefined,
      body: undefined,
      responseType: "CriteriaResponse",
    });
  }

  async listClassTaskCategories(id: number, options: RequestOptions = {}): Promise<CourseworkListClassTaskCategoriesResponse> {
    return this.client.request<CourseworkListClassTaskCategoriesResponse>("get", `/v2p3/classes/${encodeURIComponent(String(id))}/task_categories`, {
      ...options,
      query: undefined,
      body: undefined,
      responseType: "CourseworkListClassTaskCategoriesResponse",
    });
  }

  async downloadSubmissionFile(params: CourseworkDownloadSubmissionFileParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.taskId))}/submissions/${encodeURIComponent(String(params.studentId))}/files/${encodeURIComponent(String(params.assetId))}`, {
      ...options,
      query: undefined,
      body: undefined,
    });
  }

  async listTaskSubmissions(params: CourseworkListTaskSubmissionsParams, options: RequestOptions = {}): Promise<CourseworkListTaskSubmissionsResponse> {
    return this.client.request<CourseworkListTaskSubmissionsResponse>("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.taskId))}/submissions`, {
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

  async getTaskSubmission(params: CourseworkGetTaskSubmissionParams, options: RequestOptions = {}): Promise<CourseworkGetTaskSubmissionResponse> {
    return this.client.request<CourseworkGetTaskSubmissionResponse>("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.taskId))}/submissions/${encodeURIComponent(String(params.studentId))}`, {
      ...options,
      query: undefined,
      body: undefined,
      responseType: "CourseworkGetTaskSubmissionResponse",
    });
  }

  async listTasksforClass(params: CourseworkListTasksforClassParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", `/v2p3/classes/${encodeURIComponent(String(params.id))}/tasks`, {
      ...options,
      query: {
        "term_id": params.termId,
      },
      body: undefined,
    });
  }

  async getTasksByIdforClass(params: CourseworkGetTasksByIdforClassParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.id))}`, {
      ...options,
      query: undefined,
      body: undefined,
    });
  }

  async updateTaskforClass(params: CourseworkUpdateTaskforClassParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("put", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.id))}`, {
      ...options,
      query: undefined,
      body: params.body,
      requestType: "CourseworkUpdateTaskforClassRequest",
    });
  }

  async partialUpdateTaskforClass(params: CourseworkPartialUpdateTaskforClassParams, options: RequestOptions = {}): Promise<CourseworkPartialUpdateTaskforClassResponse> {
    return this.client.request<CourseworkPartialUpdateTaskforClassResponse>("patch", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.id))}`, {
      ...options,
      query: undefined,
      body: params.body,
      responseType: "CourseworkPartialUpdateTaskforClassResponse",
      requestType: "CourseworkPartialUpdateTaskforClassRequest",
    });
  }

  async deleteTaskforClass(params: CourseworkDeleteTaskforClassParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("delete", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.id))}`, {
      ...options,
      query: undefined,
      body: undefined,
    });
  }

  async listStudentAssessmentResultsForClassTask(params: CourseworkListStudentAssessmentResultsForClassTaskParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.id))}/students`, {
      ...options,
      query: {
        "student_ids": params.studentIds,
      },
      body: undefined,
    });
  }

  async bulkResetStudentsTaskGrades(params: CourseworkBulkResetStudentsTaskGradesParams, options: RequestOptions = {}): Promise<BulkStudentTaskGradeResponse> {
    return this.client.request<BulkStudentTaskGradeResponse>("delete", `/v2p3/tasks/${encodeURIComponent(String(params.taskId))}/students`, {
      ...options,
      query: undefined,
      body: params.body,
      responseType: "BulkStudentTaskGradeResponse",
      requestType: "BulkDestroyStudentTaskGradeRequest",
    });
  }

  async createTaskforClass(params: CourseworkCreateTaskforClassParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("post", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks`, {
      ...options,
      query: undefined,
      body: params.body,
      requestType: "CourseworkCreateTaskforClassRequest",
    });
  }

  /** Same methods, returning { data, response } with the raw HTTP Response. */
  get withRawResponse() {
    return {
      listGradesForClass: (params: CourseworkListGradesForClassParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/assessments/term/${encodeURIComponent(String(params.termId))}/grades`, { ...options, query: {
      "student_ids": params.studentIds,
      "include_archived_students": params.includeArchivedStudents,
    }, body: undefined, }),
      listTermGradesForClass: (params: CourseworkListTermGradesForClassParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/assessments/term/${encodeURIComponent(String(params.termId))}/term-grades`, { ...options, query: {
      "student_ids": params.studentIds,
      "include_archived_students": params.includeArchivedStudents,
      "unenrolled_only": params.unenrolledOnly,
    }, body: undefined, }),
      listCriteriaforClass: (id: number, options: RequestOptions = {}): Promise<{ data: CriteriaResponse; response: globalThis.Response }> =>
        this.client.requestRaw<CriteriaResponse>("get", `/v2p3/classes/${encodeURIComponent(String(id))}/criteria`, { ...options, query: undefined, body: undefined, responseType: "CriteriaResponse", }),
      listClassTaskCategories: (id: number, options: RequestOptions = {}): Promise<{ data: CourseworkListClassTaskCategoriesResponse; response: globalThis.Response }> =>
        this.client.requestRaw<CourseworkListClassTaskCategoriesResponse>("get", `/v2p3/classes/${encodeURIComponent(String(id))}/task_categories`, { ...options, query: undefined, body: undefined, responseType: "CourseworkListClassTaskCategoriesResponse", }),
      downloadSubmissionFile: (params: CourseworkDownloadSubmissionFileParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.taskId))}/submissions/${encodeURIComponent(String(params.studentId))}/files/${encodeURIComponent(String(params.assetId))}`, { ...options, query: undefined, body: undefined, }),
      listTaskSubmissions: (params: CourseworkListTaskSubmissionsParams, options: RequestOptions = {}): Promise<{ data: CourseworkListTaskSubmissionsResponse; response: globalThis.Response }> =>
        this.client.requestRaw<CourseworkListTaskSubmissionsResponse>("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.taskId))}/submissions`, { ...options, query: {
      "modified_since": params.modifiedSince,
      "page": params.page,
      "per_page": params.perPage,
    }, body: undefined, responseType: "CourseworkListTaskSubmissionsResponse", }),
      getTaskSubmission: (params: CourseworkGetTaskSubmissionParams, options: RequestOptions = {}): Promise<{ data: CourseworkGetTaskSubmissionResponse; response: globalThis.Response }> =>
        this.client.requestRaw<CourseworkGetTaskSubmissionResponse>("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.taskId))}/submissions/${encodeURIComponent(String(params.studentId))}`, { ...options, query: undefined, body: undefined, responseType: "CourseworkGetTaskSubmissionResponse", }),
      listTasksforClass: (params: CourseworkListTasksforClassParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", `/v2p3/classes/${encodeURIComponent(String(params.id))}/tasks`, { ...options, query: {
      "term_id": params.termId,
    }, body: undefined, }),
      getTasksByIdforClass: (params: CourseworkGetTasksByIdforClassParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: undefined, }),
      updateTaskforClass: (params: CourseworkUpdateTaskforClassParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("put", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: params.body, requestType: "CourseworkUpdateTaskforClassRequest", }),
      partialUpdateTaskforClass: (params: CourseworkPartialUpdateTaskforClassParams, options: RequestOptions = {}): Promise<{ data: CourseworkPartialUpdateTaskforClassResponse; response: globalThis.Response }> =>
        this.client.requestRaw<CourseworkPartialUpdateTaskforClassResponse>("patch", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: params.body, responseType: "CourseworkPartialUpdateTaskforClassResponse", requestType: "CourseworkPartialUpdateTaskforClassRequest", }),
      deleteTaskforClass: (params: CourseworkDeleteTaskforClassParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("delete", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.id))}`, { ...options, query: undefined, body: undefined, }),
      listStudentAssessmentResultsForClassTask: (params: CourseworkListStudentAssessmentResultsForClassTaskParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks/${encodeURIComponent(String(params.id))}/students`, { ...options, query: {
      "student_ids": params.studentIds,
    }, body: undefined, }),
      bulkResetStudentsTaskGrades: (params: CourseworkBulkResetStudentsTaskGradesParams, options: RequestOptions = {}): Promise<{ data: BulkStudentTaskGradeResponse; response: globalThis.Response }> =>
        this.client.requestRaw<BulkStudentTaskGradeResponse>("delete", `/v2p3/tasks/${encodeURIComponent(String(params.taskId))}/students`, { ...options, query: undefined, body: params.body, responseType: "BulkStudentTaskGradeResponse", requestType: "BulkDestroyStudentTaskGradeRequest", }),
      createTaskforClass: (params: CourseworkCreateTaskforClassParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("post", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/tasks`, { ...options, query: undefined, body: params.body, requestType: "CourseworkCreateTaskforClassRequest", }),
    };
  }

}
