package managebac_sdk

import (
	"context"
	"fmt"
	"net/url"
)

type CourseworkService struct {
	client *Client
}

func newCourseworkService(client *Client) *CourseworkService {
	service := &CourseworkService{client: client}

	return service
}

type CourseworkListGradesForClassParams struct {
	ClassId                 int64   `path:"class_id"`
	TermId                  int64   `path:"term_id"`
	StudentIds              []int64 `query:"student_ids"`
	IncludeArchivedStudents *bool   `query:"include_archived_students"`
}

type CourseworkListTermGradesForClassParams struct {
	ClassId                 int64   `path:"class_id"`
	TermId                  int64   `path:"term_id"`
	StudentIds              []int64 `query:"student_ids"`
	IncludeArchivedStudents *bool   `query:"include_archived_students"`
	UnenrolledOnly          *bool   `query:"unenrolled_only"`
}

type CourseworkListCriteriaforClassParams struct {
	Id int64 `path:"id"`
}

type CourseworkListClassTaskCategoriesParams struct {
	Id int64 `path:"id"`
}

type CourseworkDownloadSubmissionFileParams struct {
	ClassId   int64 `path:"class_id"`
	TaskId    int64 `path:"task_id"`
	StudentId int64 `path:"student_id"`
	AssetId   int64 `path:"asset_id"`
}

type CourseworkListTaskSubmissionsParams struct {
	ClassId       int64   `path:"class_id"`
	TaskId        int64   `path:"task_id"`
	ModifiedSince *string `query:"modified_since"`
	Page          *int64  `query:"page"`
	PerPage       *int64  `query:"per_page"`
}

type CourseworkGetTaskSubmissionParams struct {
	ClassId   int64 `path:"class_id"`
	TaskId    int64 `path:"task_id"`
	StudentId int64 `path:"student_id"`
}

type CourseworkListTasksforClassParams struct {
	Id     int64  `path:"id"`
	TermId *int64 `query:"term_id"`
}

type CourseworkGetTasksByIdforClassParams struct {
	Id      int64 `path:"id"`
	ClassId int64 `path:"class_id"`
}

type CourseworkUpdateTaskforClassParams struct {
	ClassId int64 `path:"class_id"`
	Id      int64 `path:"id"`
	Body    CourseworkUpdateTaskforClassRequest
}

type CourseworkPartialUpdateTaskforClassParams struct {
	ClassId int64 `path:"class_id"`
	Id      int64 `path:"id"`
	Body    CourseworkPartialUpdateTaskforClassRequest
}

type CourseworkDeleteTaskforClassParams struct {
	ClassId int64 `path:"class_id"`
	Id      int64 `path:"id"`
}

type CourseworkListStudentAssessmentResultsForClassTaskParams struct {
	Id         int64   `path:"id"`
	ClassId    int64   `path:"class_id"`
	StudentIds []int64 `query:"student_ids"`
}

type CourseworkBulkResetStudentsTaskGradesParams struct {
	TaskId int64 `path:"task_id"`
	Body   BulkDestroyStudentTaskGradeRequest
}

type CourseworkCreateTaskforClassParams struct {
	ClassId int64 `path:"class_id"`
	Body    CourseworkCreateTaskforClassRequest
}

