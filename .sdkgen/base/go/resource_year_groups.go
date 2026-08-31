package managebac_sdk

import (
	"context"
	"fmt"
	"net/url"
)

type YearGroupsService struct {
	client *Client
}

func newYearGroupsService(client *Client) *YearGroupsService {
	service := &YearGroupsService{client: client}

	return service
}

type YearGroupsListYearGroupServiceLearningCategoriesStudentsParams struct {
	Id         int64   `path:"id"`
	StudentIds []int64 `query:"student_ids[]"`
	Page       *int64  `query:"page"`
	PerPage    *int64  `query:"per_page"`
}

type YearGroupsListYearGroupServiceLearningOutcomesStudentsParams struct {
	Id         int64   `path:"id"`
	StudentIds []int64 `query:"student_ids[]"`
	Page       *int64  `query:"page"`
	PerPage    *int64  `query:"per_page"`
}

type YearGroupsGetYearGroupServiceLearningParams struct {
	Id int64 `path:"id"`
}

type YearGroupsListYearGroupsParams struct {
	ModifiedSince *string `query:"modified_since"`
	Page          *string `query:"page"`
	PerPage       *string `query:"per_page"`
	Archived      *bool   `query:"archived"`
	StudentIds    []int64 `query:"student_ids"`
}

type YearGroupsListStudentsFromYearGroupsParams struct {
	Id         int64   `path:"id"`
	Page       *string `query:"page"`
	PerPage    *string `query:"per_page"`
	StudentIds []int64 `query:"student_ids"`
}

type YearGroupsAddStudentToYearGroupParams struct {
	Id   int64 `path:"id"`
	Body YearGroupsAddStudentToYearGroupRequest
}

type YearGroupsRemoveStudentToYearGroupParams struct {
	Id   int64 `path:"id"`
	Body YearGroupsRemoveStudentToYearGroupRequest
}

type YearGroupsListAdvisorsFromYearGroupParams struct {
	Id int64 `path:"id"`
}

func (service *YearGroupsService) ListYearGroupServiceLearningCategoriesStudents(ctx context.Context, params YearGroupsListYearGroupServiceLearningCategoriesStudentsParams) (*ServiceLearningCategoriesStudentsResponse, error) {
	path := "/v2p3/year-groups/" + url.PathEscape(fmt.Sprint(params.Id)) + "/projects/sl/categories/students"
	query := url.Values{}
	for _, v := range params.StudentIds {
		query.Add("student_ids[]", fmt.Sprint(v))
	}
	if params.Page != nil {
		query.Set("page", fmt.Sprint(*params.Page))
	}
	if params.PerPage != nil {
		query.Set("per_page", fmt.Sprint(*params.PerPage))
	}
	var out ServiceLearningCategoriesStudentsResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *YearGroupsService) ListYearGroupServiceLearningOutcomesStudents(ctx context.Context, params YearGroupsListYearGroupServiceLearningOutcomesStudentsParams) (*ServiceLearningOutcomesStudentsResponse, error) {
	path := "/v2p3/year-groups/" + url.PathEscape(fmt.Sprint(params.Id)) + "/projects/sl/outcomes/students"
	query := url.Values{}
	for _, v := range params.StudentIds {
		query.Add("student_ids[]", fmt.Sprint(v))
	}
	if params.Page != nil {
		query.Set("page", fmt.Sprint(*params.Page))
	}
	if params.PerPage != nil {
		query.Set("per_page", fmt.Sprint(*params.PerPage))
	}
	var out ServiceLearningOutcomesStudentsResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *YearGroupsService) GetYearGroupServiceLearning(ctx context.Context, params YearGroupsGetYearGroupServiceLearningParams) (*ServiceLearningSettings, error) {
	path := "/v2p3/year-groups/" + url.PathEscape(fmt.Sprint(params.Id)) + "/projects/sl"
	query := url.Values{}
	var out ServiceLearningSettings
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *YearGroupsService) ListYearGroups(ctx context.Context, params YearGroupsListYearGroupsParams) error {
	path := "/v2p3/year-groups"
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
	if params.Archived != nil {
		query.Set("archived", fmt.Sprint(*params.Archived))
	}
	for _, v := range params.StudentIds {
		query.Add("student_ids", fmt.Sprint(v))
	}
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *YearGroupsService) ListStudentsFromYearGroups(ctx context.Context, params YearGroupsListStudentsFromYearGroupsParams) error {
	path := "/v2p3/year-groups/" + url.PathEscape(fmt.Sprint(params.Id)) + "/students"
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
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *YearGroupsService) AddStudentToYearGroup(ctx context.Context, params YearGroupsAddStudentToYearGroupParams) error {
	path := "/v2p3/year-groups/" + url.PathEscape(fmt.Sprint(params.Id)) + "/add_students"
	query := url.Values{}
	return service.client.do(ctx, "post", path, query, params.Body, nil)
}

