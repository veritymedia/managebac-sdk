package managebac_sdk

import (
	"context"
	"fmt"
	"net/url"
)

type ExtendedApisService struct {
	client *Client
}

func newExtendedApisService(client *Client) *ExtendedApisService {
	service := &ExtendedApisService{client: client}

	return service
}

type ExtendedApisBulkUpdateStudentsFromClassParams struct {
	ClassId int64 `path:"class_id"`
	Body    BulkUpdateStudents
}

type ExtendedApisUpsertClassesParams struct {
	Body UpsertClasses
}

type ExtendedApisSetClassAttendanceForStudentsParams struct {
	Id   int64 `path:"id"`
	Body BulkUpdateAttendance
}

type ExtendedApisBulkEnableSubjectsParams struct {
	ProgramCode string `path:"program_code"`
	Body        ToggleSchoolSubjectsRequest
}

type ExtendedApisBulkDisableSubjectsParams struct {
	ProgramCode string `path:"program_code"`
	Body        ToggleSchoolSubjectsRequest
}

type ExtendedApisUpdateStudentExcusalParams struct {
	StudentId int64 `path:"student_id"`
	Id        int64 `path:"id"`
	Body      UpdateAttendanceExcusalRequest
}

type ExtendedApisDeleteStudentExcusalParams struct {
	StudentId int64 `path:"student_id"`
	Id        int64 `path:"id"`
}

type ExtendedApisSetStudentHomeroomAttendanceParams struct {
	Id   int64 `path:"id"`
	Body ExtendedApisSetStudentHomeroomAttendanceRequest
}

type ExtendedApisUpdateStudentTaskGradesParams struct {
	TaskId    int64 `path:"task_id"`
	StudentId int64 `path:"student_id"`
	Body      ExtendedApisUpdateStudentTaskGradesRequest
}

type ExtendedApisBulkUpdateStudentTaskGradesParams struct {
	TaskId int64 `path:"task_id"`
	Body   BulkUpdateStudentTaskGradeRequest
}

type ExtendedApisBulkUpdateTeacherMembershipsParams struct {
	ClassId int64 `path:"class_id"`
	Body    BulkUpdateTeachers
}

func (service *ExtendedApisService) BulkUpdateStudentsFromClass(ctx context.Context, params ExtendedApisBulkUpdateStudentsFromClassParams) error {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.ClassId)) + "/students"
	query := url.Values{}
	return service.client.do(ctx, "patch", path, query, params.Body, nil)
}

func (service *ExtendedApisService) UpsertClasses(ctx context.Context, params ExtendedApisUpsertClassesParams) (*UpsertClassesResponse, error) {
	path := "/v2p3/classes"
	query := url.Values{}
	var out UpsertClassesResponse
	if err := service.client.do(ctx, "patch", path, query, params.Body, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *ExtendedApisService) SetClassAttendanceForStudents(ctx context.Context, params ExtendedApisSetClassAttendanceForStudentsParams) error {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.Id)) + "/attendance"
	query := url.Values{}
	return service.client.do(ctx, "put", path, query, params.Body, nil)
}

