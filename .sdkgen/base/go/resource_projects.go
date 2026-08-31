package managebac_sdk

import (
	"context"
	"fmt"
	"net/url"
)

type ProjectsService struct {
	client *Client
}

func newProjectsService(client *Client) *ProjectsService {
	service := &ProjectsService{client: client}

	return service
}

type ProjectsListYearGroupCasExperiencesStudentsParams struct {
	Id         int64   `path:"id"`
	StudentIds []int64 `query:"student_ids[]"`
	Page       *int64  `query:"page"`
	PerPage    *int64  `query:"per_page"`
}

type ProjectsGetYearGroupCasParams struct {
	Id int64 `path:"id"`
}

type ProjectsListYearGroupPblProposalStudentsDetailsParams struct {
	YearGroupId             int64 `path:"year_group_id"`
	ProjectId               int64 `path:"project_id"`
	Archived                *bool `query:"archived"`
	IncludeArchivedStudents *bool `query:"include_archived_students"`
}

type ProjectsListYearGroupPblReflectionsStudentsDetailsParams struct {
	YearGroupId             int64 `path:"year_group_id"`
	ProjectId               int64 `path:"project_id"`
	Archived                *bool `query:"archived"`
	IncludeArchivedStudents *bool `query:"include_archived_students"`
}

type ProjectsListYearGroupPblTodosStudentsDetailsParams struct {
	YearGroupId             int64  `path:"year_group_id"`
	ProjectId               int64  `path:"project_id"`
	Archived                *bool  `query:"archived"`
	IncludeArchivedStudents *bool  `query:"include_archived_students"`
	Page                    *int64 `query:"page"`
	PerPage                 *int64 `query:"per_page"`
}

type ProjectsListYearGroupPblJournalStudentsDetailsParams struct {
	YearGroupId             int64 `path:"year_group_id"`
	ProjectId               int64 `path:"project_id"`
	Archived                *bool `query:"archived"`
	IncludeArchivedStudents *bool `query:"include_archived_students"`
}

type ProjectsListYearGroupPblDocumentsStudentsDetailsParams struct {
	YearGroupId             int64 `path:"year_group_id"`
	ProjectId               int64 `path:"project_id"`
	Archived                *bool `query:"archived"`
	IncludeArchivedStudents *bool `query:"include_archived_students"`
}

type ProjectsListYearGroupPblPresentationStudentsDetailsParams struct {
	YearGroupId             int64 `path:"year_group_id"`
	ProjectId               int64 `path:"project_id"`
	Archived                *bool `query:"archived"`
	IncludeArchivedStudents *bool `query:"include_archived_students"`
}

type ProjectsListYearGroupPblNotesAndInterviewsStudentsDetailsParams struct {
	YearGroupId             int64 `path:"year_group_id"`
	ProjectId               int64 `path:"project_id"`
	Archived                *bool `query:"archived"`
	IncludeArchivedStudents *bool `query:"include_archived_students"`
}

type ProjectsListYearGroupProjectBasedLearningTemplatesParams struct {
	Id       int64 `path:"id"`
	Archived *bool `query:"archived"`
}

