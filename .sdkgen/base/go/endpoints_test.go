package managebac_sdk

import (
	"bufio"
	"context"
	"os/exec"
	"regexp"
	"testing"
	"time"
)

func TestEndpointConformance(t *testing.T) {
	cmd := exec.Command("node", "../mock/server.mjs", "--port", "0")
	stdout, err := cmd.StdoutPipe()
	if err != nil {
		t.Fatalf("pipe: %v", err)
	}
	if err := cmd.Start(); err != nil {
		t.Skipf("node not available: %v", err)
	}
	defer cmd.Process.Kill()

	scanner := bufio.NewScanner(stdout)
	pattern := regexp.MustCompile(`127\.0\.0\.1:(\d+)`)
	port := ""
	deadline := time.Now().Add(5 * time.Second)
	for scanner.Scan() {
		if match := pattern.FindStringSubmatch(scanner.Text()); match != nil {
			port = match[1]
			break
		}
		if time.Now().After(deadline) {
			break
		}
	}
	if port == "" {
		t.Fatal("mock server did not start")
	}

	observed := 0
	client := NewClient(WithAPIKey("test"), WithBaseURL("http://127.0.0.1:"+port), WithOnResponse(func(map[string]any) { observed++ }))
	ctx := context.Background()
	if err := client.Coursework.ListGradesForClass(ctx, CourseworkListGradesForClassParams{ClassId: 1, TermId: 1}); err != nil {
		t.Fatalf("listGradesForClass: %v", err)
	}
	if err := client.Coursework.ListTermGradesForClass(ctx, CourseworkListTermGradesForClassParams{ClassId: 1, TermId: 1}); err != nil {
		t.Fatalf("listTermGradesForClass: %v", err)
	}
	if err := client.Attendance.SetAttendanceSettings(ctx, AttendanceSetAttendanceSettingsParams{ClassId: 1, AcademicYearId: 1, Body: SetAttendanceSettingsRequest{Settings: []any{SetAttendanceSettingsRequestSettingsItem{Period: 1, Day: 1}}}}); err != nil {
		t.Fatalf("SetAttendanceSettings: %v", err)
	}
	if _, err := client.Attendance.ListCategories(ctx, AttendanceListCategoriesParams{AcademicYearId: "test"}); err != nil {
		t.Fatalf("listCategories: %v", err)
	}
	if _, err := client.Authentication.ListTokenResources(ctx); err != nil {
		t.Fatalf("listTokenResources: %v", err)
	}
	if _, err := client.Authentication.CreateOauthToken(ctx, AuthenticationCreateOauthTokenParams{Body: OauthTokenRequest{GrantType: "client_credentials", ClientId: "test", ClientSecret: "test"}}); err != nil {
		t.Fatalf("createOAuthToken: %v", err)
	}
	if err := client.Utilities.ShowAvatarById(ctx, UtilitiesShowAvatarByIdParams{Id: 1}); err != nil {
		t.Fatalf("showAvatarByID: %v", err)
	}
	if err := client.Utilities.Ping(ctx); err != nil {
		t.Fatalf("ping: %v", err)
	}
	if _, err := client.BehaviorNotes.ListBehaviorNotes(ctx, BehaviorNotesListBehaviorNotesParams{}); err != nil {
		t.Fatalf("listBehaviorNotes: %v", err)
	}
	if _, err := client.Coursework.ListCriteriaforClass(ctx, CourseworkListCriteriaforClassParams{Id: 1}); err != nil {
		t.Fatalf("listCriteriaforClass: %v", err)
	}
	if err := client.Memberships.GetStudentsForClass(ctx, MembershipsGetStudentsForClassParams{ClassId: 1}); err != nil {
		t.Fatalf("getStudentsForClass: %v", err)
	}
	if err := client.ExtendedApis.BulkUpdateStudentsFromClass(ctx, ExtendedApisBulkUpdateStudentsFromClassParams{ClassId: 1, Body: BulkUpdateStudents{Students: []any{BulkUpdateStudentsStudentsItem{}}}}); err != nil {
		t.Fatalf("bulkUpdateStudentsFromClass: %v", err)
	}
	if _, err := client.Coursework.ListClassTaskCategories(ctx, CourseworkListClassTaskCategoriesParams{Id: 1}); err != nil {
		t.Fatalf("listClassTaskCategories: %v", err)
	}
	if err := client.Coursework.DownloadSubmissionFile(ctx, CourseworkDownloadSubmissionFileParams{ClassId: 1, TaskId: 1, StudentId: 1, AssetId: 1}); err != nil {
		t.Fatalf("downloadSubmissionFile: %v", err)
	}
	if _, err := client.Coursework.ListTaskSubmissions(ctx, CourseworkListTaskSubmissionsParams{ClassId: 1, TaskId: 1}); err != nil {
		t.Fatalf("listTaskSubmissions: %v", err)
	}
	if _, err := client.Coursework.GetTaskSubmission(ctx, CourseworkGetTaskSubmissionParams{ClassId: 1, TaskId: 1, StudentId: 1}); err != nil {
		t.Fatalf("getTaskSubmission: %v", err)
	}
	if err := client.Coursework.ListTasksforClass(ctx, CourseworkListTasksforClassParams{Id: 1}); err != nil {
		t.Fatalf("listTasksforClass: %v", err)
	}
	if err := client.Coursework.GetTasksByIdforClass(ctx, CourseworkGetTasksByIdforClassParams{Id: 1, ClassId: 1}); err != nil {
		t.Fatalf("getTasksByIDforClass: %v", err)
	}
	if err := client.Coursework.UpdateTaskforClass(ctx, CourseworkUpdateTaskforClassParams{ClassId: 1, Id: 1, Body: CourseworkUpdateTaskforClassRequest{CoreTask: CoreTaskAttributes{AuthorId: 1, Name: "test", DueDate: "test", AssessmentTypeId: 1}}}); err != nil {
		t.Fatalf("updateTaskforClass: %v", err)
	}
	if _, err := client.Coursework.PartialUpdateTaskforClass(ctx, CourseworkPartialUpdateTaskforClassParams{ClassId: 1, Id: 1, Body: CourseworkPartialUpdateTaskforClassRequest{CoreTask: CoreTaskPatchAttributes{}}}); err != nil {
		t.Fatalf("partialUpdateTaskforClass: %v", err)
	}
	if err := client.Coursework.DeleteTaskforClass(ctx, CourseworkDeleteTaskforClassParams{ClassId: 1, Id: 1}); err != nil {
		t.Fatalf("deleteTaskforClass: %v", err)
	}
	if err := client.Coursework.ListStudentAssessmentResultsForClassTask(ctx, CourseworkListStudentAssessmentResultsForClassTaskParams{Id: 1, ClassId: 1}); err != nil {
		t.Fatalf("listStudentAssessmentResultsForClassTask: %v", err)
	}
	if err := client.Attendance.GetClassTimetable(ctx, AttendanceGetClassTimetableParams{ClassId: 1}); err != nil {
		t.Fatalf("getClassTimetable: %v", err)
	}
	if _, err := client.Classes.ListClasses(ctx, ClassesListClassesParams{}); err != nil {
		t.Fatalf("listClasses: %v", err)
	}
	if _, err := client.Classes.CreateClass(ctx, ClassesCreateClassParams{Body: CreateClass{}}); err != nil {
		t.Fatalf("createClass: %v", err)
	}
	if _, err := client.ExtendedApis.UpsertClasses(ctx, ExtendedApisUpsertClassesParams{Body: UpsertClasses{}}); err != nil {
		t.Fatalf("upsertClasses: %v", err)
	}
	if _, err := client.Classes.GetClassById(ctx, ClassesGetClassByIdParams{Id: 1}); err != nil {
		t.Fatalf("getClassByID: %v", err)
	}
	if _, err := client.Classes.UpdateClass(ctx, ClassesUpdateClassParams{Id: 1, Body: UpdateClass{}}); err != nil {
		t.Fatalf("updateClass: %v", err)
	}
	if err := client.Classes.AddStudentsToClass(ctx, ClassesAddStudentsToClassParams{Id: 1, Body: ClassesAddStudentsToClassRequest{StudentIds: []any{1}}}); err != nil {
		t.Fatalf("addStudentsToClass: %v", err)
	}
	if err := client.Classes.RemoveStudentsFromClass(ctx, ClassesRemoveStudentsFromClassParams{Id: 1, Body: ClassesRemoveStudentsFromClassRequest{StudentIds: []any{1}}}); err != nil {
		t.Fatalf("removeStudentsFromClass: %v", err)
	}
	if err := client.Attendance.GetAttendanceForClass(ctx, AttendanceGetAttendanceForClassParams{Id: 1, TermId: 1}); err != nil {
		t.Fatalf("getAttendanceForClass: %v", err)
	}
	if err := client.Attendance.GetClassAttendanceForDate(ctx, AttendanceGetClassAttendanceForDateParams{Id: 1, Date: "test"}); err != nil {
		t.Fatalf("getClassAttendanceForDate: %v", err)
	}
	if err := client.ExtendedApis.SetClassAttendanceForStudents(ctx, ExtendedApisSetClassAttendanceForStudentsParams{Id: 1, Body: BulkUpdateAttendance{Attendances: []any{BulkUpdateAttendanceAttendancesItem{}}}}); err != nil {
		t.Fatalf("setClassAttendanceForStudents: %v", err)
	}
	if err := client.Classes.GetClassTerms(ctx, ClassesGetClassTermsParams{Id: 1}); err != nil {
		t.Fatalf("getClassTerms: %v", err)
	}
	if _, err := client.Attendance.GetDateExcusals(ctx, AttendanceGetDateExcusalsParams{Date: "test"}); err != nil {
		t.Fatalf("getDateExcusals: %v", err)
	}
	if err := client.Attendance.GetAttendanceForYearGroupByTerm(ctx, AttendanceGetAttendanceForYearGroupByTermParams{YearGroupId: 1, TermId: 1}); err != nil {
		t.Fatalf("getAttendanceForYearGroupByTerm: %v", err)
	}
	if err := client.Attendance.GetAttendanceForYearGroupByDate(ctx, AttendanceGetAttendanceForYearGroupByDateParams{YearGroupId: 1, Date: "test"}); err != nil {
		t.Fatalf("getAttendanceForYearGroupByDate: %v", err)
	}
	if err := client.Attendance.GetAttendanceAdjustmentsForYearGroupByTerm(ctx, AttendanceGetAttendanceAdjustmentsForYearGroupByTermParams{YearGroupId: 1, TermId: 1}); err != nil {
		t.Fatalf("getAttendanceAdjustmentsForYearGroupByTerm: %v", err)
	}
	if _, err := client.Memberships.ListMemberships(ctx, MembershipsListMembershipsParams{}); err != nil {
		t.Fatalf("listMemberships: %v", err)
	}
	if _, err := client.Relationships.ListOfParentChildrenRelationships(ctx, RelationshipsListOfParentChildrenRelationshipsParams{ParentId: "test"}); err != nil {
		t.Fatalf("listOfParentChildrenRelationships: %v", err)
	}
	if _, err := client.Relationships.CreateParentChildRelationship(ctx, RelationshipsCreateParentChildRelationshipParams{ParentId: "test", Body: RelationshipsCreateParentChildRelationshipRequest{Child: ChildRelation{}}}); err != nil {
		t.Fatalf("createParentChildRelationship: %v", err)
	}
	if _, err := client.Relationships.BulkUpdateParentChildrenRelationships(ctx, RelationshipsBulkUpdateParentChildrenRelationshipsParams{ParentId: "test", Body: RelationshipsBulkUpdateParentChildrenRelationshipsRequest{Children: []any{RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItem{}}}}); err != nil {
		t.Fatalf("bulkUpdateParentChildrenRelationships: %v", err)
	}
	if _, err := client.Relationships.GetParentChildRelationship(ctx, RelationshipsGetParentChildRelationshipParams{ParentId: "test", Id: "test"}); err != nil {
		t.Fatalf("getParentChildRelationship: %v", err)
	}
	if _, err := client.Relationships.UpdateParentChildRelationship(ctx, RelationshipsUpdateParentChildRelationshipParams{ParentId: "test", Id: "test", Body: RelationshipsUpdateParentChildRelationshipRequest{Child: RelationshipsUpdateParentChildRelationshipRequestChild{}}}); err != nil {
		t.Fatalf("updateParentChildRelationship: %v", err)
	}
	if err := client.Relationships.DeleteParentChildRelationship(ctx, RelationshipsDeleteParentChildRelationshipParams{ParentId: "test", Id: "test"}); err != nil {
		t.Fatalf("deleteParentChildRelationship: %v", err)
	}
	if _, err := client.Parents.ListParents(ctx, ParentsListParentsParams{}); err != nil {
		t.Fatalf("listParents: %v", err)
	}
	if _, err := client.Parents.CreateParent(ctx, ParentsCreateParentParams{Body: ParentsCreateParentRequest{Parent: ParentsCreateParentRequestParent{}}}); err != nil {
		t.Fatalf("createParent: %v", err)
	}
	if _, err := client.Parents.GetParentById(ctx, ParentsGetParentByIdParams{Id: 1}); err != nil {
		t.Fatalf("getParentByID: %v", err)
	}
	if _, err := client.Parents.UpdateParent(ctx, ParentsUpdateParentParams{Id: 1, Body: ParentsUpdateParentRequest{Parent: ParentsUpdateParentRequestParent{}}}); err != nil {
		t.Fatalf("updateParent: %v", err)
	}
	if err := client.Parents.ArchiveParent(ctx, ParentsArchiveParentParams{Id: 1}); err != nil {
		t.Fatalf("archiveParent: %v", err)
	}
	if err := client.Parents.UnarchiveParent(ctx, ParentsUnarchiveParentParams{Id: 1}); err != nil {
		t.Fatalf("unarchiveParent: %v", err)
	}
	if err := client.Parents.SendParentWelcomeEmail(ctx, ParentsSendParentWelcomeEmailParams{Id: 1}); err != nil {
		t.Fatalf("sendParentWelcomeEmail: %v", err)
	}
	if _, err := client.Academics.CreateAcademicTerm(ctx, AcademicsCreateAcademicTermParams{ProgramCode: "test", AcademicYearId: "test", Body: AcademicTermRequest{}}); err != nil {
		t.Fatalf("createAcademicTerm: %v", err)
	}
	if _, err := client.Academics.UpdateAcademicTerm(ctx, AcademicsUpdateAcademicTermParams{ProgramCode: "test", AcademicYearId: "test", Id: "test", Body: AcademicTermRequest{}}); err != nil {
		t.Fatalf("updateAcademicTerm: %v", err)
	}
	if _, err := client.Academics.DeleteAcademicTerm(ctx, AcademicsDeleteAcademicTermParams{ProgramCode: "test", AcademicYearId: 1, Id: 1}); err != nil {
		t.Fatalf("deleteAcademicTerm: %v", err)
	}
	if _, err := client.Academics.Retrieve(ctx, AcademicsRetrieveParams{ProgramCode: "test", Id: 1}); err != nil {
		t.Fatalf("get_v2p3_school_programs_program_code_academic_years_id: %v", err)
	}
	if _, err := client.Academics.CreateAcademicYear(ctx, AcademicsCreateAcademicYearParams{ProgramCode: "test", Body: AcademicYearRequest{}}); err != nil {
		t.Fatalf("createAcademicYear: %v", err)
	}
	if _, err := client.Academics.GetAssessmentTypes(ctx, AcademicsGetAssessmentTypesParams{ProgramCode: "test"}); err != nil {
		t.Fatalf("getAssessmentTypes: %v", err)
	}
	if _, err := client.Academics.List(ctx, AcademicsListParams{ProgramCode: "test", AcademicYearId: 1}); err != nil {
		t.Fatalf("get_v2p3_school_programs_program_code_academic_years_academic_year_id_calendar: %v", err)
	}
	if _, err := client.Academics.GetAllTermReports(ctx, AcademicsGetAllTermReportsParams{Program: "test"}); err != nil {
		t.Fatalf("GetAllTermReports: %v", err)
	}
	if _, err := client.Academics.GetTermReport(ctx, AcademicsGetTermReportParams{Program: "test", Id: 1}); err != nil {
		t.Fatalf("getTermReport: %v", err)
	}
	if err := client.Academics.DownloadTermReportFile(ctx, AcademicsDownloadTermReportFileParams{Program: "test", Id: 1, Kind: "test"}); err != nil {
		t.Fatalf("downloadTermReportFile: %v", err)
	}
	if _, err := client.Academics.GetSubjectGroups(ctx, AcademicsGetSubjectGroupsParams{ProgramCode: "test"}); err != nil {
		t.Fatalf("getSubjectGroups: %v", err)
	}
	if _, err := client.Academics.CreateSubjectGroup(ctx, AcademicsCreateSubjectGroupParams{ProgramCode: "test", Body: SubjectGroupRequest{}}); err != nil {
		t.Fatalf("createSubjectGroup: %v", err)
	}
	if _, err := client.Academics.GetSubjectGroup(ctx, AcademicsGetSubjectGroupParams{ProgramCode: "test", Id: 1}); err != nil {
		t.Fatalf("getSubjectGroup: %v", err)
	}
	if _, err := client.Academics.UpdateSubjectGroup(ctx, AcademicsUpdateSubjectGroupParams{ProgramCode: "test", Id: 1, Body: SubjectGroupRequest{}}); err != nil {
		t.Fatalf("updateSubjectGroup: %v", err)
	}
	if _, err := client.Academics.DestroySubjectGroup(ctx, AcademicsDestroySubjectGroupParams{ProgramCode: "test", Id: 1}); err != nil {
		t.Fatalf("destroySubjectGroup: %v", err)
	}
	if _, err := client.Academics.GetSubjects(ctx, AcademicsGetSubjectsParams{ProgramCode: "test"}); err != nil {
		t.Fatalf("getSubjects: %v", err)
	}
	if _, err := client.Academics.CreateSubject(ctx, AcademicsCreateSubjectParams{ProgramCode: "test", Body: SubjectRequest{}}); err != nil {
		t.Fatalf("createSubject: %v", err)
	}
	if _, err := client.Academics.GetSubject(ctx, AcademicsGetSubjectParams{ProgramCode: "test", Id: 1}); err != nil {
		t.Fatalf("getSubject: %v", err)
	}
	if _, err := client.Academics.UpdateSubject(ctx, AcademicsUpdateSubjectParams{ProgramCode: "test", Id: 1, Body: SubjectRequest{}}); err != nil {
		t.Fatalf("updateSubject: %v", err)
	}
	if _, err := client.Academics.DeleteSubject(ctx, AcademicsDeleteSubjectParams{ProgramCode: "test", Id: 1}); err != nil {
		t.Fatalf("deleteSubject: %v", err)
	}
	if _, err := client.ExtendedApis.BulkEnableSubjects(ctx, ExtendedApisBulkEnableSubjectsParams{ProgramCode: "test", Body: ToggleSchoolSubjectsRequest{}}); err != nil {
		t.Fatalf("bulkEnableSubjects: %v", err)
	}
	if _, err := client.ExtendedApis.BulkDisableSubjects(ctx, ExtendedApisBulkDisableSubjectsParams{ProgramCode: "test", Body: ToggleSchoolSubjectsRequest{}}); err != nil {
		t.Fatalf("bulkDisableSubjects: %v", err)
	}
	if err := client.Academics.GetSchool(ctx); err != nil {
		t.Fatalf("getSchool: %v", err)
	}
	if err := client.Academics.ListAcademicYears(ctx, AcademicsListAcademicYearsParams{}); err != nil {
		t.Fatalf("listAcademicYears: %v", err)
	}
	if _, err := client.Academics.ListGrades(ctx); err != nil {
		t.Fatalf("listGrades: %v", err)
	}
	if err := client.Academics.ListSubjects(ctx); err != nil {
		t.Fatalf("listSubjects: %v", err)
	}
	if _, err := client.Academics.ListSchoolTermGradeScales(ctx); err != nil {
		t.Fatalf("listSchoolTermGradeScales: %v", err)
	}
	if err := client.Academics.ListTermRubrics(ctx); err != nil {
		t.Fatalf("listTermRubrics: %v", err)
	}
	if _, err := client.Students.UpdateStudentAvatar(ctx, StudentsUpdateStudentAvatarParams{Id: 1, Body: StudentsUpdateStudentAvatarRequest{}}); err != nil {
		t.Fatalf("updateStudentAvatar: %v", err)
	}
	if _, err := client.Students.DeleteStudentAvatar(ctx, StudentsDeleteStudentAvatarParams{Id: 1}); err != nil {
		t.Fatalf("deleteStudentAvatar: %v", err)
	}
	if _, err := client.Attendance.GetStudentExcusals(ctx, AttendanceGetStudentExcusalsParams{StudentId: 1}); err != nil {
		t.Fatalf("getStudentExcusals: %v", err)
	}
	if _, err := client.Attendance.CreateStudentExcusal(ctx, AttendanceCreateStudentExcusalParams{StudentId: 1, Body: CreateAttendanceExcusalRequest{}}); err != nil {
		t.Fatalf("createStudentExcusal: %v", err)
	}
	if _, err := client.ExtendedApis.UpdateStudentExcusal(ctx, ExtendedApisUpdateStudentExcusalParams{StudentId: 1, Id: 1, Body: UpdateAttendanceExcusalRequest{}}); err != nil {
		t.Fatalf("updateStudentExcusal: %v", err)
	}
	if _, err := client.ExtendedApis.DeleteStudentExcusal(ctx, ExtendedApisDeleteStudentExcusalParams{StudentId: 1, Id: 1}); err != nil {
		t.Fatalf("deleteStudentExcusal: %v", err)
	}
	if _, err := client.Students.ListStudents(ctx, StudentsListStudentsParams{}); err != nil {
		t.Fatalf("listStudents: %v", err)
	}
	if _, err := client.Students.CreateStudent(ctx, StudentsCreateStudentParams{Body: StudentsCreateStudentRequest{Student: StudentsCreateStudentRequestStudent{}}}); err != nil {
		t.Fatalf("createStudent: %v", err)
	}
	if _, err := client.Students.GetStudentById(ctx, StudentsGetStudentByIdParams{Id: 1}); err != nil {
		t.Fatalf("getStudentByID: %v", err)
	}
	if _, err := client.Students.UpdateStudent(ctx, StudentsUpdateStudentParams{Id: 1, Body: StudentsUpdateStudentRequest{}}); err != nil {
		t.Fatalf("updateStudent: %v", err)
	}
	if err := client.Students.ArchiveStudent(ctx, StudentsArchiveStudentParams{Id: 1, Body: map[string]any{}}); err != nil {
		t.Fatalf("archiveStudent: %v", err)
	}
	if err := client.Students.UnarchiveStudent(ctx, StudentsUnarchiveStudentParams{Id: 1}); err != nil {
		t.Fatalf("unarchiveStudent: %v", err)
	}
	if _, err := client.Memberships.GetStudentMemberships(ctx, MembershipsGetStudentMembershipsParams{Id: 1}); err != nil {
		t.Fatalf("getStudentMemberships: %v", err)
	}
	if err := client.ExtendedApis.SetStudentHomeroomAttendance(ctx, ExtendedApisSetStudentHomeroomAttendanceParams{Id: 1, Body: ExtendedApisSetStudentHomeroomAttendanceRequest{}}); err != nil {
		t.Fatalf("set_student_homeroom_attendance: %v", err)
	}
	if err := client.Students.SendStudentWelcomeEmail(ctx, StudentsSendStudentWelcomeEmailParams{Id: 1}); err != nil {
		t.Fatalf("sendStudentWelcomeEmail: %v", err)
	}
	if _, err := client.OnlineAssessment.UpdateOnlineAssessment(ctx, OnlineAssessmentUpdateOnlineAssessmentParams{TaskId: 1, AssessPrepUid: "test", Body: OnlineAssessmentUpdateOnlineAssessmentRequest{}}); err != nil {
		t.Fatalf("updateOnlineAssessment: %v", err)
	}
	if _, err := client.ExtendedApis.UpdateStudentTaskGrades(ctx, ExtendedApisUpdateStudentTaskGradesParams{TaskId: 1, StudentId: 1, Body: ExtendedApisUpdateStudentTaskGradesRequest{}}); err != nil {
		t.Fatalf("UpdateStudentTaskGrades: %v", err)
	}
	if _, err := client.ExtendedApis.BulkUpdateStudentTaskGrades(ctx, ExtendedApisBulkUpdateStudentTaskGradesParams{TaskId: 1, Body: BulkUpdateStudentTaskGradeRequest{}}); err != nil {
		t.Fatalf("BulkUpdateStudentTaskGrades: %v", err)
	}
	if _, err := client.Coursework.BulkResetStudentsTaskGrades(ctx, CourseworkBulkResetStudentsTaskGradesParams{TaskId: 1, Body: BulkDestroyStudentTaskGradeRequest{}}); err != nil {
		t.Fatalf("BulkResetStudentsTaskGrades: %v", err)
	}
	if err := client.Teachers.UpdateTeacherAvatar(ctx, TeachersUpdateTeacherAvatarParams{Id: 1, Body: TeachersUpdateTeacherAvatarRequest{}}); err != nil {
		t.Fatalf("updateTeacherAvatar: %v", err)
	}
	if err := client.Teachers.DeleteTeacherAvatar(ctx, TeachersDeleteTeacherAvatarParams{Id: 1}); err != nil {
		t.Fatalf("deleteTeacherAvatar: %v", err)
	}
	if _, err := client.Teachers.ListTeachers(ctx, TeachersListTeachersParams{}); err != nil {
		t.Fatalf("listTeachers: %v", err)
	}
	if _, err := client.Teachers.CreateTeacher(ctx, TeachersCreateTeacherParams{Body: TeachersCreateTeacherRequest{Teacher: TeachersCreateTeacherRequestTeacher{}}}); err != nil {
		t.Fatalf("createTeacher: %v", err)
	}
	if _, err := client.Teachers.GetTeacherById(ctx, TeachersGetTeacherByIdParams{Id: 1}); err != nil {
		t.Fatalf("getTeacherByID: %v", err)
	}
	if err := client.Teachers.UpdateTeacher(ctx, TeachersUpdateTeacherParams{Id: 1, Body: TeachersUpdateTeacherRequest{Teacher: TeachersUpdateTeacherRequestTeacher{}}}); err != nil {
		t.Fatalf("updateTeacher: %v", err)
	}
	if err := client.Teachers.ArchiveTeacher(ctx, TeachersArchiveTeacherParams{Id: 1}); err != nil {
		t.Fatalf("archiveTeacher: %v", err)
	}
	if err := client.Teachers.UnarchiveTeacher(ctx, TeachersUnarchiveTeacherParams{Id: 1}); err != nil {
		t.Fatalf("unarchiveTeacher: %v", err)
	}
	if _, err := client.Teachers.ListTeacherClassesMemberships(ctx, TeachersListTeacherClassesMembershipsParams{Id: 1}); err != nil {
		t.Fatalf("listTeacherClassesMemberships: %v", err)
	}
	if _, err := client.Teachers.ListTeacherGroupsMemberships(ctx, TeachersListTeacherGroupsMembershipsParams{Id: 1}); err != nil {
		t.Fatalf("listTeacherGroupsMemberships: %v", err)
	}
	if err := client.Teachers.SendTeacherWelcomeEmail(ctx, TeachersSendTeacherWelcomeEmailParams{Id: 1}); err != nil {
		t.Fatalf("sendTeacherWelcomeEmail: %v", err)
	}
	if _, err := client.UnitClassAssignments.ListUnitClassAssignments(ctx, UnitClassAssignmentsListUnitClassAssignmentsParams{}); err != nil {
		t.Fatalf("listUnitClassAssignments: %v", err)
	}
	if _, err := client.Units.ListUnits(ctx, UnitsListUnitsParams{}); err != nil {
		t.Fatalf("listUnits: %v", err)
	}
	if _, err := client.Units.GetUnitById(ctx, UnitsGetUnitByIdParams{Id: 1}); err != nil {
		t.Fatalf("getUnitByID: %v", err)
	}
	if _, err := client.Projects.ListYearGroupCasExperiencesStudents(ctx, ProjectsListYearGroupCasExperiencesStudentsParams{Id: 1}); err != nil {
		t.Fatalf("listYearGroupCasExperiencesStudents: %v", err)
	}
	if _, err := client.Projects.GetYearGroupCas(ctx, ProjectsGetYearGroupCasParams{Id: 1}); err != nil {
		t.Fatalf("getYearGroupCas: %v", err)
	}
	if err := client.Projects.ListYearGroupPblProposalStudentsDetails(ctx, ProjectsListYearGroupPblProposalStudentsDetailsParams{YearGroupId: 1, ProjectId: 1}); err != nil {
		t.Fatalf("listYearGroupPblProposalStudentsDetails: %v", err)
	}
	if err := client.Projects.ListYearGroupPblReflectionsStudentsDetails(ctx, ProjectsListYearGroupPblReflectionsStudentsDetailsParams{YearGroupId: 1, ProjectId: 1}); err != nil {
		t.Fatalf("listYearGroupPblReflectionsStudentsDetails: %v", err)
	}
	if err := client.Projects.ListYearGroupPblTodosStudentsDetails(ctx, ProjectsListYearGroupPblTodosStudentsDetailsParams{YearGroupId: 1, ProjectId: 1}); err != nil {
		t.Fatalf("listYearGroupPblTodosStudentsDetails: %v", err)
	}
	if err := client.Projects.ListYearGroupPblJournalStudentsDetails(ctx, ProjectsListYearGroupPblJournalStudentsDetailsParams{YearGroupId: 1, ProjectId: 1}); err != nil {
		t.Fatalf("listYearGroupPblJournalStudentsDetails: %v", err)
	}
	if err := client.Projects.ListYearGroupPblDocumentsStudentsDetails(ctx, ProjectsListYearGroupPblDocumentsStudentsDetailsParams{YearGroupId: 1, ProjectId: 1}); err != nil {
		t.Fatalf("listYearGroupPblDocumentsStudentsDetails: %v", err)
	}
	if err := client.Projects.ListYearGroupPblPresentationStudentsDetails(ctx, ProjectsListYearGroupPblPresentationStudentsDetailsParams{YearGroupId: 1, ProjectId: 1}); err != nil {
		t.Fatalf("listYearGroupPblPresentationStudentsDetails: %v", err)
	}
	if err := client.Projects.ListYearGroupPblNotesAndInterviewsStudentsDetails(ctx, ProjectsListYearGroupPblNotesAndInterviewsStudentsDetailsParams{YearGroupId: 1, ProjectId: 1}); err != nil {
		t.Fatalf("listYearGroupPblNotesAndInterviewsStudentsDetails: %v", err)
	}
	if err := client.Projects.ListYearGroupProjectBasedLearningTemplates(ctx, ProjectsListYearGroupProjectBasedLearningTemplatesParams{Id: 1}); err != nil {
		t.Fatalf("listYearGroupProjectBasedLearningTemplates: %v", err)
	}
	if _, err := client.YearGroups.ListYearGroupServiceLearningCategoriesStudents(ctx, YearGroupsListYearGroupServiceLearningCategoriesStudentsParams{Id: 1}); err != nil {
		t.Fatalf("listYearGroupServiceLearningCategoriesStudents: %v", err)
	}
	if _, err := client.YearGroups.ListYearGroupServiceLearningOutcomesStudents(ctx, YearGroupsListYearGroupServiceLearningOutcomesStudentsParams{Id: 1}); err != nil {
		t.Fatalf("listYearGroupServiceLearningOutcomesStudents: %v", err)
	}
	if _, err := client.YearGroups.GetYearGroupServiceLearning(ctx, YearGroupsGetYearGroupServiceLearningParams{Id: 1}); err != nil {
		t.Fatalf("getYearGroupServiceLearning: %v", err)
	}
	if err := client.YearGroups.ListYearGroups(ctx, YearGroupsListYearGroupsParams{}); err != nil {
		t.Fatalf("listYearGroups: %v", err)
	}
	if err := client.YearGroups.ListStudentsFromYearGroups(ctx, YearGroupsListStudentsFromYearGroupsParams{Id: 1}); err != nil {
		t.Fatalf("listStudentsFromYearGroups: %v", err)
	}
	if err := client.YearGroups.AddStudentToYearGroup(ctx, YearGroupsAddStudentToYearGroupParams{Id: 1, Body: YearGroupsAddStudentToYearGroupRequest{StudentIds: []any{1}}}); err != nil {
		t.Fatalf("addStudentToYearGroup: %v", err)
	}
	if err := client.YearGroups.RemoveStudentToYearGroup(ctx, YearGroupsRemoveStudentToYearGroupParams{Id: 1, Body: YearGroupsRemoveStudentToYearGroupRequest{StudentIds: []any{1}}}); err != nil {
		t.Fatalf("removeStudentToYearGroup: %v", err)
	}
	if err := client.YearGroups.ListAdvisorsFromYearGroup(ctx, YearGroupsListAdvisorsFromYearGroupParams{Id: 1}); err != nil {
		t.Fatalf("listAdvisorsFromYearGroup: %v", err)
	}
	if err := client.Memberships.GetTeacherMemberships(ctx, MembershipsGetTeacherMembershipsParams{ClassId: 1}); err != nil {
		t.Fatalf("getTeacherMemberships: %v", err)
	}
	if err := client.ExtendedApis.BulkUpdateTeacherMemberships(ctx, ExtendedApisBulkUpdateTeacherMembershipsParams{ClassId: 1, Body: BulkUpdateTeachers{Teachers: []any{BulkUpdateTeachersTeachersItem{}}}}); err != nil {
		t.Fatalf("bulkUpdateTeacherMemberships: %v", err)
	}
	if err := client.Classes.AddTeachersToClass(ctx, ClassesAddTeachersToClassParams{ClassId: 1, Body: ClassesAddTeachersToClassRequest{TeacherIds: []any{1}}}); err != nil {
		t.Fatalf("addTeachersToClass: %v", err)
	}
	if err := client.Memberships.RemoveTeachersFromClass(ctx, MembershipsRemoveTeachersFromClassParams{ClassId: 1, Body: MembershipsRemoveTeachersFromClassRequest{TeacherIds: []any{1}}}); err != nil {
		t.Fatalf("removeTeachersFromClass: %v", err)
	}
	if err := client.Coursework.CreateTaskforClass(ctx, CourseworkCreateTaskforClassParams{ClassId: 1, Body: CourseworkCreateTaskforClassRequest{CoreTask: CoreTaskAttributes{AuthorId: 1, Name: "test", DueDate: "test", AssessmentTypeId: 1}}}); err != nil {
		t.Fatalf("createTaskforClass: %v", err)
	}

	if observed == 0 {
		t.Fatal("observability hook did not fire")
	}
}
