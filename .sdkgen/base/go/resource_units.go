package managebac_sdk

import (
	"context"
	"fmt"
	"net/url"
)

type UnitsService struct {
	client *Client
}

func newUnitsService(client *Client) *UnitsService {
	service := &UnitsService{client: client}

	return service
}

type UnitsListUnitsParams struct {
	ModifiedSince *string `query:"modified_since"`
	Page          *string `query:"page"`
	PerPage       *string `query:"per_page"`
	Archived      *bool   `query:"archived"`
	ClassIds      *string `query:"class_ids"`
}

type UnitsGetUnitByIdParams struct {
	Id int64 `path:"id"`
}

func (service *UnitsService) ListUnits(ctx context.Context, params UnitsListUnitsParams) (*UnitsListUnitsResponse, error) {
	path := "/v2p3/units"
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
	if params.ClassIds != nil {
		query.Set("class_ids", fmt.Sprint(*params.ClassIds))
	}
	var out UnitsListUnitsResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *UnitsService) GetUnitById(ctx context.Context, params UnitsGetUnitByIdParams) (*UnitsGetUnitByIdResponse, error) {
	path := "/v2p3/units/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out UnitsGetUnitByIdResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *UnitsService) WithRawResponse() *UnitsRawService {
	return &UnitsRawService{client: service.client}
}

type UnitsRawService struct {
	client *Client
}

func (service *UnitsRawService) ListUnits(ctx context.Context, params UnitsListUnitsParams) (*RawResponse[UnitsListUnitsResponse], error) {
	path := "/v2p3/units"
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
	if params.ClassIds != nil {
		query.Set("class_ids", fmt.Sprint(*params.ClassIds))
	}
	var out UnitsListUnitsResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[UnitsListUnitsResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *UnitsRawService) GetUnitById(ctx context.Context, params UnitsGetUnitByIdParams) (*RawResponse[UnitsGetUnitByIdResponse], error) {
	path := "/v2p3/units/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out UnitsGetUnitByIdResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[UnitsGetUnitByIdResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}
