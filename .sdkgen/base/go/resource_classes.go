package managebac_sdk

import (
	"context"
	"fmt"
	"net/url"
)

type ClassesService struct {
	client *Client
}

func newClassesService(client *Client) *ClassesService {
	service := &ClassesService{client: client}

	return service
}

type ClassesListClassesParams struct {
	ModifiedSince *string `query:"modified_since"`
	DeletedSince  *string `query:"deleted_since"`
	Page          *string `query:"page"`
	PerPage       *string `query:"per_page"`
	Archived      *bool   `query:"archived"`
}

type ClassesCreateClassParams struct {
	Body CreateClass
}

type ClassesGetClassByIdParams struct {
	Id int64 `path:"id"`
}

type ClassesUpdateClassParams struct {
	Id   int64 `path:"id"`
	Body UpdateClass
}

type ClassesAddStudentsToClassParams struct {
	Id   int64 `path:"id"`
	Body ClassesAddStudentsToClassRequest
}

type ClassesRemoveStudentsFromClassParams struct {
	Id   int64 `path:"id"`
	Body ClassesRemoveStudentsFromClassRequest
}

type ClassesGetClassTermsParams struct {
	Id             int64  `path:"id"`
	AcademicYearId *int64 `query:"academic_year_id"`
	ActiveOnly     *bool  `query:"active_only"`
}

type ClassesAddTeachersToClassParams struct {
	ClassId int64 `path:"class_id"`
	Body    ClassesAddTeachersToClassRequest
}

func (service *ClassesService) ListClasses(ctx context.Context, params ClassesListClassesParams) (*ClassesListClassesResponse, error) {
	path := "/v2p3/classes"
	query := url.Values{}
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
	if params.Archived != nil {
		query.Set("archived", fmt.Sprint(*params.Archived))
	}
	var out ClassesListClassesResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *ClassesService) CreateClass(ctx context.Context, params ClassesCreateClassParams) (*Class, error) {
	path := "/v2p3/classes"
	query := url.Values{}
	var out Class
	if err := service.client.do(ctx, "post", path, query, params.Body, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *ClassesService) GetClassById(ctx context.Context, params ClassesGetClassByIdParams) (*ClassesGetClassByIdResponse, error) {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out ClassesGetClassByIdResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *ClassesService) UpdateClass(ctx context.Context, params ClassesUpdateClassParams) (*Class, error) {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out Class
	if err := service.client.do(ctx, "patch", path, query, params.Body, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *ClassesService) AddStudentsToClass(ctx context.Context, params ClassesAddStudentsToClassParams) error {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.Id)) + "/add_students"
	query := url.Values{}
	return service.client.do(ctx, "post", path, query, params.Body, nil)
}

func (service *ClassesService) RemoveStudentsFromClass(ctx context.Context, params ClassesRemoveStudentsFromClassParams) error {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.Id)) + "/remove_students"
	query := url.Values{}
	return service.client.do(ctx, "post", path, query, params.Body, nil)
}

func (service *ClassesService) GetClassTerms(ctx context.Context, params ClassesGetClassTermsParams) error {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.Id)) + "/terms"
	query := url.Values{}
	if params.AcademicYearId != nil {
		query.Set("academic_year_id", fmt.Sprint(*params.AcademicYearId))
	}
	if params.ActiveOnly != nil {
		query.Set("active_only", fmt.Sprint(*params.ActiveOnly))
	}
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *ClassesService) AddTeachersToClass(ctx context.Context, params ClassesAddTeachersToClassParams) error {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.ClassId)) + "/teachers/add_teachers"
	query := url.Values{}
	return service.client.do(ctx, "post", path, query, params.Body, nil)
}

func (service *ClassesService) WithRawResponse() *ClassesRawService {
	return &ClassesRawService{client: service.client}
}

type ClassesRawService struct {
	client *Client
}

func (service *ClassesRawService) ListClasses(ctx context.Context, params ClassesListClassesParams) (*RawResponse[ClassesListClassesResponse], error) {
	path := "/v2p3/classes"
	query := url.Values{}
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
	if params.Archived != nil {
		query.Set("archived", fmt.Sprint(*params.Archived))
	}
	var out ClassesListClassesResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[ClassesListClassesResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *ClassesRawService) CreateClass(ctx context.Context, params ClassesCreateClassParams) (*RawResponse[Class], error) {
	path := "/v2p3/classes"
	query := url.Values{}
	var out Class
	meta, err := service.client.doRaw(ctx, "post", path, query, params.Body, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[Class]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *ClassesRawService) GetClassById(ctx context.Context, params ClassesGetClassByIdParams) (*RawResponse[ClassesGetClassByIdResponse], error) {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out ClassesGetClassByIdResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[ClassesGetClassByIdResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *ClassesRawService) UpdateClass(ctx context.Context, params ClassesUpdateClassParams) (*RawResponse[Class], error) {
	path := "/v2p3/classes/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	var out Class
	meta, err := service.client.doRaw(ctx, "patch", path, query, params.Body, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[Class]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}