func (service *CourseworkService) ListGradesForClass(ctx context.Context, params CourseworkListGradesForClassParams) error {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.ClassId)) + "/assessments/term/" + url.PathEscape(fmt.Sprint(params.TermId)) + "/grades"
	query := url.Values{}
	for _, v := range params.StudentIds {
		query.Add("student_ids", fmt.Sprint(v))
	}
	if params.IncludeArchivedStudents != nil {
		query.Set("include_archived_students", fmt.Sprint(*params.IncludeArchivedStudents))
	}
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *CourseworkService) ListTermGradesForClass(ctx context.Context, params CourseworkListTermGradesForClassParams) error {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.ClassId)) + "/assessments/term/" + url.PathEscape(fmt.Sprint(params.TermId)) + "/term-grades"
	query := url.Values{}
	for _, v := range params.StudentIds {
		query.Add("student_ids", fmt.Sprint(v))
	}
	if params.IncludeArchivedStudents != nil {
		query.Set("include_archived_students", fmt.Sprint(*params.IncludeArchivedStudents))
	}
	if params.UnenrolledOnly != nil {
		query.Set("unenrolled_only", fmt.Sprint(*params.UnenrolledOnly))
	}
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *CourseworkService) ListCriteriaforClass(ctx context.Context, params CourseworkListCriteriaforClassParams) (*CriteriaResponse, error) {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.Id)) + "/criteria"
	query := url.Values{}
	var out CriteriaResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *CourseworkService) ListClassTaskCategories(ctx context.Context, params CourseworkListClassTaskCategoriesParams) (*CourseworkListClassTaskCategoriesResponse, error) {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.Id)) + "/task_categories"
	query := url.Values{}
	var out CourseworkListClassTaskCategoriesResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *CourseworkService) DownloadSubmissionFile(ctx context.Context, params CourseworkDownloadSubmissionFileParams) error {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.ClassId)) + "/tasks/" + url.PathEscape(fmt.Sprint(params.TaskId)) + "/submissions/" + url.PathEscape(fmt.Sprint(params.StudentId)) + "/files/" + url.PathEscape(fmt.Sprint(params.AssetId)) + ""
	query := url.Values{}
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *CourseworkService) ListTaskSubmissions(ctx context.Context, params CourseworkListTaskSubmissionsParams) (*CourseworkListTaskSubmissionsResponse, error) {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.ClassId)) + "/tasks/" + url.PathEscape(fmt.Sprint(params.TaskId)) + "/submissions"
	query := url.Values{}
	if params.ModifiedSince != nil {
		query.Set("modified_since", fmt.Sprint(*params.ModifiedSince))
	}
	if params.Page != nil {
		query.Set("page", fmt.Sprint(*params.Page))
	}
	if params.PerPage != nil {
		query.Set("per_page", fmt.Sprint(*params.PerPage))
	}
	var out CourseworkListTaskSubmissionsResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *CourseworkService) GetTaskSubmission(ctx context.Context, params CourseworkGetTaskSubmissionParams) (*CourseworkGetTaskSubmissionResponse, error) {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.ClassId)) + "/tasks/" + url.PathEscape(fmt.Sprint(params.TaskId)) + "/submissions/" + url.PathEscape(fmt.Sprint(params.StudentId)) + ""
	query := url.Values{}
	var out CourseworkGetTaskSubmissionResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *CourseworkService) ListTasksforClass(ctx context.Context, params CourseworkListTasksforClassParams) error {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.Id)) + "/tasks"
	query := url.Values{}
	if params.TermId != nil {
		query.Set("term_id", fmt.Sprint(*params.TermId))
	}
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *CourseworkService) GetTasksByIdforClass(ctx context.Context, params CourseworkGetTasksByIdforClassParams) error {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.ClassId)) + "/tasks/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *CourseworkService) UpdateTaskforClass(ctx context.Context, params CourseworkUpdateTaskforClassParams) error {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.ClassId)) + "/tasks/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	return service.client.do(ctx, "put", path, query, params.Body, nil)
}

func (service *CourseworkService) PartialUpdateTaskforClass(ctx context.Context, params CourseworkPartialUpdateTaskforClassParams) (*CourseworkPartialUpdateTaskforClassResponse, error) {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.ClassId)) + "/tasks/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out CourseworkPartialUpdateTaskforClassResponse
	if err := service.client.do(ctx, "patch", path, query, params.Body, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *CourseworkService) DeleteTaskforClass(ctx context.Context, params CourseworkDeleteTaskforClassParams) error {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.ClassId)) + "/tasks/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	return service.client.do(ctx, "delete", path, query, nil, nil)
}

