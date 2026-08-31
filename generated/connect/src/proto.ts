// Zero-dependency protobuf wire codec (varint / fixed64 / length-delimited) plus gRPC-web
// 5-byte length-prefix envelope framing. Field numbers are assigned by IR field order.

export type ProtoFieldType =
  | { kind: "string" }
  | { kind: "int" }
  | { kind: "double" }
  | { kind: "bool" }
  | { kind: "bytes" }
  | { kind: "message"; ref: string }
  | { kind: "repeated"; item: ProtoFieldType }
  | { kind: "map"; value: ProtoFieldType };

export interface ProtoField {
  name: string;
  number: number;
  type: ProtoFieldType;
}

export const PROTO_SCHEMAS: Record<string, ProtoField[]> = {
  "YearGroupPblPblItemSubject": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "title", number: 2, type: { kind: "string" } }
  ],
  "YearGroupPblPblItemComponentsItem": [
    { name: "slug", number: 1, type: { kind: "string" } },
    { name: "label", number: 2, type: { kind: "string" } },
    { name: "enabled", number: 3, type: { kind: "bool" } }
  ],
  "YearGroupPblPblItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "title", number: 2, type: { kind: "string" } },
    { name: "abbreviation", number: 3, type: { kind: "string" } },
    { name: "archived", number: 4, type: { kind: "bool" } },
    { name: "subject", number: 5, type: { kind: "message", ref: "YearGroupPblPblItemSubject" } },
    { name: "description", number: 6, type: { kind: "string" } },
    { name: "components", number: 7, type: { kind: "repeated", item: { kind: "message", ref: "YearGroupPblPblItemComponentsItem" } } }
  ],
  "YearGroupPbl": [
    { name: "pbl", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "YearGroupPblPblItem" } } }
  ],
  "NotFound": [
    { name: "error", number: 1, type: { kind: "string" } }
  ],
  "AccessDeniedError": [
    { name: "error", number: 1, type: { kind: "string" } }
  ],
  "InvalidPayloadError": [
    { name: "error", number: 1, type: { kind: "string" } }
  ],
  "YearGroup": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } },
    { name: "short_name", number: 3, type: { kind: "string" } },
    { name: "program", number: 4, type: { kind: "string" } },
    { name: "program_code", number: 5, type: { kind: "string" } },
    { name: "grade", number: 6, type: { kind: "string" } },
    { name: "archived", number: 7, type: { kind: "bool" } },
    { name: "grade_number", number: 8, type: { kind: "int" } },
    { name: "graduation_year", number: 9, type: { kind: "int" } },
    { name: "student_ids", number: 10, type: { kind: "repeated", item: { kind: "int" } } }
  ],
  "ToggleSchoolSubjectsRequest": [
    { name: "subject_ids", number: 1, type: { kind: "repeated", item: { kind: "int" } } }
  ],
  "AuthPermissionsResponse": [
    { name: "permissions", number: 1, type: { kind: "repeated", item: { kind: "string" } } }
  ],
  "OauthTokenRequest": [
    { name: "grant_type", number: 1, type: { kind: "string" } },
    { name: "client_id", number: 2, type: { kind: "string" } },
    { name: "client_secret", number: 3, type: { kind: "string" } },
    { name: "scope", number: 4, type: { kind: "string" } }
  ],
  "OauthTokenResponse": [
    { name: "access_token", number: 1, type: { kind: "string" } },
    { name: "token_type", number: 2, type: { kind: "string" } },
    { name: "expires_in", number: 3, type: { kind: "int" } },
    { name: "scope", number: 4, type: { kind: "string" } },
    { name: "created_at", number: 5, type: { kind: "int" } }
  ],
  "OauthTokenError": [
    { name: "error", number: 1, type: { kind: "string" } },
    { name: "error_description", number: 2, type: { kind: "string" } }
  ],
  "SubjectRequestSubject": [
    { name: "subject_group_id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } },
    { name: "title", number: 3, type: { kind: "string" } },
    { name: "description", number: 4, type: { kind: "string" } },
    { name: "scope_and_sequence_based_on", number: 5, type: { kind: "string" } },
    { name: "sl", number: 6, type: { kind: "bool" } },
    { name: "hl", number: 7, type: { kind: "bool" } },
    { name: "enabled", number: 8, type: { kind: "bool" } },
    { name: "code", number: 9, type: { kind: "string" } }
  ],
  "SubjectRequest": [
    { name: "subject", number: 1, type: { kind: "message", ref: "SubjectRequestSubject" } }
  ],
  "SubjectsResponseSubjectsItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "subject_group_id", number: 2, type: { kind: "int" } },
    { name: "custom", number: 3, type: { kind: "bool" } },
    { name: "name", number: 4, type: { kind: "string" } },
    { name: "title", number: 5, type: { kind: "string" } },
    { name: "sl", number: 6, type: { kind: "bool" } },
    { name: "hl", number: 7, type: { kind: "bool" } },
    { name: "sl_code", number: 8, type: { kind: "string" } },
    { name: "hl_code", number: 9, type: { kind: "string" } },
    { name: "description", number: 10, type: { kind: "string" } },
    { name: "scope_and_sequence_based_on", number: 11, type: { kind: "string" } },
    { name: "updated_at", number: 12, type: { kind: "string" } },
    { name: "self_taught", number: 13, type: { kind: "bool" } },
    { name: "phases", number: 14, type: { kind: "repeated", item: { kind: "string" } } },
    { name: "levels", number: 15, type: { kind: "repeated", item: { kind: "string" } } },
    { name: "enabled", number: 16, type: { kind: "bool" } }
  ],
  "SubjectsResponse": [
    { name: "meta", number: 1, type: { kind: "message", ref: "Meta" } },
    { name: "subjects", number: 2, type: { kind: "repeated", item: { kind: "message", ref: "SubjectsResponseSubjectsItem" } } }
  ],
  "SubjectResponseSubject": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "subject_group_id", number: 2, type: { kind: "int" } },
    { name: "custom", number: 3, type: { kind: "bool" } },
    { name: "name", number: 4, type: { kind: "string" } },
    { name: "title", number: 5, type: { kind: "string" } },
    { name: "sl", number: 6, type: { kind: "bool" } },
    { name: "hl", number: 7, type: { kind: "bool" } },
    { name: "code", number: 8, type: { kind: "string" } },
    { name: "description", number: 9, type: { kind: "string" } },
    { name: "scope_and_sequence_based_on", number: 10, type: { kind: "string" } },
    { name: "updated_at", number: 11, type: { kind: "string" } },
    { name: "self_taught", number: 12, type: { kind: "bool" } },
    { name: "phases", number: 13, type: { kind: "repeated", item: { kind: "string" } } },
    { name: "levels", number: 14, type: { kind: "repeated", item: { kind: "string" } } },
    { name: "enabled", number: 15, type: { kind: "bool" } }
  ],
  "SubjectResponse": [
    { name: "subject", number: 1, type: { kind: "message", ref: "SubjectResponseSubject" } }
  ],
  "SubjectGroupRequestSubjectGroup": [
    { name: "name", number: 1, type: { kind: "string" } },
    { name: "max_phase", number: 2, type: { kind: "string" } }
  ],
  "SubjectGroupRequest": [
    { name: "subject_group", number: 1, type: { kind: "message", ref: "SubjectGroupRequestSubjectGroup" } }
  ],
  "SubjectGroupResponseSubjectGroup": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } },
    { name: "custom", number: 3, type: { kind: "bool" } },
    { name: "max_phase", number: 4, type: { kind: "string" } },
    { name: "program", number: 5, type: { kind: "string" } },
    { name: "updated_at", number: 6, type: { kind: "string" } }
  ],
  "SubjectGroupResponse": [
    { name: "subject_group", number: 1, type: { kind: "message", ref: "SubjectGroupResponseSubjectGroup" } }
  ],
  "SubjectGroupsResponseSubjectGroupsItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } },
    { name: "max_phase", number: 3, type: { kind: "string" } },
    { name: "program", number: 4, type: { kind: "string" } },
    { name: "updated_at", number: 5, type: { kind: "string" } }
  ],
  "SubjectGroupsResponse": [
    { name: "meta", number: 1, type: { kind: "message", ref: "Meta" } },
    { name: "subject_groups", number: 2, type: { kind: "repeated", item: { kind: "message", ref: "SubjectGroupsResponseSubjectGroupsItem" } } }
  ],
  "TermGradeScale": [
    { name: "score", number: 1, type: { kind: "double" } },
    { name: "mark", number: 2, type: { kind: "string" } },
    { name: "program_code", number: 3, type: { kind: "string" } }
  ],
  "ProgramGradesItem": [
    { name: "grade_number", number: 1, type: { kind: "int" } },
    { name: "uid", number: 2, type: { kind: "int" } },
    { name: "name", number: 3, type: { kind: "string" } },
    { name: "enabled", number: 4, type: { kind: "bool" } },
    { name: "program", number: 5, type: { kind: "string" } }
  ],
  "Program": [
    { name: "name", number: 1, type: { kind: "string" } },
    { name: "short_name", number: 2, type: { kind: "string" } },
    { name: "uid", number: 3, type: { kind: "int" } },
    { name: "code", number: 4, type: { kind: "string" } },
    { name: "grades", number: 5, type: { kind: "repeated", item: { kind: "message", ref: "ProgramGradesItem" } } }
  ],
  "BehaviorNote": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "student_id", number: 2, type: { kind: "string" } },
    { name: "email", number: 3, type: { kind: "string" } },
    { name: "first_name", number: 4, type: { kind: "string" } },
    { name: "last_name", number: 5, type: { kind: "string" } },
    { name: "grade", number: 6, type: { kind: "string" } },
    { name: "incident_time", number: 7, type: { kind: "string" } },
    { name: "behavior_type", number: 8, type: { kind: "string" } },
    { name: "notes", number: 9, type: { kind: "string" } },
    { name: "next_step", number: 10, type: { kind: "string" } },
    { name: "next_step_date", number: 11, type: { kind: "string" } },
    { name: "reported_by", number: 12, type: { kind: "string" } },
    { name: "homeroom_advisor", number: 13, type: { kind: "string" } }
  ],
  "Membership": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "user_id", number: 2, type: { kind: "int" } },
    { name: "level", number: 3, type: { kind: "string" } },
    { name: "created_at", number: 4, type: { kind: "string" } },
    { name: "updated_at", number: 5, type: { kind: "string" } },
    { name: "class_id", number: 6, type: { kind: "int" } },
    { name: "user_email", number: 7, type: { kind: "string" } },
    { name: "uniq_class_id", number: 8, type: { kind: "string" } },
    { name: "uniq_student_id", number: 9, type: { kind: "string" } },
    { name: "role", number: 10, type: { kind: "string" } }
  ],
  "AcademicTerm": [
    { name: "name", number: 1, type: { kind: "string" } },
    { name: "starts_on", number: 2, type: { kind: "string" } },
    { name: "ends_on", number: 3, type: { kind: "string" } },
    { name: "locked", number: 4, type: { kind: "bool" } },
    { name: "enable_exam_grade", number: 5, type: { kind: "bool" } }
  ],
  "AcademicTermRequest": [
    { name: "academic_term", number: 1, type: { kind: "message", ref: "AcademicTerm" } }
  ],
  "AcademicYearRequestAcademicYear": [
    { name: "terms_attributes", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "AcademicTerm" } } }
  ],
  "AcademicYearRequest": [
    { name: "academic_year", number: 1, type: { kind: "message", ref: "AcademicYearRequestAcademicYear" } }
  ],
  "AcademicYearResponseAcademicYear": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } },
    { name: "starts_on", number: 3, type: { kind: "string" } },
    { name: "ends_on", number: 4, type: { kind: "string" } },
    { name: "updated_at", number: 5, type: { kind: "string" } },
    { name: "program", number: 6, type: { kind: "string" } },
    { name: "academic_terms", number: 7, type: { kind: "repeated", item: { kind: "message", ref: "AcademicTermAttributes" } } }
  ],
  "AcademicYearResponse": [
    { name: "academic_year", number: 1, type: { kind: "message", ref: "AcademicYearResponseAcademicYear" } }
  ],
  "AcademicTermResponse": [
    { name: "academic_term", number: 1, type: { kind: "message", ref: "AcademicTermAttributes" } }
  ],
  "AcademicTermAttributes": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "academic_year_id", number: 2, type: { kind: "int" } },
    { name: "name", number: 3, type: { kind: "string" } },
    { name: "starts_on", number: 4, type: { kind: "string" } },
    { name: "ends_on", number: 5, type: { kind: "string" } },
    { name: "locked", number: 6, type: { kind: "bool" } },
    { name: "exam_grade", number: 7, type: { kind: "bool" } },
    { name: "updated_at", number: 8, type: { kind: "string" } }
  ],
  "AcademicYearCalendarResponseCalendarDatesItem": [
    { name: "date", number: 1, type: { kind: "string" } },
    { name: "rotation_day", number: 2, type: { kind: "int" } }
  ],
  "AcademicYearCalendarResponseCalendar": [
    { name: "start_date", number: 1, type: { kind: "string" } },
    { name: "end_date", number: 2, type: { kind: "string" } },
    { name: "calendar_type", number: 3, type: { kind: "string" } },
    { name: "rotation_cycle", number: 4, type: { kind: "int" } },
    { name: "ignore_holidays", number: 5, type: { kind: "bool" } },
    { name: "days_off", number: 6, type: { kind: "repeated", item: { kind: "int" } } },
    { name: "dates", number: 7, type: { kind: "repeated", item: { kind: "message", ref: "AcademicYearCalendarResponseCalendarDatesItem" } } }
  ],
  "AcademicYearCalendarResponse": [
    { name: "calendar", number: 1, type: { kind: "message", ref: "AcademicYearCalendarResponseCalendar" } }
  ],
  "AttendanceCategoriesResponseCategoriesItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "status", number: 2, type: { kind: "int" } },
    { name: "label", number: 3, type: { kind: "string" } },
    { name: "abbreviation", number: 4, type: { kind: "string" } },
    { name: "enabled", number: 5, type: { kind: "bool" } },
    { name: "color_code", number: 6, type: { kind: "string" } }
  ],
  "AttendanceCategoriesResponse": [
    { name: "categories", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "AttendanceCategoriesResponseCategoriesItem" } } }
  ],
  "AttendanceExcusalsResponseExcusalsItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "student_id", number: 2, type: { kind: "int" } },
    { name: "parent_id", number: 3, type: { kind: "int" } },
    { name: "start_date", number: 4, type: { kind: "string" } },
    { name: "end_date", number: 5, type: { kind: "string" } },
    { name: "duration", number: 6, type: { kind: "int" } },
    { name: "comment", number: 7, type: { kind: "string" } },
    { name: "created_at", number: 8, type: { kind: "string" } },
    { name: "updated_at", number: 9, type: { kind: "string" } }
  ],
  "AttendanceExcusalsResponse": [
    { name: "excusals", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "AttendanceExcusalsResponseExcusalsItem" } } }
  ],
  "CreateAttendanceExcusalRequestExcusal": [
    { name: "parent_id", number: 1, type: { kind: "int" } },
    { name: "start_date", number: 2, type: { kind: "string" } },
    { name: "end_date", number: 3, type: { kind: "string" } },
    { name: "comment", number: 4, type: { kind: "string" } }
  ],
  "CreateAttendanceExcusalRequest": [
    { name: "excusal", number: 1, type: { kind: "message", ref: "CreateAttendanceExcusalRequestExcusal" } }
  ],
  "UpdateAttendanceExcusalRequestExcusal": [
    { name: "end_date", number: 1, type: { kind: "string" } },
    { name: "comment", number: 2, type: { kind: "string" } }
  ],
  "UpdateAttendanceExcusalRequest": [
    { name: "excusal", number: 1, type: { kind: "message", ref: "UpdateAttendanceExcusalRequestExcusal" } }
  ],
  "UpsertNotFoundErrorErrors": [
    { name: "id", number: 1, type: { kind: "repeated", item: { kind: "string" } } }
  ],
  "UpsertNotFoundError": [
    { name: "index", number: 1, type: { kind: "int" } },
    { name: "errors", number: 2, type: { kind: "message", ref: "UpsertNotFoundErrorErrors" } },
    { name: "status", number: 3, type: { kind: "string" } }
  ],
  "UpsertUnprocessableEntityError": [
    { name: "index", number: 1, type: { kind: "int" } },
    { name: "errors", number: 2, type: { kind: "string" } },
    { name: "status", number: 3, type: { kind: "string" } }
  ],
  "UpsertClassesClassesItemVariant1": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "archived", number: 2, type: { kind: "bool" } },
    { name: "name", number: 3, type: { kind: "string" } },
    { name: "description", number: 4, type: { kind: "string" } },
    { name: "language", number: 5, type: { kind: "string" } },
    { name: "uniq_id", number: 6, type: { kind: "string" } },
    { name: "class_section", number: 7, type: { kind: "string" } },
    { name: "subject_ids", number: 8, type: { kind: "repeated", item: { kind: "int" } } },
    { name: "sl", number: 9, type: { kind: "bool" } },
    { name: "hl", number: 10, type: { kind: "bool" } },
    { name: "subject_option", number: 11, type: { kind: "string" } },
    { name: "lock_memberships", number: 12, type: { kind: "string" } }
  ],
  "UpsertClasses": [
    { name: "classes", number: 1, type: { kind: "repeated", item: { kind: "string" } } }
  ],
  "UpsertClassesResponseValueItemVariant3": [
    { name: "index", number: 1, type: { kind: "int" } },
    { name: "class", number: 2, type: { kind: "message", ref: "Class" } },
    { name: "status", number: 3, type: { kind: "string" } }
  ],
  "UpdateClass": [
    { name: "archived", number: 1, type: { kind: "bool" } },
    { name: "name", number: 2, type: { kind: "string" } },
    { name: "description", number: 3, type: { kind: "string" } },
    { name: "language", number: 4, type: { kind: "string" } },
    { name: "uniq_id", number: 5, type: { kind: "string" } },
    { name: "class_section", number: 6, type: { kind: "string" } },
    { name: "subject_ids", number: 7, type: { kind: "repeated", item: { kind: "int" } } },
    { name: "sl", number: 8, type: { kind: "bool" } },
    { name: "hl", number: 9, type: { kind: "bool" } },
    { name: "subject_option", number: 10, type: { kind: "string" } },
    { name: "lock_memberships", number: 11, type: { kind: "string" } }
  ],
  "CreateClass": [
    { name: "start_term_id", number: 1, type: { kind: "int" } },
    { name: "end_term_id", number: 2, type: { kind: "int" } },
    { name: "subject_id", number: 3, type: { kind: "int" } },
    { name: "program", number: 4, type: { kind: "string" } },
    { name: "grade_number", number: 5, type: { kind: "int" } },
    { name: "name", number: 6, type: { kind: "string" } },
    { name: "description", number: 7, type: { kind: "string" } },
    { name: "language", number: 8, type: { kind: "string" } },
    { name: "uniq_id", number: 9, type: { kind: "string" } },
    { name: "class_section", number: 10, type: { kind: "string" } },
    { name: "subject_ids", number: 11, type: { kind: "repeated", item: { kind: "int" } } },
    { name: "sl", number: 12, type: { kind: "bool" } },
    { name: "hl", number: 13, type: { kind: "bool" } },
    { name: "subject_option", number: 14, type: { kind: "string" } },
    { name: "lock_memberships", number: 15, type: { kind: "string" } }
  ],
  "ClassSubjectsItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } },
    { name: "subject_group_id", number: 3, type: { kind: "int" } },
    { name: "subject_group", number: 4, type: { kind: "string" } }
  ],
  "ClassTeachersItem": [
    { name: "teacher_id", number: 1, type: { kind: "int" } },
    { name: "show_on_reports", number: 2, type: { kind: "bool" } },
    { name: "teacher_archived", number: 3, type: { kind: "bool" } }
  ],
  "Class": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } },
    { name: "description", number: 3, type: { kind: "string" } },
    { name: "language", number: 4, type: { kind: "string" } },
    { name: "uniq_id", number: 5, type: { kind: "string" } },
    { name: "class_section", number: 6, type: { kind: "string" } },
    { name: "start_term_id", number: 7, type: { kind: "int" } },
    { name: "end_term_id", number: 8, type: { kind: "int" } },
    { name: "created_at", number: 9, type: { kind: "string" } },
    { name: "updated_at", number: 10, type: { kind: "string" } },
    { name: "grade", number: 11, type: { kind: "string" } },
    { name: "grade_number", number: 12, type: { kind: "int" } },
    { name: "applicable_levels", number: 13, type: { kind: "repeated", item: { kind: "string" } } },
    { name: "program", number: 14, type: { kind: "string" } },
    { name: "program_code", number: 15, type: { kind: "string" } },
    { name: "subject_id", number: 16, type: { kind: "int" } },
    { name: "subject_name", number: 17, type: { kind: "string" } },
    { name: "subject_group", number: 18, type: { kind: "string" } },
    { name: "subject_option", number: 19, type: { kind: "string" } },
    { name: "lock_memberships", number: 20, type: { kind: "string" } },
    { name: "archived", number: 21, type: { kind: "bool" } },
    { name: "subjects", number: 22, type: { kind: "repeated", item: { kind: "message", ref: "ClassSubjectsItem" } } },
    { name: "teachers", number: 23, type: { kind: "repeated", item: { kind: "message", ref: "ClassTeachersItem" } } }
  ],
  "BulkUpdateStudentsStudentsItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "level", number: 2, type: { kind: "string" } }
  ],
  "BulkUpdateStudents": [
    { name: "students", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "BulkUpdateStudentsStudentsItem" } } }
  ],
  "BulkUpdateTeachersTeachersItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "show_on_reports", number: 2, type: { kind: "bool" } }
  ],
  "BulkUpdateTeachers": [
    { name: "teachers", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "BulkUpdateTeachersTeachersItem" } } }
  ],
  "BulkUpdateAttendanceAttendancesItem": [
    { name: "student_id", number: 1, type: { kind: "int" } },
    { name: "date", number: 2, type: { kind: "string" } },
    { name: "period", number: 3, type: { kind: "int" } },
    { name: "status", number: 4, type: { kind: "int" } },
    { name: "notes", number: 5, type: { kind: "string" } }
  ],
  "BulkUpdateAttendance": [
    { name: "attendances", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "BulkUpdateAttendanceAttendancesItem" } } }
  ],
  "SetAttendanceSettingsRequestSettingsItem": [
    { name: "period", number: 1, type: { kind: "int" } },
    { name: "day", number: 2, type: { kind: "int" } },
    { name: "location", number: 3, type: { kind: "string" } }
  ],
  "SetAttendanceSettingsRequest": [
    { name: "settings", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "SetAttendanceSettingsRequestSettingsItem" } } }
  ],
  "UpdateStudentAssessPrepTaskGrade": [
    { name: "assess_prep_uuid", number: 1, type: { kind: "string" } },
    { name: "assess_prep_uid", number: 2, type: { kind: "string" } },
    { name: "author_id", number: 3, type: { kind: "int" } },
    { name: "assessment_file_url", number: 4, type: { kind: "string" } },
    { name: "points", number: 5, type: { kind: "int" } },
    { name: "comment", number: 6, type: { kind: "string" } },
    { name: "submission_id", number: 7, type: { kind: "int" } },
    { name: "is_late", number: 8, type: { kind: "bool" } }
  ],
  "UpdateStudentTaskGradeCriterionGradesItem": [
    { name: "label", number: 1, type: { kind: "string" } },
    { name: "criterion", number: 2, type: { kind: "string" } },
    { name: "score", number: 3, type: { kind: "int" } }
  ],
  "UpdateStudentTaskGrade": [
    { name: "author_id", number: 1, type: { kind: "int" } },
    { name: "points", number: 2, type: { kind: "int" } },
    { name: "comment", number: 3, type: { kind: "string" } },
    { name: "binary", number: 4, type: { kind: "bool" } },
    { name: "criterion_grades", number: 5, type: { kind: "repeated", item: { kind: "message", ref: "UpdateStudentTaskGradeCriterionGradesItem" } } }
  ],
  "StudentAssessPrepTaskGrade": [
    { name: "assess_prep_uuid", number: 1, type: { kind: "string" } },
    { name: "assess_prep_uid", number: 2, type: { kind: "string" } },
    { name: "assessment_file_url", number: 3, type: { kind: "string" } },
    { name: "submission_id", number: 4, type: { kind: "int" } },
    { name: "author_id", number: 5, type: { kind: "int" } }
  ],
  "BulkUpdateStudentTaskGradeRequestStudentsItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "task_grade", number: 2, type: { kind: "string" } }
  ],
  "BulkUpdateStudentTaskGradeRequest": [
    { name: "students", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "BulkUpdateStudentTaskGradeRequestStudentsItem" } } }
  ],
  "BulkDestroyStudentTaskGradeRequest": [
    { name: "student_ids", number: 1, type: { kind: "repeated", item: { kind: "int" } } }
  ],
  "BulkStudentTaskGradeResponseValueItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "status", number: 2, type: { kind: "string" } },
    { name: "error", number: 3, type: { kind: "string" } }
  ],
  "OnlineAssessment": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "user_id", number: 2, type: { kind: "int" } },
    { name: "title", number: 3, type: { kind: "string" } },
    { name: "mode", number: 4, type: { kind: "string" } },
    { name: "points", number: 5, type: { kind: "int" } },
    { name: "duration", number: 6, type: { kind: "int" } },
    { name: "assess_prep_uid", number: 7, type: { kind: "string" } },
    { name: "assess_prep_uuid", number: 8, type: { kind: "string" } },
    { name: "start_at", number: 9, type: { kind: "string" } },
    { name: "created_at", number: 10, type: { kind: "string" } },
    { name: "updated_at", number: 11, type: { kind: "string" } },
    { name: "task_id", number: 12, type: { kind: "int" } },
    { name: "email", number: 13, type: { kind: "string" } },
    { name: "program_code", number: 14, type: { kind: "string" } },
    { name: "grade_code", number: 15, type: { kind: "string" } },
    { name: "role", number: 16, type: { kind: "string" } },
    { name: "subject", number: 17, type: { kind: "string" } },
    { name: "subject_group", number: 18, type: { kind: "string" } }
  ],
  "UpdateOnlineAssessmentCriteriaLabelsItemDescriptorsItem": [
    { name: "level", number: 1, type: { kind: "string" } },
    { name: "descriptor", number: 2, type: { kind: "string" } }
  ],
  "UpdateOnlineAssessmentCriteriaLabelsItem": [
    { name: "label", number: 1, type: { kind: "string" } },
    { name: "title", number: 2, type: { kind: "string" } },
    { name: "descriptors", number: 3, type: { kind: "repeated", item: { kind: "message", ref: "UpdateOnlineAssessmentCriteriaLabelsItemDescriptorsItem" } } }
  ],
  "UpdateOnlineAssessment": [
    { name: "assess_prep_uid", number: 1, type: { kind: "string" } },
    { name: "title", number: 2, type: { kind: "string" } },
    { name: "mode", number: 3, type: { kind: "string" } },
    { name: "questions_count", number: 4, type: { kind: "int" } },
    { name: "points", number: 5, type: { kind: "int" } },
    { name: "duration", number: 6, type: { kind: "int" } },
    { name: "start_at", number: 7, type: { kind: "string" } },
    { name: "status", number: 8, type: { kind: "string" } },
    { name: "video_monitoring", number: 9, type: { kind: "bool" } },
    { name: "criteria_labels", number: 10, type: { kind: "repeated", item: { kind: "message", ref: "UpdateOnlineAssessmentCriteriaLabelsItem" } } }
  ],
  "PersonalInformation": [
    { name: "email", number: 1, type: { kind: "string" } },
    { name: "first_name", number: 2, type: { kind: "string" } },
    { name: "middle_name", number: 3, type: { kind: "string" } },
    { name: "password", number: 4, type: { kind: "string" } },
    { name: "last_name", number: 5, type: { kind: "string" } },
    { name: "nickname", number: 6, type: { kind: "string" } },
    { name: "other_name", number: 7, type: { kind: "string" } },
    { name: "identifier", number: 8, type: { kind: "string" } },
    { name: "gender", number: 9, type: { kind: "string" } },
    { name: "birthday", number: 10, type: { kind: "string" } },
    { name: "phone_number", number: 11, type: { kind: "string" } },
    { name: "mobile_phone_number", number: 12, type: { kind: "string" } },
    { name: "street_address", number: 13, type: { kind: "string" } },
    { name: "street_address_ii", number: 14, type: { kind: "string" } },
    { name: "city", number: 15, type: { kind: "string" } },
    { name: "state", number: 16, type: { kind: "string" } },
    { name: "zipcode", number: 17, type: { kind: "string" } },
    { name: "country", number: 18, type: { kind: "string" } },
    { name: "nationalities", number: 19, type: { kind: "repeated", item: { kind: "string" } } },
    { name: "languages", number: 20, type: { kind: "repeated", item: { kind: "string" } } },
    { name: "account_uid", number: 21, type: { kind: "string" } },
    { name: "timezone", number: 22, type: { kind: "string" } }
  ],
  "ParentVariant2": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "salutation", number: 2, type: { kind: "string" } },
    { name: "title", number: 3, type: { kind: "string" } },
    { name: "employer", number: 4, type: { kind: "string" } },
    { name: "work_email", number: 5, type: { kind: "string" } },
    { name: "work_phone", number: 6, type: { kind: "string" } },
    { name: "work_address", number: 7, type: { kind: "string" } },
    { name: "work_address_ii", number: 8, type: { kind: "string" } },
    { name: "work_fax", number: 9, type: { kind: "string" } },
    { name: "work_city", number: 10, type: { kind: "string" } },
    { name: "work_state", number: 11, type: { kind: "string" } },
    { name: "work_postal_code", number: 12, type: { kind: "string" } },
    { name: "work_country", number: 13, type: { kind: "string" } },
    { name: "sb_id", number: 14, type: { kind: "string" } },
    { name: "oa_id", number: 15, type: { kind: "string" } },
    { name: "child_ids", number: 16, type: { kind: "repeated", item: { kind: "int" } } }
  ],
  "ChildRelation": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "relationship", number: 2, type: { kind: "string" } }
  ],
  "TeacherVariant2": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "role", number: 2, type: { kind: "string" } },
    { name: "sb_id", number: 3, type: { kind: "string" } },
    { name: "oa_id", number: 4, type: { kind: "string" } },
    { name: "programs", number: 5, type: { kind: "repeated", item: { kind: "string" } } }
  ],
  "StudentVariant2": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "sb_id", number: 2, type: { kind: "string" } },
    { name: "oa_id", number: 3, type: { kind: "string" } },
    { name: "graduated_on", number: 4, type: { kind: "string" } },
    { name: "withdrawn_on", number: 5, type: { kind: "string" } },
    { name: "student_id", number: 6, type: { kind: "string" } },
    { name: "homeroom_advisor_id", number: 7, type: { kind: "int" } },
    { name: "year_group_id", number: 8, type: { kind: "int" } },
    { name: "graduating_year", number: 9, type: { kind: "int" } },
    { name: "parent_ids", number: 10, type: { kind: "repeated", item: { kind: "int" } } }
  ],
  "Meta": [
    { name: "current_page", number: 1, type: { kind: "int" } },
    { name: "total_pages", number: 2, type: { kind: "int" } },
    { name: "total_count", number: 3, type: { kind: "int" } },
    { name: "per_page", number: 4, type: { kind: "int" } }
  ],
  "UnitSubject": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } }
  ],
  "UnitGuidingQuestionsInquiryQuestionsItemSubjectsItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } }
  ],
  "UnitGuidingQuestionsInquiryQuestionsItemLabelsItem": [
    { name: "name", number: 1, type: { kind: "string" } }
  ],
  "UnitGuidingQuestionsInquiryQuestionsItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "line_of_inquiry", number: 2, type: { kind: "string" } },
    { name: "question", number: 3, type: { kind: "string" } },
    { name: "subjects", number: 4, type: { kind: "repeated", item: { kind: "message", ref: "UnitGuidingQuestionsInquiryQuestionsItemSubjectsItem" } } },
    { name: "labels", number: 5, type: { kind: "repeated", item: { kind: "message", ref: "UnitGuidingQuestionsInquiryQuestionsItemLabelsItem" } } }
  ],
  "UnitGuidingQuestions": [
    { name: "inquiry_questions", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "UnitGuidingQuestionsInquiryQuestionsItem" } } }
  ],
  "UnitPedagogicalApproaches": [
    { name: "selected", number: 1, type: { kind: "repeated", item: { kind: "string" } } },
    { name: "text", number: 2, type: { kind: "string" } }
  ],
  "UnitLanguageAndLiteracyDevelopment": [
    { name: "options", number: 1, type: { kind: "map", value: { kind: "repeated", item: { kind: "string" } } } },
    { name: "text", number: 2, type: { kind: "string" } }
  ],
  "UnitCrossCurricularLinks": [
    { name: "options", number: 1, type: { kind: "map", value: { kind: "repeated", item: { kind: "string" } } } },
    { name: "text", number: 2, type: { kind: "string" } }
  ],
  "UnitCoCurricularLinks": [
    { name: "options", number: 1, type: { kind: "map", value: { kind: "repeated", item: { kind: "string" } } } },
    { name: "text", number: 2, type: { kind: "string" } }
  ],
  "UnitDifferentiation": [
    { name: "options", number: 1, type: { kind: "map", value: { kind: "repeated", item: { kind: "string" } } } },
    { name: "text", number: 2, type: { kind: "string" } }
  ],
  "UnitMetacognition": [
    { name: "options", number: 1, type: { kind: "map", value: { kind: "repeated", item: { kind: "string" } } } },
    { name: "text", number: 2, type: { kind: "string" } }
  ],
  "UnitUnitActivitiesItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "title", number: 2, type: { kind: "string" } }
  ],
  "UnitSupportMaterials": [
    { name: "options", number: 1, type: { kind: "map", value: { kind: "repeated", item: { kind: "string" } } } },
    { name: "text", number: 2, type: { kind: "string" } }
  ],
  "UnitLinesOfInquiryItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "line", number: 2, type: { kind: "string" } }
  ],
  "UnitStudentQuestionsItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "title", number: 2, type: { kind: "string" } }
  ],
  "UnitTeacherQuestionsItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "title", number: 2, type: { kind: "string" } }
  ],
  "UnitLearnerProfilesItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } }
  ],
  "UnitKeyConceptsKeyConceptsItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "concept", number: 2, type: { kind: "string" } }
  ],
  "UnitKeyConceptsUnitKeyConceptsItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "kind", number: 2, type: { kind: "string" } },
    { name: "explanation_related_concept", number: 3, type: { kind: "string" } }
  ],
  "UnitKeyConcepts": [
    { name: "key_concepts", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "UnitKeyConceptsKeyConceptsItem" } } },
    { name: "unit_key_concepts", number: 2, type: { kind: "repeated", item: { kind: "message", ref: "UnitKeyConceptsUnitKeyConceptsItem" } } }
  ],
  "UnitRelatedConceptsRelatedConceptsItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } },
    { name: "subject_id", number: 3, type: { kind: "int" } },
    { name: "subject_name", number: 4, type: { kind: "string" } },
    { name: "phase", number: 5, type: { kind: "int" } }
  ],
  "UnitRelatedConcepts": [
    { name: "related_concepts", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "UnitRelatedConceptsRelatedConceptsItem" } } },
    { name: "other", number: 2, type: { kind: "string" } }
  ],
  "UnitSpecifiedConceptsItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } },
    { name: "subject_id", number: 3, type: { kind: "int" } },
    { name: "subject_name", number: 4, type: { kind: "string" } },
    { name: "phase", number: 5, type: { kind: "int" } }
  ],
  "UnitCommunityEngagement": [
    { name: "selected", number: 1, type: { kind: "repeated", item: { kind: "string" } } },
    { name: "principled_action_comment", number: 2, type: { kind: "string" } },
    { name: "learning_process_comment", number: 3, type: { kind: "string" } }
  ],
  "UnitApproachesToLearningAtlsItemChildrenItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } }
  ],
  "UnitApproachesToLearningAtlsItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } },
    { name: "children", number: 3, type: { kind: "repeated", item: { kind: "message", ref: "UnitApproachesToLearningAtlsItemChildrenItem" } } }
  ],
  "UnitApproachesToLearning": [
    { name: "atls", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "UnitApproachesToLearningAtlsItem" } } },
    { name: "atl_details", number: 2, type: { kind: "string" } }
  ],
  "UnitCriteriaCriteriaItemCriteriaItemChildrenItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } }
  ],
  "UnitCriteriaCriteriaItemCriteriaItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } },
    { name: "children", number: 3, type: { kind: "repeated", item: { kind: "message", ref: "UnitCriteriaCriteriaItemCriteriaItemChildrenItem" } } }
  ],
  "UnitCriteriaCriteriaItem": [
    { name: "subject_id", number: 1, type: { kind: "int" } },
    { name: "subject_name", number: 2, type: { kind: "string" } },
    { name: "level", number: 3, type: { kind: "string" } },
    { name: "criteria", number: 4, type: { kind: "repeated", item: { kind: "message", ref: "UnitCriteriaCriteriaItemCriteriaItem" } } }
  ],
  "UnitCriteria": [
    { name: "criteria", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "UnitCriteriaCriteriaItem" } } },
    { name: "criteria_description", number: 2, type: { kind: "string" } }
  ],
  "UnitGlobalContextsUnitGlobalContextsItem": [
    { name: "name", number: 1, type: { kind: "string" } },
    { name: "exploration_to_develop", number: 2, type: { kind: "repeated", item: { kind: "string" } } },
    { name: "subjects", number: 3, type: { kind: "repeated", item: { kind: "string" } } }
  ],
  "UnitGlobalContexts": [
    { name: "unit_global_contexts", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "UnitGlobalContextsUnitGlobalContextsItem" } } }
  ],
  "UnitTransdisciplinaryThemeListItem": [
    { name: "name", number: 1, type: { kind: "string" } }
  ],
  "UnitTransdisciplinaryTheme": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "title", number: 2, type: { kind: "string" } },
    { name: "list", number: 3, type: { kind: "repeated", item: { kind: "message", ref: "UnitTransdisciplinaryThemeListItem" } } }
  ],
  "UnitStandardsCoreStandardsItemChildrenItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } }
  ],
  "UnitStandardsCoreStandardsItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } },
    { name: "children", number: 3, type: { kind: "repeated", item: { kind: "message", ref: "UnitStandardsCoreStandardsItemChildrenItem" } } }
  ],
  "UnitStandardsStandardsItemAtlasGrade": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } }
  ],
  "UnitStandardsStandardsItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } },
    { name: "kind", number: 3, type: { kind: "string" } },
    { name: "atlas_grade", number: 4, type: { kind: "message", ref: "UnitStandardsStandardsItemAtlasGrade" } },
    { name: "children", number: 5, type: { kind: "repeated", item: { kind: "string" } } }
  ],
  "UnitStandards": [
    { name: "core_standards", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "UnitStandardsCoreStandardsItem" } } },
    { name: "standards", number: 2, type: { kind: "repeated", item: { kind: "message", ref: "UnitStandardsStandardsItem" } } }
  ],
  "UnitAimsItemSubjectsItemItemsItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } },
    { name: "children", number: 3, type: { kind: "repeated", item: { kind: "string" } } }
  ],
  "UnitAimsItemSubjectsItem": [
    { name: "subject_id", number: 1, type: { kind: "int" } },
    { name: "subject_name", number: 2, type: { kind: "string" } },
    { name: "items", number: 3, type: { kind: "repeated", item: { kind: "message", ref: "UnitAimsItemSubjectsItemItemsItem" } } }
  ],
  "UnitAimsItem": [
    { name: "year", number: 1, type: { kind: "int" } },
    { name: "subjects", number: 2, type: { kind: "repeated", item: { kind: "message", ref: "UnitAimsItemSubjectsItem" } } }
  ],
  "UnitObjectivesItemSubjectsItemItemsItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } },
    { name: "children", number: 3, type: { kind: "repeated", item: { kind: "string" } } }
  ],
  "UnitObjectivesItemSubjectsItem": [
    { name: "subject_id", number: 1, type: { kind: "int" } },
    { name: "subject_name", number: 2, type: { kind: "string" } },
    { name: "items", number: 3, type: { kind: "repeated", item: { kind: "message", ref: "UnitObjectivesItemSubjectsItemItemsItem" } } }
  ],
  "UnitObjectivesItem": [
    { name: "year", number: 1, type: { kind: "int" } },
    { name: "subjects", number: 2, type: { kind: "repeated", item: { kind: "message", ref: "UnitObjectivesItemSubjectsItem" } } }
  ],
  "UnitSyllabusSyllabusesItemChildrenItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } }
  ],
  "UnitSyllabusSyllabusesItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } },
    { name: "children", number: 3, type: { kind: "repeated", item: { kind: "message", ref: "UnitSyllabusSyllabusesItemChildrenItem" } } }
  ],
  "UnitSyllabus": [
    { name: "syllabuses", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "UnitSyllabusSyllabusesItem" } } }
  ],
  "UnitScopeSequenceItemPhasesOrGradesItemStrandsItemKindsValueItemChildrenItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "expectation", number: 2, type: { kind: "string" } }
  ],
  "UnitScopeSequenceItemPhasesOrGradesItemStrandsItemKindsValueItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "expectation", number: 2, type: { kind: "string" } },
    { name: "children", number: 3, type: { kind: "repeated", item: { kind: "message", ref: "UnitScopeSequenceItemPhasesOrGradesItemStrandsItemKindsValueItemChildrenItem" } } }
  ],
  "UnitScopeSequenceItemPhasesOrGradesItemStrandsItem": [
    { name: "strand_id", number: 1, type: { kind: "int" } },
    { name: "strand_name", number: 2, type: { kind: "string" } },
    { name: "kinds", number: 3, type: { kind: "map", value: { kind: "repeated", item: { kind: "message", ref: "UnitScopeSequenceItemPhasesOrGradesItemStrandsItemKindsValueItem" } } } }
  ],
  "UnitScopeSequenceItemPhasesOrGradesItem": [
    { name: "phase_or_grade", number: 1, type: { kind: "string" } },
    { name: "strands", number: 2, type: { kind: "repeated", item: { kind: "message", ref: "UnitScopeSequenceItemPhasesOrGradesItemStrandsItem" } } }
  ],
  "UnitScopeSequenceItem": [
    { name: "subject_id", number: 1, type: { kind: "int" } },
    { name: "subject_name", number: 2, type: { kind: "string" } },
    { name: "phases_or_grades", number: 3, type: { kind: "repeated", item: { kind: "message", ref: "UnitScopeSequenceItemPhasesOrGradesItem" } } }
  ],
  "Unit": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "title", number: 2, type: { kind: "string" } },
    { name: "description", number: 3, type: { kind: "string" } },
    { name: "archived", number: 4, type: { kind: "bool" } },
    { name: "idu_unit", number: 5, type: { kind: "bool" } },
    { name: "month", number: 6, type: { kind: "int" } },
    { name: "week", number: 7, type: { kind: "int" } },
    { name: "duration_in_weeks", number: 8, type: { kind: "int" } },
    { name: "hours", number: 9, type: { kind: "int" } },
    { name: "sl", number: 10, type: { kind: "bool" } },
    { name: "hl", number: 11, type: { kind: "bool" } },
    { name: "language_level", number: 12, type: { kind: "string" } },
    { name: "language_b_phases", number: 13, type: { kind: "string" } },
    { name: "subject", number: 14, type: { kind: "message", ref: "UnitSubject" } },
    { name: "grade", number: 15, type: { kind: "string" } },
    { name: "grade_number", number: 16, type: { kind: "int" } },
    { name: "class_ids", number: 17, type: { kind: "repeated", item: { kind: "int" } } },
    { name: "start_date", number: 18, type: { kind: "string" } },
    { name: "end_date", number: 19, type: { kind: "string" } },
    { name: "central_idea", number: 20, type: { kind: "string" } },
    { name: "guiding_questions", number: 21, type: { kind: "message", ref: "UnitGuidingQuestions" } },
    { name: "formative_assessment", number: 22, type: { kind: "string" } },
    { name: "summative_assessment", number: 23, type: { kind: "string" } },
    { name: "peer_self_assessment", number: 24, type: { kind: "string" } },
    { name: "standardization_and_moderation", number: 25, type: { kind: "string" } },
    { name: "methods", number: 26, type: { kind: "string" } },
    { name: "prior_learning_experiences", number: 27, type: { kind: "string" } },
    { name: "student_expectations", number: 28, type: { kind: "string" } },
    { name: "pedagogical_approaches", number: 29, type: { kind: "message", ref: "UnitPedagogicalApproaches" } },
    { name: "teaching_strategies", number: 30, type: { kind: "string" } },
    { name: "feedback", number: 31, type: { kind: "string" } },
    { name: "dispositions", number: 32, type: { kind: "string" } },
    { name: "international_mindedness", number: 33, type: { kind: "string" } },
    { name: "academic_honesty", number: 34, type: { kind: "string" } },
    { name: "information_communication_technology", number: 35, type: { kind: "string" } },
    { name: "language_and_literacy_development", number: 36, type: { kind: "message", ref: "UnitLanguageAndLiteracyDevelopment" } },
    { name: "cross_curricular_links", number: 37, type: { kind: "message", ref: "UnitCrossCurricularLinks" } },
    { name: "co_curricular_links", number: 38, type: { kind: "message", ref: "UnitCoCurricularLinks" } },
    { name: "differentiation", number: 39, type: { kind: "message", ref: "UnitDifferentiation" } },
    { name: "content", number: 40, type: { kind: "string" } },
    { name: "skills", number: 41, type: { kind: "string" } },
    { name: "learning_process", number: 42, type: { kind: "string" } },
    { name: "metacognition", number: 43, type: { kind: "message", ref: "UnitMetacognition" } },
    { name: "unit_activities", number: 44, type: { kind: "repeated", item: { kind: "message", ref: "UnitUnitActivitiesItem" } } },
    { name: "support_materials", number: 45, type: { kind: "message", ref: "UnitSupportMaterials" } },
    { name: "concepts", number: 46, type: { kind: "string" } },
    { name: "misunderstandings", number: 47, type: { kind: "string" } },
    { name: "transfer_goals", number: 48, type: { kind: "string" } },
    { name: "lines_of_inquiry", number: 49, type: { kind: "repeated", item: { kind: "message", ref: "UnitLinesOfInquiryItem" } } },
    { name: "student_questions", number: 50, type: { kind: "repeated", item: { kind: "message", ref: "UnitStudentQuestionsItem" } } },
    { name: "teacher_questions", number: 51, type: { kind: "repeated", item: { kind: "message", ref: "UnitTeacherQuestionsItem" } } },
    { name: "learner_profiles", number: 52, type: { kind: "repeated", item: { kind: "message", ref: "UnitLearnerProfilesItem" } } },
    { name: "key_concepts", number: 53, type: { kind: "message", ref: "UnitKeyConcepts" } },
    { name: "related_concepts", number: 54, type: { kind: "message", ref: "UnitRelatedConcepts" } },
    { name: "specified_concepts", number: 55, type: { kind: "repeated", item: { kind: "message", ref: "UnitSpecifiedConceptsItem" } } },
    { name: "statement_of_inquiry", number: 56, type: { kind: "string" } },
    { name: "conceptual_understandings", number: 57, type: { kind: "string" } },
    { name: "contextual_lens", number: 58, type: { kind: "map", value: { kind: "string" } } },
    { name: "community_engagement", number: 59, type: { kind: "message", ref: "UnitCommunityEngagement" } },
    { name: "approaches_to_learning", number: 60, type: { kind: "message", ref: "UnitApproachesToLearning" } },
    { name: "criteria", number: 61, type: { kind: "message", ref: "UnitCriteria" } },
    { name: "global_contexts", number: 62, type: { kind: "message", ref: "UnitGlobalContexts" } },
    { name: "transdisciplinary_theme", number: 63, type: { kind: "message", ref: "UnitTransdisciplinaryTheme" } },
    { name: "standards", number: 64, type: { kind: "message", ref: "UnitStandards" } },
    { name: "academic_integrity", number: 65, type: { kind: "string" } },
    { name: "agency", number: 66, type: { kind: "string" } },
    { name: "action", number: 67, type: { kind: "string" } },
    { name: "student_self_assessment", number: 68, type: { kind: "string" } },
    { name: "success_criteria", number: 69, type: { kind: "string" } },
    { name: "ongoing_assessment", number: 70, type: { kind: "string" } },
    { name: "attitudes", number: 71, type: { kind: "repeated", item: { kind: "string" } } },
    { name: "aims", number: 72, type: { kind: "repeated", item: { kind: "message", ref: "UnitAimsItem" } } },
    { name: "objectives", number: 73, type: { kind: "repeated", item: { kind: "message", ref: "UnitObjectivesItem" } } },
    { name: "syllabus", number: 74, type: { kind: "message", ref: "UnitSyllabus" } },
    { name: "scope_sequence", number: 75, type: { kind: "repeated", item: { kind: "message", ref: "UnitScopeSequenceItem" } } },
    { name: "created_at", number: 76, type: { kind: "string" } },
    { name: "updated_at", number: 77, type: { kind: "string" } }
  ],
  "UnitClassAssignment": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "unit_id", number: 2, type: { kind: "int" } },
    { name: "class_id", number: 3, type: { kind: "int" } },
    { name: "status", number: 4, type: { kind: "string" } },
    { name: "created_at", number: 5, type: { kind: "string" } },
    { name: "updated_at", number: 6, type: { kind: "string" } },
    { name: "deleted_at", number: 7, type: { kind: "string" } }
  ],
  "Submission": [
    { name: "id", number: 1, type: { kind: "string" } },
    { name: "task_id", number: 2, type: { kind: "int" } },
    { name: "student_id", number: 3, type: { kind: "int" } },
    { name: "mechanism", number: 4, type: { kind: "string" } },
    { name: "submitted_at", number: 5, type: { kind: "string" } },
    { name: "updated_at", number: 6, type: { kind: "string" } },
    { name: "locked", number: 7, type: { kind: "bool" } },
    { name: "status", number: 8, type: { kind: "string" } },
    { name: "files", number: 9, type: { kind: "repeated", item: { kind: "message", ref: "SubmissionFile" } } }
  ],
  "SubmissionFile": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "filename", number: 2, type: { kind: "string" } },
    { name: "file_size", number: 3, type: { kind: "int" } },
    { name: "content_type", number: 4, type: { kind: "string" } },
    { name: "uploaded_at", number: 5, type: { kind: "string" } },
    { name: "turnitin_score", number: 6, type: { kind: "int" } },
    { name: "download_path", number: 7, type: { kind: "string" } }
  ],
  "AssessmentTypesResponse": [
    { name: "assessment_type", number: 1, type: { kind: "message", ref: "AssessmentTypeAttributes" } }
  ],
  "AssessmentTypeAttributes": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "kind", number: 2, type: { kind: "string" } },
    { name: "name", number: 3, type: { kind: "string" } },
    { name: "color_code", number: 4, type: { kind: "string" } },
    { name: "available_assessments", number: 5, type: { kind: "repeated", item: { kind: "string" } } },
    { name: "required_assessments", number: 6, type: { kind: "repeated", item: { kind: "string" } } }
  ],
  "CriteriaResponse": [
    { name: "criteria", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "CriteriaAttributes" } } }
  ],
  "CriteriaAttributesDescriptorsItemVariant1": [
    { name: "value", number: 1, type: { kind: "string" } },
    { name: "descriptor", number: 2, type: { kind: "string" } }
  ],
  "CriteriaAttributesDescriptorsItemVariant2": [
    { name: "phase", number: 1, type: { kind: "int" } },
    { name: "descriptor", number: 2, type: { kind: "string" } },
    { name: "min_value", number: 3, type: { kind: "int" } },
    { name: "max_value", number: 4, type: { kind: "int" } },
    { name: "formative_descriptor", number: 5, type: { kind: "string" } }
  ],
  "CriteriaAttributes": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "title", number: 2, type: { kind: "string" } },
    { name: "descriptors", number: 3, type: { kind: "repeated", item: { kind: "string" } } }
  ],
  "TaskCategory": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } },
    { name: "background_color", number: 3, type: { kind: "string" } },
    { name: "color", number: 4, type: { kind: "string" } },
    { name: "weight", number: 5, type: { kind: "int" } }
  ],
  "YearGroupPblTodosComponentStatusProgress": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "default", number: 2, type: { kind: "bool" } },
    { name: "title", number: 3, type: { kind: "string" } }
  ],
  "YearGroupPblTodosComponentStatus": [
    { name: "completed", number: 1, type: { kind: "bool" } },
    { name: "approved", number: 2, type: { kind: "bool" } },
    { name: "progress", number: 3, type: { kind: "message", ref: "YearGroupPblTodosComponentStatusProgress" } }
  ],
  "YearGroupPblTodosComponentSupervisor": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "identifier", number: 2, type: { kind: "string" } }
  ],
  "YearGroupPblTodosComponentComponentItemsVariant1": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "type", number: 2, type: { kind: "string" } },
    { name: "title", number: 3, type: { kind: "string" } },
    { name: "completed", number: 4, type: { kind: "bool" } },
    { name: "responsible_group", number: 5, type: { kind: "string" } }
  ],
  "YearGroupPblTodosComponentComponentItemsVariant2TodosItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "type", number: 2, type: { kind: "string" } },
    { name: "title", number: 3, type: { kind: "string" } },
    { name: "completed", number: 4, type: { kind: "bool" } },
    { name: "responsible_group", number: 5, type: { kind: "string" } }
  ],
  "YearGroupPblTodosComponentComponentItemsVariant2": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "type", number: 2, type: { kind: "string" } },
    { name: "title", number: 3, type: { kind: "string" } },
    { name: "due_date", number: 4, type: { kind: "string" } },
    { name: "status", number: 5, type: { kind: "string" } },
    { name: "todos", number: 6, type: { kind: "repeated", item: { kind: "message", ref: "YearGroupPblTodosComponentComponentItemsVariant2TodosItem" } } }
  ],
  "YearGroupPblTodosComponentComponent": [
    { name: "slug", number: 1, type: { kind: "string" } },
    { name: "items", number: 2, type: { kind: "string" } }
  ],
  "YearGroupPblTodosComponent": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "identifier", number: 2, type: { kind: "string" } },
    { name: "status", number: 3, type: { kind: "message", ref: "YearGroupPblTodosComponentStatus" } },
    { name: "supervisor", number: 4, type: { kind: "message", ref: "YearGroupPblTodosComponentSupervisor" } },
    { name: "component", number: 5, type: { kind: "message", ref: "YearGroupPblTodosComponentComponent" } }
  ],
  "YearGroupPblPresentationComponentStatusProgress": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "default", number: 2, type: { kind: "bool" } },
    { name: "title", number: 3, type: { kind: "string" } }
  ],
  "YearGroupPblPresentationComponentStatus": [
    { name: "completed", number: 1, type: { kind: "bool" } },
    { name: "approved", number: 2, type: { kind: "bool" } },
    { name: "progress", number: 3, type: { kind: "message", ref: "YearGroupPblPresentationComponentStatusProgress" } }
  ],
  "YearGroupPblPresentationComponentSupervisor": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "identifier", number: 2, type: { kind: "string" } }
  ],
  "YearGroupPblPresentationComponentComponentDocumentsItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "caption", number: 2, type: { kind: "string" } },
    { name: "url", number: 3, type: { kind: "string" } },
    { name: "created_at", number: 4, type: { kind: "string" } }
  ],
  "YearGroupPblPresentationComponentComponentItemsItem": [
    { name: "title", number: 1, type: { kind: "string" } },
    { name: "value", number: 2, type: { kind: "string" } }
  ],
  "YearGroupPblPresentationComponentComponent": [
    { name: "slug", number: 1, type: { kind: "string" } },
    { name: "title", number: 2, type: { kind: "string" } },
    { name: "duration", number: 3, type: { kind: "int" } },
    { name: "documents", number: 4, type: { kind: "repeated", item: { kind: "message", ref: "YearGroupPblPresentationComponentComponentDocumentsItem" } } },
    { name: "items", number: 5, type: { kind: "repeated", item: { kind: "message", ref: "YearGroupPblPresentationComponentComponentItemsItem" } } }
  ],
  "YearGroupPblPresentationComponent": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "identifier", number: 2, type: { kind: "string" } },
    { name: "status", number: 3, type: { kind: "message", ref: "YearGroupPblPresentationComponentStatus" } },
    { name: "supervisor", number: 4, type: { kind: "message", ref: "YearGroupPblPresentationComponentSupervisor" } },
    { name: "component", number: 5, type: { kind: "message", ref: "YearGroupPblPresentationComponentComponent" } }
  ],
  "YearGroupPblReflectionsComponentStatusProgress": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "default", number: 2, type: { kind: "bool" } },
    { name: "title", number: 3, type: { kind: "string" } }
  ],
  "YearGroupPblReflectionsComponentStatus": [
    { name: "completed", number: 1, type: { kind: "bool" } },
    { name: "approved", number: 2, type: { kind: "bool" } },
    { name: "progress", number: 3, type: { kind: "message", ref: "YearGroupPblReflectionsComponentStatusProgress" } }
  ],
  "YearGroupPblReflectionsComponentSupervisor": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "identifier", number: 2, type: { kind: "string" } }
  ],
  "YearGroupPblReflectionsComponentComponentItemsItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "title", number: 2, type: { kind: "string" } },
    { name: "submitted", number: 3, type: { kind: "bool" } }
  ],
  "YearGroupPblReflectionsComponentComponent": [
    { name: "slug", number: 1, type: { kind: "string" } },
    { name: "items", number: 2, type: { kind: "repeated", item: { kind: "message", ref: "YearGroupPblReflectionsComponentComponentItemsItem" } } }
  ],
  "YearGroupPblReflectionsComponent": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "identifier", number: 2, type: { kind: "string" } },
    { name: "status", number: 3, type: { kind: "message", ref: "YearGroupPblReflectionsComponentStatus" } },
    { name: "supervisor", number: 4, type: { kind: "message", ref: "YearGroupPblReflectionsComponentSupervisor" } },
    { name: "component", number: 5, type: { kind: "message", ref: "YearGroupPblReflectionsComponentComponent" } }
  ],
  "YearGroupPblStudentNotesReviewsComponentStatusProgress": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "default", number: 2, type: { kind: "bool" } },
    { name: "title", number: 3, type: { kind: "string" } }
  ],
  "YearGroupPblStudentNotesReviewsComponentStatus": [
    { name: "completed", number: 1, type: { kind: "bool" } },
    { name: "approved", number: 2, type: { kind: "bool" } },
    { name: "progress", number: 3, type: { kind: "message", ref: "YearGroupPblStudentNotesReviewsComponentStatusProgress" } }
  ],
  "YearGroupPblStudentNotesReviewsComponentSupervisor": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "identifier", number: 2, type: { kind: "string" } }
  ],
  "YearGroupPblStudentNotesReviewsComponentComponentItemsItemAuthor": [
    { name: "id", number: 1, type: { kind: "int" } }
  ],
  "YearGroupPblStudentNotesReviewsComponentComponentItemsItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "author", number: 2, type: { kind: "message", ref: "YearGroupPblStudentNotesReviewsComponentComponentItemsItemAuthor" } },
    { name: "interview", number: 3, type: { kind: "bool" } },
    { name: "title", number: 4, type: { kind: "string" } },
    { name: "body", number: 5, type: { kind: "string" } },
    { name: "posted_at", number: 6, type: { kind: "string" } }
  ],
  "YearGroupPblStudentNotesReviewsComponentComponent": [
    { name: "slug", number: 1, type: { kind: "string" } },
    { name: "items", number: 2, type: { kind: "repeated", item: { kind: "message", ref: "YearGroupPblStudentNotesReviewsComponentComponentItemsItem" } } }
  ],
  "YearGroupPblStudentNotesReviewsComponent": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "identifier", number: 2, type: { kind: "string" } },
    { name: "status", number: 3, type: { kind: "message", ref: "YearGroupPblStudentNotesReviewsComponentStatus" } },
    { name: "supervisor", number: 4, type: { kind: "message", ref: "YearGroupPblStudentNotesReviewsComponentSupervisor" } },
    { name: "component", number: 5, type: { kind: "message", ref: "YearGroupPblStudentNotesReviewsComponentComponent" } }
  ],
  "YearGroupPblStudentDocumentsComponentStatusProgress": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "default", number: 2, type: { kind: "bool" } },
    { name: "title", number: 3, type: { kind: "string" } }
  ],
  "YearGroupPblStudentDocumentsComponentStatus": [
    { name: "completed", number: 1, type: { kind: "bool" } },
    { name: "approved", number: 2, type: { kind: "bool" } },
    { name: "progress", number: 3, type: { kind: "message", ref: "YearGroupPblStudentDocumentsComponentStatusProgress" } }
  ],
  "YearGroupPblStudentDocumentsComponentSupervisor": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "identifier", number: 2, type: { kind: "string" } }
  ],
  "YearGroupPblStudentDocumentsComponentComponentItemsItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "filename", number: 2, type: { kind: "string" } },
    { name: "url", number: 3, type: { kind: "string" } },
    { name: "created_at", number: 4, type: { kind: "string" } }
  ],
  "YearGroupPblStudentDocumentsComponentComponent": [
    { name: "slug", number: 1, type: { kind: "string" } },
    { name: "items", number: 2, type: { kind: "repeated", item: { kind: "message", ref: "YearGroupPblStudentDocumentsComponentComponentItemsItem" } } }
  ],
  "YearGroupPblStudentDocumentsComponent": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "identifier", number: 2, type: { kind: "string" } },
    { name: "status", number: 3, type: { kind: "message", ref: "YearGroupPblStudentDocumentsComponentStatus" } },
    { name: "supervisor", number: 4, type: { kind: "message", ref: "YearGroupPblStudentDocumentsComponentSupervisor" } },
    { name: "component", number: 5, type: { kind: "message", ref: "YearGroupPblStudentDocumentsComponentComponent" } }
  ],
  "YearGroupPblStudentProposalComponentStatusProgress": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "default", number: 2, type: { kind: "bool" } },
    { name: "title", number: 3, type: { kind: "string" } }
  ],
  "YearGroupPblStudentProposalComponentStatus": [
    { name: "completed", number: 1, type: { kind: "bool" } },
    { name: "approved", number: 2, type: { kind: "bool" } },
    { name: "progress", number: 3, type: { kind: "message", ref: "YearGroupPblStudentProposalComponentStatusProgress" } }
  ],
  "YearGroupPblStudentProposalComponentSupervisor": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "identifier", number: 2, type: { kind: "string" } }
  ],
  "YearGroupPblStudentProposalComponentComponentItemsItemVariant1": [
    { name: "type", number: 1, type: { kind: "string" } },
    { name: "name", number: 2, type: { kind: "string" } }
  ],
  "YearGroupPblStudentProposalComponentComponentItemsItemVariant2": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "type", number: 2, type: { kind: "string" } },
    { name: "title", number: 3, type: { kind: "string" } },
    { name: "kind", number: 4, type: { kind: "string" } },
    { name: "value", number: 5, type: { kind: "string" } }
  ],
  "YearGroupPblStudentProposalComponentComponent": [
    { name: "slug", number: 1, type: { kind: "string" } },
    { name: "items", number: 2, type: { kind: "repeated", item: { kind: "string" } } }
  ],
  "YearGroupPblStudentProposalComponent": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "identifier", number: 2, type: { kind: "string" } },
    { name: "status", number: 3, type: { kind: "message", ref: "YearGroupPblStudentProposalComponentStatus" } },
    { name: "supervisor", number: 4, type: { kind: "message", ref: "YearGroupPblStudentProposalComponentSupervisor" } },
    { name: "component", number: 5, type: { kind: "message", ref: "YearGroupPblStudentProposalComponentComponent" } }
  ],
  "YearGroupPblStudentJournalComponentStatusProgress": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "default", number: 2, type: { kind: "bool" } },
    { name: "title", number: 3, type: { kind: "string" } }
  ],
  "YearGroupPblStudentJournalComponentStatus": [
    { name: "completed", number: 1, type: { kind: "bool" } },
    { name: "approved", number: 2, type: { kind: "bool" } },
    { name: "progress", number: 3, type: { kind: "message", ref: "YearGroupPblStudentJournalComponentStatusProgress" } }
  ],
  "YearGroupPblStudentJournalComponentSupervisor": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "identifier", number: 2, type: { kind: "string" } }
  ],
  "YearGroupPblStudentJournalComponentComponentItemsItemFilesItemVariant1": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "filename", number: 2, type: { kind: "string" } },
    { name: "url", number: 3, type: { kind: "string" } }
  ],
  "YearGroupPblStudentJournalComponentComponentItemsItemPhotosItemVariant1": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "caption", number: 2, type: { kind: "string" } },
    { name: "url", number: 3, type: { kind: "string" } }
  ],
  "YearGroupPblStudentJournalComponentComponentItemsItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "kind", number: 2, type: { kind: "string" } },
    { name: "title", number: 3, type: { kind: "string" } },
    { name: "description", number: 4, type: { kind: "string" } },
    { name: "author_id", number: 5, type: { kind: "int" } },
    { name: "created_at", number: 6, type: { kind: "string" } },
    { name: "files", number: 7, type: { kind: "repeated", item: { kind: "string" } } },
    { name: "body", number: 8, type: { kind: "string" } },
    { name: "photos", number: 9, type: { kind: "repeated", item: { kind: "string" } } },
    { name: "url", number: 10, type: { kind: "string" } }
  ],
  "YearGroupPblStudentJournalComponentComponent": [
    { name: "slug", number: 1, type: { kind: "string" } },
    { name: "items", number: 2, type: { kind: "repeated", item: { kind: "message", ref: "YearGroupPblStudentJournalComponentComponentItemsItem" } } }
  ],
  "YearGroupPblStudentJournalComponent": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "identifier", number: 2, type: { kind: "string" } },
    { name: "status", number: 3, type: { kind: "message", ref: "YearGroupPblStudentJournalComponentStatus" } },
    { name: "supervisor", number: 4, type: { kind: "message", ref: "YearGroupPblStudentJournalComponentSupervisor" } },
    { name: "component", number: 5, type: { kind: "message", ref: "YearGroupPblStudentJournalComponentComponent" } }
  ],
  "PaginationMeta": [
    { name: "current_page", number: 1, type: { kind: "int" } },
    { name: "next_page", number: 2, type: { kind: "int" } },
    { name: "prev_page", number: 3, type: { kind: "int" } },
    { name: "total_pages", number: 4, type: { kind: "int" } },
    { name: "total_count", number: 5, type: { kind: "int" } },
    { name: "per_page", number: 6, type: { kind: "int" } }
  ],
  "CasSettingsCas": [
    { name: "components", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "CasComponent" } } }
  ],
  "CasSettings": [
    { name: "cas", number: 1, type: { kind: "message", ref: "CasSettingsCas" } }
  ],
  "CasComponent": [
    { name: "slug", number: 1, type: { kind: "string" } },
    { name: "label", number: 2, type: { kind: "string" } },
    { name: "track_hours", number: 3, type: { kind: "bool" } },
    { name: "show_hours_chart", number: 4, type: { kind: "bool" } },
    { name: "cas_total_hours", number: 5, type: { kind: "int" } },
    { name: "show_aims_and_goals", number: 6, type: { kind: "bool" } },
    { name: "optional_question", number: 7, type: { kind: "string" } },
    { name: "activity_description_title", number: 8, type: { kind: "string" } }
  ],
  "CasExperiencesStudentsResponse": [
    { name: "students", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "CasStudent" } } },
    { name: "meta", number: 2, type: { kind: "message", ref: "PaginationMeta" } }
  ],
  "CasStudent": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "identifier", number: 2, type: { kind: "string" } },
    { name: "aims_and_goals", number: 3, type: { kind: "string" } },
    { name: "overall_progress", number: 4, type: { kind: "string" } },
    { name: "component", number: 5, type: { kind: "message", ref: "CasStudentComponent" } }
  ],
  "CasStudentComponent": [
    { name: "items", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "CasExperience" } } }
  ],
  "CasExperience": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } },
    { name: "status", number: 3, type: { kind: "message", ref: "CasExperienceStatus" } },
    { name: "status_annotations", number: 4, type: { kind: "message", ref: "CasExperienceStatusAnnotations" } },
    { name: "supervisor", number: 5, type: { kind: "message", ref: "CasExperienceSupervisor" } },
    { name: "cas_project", number: 6, type: { kind: "bool" } },
    { name: "creativity", number: 7, type: { kind: "bool" } },
    { name: "creativity_hours", number: 8, type: { kind: "double" } },
    { name: "activity", number: 9, type: { kind: "bool" } },
    { name: "activity_hours", number: 10, type: { kind: "double" } },
    { name: "service", number: 11, type: { kind: "bool" } },
    { name: "service_hours", number: 12, type: { kind: "double" } },
    { name: "service_action_type", number: 13, type: { kind: "string" } },
    { name: "ongoing_approach", number: 14, type: { kind: "bool" } },
    { name: "school_based_approach", number: 15, type: { kind: "bool" } },
    { name: "community_based_approach", number: 16, type: { kind: "bool" } },
    { name: "individual_approach", number: 17, type: { kind: "bool" } },
    { name: "start_date", number: 18, type: { kind: "string" } },
    { name: "end_date", number: 19, type: { kind: "string" } },
    { name: "slug", number: 20, type: { kind: "string" } }
  ],
  "CasExperienceStatusProgress": [
    { name: "title", number: 1, type: { kind: "string" } }
  ],
  "CasExperienceStatus": [
    { name: "post_approved", number: 1, type: { kind: "bool" } },
    { name: "pre_approved", number: 2, type: { kind: "bool" } },
    { name: "progress", number: 3, type: { kind: "message", ref: "CasExperienceStatusProgress" } }
  ],
  "CasExperienceStatusAnnotations": [
    { name: "incomplete", number: 1, type: { kind: "bool" } },
    { name: "rejected", number: 2, type: { kind: "bool" } },
    { name: "reviewed", number: 3, type: { kind: "bool" } }
  ],
  "CasExperienceSupervisor": [
    { name: "name", number: 1, type: { kind: "string" } },
    { name: "email", number: 2, type: { kind: "string" } },
    { name: "title", number: 3, type: { kind: "string" } },
    { name: "contact_number", number: 4, type: { kind: "string" } }
  ],
  "ServiceLearningSettingsServiceLearning": [
    { name: "title", number: 1, type: { kind: "string" } },
    { name: "description", number: 2, type: { kind: "string" } },
    { name: "abbreviation", number: 3, type: { kind: "string" } },
    { name: "components", number: 4, type: { kind: "repeated", item: { kind: "message", ref: "ServiceLearningComponent" } } }
  ],
  "ServiceLearningSettings": [
    { name: "service_learning", number: 1, type: { kind: "message", ref: "ServiceLearningSettingsServiceLearning" } }
  ],
  "ServiceLearningComponent": [
    { name: "slug", number: 1, type: { kind: "string" } },
    { name: "label", number: 2, type: { kind: "string" } },
    { name: "types", number: 3, type: { kind: "repeated", item: { kind: "message", ref: "ServiceLearningCategoryType" } } },
    { name: "outcomes", number: 4, type: { kind: "repeated", item: { kind: "message", ref: "ServiceLearningConfiguredOutcome" } } }
  ],
  "ServiceLearningCategoryType": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "label", number: 2, type: { kind: "string" } },
    { name: "initial", number: 3, type: { kind: "string" } },
    { name: "color_code", number: 4, type: { kind: "string" } }
  ],
  "ServiceLearningConfiguredOutcome": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "title", number: 2, type: { kind: "string" } },
    { name: "description", number: 3, type: { kind: "string" } }
  ],
  "ServiceLearningCategoriesStudentsResponse": [
    { name: "students", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "ServiceLearningCategoryStudent" } } },
    { name: "meta", number: 2, type: { kind: "message", ref: "PaginationMeta" } }
  ],
  "ServiceLearningCategoryStudent": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "identifier", number: 2, type: { kind: "string" } },
    { name: "component", number: 3, type: { kind: "message", ref: "ServiceLearningCategoryStudentComponent" } }
  ],
  "ServiceLearningCategoryStudentComponent": [
    { name: "items", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "ServiceLearningCategory" } } }
  ],
  "ServiceLearningCategory": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } },
    { name: "status", number: 3, type: { kind: "message", ref: "ServiceLearningCategoryStatus" } },
    { name: "status_annotations", number: 4, type: { kind: "message", ref: "ServiceLearningCategoryStatusAnnotations" } },
    { name: "supervisor", number: 5, type: { kind: "message", ref: "ServiceLearningCategorySupervisor" } },
    { name: "activity_type", number: 6, type: { kind: "string" } },
    { name: "start_date", number: 7, type: { kind: "string" } },
    { name: "end_date", number: 8, type: { kind: "string" } },
    { name: "learning_outcomes", number: 9, type: { kind: "repeated", item: { kind: "message", ref: "ServiceLearningCategoryLearningOutcome" } } },
    { name: "slug", number: 10, type: { kind: "string" } }
  ],
  "ServiceLearningCategoryStatusProgress": [
    { name: "title", number: 1, type: { kind: "string" } }
  ],
  "ServiceLearningCategoryStatus": [
    { name: "post_approved", number: 1, type: { kind: "bool" } },
    { name: "pre_approved", number: 2, type: { kind: "bool" } },
    { name: "progress", number: 3, type: { kind: "message", ref: "ServiceLearningCategoryStatusProgress" } }
  ],
  "ServiceLearningCategoryStatusAnnotations": [
    { name: "incomplete", number: 1, type: { kind: "bool" } },
    { name: "rejected", number: 2, type: { kind: "bool" } },
    { name: "reviewed", number: 3, type: { kind: "bool" } }
  ],
  "ServiceLearningCategorySupervisor": [
    { name: "name", number: 1, type: { kind: "string" } },
    { name: "email", number: 2, type: { kind: "string" } },
    { name: "title", number: 3, type: { kind: "string" } },
    { name: "contact_number", number: 4, type: { kind: "string" } }
  ],
  "ServiceLearningCategoryLearningOutcome": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } },
    { name: "description", number: 3, type: { kind: "string" } }
  ],
  "ServiceLearningOutcomesStudentsResponse": [
    { name: "students", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "ServiceLearningOutcomeStudent" } } },
    { name: "meta", number: 2, type: { kind: "message", ref: "PaginationMeta" } }
  ],
  "ServiceLearningOutcomeStudent": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "identifier", number: 2, type: { kind: "string" } },
    { name: "status", number: 3, type: { kind: "string" } },
    { name: "overall_progress", number: 4, type: { kind: "string" } },
    { name: "component", number: 5, type: { kind: "message", ref: "ServiceLearningOutcomeStudentComponent" } }
  ],
  "ServiceLearningOutcomeStudentComponent": [
    { name: "items", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "ServiceLearningOutcome" } } }
  ],
  "ServiceLearningOutcome": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "title", number: 2, type: { kind: "string" } },
    { name: "description", number: 3, type: { kind: "string" } },
    { name: "completed", number: 4, type: { kind: "bool" } },
    { name: "experiences_with_reflection", number: 5, type: { kind: "int" } },
    { name: "total_experiences", number: 6, type: { kind: "int" } },
    { name: "slug", number: 7, type: { kind: "string" } }
  ],
  "CoreTaskAttributesAssessmentsCriteria": [
    { name: "enabled", number: 1, type: { kind: "bool" } },
    { name: "criterion_ids", number: 2, type: { kind: "repeated", item: { kind: "int" } } }
  ],
  "CoreTaskAttributesAssessmentsPoints": [
    { name: "enabled", number: 1, type: { kind: "bool" } },
    { name: "max_points", number: 2, type: { kind: "int" } }
  ],
  "CoreTaskAttributesAssessmentsBinary": [
    { name: "enabled", number: 1, type: { kind: "bool" } }
  ],
  "CoreTaskAttributesAssessmentsComment": [
    { name: "enabled", number: 1, type: { kind: "bool" } }
  ],
  "CoreTaskAttributesAssessments": [
    { name: "criteria", number: 1, type: { kind: "message", ref: "CoreTaskAttributesAssessmentsCriteria" } },
    { name: "points", number: 2, type: { kind: "message", ref: "CoreTaskAttributesAssessmentsPoints" } },
    { name: "binary", number: 3, type: { kind: "message", ref: "CoreTaskAttributesAssessmentsBinary" } },
    { name: "comment", number: 4, type: { kind: "message", ref: "CoreTaskAttributesAssessmentsComment" } }
  ],
  "CoreTaskAttributes": [
    { name: "author_id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } },
    { name: "due_date", number: 3, type: { kind: "string" } },
    { name: "assessment_type_id", number: 4, type: { kind: "int" } },
    { name: "task_category_id", number: 5, type: { kind: "int" } },
    { name: "notify_group", number: 6, type: { kind: "bool" } },
    { name: "notify_parents", number: 7, type: { kind: "bool" } },
    { name: "unit_id", number: 8, type: { kind: "int" } },
    { name: "lesson_experience_id", number: 9, type: { kind: "int" } },
    { name: "hl", number: 10, type: { kind: "bool" } },
    { name: "sl", number: 11, type: { kind: "bool" } },
    { name: "notes", number: 12, type: { kind: "string" } },
    { name: "enable_dropbox", number: 13, type: { kind: "bool" } },
    { name: "enable_turnitin", number: 14, type: { kind: "bool" } },
    { name: "dropbox_opening_days", number: 15, type: { kind: "int" } },
    { name: "assigned_student_ids", number: 16, type: { kind: "repeated", item: { kind: "int" } } },
    { name: "draft", number: 17, type: { kind: "bool" } },
    { name: "hide_assessment_results", number: 18, type: { kind: "bool" } },
    { name: "phase", number: 19, type: { kind: "int" } },
    { name: "assessments", number: 20, type: { kind: "message", ref: "CoreTaskAttributesAssessments" } }
  ],
  "CoreTaskPatchAttributesAssessmentsCriteria": [
    { name: "enabled", number: 1, type: { kind: "bool" } },
    { name: "criterion_ids", number: 2, type: { kind: "repeated", item: { kind: "int" } } }
  ],
  "CoreTaskPatchAttributesAssessmentsPoints": [
    { name: "enabled", number: 1, type: { kind: "bool" } },
    { name: "max_points", number: 2, type: { kind: "int" } }
  ],
  "CoreTaskPatchAttributesAssessmentsBinary": [
    { name: "enabled", number: 1, type: { kind: "bool" } }
  ],
  "CoreTaskPatchAttributesAssessmentsComment": [
    { name: "enabled", number: 1, type: { kind: "bool" } }
  ],
  "CoreTaskPatchAttributesAssessments": [
    { name: "criteria", number: 1, type: { kind: "message", ref: "CoreTaskPatchAttributesAssessmentsCriteria" } },
    { name: "points", number: 2, type: { kind: "message", ref: "CoreTaskPatchAttributesAssessmentsPoints" } },
    { name: "binary", number: 3, type: { kind: "message", ref: "CoreTaskPatchAttributesAssessmentsBinary" } },
    { name: "comment", number: 4, type: { kind: "message", ref: "CoreTaskPatchAttributesAssessmentsComment" } }
  ],
  "CoreTaskPatchAttributes": [
    { name: "author_id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } },
    { name: "due_date", number: 3, type: { kind: "string" } },
    { name: "assessment_type_id", number: 4, type: { kind: "int" } },
    { name: "task_category_id", number: 5, type: { kind: "int" } },
    { name: "notify_group", number: 6, type: { kind: "bool" } },
    { name: "notify_parents", number: 7, type: { kind: "bool" } },
    { name: "unit_id", number: 8, type: { kind: "int" } },
    { name: "lesson_experience_id", number: 9, type: { kind: "int" } },
    { name: "hl", number: 10, type: { kind: "bool" } },
    { name: "sl", number: 11, type: { kind: "bool" } },
    { name: "notes", number: 12, type: { kind: "string" } },
    { name: "enable_dropbox", number: 13, type: { kind: "bool" } },
    { name: "enable_turnitin", number: 14, type: { kind: "bool" } },
    { name: "dropbox_opening_days", number: 15, type: { kind: "int" } },
    { name: "assigned_student_ids", number: 16, type: { kind: "repeated", item: { kind: "int" } } },
    { name: "draft", number: 17, type: { kind: "bool" } },
    { name: "hide_assessment_results", number: 18, type: { kind: "bool" } },
    { name: "phase", number: 19, type: { kind: "int" } },
    { name: "assessments", number: 20, type: { kind: "message", ref: "CoreTaskPatchAttributesAssessments" } }
  ],
  "AttendanceListCategoriesResponse": [
    { name: "categories", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "AttendanceCategoriesResponse" } } }
  ],
  "BehaviorNotesListBehaviorNotesResponse": [
    { name: "behavior_notes", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "BehaviorNote" } } },
    { name: "meta", number: 2, type: { kind: "message", ref: "Meta" } }
  ],
  "CourseworkListClassTaskCategoriesResponse": [
    { name: "task_categories", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "TaskCategory" } } }
  ],
  "CourseworkListTaskSubmissionsResponse": [
    { name: "submissions", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "Submission" } } },
    { name: "meta", number: 2, type: { kind: "message", ref: "Meta" } }
  ],
  "CourseworkGetTaskSubmissionResponse": [
    { name: "submission", number: 1, type: { kind: "message", ref: "Submission" } }
  ],
  "CourseworkUpdateTaskforClassRequest": [
    { name: "core_task", number: 1, type: { kind: "message", ref: "CoreTaskAttributes" } }
  ],
  "CourseworkPartialUpdateTaskforClassRequest": [
    { name: "core_task", number: 1, type: { kind: "message", ref: "CoreTaskPatchAttributes" } }
  ],
  "CourseworkPartialUpdateTaskforClassResponse": [
    { name: "task", number: 1, type: { kind: "string" } }
  ],
  "ClassesListClassesResponse": [
    { name: "classes", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "Class" } } },
    { name: "meta", number: 2, type: { kind: "message", ref: "Meta" } }
  ],
  "ClassesGetClassByIdResponse": [
    { name: "class", number: 1, type: { kind: "message", ref: "Class" } }
  ],
  "ClassesAddStudentsToClassRequest": [
    { name: "student_ids", number: 1, type: { kind: "repeated", item: { kind: "int" } } }
  ],
  "ClassesRemoveStudentsFromClassRequest": [
    { name: "student_ids", number: 1, type: { kind: "repeated", item: { kind: "int" } } }
  ],
  "AttendanceGetDateExcusalsResponse": [
    { name: "excusals", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "AttendanceExcusalsResponse" } } },
    { name: "meta", number: 2, type: { kind: "message", ref: "Meta" } }
  ],
  "MembershipsListMembershipsResponse": [
    { name: "memberships", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "Membership" } } },
    { name: "meta", number: 2, type: { kind: "message", ref: "Meta" } }
  ],
  "RelationshipsListOfParentChildrenRelationshipsResponse": [
    { name: "children", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "ChildRelation" } } },
    { name: "meta", number: 2, type: { kind: "message", ref: "Meta" } }
  ],
  "RelationshipsCreateParentChildRelationshipRequest": [
    { name: "child", number: 1, type: { kind: "message", ref: "ChildRelation" } }
  ],
  "RelationshipsCreateParentChildRelationshipResponse": [
    { name: "child", number: 1, type: { kind: "message", ref: "ChildRelation" } }
  ],
  "RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "relationship", number: 2, type: { kind: "string" } }
  ],
  "RelationshipsBulkUpdateParentChildrenRelationshipsRequest": [
    { name: "children", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItem" } } }
  ],
  "RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "relationship", number: 2, type: { kind: "string" } }
  ],
  "RelationshipsBulkUpdateParentChildrenRelationshipsResponse": [
    { name: "children", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "RelationshipsBulkUpdateParentChildrenRelationshipsResponseChildrenItem" } } }
  ],
  "RelationshipsGetParentChildRelationshipResponse": [
    { name: "child", number: 1, type: { kind: "message", ref: "ChildRelation" } }
  ],
  "RelationshipsUpdateParentChildRelationshipRequestChild": [
    { name: "relationship", number: 1, type: { kind: "string" } }
  ],
  "RelationshipsUpdateParentChildRelationshipRequest": [
    { name: "child", number: 1, type: { kind: "message", ref: "RelationshipsUpdateParentChildRelationshipRequestChild" } }
  ],
  "RelationshipsUpdateParentChildRelationshipResponse": [
    { name: "child", number: 1, type: { kind: "message", ref: "ChildRelation" } }
  ],
  "ParentsListParentsResponse": [
    { name: "parents", number: 1, type: { kind: "repeated", item: { kind: "string" } } },
    { name: "meta", number: 2, type: { kind: "message", ref: "Meta" } }
  ],
  "ParentsCreateParentRequestParent": [

  ],
  "ParentsCreateParentRequestOptions": [
    { name: "send_welcome_email", number: 1, type: { kind: "bool" } }
  ],
  "ParentsCreateParentRequest": [
    { name: "parent", number: 1, type: { kind: "message", ref: "ParentsCreateParentRequestParent" } },
    { name: "options", number: 2, type: { kind: "message", ref: "ParentsCreateParentRequestOptions" } }
  ],
  "ParentsCreateParentResponseOptions": [
    { name: "welcome_email", number: 1, type: { kind: "string" } }
  ],
  "ParentsCreateParentResponse": [
    { name: "parent", number: 1, type: { kind: "string" } },
    { name: "options", number: 2, type: { kind: "message", ref: "ParentsCreateParentResponseOptions" } }
  ],
  "ParentsGetParentByIdResponse": [
    { name: "parent", number: 1, type: { kind: "string" } }
  ],
  "ParentsUpdateParentRequestParent": [

  ],
  "ParentsUpdateParentRequest": [
    { name: "parent", number: 1, type: { kind: "message", ref: "ParentsUpdateParentRequestParent" } }
  ],
  "ParentsUpdateParentResponse": [
    { name: "parent", number: 1, type: { kind: "string" } }
  ],
  "AcademicsGetAllTermReportsResponseTermReportsItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "title", number: 2, type: { kind: "string" } },
    { name: "type", number: 3, type: { kind: "string" } },
    { name: "program", number: 4, type: { kind: "string" } },
    { name: "academic_term_id", number: 5, type: { kind: "int" } },
    { name: "academic_term_name", number: 6, type: { kind: "string" } },
    { name: "next_gen", number: 7, type: { kind: "bool" } },
    { name: "pdf_url", number: 8, type: { kind: "string" } },
    { name: "individual_reports_url", number: 9, type: { kind: "string" } },
    { name: "term_grades_url", number: 10, type: { kind: "string" } },
    { name: "created_at", number: 11, type: { kind: "string" } },
    { name: "updated_at", number: 12, type: { kind: "string" } },
    { name: "released_on", number: 13, type: { kind: "string" } }
  ],
  "AcademicsGetAllTermReportsResponseMeta": [
    { name: "current_page", number: 1, type: { kind: "int" } },
    { name: "total_pages", number: 2, type: { kind: "int" } },
    { name: "total_count", number: 3, type: { kind: "int" } },
    { name: "per_page", number: 4, type: { kind: "int" } }
  ],
  "AcademicsGetAllTermReportsResponse": [
    { name: "term_reports", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "AcademicsGetAllTermReportsResponseTermReportsItem" } } },
    { name: "meta", number: 2, type: { kind: "message", ref: "AcademicsGetAllTermReportsResponseMeta" } }
  ],
  "AcademicsGetTermReportResponseTermReport": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "title", number: 2, type: { kind: "string" } },
    { name: "type", number: 3, type: { kind: "string" } },
    { name: "program", number: 4, type: { kind: "string" } },
    { name: "academic_term_id", number: 5, type: { kind: "int" } },
    { name: "academic_term_name", number: 6, type: { kind: "string" } },
    { name: "next_gen", number: 7, type: { kind: "bool" } },
    { name: "pdf_url", number: 8, type: { kind: "string" } },
    { name: "individual_reports_url", number: 9, type: { kind: "string" } },
    { name: "term_grades_url", number: 10, type: { kind: "string" } },
    { name: "created_at", number: 11, type: { kind: "string" } },
    { name: "updated_at", number: 12, type: { kind: "string" } },
    { name: "released_on", number: 13, type: { kind: "string" } }
  ],
  "AcademicsGetTermReportResponse": [
    { name: "term_report", number: 1, type: { kind: "message", ref: "AcademicsGetTermReportResponseTermReport" } }
  ],
  "AcademicsListGradesResponseSchool": [
    { name: "programs", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "Program" } } }
  ],
  "AcademicsListGradesResponse": [
    { name: "school", number: 1, type: { kind: "message", ref: "AcademicsListGradesResponseSchool" } }
  ],
  "AcademicsListSchoolTermGradeScalesResponseSchool": [
    { name: "term_grade_scales", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "TermGradeScale" } } }
  ],
  "AcademicsListSchoolTermGradeScalesResponse": [
    { name: "school", number: 1, type: { kind: "message", ref: "AcademicsListSchoolTermGradeScalesResponseSchool" } }
  ],
  "StudentsUpdateStudentAvatarRequestAvatarVariant1": [
    { name: "remote_file_url", number: 1, type: { kind: "string" } }
  ],
  "StudentsUpdateStudentAvatarRequestAvatarVariant2": [
    { name: "file", number: 1, type: { kind: "bytes" } }
  ],
  "StudentsUpdateStudentAvatarRequest": [
    { name: "avatar", number: 1, type: { kind: "string" } }
  ],
  "StudentsUpdateStudentAvatarResponse": [
    { name: "status", number: 1, type: { kind: "string" } }
  ],
  "StudentsDeleteStudentAvatarResponse": [
    { name: "status", number: 1, type: { kind: "string" } }
  ],
  "AttendanceGetStudentExcusalsResponse": [
    { name: "excusals", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "AttendanceExcusalsResponse" } } },
    { name: "meta", number: 2, type: { kind: "message", ref: "Meta" } }
  ],
  "StudentsListStudentsResponse": [
    { name: "students", number: 1, type: { kind: "repeated", item: { kind: "string" } } },
    { name: "meta", number: 2, type: { kind: "message", ref: "Meta" } }
  ],
  "StudentsCreateStudentRequestStudent": [

  ],
  "StudentsCreateStudentRequestOptions": [
    { name: "send_welcome_email", number: 1, type: { kind: "bool" } }
  ],
  "StudentsCreateStudentRequest": [
    { name: "student", number: 1, type: { kind: "message", ref: "StudentsCreateStudentRequestStudent" } },
    { name: "options", number: 2, type: { kind: "message", ref: "StudentsCreateStudentRequestOptions" } }
  ],
  "StudentsCreateStudentResponseOptions": [
    { name: "welcome_email", number: 1, type: { kind: "string" } }
  ],
  "StudentsCreateStudentResponse": [
    { name: "student", number: 1, type: { kind: "string" } },
    { name: "options", number: 2, type: { kind: "message", ref: "StudentsCreateStudentResponseOptions" } }
  ],
  "StudentsGetStudentByIdResponse": [
    { name: "student", number: 1, type: { kind: "string" } }
  ],
  "StudentsUpdateStudentRequestStudent": [

  ],
  "StudentsUpdateStudentRequest": [
    { name: "student", number: 1, type: { kind: "message", ref: "StudentsUpdateStudentRequestStudent" } }
  ],
  "StudentsUpdateStudentResponse": [
    { name: "student", number: 1, type: { kind: "string" } }
  ],
  "StudentsArchiveStudentRequestVariant1": [
    { name: "withdrawn_on", number: 1, type: { kind: "string" } }
  ],
  "StudentsArchiveStudentRequestVariant2": [
    { name: "graduated_on", number: 1, type: { kind: "string" } }
  ],
  "MembershipsGetStudentMembershipsResponseMembershipsClassesItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "uniq_id", number: 2, type: { kind: "string" } },
    { name: "name", number: 3, type: { kind: "string" } },
    { name: "archived", number: 4, type: { kind: "bool" } },
    { name: "start_term_id", number: 5, type: { kind: "int" } },
    { name: "end_term_id", number: 6, type: { kind: "int" } }
  ],
  "MembershipsGetStudentMembershipsResponseMembershipsGroupsItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } },
    { name: "archived", number: 3, type: { kind: "bool" } }
  ],
  "MembershipsGetStudentMembershipsResponseMembershipsYearGroupsItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } },
    { name: "program", number: 3, type: { kind: "string" } },
    { name: "archived", number: 4, type: { kind: "bool" } }
  ],
  "MembershipsGetStudentMembershipsResponseMemberships": [
    { name: "classes", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "MembershipsGetStudentMembershipsResponseMembershipsClassesItem" } } },
    { name: "groups", number: 2, type: { kind: "repeated", item: { kind: "message", ref: "MembershipsGetStudentMembershipsResponseMembershipsGroupsItem" } } },
    { name: "year_groups", number: 3, type: { kind: "repeated", item: { kind: "message", ref: "MembershipsGetStudentMembershipsResponseMembershipsYearGroupsItem" } } }
  ],
  "MembershipsGetStudentMembershipsResponse": [
    { name: "memberships", number: 1, type: { kind: "message", ref: "MembershipsGetStudentMembershipsResponseMemberships" } }
  ],
  "ExtendedApisSetStudentHomeroomAttendanceRequest": [
    { name: "date", number: 1, type: { kind: "string" } },
    { name: "status", number: 2, type: { kind: "string" } },
    { name: "notes", number: 3, type: { kind: "string" } }
  ],
  "OnlineAssessmentUpdateOnlineAssessmentRequest": [
    { name: "online_assessment", number: 1, type: { kind: "message", ref: "UpdateOnlineAssessment" } }
  ],
  "OnlineAssessmentUpdateOnlineAssessmentResponse": [
    { name: "online_assessment", number: 1, type: { kind: "message", ref: "OnlineAssessment" } }
  ],
  "ExtendedApisUpdateStudentTaskGradesRequest": [
    { name: "task_grade", number: 1, type: { kind: "string" } }
  ],
  "TeachersUpdateTeacherAvatarRequestAvatarVariant1": [
    { name: "remote_file_url", number: 1, type: { kind: "string" } }
  ],
  "TeachersUpdateTeacherAvatarRequestAvatarVariant2": [
    { name: "file", number: 1, type: { kind: "bytes" } }
  ],
  "TeachersUpdateTeacherAvatarRequest": [
    { name: "avatar", number: 1, type: { kind: "string" } }
  ],
  "TeachersListTeachersResponse": [
    { name: "teachers", number: 1, type: { kind: "repeated", item: { kind: "string" } } },
    { name: "meta", number: 2, type: { kind: "message", ref: "Meta" } }
  ],
  "TeachersCreateTeacherRequestTeacher": [
    { name: "email", number: 1, type: { kind: "string" } },
    { name: "first_name", number: 2, type: { kind: "string" } },
    { name: "middle_name", number: 3, type: { kind: "string" } },
    { name: "password", number: 4, type: { kind: "string" } },
    { name: "last_name", number: 5, type: { kind: "string" } },
    { name: "nickname", number: 6, type: { kind: "string" } },
    { name: "other_name", number: 7, type: { kind: "string" } },
    { name: "identifier", number: 8, type: { kind: "string" } },
    { name: "gender", number: 9, type: { kind: "string" } },
    { name: "birthday", number: 10, type: { kind: "string" } },
    { name: "phone_number", number: 11, type: { kind: "string" } },
    { name: "mobile_phone_number", number: 12, type: { kind: "string" } },
    { name: "street_address", number: 13, type: { kind: "string" } },
    { name: "street_address_ii", number: 14, type: { kind: "string" } },
    { name: "city", number: 15, type: { kind: "string" } },
    { name: "state", number: 16, type: { kind: "string" } },
    { name: "zipcode", number: 17, type: { kind: "string" } },
    { name: "country", number: 18, type: { kind: "string" } },
    { name: "nationalities", number: 19, type: { kind: "repeated", item: { kind: "string" } } },
    { name: "languages", number: 20, type: { kind: "repeated", item: { kind: "string" } } },
    { name: "account_uid", number: 21, type: { kind: "string" } },
    { name: "timezone", number: 22, type: { kind: "string" } }
  ],
  "TeachersCreateTeacherRequestOptions": [
    { name: "send_welcome_email", number: 1, type: { kind: "bool" } }
  ],
  "TeachersCreateTeacherRequest": [
    { name: "teacher", number: 1, type: { kind: "message", ref: "TeachersCreateTeacherRequestTeacher" } },
    { name: "options", number: 2, type: { kind: "message", ref: "TeachersCreateTeacherRequestOptions" } }
  ],
  "TeachersCreateTeacherResponseOptions": [
    { name: "welcome_email", number: 1, type: { kind: "string" } }
  ],
  "TeachersCreateTeacherResponse": [
    { name: "teacher", number: 1, type: { kind: "string" } },
    { name: "options", number: 2, type: { kind: "message", ref: "TeachersCreateTeacherResponseOptions" } }
  ],
  "TeachersGetTeacherByIdResponse": [
    { name: "teacher", number: 1, type: { kind: "string" } }
  ],
  "TeachersUpdateTeacherRequestTeacher": [
    { name: "email", number: 1, type: { kind: "string" } },
    { name: "first_name", number: 2, type: { kind: "string" } },
    { name: "middle_name", number: 3, type: { kind: "string" } },
    { name: "password", number: 4, type: { kind: "string" } },
    { name: "last_name", number: 5, type: { kind: "string" } },
    { name: "nickname", number: 6, type: { kind: "string" } },
    { name: "other_name", number: 7, type: { kind: "string" } },
    { name: "identifier", number: 8, type: { kind: "string" } },
    { name: "gender", number: 9, type: { kind: "string" } },
    { name: "birthday", number: 10, type: { kind: "string" } },
    { name: "phone_number", number: 11, type: { kind: "string" } },
    { name: "mobile_phone_number", number: 12, type: { kind: "string" } },
    { name: "street_address", number: 13, type: { kind: "string" } },
    { name: "street_address_ii", number: 14, type: { kind: "string" } },
    { name: "city", number: 15, type: { kind: "string" } },
    { name: "state", number: 16, type: { kind: "string" } },
    { name: "zipcode", number: 17, type: { kind: "string" } },
    { name: "country", number: 18, type: { kind: "string" } },
    { name: "nationalities", number: 19, type: { kind: "repeated", item: { kind: "string" } } },
    { name: "languages", number: 20, type: { kind: "repeated", item: { kind: "string" } } },
    { name: "account_uid", number: 21, type: { kind: "string" } },
    { name: "timezone", number: 22, type: { kind: "string" } }
  ],
  "TeachersUpdateTeacherRequest": [
    { name: "teacher", number: 1, type: { kind: "message", ref: "TeachersUpdateTeacherRequestTeacher" } }
  ],
  "TeachersListTeacherClassesMembershipsResponseClassesItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "uniq_id", number: 2, type: { kind: "string" } },
    { name: "name", number: 3, type: { kind: "string" } },
    { name: "archived", number: 4, type: { kind: "bool" } },
    { name: "start_term_id", number: 5, type: { kind: "int" } },
    { name: "end_term_id", number: 6, type: { kind: "int" } },
    { name: "show_on_reports", number: 7, type: { kind: "bool" } }
  ],
  "TeachersListTeacherClassesMembershipsResponse": [
    { name: "classes", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "TeachersListTeacherClassesMembershipsResponseClassesItem" } } }
  ],
  "TeachersListTeacherGroupsMembershipsResponseGroupsItem": [
    { name: "id", number: 1, type: { kind: "int" } },
    { name: "name", number: 2, type: { kind: "string" } },
    { name: "archived", number: 3, type: { kind: "bool" } },
    { name: "group_advisor", number: 4, type: { kind: "bool" } },
    { name: "primary_group_advisor", number: 5, type: { kind: "bool" } }
  ],
  "TeachersListTeacherGroupsMembershipsResponse": [
    { name: "groups", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "TeachersListTeacherGroupsMembershipsResponseGroupsItem" } } }
  ],
  "UnitClassAssignmentsListUnitClassAssignmentsResponse": [
    { name: "unit_class_assignments", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "UnitClassAssignment" } } },
    { name: "meta", number: 2, type: { kind: "message", ref: "Meta" } }
  ],
  "UnitsListUnitsResponse": [
    { name: "units", number: 1, type: { kind: "repeated", item: { kind: "message", ref: "Unit" } } },
    { name: "meta", number: 2, type: { kind: "message", ref: "Meta" } }
  ],
  "UnitsGetUnitByIdResponse": [
    { name: "unit", number: 1, type: { kind: "message", ref: "Unit" } }
  ],
  "YearGroupsAddStudentToYearGroupRequest": [
    { name: "student_ids", number: 1, type: { kind: "repeated", item: { kind: "int" } } }
  ],
  "YearGroupsRemoveStudentToYearGroupRequest": [
    { name: "student_ids", number: 1, type: { kind: "repeated", item: { kind: "int" } } }
  ],
  "ClassesAddTeachersToClassRequest": [
    { name: "teacher_ids", number: 1, type: { kind: "repeated", item: { kind: "int" } } }
  ],
  "MembershipsRemoveTeachersFromClassRequest": [
    { name: "teacher_ids", number: 1, type: { kind: "repeated", item: { kind: "int" } } }
  ],
  "CourseworkCreateTaskforClassRequest": [
    { name: "core_task", number: 1, type: { kind: "message", ref: "CoreTaskAttributes" } }
  ]
};


