// gRPC-web client for API V2P3: protobuf binary messages with 5-byte length-prefix framing.
import { encodeMessage, decodeMessage, frame, unframe } from "./proto.js";

export interface GrpcWebOptions {
  baseUrl?: string;
  apiKey?: string;
  headers?: Record<string, string>;
}

export class GrpcWebError extends Error {
  constructor(public readonly code: number, message: string) {
    super(message);
    this.name = "GrpcWebError";
  }
}

export function createGrpcWebClient(options: GrpcWebOptions = {}) {
  const baseUrl = (options.baseUrl ?? "https://api.managebac.com").replace(/\/$/, "");
  const apiKey = options.apiKey ?? process.env.MANAGE_BAC_PLUS_API_KEY;

  async function unary(service: string, method: string, input: Record<string, unknown>, requestType?: string, responseType?: string): Promise<unknown> {
    const headers: Record<string, string> = {
      "content-type": "application/grpc-web+proto",
      "x-grpc-web": "1",
      ...options.headers,
    };
    if (apiKey) headers.authorization = `Bearer ${apiKey}`;
    const payload = requestType ? encodeMessage(requestType, input) : new Uint8Array();
    const response = await fetch(`${baseUrl}/${service}/${method}`, {
      method: "POST",
      headers,
      body: frame(payload) as unknown as BodyInit,
    });
    if (!response.ok) throw new GrpcWebError(response.status, `gRPC-web call failed: ${response.status}`);
    const data = new Uint8Array(await response.arrayBuffer());
    for (const f of unframe(data)) {
      // data frames have the low bit clear; trailer frames set flag bit 0x80.
      if ((f.flag & 0x80) === 0) return responseType ? decodeMessage(responseType, f.payload) : f.payload;
    }
    return undefined;
  }

  return {
    coursework: {
      listGradesForClass: (input: Record<string, unknown> = {}) => unary("CourseworkService", "ListGradesForClass", input, undefined, undefined),
      listTermGradesForClass: (input: Record<string, unknown> = {}) => unary("CourseworkService", "ListTermGradesForClass", input, undefined, undefined),
      listCriteriaforClass: (input: Record<string, unknown> = {}) => unary("CourseworkService", "ListCriteriaforClass", input, undefined, "CriteriaResponse"),
      listClassTaskCategories: (input: Record<string, unknown> = {}) => unary("CourseworkService", "ListClassTaskCategories", input, undefined, "CourseworkListClassTaskCategoriesResponse"),
      downloadSubmissionFile: (input: Record<string, unknown> = {}) => unary("CourseworkService", "DownloadSubmissionFile", input, undefined, undefined),
      listTaskSubmissions: (input: Record<string, unknown> = {}) => unary("CourseworkService", "ListTaskSubmissions", input, undefined, "CourseworkListTaskSubmissionsResponse"),
      getTaskSubmission: (input: Record<string, unknown> = {}) => unary("CourseworkService", "GetTaskSubmission", input, undefined, "CourseworkGetTaskSubmissionResponse"),
      listTasksforClass: (input: Record<string, unknown> = {}) => unary("CourseworkService", "ListTasksforClass", input, undefined, undefined),
      getTasksByIdforClass: (input: Record<string, unknown> = {}) => unary("CourseworkService", "GetTasksByIdforClass", input, undefined, undefined),
      updateTaskforClass: (input: Record<string, unknown> = {}) => unary("CourseworkService", "UpdateTaskforClass", input, "CourseworkUpdateTaskforClassRequest", undefined),
      partialUpdateTaskforClass: (input: Record<string, unknown> = {}) => unary("CourseworkService", "PartialUpdateTaskforClass", input, "CourseworkPartialUpdateTaskforClassRequest", "CourseworkPartialUpdateTaskforClassResponse"),
      deleteTaskforClass: (input: Record<string, unknown> = {}) => unary("CourseworkService", "DeleteTaskforClass", input, undefined, undefined),
      listStudentAssessmentResultsForClassTask: (input: Record<string, unknown> = {}) => unary("CourseworkService", "ListStudentAssessmentResultsForClassTask", input, undefined, undefined),
      bulkResetStudentsTaskGrades: (input: Record<string, unknown> = {}) => unary("CourseworkService", "BulkResetStudentsTaskGrades", input, "BulkDestroyStudentTaskGradeRequest", "BulkStudentTaskGradeResponse"),
      createTaskforClass: (input: Record<string, unknown> = {}) => unary("CourseworkService", "CreateTaskforClass", input, "CourseworkCreateTaskforClassRequest", undefined),
    },
    attendance: {
      setAttendanceSettings: (input: Record<string, unknown> = {}) => unary("AttendanceService", "SetAttendanceSettings", input, "SetAttendanceSettingsRequest", undefined),
      listCategories: (input: Record<string, unknown> = {}) => unary("AttendanceService", "ListCategories", input, undefined, "AttendanceListCategoriesResponse"),
      getClassTimetable: (input: Record<string, unknown> = {}) => unary("AttendanceService", "GetClassTimetable", input, undefined, undefined),
      getAttendanceForClass: (input: Record<string, unknown> = {}) => unary("AttendanceService", "GetAttendanceForClass", input, undefined, undefined),
      getClassAttendanceForDate: (input: Record<string, unknown> = {}) => unary("AttendanceService", "GetClassAttendanceForDate", input, undefined, undefined),
      getDateExcusals: (input: Record<string, unknown> = {}) => unary("AttendanceService", "GetDateExcusals", input, undefined, "AttendanceGetDateExcusalsResponse"),
      getAttendanceForYearGroupByTerm: (input: Record<string, unknown> = {}) => unary("AttendanceService", "GetAttendanceForYearGroupByTerm", input, undefined, undefined),
      getAttendanceForYearGroupByDate: (input: Record<string, unknown> = {}) => unary("AttendanceService", "GetAttendanceForYearGroupByDate", input, undefined, undefined),
      getAttendanceAdjustmentsForYearGroupByTerm: (input: Record<string, unknown> = {}) => unary("AttendanceService", "GetAttendanceAdjustmentsForYearGroupByTerm", input, undefined, undefined),
      getStudentExcusals: (input: Record<string, unknown> = {}) => unary("AttendanceService", "GetStudentExcusals", input, undefined, "AttendanceGetStudentExcusalsResponse"),
      createStudentExcusal: (input: Record<string, unknown> = {}) => unary("AttendanceService", "CreateStudentExcusal", input, "CreateAttendanceExcusalRequest", "AttendanceExcusalsResponse"),
    },
    authentication: {
      listTokenResources: (input: Record<string, unknown> = {}) => unary("AuthenticationService", "ListTokenResources", input, undefined, "AuthPermissionsResponse"),
      createOauthToken: (input: Record<string, unknown> = {}) => unary("AuthenticationService", "CreateOauthToken", input, "OauthTokenRequest", "OauthTokenResponse"),
    },
    utilities: {
      showAvatarById: (input: Record<string, unknown> = {}) => unary("UtilitiesService", "ShowAvatarById", input, undefined, undefined),
      ping: (input: Record<string, unknown> = {}) => unary("UtilitiesService", "Ping", input, undefined, undefined),
    },
    behaviorNotes: {
      listBehaviorNotes: (input: Record<string, unknown> = {}) => unary("BehaviorNotesService", "ListBehaviorNotes", input, undefined, "BehaviorNotesListBehaviorNotesResponse"),
    },
    memberships: {
      getStudentsForClass: (input: Record<string, unknown> = {}) => unary("MembershipsService", "GetStudentsForClass", input, undefined, undefined),
      listMemberships: (input: Record<string, unknown> = {}) => unary("MembershipsService", "ListMemberships", input, undefined, "MembershipsListMembershipsResponse"),
      getStudentMemberships: (input: Record<string, unknown> = {}) => unary("MembershipsService", "GetStudentMemberships", input, undefined, "MembershipsGetStudentMembershipsResponse"),
      getTeacherMemberships: (input: Record<string, unknown> = {}) => unary("MembershipsService", "GetTeacherMemberships", input, undefined, undefined),
      removeTeachersFromClass: (input: Record<string, unknown> = {}) => unary("MembershipsService", "RemoveTeachersFromClass", input, "MembershipsRemoveTeachersFromClassRequest", undefined),
    },
    extendedApis: {
      bulkUpdateStudentsFromClass: (input: Record<string, unknown> = {}) => unary("ExtendedApisService", "BulkUpdateStudentsFromClass", input, "BulkUpdateStudents", undefined),
      upsertClasses: (input: Record<string, unknown> = {}) => unary("ExtendedApisService", "UpsertClasses", input, "UpsertClasses", "UpsertClassesResponse"),
      setClassAttendanceForStudents: (input: Record<string, unknown> = {}) => unary("ExtendedApisService", "SetClassAttendanceForStudents", input, "BulkUpdateAttendance", undefined),
      bulkEnableSubjects: (input: Record<string, unknown> = {}) => unary("ExtendedApisService", "BulkEnableSubjects", input, "ToggleSchoolSubjectsRequest", "ToggleSchoolSubjectsRequest"),
      bulkDisableSubjects: (input: Record<string, unknown> = {}) => unary("ExtendedApisService", "BulkDisableSubjects", input, "ToggleSchoolSubjectsRequest", "ToggleSchoolSubjectsRequest"),
      updateStudentExcusal: (input: Record<string, unknown> = {}) => unary("ExtendedApisService", "UpdateStudentExcusal", input, "UpdateAttendanceExcusalRequest", "AttendanceExcusalsResponse"),
      deleteStudentExcusal: (input: Record<string, unknown> = {}) => unary("ExtendedApisService", "DeleteStudentExcusal", input, undefined, "AttendanceExcusalsResponse"),
      setStudentHomeroomAttendance: (input: Record<string, unknown> = {}) => unary("ExtendedApisService", "SetStudentHomeroomAttendance", input, "ExtendedApisSetStudentHomeroomAttendanceRequest", undefined),
      updateStudentTaskGrades: (input: Record<string, unknown> = {}) => unary("ExtendedApisService", "UpdateStudentTaskGrades", input, "ExtendedApisUpdateStudentTaskGradesRequest", "ExtendedApisUpdateStudentTaskGradesResponse"),
      bulkUpdateStudentTaskGrades: (input: Record<string, unknown> = {}) => unary("ExtendedApisService", "BulkUpdateStudentTaskGrades", input, "BulkUpdateStudentTaskGradeRequest", "BulkStudentTaskGradeResponse"),
      bulkUpdateTeacherMemberships: (input: Record<string, unknown> = {}) => unary("ExtendedApisService", "BulkUpdateTeacherMemberships", input, "BulkUpdateTeachers", undefined),
    },
    classes: {
      listClasses: (input: Record<string, unknown> = {}) => unary("ClassesService", "ListClasses", input, undefined, "ClassesListClassesResponse"),
      createClass: (input: Record<string, unknown> = {}) => unary("ClassesService", "CreateClass", input, "CreateClass", "Class"),
      getClassById: (input: Record<string, unknown> = {}) => unary("ClassesService", "GetClassById", input, undefined, "ClassesGetClassByIdResponse"),
      updateClass: (input: Record<string, unknown> = {}) => unary("ClassesService", "UpdateClass", input, "UpdateClass", "Class"),
      addStudentsToClass: (input: Record<string, unknown> = {}) => unary("ClassesService", "AddStudentsToClass", input, "ClassesAddStudentsToClassRequest", undefined),
      removeStudentsFromClass: (input: Record<string, unknown> = {}) => unary("ClassesService", "RemoveStudentsFromClass", input, "ClassesRemoveStudentsFromClassRequest", undefined),
      getClassTerms: (input: Record<string, unknown> = {}) => unary("ClassesService", "GetClassTerms", input, undefined, undefined),
      addTeachersToClass: (input: Record<string, unknown> = {}) => unary("ClassesService", "AddTeachersToClass", input, "ClassesAddTeachersToClassRequest", undefined),
    },
    relationships: {
      listOfParentChildrenRelationships: (input: Record<string, unknown> = {}) => unary("RelationshipsService", "ListOfParentChildrenRelationships", input, undefined, "RelationshipsListOfParentChildrenRelationshipsResponse"),
      createParentChildRelationship: (input: Record<string, unknown> = {}) => unary("RelationshipsService", "CreateParentChildRelationship", input, "RelationshipsCreateParentChildRelationshipRequest", "RelationshipsCreateParentChildRelationshipResponse"),
      bulkUpdateParentChildrenRelationships: (input: Record<string, unknown> = {}) => unary("RelationshipsService", "BulkUpdateParentChildrenRelationships", input, "RelationshipsBulkUpdateParentChildrenRelationshipsRequest", "RelationshipsBulkUpdateParentChildrenRelationshipsResponse"),
      getParentChildRelationship: (input: Record<string, unknown> = {}) => unary("RelationshipsService", "GetParentChildRelationship", input, undefined, "RelationshipsGetParentChildRelationshipResponse"),
      updateParentChildRelationship: (input: Record<string, unknown> = {}) => unary("RelationshipsService", "UpdateParentChildRelationship", input, "RelationshipsUpdateParentChildRelationshipRequest", "RelationshipsUpdateParentChildRelationshipResponse"),
      deleteParentChildRelationship: (input: Record<string, unknown> = {}) => unary("RelationshipsService", "DeleteParentChildRelationship", input, undefined, undefined),
    },
    parents: {
      listParents: (input: Record<string, unknown> = {}) => unary("ParentsService", "ListParents", input, undefined, "ParentsListParentsResponse"),
      createParent: (input: Record<string, unknown> = {}) => unary("ParentsService", "CreateParent", input, "ParentsCreateParentRequest", "ParentsCreateParentResponse"),
      getParentById: (input: Record<string, unknown> = {}) => unary("ParentsService", "GetParentById", input, undefined, "ParentsGetParentByIdResponse"),
      updateParent: (input: Record<string, unknown> = {}) => unary("ParentsService", "UpdateParent", input, "ParentsUpdateParentRequest", "ParentsUpdateParentResponse"),
      archiveParent: (input: Record<string, unknown> = {}) => unary("ParentsService", "ArchiveParent", input, undefined, undefined),
      unarchiveParent: (input: Record<string, unknown> = {}) => unary("ParentsService", "UnarchiveParent", input, undefined, undefined),
      sendParentWelcomeEmail: (input: Record<string, unknown> = {}) => unary("ParentsService", "SendParentWelcomeEmail", input, undefined, undefined),
    },
    academics: {
      createAcademicTerm: (input: Record<string, unknown> = {}) => unary("AcademicsService", "CreateAcademicTerm", input, "AcademicTermRequest", "AcademicTermResponse"),
      updateAcademicTerm: (input: Record<string, unknown> = {}) => unary("AcademicsService", "UpdateAcademicTerm", input, "AcademicTermRequest", "AcademicTermResponse"),
      deleteAcademicTerm: (input: Record<string, unknown> = {}) => unary("AcademicsService", "DeleteAcademicTerm", input, undefined, "AcademicTermResponse"),
      retrieve: (input: Record<string, unknown> = {}) => unary("AcademicsService", "Retrieve", input, undefined, "AcademicYearResponse"),
      createAcademicYear: (input: Record<string, unknown> = {}) => unary("AcademicsService", "CreateAcademicYear", input, "AcademicYearRequest", "AcademicYearResponse"),
      getAssessmentTypes: (input: Record<string, unknown> = {}) => unary("AcademicsService", "GetAssessmentTypes", input, undefined, "AssessmentTypesResponse"),
      list: (input: Record<string, unknown> = {}) => unary("AcademicsService", "List", input, undefined, "AcademicYearCalendarResponse"),
      getAllTermReports: (input: Record<string, unknown> = {}) => unary("AcademicsService", "GetAllTermReports", input, undefined, "AcademicsGetAllTermReportsResponse"),
      getTermReport: (input: Record<string, unknown> = {}) => unary("AcademicsService", "GetTermReport", input, undefined, "AcademicsGetTermReportResponse"),
      downloadTermReportFile: (input: Record<string, unknown> = {}) => unary("AcademicsService", "DownloadTermReportFile", input, undefined, undefined),
      getSubjectGroups: (input: Record<string, unknown> = {}) => unary("AcademicsService", "GetSubjectGroups", input, undefined, "SubjectGroupsResponse"),
      createSubjectGroup: (input: Record<string, unknown> = {}) => unary("AcademicsService", "CreateSubjectGroup", input, "SubjectGroupRequest", "SubjectGroupResponse"),
      getSubjectGroup: (input: Record<string, unknown> = {}) => unary("AcademicsService", "GetSubjectGroup", input, undefined, "SubjectGroupResponse"),
      updateSubjectGroup: (input: Record<string, unknown> = {}) => unary("AcademicsService", "UpdateSubjectGroup", input, "SubjectGroupRequest", "SubjectGroupResponse"),
      destroySubjectGroup: (input: Record<string, unknown> = {}) => unary("AcademicsService", "DestroySubjectGroup", input, undefined, "SubjectGroupResponse"),
      getSubjects: (input: Record<string, unknown> = {}) => unary("AcademicsService", "GetSubjects", input, undefined, "SubjectsResponse"),
      createSubject: (input: Record<string, unknown> = {}) => unary("AcademicsService", "CreateSubject", input, "SubjectRequest", "SubjectResponse"),
      getSubject: (input: Record<string, unknown> = {}) => unary("AcademicsService", "GetSubject", input, undefined, "SubjectResponse"),
      updateSubject: (input: Record<string, unknown> = {}) => unary("AcademicsService", "UpdateSubject", input, "SubjectRequest", "SubjectResponse"),
      deleteSubject: (input: Record<string, unknown> = {}) => unary("AcademicsService", "DeleteSubject", input, undefined, "SubjectResponse"),
      getSchool: (input: Record<string, unknown> = {}) => unary("AcademicsService", "GetSchool", input, undefined, undefined),
      listAcademicYears: (input: Record<string, unknown> = {}) => unary("AcademicsService", "ListAcademicYears", input, undefined, undefined),
      listGrades: (input: Record<string, unknown> = {}) => unary("AcademicsService", "ListGrades", input, undefined, "AcademicsListGradesResponse"),
      listSubjects: (input: Record<string, unknown> = {}) => unary("AcademicsService", "ListSubjects", input, undefined, undefined),
      listSchoolTermGradeScales: (input: Record<string, unknown> = {}) => unary("AcademicsService", "ListSchoolTermGradeScales", input, undefined, "AcademicsListSchoolTermGradeScalesResponse"),
      listTermRubrics: (input: Record<string, unknown> = {}) => unary("AcademicsService", "ListTermRubrics", input, undefined, undefined),
    },
    students: {
      updateStudentAvatar: (input: Record<string, unknown> = {}) => unary("StudentsService", "UpdateStudentAvatar", input, "StudentsUpdateStudentAvatarRequest", "StudentsUpdateStudentAvatarResponse"),
      deleteStudentAvatar: (input: Record<string, unknown> = {}) => unary("StudentsService", "DeleteStudentAvatar", input, undefined, "StudentsDeleteStudentAvatarResponse"),
      listStudents: (input: Record<string, unknown> = {}) => unary("StudentsService", "ListStudents", input, undefined, "StudentsListStudentsResponse"),
      createStudent: (input: Record<string, unknown> = {}) => unary("StudentsService", "CreateStudent", input, "StudentsCreateStudentRequest", "StudentsCreateStudentResponse"),
      getStudentById: (input: Record<string, unknown> = {}) => unary("StudentsService", "GetStudentById", input, undefined, "StudentsGetStudentByIdResponse"),
      updateStudent: (input: Record<string, unknown> = {}) => unary("StudentsService", "UpdateStudent", input, "StudentsUpdateStudentRequest", "StudentsUpdateStudentResponse"),
      archiveStudent: (input: Record<string, unknown> = {}) => unary("StudentsService", "ArchiveStudent", input, "StudentsArchiveStudentRequest", undefined),
      unarchiveStudent: (input: Record<string, unknown> = {}) => unary("StudentsService", "UnarchiveStudent", input, undefined, undefined),
      sendStudentWelcomeEmail: (input: Record<string, unknown> = {}) => unary("StudentsService", "SendStudentWelcomeEmail", input, undefined, undefined),
    },
    onlineAssessment: {
      updateOnlineAssessment: (input: Record<string, unknown> = {}) => unary("OnlineAssessmentService", "UpdateOnlineAssessment", input, "OnlineAssessmentUpdateOnlineAssessmentRequest", "OnlineAssessmentUpdateOnlineAssessmentResponse"),
    },
    teachers: {
      updateTeacherAvatar: (input: Record<string, unknown> = {}) => unary("TeachersService", "UpdateTeacherAvatar", input, "TeachersUpdateTeacherAvatarRequest", undefined),
      deleteTeacherAvatar: (input: Record<string, unknown> = {}) => unary("TeachersService", "DeleteTeacherAvatar", input, undefined, undefined),
      listTeachers: (input: Record<string, unknown> = {}) => unary("TeachersService", "ListTeachers", input, undefined, "TeachersListTeachersResponse"),
      createTeacher: (input: Record<string, unknown> = {}) => unary("TeachersService", "CreateTeacher", input, "TeachersCreateTeacherRequest", "TeachersCreateTeacherResponse"),
      getTeacherById: (input: Record<string, unknown> = {}) => unary("TeachersService", "GetTeacherById", input, undefined, "TeachersGetTeacherByIdResponse"),
      updateTeacher: (input: Record<string, unknown> = {}) => unary("TeachersService", "UpdateTeacher", input, "TeachersUpdateTeacherRequest", undefined),
      archiveTeacher: (input: Record<string, unknown> = {}) => unary("TeachersService", "ArchiveTeacher", input, undefined, undefined),
      unarchiveTeacher: (input: Record<string, unknown> = {}) => unary("TeachersService", "UnarchiveTeacher", input, undefined, undefined),
      listTeacherClassesMemberships: (input: Record<string, unknown> = {}) => unary("TeachersService", "ListTeacherClassesMemberships", input, undefined, "TeachersListTeacherClassesMembershipsResponse"),
      listTeacherGroupsMemberships: (input: Record<string, unknown> = {}) => unary("TeachersService", "ListTeacherGroupsMemberships", input, undefined, "TeachersListTeacherGroupsMembershipsResponse"),
      sendTeacherWelcomeEmail: (input: Record<string, unknown> = {}) => unary("TeachersService", "SendTeacherWelcomeEmail", input, undefined, undefined),
    },
    unitClassAssignments: {
      listUnitClassAssignments: (input: Record<string, unknown> = {}) => unary("UnitClassAssignmentsService", "ListUnitClassAssignments", input, undefined, "UnitClassAssignmentsListUnitClassAssignmentsResponse"),
    },
    units: {
      listUnits: (input: Record<string, unknown> = {}) => unary("UnitsService", "ListUnits", input, undefined, "UnitsListUnitsResponse"),
      getUnitById: (input: Record<string, unknown> = {}) => unary("UnitsService", "GetUnitById", input, undefined, "UnitsGetUnitByIdResponse"),
    },
    projects: {
      listYearGroupCasExperiencesStudents: (input: Record<string, unknown> = {}) => unary("ProjectsService", "ListYearGroupCasExperiencesStudents", input, undefined, "CasExperiencesStudentsResponse"),
      getYearGroupCas: (input: Record<string, unknown> = {}) => unary("ProjectsService", "GetYearGroupCas", input, undefined, "CasSettings"),
      listYearGroupPblProposalStudentsDetails: (input: Record<string, unknown> = {}) => unary("ProjectsService", "ListYearGroupPblProposalStudentsDetails", input, undefined, undefined),
      listYearGroupPblReflectionsStudentsDetails: (input: Record<string, unknown> = {}) => unary("ProjectsService", "ListYearGroupPblReflectionsStudentsDetails", input, undefined, undefined),
      listYearGroupPblTodosStudentsDetails: (input: Record<string, unknown> = {}) => unary("ProjectsService", "ListYearGroupPblTodosStudentsDetails", input, undefined, undefined),
      listYearGroupPblJournalStudentsDetails: (input: Record<string, unknown> = {}) => unary("ProjectsService", "ListYearGroupPblJournalStudentsDetails", input, undefined, undefined),
      listYearGroupPblDocumentsStudentsDetails: (input: Record<string, unknown> = {}) => unary("ProjectsService", "ListYearGroupPblDocumentsStudentsDetails", input, undefined, undefined),
      listYearGroupPblPresentationStudentsDetails: (input: Record<string, unknown> = {}) => unary("ProjectsService", "ListYearGroupPblPresentationStudentsDetails", input, undefined, undefined),
      listYearGroupPblNotesAndInterviewsStudentsDetails: (input: Record<string, unknown> = {}) => unary("ProjectsService", "ListYearGroupPblNotesAndInterviewsStudentsDetails", input, undefined, undefined),
      listYearGroupProjectBasedLearningTemplates: (input: Record<string, unknown> = {}) => unary("ProjectsService", "ListYearGroupProjectBasedLearningTemplates", input, undefined, undefined),
    },
    yearGroups: {
      listYearGroupServiceLearningCategoriesStudents: (input: Record<string, unknown> = {}) => unary("YearGroupsService", "ListYearGroupServiceLearningCategoriesStudents", input, undefined, "ServiceLearningCategoriesStudentsResponse"),
      listYearGroupServiceLearningOutcomesStudents: (input: Record<string, unknown> = {}) => unary("YearGroupsService", "ListYearGroupServiceLearningOutcomesStudents", input, undefined, "ServiceLearningOutcomesStudentsResponse"),
      getYearGroupServiceLearning: (input: Record<string, unknown> = {}) => unary("YearGroupsService", "GetYearGroupServiceLearning", input, undefined, "ServiceLearningSettings"),
      listYearGroups: (input: Record<string, unknown> = {}) => unary("YearGroupsService", "ListYearGroups", input, undefined, undefined),
      listStudentsFromYearGroups: (input: Record<string, unknown> = {}) => unary("YearGroupsService", "ListStudentsFromYearGroups", input, undefined, undefined),
      addStudentToYearGroup: (input: Record<string, unknown> = {}) => unary("YearGroupsService", "AddStudentToYearGroup", input, "YearGroupsAddStudentToYearGroupRequest", undefined),
      removeStudentToYearGroup: (input: Record<string, unknown> = {}) => unary("YearGroupsService", "RemoveStudentToYearGroup", input, "YearGroupsRemoveStudentToYearGroupRequest", undefined),
      listAdvisorsFromYearGroup: (input: Record<string, unknown> = {}) => unary("YearGroupsService", "ListAdvisorsFromYearGroup", input, undefined, undefined),
    },
  };
}
