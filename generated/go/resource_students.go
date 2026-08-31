package managebac_sdk

import (
	"context"
	"fmt"
	"net/url"
)

type StudentsService struct {
	client *Client
}

func newStudentsService(client *Client) *StudentsService {
	service := &StudentsService{client: client}

	return service
}

type StudentsUpdateStudentAvatarParams struct {
	Id   int64 `path:"id"`
	Body StudentsUpdateStudentAvatarRequest
}

type StudentsDeleteStudentAvatarParams struct {
	Id int64 `path:"id"`
}

type StudentsListStudentsParams struct {
	Ids                 []int64 `query:"ids[]"`
	Archived            *bool   `query:"archived"`
	Status              *string `query:"status"`
	ModifiedSince       *string `query:"modified_since"`
	YearGroupIds        []int64 `query:"year_group_ids"`
	YearGroupIds2       []int64 `query:"year_group_ids[]"`
	HomeroomAdvisorIds  []int64 `query:"homeroom_advisor_ids"`
	HomeroomAdvisorIds2 []int64 `query:"homeroom_advisor_ids[]"`
	Page                *string `query:"page"`
	PerPage             *string `query:"per_page"`
	DeletedSince        *string `query:"deleted_since"`
	Q                   *string `query:"q"`
	Ids2                []int64 `query:"ids"`
}

type StudentsCreateStudentParams struct {
	Body StudentsCreateStudentRequest
}

type StudentsGetStudentByIdParams struct {
	Id int64 `path:"id"`
}

type StudentsUpdateStudentParams struct {
	Id   int64 `path:"id"`
	Body StudentsUpdateStudentRequest
}

type StudentsArchiveStudentParams struct {
	Id   int64 `path:"id"`
	Body StudentsArchiveStudentRequest
}

type StudentsUnarchiveStudentParams struct {
	Id int64 `path:"id"`
}

type StudentsSendStudentWelcomeEmailParams struct {
	Id int64 `path:"id"`
}