func (service *CourseworkService) ListStudentAssessmentResultsForClassTask(ctx context.Context, params CourseworkListStudentAssessmentResultsForClassTaskParams) error {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.ClassId)) + "/tasks/" + url.PathEscape(fmt.Sprint(params.Id)) + "/students"
	query := url.Values{}
	for _, v := range params.StudentIds {
		query.Add("student_ids", fmt.Sprint(v))
	}
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *CourseworkService) BulkResetStudentsTaskGrades(ctx context.Context, params CourseworkBulkResetStudentsTaskGradesParams) (*BulkStudentTaskGradeResponse, error) {
	path := "/v2p3/tasks/" + url.PathEscape(fmt.Sprint(params.TaskId)) + "/students"
	query := url.Values{}
	var out BulkStudentTaskGradeResponse
	if err := service.client.do(ctx, "delete", path, query, params.Body, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *CourseworkService) CreateTaskforClass(ctx context.Context, params CourseworkCreateTaskforClassParams) error {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.ClassId)) + "/tasks"
	query := url.Values{}
	return service.client.do(ctx, "post", path, query, params.Body, nil)
}

func (service *CourseworkService) WithRawResponse() *CourseworkRawService {
	return &CourseworkRawService{client: service.client}
}

type CourseworkRawService struct {
	client *Client
}

func (service *CourseworkRawService) ListCriteriaforClass(ctx context.Context, params CourseworkListCriteriaforClassParams) (*RawResponse[CriteriaResponse], error) {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.Id)) + "/criteria"
	query := url.Values{}
	var out CriteriaResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[CriteriaResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *CourseworkRawService) ListClassTaskCategories(ctx context.Context, params CourseworkListClassTaskCategoriesParams) (*RawResponse[CourseworkListClassTaskCategoriesResponse], error) {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.Id)) + "/task_categories"
	query := url.Values{}
	var out CourseworkListClassTaskCategoriesResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[CourseworkListClassTaskCategoriesResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *CourseworkRawService) ListTaskSubmissions(ctx context.Context, params CourseworkListTaskSubmissionsParams) (*RawResponse[CourseworkListTaskSubmissionsResponse], error) {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.ClassId)) + "/tasks/" + url.PathEscape(fmt.Sprint(params.TaskId)) + "/submissions"
	query := url.Values{}
	if params.ModifiedSince != nil {
		query.Set("modified_since", fmt.Sprint(*params.ModifiedSince))
	}
	if params.Page != nil {
		query.Set("page", fmt.Sprint(*params.Page))
	}
	if params.PerPage != nil {
		query.Set("per_page", fmt.Sprint(*params.PerPage))
	}
	var out CourseworkListTaskSubmissionsResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[CourseworkListTaskSubmissionsResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *CourseworkRawService) GetTaskSubmission(ctx context.Context, params CourseworkGetTaskSubmissionParams) (*RawResponse[CourseworkGetTaskSubmissionResponse], error) {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.ClassId)) + "/tasks/" + url.PathEscape(fmt.Sprint(params.TaskId)) + "/submissions/" + url.PathEscape(fmt.Sprint(params.StudentId)) + ""
	query := url.Values{}
	var out CourseworkGetTaskSubmissionResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[CourseworkGetTaskSubmissionResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *CourseworkRawService) PartialUpdateTaskforClass(ctx context.Context, params CourseworkPartialUpdateTaskforClassParams) (*RawResponse[CourseworkPartialUpdateTaskforClassResponse], error) {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.ClassId)) + "/tasks/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out CourseworkPartialUpdateTaskforClassResponse
	meta, err := service.client.doRaw(ctx, "patch", path, query, params.Body, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[CourseworkPartialUpdateTaskforClassResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *CourseworkRawService) BulkResetStudentsTaskGrades(ctx context.Context, params CourseworkBulkResetStudentsTaskGradesParams) (*RawResponse[BulkStudentTaskGradeResponse], error) {
	path := "/v2p3/tasks/" + url.PathEscape(fmt.Sprint(params.TaskId)) + "/students"
	query := url.Values{}
	var out BulkStudentTaskGradeResponse
	meta, err := service.client.doRaw(ctx, "delete", path, query, params.Body, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[BulkStudentTaskGradeResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}