function writeVarint(out: number[], value: number | bigint): void {
  let v = typeof value === "bigint" ? value : BigInt(Math.trunc(value));
  if (v < 0n) v += 1n << 64n;
  while (v >= 0x80n) {
    out.push(Number((v & 0x7fn) | 0x80n));
    v >>= 7n;
  }
  out.push(Number(v));
}

function writeTag(out: number[], fieldNumber: number, wireType: number): void {
  writeVarint(out, (fieldNumber << 3) | wireType);
}

function writeLengthDelimited(out: number[], bytes: Uint8Array): void {
  writeVarint(out, bytes.length);
  for (const byte of bytes) out.push(byte);
}

function writeDouble(out: number[], value: number): void {
  const buffer = new ArrayBuffer(8);
  new DataView(buffer).setFloat64(0, value, true);
  for (const byte of new Uint8Array(buffer)) out.push(byte);
}

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

function encodeField(out: number[], field: ProtoField, type: ProtoFieldType, value: unknown): void {
  if (value === undefined || value === null) return;
  switch (type.kind) {
    case "repeated":
      if (Array.isArray(value)) for (const item of value) encodeField(out, field, type.item, item);
      return;
    case "map":
      if (typeof value === "object") {
        for (const [key, val] of Object.entries(value as Record<string, unknown>)) {
          const entry: number[] = [];
          encodeField(entry, { name: "key", number: 1, type: { kind: "string" } }, { kind: "string" }, key);
          encodeField(entry, { name: "value", number: 2, type: type.value }, type.value, val);
          writeTag(out, field.number, 2);
          writeLengthDelimited(out, new Uint8Array(entry));
        }
      }
      return;
    case "message": {
      writeTag(out, field.number, 2);
      writeLengthDelimited(out, encodeMessage(type.ref, value as Record<string, unknown>));
      return;
    }
    case "string":
      writeTag(out, field.number, 2);
      writeLengthDelimited(out, textEncoder.encode(String(value)));
      return;
    case "bytes":
      writeTag(out, field.number, 2);
      writeLengthDelimited(out, value instanceof Uint8Array ? value : textEncoder.encode(String(value)));
      return;
    case "int":
      writeTag(out, field.number, 0);
      writeVarint(out, Math.trunc(Number(value)));
      return;
    case "bool":
      writeTag(out, field.number, 0);
      writeVarint(out, value ? 1 : 0);
      return;
    case "double":
      writeTag(out, field.number, 1);
      writeDouble(out, Number(value));
      return;
  }
}

