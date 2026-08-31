package managebac_sdk

import (
	"context"
	"fmt"
	"net/url"
)

type AttendanceService struct {
	client *Client
}

func newAttendanceService(client *Client) *AttendanceService {
	service := &AttendanceService{client: client}

	return service
}

type AttendanceSetAttendanceSettingsParams struct {
	ClassId        int64 `path:"class_id"`
	AcademicYearId int64 `path:"academic_year_id"`
	Body           SetAttendanceSettingsRequest
}

type AttendanceListCategoriesParams struct {
	AcademicYearId string `path:"academic_year_id"`
}

type AttendanceGetClassTimetableParams struct {
	ClassId         int64 `path:"class_id"`
	IncludeDisabled *bool `query:"include_disabled"`
}

type AttendanceGetAttendanceForClassParams struct {
	Id               int64   `path:"id"`
	TermId           int64   `path:"term_id"`
	ArchivedStudents *bool   `query:"archived_students"`
	StudentIds       []int64 `query:"student_ids"`
}

type AttendanceGetClassAttendanceForDateParams struct {
	Id         int64   `path:"id"`
	Date       string  `path:"date"`
	StudentIds []int64 `query:"student_ids"`
}

type AttendanceGetDateExcusalsParams struct {
	Date       string  `path:"date"`
	Page       *string `query:"page"`
	PerPage    *string `query:"per_page"`
	StudentIds []int64 `query:"student_ids"`
}

type AttendanceGetAttendanceForYearGroupByTermParams struct {
	YearGroupId      int64   `path:"year_group_id"`
	TermId           int64   `path:"term_id"`
	ArchivedStudents *bool   `query:"archived_students"`
	StudentIds       []int64 `query:"student_ids"`
}

type AttendanceGetAttendanceForYearGroupByDateParams struct {
	YearGroupId int64   `path:"year_group_id"`
	Date        string  `path:"date"`
	StudentIds  []int64 `query:"student_ids"`
}

type AttendanceGetAttendanceAdjustmentsForYearGroupByTermParams struct {
	YearGroupId int64 `path:"year_group_id"`
	TermId      int64 `path:"term_id"`
}

type AttendanceGetStudentExcusalsParams struct {
	StudentId int64   `path:"student_id"`
	AppliesOn *string `query:"applies_on"`
	Page      *string `query:"page"`
	PerPage   *string `query:"per_page"`
}

type AttendanceCreateStudentExcusalParams struct {
	StudentId int64 `path:"student_id"`
	Body      CreateAttendanceExcusalRequest
}

func (service *AttendanceService) SetAttendanceSettings(ctx context.Context, params AttendanceSetAttendanceSettingsParams) error {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.ClassId)) + "/academic-years/" + url.PathEscape(fmt.Sprint(params.AcademicYearId)) + "/attendance/settings"
	query := url.Values{}
	return service.client.do(ctx, "put", path, query, params.Body, nil)
}

