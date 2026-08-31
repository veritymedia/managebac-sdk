package managebac_sdk

type YearGroupPblPblItemSubject struct {
	Id    *int64  `json:"id,omitempty"`
	Title *string `json:"title,omitempty"`
}

type YearGroupPblPblItemComponentsItem struct {
	Slug    *string `json:"slug,omitempty"`
	Label   *string `json:"label,omitempty"`
	Enabled *bool   `json:"enabled,omitempty"`
}

type YearGroupPblPblItem struct {
	Id           *int64                              `json:"id,omitempty"`
	Title        *string                             `json:"title,omitempty"`
	Abbreviation *string                             `json:"abbreviation,omitempty"`
	Archived     *bool                               `json:"archived,omitempty"`
	Subject      *YearGroupPblPblItemSubject         `json:"subject,omitempty"`
	Description  *string                             `json:"description,omitempty"`
	Components   []YearGroupPblPblItemComponentsItem `json:"components,omitempty"`
}

type YearGroupPbl struct {
	Pbl []YearGroupPblPblItem `json:"pbl,omitempty"`
}

type NotFound struct {
	Error *string `json:"error,omitempty"`
}

type AccessDeniedError struct {
	Error *string `json:"error,omitempty"`
}

type InvalidPayloadError struct {
	Error *string `json:"error,omitempty"`
}

type YearGroup struct {
	Id             *int64  `json:"id,omitempty"`
	Name           *string `json:"name,omitempty"`
	ShortName      *string `json:"short_name,omitempty"`
	Program        *string `json:"program,omitempty"`
	ProgramCode    *string `json:"program_code,omitempty"`
	Grade          *string `json:"grade,omitempty"`
	Archived       *bool   `json:"archived,omitempty"`
	GradeNumber    *int64  `json:"grade_number,omitempty"`
	GraduationYear *int64  `json:"graduation_year,omitempty"`
	StudentIds     []int64 `json:"student_ids,omitempty"`
}

type ToggleSchoolSubjectsRequest struct {
	SubjectIds []int64 `json:"subject_ids,omitempty"`
}

type AuthPermissionsResponse struct {
	Permissions []string `json:"permissions,omitempty"`
}

type OauthTokenRequestGrantType string

const (
	OauthTokenRequestGrantTypeClientCredentials OauthTokenRequestGrantType = "client_credentials"
)

type OauthTokenRequest struct {
	GrantType    OauthTokenRequestGrantType `json:"grant_type"`
	ClientId     string                     `json:"client_id"`
	ClientSecret string                     `json:"client_secret"`
	Scope        *string                    `json:"scope,omitempty"`
}

type OauthTokenResponseTokenType string

const (
	OauthTokenResponseTokenTypeBearer OauthTokenResponseTokenType = "Bearer"
)

type OauthTokenResponse struct {
	AccessToken string                      `json:"access_token"`
	TokenType   OauthTokenResponseTokenType `json:"token_type"`
	ExpiresIn   int64                       `json:"expires_in"`
	Scope       string                      `json:"scope"`
	CreatedAt   int64                       `json:"created_at"`
}

type OauthTokenError struct {
	Error            string `json:"error"`
	ErrorDescription string `json:"error_description"`
}

type SubjectRequestSubject struct {
	SubjectGroupId          *int64  `json:"subject_group_id,omitempty"`
	Name                    *string `json:"name,omitempty"`
	Title                   *string `json:"title,omitempty"`
	Description             *string `json:"description,omitempty"`
	ScopeAndSequenceBasedOn *string `json:"scope_and_sequence_based_on,omitempty"`
	Sl                      *bool   `json:"sl,omitempty"`
	Hl                      *bool   `json:"hl,omitempty"`
	Enabled                 *bool   `json:"enabled,omitempty"`
	Code                    *string `json:"code,omitempty"`
}

type SubjectRequest struct {
	Subject *SubjectRequestSubject `json:"subject,omitempty"`
}

type SubjectsResponseSubjectsItem struct {
	Id                      *int64   `json:"id,omitempty"`
	SubjectGroupId          *int64   `json:"subject_group_id,omitempty"`
	Custom                  *bool    `json:"custom,omitempty"`
	Name                    *string  `json:"name,omitempty"`
	Title                   *string  `json:"title,omitempty"`
	Sl                      *bool    `json:"sl,omitempty"`
	Hl                      *bool    `json:"hl,omitempty"`
	SlCode                  *string  `json:"sl_code,omitempty"`
	HlCode                  *string  `json:"hl_code,omitempty"`
	Description             *string  `json:"description,omitempty"`
	ScopeAndSequenceBasedOn *string  `json:"scope_and_sequence_based_on,omitempty"`
	UpdatedAt               *string  `json:"updated_at,omitempty"`
	SelfTaught              *bool    `json:"self_taught,omitempty"`
	Phases                  []string `json:"phases,omitempty"`
	Levels                  []string `json:"levels,omitempty"`
	Enabled                 *bool    `json:"enabled,omitempty"`
}

type SubjectsResponse struct {
	Meta     *Meta                          `json:"meta,omitempty"`
	Subjects []SubjectsResponseSubjectsItem `json:"subjects,omitempty"`
}

type SubjectResponseSubject struct {
	Id                      *int64   `json:"id,omitempty"`
	SubjectGroupId          *int64   `json:"subject_group_id,omitempty"`
	Custom                  *bool    `json:"custom,omitempty"`
	Name                    *string  `json:"name,omitempty"`
	Title                   *string  `json:"title,omitempty"`
	Sl                      *bool    `json:"sl,omitempty"`
	Hl                      *bool    `json:"hl,omitempty"`
	Code                    *string  `json:"code,omitempty"`
	Description             *string  `json:"description,omitempty"`
	ScopeAndSequenceBasedOn *string  `json:"scope_and_sequence_based_on,omitempty"`
	UpdatedAt               *string  `json:"updated_at,omitempty"`
	SelfTaught              *bool    `json:"self_taught,omitempty"`
	Phases                  []string `json:"phases,omitempty"`
	Levels                  []string `json:"levels,omitempty"`
	Enabled                 *bool    `json:"enabled,omitempty"`
}

type SubjectResponse struct {
	Subject *SubjectResponseSubject `json:"subject,omitempty"`
}

type SubjectGroupRequestSubjectGroup struct {
	Name     *string `json:"name,omitempty"`
	MaxPhase *string `json:"max_phase,omitempty"`
}

type SubjectGroupRequest struct {
	SubjectGroup *SubjectGroupRequestSubjectGroup `json:"subject_group,omitempty"`
}