export function encodeMessage(typeName: string, value: Record<string, unknown>): Uint8Array {
  const schema = PROTO_SCHEMAS[typeName];
  if (!schema) return new Uint8Array();
  const out: number[] = [];
  for (const field of schema) encodeField(out, field, field.type, value[field.name]);
  return new Uint8Array(out);
}

class Reader {
  private pos = 0;
  constructor(private readonly buf: Uint8Array) {}
  get done(): boolean {
    return this.pos >= this.buf.length;
  }
  varint(): bigint {
    let result = 0n;
    let shift = 0n;
    while (true) {
      const byte = this.buf[this.pos++];
      result |= BigInt(byte & 0x7f) << shift;
      if ((byte & 0x80) === 0) break;
      shift += 7n;
    }
    return result;
  }
  double(): number {
    const value = new DataView(this.buf.buffer, this.buf.byteOffset + this.pos, 8).getFloat64(0, true);
    this.pos += 8;
    return value;
  }
  bytes(): Uint8Array {
    const length = Number(this.varint());
    const slice = this.buf.subarray(this.pos, this.pos + length);
    this.pos += length;
    return slice;
  }
  skip(wireType: number): void {
    if (wireType === 0) this.varint();
    else if (wireType === 1) this.pos += 8;
    else if (wireType === 2) this.bytes();
    else if (wireType === 5) this.pos += 4;
  }
}