func (service *YearGroupsService) RemoveStudentToYearGroup(ctx context.Context, params YearGroupsRemoveStudentToYearGroupParams) error {
	path := "/v2p3/year-groups/" + url.PathEscape(fmt.Sprint(params.Id)) + "/remove_students"
	query := url.Values{}
	return service.client.do(ctx, "post", path, query, params.Body, nil)
}

func (service *YearGroupsService) ListAdvisorsFromYearGroup(ctx context.Context, params YearGroupsListAdvisorsFromYearGroupParams) error {
	path := "/v2p3/year-groups/" + url.PathEscape(fmt.Sprint(params.Id)) + "/advisors"
	query := url.Values{}
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *YearGroupsService) WithRawResponse() *YearGroupsRawService {
	return &YearGroupsRawService{client: service.client}
}

type YearGroupsRawService struct {
	client *Client
}

func (service *YearGroupsRawService) ListYearGroupServiceLearningCategoriesStudents(ctx context.Context, params YearGroupsListYearGroupServiceLearningCategoriesStudentsParams) (*RawResponse[ServiceLearningCategoriesStudentsResponse], error) {
	path := "/v2p3/year-groups/" + url.PathEscape(fmt.Sprint(params.Id)) + "/projects/sl/categories/students"
	query := url.Values{}
	for _, v := range params.StudentIds {
		query.Add("student_ids[]", fmt.Sprint(v))
	}
	if params.Page != nil {
		query.Set("page", fmt.Sprint(*params.Page))
	}
	if params.PerPage != nil {
		query.Set("per_page", fmt.Sprint(*params.PerPage))
	}
	var out ServiceLearningCategoriesStudentsResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[ServiceLearningCategoriesStudentsResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *YearGroupsRawService) ListYearGroupServiceLearningOutcomesStudents(ctx context.Context, params YearGroupsListYearGroupServiceLearningOutcomesStudentsParams) (*RawResponse[ServiceLearningOutcomesStudentsResponse], error) {
	path := "/v2p3/year-groups/" + url.PathEscape(fmt.Sprint(params.Id)) + "/projects/sl/outcomes/students"
	query := url.Values{}
	for _, v := range params.StudentIds {
		query.Add("student_ids[]", fmt.Sprint(v))
	}
	if params.Page != nil {
		query.Set("page", fmt.Sprint(*params.Page))
	}
	if params.PerPage != nil {
		query.Set("per_page", fmt.Sprint(*params.PerPage))
	}
	var out ServiceLearningOutcomesStudentsResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[ServiceLearningOutcomesStudentsResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *YearGroupsRawService) GetYearGroupServiceLearning(ctx context.Context, params YearGroupsGetYearGroupServiceLearningParams) (*RawResponse[ServiceLearningSettings], error) {
	path := "/v2p3/year-groups/" + url.PathEscape(fmt.Sprint(params.Id)) + "/projects/sl"
	query := url.Values{}
	var out ServiceLearningSettings
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[ServiceLearningSettings]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}