func (service *StudentsService) UpdateStudentAvatar(ctx context.Context, params StudentsUpdateStudentAvatarParams) (*StudentsUpdateStudentAvatarResponse, error) {
	path := "/v2p3/students/" + url.PathEscape(fmt.Sprint(params.Id)) + "/avatar"
	query := url.Values{}
	var out StudentsUpdateStudentAvatarResponse
	if err := service.client.do(ctx, "put", path, query, params.Body, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *StudentsService) DeleteStudentAvatar(ctx context.Context, params StudentsDeleteStudentAvatarParams) (*StudentsDeleteStudentAvatarResponse, error) {
	path := "/v2p3/students/" + url.PathEscape(fmt.Sprint(params.Id)) + "/avatar"
	query := url.Values{}
	var out StudentsDeleteStudentAvatarResponse
	if err := service.client.do(ctx, "delete", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *StudentsService) ListStudents(ctx context.Context, params StudentsListStudentsParams) (*StudentsListStudentsResponse, error) {
	path := "/v2p3/students"
	query := url.Values{}
	for _, v := range params.Ids {
		query.Add("ids[]", fmt.Sprint(v))
	}
	if params.Archived != nil {
		query.Set("archived", fmt.Sprint(*params.Archived))
	}
	if params.Status != nil {
		query.Set("status", fmt.Sprint(*params.Status))
	}
	if params.ModifiedSince != nil {
		query.Set("modified_since", fmt.Sprint(*params.ModifiedSince))
	}
	for _, v := range params.YearGroupIds {
		query.Add("year_group_ids", fmt.Sprint(v))
	}
	for _, v := range params.YearGroupIds2 {
		query.Add("year_group_ids[]", fmt.Sprint(v))
	}
	for _, v := range params.HomeroomAdvisorIds {
		query.Add("homeroom_advisor_ids", fmt.Sprint(v))
	}
	for _, v := range params.HomeroomAdvisorIds2 {
		query.Add("homeroom_advisor_ids[]", fmt.Sprint(v))
	}
	if params.Page != nil {
		query.Set("page", fmt.Sprint(*params.Page))
	}
	if params.PerPage != nil {
		query.Set("per_page", fmt.Sprint(*params.PerPage))
	}
	if params.DeletedSince != nil {
		query.Set("deleted_since", fmt.Sprint(*params.DeletedSince))
	}
	if params.Q != nil {
		query.Set("q", fmt.Sprint(*params.Q))
	}
	for _, v := range params.Ids2 {
		query.Add("ids", fmt.Sprint(v))
	}
	var out StudentsListStudentsResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *StudentsService) CreateStudent(ctx context.Context, params StudentsCreateStudentParams) (*StudentsCreateStudentResponse, error) {
	path := "/v2p3/students"
	query := url.Values{}
	var out StudentsCreateStudentResponse
	if err := service.client.do(ctx, "post", path, query, params.Body, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *StudentsService) GetStudentById(ctx context.Context, params StudentsGetStudentByIdParams) (*StudentsGetStudentByIdResponse, error) {
	path := "/v2p3/students/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out StudentsGetStudentByIdResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *StudentsService) UpdateStudent(ctx context.Context, params StudentsUpdateStudentParams) (*StudentsUpdateStudentResponse, error) {
	path := "/v2p3/students/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out StudentsUpdateStudentResponse
	if err := service.client.do(ctx, "patch", path, query, params.Body, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *StudentsService) ArchiveStudent(ctx context.Context, params StudentsArchiveStudentParams) error {
	path := "/v2p3/students/" + url.PathEscape(fmt.Sprint(params.Id)) + "/archive"
	query := url.Values{}
	return service.client.do(ctx, "put", path, query, params.Body, nil)
}

func (service *StudentsService) UnarchiveStudent(ctx context.Context, params StudentsUnarchiveStudentParams) error {
	path := "/v2p3/students/" + url.PathEscape(fmt.Sprint(params.Id)) + "/unarchive"
	query := url.Values{}
	return service.client.do(ctx, "put", path, query, nil, nil)
}

func (service *StudentsService) SendStudentWelcomeEmail(ctx context.Context, params StudentsSendStudentWelcomeEmailParams) error {
	path := "/v2p3/students/" + url.PathEscape(fmt.Sprint(params.Id)) + "/welcome_email"
	query := url.Values{}
	return service.client.do(ctx, "post", path, query, nil, nil)
}

func (service *StudentsService) WithRawResponse() *StudentsRawService {
	return &StudentsRawService{client: service.client}
}

type StudentsRawService struct {
	client *Client
}

func (service *StudentsRawService) UpdateStudentAvatar(ctx context.Context, params StudentsUpdateStudentAvatarParams) (*RawResponse[StudentsUpdateStudentAvatarResponse], error) {
	path := "/v2p3/students/" + url.PathEscape(fmt.Sprint(params.Id)) + "/avatar"
	query := url.Values{}
	var out StudentsUpdateStudentAvatarResponse
	meta, err := service.client.doRaw(ctx, "put", path, query, params.Body, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[StudentsUpdateStudentAvatarResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *StudentsRawService) DeleteStudentAvatar(ctx context.Context, params StudentsDeleteStudentAvatarParams) (*RawResponse[StudentsDeleteStudentAvatarResponse], error) {
	path := "/v2p3/students/" + url.PathEscape(fmt.Sprint(params.Id)) + "/avatar"
	query := url.Values{}
	var out StudentsDeleteStudentAvatarResponse
	meta, err := service.client.doRaw(ctx, "delete", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[StudentsDeleteStudentAvatarResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *StudentsRawService) ListStudents(ctx context.Context, params StudentsListStudentsParams) (*RawResponse[StudentsListStudentsResponse], error) {
	path := "/v2p3/students"
	query := url.Values{}
	for _, v := range params.Ids {
		query.Add("ids[]", fmt.Sprint(v))
	}
	if params.Archived != nil {
		query.Set("archived", fmt.Sprint(*params.Archived))
	}
	if params.Status != nil {
		query.Set("status", fmt.Sprint(*params.Status))
	}
	if params.ModifiedSince != nil {
		query.Set("modified_since", fmt.Sprint(*params.ModifiedSince))
	}
	for _, v := range params.YearGroupIds {
		query.Add("year_group_ids", fmt.Sprint(v))
	}
	for _, v := range params.YearGroupIds2 {
		query.Add("year_group_ids[]", fmt.Sprint(v))
	}
	for _, v := range params.HomeroomAdvisorIds {
		query.Add("homeroom_advisor_ids", fmt.Sprint(v))
	}
	for _, v := range params.HomeroomAdvisorIds2 {
		query.Add("homeroom_advisor_ids[]", fmt.Sprint(v))
	}
	if params.Page != nil {
		query.Set("page", fmt.Sprint(*params.Page))
	}
	if params.PerPage != nil {
		query.Set("per_page", fmt.Sprint(*params.PerPage))
	}
	if params.DeletedSince != nil {
		query.Set("deleted_since", fmt.Sprint(*params.DeletedSince))
	}
	if params.Q != nil {
		query.Set("q", fmt.Sprint(*params.Q))
	}
	for _, v := range params.Ids2 {
		query.Add("ids", fmt.Sprint(v))
	}
	var out StudentsListStudentsResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[StudentsListStudentsResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *StudentsRawService) CreateStudent(ctx context.Context, params StudentsCreateStudentParams) (*RawResponse[StudentsCreateStudentResponse], error) {
	path := "/v2p3/students"
	query := url.Values{}
	var out StudentsCreateStudentResponse
	meta, err := service.client.doRaw(ctx, "post", path, query, params.Body, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[StudentsCreateStudentResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *StudentsRawService) GetStudentById(ctx context.Context, params StudentsGetStudentByIdParams) (*RawResponse[StudentsGetStudentByIdResponse], error) {
	path := "/v2p3/students/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out StudentsGetStudentByIdResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[StudentsGetStudentByIdResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *StudentsRawService) UpdateStudent(ctx context.Context, params StudentsUpdateStudentParams) (*RawResponse[StudentsUpdateStudentResponse], error) {
	path := "/v2p3/students/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out StudentsUpdateStudentResponse
	meta, err := service.client.doRaw(ctx, "patch", path, query, params.Body, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[StudentsUpdateStudentResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}