export function decodeMessage(typeName: string, bytes: Uint8Array): Record<string, unknown> {
  const schema = PROTO_SCHEMAS[typeName];
  const byNumber = new Map<number, ProtoField>();
  for (const field of schema ?? []) byNumber.set(field.number, field);
  const out: Record<string, unknown> = {};
  const reader = new Reader(bytes);
  while (!reader.done) {
    const tag = Number(reader.varint());
    const fieldNumber = tag >>> 3;
    const wireType = tag & 0x7;
    const field = byNumber.get(fieldNumber);
    if (!field) {
      reader.skip(wireType);
      continue;
    }
    const value = decodeValue(reader, field.type, wireType);
    applyDecoded(out, field, value);
  }
  return out;
}

function decodeValue(reader: Reader, type: ProtoFieldType, wireType: number): unknown {
  switch (type.kind) {
    case "repeated":
      return decodeValue(reader, type.item, wireType);
    case "map": {
      const entry = decodeMessageBytes(reader.bytes(), [
        { name: "key", number: 1, type: { kind: "string" } },
        { name: "value", number: 2, type: type.value },
      ]);
      return entry;
    }
    case "message":
      return decodeMessage(type.ref, reader.bytes());
    case "string":
      return textDecoder.decode(reader.bytes());
    case "bytes":
      return reader.bytes();
    case "int":
      return Number(reader.varint());
    case "bool":
      return reader.varint() !== 0n;
    case "double":
      return reader.double();
  }
}

