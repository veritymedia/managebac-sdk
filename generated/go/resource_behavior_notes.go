package managebac_sdk

import (
	"context"
	"fmt"
	"net/url"
)

type BehaviorNotesService struct {
	client *Client
}

func newBehaviorNotesService(client *Client) *BehaviorNotesService {
	service := &BehaviorNotesService{client: client}

	return service
}

type BehaviorNotesListBehaviorNotesParams struct {
	ModifiedSince *string `query:"modified_since"`
	Page          *string `query:"page"`
	PerPage       *string `query:"per_page"`
	StudentIds    []int64 `query:"student_ids"`
}

func (service *BehaviorNotesService) ListBehaviorNotes(ctx context.Context, params BehaviorNotesListBehaviorNotesParams) (*BehaviorNotesListBehaviorNotesResponse, error) {
	path := "/v2p3/behavior/notes"
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
	for _, v := range params.StudentIds {
		query.Add("student_ids", fmt.Sprint(v))
	}
	var out BehaviorNotesListBehaviorNotesResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *BehaviorNotesService) WithRawResponse() *BehaviorNotesRawService {
	return &BehaviorNotesRawService{client: service.client}
}

type BehaviorNotesRawService struct {
	client *Client
}

func (service *BehaviorNotesRawService) ListBehaviorNotes(ctx context.Context, params BehaviorNotesListBehaviorNotesParams) (*RawResponse[BehaviorNotesListBehaviorNotesResponse], error) {
	path := "/v2p3/behavior/notes"
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
	for _, v := range params.StudentIds {
		query.Add("student_ids", fmt.Sprint(v))
	}
	var out BehaviorNotesListBehaviorNotesResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[BehaviorNotesListBehaviorNotesResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}