func (service *ProjectsService) ListYearGroupCasExperiencesStudents(ctx context.Context, params ProjectsListYearGroupCasExperiencesStudentsParams) (*CasExperiencesStudentsResponse, error) {
	path := "/v2p3/year-groups/" + url.PathEscape(fmt.Sprint(params.Id)) + "/projects/cas/experiences/students"
	query := url.Values{}
	for _, v := range params.StudentIds {
		query.Add("student_ids[]", fmt.Sprint(v))
	}
	if params.Page != nil {
		query.Set("page", fmt.Sprint(*params.Page))
	}
	if params.PerPage != nil {
		query.Set("per_page", fmt.Sprint(*params.PerPage))
	}
	var out CasExperiencesStudentsResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *ProjectsService) GetYearGroupCas(ctx context.Context, params ProjectsGetYearGroupCasParams) (*CasSettings, error) {
	path := "/v2p3/year-groups/" + url.PathEscape(fmt.Sprint(params.Id)) + "/projects/cas"
	query := url.Values{}
	var out CasSettings
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *ProjectsService) ListYearGroupPblProposalStudentsDetails(ctx context.Context, params ProjectsListYearGroupPblProposalStudentsDetailsParams) error {
	path := "/v2p3/year-groups/" + url.PathEscape(fmt.Sprint(params.YearGroupId)) + "/projects/pbl/" + url.PathEscape(fmt.Sprint(params.ProjectId)) + "/proposal/students"
	query := url.Values{}
	if params.Archived != nil {
		query.Set("archived", fmt.Sprint(*params.Archived))
	}
	if params.IncludeArchivedStudents != nil {
		query.Set("include_archived_students", fmt.Sprint(*params.IncludeArchivedStudents))
	}
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *ProjectsService) ListYearGroupPblReflectionsStudentsDetails(ctx context.Context, params ProjectsListYearGroupPblReflectionsStudentsDetailsParams) error {
	path := "/v2p3/year-groups/" + url.PathEscape(fmt.Sprint(params.YearGroupId)) + "/projects/pbl/" + url.PathEscape(fmt.Sprint(params.ProjectId)) + "/reflections/students"
	query := url.Values{}
	if params.Archived != nil {
		query.Set("archived", fmt.Sprint(*params.Archived))
	}
	if params.IncludeArchivedStudents != nil {
		query.Set("include_archived_students", fmt.Sprint(*params.IncludeArchivedStudents))
	}
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *ProjectsService) ListYearGroupPblTodosStudentsDetails(ctx context.Context, params ProjectsListYearGroupPblTodosStudentsDetailsParams) error {
	path := "/v2p3/year-groups/" + url.PathEscape(fmt.Sprint(params.YearGroupId)) + "/projects/pbl/" + url.PathEscape(fmt.Sprint(params.ProjectId)) + "/todos/students"
	query := url.Values{}
	if params.Archived != nil {
		query.Set("archived", fmt.Sprint(*params.Archived))
	}
	if params.IncludeArchivedStudents != nil {
		query.Set("include_archived_students", fmt.Sprint(*params.IncludeArchivedStudents))
	}
	if params.Page != nil {
		query.Set("page", fmt.Sprint(*params.Page))
	}
	if params.PerPage != nil {
		query.Set("per_page", fmt.Sprint(*params.PerPage))
	}
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *ProjectsService) ListYearGroupPblJournalStudentsDetails(ctx context.Context, params ProjectsListYearGroupPblJournalStudentsDetailsParams) error {
	path := "/v2p3/year-groups/" + url.PathEscape(fmt.Sprint(params.YearGroupId)) + "/projects/pbl/" + url.PathEscape(fmt.Sprint(params.ProjectId)) + "/journal/students"
	query := url.Values{}
	if params.Archived != nil {
		query.Set("archived", fmt.Sprint(*params.Archived))
	}
	if params.IncludeArchivedStudents != nil {
		query.Set("include_archived_students", fmt.Sprint(*params.IncludeArchivedStudents))
	}
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *ProjectsService) ListYearGroupPblDocumentsStudentsDetails(ctx context.Context, params ProjectsListYearGroupPblDocumentsStudentsDetailsParams) error {
	path := "/v2p3/year-groups/" + url.PathEscape(fmt.Sprint(params.YearGroupId)) + "/projects/pbl/" + url.PathEscape(fmt.Sprint(params.ProjectId)) + "/documents/students"
	query := url.Values{}
	if params.Archived != nil {
		query.Set("archived", fmt.Sprint(*params.Archived))
	}
	if params.IncludeArchivedStudents != nil {
		query.Set("include_archived_students", fmt.Sprint(*params.IncludeArchivedStudents))
	}
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *ProjectsService) ListYearGroupPblPresentationStudentsDetails(ctx context.Context, params ProjectsListYearGroupPblPresentationStudentsDetailsParams) error {
	path := "/v2p3/year-groups/" + url.PathEscape(fmt.Sprint(params.YearGroupId)) + "/projects/pbl/" + url.PathEscape(fmt.Sprint(params.ProjectId)) + "/presentation/students"
	query := url.Values{}
	if params.Archived != nil {
		query.Set("archived", fmt.Sprint(*params.Archived))
	}
	if params.IncludeArchivedStudents != nil {
		query.Set("include_archived_students", fmt.Sprint(*params.IncludeArchivedStudents))
	}
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *ProjectsService) ListYearGroupPblNotesAndInterviewsStudentsDetails(ctx context.Context, params ProjectsListYearGroupPblNotesAndInterviewsStudentsDetailsParams) error {
	path := "/v2p3/year-groups/" + url.PathEscape(fmt.Sprint(params.YearGroupId)) + "/projects/pbl/" + url.PathEscape(fmt.Sprint(params.ProjectId)) + "/notes_and_interviews/students"
	query := url.Values{}
	if params.Archived != nil {
		query.Set("archived", fmt.Sprint(*params.Archived))
	}
	if params.IncludeArchivedStudents != nil {
		query.Set("include_archived_students", fmt.Sprint(*params.IncludeArchivedStudents))
	}
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *ProjectsService) ListYearGroupProjectBasedLearningTemplates(ctx context.Context, params ProjectsListYearGroupProjectBasedLearningTemplatesParams) error {
	path := "/v2p3/year-groups/" + url.PathEscape(fmt.Sprint(params.Id)) + "/projects/pbl"
	query := url.Values{}
	if params.Archived != nil {
		query.Set("archived", fmt.Sprint(*params.Archived))
	}
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *ProjectsService) WithRawResponse() *ProjectsRawService {
	return &ProjectsRawService{client: service.client}
}

type ProjectsRawService struct {
	client *Client
}

func (service *ProjectsRawService) ListYearGroupCasExperiencesStudents(ctx context.Context, params ProjectsListYearGroupCasExperiencesStudentsParams) (*RawResponse[CasExperiencesStudentsResponse], error) {
	path := "/v2p3/year-groups/" + url.PathEscape(fmt.Sprint(params.Id)) + "/projects/cas/experiences/students"
	query := url.Values{}
	for _, v := range params.StudentIds {
		query.Add("student_ids[]", fmt.Sprint(v))
	}
	if params.Page != nil {
		query.Set("page", fmt.Sprint(*params.Page))
	}
	if params.PerPage != nil {
		query.Set("per_page", fmt.Sprint(*params.PerPage))
	}
	var out CasExperiencesStudentsResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[CasExperiencesStudentsResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *ProjectsRawService) GetYearGroupCas(ctx context.Context, params ProjectsGetYearGroupCasParams) (*RawResponse[CasSettings], error) {
	path := "/v2p3/year-groups/" + url.PathEscape(fmt.Sprint(params.Id)) + "/projects/cas"
	query := url.Values{}
	var out CasSettings
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[CasSettings]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}
