package managebac_sdk

import (
	"context"
	"fmt"
	"net/url"
)

type ParentsService struct {
	client *Client
}

func newParentsService(client *Client) *ParentsService {
	service := &ParentsService{client: client}

	return service
}

type ParentsListParentsParams struct {
	Ids           []int64 `query:"ids[]"`
	Archived      *bool   `query:"archived"`
	ModifiedSince *string `query:"modified_since"`
	Page          *string `query:"page"`
	PerPage       *string `query:"per_page"`
	DeletedSince  *string `query:"deleted_since"`
	Q             *string `query:"q"`
}

type ParentsCreateParentParams struct {
	Body ParentsCreateParentRequest
}

type ParentsGetParentByIdParams struct {
	Id int64 `path:"id"`
}

type ParentsUpdateParentParams struct {
	Id   int64 `path:"id"`
	Body ParentsUpdateParentRequest
}

type ParentsArchiveParentParams struct {
	Id int64 `path:"id"`
}

type ParentsUnarchiveParentParams struct {
	Id int64 `path:"id"`
}

type ParentsSendParentWelcomeEmailParams struct {
	Id int64 `path:"id"`
}

func (service *ParentsService) ListParents(ctx context.Context, params ParentsListParentsParams) (*ParentsListParentsResponse, error) {
	path := "/v2p3/parents"
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
	var out ParentsListParentsResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *ParentsService) CreateParent(ctx context.Context, params ParentsCreateParentParams) (*ParentsCreateParentResponse, error) {
	path := "/v2p3/parents"
	query := url.Values{}
	var out ParentsCreateParentResponse
	if err := service.client.do(ctx, "post", path, query, params.Body, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *ParentsService) GetParentById(ctx context.Context, params ParentsGetParentByIdParams) (*ParentsGetParentByIdResponse, error) {
	path := "/v2p3/parents/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out ParentsGetParentByIdResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *ParentsService) UpdateParent(ctx context.Context, params ParentsUpdateParentParams) (*ParentsUpdateParentResponse, error) {
	path := "/v2p3/parents/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out ParentsUpdateParentResponse
	if err := service.client.do(ctx, "patch", path, query, params.Body, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *ParentsService) ArchiveParent(ctx context.Context, params ParentsArchiveParentParams) error {
	path := "/v2p3/parents/" + url.PathEscape(fmt.Sprint(params.Id)) + "/archive"
	query := url.Values{}
	return service.client.do(ctx, "put", path, query, nil, nil)
}

func (service *ParentsService) UnarchiveParent(ctx context.Context, params ParentsUnarchiveParentParams) error {
	path := "/v2p3/parents/" + url.PathEscape(fmt.Sprint(params.Id)) + "/unarchive"
	query := url.Values{}
	return service.client.do(ctx, "put", path, query, nil, nil)
}

func (service *ParentsService) SendParentWelcomeEmail(ctx context.Context, params ParentsSendParentWelcomeEmailParams) error {
	path := "/v2p3/parents/" + url.PathEscape(fmt.Sprint(params.Id)) + "/welcome_email"
	query := url.Values{}
	return service.client.do(ctx, "post", path, query, nil, nil)
}

func (service *ParentsService) WithRawResponse() *ParentsRawService {
	return &ParentsRawService{client: service.client}
}

type ParentsRawService struct {
	client *Client
}

func (service *ParentsRawService) ListParents(ctx context.Context, params ParentsListParentsParams) (*RawResponse[ParentsListParentsResponse], error) {
	path := "/v2p3/parents"
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
	var out ParentsListParentsResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[ParentsListParentsResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *ParentsRawService) CreateParent(ctx context.Context, params ParentsCreateParentParams) (*RawResponse[ParentsCreateParentResponse], error) {
	path := "/v2p3/parents"
	query := url.Values{}
	var out ParentsCreateParentResponse
	meta, err := service.client.doRaw(ctx, "post", path, query, params.Body, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[ParentsCreateParentResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *ParentsRawService) GetParentById(ctx context.Context, params ParentsGetParentByIdParams) (*RawResponse[ParentsGetParentByIdResponse], error) {
	path := "/v2p3/parents/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out ParentsGetParentByIdResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[ParentsGetParentByIdResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *ParentsRawService) UpdateParent(ctx context.Context, params ParentsUpdateParentParams) (*RawResponse[ParentsUpdateParentResponse], error) {
	path := "/v2p3/parents/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out ParentsUpdateParentResponse
	meta, err := service.client.doRaw(ctx, "patch", path, query, params.Body, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[ParentsUpdateParentResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}
