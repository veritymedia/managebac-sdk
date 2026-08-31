// Generated Connect (gRPC-web compatible) client for API V2P3.
export interface ConnectOptions {
  baseUrl?: string;
  apiKey?: string;
  headers?: Record<string, string>;
}

export class ConnectError extends Error {
  constructor(public readonly code: number, message: string) {
    super(message);
    this.name = "ConnectError";
  }
}

export function createConnectClient(options: ConnectOptions = {}) {
  const baseUrl = (options.baseUrl ?? "https://api.managebac.com").replace(/\/$/, "");
  const apiKey = options.apiKey ?? process.env.MANAGE_BAC_PLUS_API_KEY;

  async function unary(service: string, method: string, input: Record<string, unknown>): Promise<unknown> {
    const headers: Record<string, string> = {
      "content-type": "application/json",
      "connect-protocol-version": "1",
      ...options.headers,
    };
    if (apiKey) headers.authorization = `Bearer ${apiKey}`;
    const response = await fetch(`${baseUrl}/${service}/${method}`, {
      method: "POST",
      headers,
      body: JSON.stringify(input),
    });
    const text = await response.text();
    const parsed = text ? JSON.parse(text) : undefined;
    if (!response.ok) {
      const message = parsed && typeof parsed === "object" && "message" in parsed ? String((parsed as { message: unknown }).message) : `Connect call failed: ${response.status}`;
      throw new ConnectError(response.status, message);
    }
    return parsed;
  }

  return {
    coursework: {
      listGradesForClass: (input: Record<string, unknown> = {}) => unary("CourseworkService", "ListGradesForClass", input),
      listTermGradesForClass: (input: Record<string, unknown> = {}) => unary("CourseworkService", "ListTermGradesForClass", input),
      listCriteriaforClass: (input: Record<string, unknown> = {}) => unary("CourseworkService", "ListCriteriaforClass", input),
      listClassTaskCategories: (input: Record<string, unknown> = {}) => unary("CourseworkService", "ListClassTaskCategories", input),
      downloadSubmissionFile: (input: Record<string, unknown> = {}) => unary("CourseworkService", "DownloadSubmissionFile", input),
      listTaskSubmissions: (input: Record<string, unknown> = {}) => unary("CourseworkService", "ListTaskSubmissions", input),
      getTaskSubmission: (input: Record<string, unknown> = {}) => unary("CourseworkService", "GetTaskSubmission", input),
      listTasksforClass: (input: Record<string, unknown> = {}) => unary("CourseworkService", "ListTasksforClass", input),
      getTasksByIdforClass: (input: Record<string, unknown> = {}) => unary("CourseworkService", "GetTasksByIdforClass", input),
      updateTaskforClass: (input: Record<string, unknown> = {}) => unary("CourseworkService", "UpdateTaskforClass", input),
      partialUpdateTaskforClass: (input: Record<string, unknown> = {}) => unary("CourseworkService", "PartialUpdateTaskforClass", input),
      deleteTaskforClass: (input: Record<string, unknown> = {}) => unary("CourseworkService", "DeleteTaskforClass", input),
      listStudentAssessmentResultsForClassTask: (input: Record<string, unknown> = {}) => unary("CourseworkService", "ListStudentAssessmentResultsForClassTask", input),
      bulkResetStudentsTaskGrades: (input: Record<string, unknown> = {}) => unary("CourseworkService", "BulkResetStudentsTaskGrades", input),
      createTaskforClass: (input: Record<string, unknown> = {}) => unary("CourseworkService", "CreateTaskforClass", input),
    },
    attendance: {
      setAttendanceSettings: (input: Record<string, unknown> = {}) => unary("AttendanceService", "SetAttendanceSettings", input),
      listCategories: (input: Record<string, unknown> = {}) => unary("AttendanceService", "ListCategories", input),
      getClassTimetable: (input: Record<string, unknown> = {}) => unary("AttendanceService", "GetClassTimetable", input),
      getAttendanceForClass: (input: Record<string, unknown> = {}) => unary("AttendanceService", "GetAttendanceForClass", input),
      getClassAttendanceForDate: (input: Record<string, unknown> = {}) => unary("AttendanceService", "GetClassAttendanceForDate", input),
      getDateExcusals: (input: Record<string, unknown> = {}) => unary("AttendanceService", "GetDateExcusals", input),
      getAttendanceForYearGroupByTerm: (input: Record<string, unknown> = {}) => unary("AttendanceService", "GetAttendanceForYearGroupByTerm", input),
      getAttendanceForYearGroupByDate: (input: Record<string, unknown> = {}) => unary("AttendanceService", "GetAttendanceForYearGroupByDate", input),
      getAttendanceAdjustmentsForYearGroupByTerm: (input: Record<string, unknown> = {}) => unary("AttendanceService", "GetAttendanceAdjustmentsForYearGroupByTerm", input),
      getStudentExcusals: (input: Record<string, unknown> = {}) => unary("AttendanceService", "GetStudentExcusals", input),
      createStudentExcusal: (input: Record<string, unknown> = {}) => unary("AttendanceService", "CreateStudentExcusal", input),
    },
    authentication: {
      listTokenResources: (input: Record<string, unknown> = {}) => unary("AuthenticationService", "ListTokenResources", input),
      createOauthToken: (input: Record<string, unknown> = {}) => unary("AuthenticationService", "CreateOauthToken", input),
    },
    utilities: {
      showAvatarById: (input: Record<string, unknown> = {}) => unary("UtilitiesService", "ShowAvatarById", input),
      ping: (input: Record<string, unknown> = {}) => unary("UtilitiesService", "Ping", input),
    },
    behaviorNotes: {
      listBehaviorNotes: (input: Record<string, unknown> = {}) => unary("BehaviorNotesService", "ListBehaviorNotes", input),
    },
    memberships: {
      getStudentsForClass: (input: Record<string, unknown> = {}) => unary("MembershipsService", "GetStudentsForClass", input),
      listMemberships: (input: Record<string, unknown> = {}) => unary("MembershipsService", "ListMemberships", input),
      getStudentMemberships: (input: Record<string, unknown> = {}) => unary("MembershipsService", "GetStudentMemberships", input),
      getTeacherMemberships: (input: Record<string, unknown> = {}) => unary("MembershipsService", "GetTeacherMemberships", input),
      removeTeachersFromClass: (input: Record<string, unknown> = {}) => unary("MembershipsService", "RemoveTeachersFromClass", input),
    },
    extendedApis: {
      bulkUpdateStudentsFromClass: (input: Record<string, unknown> = {}) => unary("ExtendedApisService", "BulkUpdateStudentsFromClass", input),
      upsertClasses: (input: Record<string, unknown> = {}) => unary("ExtendedApisService", "UpsertClasses", input),
      setClassAttendanceForStudents: (input: Record<string, unknown> = {}) => unary("ExtendedApisService", "SetClassAttendanceForStudents", input),
      bulkEnableSubjects: (input: Record<string, unknown> = {}) => unary("ExtendedApisService", "BulkEnableSubjects", input),
      bulkDisableSubjects: (input: Record<string, unknown> = {}) => unary("ExtendedApisService", "BulkDisableSubjects", input),
      updateStudentExcusal: (input: Record<string, unknown> = {}) => unary("ExtendedApisService", "UpdateStudentExcusal", input),
      deleteStudentExcusal: (input: Record<string, unknown> = {}) => unary("ExtendedApisService", "DeleteStudentExcusal", input),
      setStudentHomeroomAttendance: (input: Record<string, unknown> = {}) => unary("ExtendedApisService", "SetStudentHomeroomAttendance", input),
      updateStudentTaskGrades: (input: Record<string, unknown> = {}) => unary("ExtendedApisService", "UpdateStudentTaskGrades", input),
      bulkUpdateStudentTaskGrades: (input: Record<string, unknown> = {}) => unary("ExtendedApisService", "BulkUpdateStudentTaskGrades", input),
      bulkUpdateTeacherMemberships: (input: Record<string, unknown> = {}) => unary("ExtendedApisService", "BulkUpdateTeacherMemberships", input),
    },
    classes: {
      listClasses: (input: Record<string, unknown> = {}) => unary("ClassesService", "ListClasses", input),
      createClass: (input: Record<string, unknown> = {}) => unary("ClassesService", "CreateClass", input),
      getClassById: (input: Record<string, unknown> = {}) => unary("ClassesService", "GetClassById", input),
      updateClass: (input: Record<string, unknown> = {}) => unary("ClassesService", "UpdateClass", input),
      addStudentsToClass: (input: Record<string, unknown> = {}) => unary("ClassesService", "AddStudentsToClass", input),
      removeStudentsFromClass: (input: Record<string, unknown> = {}) => unary("ClassesService", "RemoveStudentsFromClass", input),
      getClassTerms: (input: Record<string, unknown> = {}) => unary("ClassesService", "GetClassTerms", input),
      addTeachersToClass: (input: Record<string, unknown> = {}) => unary("ClassesService", "AddTeachersToClass", input),
    },
    relationships: {
      listOfParentChildrenRelationships: (input: Record<string, unknown> = {}) => unary("RelationshipsService", "ListOfParentChildrenRelationships", input),
      createParentChildRelationship: (input: Record<string, unknown> = {}) => unary("RelationshipsService", "CreateParentChildRelationship", input),
      bulkUpdateParentChildrenRelationships: (input: Record<string, unknown> = {}) => unary("RelationshipsService", "BulkUpdateParentChildrenRelationships", input),
      getParentChildRelationship: (input: Record<string, unknown> = {}) => unary("RelationshipsService", "GetParentChildRelationship", input),
      updateParentChildRelationship: (input: Record<string, unknown> = {}) => unary("RelationshipsService", "UpdateParentChildRelationship", input),
      deleteParentChildRelationship: (input: Record<string, unknown> = {}) => unary("RelationshipsService", "DeleteParentChildRelationship", input),
    },
    parents: {
      listParents: (input: Record<string, unknown> = {}) => unary("ParentsService", "ListParents", input),
      createParent: (input: Record<string, unknown> = {}) => unary("ParentsService", "CreateParent", input),
      getParentById: (input: Record<string, unknown> = {}) => unary("ParentsService", "GetParentById", input),
      updateParent: (input: Record<string, unknown> = {}) => unary("ParentsService", "UpdateParent", input),
      archiveParent: (input: Record<string, unknown> = {}) => unary("ParentsService", "ArchiveParent", input),
      unarchiveParent: (input: Record<string, unknown> = {}) => unary("ParentsService", "UnarchiveParent", input),
      sendParentWelcomeEmail: (input: Record<string, unknown> = {}) => unary("ParentsService", "SendParentWelcomeEmail", input),
    },
    academics: {
      createAcademicTerm: (input: Record<string, unknown> = {}) => unary("AcademicsService", "CreateAcademicTerm", input),
      updateAcademicTerm: (input: Record<string, unknown> = {}) => unary("AcademicsService", "UpdateAcademicTerm", input),
      deleteAcademicTerm: (input: Record<string, unknown> = {}) => unary("AcademicsService", "DeleteAcademicTerm", input),
      retrieve: (input: Record<string, unknown> = {}) => unary("AcademicsService", "Retrieve", input),
      createAcademicYear: (input: Record<string, unknown> = {}) => unary("AcademicsService", "CreateAcademicYear", input),
      getAssessmentTypes: (input: Record<string, unknown> = {}) => unary("AcademicsService", "GetAssessmentTypes", input),
      list: (input: Record<string, unknown> = {}) => unary("AcademicsService", "List", input),
      getAllTermReports: (input: Record<string, unknown> = {}) => unary("AcademicsService", "GetAllTermReports", input),
      getTermReport: (input: Record<string, unknown> = {}) => unary("AcademicsService", "GetTermReport", input),
      downloadTermReportFile: (input: Record<string, unknown> = {}) => unary("AcademicsService", "DownloadTermReportFile", input),
      getSubjectGroups: (input: Record<string, unknown> = {}) => unary("AcademicsService", "GetSubjectGroups", input),
      createSubjectGroup: (input: Record<string, unknown> = {}) => unary("AcademicsService", "CreateSubjectGroup", input),
      getSubjectGroup: (input: Record<string, unknown> = {}) => unary("AcademicsService", "GetSubjectGroup", input),
      updateSubjectGroup: (input: Record<string, unknown> = {}) => unary("AcademicsService", "UpdateSubjectGroup", input),
      destroySubjectGroup: (input: Record<string, unknown> = {}) => unary("AcademicsService", "DestroySubjectGroup", input),
      getSubjects: (input: Record<string, unknown> = {}) => unary("AcademicsService", "GetSubjects", input),
      createSubject: (input: Record<string, unknown> = {}) => unary("AcademicsService", "CreateSubject", input),
      getSubject: (input: Record<string, unknown> = {}) => unary("AcademicsService", "GetSubject", input),
      updateSubject: (input: Record<string, unknown> = {}) => unary("AcademicsService", "UpdateSubject", input),
      deleteSubject: (input: Record<string, unknown> = {}) => unary("AcademicsService", "DeleteSubject", input),
      getSchool: (input: Record<string, unknown> = {}) => unary("AcademicsService", "GetSchool", input),
      listAcademicYears: (input: Record<string, unknown> = {}) => unary("AcademicsService", "ListAcademicYears", input),
      listGrades: (input: Record<string, unknown> = {}) => unary("AcademicsService", "ListGrades", input),
      listSubjects: (input: Record<string, unknown> = {}) => unary("AcademicsService", "ListSubjects", input),
      listSchoolTermGradeScales: (input: Record<string, unknown> = {}) => unary("AcademicsService", "ListSchoolTermGradeScales", input),
      listTermRubrics: (input: Record<string, unknown> = {}) => unary("AcademicsService", "ListTermRubrics", input),
    },
    students: {
      updateStudentAvatar: (input: Record<string, unknown> = {}) => unary("StudentsService", "UpdateStudentAvatar", input),
      deleteStudentAvatar: (input: Record<string, unknown> = {}) => unary("StudentsService", "DeleteStudentAvatar", input),
      listStudents: (input: Record<string, unknown> = {}) => unary("StudentsService", "ListStudents", input),
      createStudent: (input: Record<string, unknown> = {}) => unary("StudentsService", "CreateStudent", input),
      getStudentById: (input: Record<string, unknown> = {}) => unary("StudentsService", "GetStudentById", input),
      updateStudent: (input: Record<string, unknown> = {}) => unary("StudentsService", "UpdateStudent", input),
      archiveStudent: (input: Record<string, unknown> = {}) => unary("StudentsService", "ArchiveStudent", input),
      unarchiveStudent: (input: Record<string, unknown> = {}) => unary("StudentsService", "UnarchiveStudent", input),
      sendStudentWelcomeEmail: (input: Record<string, unknown> = {}) => unary("StudentsService", "SendStudentWelcomeEmail", input),
    },
    onlineAssessment: {
      updateOnlineAssessment: (input: Record<string, unknown> = {}) => unary("OnlineAssessmentService", "UpdateOnlineAssessment", input),
    },
    teachers: {
      updateTeacherAvatar: (input: Record<string, unknown> = {}) => unary("TeachersService", "UpdateTeacherAvatar", input),
      deleteTeacherAvatar: (input: Record<string, unknown> = {}) => unary("TeachersService", "DeleteTeacherAvatar", input),
      listTeachers: (input: Record<string, unknown> = {}) => unary("TeachersService", "ListTeachers", input),
      createTeacher: (input: Record<string, unknown> = {}) => unary("TeachersService", "CreateTeacher", input),
      getTeacherById: (input: Record<string, unknown> = {}) => unary("TeachersService", "GetTeacherById", input),
      updateTeacher: (input: Record<string, unknown> = {}) => unary("TeachersService", "UpdateTeacher", input),
      archiveTeacher: (input: Record<string, unknown> = {}) => unary("TeachersService", "ArchiveTeacher", input),
      unarchiveTeacher: (input: Record<string, unknown> = {}) => unary("TeachersService", "UnarchiveTeacher", input),
      listTeacherClassesMemberships: (input: Record<string, unknown> = {}) => unary("TeachersService", "ListTeacherClassesMemberships", input),
      listTeacherGroupsMemberships: (input: Record<string, unknown> = {}) => unary("TeachersService", "ListTeacherGroupsMemberships", input),
      sendTeacherWelcomeEmail: (input: Record<string, unknown> = {}) => unary("TeachersService", "SendTeacherWelcomeEmail", input),
    },
    unitClassAssignments: {
      listUnitClassAssignments: (input: Record<string, unknown> = {}) => unary("UnitClassAssignmentsService", "ListUnitClassAssignments", input),
    },
    units: {
      listUnits: (input: Record<string, unknown> = {}) => unary("UnitsService", "ListUnits", input),
      getUnitById: (input: Record<string, unknown> = {}) => unary("UnitsService", "GetUnitById", input),
    },
    projects: {
      listYearGroupCasExperiencesStudents: (input: Record<string, unknown> = {}) => unary("ProjectsService", "ListYearGroupCasExperiencesStudents", input),
      getYearGroupCas: (input: Record<string, unknown> = {}) => unary("ProjectsService", "GetYearGroupCas", input),
      listYearGroupPblProposalStudentsDetails: (input: Record<string, unknown> = {}) => unary("ProjectsService", "ListYearGroupPblProposalStudentsDetails", input),
      listYearGroupPblReflectionsStudentsDetails: (input: Record<string, unknown> = {}) => unary("ProjectsService", "ListYearGroupPblReflectionsStudentsDetails", input),
      listYearGroupPblTodosStudentsDetails: (input: Record<string, unknown> = {}) => unary("ProjectsService", "ListYearGroupPblTodosStudentsDetails", input),
      listYearGroupPblJournalStudentsDetails: (input: Record<string, unknown> = {}) => unary("ProjectsService", "ListYearGroupPblJournalStudentsDetails", input),
      listYearGroupPblDocumentsStudentsDetails: (input: Record<string, unknown> = {}) => unary("ProjectsService", "ListYearGroupPblDocumentsStudentsDetails", input),
      listYearGroupPblPresentationStudentsDetails: (input: Record<string, unknown> = {}) => unary("ProjectsService", "ListYearGroupPblPresentationStudentsDetails", input),
      listYearGroupPblNotesAndInterviewsStudentsDetails: (input: Record<string, unknown> = {}) => unary("ProjectsService", "ListYearGroupPblNotesAndInterviewsStudentsDetails", input),
      listYearGroupProjectBasedLearningTemplates: (input: Record<string, unknown> = {}) => unary("ProjectsService", "ListYearGroupProjectBasedLearningTemplates", input),
    },
    yearGroups: {
      listYearGroupServiceLearningCategoriesStudents: (input: Record<string, unknown> = {}) => unary("YearGroupsService", "ListYearGroupServiceLearningCategoriesStudents", input),
      listYearGroupServiceLearningOutcomesStudents: (input: Record<string, unknown> = {}) => unary("YearGroupsService", "ListYearGroupServiceLearningOutcomesStudents", input),
      getYearGroupServiceLearning: (input: Record<string, unknown> = {}) => unary("YearGroupsService", "GetYearGroupServiceLearning", input),
      listYearGroups: (input: Record<string, unknown> = {}) => unary("YearGroupsService", "ListYearGroups", input),
      listStudentsFromYearGroups: (input: Record<string, unknown> = {}) => unary("YearGroupsService", "ListStudentsFromYearGroups", input),
      addStudentToYearGroup: (input: Record<string, unknown> = {}) => unary("YearGroupsService", "AddStudentToYearGroup", input),
      removeStudentToYearGroup: (input: Record<string, unknown> = {}) => unary("YearGroupsService", "RemoveStudentToYearGroup", input),
      listAdvisorsFromYearGroup: (input: Record<string, unknown> = {}) => unary("YearGroupsService", "ListAdvisorsFromYearGroup", input),
    },
  };
}
