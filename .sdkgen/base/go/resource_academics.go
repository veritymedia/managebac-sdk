package managebac_sdk

import (
	"context"
	"fmt"
	"net/url"
)

type AcademicsService struct {
	client *Client
}

func newAcademicsService(client *Client) *AcademicsService {
	service := &AcademicsService{client: client}

	return service
}

type AcademicsCreateAcademicTermParams struct {
	ProgramCode    string `path:"program_code"`
	AcademicYearId string `path:"academic_year_id"`
	Body           AcademicTermRequest
}

type AcademicsUpdateAcademicTermParams struct {
	ProgramCode    string `path:"program_code"`
	AcademicYearId string `path:"academic_year_id"`
	Id             string `path:"id"`
	Body           AcademicTermRequest
}

type AcademicsDeleteAcademicTermParams struct {
	ProgramCode    string `path:"program_code"`
	AcademicYearId int64  `path:"academic_year_id"`
	Id             int64  `path:"id"`
}

type AcademicsRetrieveParams struct {
	ProgramCode string `path:"program_code"`
	Id          int64  `path:"id"`
}

type AcademicsCreateAcademicYearParams struct {
	ProgramCode string `path:"program_code"`
	Body        AcademicYearRequest
}

type AcademicsGetAssessmentTypesParams struct {
	ProgramCode string `path:"program_code"`
}

type AcademicsListParams struct {
	ProgramCode    string `path:"program_code"`
	AcademicYearId int64  `path:"academic_year_id"`
}

type AcademicsGetAllTermReportsParams struct {
	Program        string  `path:"program"`
	AcademicTermId *int64  `query:"academic_term_id"`
	Type           *string `query:"type"`
}

type AcademicsGetTermReportParams struct {
	Program string `path:"program"`
	Id      int64  `path:"id"`
}

type AcademicsDownloadTermReportFileParams struct {
	Program string `path:"program"`
	Id      int64  `path:"id"`
	Kind    string `path:"kind"`
}

type AcademicsGetSubjectGroupsParams struct {
	ProgramCode   string  `path:"program_code"`
	Page          *string `query:"page"`
	PerPage       *string `query:"per_page"`
	ModifiedSince *string `query:"modified_since"`
}

type AcademicsCreateSubjectGroupParams struct {
	ProgramCode string `path:"program_code"`
	Body        SubjectGroupRequest
}

type AcademicsGetSubjectGroupParams struct {
	ProgramCode string `path:"program_code"`
	Id          int64  `path:"id"`
}

type AcademicsUpdateSubjectGroupParams struct {
	ProgramCode string `path:"program_code"`
	Id          int64  `path:"id"`
	Body        SubjectGroupRequest
}

type AcademicsDestroySubjectGroupParams struct {
	ProgramCode string `path:"program_code"`
	Id          int64  `path:"id"`
}

type AcademicsGetSubjectsParams struct {
	ProgramCode string  `path:"program_code"`
	Page        *string `query:"page"`
	PerPage     *string `query:"per_page"`
}

type AcademicsCreateSubjectParams struct {
	ProgramCode string `path:"program_code"`
	Body        SubjectRequest
}

type AcademicsGetSubjectParams struct {
	ProgramCode string `path:"program_code"`
	Id          int64  `path:"id"`
}

type AcademicsUpdateSubjectParams struct {
	ProgramCode string `path:"program_code"`
	Id          int64  `path:"id"`
	Body        SubjectRequest
}

type AcademicsDeleteSubjectParams struct {
	ProgramCode string `path:"program_code"`
	Id          int64  `path:"id"`
}

type AcademicsListAcademicYearsParams struct {
	ProgramCode *string `query:"program_code"`
	Active      *bool   `query:"active"`
}