function decodeMessageBytes(bytes: Uint8Array, schema: ProtoField[]): Record<string, unknown> {
  const byNumber = new Map<number, ProtoField>();
  for (const field of schema) byNumber.set(field.number, field);
  const out: Record<string, unknown> = {};
  const reader = new Reader(bytes);
  while (!reader.done) {
    const tag = Number(reader.varint());
    const field = byNumber.get(tag >>> 3);
    if (!field) {
      reader.skip(tag & 0x7);
      continue;
    }
    applyDecoded(out, field, decodeValue(reader, field.type, tag & 0x7));
  }
  return out;
}

function applyDecoded(out: Record<string, unknown>, field: ProtoField, value: unknown): void {
  if (field.type.kind === "repeated") {
    if (!Array.isArray(out[field.name])) out[field.name] = [];
    (out[field.name] as unknown[]).push(value);
  } else if (field.type.kind === "map") {
    const entry = value as { key?: string; value?: unknown };
    if (typeof out[field.name] !== "object" || out[field.name] === null) out[field.name] = {};
    const map = out[field.name] as Record<string, unknown>;
    if (entry.key !== undefined) map[entry.key] = entry.value;
  } else {
    out[field.name] = value;
  }
}

// gRPC-web envelope: [flag:1][length:4 big-endian][payload].
export function frame(payload: Uint8Array): Uint8Array {
  const out = new Uint8Array(5 + payload.length);
  new DataView(out.buffer).setUint32(1, payload.length, false);
  out.set(payload, 5);
  return out;
}

export function unframe(data: Uint8Array): { flag: number; payload: Uint8Array }[] {
  const frames: { flag: number; payload: Uint8Array }[] = [];
  let offset = 0;
  while (offset + 5 <= data.length) {
    const flag = data[offset];
    const length = new DataView(data.buffer, data.byteOffset + offset + 1, 4).getUint32(0, false);
    frames.push({ flag, payload: data.subarray(offset + 5, offset + 5 + length) });
    offset += 5 + length;
  }
  return frames;
}
