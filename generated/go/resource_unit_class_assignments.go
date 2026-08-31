package managebac_sdk

import (
	"context"
	"fmt"
	"net/url"
)

type UnitClassAssignmentsService struct {
	client *Client
}

func newUnitClassAssignmentsService(client *Client) *UnitClassAssignmentsService {
	service := &UnitClassAssignmentsService{client: client}

	return service
}

type UnitClassAssignmentsListUnitClassAssignmentsParams struct {
	ModifiedSince *string `query:"modified_since"`
	DeletedSince  *string `query:"deleted_since"`
	Archived      *bool   `query:"archived"`
	Page          *int64  `query:"page"`
	PerPage       *int64  `query:"per_page"`
}

func (service *UnitClassAssignmentsService) ListUnitClassAssignments(ctx context.Context, params UnitClassAssignmentsListUnitClassAssignmentsParams) (*UnitClassAssignmentsListUnitClassAssignmentsResponse, error) {
	path := "/v2p3/unit-class-assignments"
	query := url.Values{}
	if params.ModifiedSince != nil {
		query.Set("modified_since", fmt.Sprint(*params.ModifiedSince))
	}
	if params.DeletedSince != nil {
		query.Set("deleted_since", fmt.Sprint(*params.DeletedSince))
	}
	if params.Archived != nil {
		query.Set("archived", fmt.Sprint(*params.Archived))
	}
	if params.Page != nil {
		query.Set("page", fmt.Sprint(*params.Page))
	}
	if params.PerPage != nil {
		query.Set("per_page", fmt.Sprint(*params.PerPage))
	}
	var out UnitClassAssignmentsListUnitClassAssignmentsResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *UnitClassAssignmentsService) WithRawResponse() *UnitClassAssignmentsRawService {
	return &UnitClassAssignmentsRawService{client: service.client}
}

type UnitClassAssignmentsRawService struct {
	client *Client
}

func (service *UnitClassAssignmentsRawService) ListUnitClassAssignments(ctx context.Context, params UnitClassAssignmentsListUnitClassAssignmentsParams) (*RawResponse[UnitClassAssignmentsListUnitClassAssignmentsResponse], error) {
	path := "/v2p3/unit-class-assignments"
	query := url.Values{}
	if params.ModifiedSince != nil {
		query.Set("modified_since", fmt.Sprint(*params.ModifiedSince))
	}
	if params.DeletedSince != nil {
		query.Set("deleted_since", fmt.Sprint(*params.DeletedSince))
	}
	if params.Archived != nil {
		query.Set("archived", fmt.Sprint(*params.Archived))
	}
	if params.Page != nil {
		query.Set("page", fmt.Sprint(*params.Page))
	}
	if params.PerPage != nil {
		query.Set("per_page", fmt.Sprint(*params.PerPage))
	}
	var out UnitClassAssignmentsListUnitClassAssignmentsResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[UnitClassAssignmentsListUnitClassAssignmentsResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}
