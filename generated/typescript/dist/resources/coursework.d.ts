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
export declare class CourseworkResource {
    private readonly client;
    constructor(client: ApiClient);
    listGradesForClass(params: CourseworkListGradesForClassParams, options?: RequestOptions): Promise<unknown>;
    listTermGradesForClass(params: CourseworkListTermGradesForClassParams, options?: RequestOptions): Promise<unknown>;
    listCriteriaforClass(id: number, options?: RequestOptions): Promise<CriteriaResponse>;
    listClassTaskCategories(id: number, options?: RequestOptions): Promise<CourseworkListClassTaskCategoriesResponse>;
    downloadSubmissionFile(params: CourseworkDownloadSubmissionFileParams, options?: RequestOptions): Promise<unknown>;
    listTaskSubmissions(params: CourseworkListTaskSubmissionsParams, options?: RequestOptions): Promise<CourseworkListTaskSubmissionsResponse>;
    getTaskSubmission(params: CourseworkGetTaskSubmissionParams, options?: RequestOptions): Promise<CourseworkGetTaskSubmissionResponse>;
    listTasksforClass(params: CourseworkListTasksforClassParams, options?: RequestOptions): Promise<unknown>;
    getTasksByIdforClass(params: CourseworkGetTasksByIdforClassParams, options?: RequestOptions): Promise<unknown>;
    updateTaskforClass(params: CourseworkUpdateTaskforClassParams, options?: RequestOptions): Promise<unknown>;
    partialUpdateTaskforClass(params: CourseworkPartialUpdateTaskforClassParams, options?: RequestOptions): Promise<CourseworkPartialUpdateTaskforClassResponse>;
    deleteTaskforClass(params: CourseworkDeleteTaskforClassParams, options?: RequestOptions): Promise<unknown>;
    listStudentAssessmentResultsForClassTask(params: CourseworkListStudentAssessmentResultsForClassTaskParams, options?: RequestOptions): Promise<unknown>;
    bulkResetStudentsTaskGrades(params: CourseworkBulkResetStudentsTaskGradesParams, options?: RequestOptions): Promise<BulkStudentTaskGradeResponse>;
    createTaskforClass(params: CourseworkCreateTaskforClassParams, options?: RequestOptions): Promise<unknown>;
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse(): {
        listGradesForClass: (params: CourseworkListGradesForClassParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        listTermGradesForClass: (params: CourseworkListTermGradesForClassParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        listCriteriaforClass: (id: number, options?: RequestOptions) => Promise<{
            data: CriteriaResponse;
            response: globalThis.Response;
        }>;
        listClassTaskCategories: (id: number, options?: RequestOptions) => Promise<{
            data: CourseworkListClassTaskCategoriesResponse;
            response: globalThis.Response;
        }>;
        downloadSubmissionFile: (params: CourseworkDownloadSubmissionFileParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        listTaskSubmissions: (params: CourseworkListTaskSubmissionsParams, options?: RequestOptions) => Promise<{
            data: CourseworkListTaskSubmissionsResponse;
            response: globalThis.Response;
        }>;
        getTaskSubmission: (params: CourseworkGetTaskSubmissionParams, options?: RequestOptions) => Promise<{
            data: CourseworkGetTaskSubmissionResponse;
            response: globalThis.Response;
        }>;
        listTasksforClass: (params: CourseworkListTasksforClassParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        getTasksByIdforClass: (params: CourseworkGetTasksByIdforClassParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        updateTaskforClass: (params: CourseworkUpdateTaskforClassParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        partialUpdateTaskforClass: (params: CourseworkPartialUpdateTaskforClassParams, options?: RequestOptions) => Promise<{
            data: CourseworkPartialUpdateTaskforClassResponse;
            response: globalThis.Response;
        }>;
        deleteTaskforClass: (params: CourseworkDeleteTaskforClassParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        listStudentAssessmentResultsForClassTask: (params: CourseworkListStudentAssessmentResultsForClassTaskParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
        bulkResetStudentsTaskGrades: (params: CourseworkBulkResetStudentsTaskGradesParams, options?: RequestOptions) => Promise<{
            data: BulkStudentTaskGradeResponse;
            response: globalThis.Response;
        }>;
        createTaskforClass: (params: CourseworkCreateTaskforClassParams, options?: RequestOptions) => Promise<{
            data: unknown;
            response: globalThis.Response;
        }>;
    };
}