func (service *AcademicsService) CreateAcademicTerm(ctx context.Context, params AcademicsCreateAcademicTermParams) (*AcademicTermResponse, error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/academic-years/" + url.PathEscape(fmt.Sprint(params.AcademicYearId)) + "/academic-terms"
	query := url.Values{}
	var out AcademicTermResponse
	if err := service.client.do(ctx, "post", path, query, params.Body, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *AcademicsService) UpdateAcademicTerm(ctx context.Context, params AcademicsUpdateAcademicTermParams) (*AcademicTermResponse, error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/academic-years/" + url.PathEscape(fmt.Sprint(params.AcademicYearId)) + "/academic-terms/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out AcademicTermResponse
	if err := service.client.do(ctx, "patch", path, query, params.Body, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *AcademicsService) DeleteAcademicTerm(ctx context.Context, params AcademicsDeleteAcademicTermParams) (*AcademicTermResponse, error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/academic-years/" + url.PathEscape(fmt.Sprint(params.AcademicYearId)) + "/academic-terms/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out AcademicTermResponse
	if err := service.client.do(ctx, "delete", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *AcademicsService) Retrieve(ctx context.Context, params AcademicsRetrieveParams) (*AcademicYearResponse, error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/academic-years/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out AcademicYearResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *AcademicsService) CreateAcademicYear(ctx context.Context, params AcademicsCreateAcademicYearParams) (*AcademicYearResponse, error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/academic-years"
	query := url.Values{}
	var out AcademicYearResponse
	if err := service.client.do(ctx, "post", path, query, params.Body, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *AcademicsService) GetAssessmentTypes(ctx context.Context, params AcademicsGetAssessmentTypesParams) (*AssessmentTypesResponse, error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/assessment_types"
	query := url.Values{}
	var out AssessmentTypesResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *AcademicsService) List(ctx context.Context, params AcademicsListParams) (*AcademicYearCalendarResponse, error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/academic-years/" + url.PathEscape(fmt.Sprint(params.AcademicYearId)) + "/calendar"
	query := url.Values{}
	var out AcademicYearCalendarResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *AcademicsService) GetAllTermReports(ctx context.Context, params AcademicsGetAllTermReportsParams) (*AcademicsGetAllTermReportsResponse, error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.Program)) + "/reports"
	query := url.Values{}
	if params.AcademicTermId != nil {
		query.Set("academic_term_id", fmt.Sprint(*params.AcademicTermId))
	}
	if params.Type != nil {
		query.Set("type", fmt.Sprint(*params.Type))
	}
	var out AcademicsGetAllTermReportsResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *AcademicsService) GetTermReport(ctx context.Context, params AcademicsGetTermReportParams) (*AcademicsGetTermReportResponse, error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.Program)) + "/reports/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out AcademicsGetTermReportResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *AcademicsService) DownloadTermReportFile(ctx context.Context, params AcademicsDownloadTermReportFileParams) error {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.Program)) + "/reports/" + url.PathEscape(fmt.Sprint(params.Id)) + "/download/" + url.PathEscape(fmt.Sprint(params.Kind)) + ""
	query := url.Values{}
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *AcademicsService) GetSubjectGroups(ctx context.Context, params AcademicsGetSubjectGroupsParams) (*SubjectGroupsResponse, error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/subject-groups"
	query := url.Values{}
	if params.Page != nil {
		query.Set("page", fmt.Sprint(*params.Page))
	}
	if params.PerPage != nil {
		query.Set("per_page", fmt.Sprint(*params.PerPage))
	}
	if params.ModifiedSince != nil {
		query.Set("modified_since", fmt.Sprint(*params.ModifiedSince))
	}
	var out SubjectGroupsResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *AcademicsService) CreateSubjectGroup(ctx context.Context, params AcademicsCreateSubjectGroupParams) (*SubjectGroupResponse, error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/subject-groups"
	query := url.Values{}
	var out SubjectGroupResponse
	if err := service.client.do(ctx, "post", path, query, params.Body, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *AcademicsService) GetSubjectGroup(ctx context.Context, params AcademicsGetSubjectGroupParams) (*SubjectGroupResponse, error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/subject-groups/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out SubjectGroupResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *AcademicsService) UpdateSubjectGroup(ctx context.Context, params AcademicsUpdateSubjectGroupParams) (*SubjectGroupResponse, error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/subject-groups/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out SubjectGroupResponse
	if err := service.client.do(ctx, "patch", path, query, params.Body, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *AcademicsService) DestroySubjectGroup(ctx context.Context, params AcademicsDestroySubjectGroupParams) (*SubjectGroupResponse, error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/subject-groups/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out SubjectGroupResponse
	if err := service.client.do(ctx, "delete", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *AcademicsService) GetSubjects(ctx context.Context, params AcademicsGetSubjectsParams) (*SubjectsResponse, error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/subjects"
	query := url.Values{}
	if params.Page != nil {
		query.Set("page", fmt.Sprint(*params.Page))
	}
	if params.PerPage != nil {
		query.Set("per_page", fmt.Sprint(*params.PerPage))
	}
	var out SubjectsResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *AcademicsService) CreateSubject(ctx context.Context, params AcademicsCreateSubjectParams) (*SubjectResponse, error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/subjects"
	query := url.Values{}
	var out SubjectResponse
	if err := service.client.do(ctx, "post", path, query, params.Body, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *AcademicsService) GetSubject(ctx context.Context, params AcademicsGetSubjectParams) (*SubjectResponse, error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/subjects/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out SubjectResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *AcademicsService) UpdateSubject(ctx context.Context, params AcademicsUpdateSubjectParams) (*SubjectResponse, error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/subjects/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out SubjectResponse
	if err := service.client.do(ctx, "put", path, query, params.Body, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *AcademicsService) DeleteSubject(ctx context.Context, params AcademicsDeleteSubjectParams) (*SubjectResponse, error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/subjects/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out SubjectResponse
	if err := service.client.do(ctx, "delete", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *AcademicsService) GetSchool(ctx context.Context) error {
	path := "/v2p3/school"
	query := url.Values{}
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *AcademicsService) ListAcademicYears(ctx context.Context, params AcademicsListAcademicYearsParams) error {
	path := "/v2p3/school/academic-years"
	query := url.Values{}
	if params.ProgramCode != nil {
		query.Set("program_code", fmt.Sprint(*params.ProgramCode))
	}
	if params.Active != nil {
		query.Set("active", fmt.Sprint(*params.Active))
	}
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *AcademicsService) ListGrades(ctx context.Context) (*AcademicsListGradesResponse, error) {
	path := "/v2p3/school/grades"
	query := url.Values{}
	var out AcademicsListGradesResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *AcademicsService) ListSubjects(ctx context.Context) error {
	path := "/v2p3/school/subjects"
	query := url.Values{}
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *AcademicsService) ListSchoolTermGradeScales(ctx context.Context) (*AcademicsListSchoolTermGradeScalesResponse, error) {
	path := "/v2p3/school/term-grade-scales"
	query := url.Values{}
	var out AcademicsListSchoolTermGradeScalesResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *AcademicsService) ListTermRubrics(ctx context.Context) error {
	path := "/v2p3/school/term-rubrics"
	query := url.Values{}
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *AcademicsService) WithRawResponse() *AcademicsRawService {
	return &AcademicsRawService{client: service.client}
}

type AcademicsRawService struct {
	client *Client
}

func (service *AcademicsRawService) CreateAcademicTerm(ctx context.Context, params AcademicsCreateAcademicTermParams) (*RawResponse[AcademicTermResponse], error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/academic-years/" + url.PathEscape(fmt.Sprint(params.AcademicYearId)) + "/academic-terms"
	query := url.Values{}
	var out AcademicTermResponse
	meta, err := service.client.doRaw(ctx, "post", path, query, params.Body, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[AcademicTermResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *AcademicsRawService) UpdateAcademicTerm(ctx context.Context, params AcademicsUpdateAcademicTermParams) (*RawResponse[AcademicTermResponse], error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/academic-years/" + url.PathEscape(fmt.Sprint(params.AcademicYearId)) + "/academic-terms/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out AcademicTermResponse
	meta, err := service.client.doRaw(ctx, "patch", path, query, params.Body, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[AcademicTermResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *AcademicsRawService) DeleteAcademicTerm(ctx context.Context, params AcademicsDeleteAcademicTermParams) (*RawResponse[AcademicTermResponse], error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/academic-years/" + url.PathEscape(fmt.Sprint(params.AcademicYearId)) + "/academic-terms/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out AcademicTermResponse
	meta, err := service.client.doRaw(ctx, "delete", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[AcademicTermResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *AcademicsRawService) Retrieve(ctx context.Context, params AcademicsRetrieveParams) (*RawResponse[AcademicYearResponse], error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/academic-years/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out AcademicYearResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[AcademicYearResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *AcademicsRawService) CreateAcademicYear(ctx context.Context, params AcademicsCreateAcademicYearParams) (*RawResponse[AcademicYearResponse], error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/academic-years"
	query := url.Values{}
	var out AcademicYearResponse
	meta, err := service.client.doRaw(ctx, "post", path, query, params.Body, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[AcademicYearResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *AcademicsRawService) GetAssessmentTypes(ctx context.Context, params AcademicsGetAssessmentTypesParams) (*RawResponse[AssessmentTypesResponse], error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/assessment_types"
	query := url.Values{}
	var out AssessmentTypesResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[AssessmentTypesResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *AcademicsRawService) List(ctx context.Context, params AcademicsListParams) (*RawResponse[AcademicYearCalendarResponse], error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/academic-years/" + url.PathEscape(fmt.Sprint(params.AcademicYearId)) + "/calendar"
	query := url.Values{}
	var out AcademicYearCalendarResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[AcademicYearCalendarResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *AcademicsRawService) GetAllTermReports(ctx context.Context, params AcademicsGetAllTermReportsParams) (*RawResponse[AcademicsGetAllTermReportsResponse], error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.Program)) + "/reports"
	query := url.Values{}
	if params.AcademicTermId != nil {
		query.Set("academic_term_id", fmt.Sprint(*params.AcademicTermId))
	}
	if params.Type != nil {
		query.Set("type", fmt.Sprint(*params.Type))
	}
	var out AcademicsGetAllTermReportsResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[AcademicsGetAllTermReportsResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *AcademicsRawService) GetTermReport(ctx context.Context, params AcademicsGetTermReportParams) (*RawResponse[AcademicsGetTermReportResponse], error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.Program)) + "/reports/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out AcademicsGetTermReportResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[AcademicsGetTermReportResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *AcademicsRawService) GetSubjectGroups(ctx context.Context, params AcademicsGetSubjectGroupsParams) (*RawResponse[SubjectGroupsResponse], error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/subject-groups"
	query := url.Values{}
	if params.Page != nil {
		query.Set("page", fmt.Sprint(*params.Page))
	}
	if params.PerPage != nil {
		query.Set("per_page", fmt.Sprint(*params.PerPage))
	}
	if params.ModifiedSince != nil {
		query.Set("modified_since", fmt.Sprint(*params.ModifiedSince))
	}
	var out SubjectGroupsResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[SubjectGroupsResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *AcademicsRawService) CreateSubjectGroup(ctx context.Context, params AcademicsCreateSubjectGroupParams) (*RawResponse[SubjectGroupResponse], error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/subject-groups"
	query := url.Values{}
	var out SubjectGroupResponse
	meta, err := service.client.doRaw(ctx, "post", path, query, params.Body, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[SubjectGroupResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *AcademicsRawService) GetSubjectGroup(ctx context.Context, params AcademicsGetSubjectGroupParams) (*RawResponse[SubjectGroupResponse], error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/subject-groups/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out SubjectGroupResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[SubjectGroupResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *AcademicsRawService) UpdateSubjectGroup(ctx context.Context, params AcademicsUpdateSubjectGroupParams) (*RawResponse[SubjectGroupResponse], error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/subject-groups/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out SubjectGroupResponse
	meta, err := service.client.doRaw(ctx, "patch", path, query, params.Body, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[SubjectGroupResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *AcademicsRawService) DestroySubjectGroup(ctx context.Context, params AcademicsDestroySubjectGroupParams) (*RawResponse[SubjectGroupResponse], error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/subject-groups/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out SubjectGroupResponse
	meta, err := service.client.doRaw(ctx, "delete", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[SubjectGroupResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *AcademicsRawService) GetSubjects(ctx context.Context, params AcademicsGetSubjectsParams) (*RawResponse[SubjectsResponse], error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/subjects"
	query := url.Values{}
	if params.Page != nil {
		query.Set("page", fmt.Sprint(*params.Page))
	}
	if params.PerPage != nil {
		query.Set("per_page", fmt.Sprint(*params.PerPage))
	}
	var out SubjectsResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[SubjectsResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *AcademicsRawService) CreateSubject(ctx context.Context, params AcademicsCreateSubjectParams) (*RawResponse[SubjectResponse], error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/subjects"
	query := url.Values{}
	var out SubjectResponse
	meta, err := service.client.doRaw(ctx, "post", path, query, params.Body, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[SubjectResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *AcademicsRawService) GetSubject(ctx context.Context, params AcademicsGetSubjectParams) (*RawResponse[SubjectResponse], error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/subjects/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out SubjectResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[SubjectResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *AcademicsRawService) UpdateSubject(ctx context.Context, params AcademicsUpdateSubjectParams) (*RawResponse[SubjectResponse], error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/subjects/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out SubjectResponse
	meta, err := service.client.doRaw(ctx, "put", path, query, params.Body, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[SubjectResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *AcademicsRawService) DeleteSubject(ctx context.Context, params AcademicsDeleteSubjectParams) (*RawResponse[SubjectResponse], error) {
	path := "/v2p3/school/programs/" + url.PathEscape(fmt.Sprint(params.ProgramCode)) + "/subjects/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out SubjectResponse
	meta, err := service.client.doRaw(ctx, "delete", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[SubjectResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *AcademicsRawService) ListGrades(ctx context.Context) (*RawResponse[AcademicsListGradesResponse], error) {
	path := "/v2p3/school/grades"
	query := url.Values{}
	var out AcademicsListGradesResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[AcademicsListGradesResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *AcademicsRawService) ListSchoolTermGradeScales(ctx context.Context) (*RawResponse[AcademicsListSchoolTermGradeScalesResponse], error) {
	path := "/v2p3/school/term-grade-scales"
	query := url.Values{}
	var out AcademicsListSchoolTermGradeScalesResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[AcademicsListSchoolTermGradeScalesResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}
