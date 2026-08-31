package managebac_sdk

import (
	"context"
	"fmt"
	"net/url"
)

type OnlineAssessmentService struct {
	client *Client
}

func newOnlineAssessmentService(client *Client) *OnlineAssessmentService {
	service := &OnlineAssessmentService{client: client}

	return service
}

type OnlineAssessmentUpdateOnlineAssessmentParams struct {
	TaskId        int64  `path:"task_id"`
	AssessPrepUid string `path:"assess_prep_uid"`
	Body          OnlineAssessmentUpdateOnlineAssessmentRequest
}

func (service *OnlineAssessmentService) UpdateOnlineAssessment(ctx context.Context, params OnlineAssessmentUpdateOnlineAssessmentParams) (*OnlineAssessmentUpdateOnlineAssessmentResponse, error) {
	path := "/v2p3/tasks/" + url.PathEscape(fmt.Sprint(params.TaskId)) + "/online_assessments/" + url.PathEscape(fmt.Sprint(params.AssessPrepUid)) + ""
	query := url.Values{}
	var out OnlineAssessmentUpdateOnlineAssessmentResponse
	if err := service.client.do(ctx, "patch", path, query, params.Body, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *OnlineAssessmentService) WithRawResponse() *OnlineAssessmentRawService {
	return &OnlineAssessmentRawService{client: service.client}
}

type OnlineAssessmentRawService struct {
	client *Client
}

func (service *OnlineAssessmentRawService) UpdateOnlineAssessment(ctx context.Context, params OnlineAssessmentUpdateOnlineAssessmentParams) (*RawResponse[OnlineAssessmentUpdateOnlineAssessmentResponse], error) {
	path := "/v2p3/tasks/" + url.PathEscape(fmt.Sprint(params.TaskId)) + "/online_assessments/" + url.PathEscape(fmt.Sprint(params.AssessPrepUid)) + ""
	query := url.Values{}
	var out OnlineAssessmentUpdateOnlineAssessmentResponse
	meta, err := service.client.doRaw(ctx, "patch", path, query, params.Body, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[OnlineAssessmentUpdateOnlineAssessmentResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}