func (service *ExtendedApisService) BulkEnableSubjects(ctx context.Context, params ExtendedApisBulkEnableSubjectsParams) (*ToggleSchoolSubjectsRequest, error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/subjects/bulk-enable"
	query := url.Values{}
	var out ToggleSchoolSubjectsRequest
	if err := service.client.do(ctx, "post", path, query, params.Body, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *ExtendedApisService) BulkDisableSubjects(ctx context.Context, params ExtendedApisBulkDisableSubjectsParams) (*ToggleSchoolSubjectsRequest, error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/subjects/bulk-disable"
	query := url.Values{}
	var out ToggleSchoolSubjectsRequest
	if err := service.client.do(ctx, "post", path, query, params.Body, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *ExtendedApisService) UpdateStudentExcusal(ctx context.Context, params ExtendedApisUpdateStudentExcusalParams) (*AttendanceExcusalsResponse, error) {
	path := "/v2p3/students/" + url.PathEscape(fmt.Sprint(params.StudentId)) + "/excusals/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out AttendanceExcusalsResponse
	if err := service.client.do(ctx, "patch", path, query, params.Body, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *ExtendedApisService) DeleteStudentExcusal(ctx context.Context, params ExtendedApisDeleteStudentExcusalParams) (*AttendanceExcusalsResponse, error) {
	path := "/v2p3/students/" + url.PathEscape(fmt.Sprint(params.StudentId)) + "/excusals/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out AttendanceExcusalsResponse
	if err := service.client.do(ctx, "delete", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *ExtendedApisService) SetStudentHomeroomAttendance(ctx context.Context, params ExtendedApisSetStudentHomeroomAttendanceParams) error {
	path := "/v2p3/students/" + url.PathEscape(fmt.Sprint(params.Id)) + "/set_homeroom_attendance"
	query := url.Values{}
	return service.client.do(ctx, "put", path, query, params.Body, nil)
}

func (service *ExtendedApisService) UpdateStudentTaskGrades(ctx context.Context, params ExtendedApisUpdateStudentTaskGradesParams) (*ExtendedApisUpdateStudentTaskGradesResponse, error) {
	path := "/v2p3/tasks/" + url.PathEscape(fmt.Sprint(params.TaskId)) + "/students/" + url.PathEscape(fmt.Sprint(params.StudentId)) + ""
	query := url.Values{}
	var out ExtendedApisUpdateStudentTaskGradesResponse
	if err := service.client.do(ctx, "patch", path, query, params.Body, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *ExtendedApisService) BulkUpdateStudentTaskGrades(ctx context.Context, params ExtendedApisBulkUpdateStudentTaskGradesParams) (*BulkStudentTaskGradeResponse, error) {
	path := "/v2p3/tasks/" + url.PathEscape(fmt.Sprint(params.TaskId)) + "/students"
	query := url.Values{}
	var out BulkStudentTaskGradeResponse
	if err := service.client.do(ctx, "patch", path, query, params.Body, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *ExtendedApisService) BulkUpdateTeacherMemberships(ctx context.Context, params ExtendedApisBulkUpdateTeacherMembershipsParams) error {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.ClassId)) + "/teachers"
	query := url.Values{}
	return service.client.do(ctx, "put", path, query, params.Body, nil)
}

func (service *ExtendedApisService) WithRawResponse() *ExtendedApisRawService {
	return &ExtendedApisRawService{client: service.client}
}

type ExtendedApisRawService struct {
	client *Client
}

func (service *ExtendedApisRawService) UpsertClasses(ctx context.Context, params ExtendedApisUpsertClassesParams) (*RawResponse[UpsertClassesResponse], error) {
	path := "/v2p3/classes"
	query := url.Values{}
	var out UpsertClassesResponse
	meta, err := service.client.doRaw(ctx, "patch", path, query, params.Body, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[UpsertClassesResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *ExtendedApisRawService) BulkEnableSubjects(ctx context.Context, params ExtendedApisBulkEnableSubjectsParams) (*RawResponse[ToggleSchoolSubjectsRequest], error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/subjects/bulk-enable"
	query := url.Values{}
	var out ToggleSchoolSubjectsRequest
	meta, err := service.client.doRaw(ctx, "post", path, query, params.Body, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[ToggleSchoolSubjectsRequest]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *ExtendedApisRawService) BulkDisableSubjects(ctx context.Context, params ExtendedApisBulkDisableSubjectsParams) (*RawResponse[ToggleSchoolSubjectsRequest], error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/subjects/bulk-disable"
	query := url.Values{}
	var out ToggleSchoolSubjectsRequest
	meta, err := service.client.doRaw(ctx, "post", path, query, params.Body, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[ToggleSchoolSubjectsRequest]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *ExtendedApisRawService) UpdateStudentExcusal(ctx context.Context, params ExtendedApisUpdateStudentExcusalParams) (*RawResponse[AttendanceExcusalsResponse], error) {
	path := "/v2p3/students/" + url.PathEscape(fmt.Sprint(params.StudentId)) + "/excusals/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out AttendanceExcusalsResponse
	meta, err := service.client.doRaw(ctx, "patch", path, query, params.Body, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[AttendanceExcusalsResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *ExtendedApisRawService) DeleteStudentExcusal(ctx context.Context, params ExtendedApisDeleteStudentExcusalParams) (*RawResponse[AttendanceExcusalsResponse], error) {
	path := "/v2p3/students/" + url.PathEscape(fmt.Sprint(params.StudentId)) + "/excusals/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out AttendanceExcusalsResponse
	meta, err := service.client.doRaw(ctx, "delete", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[AttendanceExcusalsResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *ExtendedApisRawService) UpdateStudentTaskGrades(ctx context.Context, params ExtendedApisUpdateStudentTaskGradesParams) (*RawResponse[ExtendedApisUpdateStudentTaskGradesResponse], error) {
	path := "/v2p3/tasks/" + url.PathEscape(fmt.Sprint(params.TaskId)) + "/students/" + url.PathEscape(fmt.Sprint(params.StudentId)) + ""
	query := url.Values{}
	var out ExtendedApisUpdateStudentTaskGradesResponse
	meta, err := service.client.doRaw(ctx, "patch", path, query, params.Body, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[ExtendedApisUpdateStudentTaskGradesResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *ExtendedApisRawService) BulkUpdateStudentTaskGrades(ctx context.Context, params ExtendedApisBulkUpdateStudentTaskGradesParams) (*RawResponse[BulkStudentTaskGradeResponse], error) {
	path := "/v2p3/tasks/" + url.PathEscape(fmt.Sprint(params.TaskId)) + "/students"
	query := url.Values{}
	var out BulkStudentTaskGradeResponse
	meta, err := service.client.doRaw(ctx, "patch", path, query, params.Body, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[BulkStudentTaskGradeResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}
