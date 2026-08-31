#!/usr/bin/env node
// Generated CLI for API V2P3. Usage: manage-bac-plus <resource>.<method> [--param value] [--body '<json>']
interface Route {
  id: string;
  command: string;
  httpMethod: string;
  path: string;
  pathParams: string[];
  queryParams: string[];
  hasBody: boolean;
  summary: string;
}

const routes: Route[] = [
  {
    "id": "listGradesForClass",
    "command": "coursework.listGradesForClass",
    "httpMethod": "GET",
    "path": "/v2p3/classes/{class_id}/assessments/term/{term_id}/grades",
    "pathParams": [
      "class_id",
      "term_id"
    ],
    "queryParams": [
      "student_ids",
      "include_archived_students"
    ],
    "hasBody": false,
    "summary": "Get all Grades for a Class during an Academic Term"
  },
  {
    "id": "listTermGradesForClass",
    "command": "coursework.listTermGradesForClass",
    "httpMethod": "GET",
    "path": "/v2p3/classes/{class_id}/assessments/term/{term_id}/term-grades",
    "pathParams": [
      "class_id",
      "term_id"
    ],
    "queryParams": [
      "student_ids",
      "include_archived_students",
      "unenrolled_only"
    ],
    "hasBody": false,
    "summary": "Get Term Grades for a Class"
  },
  {
    "id": "SetAttendanceSettings",
    "command": "attendance.setAttendanceSettings",
    "httpMethod": "PUT",
    "path": "/v2p3/classes/{class_id}/academic-years/{academic_year_id}/attendance/settings",
    "pathParams": [
      "class_id",
      "academic_year_id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Set or Update an Attendance Settings for a Class in an Academic Year"
  },
  {
    "id": "listCategories",
    "command": "attendance.listCategories",
    "httpMethod": "GET",
    "path": "/v2p3/school/academic-years/{academic_year_id}/attendance_categories",
    "pathParams": [
      "academic_year_id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Get Attendance Categories"
  },
  {
    "id": "listTokenResources",
    "command": "authentication.listTokenResources",
    "httpMethod": "GET",
    "path": "/v2p3/auth/permissions",
    "pathParams": [],
    "queryParams": [],
    "hasBody": false,
    "summary": "Get all Permissions"
  },
  {
    "id": "createOAuthToken",
    "command": "authentication.createOauthToken",
    "httpMethod": "POST",
    "path": "/oauth/token",
    "pathParams": [],
    "queryParams": [],
    "hasBody": true,
    "summary": "Obtain an Access Token"
  },
  {
    "id": "showAvatarByID",
    "command": "utilities.showAvatarById",
    "httpMethod": "GET",
    "path": "/v2p3/avatars/{id}",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Get Avatar"
  },
  {
    "id": "ping",
    "command": "utilities.ping",
    "httpMethod": "GET",
    "path": "/v2p3/ping",
    "pathParams": [],
    "queryParams": [],
    "hasBody": false,
    "summary": "Ping"
  },
  {
    "id": "listBehaviorNotes",
    "command": "behaviorNotes.listBehaviorNotes",
    "httpMethod": "GET",
    "path": "/v2p3/behavior/notes",
    "pathParams": [],
    "queryParams": [
      "modified_since",
      "page",
      "per_page",
      "student_ids"
    ],
    "hasBody": false,
    "summary": "Get all behavior notes"
  },
  {
    "id": "listCriteriaforClass",
    "command": "coursework.listCriteriaforClass",
    "httpMethod": "GET",
    "path": "/v2p3/classes/{id}/criteria",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Get Criteria for a Class"
  },
  {
    "id": "getStudentsForClass",
    "command": "memberships.getStudentsForClass",
    "httpMethod": "GET",
    "path": "/v2p3/classes/{class_id}/students",
    "pathParams": [
      "class_id"
    ],
    "queryParams": [
      "include_archived_students",
      "student_ids"
    ],
    "hasBody": false,
    "summary": "Get Students for a Class"
  },
  {
    "id": "bulkUpdateStudentsFromClass",
    "command": "extendedApis.bulkUpdateStudentsFromClass",
    "httpMethod": "PATCH",
    "path": "/v2p3/classes/{class_id}/students",
    "pathParams": [
      "class_id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Bulk update Students from a Class"
  },
  {
    "id": "listClassTaskCategories",
    "command": "coursework.listClassTaskCategories",
    "httpMethod": "GET",
    "path": "/v2p3/classes/{id}/task_categories",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Get Task Categories for Class"
  },
  {
    "id": "downloadSubmissionFile",
    "command": "coursework.downloadSubmissionFile",
    "httpMethod": "GET",
    "path": "/v2p3/classes/{class_id}/tasks/{task_id}/submissions/{student_id}/files/{asset_id}",
    "pathParams": [
      "class_id",
      "task_id",
      "student_id",
      "asset_id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Download a Submission File"
  },
  {
    "id": "listTaskSubmissions",
    "command": "coursework.listTaskSubmissions",
    "httpMethod": "GET",
    "path": "/v2p3/classes/{class_id}/tasks/{task_id}/submissions",
    "pathParams": [
      "class_id",
      "task_id"
    ],
    "queryParams": [
      "modified_since",
      "page",
      "per_page"
    ],
    "hasBody": false,
    "summary": "List Student Submissions for a Task"
  },
  {
    "id": "getTaskSubmission",
    "command": "coursework.getTaskSubmission",
    "httpMethod": "GET",
    "path": "/v2p3/classes/{class_id}/tasks/{task_id}/submissions/{student_id}",
    "pathParams": [
      "class_id",
      "task_id",
      "student_id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Get a Single Student Submission"
  },
  {
    "id": "listTasksforClass",
    "command": "coursework.listTasksforClass",
    "httpMethod": "GET",
    "path": "/v2p3/classes/{id}/tasks",
    "pathParams": [
      "id"
    ],
    "queryParams": [
      "term_id"
    ],
    "hasBody": false,
    "summary": "Get Tasks for a Class"
  },
  {
    "id": "getTasksByIDforClass",
    "command": "coursework.getTasksByIdforClass",
    "httpMethod": "GET",
    "path": "/v2p3/classes/{class_id}/tasks/{id}",
    "pathParams": [
      "id",
      "class_id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Get a Task for a Class"
  },
  {
    "id": "updateTaskforClass",
    "command": "coursework.updateTaskforClass",
    "httpMethod": "PUT",
    "path": "/v2p3/classes/{class_id}/tasks/{id}",
    "pathParams": [
      "class_id",
      "id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Update a Task for a Class"
  },
  {
    "id": "partialUpdateTaskforClass",
    "command": "coursework.partialUpdateTaskforClass",
    "httpMethod": "PATCH",
    "path": "/v2p3/classes/{class_id}/tasks/{id}",
    "pathParams": [
      "class_id",
      "id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Partially Update a Task for a Class"
  },
  {
    "id": "deleteTaskforClass",
    "command": "coursework.deleteTaskforClass",
    "httpMethod": "DELETE",
    "path": "/v2p3/classes/{class_id}/tasks/{id}",
    "pathParams": [
      "class_id",
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Delete a Task for a Class"
  },
  {
    "id": "listStudentAssessmentResultsForClassTask",
    "command": "coursework.listStudentAssessmentResultsForClassTask",
    "httpMethod": "GET",
    "path": "/v2p3/classes/{class_id}/tasks/{id}/students",
    "pathParams": [
      "id",
      "class_id"
    ],
    "queryParams": [
      "student_ids"
    ],
    "hasBody": false,
    "summary": "Get Student Assessment Results for a Task and Class"
  },
  {
    "id": "getClassTimetable",
    "command": "attendance.getClassTimetable",
    "httpMethod": "GET",
    "path": "/v2p3/classes/{class_id}/timetable",
    "pathParams": [
      "class_id"
    ],
    "queryParams": [
      "include_disabled"
    ],
    "hasBody": false,
    "summary": "Get Class timetable"
  },
  {
    "id": "listClasses",
    "command": "classes.listClasses",
    "httpMethod": "GET",
    "path": "/v2p3/classes",
    "pathParams": [],
    "queryParams": [
      "modified_since",
      "deleted_since",
      "page",
      "per_page",
      "archived"
    ],
    "hasBody": false,
    "summary": "Get all Classes"
  },
  {
    "id": "createClass",
    "command": "classes.createClass",
    "httpMethod": "POST",
    "path": "/v2p3/classes",
    "pathParams": [],
    "queryParams": [],
    "hasBody": true,
    "summary": "Create a class"
  },
  {
    "id": "upsertClasses",
    "command": "extendedApis.upsertClasses",
    "httpMethod": "PATCH",
    "path": "/v2p3/classes",
    "pathParams": [],
    "queryParams": [],
    "hasBody": true,
    "summary": "Upsert many classes"
  },
  {
    "id": "getClassByID",
    "command": "classes.getClassById",
    "httpMethod": "GET",
    "path": "/v2p3/classes/{id}",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Get a Class"
  },
  {
    "id": "updateClass",
    "command": "classes.updateClass",
    "httpMethod": "PATCH",
    "path": "/v2p3/classes/{id}",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Update a class"
  },
  {
    "id": "addStudentsToClass",
    "command": "classes.addStudentsToClass",
    "httpMethod": "POST",
    "path": "/v2p3/classes/{id}/add_students",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Add Students to a Class"
  },
  {
    "id": "removeStudentsFromClass",
    "command": "classes.removeStudentsFromClass",
    "httpMethod": "POST",
    "path": "/v2p3/classes/{id}/remove_students",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Remove Students from a Class"
  },
  {
    "id": "getAttendanceForClass",
    "command": "attendance.getAttendanceForClass",
    "httpMethod": "GET",
    "path": "/v2p3/classes/{id}/attendance/term/{term_id}",
    "pathParams": [
      "id",
      "term_id"
    ],
    "queryParams": [
      "archived_students",
      "student_ids"
    ],
    "hasBody": false,
    "summary": "Get Attendance for a Class during an Academic Term"
  },
  {
    "id": "getClassAttendanceForDate",
    "command": "attendance.getClassAttendanceForDate",
    "httpMethod": "GET",
    "path": "/v2p3/classes/{id}/attendance/date/{date}",
    "pathParams": [
      "id",
      "date"
    ],
    "queryParams": [
      "student_ids"
    ],
    "hasBody": false,
    "summary": "Get Class Attendance for a Date"
  },
  {
    "id": "setClassAttendanceForStudents",
    "command": "extendedApis.setClassAttendanceForStudents",
    "httpMethod": "PUT",
    "path": "/v2p3/classes/{id}/attendance",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Set or Update a Class Attendance for Students"
  },
  {
    "id": "getClassTerms",
    "command": "classes.getClassTerms",
    "httpMethod": "GET",
    "path": "/v2p3/classes/{id}/terms",
    "pathParams": [
      "id"
    ],
    "queryParams": [
      "academic_year_id",
      "active_only"
    ],
    "hasBody": false,
    "summary": "Get Class terms details"
  },
  {
    "id": "getDateExcusals",
    "command": "attendance.getDateExcusals",
    "httpMethod": "GET",
    "path": "/v2p3/students/excusals/{date}",
    "pathParams": [
      "date"
    ],
    "queryParams": [
      "page",
      "per_page",
      "student_ids"
    ],
    "hasBody": false,
    "summary": "Get all Attendance Excusals for a date"
  },
  {
    "id": "getAttendanceForYearGroupByTerm",
    "command": "attendance.getAttendanceForYearGroupByTerm",
    "httpMethod": "GET",
    "path": "/v2p3/year-groups/{year_group_id}/homeroom/attendance/term/{term_id}",
    "pathParams": [
      "year_group_id",
      "term_id"
    ],
    "queryParams": [
      "archived_students",
      "student_ids"
    ],
    "hasBody": false,
    "summary": "Get Homeroom Attendance for a Year Group and Term"
  },
  {
    "id": "getAttendanceForYearGroupByDate",
    "command": "attendance.getAttendanceForYearGroupByDate",
    "httpMethod": "GET",
    "path": "/v2p3/year-groups/{year_group_id}/homeroom/attendance/date/{date}",
    "pathParams": [
      "year_group_id",
      "date"
    ],
    "queryParams": [
      "student_ids"
    ],
    "hasBody": false,
    "summary": "Get Homeroom Attendance for a Year Group by Date"
  },
  {
    "id": "getAttendanceAdjustmentsForYearGroupByTerm",
    "command": "attendance.getAttendanceAdjustmentsForYearGroupByTerm",
    "httpMethod": "GET",
    "path": "/v2p3/year-groups/{year_group_id}/homeroom/attendance/term/{term_id}/adjustments",
    "pathParams": [
      "year_group_id",
      "term_id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Get Homeroom Attendance Adjustments for a Year Group and Term"
  },
  {
    "id": "listMemberships",
    "command": "memberships.listMemberships",
    "httpMethod": "GET",
    "path": "/v2p3/memberships",
    "pathParams": [],
    "queryParams": [
      "class_ids[]",
      "modified_since",
      "deleted_since",
      "page",
      "per_page",
      "user_ids[]",
      "user_ids",
      "class_happens_on",
      "student_ids"
    ],
    "hasBody": false,
    "summary": "Get all Memberships"
  },
  {
    "id": "listOfParentChildrenRelationships",
    "command": "relationships.listOfParentChildrenRelationships",
    "httpMethod": "GET",
    "path": "/v2p3/parents/{parent_id}/children",
    "pathParams": [
      "parent_id"
    ],
    "queryParams": [
      "page",
      "per_page"
    ],
    "hasBody": false,
    "summary": "List of parent-children relationships"
  },
  {
    "id": "createParentChildRelationship",
    "command": "relationships.createParentChildRelationship",
    "httpMethod": "POST",
    "path": "/v2p3/parents/{parent_id}/children",
    "pathParams": [
      "parent_id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Create a parent-child relationship"
  },
  {
    "id": "bulkUpdateParentChildrenRelationships",
    "command": "relationships.bulkUpdateParentChildrenRelationships",
    "httpMethod": "PUT",
    "path": "/v2p3/parents/{parent_id}/children",
    "pathParams": [
      "parent_id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Bulk update a parent-children relationships"
  },
  {
    "id": "getParentChildRelationship",
    "command": "relationships.getParentChildRelationship",
    "httpMethod": "GET",
    "path": "/v2p3/parents/{parent_id}/children/{id}",
    "pathParams": [
      "parent_id",
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Get parent-child relationship"
  },
  {
    "id": "updateParentChildRelationship",
    "command": "relationships.updateParentChildRelationship",
    "httpMethod": "PUT",
    "path": "/v2p3/parents/{parent_id}/children/{id}",
    "pathParams": [
      "parent_id",
      "id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Update parent-child relationship"
  },
  {
    "id": "deleteParentChildRelationship",
    "command": "relationships.deleteParentChildRelationship",
    "httpMethod": "DELETE",
    "path": "/v2p3/parents/{parent_id}/children/{id}",
    "pathParams": [
      "parent_id",
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Remove parent-child relationship"
  },
  {
    "id": "listParents",
    "command": "parents.listParents",
    "httpMethod": "GET",
    "path": "/v2p3/parents",
    "pathParams": [],
    "queryParams": [
      "ids[]",
      "archived",
      "modified_since",
      "page",
      "per_page",
      "deleted_since",
      "q"
    ],
    "hasBody": false,
    "summary": "Get all Parents"
  },
  {
    "id": "createParent",
    "command": "parents.createParent",
    "httpMethod": "POST",
    "path": "/v2p3/parents",
    "pathParams": [],
    "queryParams": [],
    "hasBody": true,
    "summary": "Create New Parent"
  },
  {
    "id": "getParentByID",
    "command": "parents.getParentById",
    "httpMethod": "GET",
    "path": "/v2p3/parents/{id}",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Get a Parent"
  },
  {
    "id": "updateParent",
    "command": "parents.updateParent",
    "httpMethod": "PATCH",
    "path": "/v2p3/parents/{id}",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Update a Parent"
  },
  {
    "id": "archiveParent",
    "command": "parents.archiveParent",
    "httpMethod": "PUT",
    "path": "/v2p3/parents/{id}/archive",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Archive a Parent"
  },
  {
    "id": "unarchiveParent",
    "command": "parents.unarchiveParent",
    "httpMethod": "PUT",
    "path": "/v2p3/parents/{id}/unarchive",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Unarchive a Parent"
  },
  {
    "id": "sendParentWelcomeEmail",
    "command": "parents.sendParentWelcomeEmail",
    "httpMethod": "POST",
    "path": "/v2p3/parents/{id}/welcome_email",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Send Welcome Email to a Parent"
  },
  {
    "id": "createAcademicTerm",
    "command": "academics.createAcademicTerm",
    "httpMethod": "POST",
    "path": "/v2p3/school/programs/{program_code}/academic-years/{academic_year_id}/academic-terms",
    "pathParams": [
      "program_code",
      "academic_year_id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Create Academic Term"
  },
  {
    "id": "updateAcademicTerm",
    "command": "academics.updateAcademicTerm",
    "httpMethod": "PATCH",
    "path": "/v2p3/school/programs/{program_code}/academic-years/{academic_year_id}/academic-terms/{id}",
    "pathParams": [
      "program_code",
      "academic_year_id",
      "id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Update Academic Term"
  },
  {
    "id": "deleteAcademicTerm",
    "command": "academics.deleteAcademicTerm",
    "httpMethod": "DELETE",
    "path": "/v2p3/school/programs/{program_code}/academic-years/{academic_year_id}/academic-terms/{id}",
    "pathParams": [
      "program_code",
      "academic_year_id",
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Delete Academic Term"
  },
  {
    "id": "get_v2p3_school_programs_program_code_academic_years_id",
    "command": "academics.retrieve",
    "httpMethod": "GET",
    "path": "/v2p3/school/programs/{program_code}/academic-years/{id}",
    "pathParams": [
      "program_code",
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Retrieve Academic Year"
  },
  {
    "id": "createAcademicYear",
    "command": "academics.createAcademicYear",
    "httpMethod": "POST",
    "path": "/v2p3/school/programs/{program_code}/academic-years",
    "pathParams": [
      "program_code"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Create Academic Year"
  },
  {
    "id": "getAssessmentTypes",
    "command": "academics.getAssessmentTypes",
    "httpMethod": "GET",
    "path": "/v2p3/school/programs/{program_code}/assessment_types",
    "pathParams": [
      "program_code"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Retrieves Assessment Types"
  },
  {
    "id": "get_v2p3_school_programs_program_code_academic_years_academic_year_id_calendar",
    "command": "academics.list",
    "httpMethod": "GET",
    "path": "/v2p3/school/programs/{program_code}/academic-years/{academic_year_id}/calendar",
    "pathParams": [
      "program_code",
      "academic_year_id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Get Academic Year Calendar"
  },
  {
    "id": "GetAllTermReports",
    "command": "academics.getAllTermReports",
    "httpMethod": "GET",
    "path": "/v2p3/school/programs/{program}/reports",
    "pathParams": [
      "program"
    ],
    "queryParams": [
      "academic_term_id",
      "type"
    ],
    "hasBody": false,
    "summary": "Get All Term Reports"
  },
  {
    "id": "getTermReport",
    "command": "academics.getTermReport",
    "httpMethod": "GET",
    "path": "/v2p3/school/programs/{program}/reports/{id}",
    "pathParams": [
      "program",
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Get Term Report"
  },
  {
    "id": "downloadTermReportFile",
    "command": "academics.downloadTermReportFile",
    "httpMethod": "GET",
    "path": "/v2p3/school/programs/{program}/reports/{id}/download/{kind}",
    "pathParams": [
      "program",
      "id",
      "kind"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Download Term Report File"
  },
  {
    "id": "getSubjectGroups",
    "command": "academics.getSubjectGroups",
    "httpMethod": "GET",
    "path": "/v2p3/school/programs/{program_code}/subject-groups",
    "pathParams": [
      "program_code"
    ],
    "queryParams": [
      "page",
      "per_page",
      "modified_since"
    ],
    "hasBody": false,
    "summary": "Retrieves Subject Groups"
  },
  {
    "id": "createSubjectGroup",
    "command": "academics.createSubjectGroup",
    "httpMethod": "POST",
    "path": "/v2p3/school/programs/{program_code}/subject-groups",
    "pathParams": [
      "program_code"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Create Subject Group"
  },
  {
    "id": "getSubjectGroup",
    "command": "academics.getSubjectGroup",
    "httpMethod": "GET",
    "path": "/v2p3/school/programs/{program_code}/subject-groups/{id}",
    "pathParams": [
      "program_code",
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Get Subject Group"
  },
  {
    "id": "updateSubjectGroup",
    "command": "academics.updateSubjectGroup",
    "httpMethod": "PATCH",
    "path": "/v2p3/school/programs/{program_code}/subject-groups/{id}",
    "pathParams": [
      "program_code",
      "id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Update Subject Group"
  },
  {
    "id": "destroySubjectGroup",
    "command": "academics.destroySubjectGroup",
    "httpMethod": "DELETE",
    "path": "/v2p3/school/programs/{program_code}/subject-groups/{id}",
    "pathParams": [
      "program_code",
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Remove Subject Group"
  },
  {
    "id": "getSubjects",
    "command": "academics.getSubjects",
    "httpMethod": "GET",
    "path": "/v2p3/school/programs/{program_code}/subjects",
    "pathParams": [
      "program_code"
    ],
    "queryParams": [
      "page",
      "per_page"
    ],
    "hasBody": false,
    "summary": "Retrieves Subjects"
  },
  {
    "id": "createSubject",
    "command": "academics.createSubject",
    "httpMethod": "POST",
    "path": "/v2p3/school/programs/{program_code}/subjects",
    "pathParams": [
      "program_code"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Creates Subject"
  },
  {
    "id": "getSubject",
    "command": "academics.getSubject",
    "httpMethod": "GET",
    "path": "/v2p3/school/programs/{program_code}/subjects/{id}",
    "pathParams": [
      "program_code",
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Retrieves Subject"
  },
  {
    "id": "updateSubject",
    "command": "academics.updateSubject",
    "httpMethod": "PUT",
    "path": "/v2p3/school/programs/{program_code}/subjects/{id}",
    "pathParams": [
      "program_code",
      "id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Updates Subject"
  },
  {
    "id": "deleteSubject",
    "command": "academics.deleteSubject",
    "httpMethod": "DELETE",
    "path": "/v2p3/school/programs/{program_code}/subjects/{id}",
    "pathParams": [
      "program_code",
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Delete Subject"
  },
  {
    "id": "bulkEnableSubjects",
    "command": "extendedApis.bulkEnableSubjects",
    "httpMethod": "POST",
    "path": "/v2p3/school/programs/{program_code}/subjects/bulk-enable",
    "pathParams": [
      "program_code"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Bulk Enable Subjects"
  },
  {
    "id": "bulkDisableSubjects",
    "command": "extendedApis.bulkDisableSubjects",
    "httpMethod": "POST",
    "path": "/v2p3/school/programs/{program_code}/subjects/bulk-disable",
    "pathParams": [
      "program_code"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Bulk Disable Subjects"
  },
  {
    "id": "getSchool",
    "command": "academics.getSchool",
    "httpMethod": "GET",
    "path": "/v2p3/school",
    "pathParams": [],
    "queryParams": [],
    "hasBody": false,
    "summary": "Get School Details"
  },
  {
    "id": "listAcademicYears",
    "command": "academics.listAcademicYears",
    "httpMethod": "GET",
    "path": "/v2p3/school/academic-years",
    "pathParams": [],
    "queryParams": [
      "program_code",
      "active"
    ],
    "hasBody": false,
    "summary": "Get Academic Years"
  },
  {
    "id": "listGrades",
    "command": "academics.listGrades",
    "httpMethod": "GET",
    "path": "/v2p3/school/grades",
    "pathParams": [],
    "queryParams": [],
    "hasBody": false,
    "summary": "Get School Grades"
  },
  {
    "id": "listSubjects",
    "command": "academics.listSubjects",
    "httpMethod": "GET",
    "path": "/v2p3/school/subjects",
    "pathParams": [],
    "queryParams": [],
    "hasBody": false,
    "summary": "Get School Subjects"
  },
  {
    "id": "listSchoolTermGradeScales",
    "command": "academics.listSchoolTermGradeScales",
    "httpMethod": "GET",
    "path": "/v2p3/school/term-grade-scales",
    "pathParams": [],
    "queryParams": [],
    "hasBody": false,
    "summary": "Get School Term Grade Scales"
  },
  {
    "id": "listTermRubrics",
    "command": "academics.listTermRubrics",
    "httpMethod": "GET",
    "path": "/v2p3/school/term-rubrics",
    "pathParams": [],
    "queryParams": [],
    "hasBody": false,
    "summary": "Get School Term Grade Rubrics"
  },
  {
    "id": "updateStudentAvatar",
    "command": "students.updateStudentAvatar",
    "httpMethod": "PUT",
    "path": "/v2p3/students/{id}/avatar",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Update Student Avatar"
  },
  {
    "id": "deleteStudentAvatar",
    "command": "students.deleteStudentAvatar",
    "httpMethod": "DELETE",
    "path": "/v2p3/students/{id}/avatar",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Delete Student Avatar"
  },
  {
    "id": "getStudentExcusals",
    "command": "attendance.getStudentExcusals",
    "httpMethod": "GET",
    "path": "/v2p3/students/{student_id}/excusals",
    "pathParams": [
      "student_id"
    ],
    "queryParams": [
      "applies_on",
      "page",
      "per_page"
    ],
    "hasBody": false,
    "summary": "Get all Attendance Excusals for a student"
  },
  {
    "id": "createStudentExcusal",
    "command": "attendance.createStudentExcusal",
    "httpMethod": "POST",
    "path": "/v2p3/students/{student_id}/excusals",
    "pathParams": [
      "student_id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Create Excusal for a Student"
  },
  {
    "id": "updateStudentExcusal",
    "command": "extendedApis.updateStudentExcusal",
    "httpMethod": "PATCH",
    "path": "/v2p3/students/{student_id}/excusals/{id}",
    "pathParams": [
      "student_id",
      "id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Update Excusal for a Student"
  },
  {
    "id": "deleteStudentExcusal",
    "command": "extendedApis.deleteStudentExcusal",
    "httpMethod": "DELETE",
    "path": "/v2p3/students/{student_id}/excusals/{id}",
    "pathParams": [
      "student_id",
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Delete Excusal for a Student"
  },
  {
    "id": "listStudents",
    "command": "students.listStudents",
    "httpMethod": "GET",
    "path": "/v2p3/students",
    "pathParams": [],
    "queryParams": [
      "ids[]",
      "archived",
      "status",
      "modified_since",
      "year_group_ids",
      "year_group_ids[]",
      "homeroom_advisor_ids",
      "homeroom_advisor_ids[]",
      "page",
      "per_page",
      "deleted_since",
      "q",
      "ids"
    ],
    "hasBody": false,
    "summary": "Get all Students"
  },
  {
    "id": "createStudent",
    "command": "students.createStudent",
    "httpMethod": "POST",
    "path": "/v2p3/students",
    "pathParams": [],
    "queryParams": [],
    "hasBody": true,
    "summary": "Create New Student"
  },
  {
    "id": "getStudentByID",
    "command": "students.getStudentById",
    "httpMethod": "GET",
    "path": "/v2p3/students/{id}",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Get a Student"
  },
  {
    "id": "updateStudent",
    "command": "students.updateStudent",
    "httpMethod": "PATCH",
    "path": "/v2p3/students/{id}",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Update a Student"
  },
  {
    "id": "archiveStudent",
    "command": "students.archiveStudent",
    "httpMethod": "PUT",
    "path": "/v2p3/students/{id}/archive",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Archive a Student"
  },
  {
    "id": "unarchiveStudent",
    "command": "students.unarchiveStudent",
    "httpMethod": "PUT",
    "path": "/v2p3/students/{id}/unarchive",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Unarchive a Student"
  },
  {
    "id": "getStudentMemberships",
    "command": "memberships.getStudentMemberships",
    "httpMethod": "GET",
    "path": "/v2p3/students/{id}/memberships",
    "pathParams": [
      "id"
    ],
    "queryParams": [
      "archived"
    ],
    "hasBody": false,
    "summary": "Get a Student's memberships"
  },
  {
    "id": "set_student_homeroom_attendance",
    "command": "extendedApis.setStudentHomeroomAttendance",
    "httpMethod": "PUT",
    "path": "/v2p3/students/{id}/set_homeroom_attendance",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Set student homeroom attendance"
  },
  {
    "id": "sendStudentWelcomeEmail",
    "command": "students.sendStudentWelcomeEmail",
    "httpMethod": "POST",
    "path": "/v2p3/students/{id}/welcome_email",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Send Welcome Email to a Student"
  },
  {
    "id": "updateOnlineAssessment",
    "command": "onlineAssessment.updateOnlineAssessment",
    "httpMethod": "PATCH",
    "path": "/v2p3/tasks/{task_id}/online_assessments/{assess_prep_uid}",
    "pathParams": [
      "task_id",
      "assess_prep_uid"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Update an Online Assessment"
  },
  {
    "id": "UpdateStudentTaskGrades",
    "command": "extendedApis.updateStudentTaskGrades",
    "httpMethod": "PATCH",
    "path": "/v2p3/tasks/{task_id}/students/{student_id}",
    "pathParams": [
      "task_id",
      "student_id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Update or Create a Grade for a Student for a Task"
  },
  {
    "id": "BulkUpdateStudentTaskGrades",
    "command": "extendedApis.bulkUpdateStudentTaskGrades",
    "httpMethod": "PATCH",
    "path": "/v2p3/tasks/{task_id}/students",
    "pathParams": [
      "task_id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Bulk Update or Create Grades for Students for a Task"
  },
  {
    "id": "BulkResetStudentsTaskGrades",
    "command": "coursework.bulkResetStudentsTaskGrades",
    "httpMethod": "DELETE",
    "path": "/v2p3/tasks/{task_id}/students",
    "pathParams": [
      "task_id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Bulk Delete Grades for Students for a Task"
  },
  {
    "id": "updateTeacherAvatar",
    "command": "teachers.updateTeacherAvatar",
    "httpMethod": "PUT",
    "path": "/v2p3/teachers/{id}/avatar",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Update Teacher Avatar"
  },
  {
    "id": "deleteTeacherAvatar",
    "command": "teachers.deleteTeacherAvatar",
    "httpMethod": "DELETE",
    "path": "/v2p3/teachers/{id}/avatar",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Delete Teacher Avatar"
  },
  {
    "id": "listTeachers",
    "command": "teachers.listTeachers",
    "httpMethod": "GET",
    "path": "/v2p3/teachers",
    "pathParams": [],
    "queryParams": [
      "ids[]",
      "archived",
      "modified_since",
      "page",
      "per_page",
      "deleted_since",
      "q"
    ],
    "hasBody": false,
    "summary": "Get all Teachers"
  },
  {
    "id": "createTeacher",
    "command": "teachers.createTeacher",
    "httpMethod": "POST",
    "path": "/v2p3/teachers",
    "pathParams": [],
    "queryParams": [],
    "hasBody": true,
    "summary": "Create New Teacher"
  },
  {
    "id": "getTeacherByID",
    "command": "teachers.getTeacherById",
    "httpMethod": "GET",
    "path": "/v2p3/teachers/{id}",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Get a Teacher"
  },
  {
    "id": "updateTeacher",
    "command": "teachers.updateTeacher",
    "httpMethod": "PATCH",
    "path": "/v2p3/teachers/{id}",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Update a Teacher"
  },
  {
    "id": "archiveTeacher",
    "command": "teachers.archiveTeacher",
    "httpMethod": "PUT",
    "path": "/v2p3/teachers/{id}/archive",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Archive a Teacher"
  },
  {
    "id": "unarchiveTeacher",
    "command": "teachers.unarchiveTeacher",
    "httpMethod": "PUT",
    "path": "/v2p3/teachers/{id}/unarchive",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Unarchive a Teacher"
  },
  {
    "id": "listTeacherClassesMemberships",
    "command": "teachers.listTeacherClassesMemberships",
    "httpMethod": "GET",
    "path": "/v2p3/teachers/{id}/classes",
    "pathParams": [
      "id"
    ],
    "queryParams": [
      "show_on_reports",
      "archived"
    ],
    "hasBody": false,
    "summary": "Get teacher Classes Memberships"
  },
  {
    "id": "listTeacherGroupsMemberships",
    "command": "teachers.listTeacherGroupsMemberships",
    "httpMethod": "GET",
    "path": "/v2p3/teachers/{id}/groups",
    "pathParams": [
      "id"
    ],
    "queryParams": [
      "archived"
    ],
    "hasBody": false,
    "summary": "Get teacher Groups Memberships"
  },
  {
    "id": "sendTeacherWelcomeEmail",
    "command": "teachers.sendTeacherWelcomeEmail",
    "httpMethod": "POST",
    "path": "/v2p3/teachers/{id}/welcome_email",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Send Welcome Email to a Teacher"
  },
  {
    "id": "listUnitClassAssignments",
    "command": "unitClassAssignments.listUnitClassAssignments",
    "httpMethod": "GET",
    "path": "/v2p3/unit-class-assignments",
    "pathParams": [],
    "queryParams": [
      "modified_since",
      "deleted_since",
      "archived",
      "page",
      "per_page"
    ],
    "hasBody": false,
    "summary": "List Unit-Class Assignments"
  },
  {
    "id": "listUnits",
    "command": "units.listUnits",
    "httpMethod": "GET",
    "path": "/v2p3/units",
    "pathParams": [],
    "queryParams": [
      "modified_since",
      "page",
      "per_page",
      "archived",
      "class_ids"
    ],
    "hasBody": false,
    "summary": "Get all Units"
  },
  {
    "id": "getUnitByID",
    "command": "units.getUnitById",
    "httpMethod": "GET",
    "path": "/v2p3/units/{id}",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Get a Unit"
  },
  {
    "id": "listYearGroupCasExperiencesStudents",
    "command": "projects.listYearGroupCasExperiencesStudents",
    "httpMethod": "GET",
    "path": "/v2p3/year-groups/{id}/projects/cas/experiences/students",
    "pathParams": [
      "id"
    ],
    "queryParams": [
      "student_ids[]",
      "page",
      "per_page"
    ],
    "hasBody": false,
    "summary": "Get CAS Experiences for Students in a Year Group"
  },
  {
    "id": "getYearGroupCas",
    "command": "projects.getYearGroupCas",
    "httpMethod": "GET",
    "path": "/v2p3/year-groups/{id}/projects/cas",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Get CAS settings for a Year Group"
  },
  {
    "id": "listYearGroupPblProposalStudentsDetails",
    "command": "projects.listYearGroupPblProposalStudentsDetails",
    "httpMethod": "GET",
    "path": "/v2p3/year-groups/{year_group_id}/projects/pbl/{project_id}/proposal/students",
    "pathParams": [
      "year_group_id",
      "project_id"
    ],
    "queryParams": [
      "archived",
      "include_archived_students"
    ],
    "hasBody": false,
    "summary": "Get Student Proposal Progress for a Year Group PBL"
  },
  {
    "id": "listYearGroupPblReflectionsStudentsDetails",
    "command": "projects.listYearGroupPblReflectionsStudentsDetails",
    "httpMethod": "GET",
    "path": "/v2p3/year-groups/{year_group_id}/projects/pbl/{project_id}/reflections/students",
    "pathParams": [
      "year_group_id",
      "project_id"
    ],
    "queryParams": [
      "archived",
      "include_archived_students"
    ],
    "hasBody": false,
    "summary": "Get Student Reflection Progress for a Year Group PBL"
  },
  {
    "id": "listYearGroupPblTodosStudentsDetails",
    "command": "projects.listYearGroupPblTodosStudentsDetails",
    "httpMethod": "GET",
    "path": "/v2p3/year-groups/{year_group_id}/projects/pbl/{project_id}/todos/students",
    "pathParams": [
      "year_group_id",
      "project_id"
    ],
    "queryParams": [
      "archived",
      "include_archived_students",
      "page",
      "per_page"
    ],
    "hasBody": false,
    "summary": "Get Student Personal Todos and Deadlines for a Year Group PBL"
  },
  {
    "id": "listYearGroupPblJournalStudentsDetails",
    "command": "projects.listYearGroupPblJournalStudentsDetails",
    "httpMethod": "GET",
    "path": "/v2p3/year-groups/{year_group_id}/projects/pbl/{project_id}/journal/students",
    "pathParams": [
      "year_group_id",
      "project_id"
    ],
    "queryParams": [
      "archived",
      "include_archived_students"
    ],
    "hasBody": false,
    "summary": "Get Student Journal Entries for a Year Group PBL"
  },
  {
    "id": "listYearGroupPblDocumentsStudentsDetails",
    "command": "projects.listYearGroupPblDocumentsStudentsDetails",
    "httpMethod": "GET",
    "path": "/v2p3/year-groups/{year_group_id}/projects/pbl/{project_id}/documents/students",
    "pathParams": [
      "year_group_id",
      "project_id"
    ],
    "queryParams": [
      "archived",
      "include_archived_students"
    ],
    "hasBody": false,
    "summary": "Get Student Documents for a Year Group PBL"
  },
  {
    "id": "listYearGroupPblPresentationStudentsDetails",
    "command": "projects.listYearGroupPblPresentationStudentsDetails",
    "httpMethod": "GET",
    "path": "/v2p3/year-groups/{year_group_id}/projects/pbl/{project_id}/presentation/students",
    "pathParams": [
      "year_group_id",
      "project_id"
    ],
    "queryParams": [
      "archived",
      "include_archived_students"
    ],
    "hasBody": false,
    "summary": "Get Student Presentations for a Year Group PBL"
  },
  {
    "id": "listYearGroupPblNotesAndInterviewsStudentsDetails",
    "command": "projects.listYearGroupPblNotesAndInterviewsStudentsDetails",
    "httpMethod": "GET",
    "path": "/v2p3/year-groups/{year_group_id}/projects/pbl/{project_id}/notes_and_interviews/students",
    "pathParams": [
      "year_group_id",
      "project_id"
    ],
    "queryParams": [
      "archived",
      "include_archived_students"
    ],
    "hasBody": false,
    "summary": "Get Student Notes & Interviews for a Year Group PBL"
  },
  {
    "id": "listYearGroupProjectBasedLearningTemplates",
    "command": "projects.listYearGroupProjectBasedLearningTemplates",
    "httpMethod": "GET",
    "path": "/v2p3/year-groups/{id}/projects/pbl",
    "pathParams": [
      "id"
    ],
    "queryParams": [
      "archived"
    ],
    "hasBody": false,
    "summary": "Get all Year Group Project Based Learning"
  },
  {
    "id": "listYearGroupServiceLearningCategoriesStudents",
    "command": "yearGroups.listYearGroupServiceLearningCategoriesStudents",
    "httpMethod": "GET",
    "path": "/v2p3/year-groups/{id}/projects/sl/categories/students",
    "pathParams": [
      "id"
    ],
    "queryParams": [
      "student_ids[]",
      "page",
      "per_page"
    ],
    "hasBody": false,
    "summary": "Get Service Learning Categories for Students in a Year Group"
  },
  {
    "id": "listYearGroupServiceLearningOutcomesStudents",
    "command": "yearGroups.listYearGroupServiceLearningOutcomesStudents",
    "httpMethod": "GET",
    "path": "/v2p3/year-groups/{id}/projects/sl/outcomes/students",
    "pathParams": [
      "id"
    ],
    "queryParams": [
      "student_ids[]",
      "page",
      "per_page"
    ],
    "hasBody": false,
    "summary": "Get Service Learning Outcomes for Students in a Year Group"
  },
  {
    "id": "getYearGroupServiceLearning",
    "command": "yearGroups.getYearGroupServiceLearning",
    "httpMethod": "GET",
    "path": "/v2p3/year-groups/{id}/projects/sl",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Get Service Learning settings for a Year Group"
  },
  {
    "id": "listYearGroups",
    "command": "yearGroups.listYearGroups",
    "httpMethod": "GET",
    "path": "/v2p3/year-groups",
    "pathParams": [],
    "queryParams": [
      "modified_since",
      "page",
      "per_page",
      "archived",
      "student_ids"
    ],
    "hasBody": false,
    "summary": "Get all Year Groups"
  },
  {
    "id": "listStudentsFromYearGroups",
    "command": "yearGroups.listStudentsFromYearGroups",
    "httpMethod": "GET",
    "path": "/v2p3/year-groups/{id}/students",
    "pathParams": [
      "id"
    ],
    "queryParams": [
      "page",
      "per_page",
      "student_ids"
    ],
    "hasBody": false,
    "summary": "Get Students for a Year Group"
  },
  {
    "id": "addStudentToYearGroup",
    "command": "yearGroups.addStudentToYearGroup",
    "httpMethod": "POST",
    "path": "/v2p3/year-groups/{id}/add_students",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Add Students to a Year Group"
  },
  {
    "id": "removeStudentToYearGroup",
    "command": "yearGroups.removeStudentToYearGroup",
    "httpMethod": "POST",
    "path": "/v2p3/year-groups/{id}/remove_students",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Remove Students from a Year Group"
  },
  {
    "id": "listAdvisorsFromYearGroup",
    "command": "yearGroups.listAdvisorsFromYearGroup",
    "httpMethod": "GET",
    "path": "/v2p3/year-groups/{id}/advisors",
    "pathParams": [
      "id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Get Advisors"
  },
  {
    "id": "getTeacherMemberships",
    "command": "memberships.getTeacherMemberships",
    "httpMethod": "GET",
    "path": "/v2p3/classes/{class_id}/teachers",
    "pathParams": [
      "class_id"
    ],
    "queryParams": [],
    "hasBody": false,
    "summary": "Get Teachers for a Class"
  },
  {
    "id": "bulkUpdateTeacherMemberships",
    "command": "extendedApis.bulkUpdateTeacherMemberships",
    "httpMethod": "PUT",
    "path": "/v2p3/classes/{class_id}/teachers",
    "pathParams": [
      "class_id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Set Teacher memberships for a Class"
  },
  {
    "id": "addTeachersToClass",
    "command": "classes.addTeachersToClass",
    "httpMethod": "POST",
    "path": "/v2p3/classes/{class_id}/teachers/add_teachers",
    "pathParams": [
      "class_id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Add Teachers to a Class"
  },
  {
    "id": "removeTeachersFromClass",
    "command": "memberships.removeTeachersFromClass",
    "httpMethod": "DELETE",
    "path": "/v2p3/classes/{class_id}/teachers/remove_teachers",
    "pathParams": [
      "class_id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Remove Teachers from a Class"
  },
  {
    "id": "createTaskforClass",
    "command": "coursework.createTaskforClass",
    "httpMethod": "POST",
    "path": "/v2p3/classes/{class_id}/tasks",
    "pathParams": [
      "class_id"
    ],
    "queryParams": [],
    "hasBody": true,
    "summary": "Create a Task for a Class"
  }
];

const baseUrl = process.env.MANAGE_BAC_PLUS_BASE_URL ?? "https://api.managebac.com";
const apiKey = process.env.MANAGE_BAC_PLUS_API_KEY;

function usage(): void {
  console.error("Usage: manage-bac-plus <command> [--param value] [--body '<json>']\n\nCommands:");
  for (const route of routes) {
    console.error(`  ${route.command.padEnd(28)} ${route.httpMethod} ${route.path}`);
  }
}

function parseFlags(args: string[]): Record<string, string> {
  const flags: Record<string, string> = {};
  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg.startsWith("--")) {
      const key = arg.slice(2);
      const value = args[index + 1] ?? "";
      flags[key] = value;
      index += 1;
    }
  }
  return flags;
}

async function main(): Promise<void> {
  const [command, ...rest] = process.argv.slice(2);
  if (!command || command === "--help" || command === "-h") {
    usage();
    process.exit(command ? 0 : 1);
  }
  const route = routes.find((candidate) => candidate.command === command);
  if (!route) {
    console.error(`Unknown command: ${command}`);
    usage();
    process.exit(1);
  }
  const flags = parseFlags(rest);

  let path = route.path;
  for (const param of route.pathParams) {
    const value = flags[param];
    if (value === undefined) {
      console.error(`Missing required path parameter --${param}`);
      process.exit(1);
    }
    path = path.replace(`{${param}}`, encodeURIComponent(value));
  }

  const url = new URL(`${baseUrl}${path}`);
  for (const param of route.queryParams) {
    if (flags[param] !== undefined) url.searchParams.set(param, flags[param]);
  }

  const headers: Record<string, string> = { accept: "application/json" };
  if (apiKey) headers.authorization = `Bearer ${apiKey}`;
  let body: string | undefined;
  if (route.hasBody && flags.body) {
    headers["content-type"] = "application/json";
    body = flags.body;
  }

  const response = await fetch(url, { method: route.httpMethod, headers, body });
  const text = await response.text();
  if (!response.ok) {
    console.error(`HTTP ${response.status}: ${text}`);
    process.exit(1);
  }
  console.log(text);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
