package managebac_sdk

import (
	"context"
	"fmt"
	"net/url"
)

type RelationshipsService struct {
	client *Client
}

func newRelationshipsService(client *Client) *RelationshipsService {
	service := &RelationshipsService{client: client}

	return service
}

type RelationshipsListOfParentChildrenRelationshipsParams struct {
	ParentId string  `path:"parent_id"`
	Page     *string `query:"page"`
	PerPage  *string `query:"per_page"`
}

type RelationshipsCreateParentChildRelationshipParams struct {
	ParentId string `path:"parent_id"`
	Body     RelationshipsCreateParentChildRelationshipRequest
}

type RelationshipsBulkUpdateParentChildrenRelationshipsParams struct {
	ParentId string `path:"parent_id"`
	Body     RelationshipsBulkUpdateParentChildrenRelationshipsRequest
}

type RelationshipsGetParentChildRelationshipParams struct {
	ParentId string `path:"parent_id"`
	Id       string `path:"id"`
}

type RelationshipsUpdateParentChildRelationshipParams struct {
	ParentId string `path:"parent_id"`
	Id       string `path:"id"`
	Body     RelationshipsUpdateParentChildRelationshipRequest
}

type RelationshipsDeleteParentChildRelationshipParams struct {
	ParentId string `path:"parent_id"`
	Id       string `path:"id"`
}

func (service *RelationshipsService) ListOfParentChildrenRelationships(ctx context.Context, params RelationshipsListOfParentChildrenRelationshipsParams) (*RelationshipsListOfParentChildrenRelationshipsResponse, error) {
	path := "/v2p3/parents/" + url.PathEscape(fmt.Sprint(params.ParentId)) + "/children"
	query := url.Values{}
	if params.Page != nil {
		query.Set("page", fmt.Sprint(*params.Page))
	}
	if params.PerPage != nil {
		query.Set("per_page", fmt.Sprint(*params.PerPage))
	}
	var out RelationshipsListOfParentChildrenRelationshipsResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *RelationshipsService) CreateParentChildRelationship(ctx context.Context, params RelationshipsCreateParentChildRelationshipParams) (*RelationshipsCreateParentChildRelationshipResponse, error) {
	path := "/v2p3/parents/" + url.PathEscape(fmt.Sprint(params.ParentId)) + "/children"
	query := url.Values{}
	var out RelationshipsCreateParentChildRelationshipResponse
	if err := service.client.do(ctx, "post", path, query, params.Body, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *RelationshipsService) BulkUpdateParentChildrenRelationships(ctx context.Context, params RelationshipsBulkUpdateParentChildrenRelationshipsParams) (*RelationshipsBulkUpdateParentChildrenRelationshipsResponse, error) {
	path := "/v2p3/parents/" + url.PathEscape(fmt.Sprint(params.ParentId)) + "/children"
	query := url.Values{}
	var out RelationshipsBulkUpdateParentChildrenRelationshipsResponse
	if err := service.client.do(ctx, "put", path, query, params.Body, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *RelationshipsService) GetParentChildRelationship(ctx context.Context, params RelationshipsGetParentChildRelationshipParams) (*RelationshipsGetParentChildRelationshipResponse, error) {
	path := "/v2p3/parents/" + url.PathEscape(fmt.Sprint(params.ParentId)) + "/children/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out RelationshipsGetParentChildRelationshipResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *RelationshipsService) UpdateParentChildRelationship(ctx context.Context, params RelationshipsUpdateParentChildRelationshipParams) (*RelationshipsUpdateParentChildRelationshipResponse, error) {
	path := "/v2p3/parents/" + url.PathEscape(fmt.Sprint(params.ParentId)) + "/children/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out RelationshipsUpdateParentChildRelationshipResponse
	if err := service.client.do(ctx, "put", path, query, params.Body, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *RelationshipsService) DeleteParentChildRelationship(ctx context.Context, params RelationshipsDeleteParentChildRelationshipParams) error {
	path := "/v2p3/parents/" + url.PathEscape(fmt.Sprint(params.ParentId)) + "/children/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	return service.client.do(ctx, "delete", path, query, nil, nil)
}

func (service *RelationshipsService) WithRawResponse() *RelationshipsRawService {
	return &RelationshipsRawService{client: service.client}
}

type RelationshipsRawService struct {
	client *Client
}

func (service *RelationshipsRawService) ListOfParentChildrenRelationships(ctx context.Context, params RelationshipsListOfParentChildrenRelationshipsParams) (*RawResponse[RelationshipsListOfParentChildrenRelationshipsResponse], error) {
	path := "/v2p3/parents/" + url.PathEscape(fmt.Sprint(params.ParentId)) + "/children"
	query := url.Values{}
	if params.Page != nil {
		query.Set("page", fmt.Sprint(*params.Page))
	}
	if params.PerPage != nil {
		query.Set("per_page", fmt.Sprint(*params.PerPage))
	}
	var out RelationshipsListOfParentChildrenRelationshipsResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[RelationshipsListOfParentChildrenRelationshipsResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *RelationshipsRawService) CreateParentChildRelationship(ctx context.Context, params RelationshipsCreateParentChildRelationshipParams) (*RawResponse[RelationshipsCreateParentChildRelationshipResponse], error) {
	path := "/v2p3/parents/" + url.PathEscape(fmt.Sprint(params.ParentId)) + "/children"
	query := url.Values{}
	var out RelationshipsCreateParentChildRelationshipResponse
	meta, err := service.client.doRaw(ctx, "post", path, query, params.Body, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[RelationshipsCreateParentChildRelationshipResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *RelationshipsRawService) BulkUpdateParentChildrenRelationships(ctx context.Context, params RelationshipsBulkUpdateParentChildrenRelationshipsParams) (*RawResponse[RelationshipsBulkUpdateParentChildrenRelationshipsResponse], error) {
	path := "/v2p3/parents/" + url.PathEscape(fmt.Sprint(params.ParentId)) + "/children"
	query := url.Values{}
	var out RelationshipsBulkUpdateParentChildrenRelationshipsResponse
	meta, err := service.client.doRaw(ctx, "put", path, query, params.Body, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[RelationshipsBulkUpdateParentChildrenRelationshipsResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *RelationshipsRawService) GetParentChildRelationship(ctx context.Context, params RelationshipsGetParentChildRelationshipParams) (*RawResponse[RelationshipsGetParentChildRelationshipResponse], error) {
	path := "/v2p3/parents/" + url.PathEscape(fmt.Sprint(params.ParentId)) + "/children/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out RelationshipsGetParentChildRelationshipResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[RelationshipsGetParentChildRelationshipResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *RelationshipsRawService) UpdateParentChildRelationship(ctx context.Context, params RelationshipsUpdateParentChildRelationshipParams) (*RawResponse[RelationshipsUpdateParentChildRelationshipResponse], error) {
	path := "/v2p3/parents/" + url.PathEscape(fmt.Sprint(params.ParentId)) + "/children/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out RelationshipsUpdateParentChildRelationshipResponse
	meta, err := service.client.doRaw(ctx, "put", path, query, params.Body, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[RelationshipsUpdateParentChildRelationshipResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}
