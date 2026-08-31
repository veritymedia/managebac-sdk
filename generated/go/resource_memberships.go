package managebac_sdk

import (
	"context"
	"fmt"
	"net/url"
)

type MembershipsService struct {
	client *Client
}

func newMembershipsService(client *Client) *MembershipsService {
	service := &MembershipsService{client: client}

	return service
}

type MembershipsGetStudentsForClassParams struct {
	ClassId                 int64   `path:"class_id"`
	IncludeArchivedStudents *bool   `query:"include_archived_students"`
	StudentIds              []int64 `query:"student_ids"`
}

type MembershipsListMembershipsParams struct {
	ClassIds       []int64 `query:"class_ids[]"`
	ModifiedSince  *string `query:"modified_since"`
	DeletedSince   *string `query:"deleted_since"`
	Page           *string `query:"page"`
	PerPage        *string `query:"per_page"`
	UserIds        []int64 `query:"user_ids[]"`
	UserIds2       []int64 `query:"user_ids"`
	ClassHappensOn *string `query:"class_happens_on"`
	StudentIds     []int64 `query:"student_ids"`
}

type MembershipsGetStudentMembershipsParams struct {
	Id       int64 `path:"id"`
	Archived *bool `query:"archived"`
}

type MembershipsGetTeacherMembershipsParams struct {
	ClassId int64 `path:"class_id"`
}

type MembershipsRemoveTeachersFromClassParams struct {
	ClassId int64 `path:"class_id"`
	Body    MembershipsRemoveTeachersFromClassRequest
}

func (service *MembershipsService) GetStudentsForClass(ctx context.Context, params MembershipsGetStudentsForClassParams) error {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.ClassId)) + "/students"
	query := url.Values{}
	if params.IncludeArchivedStudents != nil {
		query.Set("include_archived_students", fmt.Sprint(*params.IncludeArchivedStudents))
	}
	for _, v := range params.StudentIds {
		query.Add("student_ids", fmt.Sprint(v))
	}
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *MembershipsService) ListMemberships(ctx context.Context, params MembershipsListMembershipsParams) (*MembershipsListMembershipsResponse, error) {
	path := "/v2p3/memberships"
	query := url.Values{}
	for _, v := range params.ClassIds {
		query.Add("class_ids[]", fmt.Sprint(v))
	}
	if params.ModifiedSince != nil {
		query.Set("modified_since", fmt.Sprint(*params.ModifiedSince))
	}
	if params.DeletedSince != nil {
		query.Set("deleted_since", fmt.Sprint(*params.DeletedSince))
	}
	if params.Page != nil {
		query.Set("page", fmt.Sprint(*params.Page))
	}
	if params.PerPage != nil {
		query.Set("per_page", fmt.Sprint(*params.PerPage))
	}
	for _, v := range params.UserIds {
		query.Add("user_ids[]", fmt.Sprint(v))
	}
	for _, v := range params.UserIds2 {
		query.Add("user_ids", fmt.Sprint(v))
	}
	if params.ClassHappensOn != nil {
		query.Set("class_happens_on", fmt.Sprint(*params.ClassHappensOn))
	}
	for _, v := range params.StudentIds {
		query.Add("student_ids", fmt.Sprint(v))
	}
	var out MembershipsListMembershipsResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *MembershipsService) GetStudentMemberships(ctx context.Context, params MembershipsGetStudentMembershipsParams) (*MembershipsGetStudentMembershipsResponse, error) {
	path := "/v2p3/students/" + url.PathEscape(fmt.Sprint(params.Id)) + "/memberships"
	query := url.Values{}
	if params.Archived != nil {
		query.Set("archived", fmt.Sprint(*params.Archived))
	}
	var out MembershipsGetStudentMembershipsResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *MembershipsService) GetTeacherMemberships(ctx context.Context, params MembershipsGetTeacherMembershipsParams) error {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.ClassId)) + "/teachers"
	query := url.Values{}
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *MembershipsService) RemoveTeachersFromClass(ctx context.Context, params MembershipsRemoveTeachersFromClassParams) error {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.ClassId)) + "/teachers/remove_teachers"
	query := url.Values{}
	return service.client.do(ctx, "delete", path, query, params.Body, nil)
}

func (service *MembershipsService) WithRawResponse() *MembershipsRawService {
	return &MembershipsRawService{client: service.client}
}

type MembershipsRawService struct {
	client *Client
}

func (service *MembershipsRawService) ListMemberships(ctx context.Context, params MembershipsListMembershipsParams) (*RawResponse[MembershipsListMembershipsResponse], error) {
	path := "/v2p3/memberships"
	query := url.Values{}
	for _, v := range params.ClassIds {
		query.Add("class_ids[]", fmt.Sprint(v))
	}
	if params.ModifiedSince != nil {
		query.Set("modified_since", fmt.Sprint(*params.ModifiedSince))
	}
	if params.DeletedSince != nil {
		query.Set("deleted_since", fmt.Sprint(*params.DeletedSince))
	}
	if params.Page != nil {
		query.Set("page", fmt.Sprint(*params.Page))
	}
	if params.PerPage != nil {
		query.Set("per_page", fmt.Sprint(*params.PerPage))
	}
	for _, v := range params.UserIds {
		query.Add("user_ids[]", fmt.Sprint(v))
	}
	for _, v := range params.UserIds2 {
		query.Add("user_ids", fmt.Sprint(v))
	}
	if params.ClassHappensOn != nil {
		query.Set("class_happens_on", fmt.Sprint(*params.ClassHappensOn))
	}
	for _, v := range params.StudentIds {
		query.Add("student_ids", fmt.Sprint(v))
	}
	var out MembershipsListMembershipsResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[MembershipsListMembershipsResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *MembershipsRawService) GetStudentMemberships(ctx context.Context, params MembershipsGetStudentMembershipsParams) (*RawResponse[MembershipsGetStudentMembershipsResponse], error) {
	path := "/v2p3/students/" + url.PathEscape(fmt.Sprint(params.Id)) + "/memberships"
	query := url.Values{}
	if params.Archived != nil {
		query.Set("archived", fmt.Sprint(*params.Archived))
	}
	var out MembershipsGetStudentMembershipsResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[MembershipsGetStudentMembershipsResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}