func (service *AttendanceService) ListCategories(ctx context.Context, params AttendanceListCategoriesParams) (*AttendanceListCategoriesResponse, error) {
	path := "/v2p3/school/academic-years/" + url.PathEscape(fmt.Sprint(params.AcademicYearId)) + "/attendance_categories"
	query := url.Values{}
	var out AttendanceListCategoriesResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *AttendanceService) GetClassTimetable(ctx context.Context, params AttendanceGetClassTimetableParams) error {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.ClassId)) + "/timetable"
	query := url.Values{}
	if params.IncludeDisabled != nil {
		query.Set("include_disabled", fmt.Sprint(*params.IncludeDisabled))
	}
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *AttendanceService) GetAttendanceForClass(ctx context.Context, params AttendanceGetAttendanceForClassParams) error {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.Id)) + "/attendance/term/" + url.PathEscape(fmt.Sprint(params.TermId)) + ""
	query := url.Values{}
	if params.ArchivedStudents != nil {
		query.Set("archived_students", fmt.Sprint(*params.ArchivedStudents))
	}
	for _, v := range params.StudentIds {
		query.Add("student_ids", fmt.Sprint(v))
	}
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *AttendanceService) GetClassAttendanceForDate(ctx context.Context, params AttendanceGetClassAttendanceForDateParams) error {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.Id)) + "/attendance/date/" + url.PathEscape(fmt.Sprint(params.Date)) + ""
	query := url.Values{}
	for _, v := range params.StudentIds {
		query.Add("student_ids", fmt.Sprint(v))
	}
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *AttendanceService) GetDateExcusals(ctx context.Context, params AttendanceGetDateExcusalsParams) (*AttendanceGetDateExcusalsResponse, error) {
	path := "/v2p3/students/excusals/" + url.PathEscape(fmt.Sprint(params.Date)) + ""
	query := url.Values{}
	if params.Page != nil {
		query.Set("page", fmt.Sprint(*params.Page))
	}
	if params.PerPage != nil {
		query.Set("per_page", fmt.Sprint(*params.PerPage))
	}
	for _, v := range params.StudentIds {
		query.Add("student_ids", fmt.Sprint(v))
	}
	var out AttendanceGetDateExcusalsResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *AttendanceService) GetAttendanceForYearGroupByTerm(ctx context.Context, params AttendanceGetAttendanceForYearGroupByTermParams) error {
	path := "/v2p3/year-groups/" + url.PathEscape(fmt.Sprint(params.YearGroupId)) + "/homeroom/attendance/term/" + url.PathEscape(fmt.Sprint(params.TermId)) + ""
	query := url.Values{}
	if params.ArchivedStudents != nil {
		query.Set("archived_students", fmt.Sprint(*params.ArchivedStudents))
	}
	for _, v := range params.StudentIds {
		query.Add("student_ids", fmt.Sprint(v))
	}
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *AttendanceService) GetAttendanceForYearGroupByDate(ctx context.Context, params AttendanceGetAttendanceForYearGroupByDateParams) error {
	path := "/v2p3/year-groups/" + url.PathEscape(fmt.Sprint(params.YearGroupId)) + "/homeroom/attendance/date/" + url.PathEscape(fmt.Sprint(params.Date)) + ""
	query := url.Values{}
	for _, v := range params.StudentIds {
		query.Add("student_ids", fmt.Sprint(v))
	}
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *AttendanceService) GetAttendanceAdjustmentsForYearGroupByTerm(ctx context.Context, params AttendanceGetAttendanceAdjustmentsForYearGroupByTermParams) error {
	path := "/v2p3/year-groups/" + url.PathEscape(fmt.Sprint(params.YearGroupId)) + "/homeroom/attendance/term/" + url.PathEscape(fmt.Sprint(params.TermId)) + "/adjustments"
	query := url.Values{}
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *AttendanceService) GetStudentExcusals(ctx context.Context, params AttendanceGetStudentExcusalsParams) (*AttendanceGetStudentExcusalsResponse, error) {
	path := "/v2p3/students/" + url.PathEscape(fmt.Sprint(params.StudentId)) + "/excusals"
	query := url.Values{}
	if params.AppliesOn != nil {
		query.Set("applies_on", fmt.Sprint(*params.AppliesOn))
	}
	if params.Page != nil {
		query.Set("page", fmt.Sprint(*params.Page))
	}
	if params.PerPage != nil {
		query.Set("per_page", fmt.Sprint(*params.PerPage))
	}
	var out AttendanceGetStudentExcusalsResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *AttendanceService) CreateStudentExcusal(ctx context.Context, params AttendanceCreateStudentExcusalParams) (*AttendanceExcusalsResponse, error) {
	path := "/v2p3/students/" + url.PathEscape(fmt.Sprint(params.StudentId)) + "/excusals"
	query := url.Values{}
	var out AttendanceExcusalsResponse
	if err := service.client.do(ctx, "post", path, query, params.Body, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *AttendanceService) WithRawResponse() *AttendanceRawService {
	return &AttendanceRawService{client: service.client}
}

type AttendanceRawService struct {
	client *Client
}

func (service *AttendanceRawService) ListCategories(ctx context.Context, params AttendanceListCategoriesParams) (*RawResponse[AttendanceListCategoriesResponse], error) {
	path := "/v2p3/school/academic-years/" + url.PathEscape(fmt.Sprint(params.AcademicYearId)) + "/attendance_categories"
	query := url.Values{}
	var out AttendanceListCategoriesResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[AttendanceListCategoriesResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *AttendanceRawService) GetDateExcusals(ctx context.Context, params AttendanceGetDateExcusalsParams) (*RawResponse[AttendanceGetDateExcusalsResponse], error) {
	path := "/v2p3/students/excusals/" + url.PathEscape(fmt.Sprint(params.Date)) + ""
	query := url.Values{}
	if params.Page != nil {
		query.Set("page", fmt.Sprint(*params.Page))
	}
	if params.PerPage != nil {
		query.Set("per_page", fmt.Sprint(*params.PerPage))
	}
	for _, v := range params.StudentIds {
		query.Add("student_ids", fmt.Sprint(v))
	}
	var out AttendanceGetDateExcusalsResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[AttendanceGetDateExcusalsResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *AttendanceRawService) GetStudentExcusals(ctx context.Context, params AttendanceGetStudentExcusalsParams) (*RawResponse[AttendanceGetStudentExcusalsResponse], error) {
	path := "/v2p3/students/" + url.PathEscape(fmt.Sprint(params.StudentId)) + "/excusals"
	query := url.Values{}
	if params.AppliesOn != nil {
		query.Set("applies_on", fmt.Sprint(*params.AppliesOn))
	}
	if params.Page != nil {
		query.Set("page", fmt.Sprint(*params.Page))
	}
	if params.PerPage != nil {
		query.Set("per_page", fmt.Sprint(*params.PerPage))
	}
	var out AttendanceGetStudentExcusalsResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[AttendanceGetStudentExcusalsResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *AttendanceRawService) CreateStudentExcusal(ctx context.Context, params AttendanceCreateStudentExcusalParams) (*RawResponse[AttendanceExcusalsResponse], error) {
	path := "/v2p3/students/" + url.PathEscape(fmt.Sprint(params.StudentId)) + "/excusals"
	query := url.Values{}
	var out AttendanceExcusalsResponse
	meta, err := service.client.doRaw(ctx, "post", path, query, params.Body, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[AttendanceExcusalsResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}
