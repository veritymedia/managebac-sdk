package managebac_sdk

import (
	"context"
	"fmt"
	"net/url"
)

type TeachersService struct {
	client *Client
}

func newTeachersService(client *Client) *TeachersService {
	service := &TeachersService{client: client}

	return service
}

type TeachersUpdateTeacherAvatarParams struct {
	Id   int64 `path:"id"`
	Body TeachersUpdateTeacherAvatarRequest
}

type TeachersDeleteTeacherAvatarParams struct {
	Id int64 `path:"id"`
}

type TeachersListTeachersParams struct {
	Ids           []int64 `query:"ids[]"`
	Archived      *bool   `query:"archived"`
	ModifiedSince *string `query:"modified_since"`
	Page          *string `query:"page"`
	PerPage       *string `query:"per_page"`
	DeletedSince  *string `query:"deleted_since"`
	Q             *string `query:"q"`
}

type TeachersCreateTeacherParams struct {
	Body TeachersCreateTeacherRequest
}

type TeachersGetTeacherByIdParams struct {
	Id int64 `path:"id"`
}

type TeachersUpdateTeacherParams struct {
	Id   int64 `path:"id"`
	Body TeachersUpdateTeacherRequest
}

type TeachersArchiveTeacherParams struct {
	Id int64 `path:"id"`
}

type TeachersUnarchiveTeacherParams struct {
	Id int64 `path:"id"`
}

type TeachersListTeacherClassesMembershipsParams struct {
	Id            int64 `path:"id"`
	ShowOnReports *bool `query:"show_on_reports"`
	Archived      *bool `query:"archived"`
}

type TeachersListTeacherGroupsMembershipsParams struct {
	Id       int64 `path:"id"`
	Archived *bool `query:"archived"`
}

type TeachersSendTeacherWelcomeEmailParams struct {
	Id int64 `path:"id"`
}

func (service *TeachersService) UpdateTeacherAvatar(ctx context.Context, params TeachersUpdateTeacherAvatarParams) error {
	path := "/v2p3/teachers/" + url.PathEscape(fmt.Sprint(params.Id)) + "/avatar"
	query := url.Values{}
	return service.client.do(ctx, "put", path, query, params.Body, nil)
}

func (service *TeachersService) DeleteTeacherAvatar(ctx context.Context, params TeachersDeleteTeacherAvatarParams) error {
	path := "/v2p3/teachers/" + url.PathEscape(fmt.Sprint(params.Id)) + "/avatar"
	query := url.Values{}
	return service.client.do(ctx, "delete", path, query, nil, nil)
}