type SubjectGroupResponseSubjectGroup struct {
	Id        *int64  `json:"id,omitempty"`
	Name      *string `json:"name,omitempty"`
	Custom    *bool   `json:"custom,omitempty"`
	MaxPhase  *string `json:"max_phase,omitempty"`
	Program   *string `json:"program,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

type SubjectGroupResponse struct {
	SubjectGroup *SubjectGroupResponseSubjectGroup `json:"subject_group,omitempty"`
}

type SubjectGroupsResponseSubjectGroupsItem struct {
	Id        *int64  `json:"id,omitempty"`
	Name      *string `json:"name,omitempty"`
	MaxPhase  *string `json:"max_phase,omitempty"`
	Program   *string `json:"program,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

type SubjectGroupsResponse struct {
	Meta          *Meta                                    `json:"meta,omitempty"`
	SubjectGroups []SubjectGroupsResponseSubjectGroupsItem `json:"subject_groups,omitempty"`
}

type TermGradeScale struct {
	Score       *float64 `json:"score,omitempty"`
	Mark        *string  `json:"mark,omitempty"`
	ProgramCode *string  `json:"program_code,omitempty"`
}

type ProgramGradesItem struct {
	GradeNumber *int64  `json:"grade_number,omitempty"`
	Uid         *int64  `json:"uid,omitempty"`
	Name        *string `json:"name,omitempty"`
	Enabled     *bool   `json:"enabled,omitempty"`
	Program     *string `json:"program,omitempty"`
}

type Program struct {
	Name      *string             `json:"name,omitempty"`
	ShortName *string             `json:"short_name,omitempty"`
	Uid       *int64              `json:"uid,omitempty"`
	Code      *string             `json:"code,omitempty"`
	Grades    []ProgramGradesItem `json:"grades,omitempty"`
}

type BehaviorNote struct {
	Id              *int64  `json:"id,omitempty"`
	StudentId       *string `json:"student_id,omitempty"`
	Email           *string `json:"email,omitempty"`
	FirstName       *string `json:"first_name,omitempty"`
	LastName        *string `json:"last_name,omitempty"`
	Grade           *string `json:"grade,omitempty"`
	IncidentTime    *string `json:"incident_time,omitempty"`
	BehaviorType    *string `json:"behavior_type,omitempty"`
	Notes           *string `json:"notes,omitempty"`
	NextStep        *string `json:"next_step,omitempty"`
	NextStepDate    *string `json:"next_step_date,omitempty"`
	ReportedBy      *string `json:"reported_by,omitempty"`
	HomeroomAdvisor *string `json:"homeroom_advisor,omitempty"`
}

type MembershipLevel string

const (
	MembershipLevel_0 MembershipLevel = "0"
	MembershipLevel_1 MembershipLevel = "1"
)

type Membership struct {
	Id            *int64           `json:"id,omitempty"`
	UserId        *int64           `json:"user_id,omitempty"`
	Level         *MembershipLevel `json:"level,omitempty"`
	CreatedAt     *string          `json:"created_at,omitempty"`
	UpdatedAt     *string          `json:"updated_at,omitempty"`
	ClassId       *int64           `json:"class_id,omitempty"`
	UserEmail     *string          `json:"user_email,omitempty"`
	UniqClassId   *string          `json:"uniq_class_id,omitempty"`
	UniqStudentId *string          `json:"uniq_student_id,omitempty"`
	Role          *string          `json:"role,omitempty"`
}

type AcademicTerm struct {
	Name            string `json:"name"`
	StartsOn        string `json:"starts_on"`
	EndsOn          string `json:"ends_on"`
	Locked          *bool  `json:"locked,omitempty"`
	EnableExamGrade *bool  `json:"enable_exam_grade,omitempty"`
}

type AcademicTermRequest struct {
	AcademicTerm *AcademicTerm `json:"academic_term,omitempty"`
}

type AcademicYearRequestAcademicYear struct {
	TermsAttributes []AcademicTerm `json:"terms_attributes,omitempty"`
}

type AcademicYearRequest struct {
	AcademicYear *AcademicYearRequestAcademicYear `json:"academic_year,omitempty"`
}

type AcademicYearResponseAcademicYear struct {
	Id            *int64                   `json:"id,omitempty"`
	Name          *string                  `json:"name,omitempty"`
	StartsOn      *string                  `json:"starts_on,omitempty"`
	EndsOn        *string                  `json:"ends_on,omitempty"`
	UpdatedAt     *string                  `json:"updated_at,omitempty"`
	Program       *string                  `json:"program,omitempty"`
	AcademicTerms []AcademicTermAttributes `json:"academic_terms,omitempty"`
}

type AcademicYearResponse struct {
	AcademicYear *AcademicYearResponseAcademicYear `json:"academic_year,omitempty"`
}

type AcademicTermResponse struct {
	AcademicTerm *AcademicTermAttributes `json:"academic_term,omitempty"`
}

type AcademicTermAttributes struct {
	Id             *int64  `json:"id,omitempty"`
	AcademicYearId *int64  `json:"academic_year_id,omitempty"`
	Name           *string `json:"name,omitempty"`
	StartsOn       *string `json:"starts_on,omitempty"`
	EndsOn         *string `json:"ends_on,omitempty"`
	Locked         *bool   `json:"locked,omitempty"`
	ExamGrade      *bool   `json:"exam_grade,omitempty"`
	UpdatedAt      *string `json:"updated_at,omitempty"`
}

type AcademicYearCalendarResponseCalendarDatesItem struct {
	Date        *string `json:"date,omitempty"`
	RotationDay *int64  `json:"rotation_day,omitempty"`
}

type AcademicYearCalendarResponseCalendar struct {
	StartDate      *string                                         `json:"start_date,omitempty"`
	EndDate        *string                                         `json:"end_date,omitempty"`
	CalendarType   *string                                         `json:"calendar_type,omitempty"`
	RotationCycle  *int64                                          `json:"rotation_cycle,omitempty"`
	IgnoreHolidays *bool                                           `json:"ignore_holidays,omitempty"`
	DaysOff        []int64                                         `json:"days_off,omitempty"`
	Dates          []AcademicYearCalendarResponseCalendarDatesItem `json:"dates,omitempty"`
}

type AcademicYearCalendarResponse struct {
	Calendar *AcademicYearCalendarResponseCalendar `json:"calendar,omitempty"`
}

type AttendanceCategoriesResponseCategoriesItem struct {
	Id           *int64  `json:"id,omitempty"`
	Status       *int64  `json:"status,omitempty"`
	Label        *string `json:"label,omitempty"`
	Abbreviation *string `json:"abbreviation,omitempty"`
	Enabled      *bool   `json:"enabled,omitempty"`
	ColorCode    *string `json:"color_code,omitempty"`
}

type AttendanceCategoriesResponse struct {
	Categories []AttendanceCategoriesResponseCategoriesItem `json:"categories,omitempty"`
}

type AttendanceExcusalsResponseExcusalsItem struct {
	Id        *int64  `json:"id,omitempty"`
	StudentId *int64  `json:"student_id,omitempty"`
	ParentId  *int64  `json:"parent_id,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
	EndDate   *string `json:"end_date,omitempty"`
	Duration  *int64  `json:"duration,omitempty"`
	Comment   *string `json:"comment,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

type AttendanceExcusalsResponse struct {
	Excusals []AttendanceExcusalsResponseExcusalsItem `json:"excusals,omitempty"`
}

type CreateAttendanceExcusalRequestExcusal struct {
	ParentId  *int64  `json:"parent_id,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
	EndDate   *string `json:"end_date,omitempty"`
	Comment   *string `json:"comment,omitempty"`
}

type CreateAttendanceExcusalRequest struct {
	Excusal *CreateAttendanceExcusalRequestExcusal `json:"excusal,omitempty"`
}

type UpdateAttendanceExcusalRequestExcusal struct {
	EndDate *string `json:"end_date,omitempty"`
	Comment *string `json:"comment,omitempty"`
}

type UpdateAttendanceExcusalRequest struct {
	Excusal *UpdateAttendanceExcusalRequestExcusal `json:"excusal,omitempty"`
}

type UpsertNotFoundErrorErrors struct {
	Id []string `json:"id,omitempty"`
}

type UpsertNotFoundError struct {
	Index  *int64                     `json:"index,omitempty"`
	Errors *UpsertNotFoundErrorErrors `json:"errors,omitempty"`
	Status *string                    `json:"status,omitempty"`
}

type UpsertUnprocessableEntityError struct {
	Index  *int64  `json:"index,omitempty"`
	Errors any     `json:"errors,omitempty"`
	Status *string `json:"status,omitempty"`
}

type UpsertClassesClassesItemVariant1SubjectOption map[string]any

type UpsertClassesClassesItemVariant1 struct {
	Id              *int64                                         `json:"id,omitempty"`
	Archived        *bool                                          `json:"archived,omitempty"`
	Name            *string                                        `json:"name,omitempty"`
	Description     *string                                        `json:"description,omitempty"`
	Language        *string                                        `json:"language,omitempty"`
	UniqId          *string                                        `json:"uniq_id,omitempty"`
	ClassSection    *string                                        `json:"class_section,omitempty"`
	SubjectIds      []int64                                        `json:"subject_ids,omitempty"`
	Sl              *bool                                          `json:"sl,omitempty"`
	Hl              *bool                                          `json:"hl,omitempty"`
	SubjectOption   *UpsertClassesClassesItemVariant1SubjectOption `json:"subject_option,omitempty"`
	LockMemberships *string                                        `json:"lock_memberships,omitempty"`
}

type UpsertClassesClassesItem map[string]any

type UpsertClasses struct {
	Classes []UpsertClassesClassesItem `json:"classes,omitempty"`
}

type UpsertClassesResponseValueItemVariant3 struct {
	Index  *int64  `json:"index,omitempty"`
	Class  *Class  `json:"class,omitempty"`
	Status *string `json:"status,omitempty"`
}

type UpsertClassesResponseValueItem map[string]any

type UpsertClassesResponse = []UpsertClassesResponseValueItem

type UpdateClassSubjectOption map[string]any

type UpdateClass struct {
	Archived        *bool                     `json:"archived,omitempty"`
	Name            *string                   `json:"name,omitempty"`
	Description     *string                   `json:"description,omitempty"`
	Language        *string                   `json:"language,omitempty"`
	UniqId          *string                   `json:"uniq_id,omitempty"`
	ClassSection    *string                   `json:"class_section,omitempty"`
	SubjectIds      []int64                   `json:"subject_ids,omitempty"`
	Sl              *bool                     `json:"sl,omitempty"`
	Hl              *bool                     `json:"hl,omitempty"`
	SubjectOption   *UpdateClassSubjectOption `json:"subject_option,omitempty"`
	LockMemberships *string                   `json:"lock_memberships,omitempty"`
}

type CreateClassSubjectOption map[string]any

type CreateClass struct {
	StartTermId     *int64                    `json:"start_term_id,omitempty"`
	EndTermId       *int64                    `json:"end_term_id,omitempty"`
	SubjectId       *int64                    `json:"subject_id,omitempty"`
	Program         *string                   `json:"program,omitempty"`
	GradeNumber     *int64                    `json:"grade_number,omitempty"`
	Name            *string                   `json:"name,omitempty"`
	Description     *string                   `json:"description,omitempty"`
	Language        *string                   `json:"language,omitempty"`
	UniqId          *string                   `json:"uniq_id,omitempty"`
	ClassSection    *string                   `json:"class_section,omitempty"`
	SubjectIds      []int64                   `json:"subject_ids,omitempty"`
	Sl              *bool                     `json:"sl,omitempty"`
	Hl              *bool                     `json:"hl,omitempty"`
	SubjectOption   *CreateClassSubjectOption `json:"subject_option,omitempty"`
	LockMemberships *string                   `json:"lock_memberships,omitempty"`
}

type ClassSubjectsItem struct {
	Id             *int64  `json:"id,omitempty"`
	Name           *string `json:"name,omitempty"`
	SubjectGroupId *int64  `json:"subject_group_id,omitempty"`
	SubjectGroup   *string `json:"subject_group,omitempty"`
}

type ClassTeachersItem struct {
	TeacherId       *int64 `json:"teacher_id,omitempty"`
	ShowOnReports   *bool  `json:"show_on_reports,omitempty"`
	TeacherArchived *bool  `json:"teacher_archived,omitempty"`
}

type Class struct {
	Id               *int64              `json:"id,omitempty"`
	Name             *string             `json:"name,omitempty"`
	Description      *string             `json:"description,omitempty"`
	Language         *string             `json:"language,omitempty"`
	UniqId           *string             `json:"uniq_id,omitempty"`
	ClassSection     *string             `json:"class_section,omitempty"`
	StartTermId      *int64              `json:"start_term_id,omitempty"`
	EndTermId        *int64              `json:"end_term_id,omitempty"`
	CreatedAt        *string             `json:"created_at,omitempty"`
	UpdatedAt        *string             `json:"updated_at,omitempty"`
	Grade            *string             `json:"grade,omitempty"`
	GradeNumber      *int64              `json:"grade_number,omitempty"`
	ApplicableLevels []string            `json:"applicable_levels,omitempty"`
	Program          *string             `json:"program,omitempty"`
	ProgramCode      *string             `json:"program_code,omitempty"`
	SubjectId        *int64              `json:"subject_id,omitempty"`
	SubjectName      *string             `json:"subject_name,omitempty"`
	SubjectGroup     *string             `json:"subject_group,omitempty"`
	SubjectOption    *string             `json:"subject_option,omitempty"`
	LockMemberships  *string             `json:"lock_memberships,omitempty"`
	Archived         *bool               `json:"archived,omitempty"`
	Subjects         []ClassSubjectsItem `json:"subjects,omitempty"`
	Teachers         []ClassTeachersItem `json:"teachers,omitempty"`
}

type BulkUpdateStudentsStudentsItemLevel string

const (
	BulkUpdateStudentsStudentsItemLevelHl BulkUpdateStudentsStudentsItemLevel = "HL"
	BulkUpdateStudentsStudentsItemLevelSl BulkUpdateStudentsStudentsItemLevel = "SL"
)

type BulkUpdateStudentsStudentsItem struct {
	Id    *int64                               `json:"id,omitempty"`
	Level *BulkUpdateStudentsStudentsItemLevel `json:"level,omitempty"`
}

type BulkUpdateStudents struct {
	Students []BulkUpdateStudentsStudentsItem `json:"students"`
}

type BulkUpdateTeachersTeachersItem struct {
	Id            *int64 `json:"id,omitempty"`
	ShowOnReports *bool  `json:"show_on_reports,omitempty"`
}

type BulkUpdateTeachers struct {
	Teachers []BulkUpdateTeachersTeachersItem `json:"teachers"`
}

type BulkUpdateAttendanceAttendancesItem struct {
	StudentId *int64  `json:"student_id,omitempty"`
	Date      *string `json:"date,omitempty"`
	Period    *int64  `json:"period,omitempty"`
	Status    *int64  `json:"status,omitempty"`
	Notes     *string `json:"notes,omitempty"`
}

type BulkUpdateAttendance struct {
	Attendances []BulkUpdateAttendanceAttendancesItem `json:"attendances"`
}

type SetAttendanceSettingsRequestSettingsItem struct {
	Period   int64   `json:"period"`
	Day      int64   `json:"day"`
	Location *string `json:"location,omitempty"`
}

type SetAttendanceSettingsRequest struct {
	Settings []SetAttendanceSettingsRequestSettingsItem `json:"settings"`
}

type UpdateStudentAssessPrepTaskGrade struct {
	AssessPrepUuid    *string `json:"assess_prep_uuid,omitempty"`
	AssessPrepUid     *string `json:"assess_prep_uid,omitempty"`
	AuthorId          *int64  `json:"author_id,omitempty"`
	AssessmentFileUrl *string `json:"assessment_file_url,omitempty"`
	Points            *int64  `json:"points,omitempty"`
	Comment           *string `json:"comment,omitempty"`
	SubmissionId      *int64  `json:"submission_id,omitempty"`
	IsLate            *bool   `json:"is_late,omitempty"`
}

type UpdateStudentTaskGradeCriterionGradesItem struct {
	Label     *string `json:"label,omitempty"`
	Criterion *string `json:"criterion,omitempty"`
	Score     *int64  `json:"score,omitempty"`
}

type UpdateStudentTaskGrade struct {
	AuthorId        *int64                                      `json:"author_id,omitempty"`
	Points          *int64                                      `json:"points,omitempty"`
	Comment         *string                                     `json:"comment,omitempty"`
	Binary          *bool                                       `json:"binary,omitempty"`
	CriterionGrades []UpdateStudentTaskGradeCriterionGradesItem `json:"criterion_grades,omitempty"`
}

type StudentAssessPrepTaskGrade struct {
	AssessPrepUuid    *string `json:"assess_prep_uuid,omitempty"`
	AssessPrepUid     *string `json:"assess_prep_uid,omitempty"`
	AssessmentFileUrl *string `json:"assessment_file_url,omitempty"`
	SubmissionId      *int64  `json:"submission_id,omitempty"`
	AuthorId          *int64  `json:"author_id,omitempty"`
}

type BulkUpdateStudentTaskGradeRequestStudentsItemTaskGrade map[string]any

type BulkUpdateStudentTaskGradeRequestStudentsItem struct {
	Id        *int64                                                  `json:"id,omitempty"`
	TaskGrade *BulkUpdateStudentTaskGradeRequestStudentsItemTaskGrade `json:"task_grade,omitempty"`
}

type BulkUpdateStudentTaskGradeRequest struct {
	Students []BulkUpdateStudentTaskGradeRequestStudentsItem `json:"students,omitempty"`
}

type BulkDestroyStudentTaskGradeRequest struct {
	StudentIds []int64 `json:"student_ids,omitempty"`
}

type BulkStudentTaskGradeResponseValueItem struct {
	Id     *int64  `json:"id,omitempty"`
	Status *string `json:"status,omitempty"`
	Error  any     `json:"error,omitempty"`
}

type BulkStudentTaskGradeResponse = []BulkStudentTaskGradeResponseValueItem

type OnlineAssessmentMode string

const (
	OnlineAssessmentModeOnline       OnlineAssessmentMode = "online"
	OnlineAssessmentModeOnlineSecure OnlineAssessmentMode = "online_secure"
	OnlineAssessmentModeOffline      OnlineAssessmentMode = "offline"
)

type OnlineAssessment struct {
	Id             *int64                `json:"id,omitempty"`
	UserId         *int64                `json:"user_id,omitempty"`
	Title          *string               `json:"title,omitempty"`
	Mode           *OnlineAssessmentMode `json:"mode,omitempty"`
	Points         *int64                `json:"points,omitempty"`
	Duration       *int64                `json:"duration,omitempty"`
	AssessPrepUid  *string               `json:"assess_prep_uid,omitempty"`
	AssessPrepUuid *string               `json:"assess_prep_uuid,omitempty"`
	StartAt        *string               `json:"start_at,omitempty"`
	CreatedAt      *string               `json:"created_at,omitempty"`
	UpdatedAt      *string               `json:"updated_at,omitempty"`
	TaskId         *int64                `json:"task_id,omitempty"`
	Email          *string               `json:"email,omitempty"`
	ProgramCode    *string               `json:"program_code,omitempty"`
	GradeCode      *string               `json:"grade_code,omitempty"`
	Role           *string               `json:"role,omitempty"`
	Subject        *string               `json:"subject,omitempty"`
	SubjectGroup   *string               `json:"subject_group,omitempty"`
}

type UpdateOnlineAssessmentMode string

const (
	UpdateOnlineAssessmentModeOnline       UpdateOnlineAssessmentMode = "online"
	UpdateOnlineAssessmentModeOnlineSecure UpdateOnlineAssessmentMode = "online_secure"
	UpdateOnlineAssessmentModeOffline      UpdateOnlineAssessmentMode = "offline"
)

type UpdateOnlineAssessmentStatus string

const (
	UpdateOnlineAssessmentStatusDraft     UpdateOnlineAssessmentStatus = "draft"
	UpdateOnlineAssessmentStatusPublished UpdateOnlineAssessmentStatus = "published"
	UpdateOnlineAssessmentStatusClosed    UpdateOnlineAssessmentStatus = "closed"
)

type UpdateOnlineAssessmentCriteriaLabelsItemDescriptorsItem struct {
	Level      *string `json:"level,omitempty"`
	Descriptor *string `json:"descriptor,omitempty"`
}

type UpdateOnlineAssessmentCriteriaLabelsItem struct {
	Label       *string                                                   `json:"label,omitempty"`
	Title       *string                                                   `json:"title,omitempty"`
	Descriptors []UpdateOnlineAssessmentCriteriaLabelsItemDescriptorsItem `json:"descriptors,omitempty"`
}

type UpdateOnlineAssessment struct {
	AssessPrepUid   *string                                    `json:"assess_prep_uid,omitempty"`
	Title           string                                     `json:"title"`
	Mode            UpdateOnlineAssessmentMode                 `json:"mode"`
	QuestionsCount  *int64                                     `json:"questions_count,omitempty"`
	Points          *int64                                     `json:"points,omitempty"`
	Duration        *int64                                     `json:"duration,omitempty"`
	StartAt         *string                                    `json:"start_at,omitempty"`
	Status          *UpdateOnlineAssessmentStatus              `json:"status,omitempty"`
	VideoMonitoring *bool                                      `json:"video_monitoring,omitempty"`
	CriteriaLabels  []UpdateOnlineAssessmentCriteriaLabelsItem `json:"criteria_labels,omitempty"`
}

type PersonalInformation struct {
	Email             *string  `json:"email,omitempty"`
	FirstName         *string  `json:"first_name,omitempty"`
	MiddleName        *string  `json:"middle_name,omitempty"`
	Password          *string  `json:"password,omitempty"`
	LastName          *string  `json:"last_name,omitempty"`
	Nickname          *string  `json:"nickname,omitempty"`
	OtherName         *string  `json:"other_name,omitempty"`
	Identifier        *string  `json:"identifier,omitempty"`
	Gender            *string  `json:"gender,omitempty"`
	Birthday          *string  `json:"birthday,omitempty"`
	PhoneNumber       *string  `json:"phone_number,omitempty"`
	MobilePhoneNumber *string  `json:"mobile_phone_number,omitempty"`
	StreetAddress     *string  `json:"street_address,omitempty"`
	StreetAddressIi   *string  `json:"street_address_ii,omitempty"`
	City              *string  `json:"city,omitempty"`
	State             *string  `json:"state,omitempty"`
	Zipcode           *string  `json:"zipcode,omitempty"`
	Country           *string  `json:"country,omitempty"`
	Nationalities     []string `json:"nationalities,omitempty"`
	Languages         []string `json:"languages,omitempty"`
	AccountUid        *string  `json:"account_uid,omitempty"`
	Timezone          *string  `json:"timezone,omitempty"`
}

type ParentVariant2Salutation string

const (
	ParentVariant2SalutationMr  ParentVariant2Salutation = "Mr."
	ParentVariant2SalutationMs  ParentVariant2Salutation = "Ms."
	ParentVariant2SalutationMrs ParentVariant2Salutation = "Mrs."
	ParentVariant2SalutationDr  ParentVariant2Salutation = "Dr."
)

type ParentVariant2 struct {
	Id             *int64                    `json:"id,omitempty"`
	Salutation     *ParentVariant2Salutation `json:"salutation,omitempty"`
	Title          *string                   `json:"title,omitempty"`
	Employer       *string                   `json:"employer,omitempty"`
	WorkEmail      *string                   `json:"work_email,omitempty"`
	WorkPhone      *string                   `json:"work_phone,omitempty"`
	WorkAddress    *string                   `json:"work_address,omitempty"`
	WorkAddressIi  *string                   `json:"work_address_ii,omitempty"`
	WorkFax        *string                   `json:"work_fax,omitempty"`
	WorkCity       *string                   `json:"work_city,omitempty"`
	WorkState      *string                   `json:"work_state,omitempty"`
	WorkPostalCode *string                   `json:"work_postal_code,omitempty"`
	WorkCountry    *string                   `json:"work_country,omitempty"`
	SbId           *string                   `json:"sb_id,omitempty"`
	OaId           *string                   `json:"oa_id,omitempty"`
	ChildIds       []int64                   `json:"child_ids,omitempty"`
}

type Parent map[string]any

type ChildRelationRelationship string

const (
	ChildRelationRelationshipMother              ChildRelationRelationship = "Mother"
	ChildRelationRelationshipFather              ChildRelationRelationship = "Father"
	ChildRelationRelationshipStepmother          ChildRelationRelationship = "Stepmother"
	ChildRelationRelationshipStepfather          ChildRelationRelationship = "Stepfather"
	ChildRelationRelationshipLegalGuardian       ChildRelationRelationship = "Legal Guardian"
	ChildRelationRelationshipGrandmother         ChildRelationRelationship = "Grandmother"
	ChildRelationRelationshipGrandfather         ChildRelationRelationship = "Grandfather"
	ChildRelationRelationshipSister              ChildRelationRelationship = "Sister"
	ChildRelationRelationshipBrother             ChildRelationRelationship = "Brother"
	ChildRelationRelationshipUncle               ChildRelationRelationship = "Uncle"
	ChildRelationRelationshipAunt                ChildRelationRelationship = "Aunt"
	ChildRelationRelationshipOtherGuardian       ChildRelationRelationship = "Other Guardian"
	ChildRelationRelationshipConsultantRecruiter ChildRelationRelationship = "Consultant Recruiter"
)

type ChildRelation struct {
	Id           *int64                     `json:"id,omitempty"`
	Relationship *ChildRelationRelationship `json:"relationship,omitempty"`
}

type TeacherVariant2 struct {
	Id       *int64   `json:"id,omitempty"`
	Role     *string  `json:"role,omitempty"`
	SbId     *string  `json:"sb_id,omitempty"`
	OaId     *string  `json:"oa_id,omitempty"`
	Programs []string `json:"programs,omitempty"`
}

type Teacher map[string]any

type StudentVariant2 struct {
	Id                *int64  `json:"id,omitempty"`
	SbId              *string `json:"sb_id,omitempty"`
	OaId              *string `json:"oa_id,omitempty"`
	GraduatedOn       *string `json:"graduated_on,omitempty"`
	WithdrawnOn       *string `json:"withdrawn_on,omitempty"`
	StudentId         *string `json:"student_id,omitempty"`
	HomeroomAdvisorId *int64  `json:"homeroom_advisor_id,omitempty"`
	YearGroupId       *int64  `json:"year_group_id,omitempty"`
	GraduatingYear    *int64  `json:"graduating_year,omitempty"`
	ParentIds         []int64 `json:"parent_ids,omitempty"`
}

type Student map[string]any

type Meta struct {
	CurrentPage *int64 `json:"current_page,omitempty"`
	TotalPages  *int64 `json:"total_pages,omitempty"`
	TotalCount  *int64 `json:"total_count,omitempty"`
	PerPage     *int64 `json:"per_page,omitempty"`
}

type UnitSubject struct {
	Id   *int64  `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type UnitGuidingQuestionsInquiryQuestionsItemSubjectsItem struct {
	Id   *int64  `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type UnitGuidingQuestionsInquiryQuestionsItemLabelsItem struct {
	Name *string `json:"name,omitempty"`
}

type UnitGuidingQuestionsInquiryQuestionsItem struct {
	Id            *int64                                                 `json:"id,omitempty"`
	LineOfInquiry *string                                                `json:"line_of_inquiry,omitempty"`
	Question      *string                                                `json:"question,omitempty"`
	Subjects      []UnitGuidingQuestionsInquiryQuestionsItemSubjectsItem `json:"subjects,omitempty"`
	Labels        []UnitGuidingQuestionsInquiryQuestionsItemLabelsItem   `json:"labels,omitempty"`
}

type UnitGuidingQuestions struct {
	InquiryQuestions []UnitGuidingQuestionsInquiryQuestionsItem `json:"inquiry_questions,omitempty"`
}

type UnitPedagogicalApproaches struct {
	Selected []string `json:"selected,omitempty"`
	Text     *string  `json:"text,omitempty"`
}

type UnitLanguageAndLiteracyDevelopment struct {
	Options map[string][]string `json:"options,omitempty"`
	Text    *string             `json:"text,omitempty"`
}

type UnitCrossCurricularLinks struct {
	Options map[string][]string `json:"options,omitempty"`
	Text    *string             `json:"text,omitempty"`
}

type UnitCoCurricularLinks struct {
	Options map[string][]string `json:"options,omitempty"`
	Text    *string             `json:"text,omitempty"`
}

type UnitDifferentiation struct {
	Options map[string][]string `json:"options,omitempty"`
	Text    *string             `json:"text,omitempty"`
}

type UnitMetacognition struct {
	Options map[string][]string `json:"options,omitempty"`
	Text    *string             `json:"text,omitempty"`
}

type UnitUnitActivitiesItem struct {
	Id    *int64  `json:"id,omitempty"`
	Title *string `json:"title,omitempty"`
}

type UnitSupportMaterials struct {
	Options map[string][]string `json:"options,omitempty"`
	Text    *string             `json:"text,omitempty"`
}

type UnitLinesOfInquiryItem struct {
	Id   *int64  `json:"id,omitempty"`
	Line *string `json:"line,omitempty"`
}

type UnitStudentQuestionsItem struct {
	Id    *int64  `json:"id,omitempty"`
	Title *string `json:"title,omitempty"`
}

type UnitTeacherQuestionsItem struct {
	Id    *int64  `json:"id,omitempty"`
	Title *string `json:"title,omitempty"`
}

type UnitLearnerProfilesItem struct {
	Id   *int64  `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type UnitKeyConceptsKeyConceptsItem struct {
	Id      *int64  `json:"id,omitempty"`
	Concept *string `json:"concept,omitempty"`
}

type UnitKeyConceptsUnitKeyConceptsItem struct {
	Id                        *int64  `json:"id,omitempty"`
	Kind                      *string `json:"kind,omitempty"`
	ExplanationRelatedConcept *string `json:"explanation_related_concept,omitempty"`
}

type UnitKeyConcepts struct {
	KeyConcepts     []UnitKeyConceptsKeyConceptsItem     `json:"key_concepts,omitempty"`
	UnitKeyConcepts []UnitKeyConceptsUnitKeyConceptsItem `json:"unit_key_concepts,omitempty"`
}

type UnitRelatedConceptsRelatedConceptsItem struct {
	Id          *int64  `json:"id,omitempty"`
	Name        *string `json:"name,omitempty"`
	SubjectId   *int64  `json:"subject_id,omitempty"`
	SubjectName *string `json:"subject_name,omitempty"`
	Phase       *int64  `json:"phase,omitempty"`
}

type UnitRelatedConcepts struct {
	RelatedConcepts []UnitRelatedConceptsRelatedConceptsItem `json:"related_concepts,omitempty"`
	Other           *string                                  `json:"other,omitempty"`
}

type UnitSpecifiedConceptsItem struct {
	Id          *int64  `json:"id,omitempty"`
	Name        *string `json:"name,omitempty"`
	SubjectId   *int64  `json:"subject_id,omitempty"`
	SubjectName *string `json:"subject_name,omitempty"`
	Phase       *int64  `json:"phase,omitempty"`
}

type UnitCommunityEngagement struct {
	Selected                []string `json:"selected,omitempty"`
	PrincipledActionComment *string  `json:"principled_action_comment,omitempty"`
	LearningProcessComment  *string  `json:"learning_process_comment,omitempty"`
}

type UnitApproachesToLearningAtlsItemChildrenItem struct {
	Id   *int64  `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type UnitApproachesToLearningAtlsItem struct {
	Id       *int64                                         `json:"id,omitempty"`
	Name     *string                                        `json:"name,omitempty"`
	Children []UnitApproachesToLearningAtlsItemChildrenItem `json:"children,omitempty"`
}

type UnitApproachesToLearning struct {
	Atls       []UnitApproachesToLearningAtlsItem `json:"atls,omitempty"`
	AtlDetails *string                            `json:"atl_details,omitempty"`
}

type UnitCriteriaCriteriaItemCriteriaItemChildrenItem struct {
	Id   *int64  `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type UnitCriteriaCriteriaItemCriteriaItem struct {
	Id       *int64                                             `json:"id,omitempty"`
	Name     *string                                            `json:"name,omitempty"`
	Children []UnitCriteriaCriteriaItemCriteriaItemChildrenItem `json:"children,omitempty"`
}

type UnitCriteriaCriteriaItem struct {
	SubjectId   *int64                                 `json:"subject_id,omitempty"`
	SubjectName *string                                `json:"subject_name,omitempty"`
	Level       *string                                `json:"level,omitempty"`
	Criteria    []UnitCriteriaCriteriaItemCriteriaItem `json:"criteria,omitempty"`
}

type UnitCriteria struct {
	Criteria            []UnitCriteriaCriteriaItem `json:"criteria,omitempty"`
	CriteriaDescription *string                    `json:"criteria_description,omitempty"`
}

type UnitGlobalContextsUnitGlobalContextsItem struct {
	Name                 *string  `json:"name,omitempty"`
	ExplorationToDevelop []string `json:"exploration_to_develop,omitempty"`
	Subjects             []string `json:"subjects,omitempty"`
}

type UnitGlobalContexts struct {
	UnitGlobalContexts []UnitGlobalContextsUnitGlobalContextsItem `json:"unit_global_contexts,omitempty"`
}

type UnitTransdisciplinaryThemeListItem struct {
	Name *string `json:"name,omitempty"`
}

type UnitTransdisciplinaryTheme struct {
	Id    *int64                               `json:"id,omitempty"`
	Title *string                              `json:"title,omitempty"`
	List  []UnitTransdisciplinaryThemeListItem `json:"list,omitempty"`
}

type UnitStandardsCoreStandardsItemChildrenItem struct {
	Id   *int64  `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type UnitStandardsCoreStandardsItem struct {
	Id       *int64                                       `json:"id,omitempty"`
	Name     *string                                      `json:"name,omitempty"`
	Children []UnitStandardsCoreStandardsItemChildrenItem `json:"children,omitempty"`
}

type UnitStandardsStandardsItemAtlasGrade struct {
	Id   *int64  `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type UnitStandardsStandardsItem struct {
	Id         *int64                                `json:"id,omitempty"`
	Name       *string                               `json:"name,omitempty"`
	Kind       *string                               `json:"kind,omitempty"`
	AtlasGrade *UnitStandardsStandardsItemAtlasGrade `json:"atlas_grade,omitempty"`
	Children   []any                                 `json:"children,omitempty"`
}

type UnitStandards struct {
	CoreStandards []UnitStandardsCoreStandardsItem `json:"core_standards,omitempty"`
	Standards     []UnitStandardsStandardsItem     `json:"standards,omitempty"`
}

type UnitAimsItemSubjectsItemItemsItem struct {
	Id       *int64  `json:"id,omitempty"`
	Name     *string `json:"name,omitempty"`
	Children []any   `json:"children,omitempty"`
}

type UnitAimsItemSubjectsItem struct {
	SubjectId   *int64                              `json:"subject_id,omitempty"`
	SubjectName *string                             `json:"subject_name,omitempty"`
	Items       []UnitAimsItemSubjectsItemItemsItem `json:"items,omitempty"`
}

type UnitAimsItem struct {
	Year     *int64                     `json:"year,omitempty"`
	Subjects []UnitAimsItemSubjectsItem `json:"subjects,omitempty"`
}

type UnitObjectivesItemSubjectsItemItemsItem struct {
	Id       *int64  `json:"id,omitempty"`
	Name     *string `json:"name,omitempty"`
	Children []any   `json:"children,omitempty"`
}

type UnitObjectivesItemSubjectsItem struct {
	SubjectId   *int64                                    `json:"subject_id,omitempty"`
	SubjectName *string                                   `json:"subject_name,omitempty"`
	Items       []UnitObjectivesItemSubjectsItemItemsItem `json:"items,omitempty"`
}

type UnitObjectivesItem struct {
	Year     *int64                           `json:"year,omitempty"`
	Subjects []UnitObjectivesItemSubjectsItem `json:"subjects,omitempty"`
}

type UnitSyllabusSyllabusesItemChildrenItem struct {
	Id   *int64  `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type UnitSyllabusSyllabusesItem struct {
	Id       *int64                                   `json:"id,omitempty"`
	Name     *string                                  `json:"name,omitempty"`
	Children []UnitSyllabusSyllabusesItemChildrenItem `json:"children,omitempty"`
}

type UnitSyllabus struct {
	Syllabuses []UnitSyllabusSyllabusesItem `json:"syllabuses,omitempty"`
}

type UnitScopeSequenceItemPhasesOrGradesItemStrandsItemKindsValueItemChildrenItem struct {
	Id          *int64  `json:"id,omitempty"`
	Expectation *string `json:"expectation,omitempty"`
}

type UnitScopeSequenceItemPhasesOrGradesItemStrandsItemKindsValueItem struct {
	Id          *int64                                                                         `json:"id,omitempty"`
	Expectation *string                                                                        `json:"expectation,omitempty"`
	Children    []UnitScopeSequenceItemPhasesOrGradesItemStrandsItemKindsValueItemChildrenItem `json:"children,omitempty"`
}

type UnitScopeSequenceItemPhasesOrGradesItemStrandsItem struct {
	StrandId   *int64                                                                        `json:"strand_id,omitempty"`
	StrandName *string                                                                       `json:"strand_name,omitempty"`
	Kinds      map[string][]UnitScopeSequenceItemPhasesOrGradesItemStrandsItemKindsValueItem `json:"kinds,omitempty"`
}

type UnitScopeSequenceItemPhasesOrGradesItem struct {
	PhaseOrGrade *string                                              `json:"phase_or_grade,omitempty"`
	Strands      []UnitScopeSequenceItemPhasesOrGradesItemStrandsItem `json:"strands,omitempty"`
}

type UnitScopeSequenceItem struct {
	SubjectId      *int64                                    `json:"subject_id,omitempty"`
	SubjectName    *string                                   `json:"subject_name,omitempty"`
	PhasesOrGrades []UnitScopeSequenceItemPhasesOrGradesItem `json:"phases_or_grades,omitempty"`
}

type Unit struct {
	Id                                 *int64                              `json:"id,omitempty"`
	Title                              *string                             `json:"title,omitempty"`
	Description                        *string                             `json:"description,omitempty"`
	Archived                           *bool                               `json:"archived,omitempty"`
	IduUnit                            *bool                               `json:"idu_unit,omitempty"`
	Month                              *int64                              `json:"month,omitempty"`
	Week                               *int64                              `json:"week,omitempty"`
	DurationInWeeks                    *int64                              `json:"duration_in_weeks,omitempty"`
	Hours                              *int64                              `json:"hours,omitempty"`
	Sl                                 *bool                               `json:"sl,omitempty"`
	Hl                                 *bool                               `json:"hl,omitempty"`
	LanguageLevel                      *string                             `json:"language_level,omitempty"`
	LanguageBphases                    *string                             `json:"language_b_phases,omitempty"`
	Subject                            *UnitSubject                        `json:"subject,omitempty"`
	Grade                              *string                             `json:"grade,omitempty"`
	GradeNumber                        *int64                              `json:"grade_number,omitempty"`
	ClassIds                           []int64                             `json:"class_ids,omitempty"`
	StartDate                          *string                             `json:"start_date,omitempty"`
	EndDate                            *string                             `json:"end_date,omitempty"`
	CentralIdea                        *string                             `json:"central_idea,omitempty"`
	GuidingQuestions                   *UnitGuidingQuestions               `json:"guiding_questions,omitempty"`
	FormativeAssessment                *string                             `json:"formative_assessment,omitempty"`
	SummativeAssessment                *string                             `json:"summative_assessment,omitempty"`
	PeerSelfAssessment                 *string                             `json:"peer_self_assessment,omitempty"`
	StandardizationAndModeration       *string                             `json:"standardization_and_moderation,omitempty"`
	Methods                            *string                             `json:"methods,omitempty"`
	PriorLearningExperiences           *string                             `json:"prior_learning_experiences,omitempty"`
	StudentExpectations                *string                             `json:"student_expectations,omitempty"`
	PedagogicalApproaches              *UnitPedagogicalApproaches          `json:"pedagogical_approaches,omitempty"`
	TeachingStrategies                 *string                             `json:"teaching_strategies,omitempty"`
	Feedback                           *string                             `json:"feedback,omitempty"`
	Dispositions                       *string                             `json:"dispositions,omitempty"`
	InternationalMindedness            *string                             `json:"international_mindedness,omitempty"`
	AcademicHonesty                    *string                             `json:"academic_honesty,omitempty"`
	InformationCommunicationTechnology *string                             `json:"information_communication_technology,omitempty"`
	LanguageAndLiteracyDevelopment     *UnitLanguageAndLiteracyDevelopment `json:"language_and_literacy_development,omitempty"`
	CrossCurricularLinks               *UnitCrossCurricularLinks           `json:"cross_curricular_links,omitempty"`
	CoCurricularLinks                  *UnitCoCurricularLinks              `json:"co_curricular_links,omitempty"`
	Differentiation                    *UnitDifferentiation                `json:"differentiation,omitempty"`
	Content                            *string                             `json:"content,omitempty"`
	Skills                             *string                             `json:"skills,omitempty"`
	LearningProcess                    *string                             `json:"learning_process,omitempty"`
	Metacognition                      *UnitMetacognition                  `json:"metacognition,omitempty"`
	UnitActivities                     []UnitUnitActivitiesItem            `json:"unit_activities,omitempty"`
	SupportMaterials                   *UnitSupportMaterials               `json:"support_materials,omitempty"`
	Concepts                           *string                             `json:"concepts,omitempty"`
	Misunderstandings                  *string                             `json:"misunderstandings,omitempty"`
	TransferGoals                      *string                             `json:"transfer_goals,omitempty"`
	LinesOfInquiry                     []UnitLinesOfInquiryItem            `json:"lines_of_inquiry,omitempty"`
	StudentQuestions                   []UnitStudentQuestionsItem          `json:"student_questions,omitempty"`
	TeacherQuestions                   []UnitTeacherQuestionsItem          `json:"teacher_questions,omitempty"`
	LearnerProfiles                    []UnitLearnerProfilesItem           `json:"learner_profiles,omitempty"`
	KeyConcepts                        *UnitKeyConcepts                    `json:"key_concepts,omitempty"`
	RelatedConcepts                    *UnitRelatedConcepts                `json:"related_concepts,omitempty"`
	SpecifiedConcepts                  []UnitSpecifiedConceptsItem         `json:"specified_concepts,omitempty"`
	StatementOfInquiry                 *string                             `json:"statement_of_inquiry,omitempty"`
	ConceptualUnderstandings           *string                             `json:"conceptual_understandings,omitempty"`
	ContextualLens                     map[string]string                   `json:"contextual_lens,omitempty"`
	CommunityEngagement                *UnitCommunityEngagement            `json:"community_engagement,omitempty"`
	ApproachesToLearning               *UnitApproachesToLearning           `json:"approaches_to_learning,omitempty"`
	Criteria                           *UnitCriteria                       `json:"criteria,omitempty"`
	GlobalContexts                     *UnitGlobalContexts                 `json:"global_contexts,omitempty"`
	TransdisciplinaryTheme             *UnitTransdisciplinaryTheme         `json:"transdisciplinary_theme,omitempty"`
	Standards                          *UnitStandards                      `json:"standards,omitempty"`
	AcademicIntegrity                  *string                             `json:"academic_integrity,omitempty"`
	Agency                             *string                             `json:"agency,omitempty"`
	Action                             *string                             `json:"action,omitempty"`
	StudentSelfAssessment              *string                             `json:"student_self_assessment,omitempty"`
	SuccessCriteria                    *string                             `json:"success_criteria,omitempty"`
	OngoingAssessment                  *string                             `json:"ongoing_assessment,omitempty"`
	Attitudes                          []string                            `json:"attitudes,omitempty"`
	Aims                               []UnitAimsItem                      `json:"aims,omitempty"`
	Objectives                         []UnitObjectivesItem                `json:"objectives,omitempty"`
	Syllabus                           *UnitSyllabus                       `json:"syllabus,omitempty"`
	ScopeSequence                      []UnitScopeSequenceItem             `json:"scope_sequence,omitempty"`
	CreatedAt                          *string                             `json:"created_at,omitempty"`
	UpdatedAt                          *string                             `json:"updated_at,omitempty"`
}

type UnitClassAssignmentStatus string

const (
	UnitClassAssignmentStatusActive UnitClassAssignmentStatus = "active"
	UnitClassAssignmentStatusDraft  UnitClassAssignmentStatus = "draft"
)

type UnitClassAssignment struct {
	Id        *int64                     `json:"id,omitempty"`
	UnitId    *int64                     `json:"unit_id,omitempty"`
	ClassId   *int64                     `json:"class_id,omitempty"`
	Status    *UnitClassAssignmentStatus `json:"status,omitempty"`
	CreatedAt *string                    `json:"created_at,omitempty"`
	UpdatedAt *string                    `json:"updated_at,omitempty"`
	DeletedAt *string                    `json:"deleted_at,omitempty"`
}

type SubmissionMechanism string

const (
	SubmissionMechanismDropbox     SubmissionMechanism = "dropbox"
	SubmissionMechanismGoogleDrive SubmissionMechanism = "google_drive"
)

type Submission struct {
	Id          *string              `json:"id,omitempty"`
	TaskId      *int64               `json:"task_id,omitempty"`
	StudentId   *int64               `json:"student_id,omitempty"`
	Mechanism   *SubmissionMechanism `json:"mechanism,omitempty"`
	SubmittedAt *string              `json:"submitted_at,omitempty"`
	UpdatedAt   *string              `json:"updated_at,omitempty"`
	Locked      *bool                `json:"locked,omitempty"`
	Status      *string              `json:"status,omitempty"`
	Files       []SubmissionFile     `json:"files,omitempty"`
}

type SubmissionFile struct {
	Id            *int64  `json:"id,omitempty"`
	Filename      *string `json:"filename,omitempty"`
	FileSize      *int64  `json:"file_size,omitempty"`
	ContentType   *string `json:"content_type,omitempty"`
	UploadedAt    *string `json:"uploaded_at,omitempty"`
	TurnitinScore *int64  `json:"turnitin_score,omitempty"`
	DownloadPath  *string `json:"download_path,omitempty"`
}

type AssessmentTypesResponse struct {
	AssessmentType *AssessmentTypeAttributes `json:"assessment_type,omitempty"`
}

type AssessmentTypeAttributes struct {
	Id                   *int64   `json:"id,omitempty"`
	Kind                 *string  `json:"kind,omitempty"`
	Name                 *string  `json:"name,omitempty"`
	ColorCode            *string  `json:"color_code,omitempty"`
	AvailableAssessments []string `json:"available_assessments,omitempty"`
	RequiredAssessments  []string `json:"required_assessments,omitempty"`
}

type CriteriaResponse struct {
	Criteria []CriteriaAttributes `json:"criteria,omitempty"`
}

type CriteriaAttributesDescriptorsItemVariant1 struct {
	Value      *string `json:"value,omitempty"`
	Descriptor *string `json:"descriptor,omitempty"`
}

type CriteriaAttributesDescriptorsItemVariant2 struct {
	Phase               *int64  `json:"phase,omitempty"`
	Descriptor          *string `json:"descriptor,omitempty"`
	MinValue            *int64  `json:"min_value,omitempty"`
	MaxValue            *int64  `json:"max_value,omitempty"`
	FormativeDescriptor *string `json:"formative_descriptor,omitempty"`
}

type CriteriaAttributesDescriptorsItem map[string]any

type CriteriaAttributes struct {
	Id          *int64                              `json:"id,omitempty"`
	Title       *string                             `json:"title,omitempty"`
	Descriptors []CriteriaAttributesDescriptorsItem `json:"descriptors,omitempty"`
}

type TaskCategory struct {
	Id              *int64  `json:"id,omitempty"`
	Name            *string `json:"name,omitempty"`
	BackgroundColor *string `json:"background_color,omitempty"`
	Color           *string `json:"color,omitempty"`
	Weight          *int64  `json:"weight,omitempty"`
}

type YearGroupPblTodosComponentStatusProgress struct {
	Id      *int64  `json:"id,omitempty"`
	Default *bool   `json:"default,omitempty"`
	Title   *string `json:"title,omitempty"`
}

type YearGroupPblTodosComponentStatus struct {
	Completed *bool                                     `json:"completed,omitempty"`
	Approved  *bool                                     `json:"approved,omitempty"`
	Progress  *YearGroupPblTodosComponentStatusProgress `json:"progress,omitempty"`
}

type YearGroupPblTodosComponentSupervisor struct {
	Id         *int64  `json:"id,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
}

type YearGroupPblTodosComponentComponentItemsVariant1ResponsibleGroup string

const (
	YearGroupPblTodosComponentComponentItemsVariant1ResponsibleGroupStudents YearGroupPblTodosComponentComponentItemsVariant1ResponsibleGroup = "students"
	YearGroupPblTodosComponentComponentItemsVariant1ResponsibleGroupAdvisors YearGroupPblTodosComponentComponentItemsVariant1ResponsibleGroup = "advisors"
	YearGroupPblTodosComponentComponentItemsVariant1ResponsibleGroupEveryone YearGroupPblTodosComponentComponentItemsVariant1ResponsibleGroup = "everyone"
)

type YearGroupPblTodosComponentComponentItemsVariant1 struct {
	Id               *int64                                                            `json:"id,omitempty"`
	Type             *string                                                           `json:"type,omitempty"`
	Title            *string                                                           `json:"title,omitempty"`
	Completed        *bool                                                             `json:"completed,omitempty"`
	ResponsibleGroup *YearGroupPblTodosComponentComponentItemsVariant1ResponsibleGroup `json:"responsible_group,omitempty"`
}

type YearGroupPblTodosComponentComponentItemsVariant2Status string

const (
	YearGroupPblTodosComponentComponentItemsVariant2StatusPending   YearGroupPblTodosComponentComponentItemsVariant2Status = "Pending"
	YearGroupPblTodosComponentComponentItemsVariant2StatusSubmitted YearGroupPblTodosComponentComponentItemsVariant2Status = "Submitted"
	YearGroupPblTodosComponentComponentItemsVariant2StatusLate      YearGroupPblTodosComponentComponentItemsVariant2Status = "Late"
)

type YearGroupPblTodosComponentComponentItemsVariant2TodosItemResponsibleGroup string

const (
	YearGroupPblTodosComponentComponentItemsVariant2TodosItemResponsibleGroupStudents YearGroupPblTodosComponentComponentItemsVariant2TodosItemResponsibleGroup = "students"
	YearGroupPblTodosComponentComponentItemsVariant2TodosItemResponsibleGroupAdvisors YearGroupPblTodosComponentComponentItemsVariant2TodosItemResponsibleGroup = "advisors"
	YearGroupPblTodosComponentComponentItemsVariant2TodosItemResponsibleGroupEveryone YearGroupPblTodosComponentComponentItemsVariant2TodosItemResponsibleGroup = "everyone"
)

type YearGroupPblTodosComponentComponentItemsVariant2TodosItem struct {
	Id               *int64                                                                     `json:"id,omitempty"`
	Type             *string                                                                    `json:"type,omitempty"`
	Title            *string                                                                    `json:"title,omitempty"`
	Completed        *bool                                                                      `json:"completed,omitempty"`
	ResponsibleGroup *YearGroupPblTodosComponentComponentItemsVariant2TodosItemResponsibleGroup `json:"responsible_group,omitempty"`
}

type YearGroupPblTodosComponentComponentItemsVariant2 struct {
	Id      *int64                                                      `json:"id,omitempty"`
	Type    *string                                                     `json:"type,omitempty"`
	Title   *string                                                     `json:"title,omitempty"`
	DueDate *string                                                     `json:"due_date,omitempty"`
	Status  *YearGroupPblTodosComponentComponentItemsVariant2Status     `json:"status,omitempty"`
	Todos   []YearGroupPblTodosComponentComponentItemsVariant2TodosItem `json:"todos,omitempty"`
}

type YearGroupPblTodosComponentComponentItems map[string]any

type YearGroupPblTodosComponentComponent struct {
	Slug  *string                                   `json:"slug,omitempty"`
	Items *YearGroupPblTodosComponentComponentItems `json:"items,omitempty"`
}

type YearGroupPblTodosComponent struct {
	Id         *int64                                `json:"id,omitempty"`
	Identifier *string                               `json:"identifier,omitempty"`
	Status     *YearGroupPblTodosComponentStatus     `json:"status,omitempty"`
	Supervisor *YearGroupPblTodosComponentSupervisor `json:"supervisor,omitempty"`
	Component  *YearGroupPblTodosComponentComponent  `json:"component,omitempty"`
}

type YearGroupPblPresentationComponentStatusProgress struct {
	Id      *int64  `json:"id,omitempty"`
	Default *bool   `json:"default,omitempty"`
	Title   *string `json:"title,omitempty"`
}

type YearGroupPblPresentationComponentStatus struct {
	Completed *bool                                            `json:"completed,omitempty"`
	Approved  *bool                                            `json:"approved,omitempty"`
	Progress  *YearGroupPblPresentationComponentStatusProgress `json:"progress,omitempty"`
}

type YearGroupPblPresentationComponentSupervisor struct {
	Id         *int64  `json:"id,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
}

type YearGroupPblPresentationComponentComponentDocumentsItem struct {
	Id        *int64  `json:"id,omitempty"`
	Caption   *string `json:"caption,omitempty"`
	Url       *string `json:"url,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
}

type YearGroupPblPresentationComponentComponentItemsItem struct {
	Title *string `json:"title,omitempty"`
	Value *string `json:"value,omitempty"`
}

type YearGroupPblPresentationComponentComponent struct {
	Slug      *string                                                   `json:"slug,omitempty"`
	Title     *string                                                   `json:"title,omitempty"`
	Duration  *int64                                                    `json:"duration,omitempty"`
	Documents []YearGroupPblPresentationComponentComponentDocumentsItem `json:"documents,omitempty"`
	Items     []YearGroupPblPresentationComponentComponentItemsItem     `json:"items,omitempty"`
}

type YearGroupPblPresentationComponent struct {
	Id         *int64                                       `json:"id,omitempty"`
	Identifier *string                                      `json:"identifier,omitempty"`
	Status     *YearGroupPblPresentationComponentStatus     `json:"status,omitempty"`
	Supervisor *YearGroupPblPresentationComponentSupervisor `json:"supervisor,omitempty"`
	Component  *YearGroupPblPresentationComponentComponent  `json:"component,omitempty"`
}

type YearGroupPblReflectionsComponentStatusProgress struct {
	Id      *int64  `json:"id,omitempty"`
	Default *bool   `json:"default,omitempty"`
	Title   *string `json:"title,omitempty"`
}

type YearGroupPblReflectionsComponentStatus struct {
	Completed *bool                                           `json:"completed,omitempty"`
	Approved  *bool                                           `json:"approved,omitempty"`
	Progress  *YearGroupPblReflectionsComponentStatusProgress `json:"progress,omitempty"`
}

type YearGroupPblReflectionsComponentSupervisor struct {
	Id         *int64  `json:"id,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
}

type YearGroupPblReflectionsComponentComponentItemsItem struct {
	Id        *int64  `json:"id,omitempty"`
	Title     *string `json:"title,omitempty"`
	Submitted *bool   `json:"submitted,omitempty"`
}

type YearGroupPblReflectionsComponentComponent struct {
	Slug  *string                                              `json:"slug,omitempty"`
	Items []YearGroupPblReflectionsComponentComponentItemsItem `json:"items,omitempty"`
}

type YearGroupPblReflectionsComponent struct {
	Id         *int64                                      `json:"id,omitempty"`
	Identifier *string                                     `json:"identifier,omitempty"`
	Status     *YearGroupPblReflectionsComponentStatus     `json:"status,omitempty"`
	Supervisor *YearGroupPblReflectionsComponentSupervisor `json:"supervisor,omitempty"`
	Component  *YearGroupPblReflectionsComponentComponent  `json:"component,omitempty"`
}

type YearGroupPblStudentNotesReviewsComponentStatusProgress struct {
	Id      *int64  `json:"id,omitempty"`
	Default *bool   `json:"default,omitempty"`
	Title   *string `json:"title,omitempty"`
}

type YearGroupPblStudentNotesReviewsComponentStatus struct {
	Completed *bool                                                   `json:"completed,omitempty"`
	Approved  *bool                                                   `json:"approved,omitempty"`
	Progress  *YearGroupPblStudentNotesReviewsComponentStatusProgress `json:"progress,omitempty"`
}

type YearGroupPblStudentNotesReviewsComponentSupervisor struct {
	Id         *int64  `json:"id,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
}

type YearGroupPblStudentNotesReviewsComponentComponentItemsItemAuthor struct {
	Id *int64 `json:"id,omitempty"`
}

type YearGroupPblStudentNotesReviewsComponentComponentItemsItem struct {
	Id        *int64                                                            `json:"id,omitempty"`
	Author    *YearGroupPblStudentNotesReviewsComponentComponentItemsItemAuthor `json:"author,omitempty"`
	Interview *bool                                                             `json:"interview,omitempty"`
	Title     *string                                                           `json:"title,omitempty"`
	Body      *string                                                           `json:"body,omitempty"`
	PostedAt  *string                                                           `json:"posted_at,omitempty"`
}

type YearGroupPblStudentNotesReviewsComponentComponent struct {
	Slug  *string                                                      `json:"slug,omitempty"`
	Items []YearGroupPblStudentNotesReviewsComponentComponentItemsItem `json:"items,omitempty"`
}

type YearGroupPblStudentNotesReviewsComponent struct {
	Id         *int64                                              `json:"id,omitempty"`
	Identifier *string                                             `json:"identifier,omitempty"`
	Status     *YearGroupPblStudentNotesReviewsComponentStatus     `json:"status,omitempty"`
	Supervisor *YearGroupPblStudentNotesReviewsComponentSupervisor `json:"supervisor,omitempty"`
	Component  *YearGroupPblStudentNotesReviewsComponentComponent  `json:"component,omitempty"`
}

type YearGroupPblStudentDocumentsComponentStatusProgress struct {
	Id      *int64  `json:"id,omitempty"`
	Default *bool   `json:"default,omitempty"`
	Title   *string `json:"title,omitempty"`
}

type YearGroupPblStudentDocumentsComponentStatus struct {
	Completed *bool                                                `json:"completed,omitempty"`
	Approved  *bool                                                `json:"approved,omitempty"`
	Progress  *YearGroupPblStudentDocumentsComponentStatusProgress `json:"progress,omitempty"`
}

type YearGroupPblStudentDocumentsComponentSupervisor struct {
	Id         *int64  `json:"id,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
}

type YearGroupPblStudentDocumentsComponentComponentItemsItem struct {
	Id        *int64  `json:"id,omitempty"`
	Filename  *string `json:"filename,omitempty"`
	Url       *string `json:"url,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
}

type YearGroupPblStudentDocumentsComponentComponent struct {
	Slug  *string                                                   `json:"slug,omitempty"`
	Items []YearGroupPblStudentDocumentsComponentComponentItemsItem `json:"items,omitempty"`
}

type YearGroupPblStudentDocumentsComponent struct {
	Id         *int64                                           `json:"id,omitempty"`
	Identifier *string                                          `json:"identifier,omitempty"`
	Status     *YearGroupPblStudentDocumentsComponentStatus     `json:"status,omitempty"`
	Supervisor *YearGroupPblStudentDocumentsComponentSupervisor `json:"supervisor,omitempty"`
	Component  *YearGroupPblStudentDocumentsComponentComponent  `json:"component,omitempty"`
}

type YearGroupPblStudentProposalComponentStatusProgress struct {
	Id      *int64  `json:"id,omitempty"`
	Default *bool   `json:"default,omitempty"`
	Title   *string `json:"title,omitempty"`
}

type YearGroupPblStudentProposalComponentStatus struct {
	Completed *bool                                               `json:"completed,omitempty"`
	Approved  *bool                                               `json:"approved,omitempty"`
	Progress  *YearGroupPblStudentProposalComponentStatusProgress `json:"progress,omitempty"`
}

type YearGroupPblStudentProposalComponentSupervisor struct {
	Id         *int64  `json:"id,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
}

type YearGroupPblStudentProposalComponentComponentItemsItemVariant1 struct {
	Type *string `json:"type,omitempty"`
	Name *string `json:"name,omitempty"`
}

type YearGroupPblStudentProposalComponentComponentItemsItemVariant2Value map[string]any

type YearGroupPblStudentProposalComponentComponentItemsItemVariant2 struct {
	Id    *int64                                                               `json:"id,omitempty"`
	Type  *string                                                              `json:"type,omitempty"`
	Title *string                                                              `json:"title,omitempty"`
	Kind  *string                                                              `json:"kind,omitempty"`
	Value *YearGroupPblStudentProposalComponentComponentItemsItemVariant2Value `json:"value,omitempty"`
}

type YearGroupPblStudentProposalComponentComponentItemsItem map[string]any

type YearGroupPblStudentProposalComponentComponent struct {
	Slug  *string                                                  `json:"slug,omitempty"`
	Items []YearGroupPblStudentProposalComponentComponentItemsItem `json:"items,omitempty"`
}

type YearGroupPblStudentProposalComponent struct {
	Id         *int64                                          `json:"id,omitempty"`
	Identifier *string                                         `json:"identifier,omitempty"`
	Status     *YearGroupPblStudentProposalComponentStatus     `json:"status,omitempty"`
	Supervisor *YearGroupPblStudentProposalComponentSupervisor `json:"supervisor,omitempty"`
	Component  *YearGroupPblStudentProposalComponentComponent  `json:"component,omitempty"`
}

type YearGroupPblStudentJournalComponentStatusProgress struct {
	Id      *int64  `json:"id,omitempty"`
	Default *bool   `json:"default,omitempty"`
	Title   *string `json:"title,omitempty"`
}

type YearGroupPblStudentJournalComponentStatus struct {
	Completed *bool                                              `json:"completed,omitempty"`
	Approved  *bool                                              `json:"approved,omitempty"`
	Progress  *YearGroupPblStudentJournalComponentStatusProgress `json:"progress,omitempty"`
}

type YearGroupPblStudentJournalComponentSupervisor struct {
	Id         *int64  `json:"id,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
}

type YearGroupPblStudentJournalComponentComponentItemsItemFilesItemVariant1 struct {
	Id       *int64  `json:"id,omitempty"`
	Filename *string `json:"filename,omitempty"`
	Url      *string `json:"url,omitempty"`
}

type YearGroupPblStudentJournalComponentComponentItemsItemFilesItem map[string]any

type YearGroupPblStudentJournalComponentComponentItemsItemPhotosItemVariant1 struct {
	Id      *int64  `json:"id,omitempty"`
	Caption *string `json:"caption,omitempty"`
	Url     *string `json:"url,omitempty"`
}

type YearGroupPblStudentJournalComponentComponentItemsItemPhotosItem map[string]any

type YearGroupPblStudentJournalComponentComponentItemsItem struct {
	Id          *int64                                                            `json:"id,omitempty"`
	Kind        *string                                                           `json:"kind,omitempty"`
	Title       *string                                                           `json:"title,omitempty"`
	Description *string                                                           `json:"description,omitempty"`
	AuthorId    *int64                                                            `json:"author_id,omitempty"`
	CreatedAt   *string                                                           `json:"created_at,omitempty"`
	Files       []YearGroupPblStudentJournalComponentComponentItemsItemFilesItem  `json:"files,omitempty"`
	Body        *string                                                           `json:"body,omitempty"`
	Photos      []YearGroupPblStudentJournalComponentComponentItemsItemPhotosItem `json:"photos,omitempty"`
	Url         *string                                                           `json:"url,omitempty"`
}

type YearGroupPblStudentJournalComponentComponent struct {
	Slug  *string                                                 `json:"slug,omitempty"`
	Items []YearGroupPblStudentJournalComponentComponentItemsItem `json:"items,omitempty"`
}

type YearGroupPblStudentJournalComponent struct {
	Id         *int64                                         `json:"id,omitempty"`
	Identifier *string                                        `json:"identifier,omitempty"`
	Status     *YearGroupPblStudentJournalComponentStatus     `json:"status,omitempty"`
	Supervisor *YearGroupPblStudentJournalComponentSupervisor `json:"supervisor,omitempty"`
	Component  *YearGroupPblStudentJournalComponentComponent  `json:"component,omitempty"`
}

type PaginationMeta struct {
	CurrentPage *int64 `json:"current_page,omitempty"`
	NextPage    *int64 `json:"next_page,omitempty"`
	PrevPage    *int64 `json:"prev_page,omitempty"`
	TotalPages  *int64 `json:"total_pages,omitempty"`
	TotalCount  *int64 `json:"total_count,omitempty"`
	PerPage     *int64 `json:"per_page,omitempty"`
}

type CasSettingsCas struct {
	Components []CasComponent `json:"components"`
}

type CasSettings struct {
	Cas CasSettingsCas `json:"cas"`
}

type CasComponent struct {
	Slug                     string  `json:"slug"`
	Label                    string  `json:"label"`
	TrackHours               *bool   `json:"track_hours,omitempty"`
	ShowHoursChart           *bool   `json:"show_hours_chart,omitempty"`
	CasTotalHours            *int64  `json:"cas_total_hours,omitempty"`
	ShowAimsAndGoals         *bool   `json:"show_aims_and_goals,omitempty"`
	OptionalQuestion         *string `json:"optional_question,omitempty"`
	ActivityDescriptionTitle *string `json:"activity_description_title,omitempty"`
}

type CasExperiencesStudentsResponse struct {
	Students []CasStudent   `json:"students"`
	Meta     PaginationMeta `json:"meta"`
}

type CasStudentOverallProgress string

const (
	CasStudentOverallProgressExcellent      CasStudentOverallProgress = "excellent"
	CasStudentOverallProgressOnTrack        CasStudentOverallProgress = "on_track"
	CasStudentOverallProgressConcern        CasStudentOverallProgress = "concern"
	CasStudentOverallProgressToBeDetermined CasStudentOverallProgress = "to_be_determined"
)

type CasStudent struct {
	Id              int64                     `json:"id"`
	Identifier      *string                   `json:"identifier,omitempty"`
	AimsAndGoals    string                    `json:"aims_and_goals"`
	OverallProgress CasStudentOverallProgress `json:"overall_progress"`
	Component       CasStudentComponent       `json:"component"`
}

type CasStudentComponent struct {
	Items []CasExperience `json:"items"`
}

type CasExperienceServiceActionType string

const (
	CasExperienceServiceActionTypeDirect   CasExperienceServiceActionType = "Direct"
	CasExperienceServiceActionTypeIndirect CasExperienceServiceActionType = "Indirect"
	CasExperienceServiceActionTypeAdvocacy CasExperienceServiceActionType = "Advocacy"
	CasExperienceServiceActionTypeResearch CasExperienceServiceActionType = "Research"
)

type CasExperience struct {
	Id                     int64                           `json:"id"`
	Name                   string                          `json:"name"`
	Status                 CasExperienceStatus             `json:"status"`
	StatusAnnotations      *CasExperienceStatusAnnotations `json:"status_annotations,omitempty"`
	Supervisor             *CasExperienceSupervisor        `json:"supervisor,omitempty"`
	CasProject             *bool                           `json:"cas_project,omitempty"`
	Creativity             *bool                           `json:"creativity,omitempty"`
	CreativityHours        *float64                        `json:"creativity_hours,omitempty"`
	Activity               *bool                           `json:"activity,omitempty"`
	ActivityHours          *float64                        `json:"activity_hours,omitempty"`
	Service                *bool                           `json:"service,omitempty"`
	ServiceHours           *float64                        `json:"service_hours,omitempty"`
	ServiceActionType      *CasExperienceServiceActionType `json:"service_action_type,omitempty"`
	OngoingApproach        *bool                           `json:"ongoing_approach,omitempty"`
	SchoolBasedApproach    *bool                           `json:"school_based_approach,omitempty"`
	CommunityBasedApproach *bool                           `json:"community_based_approach,omitempty"`
	IndividualApproach     *bool                           `json:"individual_approach,omitempty"`
	StartDate              *string                         `json:"start_date,omitempty"`
	EndDate                *string                         `json:"end_date,omitempty"`
	Slug                   string                          `json:"slug"`
}

type CasExperienceStatusProgressTitle string

const (
	CasExperienceStatusProgressTitleApproved       CasExperienceStatusProgressTitle = "approved"
	CasExperienceStatusProgressTitleCompleted      CasExperienceStatusProgressTitle = "completed"
	CasExperienceStatusProgressTitleToBeDetermined CasExperienceStatusProgressTitle = "to_be_determined"
)

type CasExperienceStatusProgress struct {
	Title CasExperienceStatusProgressTitle `json:"title"`
}

type CasExperienceStatus struct {
	PostApproved bool                        `json:"post_approved"`
	PreApproved  bool                        `json:"pre_approved"`
	Progress     CasExperienceStatusProgress `json:"progress"`
}

type CasExperienceStatusAnnotations struct {
	Incomplete bool `json:"incomplete"`
	Rejected   bool `json:"rejected"`
	Reviewed   bool `json:"reviewed"`
}

type CasExperienceSupervisor struct {
	Name          *string `json:"name,omitempty"`
	Email         *string `json:"email,omitempty"`
	Title         *string `json:"title,omitempty"`
	ContactNumber *string `json:"contact_number,omitempty"`
}

type ServiceLearningSettingsServiceLearning struct {
	Title        *string                    `json:"title,omitempty"`
	Description  *string                    `json:"description,omitempty"`
	Abbreviation *string                    `json:"abbreviation,omitempty"`
	Components   []ServiceLearningComponent `json:"components"`
}

type ServiceLearningSettings struct {
	ServiceLearning ServiceLearningSettingsServiceLearning `json:"service_learning"`
}

type ServiceLearningComponent struct {
	Slug     string                             `json:"slug"`
	Label    string                             `json:"label"`
	Types    []ServiceLearningCategoryType      `json:"types,omitempty"`
	Outcomes []ServiceLearningConfiguredOutcome `json:"outcomes,omitempty"`
}

type ServiceLearningCategoryType struct {
	Id        int64   `json:"id"`
	Label     string  `json:"label"`
	Initial   *string `json:"initial,omitempty"`
	ColorCode *string `json:"color_code,omitempty"`
}

type ServiceLearningConfiguredOutcome struct {
	Id          int64   `json:"id"`
	Title       string  `json:"title"`
	Description *string `json:"description,omitempty"`
}

type ServiceLearningCategoriesStudentsResponse struct {
	Students []ServiceLearningCategoryStudent `json:"students"`
	Meta     PaginationMeta                   `json:"meta"`
}

type ServiceLearningCategoryStudent struct {
	Id         int64                                   `json:"id"`
	Identifier *string                                 `json:"identifier,omitempty"`
	Component  ServiceLearningCategoryStudentComponent `json:"component"`
}

type ServiceLearningCategoryStudentComponent struct {
	Items []ServiceLearningCategory `json:"items"`
}

type ServiceLearningCategory struct {
	Id                int64                                     `json:"id"`
	Name              string                                    `json:"name"`
	Status            ServiceLearningCategoryStatus             `json:"status"`
	StatusAnnotations *ServiceLearningCategoryStatusAnnotations `json:"status_annotations,omitempty"`
	Supervisor        *ServiceLearningCategorySupervisor        `json:"supervisor,omitempty"`
	ActivityType      *string                                   `json:"activity_type,omitempty"`
	StartDate         *string                                   `json:"start_date,omitempty"`
	EndDate           *string                                   `json:"end_date,omitempty"`
	LearningOutcomes  []ServiceLearningCategoryLearningOutcome  `json:"learning_outcomes,omitempty"`
	Slug              string                                    `json:"slug"`
}

type ServiceLearningCategoryStatusProgressTitle string

const (
	ServiceLearningCategoryStatusProgressTitleApproved       ServiceLearningCategoryStatusProgressTitle = "approved"
	ServiceLearningCategoryStatusProgressTitleCompleted      ServiceLearningCategoryStatusProgressTitle = "completed"
	ServiceLearningCategoryStatusProgressTitleToBeDetermined ServiceLearningCategoryStatusProgressTitle = "to_be_determined"
)

type ServiceLearningCategoryStatusProgress struct {
	Title ServiceLearningCategoryStatusProgressTitle `json:"title"`
}

type ServiceLearningCategoryStatus struct {
	PostApproved bool                                  `json:"post_approved"`
	PreApproved  bool                                  `json:"pre_approved"`
	Progress     ServiceLearningCategoryStatusProgress `json:"progress"`
}

type ServiceLearningCategoryStatusAnnotations struct {
	Incomplete bool `json:"incomplete"`
	Rejected   bool `json:"rejected"`
	Reviewed   bool `json:"reviewed"`
}

type ServiceLearningCategorySupervisor struct {
	Name          *string `json:"name,omitempty"`
	Email         *string `json:"email,omitempty"`
	Title         *string `json:"title,omitempty"`
	ContactNumber *string `json:"contact_number,omitempty"`
}

type ServiceLearningCategoryLearningOutcome struct {
	Id          int64   `json:"id"`
	Name        string  `json:"name"`
	Description *string `json:"description,omitempty"`
}

type ServiceLearningOutcomesStudentsResponse struct {
	Students []ServiceLearningOutcomeStudent `json:"students"`
	Meta     PaginationMeta                  `json:"meta"`
}

type ServiceLearningOutcomeStudentOverallProgress string

const (
	ServiceLearningOutcomeStudentOverallProgressExcellent        ServiceLearningOutcomeStudentOverallProgress = "excellent"
	ServiceLearningOutcomeStudentOverallProgressOnTrack          ServiceLearningOutcomeStudentOverallProgress = "on_track"
	ServiceLearningOutcomeStudentOverallProgressConcern          ServiceLearningOutcomeStudentOverallProgress = "concern"
	ServiceLearningOutcomeStudentOverallProgressToBeDetermined   ServiceLearningOutcomeStudentOverallProgress = "to_be_determined"
	ServiceLearningOutcomeStudentOverallProgressCasApproved      ServiceLearningOutcomeStudentOverallProgress = "cas-approved"
	ServiceLearningOutcomeStudentOverallProgressCasCompleted     ServiceLearningOutcomeStudentOverallProgress = "cas-completed"
	ServiceLearningOutcomeStudentOverallProgressCasRejected      ServiceLearningOutcomeStudentOverallProgress = "cas-rejected"
	ServiceLearningOutcomeStudentOverallProgressCasNeedsApproval ServiceLearningOutcomeStudentOverallProgress = "cas-needs-approval"
	ServiceLearningOutcomeStudentOverallProgressWaitListed       ServiceLearningOutcomeStudentOverallProgress = "wait-listed"
	ServiceLearningOutcomeStudentOverallProgressCasReviewSent    ServiceLearningOutcomeStudentOverallProgress = "cas-review-sent"
	ServiceLearningOutcomeStudentOverallProgressCasReviewed      ServiceLearningOutcomeStudentOverallProgress = "cas-reviewed"
	ServiceLearningOutcomeStudentOverallProgressCasIncomplete    ServiceLearningOutcomeStudentOverallProgress = "cas-incomplete"
)

type ServiceLearningOutcomeStudent struct {
	Id              int64                                        `json:"id"`
	Identifier      *string                                      `json:"identifier,omitempty"`
	Status          string                                       `json:"status"`
	OverallProgress ServiceLearningOutcomeStudentOverallProgress `json:"overall_progress"`
	Component       ServiceLearningOutcomeStudentComponent       `json:"component"`
}

type ServiceLearningOutcomeStudentComponent struct {
	Items []ServiceLearningOutcome `json:"items"`
}

type ServiceLearningOutcome struct {
	Id                        int64   `json:"id"`
	Title                     string  `json:"title"`
	Description               *string `json:"description,omitempty"`
	Completed                 bool    `json:"completed"`
	ExperiencesWithReflection int64   `json:"experiences_with_reflection"`
	TotalExperiences          int64   `json:"total_experiences"`
	Slug                      string  `json:"slug"`
}

type CoreTaskAttributesAssessmentsCriteria struct {
	Enabled      *bool   `json:"enabled,omitempty"`
	CriterionIds []int64 `json:"criterion_ids,omitempty"`
}

type CoreTaskAttributesAssessmentsPoints struct {
	Enabled   *bool  `json:"enabled,omitempty"`
	MaxPoints *int64 `json:"max_points,omitempty"`
}

type CoreTaskAttributesAssessmentsBinary struct {
	Enabled *bool `json:"enabled,omitempty"`
}

type CoreTaskAttributesAssessmentsComment struct {
	Enabled *bool `json:"enabled,omitempty"`
}

type CoreTaskAttributesAssessments struct {
	Criteria *CoreTaskAttributesAssessmentsCriteria `json:"criteria,omitempty"`
	Points   *CoreTaskAttributesAssessmentsPoints   `json:"points,omitempty"`
	Binary   *CoreTaskAttributesAssessmentsBinary   `json:"binary,omitempty"`
	Comment  *CoreTaskAttributesAssessmentsComment  `json:"comment,omitempty"`
}

type CoreTaskAttributes struct {
	AuthorId              int64                          `json:"author_id"`
	Name                  string                         `json:"name"`
	DueDate               string                         `json:"due_date"`
	AssessmentTypeId      int64                          `json:"assessment_type_id"`
	TaskCategoryId        *int64                         `json:"task_category_id,omitempty"`
	NotifyGroup           *bool                          `json:"notify_group,omitempty"`
	NotifyParents         *bool                          `json:"notify_parents,omitempty"`
	UnitId                *int64                         `json:"unit_id,omitempty"`
	LessonExperienceId    *int64                         `json:"lesson_experience_id,omitempty"`
	Hl                    *bool                          `json:"hl,omitempty"`
	Sl                    *bool                          `json:"sl,omitempty"`
	Notes                 *string                        `json:"notes,omitempty"`
	EnableDropbox         *bool                          `json:"enable_dropbox,omitempty"`
	EnableTurnitin        *bool                          `json:"enable_turnitin,omitempty"`
	DropboxOpeningDays    *int64                         `json:"dropbox_opening_days,omitempty"`
	AssignedStudentIds    []int64                        `json:"assigned_student_ids,omitempty"`
	Draft                 *bool                          `json:"draft,omitempty"`
	HideAssessmentResults *bool                          `json:"hide_assessment_results,omitempty"`
	Phase                 *int64                         `json:"phase,omitempty"`
	Assessments           *CoreTaskAttributesAssessments `json:"assessments,omitempty"`
}

type CoreTaskPatchAttributesAssessmentsCriteria struct {
	Enabled      *bool   `json:"enabled,omitempty"`
	CriterionIds []int64 `json:"criterion_ids,omitempty"`
}

type CoreTaskPatchAttributesAssessmentsPoints struct {
	Enabled   *bool  `json:"enabled,omitempty"`
	MaxPoints *int64 `json:"max_points,omitempty"`
}

type CoreTaskPatchAttributesAssessmentsBinary struct {
	Enabled *bool `json:"enabled,omitempty"`
}

type CoreTaskPatchAttributesAssessmentsComment struct {
	Enabled *bool `json:"enabled,omitempty"`
}

type CoreTaskPatchAttributesAssessments struct {
	Criteria *CoreTaskPatchAttributesAssessmentsCriteria `json:"criteria,omitempty"`
	Points   *CoreTaskPatchAttributesAssessmentsPoints   `json:"points,omitempty"`
	Binary   *CoreTaskPatchAttributesAssessmentsBinary   `json:"binary,omitempty"`
	Comment  *CoreTaskPatchAttributesAssessmentsComment  `json:"comment,omitempty"`
}

type CoreTaskPatchAttributes struct {
	AuthorId              *int64                              `json:"author_id,omitempty"`
	Name                  *string                             `json:"name,omitempty"`
	DueDate               *string                             `json:"due_date,omitempty"`
	AssessmentTypeId      *int64                              `json:"assessment_type_id,omitempty"`
	TaskCategoryId        *int64                              `json:"task_category_id,omitempty"`
	NotifyGroup           *bool                               `json:"notify_group,omitempty"`
	NotifyParents         *bool                               `json:"notify_parents,omitempty"`
	UnitId                *int64                              `json:"unit_id,omitempty"`
	LessonExperienceId    *int64                              `json:"lesson_experience_id,omitempty"`
	Hl                    *bool                               `json:"hl,omitempty"`
	Sl                    *bool                               `json:"sl,omitempty"`
	Notes                 *string                             `json:"notes,omitempty"`
	EnableDropbox         *bool                               `json:"enable_dropbox,omitempty"`
	EnableTurnitin        *bool                               `json:"enable_turnitin,omitempty"`
	DropboxOpeningDays    *int64                              `json:"dropbox_opening_days,omitempty"`
	AssignedStudentIds    []int64                             `json:"assigned_student_ids,omitempty"`
	Draft                 *bool                               `json:"draft,omitempty"`
	HideAssessmentResults *bool                               `json:"hide_assessment_results,omitempty"`
	Phase                 *int64                              `json:"phase,omitempty"`
	Assessments           *CoreTaskPatchAttributesAssessments `json:"assessments,omitempty"`
}

type AttendanceListCategoriesResponse struct {
	Categories []AttendanceCategoriesResponse `json:"categories,omitempty"`
}

type BehaviorNotesListBehaviorNotesResponse struct {
	BehaviorNotes []BehaviorNote `json:"behavior_notes,omitempty"`
	Meta          *Meta          `json:"meta,omitempty"`
}

type CourseworkListClassTaskCategoriesResponse struct {
	TaskCategories []TaskCategory `json:"task_categories,omitempty"`
}

type CourseworkListTaskSubmissionsResponse struct {
	Submissions []Submission `json:"submissions,omitempty"`
	Meta        *Meta        `json:"meta,omitempty"`
}

type CourseworkGetTaskSubmissionResponse struct {
	Submission *Submission `json:"submission,omitempty"`
}

type CourseworkUpdateTaskforClassRequest struct {
	CoreTask CoreTaskAttributes `json:"core_task"`
}

type CourseworkPartialUpdateTaskforClassRequest struct {
	CoreTask CoreTaskPatchAttributes `json:"core_task"`
}

type CourseworkPartialUpdateTaskforClassResponse struct {
	Task any `json:"task,omitempty"`
}

type ClassesListClassesResponse struct {
	Classes []Class `json:"classes,omitempty"`
	Meta    *Meta   `json:"meta,omitempty"`
}

type ClassesGetClassByIdResponse struct {
	Class *Class `json:"class,omitempty"`
}

type ClassesAddStudentsToClassRequest struct {
	StudentIds []int64 `json:"student_ids"`
}

type ClassesRemoveStudentsFromClassRequest struct {
	StudentIds []int64 `json:"student_ids"`
}

type AttendanceGetDateExcusalsResponse struct {
	Excusals []AttendanceExcusalsResponse `json:"excusals,omitempty"`
	Meta     *Meta                        `json:"meta,omitempty"`
}

type MembershipsListMembershipsResponse struct {
	Memberships []Membership `json:"memberships,omitempty"`
	Meta        *Meta        `json:"meta,omitempty"`
}

type RelationshipsListOfParentChildrenRelationshipsResponse struct {
	Children []ChildRelation `json:"children,omitempty"`
	Meta     *Meta           `json:"meta,omitempty"`
}

type RelationshipsCreateParentChildRelationshipRequest struct {
	Child ChildRelation `json:"child"`
}

type RelationshipsCreateParentChildRelationshipResponse struct {
	Child *ChildRelation `json:"child,omitempty"`
}

type RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItemRelationship string

const (
	RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItemRelationshipMother              RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItemRelationship = "Mother"
	RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItemRelationshipFather              RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItemRelationship = "Father"
	RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItemRelationshipStepmother          RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItemRelationship = "Stepmother"
	RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItemRelationshipStepfather          RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItemRelationship = "Stepfather"
	RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItemRelationshipLegalGuardian       RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItemRelationship = "Legal Guardian"
	RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItemRelationshipGrandmother         RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItemRelationship = "Grandmother"
	RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItemRelationshipGrandfather         RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItemRelationship = "Grandfather"
	RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItemRelationshipSister              RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItemRelationship = "Sister"
	RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItemRelationshipBrother             RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItemRelationship = "Brother"
	RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItemRelationshipUncle               RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItemRelationship = "Uncle"
	RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItemRelationshipAunt                RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItemRelationship = "Aunt"
	RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItemRelationshipOtherGuardian       RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItemRelationship = "Other Guardian"
	RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItemRelationshipConsultantRecruiter RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItemRelationship = "Consultant Recruiter"
)

type RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItem struct {
	Id           *int64                                                                             `json:"id,omitempty"`
	Relationship *RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItemRelationship `json:"relationship,omitempty"`
}

type RelationshipsBulkUpdateParentChildrenRelationshipsRequest struct {
	Children []RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItem `json:"children"`
}

type RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItemRelationship string

const (
	RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItemRelationshipMother              RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItemRelationship = "Mother"
	RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItemRelationshipFather              RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItemRelationship = "Father"
	RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItemRelationshipStepmother          RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItemRelationship = "Stepmother"
	RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItemRelationshipStepfather          RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItemRelationship = "Stepfather"
	RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItemRelationshipLegalGuardian       RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItemRelationship = "Legal Guardian"
	RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItemRelationshipGrandmother         RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItemRelationship = "Grandmother"
	RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItemRelationshipGrandfather         RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItemRelationship = "Grandfather"
	RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItemRelationshipSister              RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItemRelationship = "Sister"
	RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItemRelationshipBrother             RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItemRelationship = "Brother"
	RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItemRelationshipUncle               RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItemRelationship = "Uncle"
	RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItemRelationshipAunt                RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItemRelationship = "Aunt"
	RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItemRelationshipOtherGuardian       RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItemRelationship = "Other Guardian"
	RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItemRelationshipConsultantRecruiter RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItemRelationship = "Consultant Recruiter"
)

type RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItem struct {
	Id           *int64                                                                              `json:"id,omitempty"`
	Relationship *RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItemRelationship `json:"relationship,omitempty"`
}

type RelationshipsBulkUpdateParentChildrenRelationshipsResponse struct {
	Children []RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItem `json:"children,omitempty"`
}

type RelationshipsGetParentChildRelationshipResponse struct {
	Child *ChildRelation `json:"child,omitempty"`
}

type RelationshipsUpdateParentChildRelationshipRequestChildRelationship string

const (
	RelationshipsUpdateParentChildRelationshipRequestChildRelationshipMother              RelationshipsUpdateParentChildRelationshipRequestChildRelationship = "Mother"
	RelationshipsUpdateParentChildRelationshipRequestChildRelationshipFather              RelationshipsUpdateParentChildRelationshipRequestChildRelationship = "Father"
	RelationshipsUpdateParentChildRelationshipRequestChildRelationshipStepmother          RelationshipsUpdateParentChildRelationshipRequestChildRelationship = "Stepmother"
	RelationshipsUpdateParentChildRelationshipRequestChildRelationshipStepfather          RelationshipsUpdateParentChildRelationshipRequestChildRelationship = "Stepfather"
	RelationshipsUpdateParentChildRelationshipRequestChildRelationshipLegalGuardian       RelationshipsUpdateParentChildRelationshipRequestChildRelationship = "Legal Guardian"
	RelationshipsUpdateParentChildRelationshipRequestChildRelationshipGrandmother         RelationshipsUpdateParentChildRelationshipRequestChildRelationship = "Grandmother"
	RelationshipsUpdateParentChildRelationshipRequestChildRelationshipGrandfather         RelationshipsUpdateParentChildRelationshipRequestChildRelationship = "Grandfather"
	RelationshipsUpdateParentChildRelationshipRequestChildRelationshipSister              RelationshipsUpdateParentChildRelationshipRequestChildRelationship = "Sister"
	RelationshipsUpdateParentChildRelationshipRequestChildRelationshipBrother             RelationshipsUpdateParentChildRelationshipRequestChildRelationship = "Brother"
	RelationshipsUpdateParentChildRelationshipRequestChildRelationshipUncle               RelationshipsUpdateParentChildRelationshipRequestChildRelationship = "Uncle"
	RelationshipsUpdateParentChildRelationshipRequestChildRelationshipAunt                RelationshipsUpdateParentChildRelationshipRequestChildRelationship = "Aunt"
	RelationshipsUpdateParentChildRelationshipRequestChildRelationshipOtherGuardian       RelationshipsUpdateParentChildRelationshipRequestChildRelationship = "Other Guardian"
	RelationshipsUpdateParentChildRelationshipRequestChildRelationshipConsultantRecruiter RelationshipsUpdateParentChildRelationshipRequestChildRelationship = "Consultant Recruiter"
)

type RelationshipsUpdateParentChildRelationshipRequestChild struct {
	Relationship *RelationshipsUpdateParentChildRelationshipRequestChildRelationship `json:"relationship,omitempty"`
}

type RelationshipsUpdateParentChildRelationshipRequest struct {
	Child RelationshipsUpdateParentChildRelationshipRequestChild `json:"child"`
}

type RelationshipsUpdateParentChildRelationshipResponse struct {
	Child *ChildRelation `json:"child,omitempty"`
}

type ParentsListParentsResponse struct {
	Parents []Parent `json:"parents,omitempty"`
	Meta    *Meta    `json:"meta,omitempty"`
}

type ParentsCreateParentRequestParent struct {
}

type ParentsCreateParentRequestOptions struct {
	SendWelcomeEmail *bool `json:"send_welcome_email,omitempty"`
}

type ParentsCreateParentRequest struct {
	Parent  ParentsCreateParentRequestParent   `json:"parent"`
	Options *ParentsCreateParentRequestOptions `json:"options,omitempty"`
}

type ParentsCreateParentResponseOptionsWelcomeEmail string

const (
	ParentsCreateParentResponseOptionsWelcomeEmailEnqueued    ParentsCreateParentResponseOptionsWelcomeEmail = "enqueued"
	ParentsCreateParentResponseOptionsWelcomeEmailNotEnqueued ParentsCreateParentResponseOptionsWelcomeEmail = "not_enqueued"
)

type ParentsCreateParentResponseOptions struct {
	WelcomeEmail *ParentsCreateParentResponseOptionsWelcomeEmail `json:"welcome_email,omitempty"`
}

type ParentsCreateParentResponse struct {
	Parent  *Parent                             `json:"parent,omitempty"`
	Options *ParentsCreateParentResponseOptions `json:"options,omitempty"`
}

type ParentsGetParentByIdResponse struct {
	Parent *Parent `json:"parent,omitempty"`
}

type ParentsUpdateParentRequestParent struct {
}

type ParentsUpdateParentRequest struct {
	Parent ParentsUpdateParentRequestParent `json:"parent"`
}

type ParentsUpdateParentResponse struct {
	Parent *Parent `json:"parent,omitempty"`
}

type AcademicsGetAllTermReportsResponseTermReportsItemType string

const (
	AcademicsGetAllTermReportsResponseTermReportsItemTypeFinal   AcademicsGetAllTermReportsResponseTermReportsItemType = "final"
	AcademicsGetAllTermReportsResponseTermReportsItemTypeInterim AcademicsGetAllTermReportsResponseTermReportsItemType = "interim"
)

type AcademicsGetAllTermReportsResponseTermReportsItem struct {
	Id                   *int64                                                 `json:"id,omitempty"`
	Title                *string                                                `json:"title,omitempty"`
	Type                 *AcademicsGetAllTermReportsResponseTermReportsItemType `json:"type,omitempty"`
	Program              *string                                                `json:"program,omitempty"`
	AcademicTermId       *int64                                                 `json:"academic_term_id,omitempty"`
	AcademicTermName     *string                                                `json:"academic_term_name,omitempty"`
	NextGen              *bool                                                  `json:"next_gen,omitempty"`
	PdfUrl               *string                                                `json:"pdf_url,omitempty"`
	IndividualReportsUrl *string                                                `json:"individual_reports_url,omitempty"`
	TermGradesUrl        *string                                                `json:"term_grades_url,omitempty"`
	CreatedAt            *string                                                `json:"created_at,omitempty"`
	UpdatedAt            *string                                                `json:"updated_at,omitempty"`
	ReleasedOn           *string                                                `json:"released_on,omitempty"`
}

type AcademicsGetAllTermReportsResponseMeta struct {
	CurrentPage *int64 `json:"current_page,omitempty"`
	TotalPages  *int64 `json:"total_pages,omitempty"`
	TotalCount  *int64 `json:"total_count,omitempty"`
	PerPage     *int64 `json:"per_page,omitempty"`
}

type AcademicsGetAllTermReportsResponse struct {
	TermReports []AcademicsGetAllTermReportsResponseTermReportsItem `json:"term_reports,omitempty"`
	Meta        *AcademicsGetAllTermReportsResponseMeta             `json:"meta,omitempty"`
}

type AcademicsGetTermReportResponseTermReportType string

const (
	AcademicsGetTermReportResponseTermReportTypeFinal   AcademicsGetTermReportResponseTermReportType = "final"
	AcademicsGetTermReportResponseTermReportTypeInterim AcademicsGetTermReportResponseTermReportType = "interim"
)

type AcademicsGetTermReportResponseTermReport struct {
	Id                   *int64                                        `json:"id,omitempty"`
	Title                *string                                       `json:"title,omitempty"`
	Type                 *AcademicsGetTermReportResponseTermReportType `json:"type,omitempty"`
	Program              *string                                       `json:"program,omitempty"`
	AcademicTermId       *int64                                        `json:"academic_term_id,omitempty"`
	AcademicTermName     *string                                       `json:"academic_term_name,omitempty"`
	NextGen              *bool                                         `json:"next_gen,omitempty"`
	PdfUrl               *string                                       `json:"pdf_url,omitempty"`
	IndividualReportsUrl *string                                       `json:"individual_reports_url,omitempty"`
	TermGradesUrl        *string                                       `json:"term_grades_url,omitempty"`
	CreatedAt            *string                                       `json:"created_at,omitempty"`
	UpdatedAt            *string                                       `json:"updated_at,omitempty"`
	ReleasedOn           *string                                       `json:"released_on,omitempty"`
}

type AcademicsGetTermReportResponse struct {
	TermReport *AcademicsGetTermReportResponseTermReport `json:"term_report,omitempty"`
}

type AcademicsListGradesResponseSchool struct {
	Programs []Program `json:"programs,omitempty"`
}

type AcademicsListGradesResponse struct {
	School *AcademicsListGradesResponseSchool `json:"school,omitempty"`
}

type AcademicsListSchoolTermGradeScalesResponseSchool struct {
	TermGradeScales []TermGradeScale `json:"term_grade_scales,omitempty"`
}

type AcademicsListSchoolTermGradeScalesResponse struct {
	School *AcademicsListSchoolTermGradeScalesResponseSchool `json:"school,omitempty"`
}

type StudentsUpdateStudentAvatarRequestAvatarVariant1 struct {
	RemoteFileUrl string `json:"remote_file_url"`
}

type StudentsUpdateStudentAvatarRequestAvatarVariant2 struct {
	File []byte `json:"file"`
}

type StudentsUpdateStudentAvatarRequestAvatar map[string]any

type StudentsUpdateStudentAvatarRequest struct {
	Avatar *StudentsUpdateStudentAvatarRequestAvatar `json:"avatar,omitempty"`
}

type StudentsUpdateStudentAvatarResponse struct {
	Status *string `json:"status,omitempty"`
}

type StudentsDeleteStudentAvatarResponse struct {
	Status *string `json:"status,omitempty"`
}

type AttendanceGetStudentExcusalsResponse struct {
	Excusals []AttendanceExcusalsResponse `json:"excusals,omitempty"`
	Meta     *Meta                        `json:"meta,omitempty"`
}

type StudentsListStudentsResponse struct {
	Students []Student `json:"students,omitempty"`
	Meta     *Meta     `json:"meta,omitempty"`
}

type StudentsCreateStudentRequestStudent struct {
}

type StudentsCreateStudentRequestOptions struct {
	SendWelcomeEmail *bool `json:"send_welcome_email,omitempty"`
}

type StudentsCreateStudentRequest struct {
	Student StudentsCreateStudentRequestStudent  `json:"student"`
	Options *StudentsCreateStudentRequestOptions `json:"options,omitempty"`
}

type StudentsCreateStudentResponseOptionsWelcomeEmail string

const (
	StudentsCreateStudentResponseOptionsWelcomeEmailEnqueued    StudentsCreateStudentResponseOptionsWelcomeEmail = "enqueued"
	StudentsCreateStudentResponseOptionsWelcomeEmailNotEnqueued StudentsCreateStudentResponseOptionsWelcomeEmail = "not_enqueued"
)

type StudentsCreateStudentResponseOptions struct {
	WelcomeEmail *StudentsCreateStudentResponseOptionsWelcomeEmail `json:"welcome_email,omitempty"`
}

type StudentsCreateStudentResponse struct {
	Student *Student                              `json:"student,omitempty"`
	Options *StudentsCreateStudentResponseOptions `json:"options,omitempty"`
}

type StudentsGetStudentByIdResponse struct {
	Student *Student `json:"student,omitempty"`
}

type StudentsUpdateStudentRequestStudent struct {
}

type StudentsUpdateStudentRequest struct {
	Student *StudentsUpdateStudentRequestStudent `json:"student,omitempty"`
}

type StudentsUpdateStudentResponse struct {
	Student *Student `json:"student,omitempty"`
}

type StudentsArchiveStudentRequestVariant1 struct {
	WithdrawnOn *string `json:"withdrawn_on,omitempty"`
}

type StudentsArchiveStudentRequestVariant2 struct {
	GraduatedOn *string `json:"graduated_on,omitempty"`
}

type StudentsArchiveStudentRequest map[string]any

type MembershipsGetStudentMembershipsResponseMembershipsClassesItem struct {
	Id          *int64  `json:"id,omitempty"`
	UniqId      *string `json:"uniq_id,omitempty"`
	Name        *string `json:"name,omitempty"`
	Archived    *bool   `json:"archived,omitempty"`
	StartTermId *int64  `json:"start_term_id,omitempty"`
	EndTermId   *int64  `json:"end_term_id,omitempty"`
}

type MembershipsGetStudentMembershipsResponseMembershipsGroupsItem struct {
	Id       *int64  `json:"id,omitempty"`
	Name     *string `json:"name,omitempty"`
	Archived *bool   `json:"archived,omitempty"`
}

type MembershipsGetStudentMembershipsResponseMembershipsYearGroupsItem struct {
	Id       *int64  `json:"id,omitempty"`
	Name     *string `json:"name,omitempty"`
	Program  *string `json:"program,omitempty"`
	Archived *bool   `json:"archived,omitempty"`
}

type MembershipsGetStudentMembershipsResponseMemberships struct {
	Classes    []MembershipsGetStudentMembershipsResponseMembershipsClassesItem    `json:"classes,omitempty"`
	Groups     []MembershipsGetStudentMembershipsResponseMembershipsGroupsItem     `json:"groups,omitempty"`
	YearGroups []MembershipsGetStudentMembershipsResponseMembershipsYearGroupsItem `json:"year_groups,omitempty"`
}

type MembershipsGetStudentMembershipsResponse struct {
	Memberships *MembershipsGetStudentMembershipsResponseMemberships `json:"memberships,omitempty"`
}

type ExtendedApisSetStudentHomeroomAttendanceRequestStatus string

const (
	ExtendedApisSetStudentHomeroomAttendanceRequestStatus_0  ExtendedApisSetStudentHomeroomAttendanceRequestStatus = "0"
	ExtendedApisSetStudentHomeroomAttendanceRequestStatus_1  ExtendedApisSetStudentHomeroomAttendanceRequestStatus = "1"
	ExtendedApisSetStudentHomeroomAttendanceRequestStatus_2  ExtendedApisSetStudentHomeroomAttendanceRequestStatus = "2"
	ExtendedApisSetStudentHomeroomAttendanceRequestStatus_3  ExtendedApisSetStudentHomeroomAttendanceRequestStatus = "3"
	ExtendedApisSetStudentHomeroomAttendanceRequestStatus_4  ExtendedApisSetStudentHomeroomAttendanceRequestStatus = "4"
	ExtendedApisSetStudentHomeroomAttendanceRequestStatus_5  ExtendedApisSetStudentHomeroomAttendanceRequestStatus = "5"
	ExtendedApisSetStudentHomeroomAttendanceRequestStatus_10 ExtendedApisSetStudentHomeroomAttendanceRequestStatus = "10"
	ExtendedApisSetStudentHomeroomAttendanceRequestStatus_11 ExtendedApisSetStudentHomeroomAttendanceRequestStatus = "11"
	ExtendedApisSetStudentHomeroomAttendanceRequestStatus_12 ExtendedApisSetStudentHomeroomAttendanceRequestStatus = "12"
	ExtendedApisSetStudentHomeroomAttendanceRequestStatus_13 ExtendedApisSetStudentHomeroomAttendanceRequestStatus = "13"
	ExtendedApisSetStudentHomeroomAttendanceRequestStatus_14 ExtendedApisSetStudentHomeroomAttendanceRequestStatus = "14"
	ExtendedApisSetStudentHomeroomAttendanceRequestStatus_15 ExtendedApisSetStudentHomeroomAttendanceRequestStatus = "15"
	ExtendedApisSetStudentHomeroomAttendanceRequestStatus_16 ExtendedApisSetStudentHomeroomAttendanceRequestStatus = "16"
	ExtendedApisSetStudentHomeroomAttendanceRequestStatus_17 ExtendedApisSetStudentHomeroomAttendanceRequestStatus = "17"
	ExtendedApisSetStudentHomeroomAttendanceRequestStatus_18 ExtendedApisSetStudentHomeroomAttendanceRequestStatus = "18"
)

type ExtendedApisSetStudentHomeroomAttendanceRequest struct {
	Date   *string                                                `json:"date,omitempty"`
	Status *ExtendedApisSetStudentHomeroomAttendanceRequestStatus `json:"status,omitempty"`
	Notes  *string                                                `json:"notes,omitempty"`
}

type OnlineAssessmentUpdateOnlineAssessmentRequest struct {
	OnlineAssessment *UpdateOnlineAssessment `json:"online_assessment,omitempty"`
}

type OnlineAssessmentUpdateOnlineAssessmentResponse struct {
	OnlineAssessment *OnlineAssessment `json:"online_assessment,omitempty"`
}

type ExtendedApisUpdateStudentTaskGradesRequestTaskGrade map[string]any

type ExtendedApisUpdateStudentTaskGradesRequest struct {
	TaskGrade *ExtendedApisUpdateStudentTaskGradesRequestTaskGrade `json:"task_grade,omitempty"`
}

type ExtendedApisUpdateStudentTaskGradesResponse map[string]any

type TeachersUpdateTeacherAvatarRequestAvatarVariant1 struct {
	RemoteFileUrl string `json:"remote_file_url"`
}

type TeachersUpdateTeacherAvatarRequestAvatarVariant2 struct {
	File []byte `json:"file"`
}

type TeachersUpdateTeacherAvatarRequestAvatar map[string]any

type TeachersUpdateTeacherAvatarRequest struct {
	Avatar *TeachersUpdateTeacherAvatarRequestAvatar `json:"avatar,omitempty"`
}

type TeachersListTeachersResponse struct {
	Teachers []Teacher `json:"teachers,omitempty"`
	Meta     *Meta     `json:"meta,omitempty"`
}

type TeachersCreateTeacherRequestTeacher struct {
	Email             *string  `json:"email,omitempty"`
	FirstName         *string  `json:"first_name,omitempty"`
	MiddleName        *string  `json:"middle_name,omitempty"`
	Password          *string  `json:"password,omitempty"`
	LastName          *string  `json:"last_name,omitempty"`
	Nickname          *string  `json:"nickname,omitempty"`
	OtherName         *string  `json:"other_name,omitempty"`
	Identifier        *string  `json:"identifier,omitempty"`
	Gender            *string  `json:"gender,omitempty"`
	Birthday          *string  `json:"birthday,omitempty"`
	PhoneNumber       *string  `json:"phone_number,omitempty"`
	MobilePhoneNumber *string  `json:"mobile_phone_number,omitempty"`
	StreetAddress     *string  `json:"street_address,omitempty"`
	StreetAddressIi   *string  `json:"street_address_ii,omitempty"`
	City              *string  `json:"city,omitempty"`
	State             *string  `json:"state,omitempty"`
	Zipcode           *string  `json:"zipcode,omitempty"`
	Country           *string  `json:"country,omitempty"`
	Nationalities     []string `json:"nationalities,omitempty"`
	Languages         []string `json:"languages,omitempty"`
	AccountUid        *string  `json:"account_uid,omitempty"`
	Timezone          *string  `json:"timezone,omitempty"`
}

type TeachersCreateTeacherRequestOptions struct {
	SendWelcomeEmail *bool `json:"send_welcome_email,omitempty"`
}

type TeachersCreateTeacherRequest struct {
	Teacher TeachersCreateTeacherRequestTeacher  `json:"teacher"`
	Options *TeachersCreateTeacherRequestOptions `json:"options,omitempty"`
}

type TeachersCreateTeacherResponseOptionsWelcomeEmail string

const (
	TeachersCreateTeacherResponseOptionsWelcomeEmailEnqueued    TeachersCreateTeacherResponseOptionsWelcomeEmail = "enqueued"
	TeachersCreateTeacherResponseOptionsWelcomeEmailNotEnqueued TeachersCreateTeacherResponseOptionsWelcomeEmail = "not_enqueued"
)

type TeachersCreateTeacherResponseOptions struct {
	WelcomeEmail *TeachersCreateTeacherResponseOptionsWelcomeEmail `json:"welcome_email,omitempty"`
}

type TeachersCreateTeacherResponse struct {
	Teacher *Teacher                              `json:"teacher,omitempty"`
	Options *TeachersCreateTeacherResponseOptions `json:"options,omitempty"`
}

type TeachersGetTeacherByIdResponse struct {
	Teacher *Teacher `json:"teacher,omitempty"`
}

type TeachersUpdateTeacherRequestTeacher struct {
	Email             *string  `json:"email,omitempty"`
	FirstName         *string  `json:"first_name,omitempty"`
	MiddleName        *string  `json:"middle_name,omitempty"`
	Password          *string  `json:"password,omitempty"`
	LastName          *string  `json:"last_name,omitempty"`
	Nickname          *string  `json:"nickname,omitempty"`
	OtherName         *string  `json:"other_name,omitempty"`
	Identifier        *string  `json:"identifier,omitempty"`
	Gender            *string  `json:"gender,omitempty"`
	Birthday          *string  `json:"birthday,omitempty"`
	PhoneNumber       *string  `json:"phone_number,omitempty"`
	MobilePhoneNumber *string  `json:"mobile_phone_number,omitempty"`
	StreetAddress     *string  `json:"street_address,omitempty"`
	StreetAddressIi   *string  `json:"street_address_ii,omitempty"`
	City              *string  `json:"city,omitempty"`
	State             *string  `json:"state,omitempty"`
	Zipcode           *string  `json:"zipcode,omitempty"`
	Country           *string  `json:"country,omitempty"`
	Nationalities     []string `json:"nationalities,omitempty"`
	Languages         []string `json:"languages,omitempty"`
	AccountUid        *string  `json:"account_uid,omitempty"`
	Timezone          *string  `json:"timezone,omitempty"`
}

type TeachersUpdateTeacherRequest struct {
	Teacher TeachersUpdateTeacherRequestTeacher `json:"teacher"`
}

type TeachersListTeacherClassesMembershipsResponseClassesItem struct {
	Id            *int64  `json:"id,omitempty"`
	UniqId        *string `json:"uniq_id,omitempty"`
	Name          *string `json:"name,omitempty"`
	Archived      *bool   `json:"archived,omitempty"`
	StartTermId   *int64  `json:"start_term_id,omitempty"`
	EndTermId     *int64  `json:"end_term_id,omitempty"`
	ShowOnReports *bool   `json:"show_on_reports,omitempty"`
}

type TeachersListTeacherClassesMembershipsResponse struct {
	Classes []TeachersListTeacherClassesMembershipsResponseClassesItem `json:"classes,omitempty"`
}

type TeachersListTeacherGroupsMembershipsResponseGroupsItem struct {
	Id                  *int64  `json:"id,omitempty"`
	Name                *string `json:"name,omitempty"`
	Archived            *bool   `json:"archived,omitempty"`
	GroupAdvisor        *bool   `json:"group_advisor,omitempty"`
	PrimaryGroupAdvisor *bool   `json:"primary_group_advisor,omitempty"`
}

type TeachersListTeacherGroupsMembershipsResponse struct {
	Groups []TeachersListTeacherGroupsMembershipsResponseGroupsItem `json:"groups,omitempty"`
}

type UnitClassAssignmentsListUnitClassAssignmentsResponse struct {
	UnitClassAssignments []UnitClassAssignment `json:"unit_class_assignments,omitempty"`
	Meta                 *Meta                 `json:"meta,omitempty"`
}

type UnitsListUnitsResponse struct {
	Units []Unit `json:"units,omitempty"`
	Meta  *Meta  `json:"meta,omitempty"`
}

type UnitsGetUnitByIdResponse struct {
	Unit *Unit `json:"unit,omitempty"`
}

type YearGroupsAddStudentToYearGroupRequest struct {
	StudentIds []int64 `json:"student_ids"`
}

type YearGroupsRemoveStudentToYearGroupRequest struct {
	StudentIds []int64 `json:"student_ids"`
}

type ClassesAddTeachersToClassRequest struct {
	TeacherIds []int64 `json:"teacher_ids"`
}

type MembershipsRemoveTeachersFromClassRequest struct {
	TeacherIds []int64 `json:"teacher_ids"`
}

type CourseworkCreateTaskforClassRequest struct {
	CoreTask CoreTaskAttributes `json:"core_task"`
}