func (service *TeachersService) ListTeachers(ctx context.Context, params TeachersListTeachersParams) (*TeachersListTeachersResponse, error) {
	path := "/v2p3/teachers"
	query := url.Values{}
	for _, v := range params.Ids {
		query.Add("ids[]", fmt.Sprint(v))
	}
	if params.Archived != nil {
		query.Set("archived", fmt.Sprint(*params.Archived))
	}
	if params.ModifiedSince != nil {
		query.Set("modified_since", fmt.Sprint(*params.ModifiedSince))
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
	var out TeachersListTeachersResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *TeachersService) CreateTeacher(ctx context.Context, params TeachersCreateTeacherParams) (*TeachersCreateTeacherResponse, error) {
	path := "/v2p3/teachers"
	query := url.Values{}
	var out TeachersCreateTeacherResponse
	if err := service.client.do(ctx, "post", path, query, params.Body, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *TeachersService) GetTeacherById(ctx context.Context, params TeachersGetTeacherByIdParams) (*TeachersGetTeacherByIdResponse, error) {
	path := "/v2p3/teachers/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out TeachersGetTeacherByIdResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *TeachersService) UpdateTeacher(ctx context.Context, params TeachersUpdateTeacherParams) error {
	path := "/v2p3/teachers/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	return service.client.do(ctx, "patch", path, query, params.Body, nil)
}

func (service *TeachersService) ArchiveTeacher(ctx context.Context, params TeachersArchiveTeacherParams) error {
	path := "/v2p3/teachers/" + url.PathEscape(fmt.Sprint(params.Id)) + "/archive"
	query := url.Values{}
	return service.client.do(ctx, "put", path, query, nil, nil)
}

func (service *TeachersService) UnarchiveTeacher(ctx context.Context, params TeachersUnarchiveTeacherParams) error {
	path := "/v2p3/teachers/" + url.PathEscape(fmt.Sprint(params.Id)) + "/unarchive"
	query := url.Values{}
	return service.client.do(ctx, "put", path, query, nil, nil)
}

func (service *TeachersService) ListTeacherClassesMemberships(ctx context.Context, params TeachersListTeacherClassesMembershipsParams) (*TeachersListTeacherClassesMembershipsResponse, error) {
	path := "/v2p3/teachers/" + url.PathEscape(fmt.Sprint(params.Id)) + "/classes"
	query := url.Values{}
	if params.ShowOnReports != nil {
		query.Set("show_on_reports", fmt.Sprint(*params.ShowOnReports))
	}
	if params.Archived != nil {
		query.Set("archived", fmt.Sprint(*params.Archived))
	}
	var out TeachersListTeacherClassesMembershipsResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *TeachersService) ListTeacherGroupsMemberships(ctx context.Context, params TeachersListTeacherGroupsMembershipsParams) (*TeachersListTeacherGroupsMembershipsResponse, error) {
	path := "/v2p3/teachers/" + url.PathEscape(fmt.Sprint(params.Id)) + "/groups"
	query := url.Values{}
	if params.Archived != nil {
		query.Set("archived", fmt.Sprint(*params.Archived))
	}
	var out TeachersListTeacherGroupsMembershipsResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *TeachersService) SendTeacherWelcomeEmail(ctx context.Context, params TeachersSendTeacherWelcomeEmailParams) error {
	path := "/v2p3/teachers/" + url.PathEscape(fmt.Sprint(params.Id)) + "/welcome_email"
	query := url.Values{}
	return service.client.do(ctx, "post", path, query, nil, nil)
}

func (service *TeachersService) WithRawResponse() *TeachersRawService {
	return &TeachersRawService{client: service.client}
}

type TeachersRawService struct {
	client *Client
}

func (service *TeachersRawService) ListTeachers(ctx context.Context, params TeachersListTeachersParams) (*RawResponse[TeachersListTeachersResponse], error) {
	path := "/v2p3/teachers"
	query := url.Values{}
	for _, v := range params.Ids {
		query.Add("ids[]", fmt.Sprint(v))
	}
	if params.Archived != nil {
		query.Set("archived", fmt.Sprint(*params.Archived))
	}
	if params.ModifiedSince != nil {
		query.Set("modified_since", fmt.Sprint(*params.ModifiedSince))
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
	var out TeachersListTeachersResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[TeachersListTeachersResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *TeachersRawService) CreateTeacher(ctx context.Context, params TeachersCreateTeacherParams) (*RawResponse[TeachersCreateTeacherResponse], error) {
	path := "/v2p3/teachers"
	query := url.Values{}
	var out TeachersCreateTeacherResponse
	meta, err := service.client.doRaw(ctx, "post", path, query, params.Body, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[TeachersCreateTeacherResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *TeachersRawService) GetTeacherById(ctx context.Context, params TeachersGetTeacherByIdParams) (*RawResponse[TeachersGetTeacherByIdResponse], error) {
	path := "/v2p3/teachers/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out TeachersGetTeacherByIdResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[TeachersGetTeacherByIdResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *TeachersRawService) ListTeacherClassesMemberships(ctx context.Context, params TeachersListTeacherClassesMembershipsParams) (*RawResponse[TeachersListTeacherClassesMembershipsResponse], error) {
	path := "/v2p3/teachers/" + url.PathEscape(fmt.Sprint(params.Id)) + "/classes"
	query := url.Values{}
	if params.ShowOnReports != nil {
		query.Set("show_on_reports", fmt.Sprint(*params.ShowOnReports))
	}
	if params.Archived != nil {
		query.Set("archived", fmt.Sprint(*params.Archived))
	}
	var out TeachersListTeacherClassesMembershipsResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[TeachersListTeacherClassesMembershipsResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *TeachersRawService) ListTeacherGroupsMemberships(ctx context.Context, params TeachersListTeacherGroupsMembershipsParams) (*RawResponse[TeachersListTeacherGroupsMembershipsResponse], error) {
	path := "/v2p3/teachers/" + url.PathEscape(fmt.Sprint(params.Id)) + "/groups"
	query := url.Values{}
	if params.Archived != nil {
		query.Set("archived", fmt.Sprint(*params.Archived))
	}
	var out TeachersListTeacherGroupsMembershipsResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[TeachersListTeacherGroupsMembershipsResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}
