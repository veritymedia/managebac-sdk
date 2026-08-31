# API V2P3 API Reference

This API set Orchestrates Faria Services Manager and School Administration with the ManageBac GUI.

Base URL: `https://api.managebac.com`

## coursework

### listGradesForClass

`GET /v2p3/classes/{class_id}/assessments/term/{term_id}/grades`

Get all Grades for a Class during an Academic Term

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `class_id` | path | integer | yes |
| `term_id` | path | integer | yes |
| `student_ids` | query | integer[] | no |
| `include_archived_students` | query | boolean | no |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.coursework.listGradesForClass({ classId: "classId_value", termId: "termId_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Coursework.ListGradesForClass(context.TODO(), CourseworkListGradesForClassParams{})
```

### listTermGradesForClass

`GET /v2p3/classes/{class_id}/assessments/term/{term_id}/term-grades`

Get Term Grades for a Class

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `class_id` | path | integer | yes |
| `term_id` | path | integer | yes |
| `student_ids` | query | integer[] | no |
| `include_archived_students` | query | boolean | no |
| `unenrolled_only` | query | boolean | no |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.coursework.listTermGradesForClass({ classId: "classId_value", termId: "termId_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Coursework.ListTermGradesForClass(context.TODO(), CourseworkListTermGradesForClassParams{})
```

### listCriteriaforClass

`GET /v2p3/classes/{id}/criteria`

Get Criteria for a Class

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Returns**: `CriteriaResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.coursework.listCriteriaforClass({ id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Coursework.ListCriteriaforClass(context.TODO(), CourseworkListCriteriaforClassParams{})
```

### listClassTaskCategories

`GET /v2p3/classes/{id}/task_categories`

Get Task Categories for Class

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Returns**: `CourseworkListClassTaskCategoriesResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.coursework.listClassTaskCategories({ id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Coursework.ListClassTaskCategories(context.TODO(), CourseworkListClassTaskCategoriesParams{})
```

### downloadSubmissionFile

`GET /v2p3/classes/{class_id}/tasks/{task_id}/submissions/{student_id}/files/{asset_id}`

Download a Submission File

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `class_id` | path | integer | yes |
| `task_id` | path | integer | yes |
| `student_id` | path | integer | yes |
| `asset_id` | path | integer | yes |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.coursework.downloadSubmissionFile({ classId: "classId_value", taskId: "taskId_value", studentId: "studentId_value", assetId: "assetId_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Coursework.DownloadSubmissionFile(context.TODO(), CourseworkDownloadSubmissionFileParams{})
```

### listTaskSubmissions

`GET /v2p3/classes/{class_id}/tasks/{task_id}/submissions`

List Student Submissions for a Task

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `class_id` | path | integer | yes |
| `task_id` | path | integer | yes |
| `modified_since` | query | string | no |
| `page` | query | integer | no |
| `per_page` | query | integer | no |

**Returns**: `CourseworkListTaskSubmissionsResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.coursework.listTaskSubmissions({ classId: "classId_value", taskId: "taskId_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Coursework.ListTaskSubmissions(context.TODO(), CourseworkListTaskSubmissionsParams{})
```

### getTaskSubmission

`GET /v2p3/classes/{class_id}/tasks/{task_id}/submissions/{student_id}`

Get a Single Student Submission

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `class_id` | path | integer | yes |
| `task_id` | path | integer | yes |
| `student_id` | path | integer | yes |

**Returns**: `CourseworkGetTaskSubmissionResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.coursework.getTaskSubmission({ classId: "classId_value", taskId: "taskId_value", studentId: "studentId_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Coursework.GetTaskSubmission(context.TODO(), CourseworkGetTaskSubmissionParams{})
```

### listTasksforClass

`GET /v2p3/classes/{id}/tasks`

Get Tasks for a Class

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |
| `term_id` | query | integer | no |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.coursework.listTasksforClass({ id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Coursework.ListTasksforClass(context.TODO(), CourseworkListTasksforClassParams{})
```

### getTasksByIdforClass

`GET /v2p3/classes/{class_id}/tasks/{id}`

Get a Task for a Class

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |
| `class_id` | path | integer | yes |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.coursework.getTasksByIdforClass({ id: "id_value", classId: "classId_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Coursework.GetTasksByIdforClass(context.TODO(), CourseworkGetTasksByIdforClassParams{})
```

### updateTaskforClass

`PUT /v2p3/classes/{class_id}/tasks/{id}`

Update a Task for a Class

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `class_id` | path | integer | yes |
| `id` | path | integer | yes |

**Request body** (application/json): `CourseworkUpdateTaskforClassRequest`

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.coursework.updateTaskforClass({ classId: "classId_value", id: "id_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Coursework.UpdateTaskforClass(context.TODO(), CourseworkUpdateTaskforClassParams{})
```

### partialUpdateTaskforClass

`PATCH /v2p3/classes/{class_id}/tasks/{id}`

Partially Update a Task for a Class

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `class_id` | path | integer | yes |
| `id` | path | integer | yes |

**Request body** (application/json): `CourseworkPartialUpdateTaskforClassRequest`

**Returns**: `CourseworkPartialUpdateTaskforClassResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.coursework.partialUpdateTaskforClass({ classId: "classId_value", id: "id_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Coursework.PartialUpdateTaskforClass(context.TODO(), CourseworkPartialUpdateTaskforClassParams{})
```

### deleteTaskforClass

`DELETE /v2p3/classes/{class_id}/tasks/{id}`

Delete a Task for a Class

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `class_id` | path | integer | yes |
| `id` | path | integer | yes |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.coursework.deleteTaskforClass({ classId: "classId_value", id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Coursework.DeleteTaskforClass(context.TODO(), CourseworkDeleteTaskforClassParams{})
```

### listStudentAssessmentResultsForClassTask

`GET /v2p3/classes/{class_id}/tasks/{id}/students`

Get Student Assessment Results for a Task and Class

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |
| `class_id` | path | integer | yes |
| `student_ids` | query | integer[] | no |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.coursework.listStudentAssessmentResultsForClassTask({ id: "id_value", classId: "classId_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Coursework.ListStudentAssessmentResultsForClassTask(context.TODO(), CourseworkListStudentAssessmentResultsForClassTaskParams{})
```

### bulkResetStudentsTaskGrades

`DELETE /v2p3/tasks/{task_id}/students`

Bulk Delete Grades for Students for a Task

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `task_id` | path | integer | yes |

**Request body** (application/json): `BulkDestroyStudentTaskGradeRequest`

**Returns**: `BulkStudentTaskGradeResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.coursework.bulkResetStudentsTaskGrades({ taskId: "taskId_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Coursework.BulkResetStudentsTaskGrades(context.TODO(), CourseworkBulkResetStudentsTaskGradesParams{})
```

### createTaskforClass

`POST /v2p3/classes/{class_id}/tasks`

Create a Task for a Class

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `class_id` | path | integer | yes |

**Request body** (application/json): `CourseworkCreateTaskforClassRequest`

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.coursework.createTaskforClass({ classId: "classId_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Coursework.CreateTaskforClass(context.TODO(), CourseworkCreateTaskforClassParams{})
```

## attendance

### setAttendanceSettings

`PUT /v2p3/classes/{class_id}/academic-years/{academic_year_id}/attendance/settings`

Set or Update an Attendance Settings for a Class in an Academic Year

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `class_id` | path | integer | yes |
| `academic_year_id` | path | integer | yes |

**Request body** (application/json): `SetAttendanceSettingsRequest`

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.attendance.setAttendanceSettings({ classId: "classId_value", academicYearId: "academicYearId_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Attendance.SetAttendanceSettings(context.TODO(), AttendanceSetAttendanceSettingsParams{})
```

### listCategories

`GET /v2p3/school/academic-years/{academic_year_id}/attendance_categories`

Get Attendance Categories

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `academic_year_id` | path | string | yes |

**Returns**: `AttendanceListCategoriesResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.attendance.listCategories({ academicYearId: "academicYearId_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Attendance.ListCategories(context.TODO(), AttendanceListCategoriesParams{})
```

### getClassTimetable

`GET /v2p3/classes/{class_id}/timetable`

Get Class timetable

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `class_id` | path | integer | yes |
| `include_disabled` | query | boolean | no |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.attendance.getClassTimetable({ classId: "classId_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Attendance.GetClassTimetable(context.TODO(), AttendanceGetClassTimetableParams{})
```

### getAttendanceForClass

`GET /v2p3/classes/{id}/attendance/term/{term_id}`

Get Attendance for a Class during an Academic Term

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |
| `term_id` | path | integer | yes |
| `archived_students` | query | boolean | no |
| `student_ids` | query | integer[] | no |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.attendance.getAttendanceForClass({ id: "id_value", termId: "termId_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Attendance.GetAttendanceForClass(context.TODO(), AttendanceGetAttendanceForClassParams{})
```

### getClassAttendanceForDate

`GET /v2p3/classes/{id}/attendance/date/{date}`

Get Class Attendance for a Date

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |
| `date` | path | string | yes |
| `student_ids` | query | integer[] | no |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.attendance.getClassAttendanceForDate({ id: "id_value", date: "date_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Attendance.GetClassAttendanceForDate(context.TODO(), AttendanceGetClassAttendanceForDateParams{})
```

### getDateExcusals

`GET /v2p3/students/excusals/{date}`

Get all Attendance Excusals for a date

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `date` | path | string | yes |
| `page` | query | string | no |
| `per_page` | query | string | no |
| `student_ids` | query | integer[] | no |

**Returns**: `AttendanceGetDateExcusalsResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.attendance.getDateExcusals({ date: "date_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Attendance.GetDateExcusals(context.TODO(), AttendanceGetDateExcusalsParams{})
```

### getAttendanceForYearGroupByTerm

`GET /v2p3/year-groups/{year_group_id}/homeroom/attendance/term/{term_id}`

Get Homeroom Attendance for a Year Group and Term

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `year_group_id` | path | integer | yes |
| `term_id` | path | integer | yes |
| `archived_students` | query | boolean | no |
| `student_ids` | query | integer[] | no |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.attendance.getAttendanceForYearGroupByTerm({ yearGroupId: "yearGroupId_value", termId: "termId_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Attendance.GetAttendanceForYearGroupByTerm(context.TODO(), AttendanceGetAttendanceForYearGroupByTermParams{})
```

### getAttendanceForYearGroupByDate

`GET /v2p3/year-groups/{year_group_id}/homeroom/attendance/date/{date}`

Get Homeroom Attendance for a Year Group by Date

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `year_group_id` | path | integer | yes |
| `date` | path | string | yes |
| `student_ids` | query | integer[] | no |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.attendance.getAttendanceForYearGroupByDate({ yearGroupId: "yearGroupId_value", date: "date_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Attendance.GetAttendanceForYearGroupByDate(context.TODO(), AttendanceGetAttendanceForYearGroupByDateParams{})
```

### getAttendanceAdjustmentsForYearGroupByTerm

`GET /v2p3/year-groups/{year_group_id}/homeroom/attendance/term/{term_id}/adjustments`

Get Homeroom Attendance Adjustments for a Year Group and Term

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `year_group_id` | path | integer | yes |
| `term_id` | path | integer | yes |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.attendance.getAttendanceAdjustmentsForYearGroupByTerm({ yearGroupId: "yearGroupId_value", termId: "termId_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Attendance.GetAttendanceAdjustmentsForYearGroupByTerm(context.TODO(), AttendanceGetAttendanceAdjustmentsForYearGroupByTermParams{})
```

### getStudentExcusals

`GET /v2p3/students/{student_id}/excusals`

Get all Attendance Excusals for a student

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `student_id` | path | integer | yes |
| `applies_on` | query | string | no |
| `page` | query | string | no |
| `per_page` | query | string | no |

**Returns**: `AttendanceGetStudentExcusalsResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.attendance.getStudentExcusals({ studentId: "studentId_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Attendance.GetStudentExcusals(context.TODO(), AttendanceGetStudentExcusalsParams{})
```

### createStudentExcusal

`POST /v2p3/students/{student_id}/excusals`

Create Excusal for a Student

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `student_id` | path | integer | yes |

**Request body** (application/json): `CreateAttendanceExcusalRequest`

**Returns**: `AttendanceExcusalsResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.attendance.createStudentExcusal({ studentId: "studentId_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Attendance.CreateStudentExcusal(context.TODO(), AttendanceCreateStudentExcusalParams{})
```

## authentication

### listTokenResources

`GET /v2p3/auth/permissions`

Get all Permissions

**Returns**: `AuthPermissionsResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.authentication.listTokenResources();
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Authentication.ListTokenResources(context.TODO())
```

### createOauthToken

`POST /oauth/token`

Obtain an Access Token

**Request body** (application/json): `OauthTokenRequest`

**Returns**: `OauthTokenResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.authentication.createOauthToken({ body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Authentication.CreateOauthToken(context.TODO(), AuthenticationCreateOauthTokenParams{})
```

## utilities

### showAvatarById

`GET /v2p3/avatars/{id}`

Get Avatar

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.utilities.showAvatarById({ id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Utilities.ShowAvatarById(context.TODO(), UtilitiesShowAvatarByIdParams{})
```

### ping

`GET /v2p3/ping`

Ping

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.utilities.ping();
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Utilities.Ping(context.TODO())
```

## behaviorNotes

### listBehaviorNotes

`GET /v2p3/behavior/notes`

Get all behavior notes

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `modified_since` | query | string | no |
| `page` | query | string | no |
| `per_page` | query | string | no |
| `student_ids` | query | integer[] | no |

**Returns**: `BehaviorNotesListBehaviorNotesResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.behaviorNotes.listBehaviorNotes();
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.BehaviorNotes.ListBehaviorNotes(context.TODO())
```

## memberships

### getStudentsForClass

`GET /v2p3/classes/{class_id}/students`

Get Students for a Class

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `class_id` | path | integer | yes |
| `include_archived_students` | query | boolean | no |
| `student_ids` | query | integer[] | no |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.memberships.getStudentsForClass({ classId: "classId_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Memberships.GetStudentsForClass(context.TODO(), MembershipsGetStudentsForClassParams{})
```

### listMemberships

`GET /v2p3/memberships`

Get all Memberships

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `class_ids[]` | query | integer[] | no |
| `modified_since` | query | string | no |
| `deleted_since` | query | string | no |
| `page` | query | string | no |
| `per_page` | query | string | no |
| `user_ids[]` | query | integer[] | no |
| `user_ids` | query | integer[] | no |
| `class_happens_on` | query | string | no |
| `student_ids` | query | integer[] | no |

**Returns**: `MembershipsListMembershipsResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.memberships.listMemberships();
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Memberships.ListMemberships(context.TODO())
```

### getStudentMemberships

`GET /v2p3/students/{id}/memberships`

Get a Student's memberships

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |
| `archived` | query | boolean | no |

**Returns**: `MembershipsGetStudentMembershipsResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.memberships.getStudentMemberships({ id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Memberships.GetStudentMemberships(context.TODO(), MembershipsGetStudentMembershipsParams{})
```

### getTeacherMemberships

`GET /v2p3/classes/{class_id}/teachers`

Get Teachers for a Class

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `class_id` | path | integer | yes |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.memberships.getTeacherMemberships({ classId: "classId_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Memberships.GetTeacherMemberships(context.TODO(), MembershipsGetTeacherMembershipsParams{})
```

### removeTeachersFromClass

`DELETE /v2p3/classes/{class_id}/teachers/remove_teachers`

Remove Teachers from a Class

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `class_id` | path | integer | yes |

**Request body** (application/json): `MembershipsRemoveTeachersFromClassRequest`

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.memberships.removeTeachersFromClass({ classId: "classId_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Memberships.RemoveTeachersFromClass(context.TODO(), MembershipsRemoveTeachersFromClassParams{})
```

## extendedApis

### bulkUpdateStudentsFromClass

`PATCH /v2p3/classes/{class_id}/students`

Bulk update Students from a Class

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `class_id` | path | integer | yes |

**Request body** (application/json): `BulkUpdateStudents`

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.extendedApis.bulkUpdateStudentsFromClass({ classId: "classId_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.ExtendedApis.BulkUpdateStudentsFromClass(context.TODO(), ExtendedApisBulkUpdateStudentsFromClassParams{})
```

### upsertClasses

`PATCH /v2p3/classes`

Upsert many classes

**Request body** (application/json): `UpsertClasses`

**Returns**: `UpsertClassesResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.extendedApis.upsertClasses({ body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.ExtendedApis.UpsertClasses(context.TODO(), ExtendedApisUpsertClassesParams{})
```

### setClassAttendanceForStudents

`PUT /v2p3/classes/{id}/attendance`

Set or Update a Class Attendance for Students

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Request body** (application/json): `BulkUpdateAttendance`

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.extendedApis.setClassAttendanceForStudents({ id: "id_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.ExtendedApis.SetClassAttendanceForStudents(context.TODO(), ExtendedApisSetClassAttendanceForStudentsParams{})
```

### bulkEnableSubjects

`POST /v2p3/school/programs/{program_code}/subjects/bulk-enable`

Bulk Enable Subjects

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `program_code` | path | string | yes |

**Request body** (application/json): `ToggleSchoolSubjectsRequest`

**Returns**: `ToggleSchoolSubjectsRequest`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.extendedApis.bulkEnableSubjects({ programCode: "programCode_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.ExtendedApis.BulkEnableSubjects(context.TODO(), ExtendedApisBulkEnableSubjectsParams{})
```

### bulkDisableSubjects

`POST /v2p3/school/programs/{program_code}/subjects/bulk-disable`

Bulk Disable Subjects

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `program_code` | path | string | yes |

**Request body** (application/json): `ToggleSchoolSubjectsRequest`

**Returns**: `ToggleSchoolSubjectsRequest`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.extendedApis.bulkDisableSubjects({ programCode: "programCode_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.ExtendedApis.BulkDisableSubjects(context.TODO(), ExtendedApisBulkDisableSubjectsParams{})
```

### updateStudentExcusal

`PATCH /v2p3/students/{student_id}/excusals/{id}`

Update Excusal for a Student

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `student_id` | path | integer | yes |
| `id` | path | integer | yes |

**Request body** (application/json): `UpdateAttendanceExcusalRequest`

**Returns**: `AttendanceExcusalsResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.extendedApis.updateStudentExcusal({ studentId: "studentId_value", id: "id_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.ExtendedApis.UpdateStudentExcusal(context.TODO(), ExtendedApisUpdateStudentExcusalParams{})
```

### deleteStudentExcusal

`DELETE /v2p3/students/{student_id}/excusals/{id}`

Delete Excusal for a Student

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `student_id` | path | integer | yes |
| `id` | path | integer | yes |

**Returns**: `AttendanceExcusalsResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.extendedApis.deleteStudentExcusal({ studentId: "studentId_value", id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.ExtendedApis.DeleteStudentExcusal(context.TODO(), ExtendedApisDeleteStudentExcusalParams{})
```

### setStudentHomeroomAttendance

`PUT /v2p3/students/{id}/set_homeroom_attendance`

Set student homeroom attendance

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Request body** (application/json): `ExtendedApisSetStudentHomeroomAttendanceRequest`

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.extendedApis.setStudentHomeroomAttendance({ id: "id_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.ExtendedApis.SetStudentHomeroomAttendance(context.TODO(), ExtendedApisSetStudentHomeroomAttendanceParams{})
```

### updateStudentTaskGrades

`PATCH /v2p3/tasks/{task_id}/students/{student_id}`

Update or Create a Grade for a Student for a Task

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `task_id` | path | integer | yes |
| `student_id` | path | integer | yes |

**Request body** (application/json): `ExtendedApisUpdateStudentTaskGradesRequest`

**Returns**: `ExtendedApisUpdateStudentTaskGradesResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.extendedApis.updateStudentTaskGrades({ taskId: "taskId_value", studentId: "studentId_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.ExtendedApis.UpdateStudentTaskGrades(context.TODO(), ExtendedApisUpdateStudentTaskGradesParams{})
```

### bulkUpdateStudentTaskGrades

`PATCH /v2p3/tasks/{task_id}/students`

Bulk Update or Create Grades for Students for a Task

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `task_id` | path | integer | yes |

**Request body** (application/json): `BulkUpdateStudentTaskGradeRequest`

**Returns**: `BulkStudentTaskGradeResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.extendedApis.bulkUpdateStudentTaskGrades({ taskId: "taskId_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.ExtendedApis.BulkUpdateStudentTaskGrades(context.TODO(), ExtendedApisBulkUpdateStudentTaskGradesParams{})
```

### bulkUpdateTeacherMemberships

`PUT /v2p3/classes/{class_id}/teachers`

Set Teacher memberships for a Class

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `class_id` | path | integer | yes |

**Request body** (application/json): `BulkUpdateTeachers`

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.extendedApis.bulkUpdateTeacherMemberships({ classId: "classId_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.ExtendedApis.BulkUpdateTeacherMemberships(context.TODO(), ExtendedApisBulkUpdateTeacherMembershipsParams{})
```

## classes

### listClasses

`GET /v2p3/classes`

Get all Classes

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `modified_since` | query | string | no |
| `deleted_since` | query | string | no |
| `page` | query | string | no |
| `per_page` | query | string | no |
| `archived` | query | boolean | no |

**Returns**: `ClassesListClassesResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.classes.listClasses();
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Classes.ListClasses(context.TODO())
```

### createClass

`POST /v2p3/classes`

Create a class

**Request body** (application/json): `CreateClass`

**Returns**: `Class`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.classes.createClass({ body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Classes.CreateClass(context.TODO(), ClassesCreateClassParams{})
```

### getClassById

`GET /v2p3/classes/{id}`

Get a Class

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Returns**: `ClassesGetClassByIdResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.classes.getClassById({ id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Classes.GetClassById(context.TODO(), ClassesGetClassByIdParams{})
```

### updateClass

`PATCH /v2p3/classes/{id}`

Update a class

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Request body** (application/json): `UpdateClass`

**Returns**: `Class`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.classes.updateClass({ id: "id_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Classes.UpdateClass(context.TODO(), ClassesUpdateClassParams{})
```

### addStudentsToClass

`POST /v2p3/classes/{id}/add_students`

Add Students to a Class

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Request body** (application/json): `ClassesAddStudentsToClassRequest`

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.classes.addStudentsToClass({ id: "id_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Classes.AddStudentsToClass(context.TODO(), ClassesAddStudentsToClassParams{})
```

### removeStudentsFromClass

`POST /v2p3/classes/{id}/remove_students`

Remove Students from a Class

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Request body** (application/json): `ClassesRemoveStudentsFromClassRequest`

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.classes.removeStudentsFromClass({ id: "id_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Classes.RemoveStudentsFromClass(context.TODO(), ClassesRemoveStudentsFromClassParams{})
```

### getClassTerms

`GET /v2p3/classes/{id}/terms`

Get Class terms details

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |
| `academic_year_id` | query | integer | no |
| `active_only` | query | boolean | no |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.classes.getClassTerms({ id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Classes.GetClassTerms(context.TODO(), ClassesGetClassTermsParams{})
```

### addTeachersToClass

`POST /v2p3/classes/{class_id}/teachers/add_teachers`

Add Teachers to a Class

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `class_id` | path | integer | yes |

**Request body** (application/json): `ClassesAddTeachersToClassRequest`

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.classes.addTeachersToClass({ classId: "classId_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Classes.AddTeachersToClass(context.TODO(), ClassesAddTeachersToClassParams{})
```

## relationships

### listOfParentChildrenRelationships

`GET /v2p3/parents/{parent_id}/children`

List of parent-children relationships

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `parent_id` | path | string | yes |
| `page` | query | string | no |
| `per_page` | query | string | no |

**Returns**: `RelationshipsListOfParentChildrenRelationshipsResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.relationships.listOfParentChildrenRelationships({ parentId: "parentId_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Relationships.ListOfParentChildrenRelationships(context.TODO(), RelationshipsListOfParentChildrenRelationshipsParams{})
```

### createParentChildRelationship

`POST /v2p3/parents/{parent_id}/children`

Create a parent-child relationship

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `parent_id` | path | string | yes |

**Request body** (application/json): `RelationshipsCreateParentChildRelationshipRequest`

**Returns**: `RelationshipsCreateParentChildRelationshipResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.relationships.createParentChildRelationship({ parentId: "parentId_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Relationships.CreateParentChildRelationship(context.TODO(), RelationshipsCreateParentChildRelationshipParams{})
```

### bulkUpdateParentChildrenRelationships

`PUT /v2p3/parents/{parent_id}/children`

Bulk update a parent-children relationships

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `parent_id` | path | string | yes |

**Request body** (application/json): `RelationshipsBulkUpdateParentChildrenRelationshipsRequest`

**Returns**: `RelationshipsBulkUpdateParentChildrenRelationshipsResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.relationships.bulkUpdateParentChildrenRelationships({ parentId: "parentId_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Relationships.BulkUpdateParentChildrenRelationships(context.TODO(), RelationshipsBulkUpdateParentChildrenRelationshipsParams{})
```

### getParentChildRelationship

`GET /v2p3/parents/{parent_id}/children/{id}`

Get parent-child relationship

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `parent_id` | path | string | yes |
| `id` | path | string | yes |

**Returns**: `RelationshipsGetParentChildRelationshipResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.relationships.getParentChildRelationship({ parentId: "parentId_value", id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Relationships.GetParentChildRelationship(context.TODO(), RelationshipsGetParentChildRelationshipParams{})
```

### updateParentChildRelationship

`PUT /v2p3/parents/{parent_id}/children/{id}`

Update parent-child relationship

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `parent_id` | path | string | yes |
| `id` | path | string | yes |

**Request body** (application/json): `RelationshipsUpdateParentChildRelationshipRequest`

**Returns**: `RelationshipsUpdateParentChildRelationshipResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.relationships.updateParentChildRelationship({ parentId: "parentId_value", id: "id_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Relationships.UpdateParentChildRelationship(context.TODO(), RelationshipsUpdateParentChildRelationshipParams{})
```

### deleteParentChildRelationship

`DELETE /v2p3/parents/{parent_id}/children/{id}`

Remove parent-child relationship

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `parent_id` | path | string | yes |
| `id` | path | string | yes |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.relationships.deleteParentChildRelationship({ parentId: "parentId_value", id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Relationships.DeleteParentChildRelationship(context.TODO(), RelationshipsDeleteParentChildRelationshipParams{})
```

## parents

### listParents

`GET /v2p3/parents`

Get all Parents

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `ids[]` | query | integer[] | no |
| `archived` | query | boolean | no |
| `modified_since` | query | string | no |
| `page` | query | string | no |
| `per_page` | query | string | no |
| `deleted_since` | query | string | no |
| `q` | query | string | no |

**Returns**: `ParentsListParentsResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.parents.listParents();
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Parents.ListParents(context.TODO())
```

### createParent

`POST /v2p3/parents`

Create New Parent

**Request body** (application/json): `ParentsCreateParentRequest`

**Returns**: `ParentsCreateParentResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.parents.createParent({ body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Parents.CreateParent(context.TODO(), ParentsCreateParentParams{})
```

### getParentById

`GET /v2p3/parents/{id}`

Get a Parent

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Returns**: `ParentsGetParentByIdResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.parents.getParentById({ id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Parents.GetParentById(context.TODO(), ParentsGetParentByIdParams{})
```

### updateParent

`PATCH /v2p3/parents/{id}`

Update a Parent

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Request body** (application/json): `ParentsUpdateParentRequest`

**Returns**: `ParentsUpdateParentResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.parents.updateParent({ id: "id_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Parents.UpdateParent(context.TODO(), ParentsUpdateParentParams{})
```

### archiveParent

`PUT /v2p3/parents/{id}/archive`

Archive a Parent

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.parents.archiveParent({ id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Parents.ArchiveParent(context.TODO(), ParentsArchiveParentParams{})
```

### unarchiveParent

`PUT /v2p3/parents/{id}/unarchive`

Unarchive a Parent

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.parents.unarchiveParent({ id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Parents.UnarchiveParent(context.TODO(), ParentsUnarchiveParentParams{})
```

### sendParentWelcomeEmail

`POST /v2p3/parents/{id}/welcome_email`

Send Welcome Email to a Parent

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.parents.sendParentWelcomeEmail({ id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Parents.SendParentWelcomeEmail(context.TODO(), ParentsSendParentWelcomeEmailParams{})
```

## academics

### createAcademicTerm

`POST /v2p3/school/programs/{program_code}/academic-years/{academic_year_id}/academic-terms`

Create Academic Term

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `program_code` | path | string | yes |
| `academic_year_id` | path | string | yes |

**Request body** (application/json): `AcademicTermRequest`

**Returns**: `AcademicTermResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.academics.createAcademicTerm({ programCode: "programCode_value", academicYearId: "academicYearId_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Academics.CreateAcademicTerm(context.TODO(), AcademicsCreateAcademicTermParams{})
```

### updateAcademicTerm

`PATCH /v2p3/school/programs/{program_code}/academic-years/{academic_year_id}/academic-terms/{id}`

Update Academic Term

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `program_code` | path | string | yes |
| `academic_year_id` | path | string | yes |
| `id` | path | string | yes |

**Request body** (application/json): `AcademicTermRequest`

**Returns**: `AcademicTermResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.academics.updateAcademicTerm({ programCode: "programCode_value", academicYearId: "academicYearId_value", id: "id_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Academics.UpdateAcademicTerm(context.TODO(), AcademicsUpdateAcademicTermParams{})
```

### deleteAcademicTerm

`DELETE /v2p3/school/programs/{program_code}/academic-years/{academic_year_id}/academic-terms/{id}`

Delete Academic Term

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `program_code` | path | string | yes |
| `academic_year_id` | path | integer | yes |
| `id` | path | integer | yes |

**Returns**: `AcademicTermResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.academics.deleteAcademicTerm({ programCode: "programCode_value", academicYearId: "academicYearId_value", id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Academics.DeleteAcademicTerm(context.TODO(), AcademicsDeleteAcademicTermParams{})
```

### retrieve

`GET /v2p3/school/programs/{program_code}/academic-years/{id}`

Retrieve Academic Year

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `program_code` | path | string | yes |
| `id` | path | integer | yes |

**Returns**: `AcademicYearResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.academics.retrieve({ programCode: "programCode_value", id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Academics.Retrieve(context.TODO(), AcademicsRetrieveParams{})
```

### createAcademicYear

`POST /v2p3/school/programs/{program_code}/academic-years`

Create Academic Year

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `program_code` | path | string | yes |

**Request body** (application/json): `AcademicYearRequest`

**Returns**: `AcademicYearResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.academics.createAcademicYear({ programCode: "programCode_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Academics.CreateAcademicYear(context.TODO(), AcademicsCreateAcademicYearParams{})
```

### getAssessmentTypes

`GET /v2p3/school/programs/{program_code}/assessment_types`

Retrieves Assessment Types

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `program_code` | path | string | yes |

**Returns**: `AssessmentTypesResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.academics.getAssessmentTypes({ programCode: "programCode_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Academics.GetAssessmentTypes(context.TODO(), AcademicsGetAssessmentTypesParams{})
```

### list

`GET /v2p3/school/programs/{program_code}/academic-years/{academic_year_id}/calendar`

Get Academic Year Calendar

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `program_code` | path | string | yes |
| `academic_year_id` | path | integer | yes |

**Returns**: `AcademicYearCalendarResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.academics.list({ programCode: "programCode_value", academicYearId: "academicYearId_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Academics.List(context.TODO(), AcademicsListParams{})
```

### getAllTermReports

`GET /v2p3/school/programs/{program}/reports`

Get All Term Reports

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `program` | path | string | yes |
| `academic_term_id` | query | integer | no |
| `type` | query | string | no |

**Returns**: `AcademicsGetAllTermReportsResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.academics.getAllTermReports({ program: "program_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Academics.GetAllTermReports(context.TODO(), AcademicsGetAllTermReportsParams{})
```

### getTermReport

`GET /v2p3/school/programs/{program}/reports/{id}`

Get Term Report

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `program` | path | string | yes |
| `id` | path | integer | yes |

**Returns**: `AcademicsGetTermReportResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.academics.getTermReport({ program: "program_value", id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Academics.GetTermReport(context.TODO(), AcademicsGetTermReportParams{})
```

### downloadTermReportFile

`GET /v2p3/school/programs/{program}/reports/{id}/download/{kind}`

Download Term Report File

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `program` | path | string | yes |
| `id` | path | integer | yes |
| `kind` | path | string | yes |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.academics.downloadTermReportFile({ program: "program_value", id: "id_value", kind: "kind_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Academics.DownloadTermReportFile(context.TODO(), AcademicsDownloadTermReportFileParams{})
```

### getSubjectGroups

`GET /v2p3/school/programs/{program_code}/subject-groups`

Retrieves Subject Groups

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `program_code` | path | string | yes |
| `page` | query | string | no |
| `per_page` | query | string | no |
| `modified_since` | query | string | no |

**Returns**: `SubjectGroupsResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.academics.getSubjectGroups({ programCode: "programCode_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Academics.GetSubjectGroups(context.TODO(), AcademicsGetSubjectGroupsParams{})
```

### createSubjectGroup

`POST /v2p3/school/programs/{program_code}/subject-groups`

Create Subject Group

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `program_code` | path | string | yes |

**Request body** (application/json): `SubjectGroupRequest`

**Returns**: `SubjectGroupResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.academics.createSubjectGroup({ programCode: "programCode_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Academics.CreateSubjectGroup(context.TODO(), AcademicsCreateSubjectGroupParams{})
```

### getSubjectGroup

`GET /v2p3/school/programs/{program_code}/subject-groups/{id}`

Get Subject Group

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `program_code` | path | string | yes |
| `id` | path | integer | yes |

**Returns**: `SubjectGroupResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.academics.getSubjectGroup({ programCode: "programCode_value", id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Academics.GetSubjectGroup(context.TODO(), AcademicsGetSubjectGroupParams{})
```

### updateSubjectGroup

`PATCH /v2p3/school/programs/{program_code}/subject-groups/{id}`

Update Subject Group

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `program_code` | path | string | yes |
| `id` | path | integer | yes |

**Request body** (application/json): `SubjectGroupRequest`

**Returns**: `SubjectGroupResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.academics.updateSubjectGroup({ programCode: "programCode_value", id: "id_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Academics.UpdateSubjectGroup(context.TODO(), AcademicsUpdateSubjectGroupParams{})
```

### destroySubjectGroup

`DELETE /v2p3/school/programs/{program_code}/subject-groups/{id}`

Remove Subject Group

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `program_code` | path | string | yes |
| `id` | path | integer | yes |

**Returns**: `SubjectGroupResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.academics.destroySubjectGroup({ programCode: "programCode_value", id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Academics.DestroySubjectGroup(context.TODO(), AcademicsDestroySubjectGroupParams{})
```

### getSubjects

`GET /v2p3/school/programs/{program_code}/subjects`

Retrieves Subjects

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `program_code` | path | string | yes |
| `page` | query | string | no |
| `per_page` | query | string | no |

**Returns**: `SubjectsResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.academics.getSubjects({ programCode: "programCode_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Academics.GetSubjects(context.TODO(), AcademicsGetSubjectsParams{})
```

### createSubject

`POST /v2p3/school/programs/{program_code}/subjects`

Creates Subject

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `program_code` | path | string | yes |

**Request body** (application/json): `SubjectRequest`

**Returns**: `SubjectResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.academics.createSubject({ programCode: "programCode_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Academics.CreateSubject(context.TODO(), AcademicsCreateSubjectParams{})
```

### getSubject

`GET /v2p3/school/programs/{program_code}/subjects/{id}`

Retrieves Subject

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `program_code` | path | string | yes |
| `id` | path | integer | yes |

**Returns**: `SubjectResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.academics.getSubject({ programCode: "programCode_value", id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Academics.GetSubject(context.TODO(), AcademicsGetSubjectParams{})
```

### updateSubject

`PUT /v2p3/school/programs/{program_code}/subjects/{id}`

Updates Subject

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `program_code` | path | string | yes |
| `id` | path | integer | yes |

**Request body** (application/json): `SubjectRequest`

**Returns**: `SubjectResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.academics.updateSubject({ programCode: "programCode_value", id: "id_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Academics.UpdateSubject(context.TODO(), AcademicsUpdateSubjectParams{})
```

### deleteSubject

`DELETE /v2p3/school/programs/{program_code}/subjects/{id}`

Delete Subject

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `program_code` | path | string | yes |
| `id` | path | integer | yes |

**Returns**: `SubjectResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.academics.deleteSubject({ programCode: "programCode_value", id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Academics.DeleteSubject(context.TODO(), AcademicsDeleteSubjectParams{})
```

### getSchool

`GET /v2p3/school`

Get School Details

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.academics.getSchool();
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Academics.GetSchool(context.TODO())
```

### listAcademicYears

`GET /v2p3/school/academic-years`

Get Academic Years

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `program_code` | query | string | no |
| `active` | query | boolean | no |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.academics.listAcademicYears();
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Academics.ListAcademicYears(context.TODO())
```

### listGrades

`GET /v2p3/school/grades`

Get School Grades

**Returns**: `AcademicsListGradesResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.academics.listGrades();
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Academics.ListGrades(context.TODO())
```

### listSubjects

`GET /v2p3/school/subjects`

Get School Subjects

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.academics.listSubjects();
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Academics.ListSubjects(context.TODO())
```

### listSchoolTermGradeScales

`GET /v2p3/school/term-grade-scales`

Get School Term Grade Scales

**Returns**: `AcademicsListSchoolTermGradeScalesResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.academics.listSchoolTermGradeScales();
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Academics.ListSchoolTermGradeScales(context.TODO())
```

### listTermRubrics

`GET /v2p3/school/term-rubrics`

Get School Term Grade Rubrics

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.academics.listTermRubrics();
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Academics.ListTermRubrics(context.TODO())
```

## students

### updateStudentAvatar

`PUT /v2p3/students/{id}/avatar`

Update Student Avatar

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Request body** (application/json): `StudentsUpdateStudentAvatarRequest`

**Returns**: `StudentsUpdateStudentAvatarResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.students.updateStudentAvatar({ id: "id_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Students.UpdateStudentAvatar(context.TODO(), StudentsUpdateStudentAvatarParams{})
```

### deleteStudentAvatar

`DELETE /v2p3/students/{id}/avatar`

Delete Student Avatar

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Returns**: `StudentsDeleteStudentAvatarResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.students.deleteStudentAvatar({ id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Students.DeleteStudentAvatar(context.TODO(), StudentsDeleteStudentAvatarParams{})
```

### listStudents

`GET /v2p3/students`

Get all Students

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `ids[]` | query | integer[] | no |
| `archived` | query | boolean | no |
| `status` | query | string | no |
| `modified_since` | query | string | no |
| `year_group_ids` | query | integer[] | no |
| `year_group_ids[]` | query | integer[] | no |
| `homeroom_advisor_ids` | query | integer[] | no |
| `homeroom_advisor_ids[]` | query | integer[] | no |
| `page` | query | string | no |
| `per_page` | query | string | no |
| `deleted_since` | query | string | no |
| `q` | query | string | no |
| `ids` | query | integer[] | no |

**Returns**: `StudentsListStudentsResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.students.listStudents();
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Students.ListStudents(context.TODO())
```

### createStudent

`POST /v2p3/students`

Create New Student

**Request body** (application/json): `StudentsCreateStudentRequest`

**Returns**: `StudentsCreateStudentResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.students.createStudent({ body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Students.CreateStudent(context.TODO(), StudentsCreateStudentParams{})
```

### getStudentById

`GET /v2p3/students/{id}`

Get a Student

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Returns**: `StudentsGetStudentByIdResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.students.getStudentById({ id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Students.GetStudentById(context.TODO(), StudentsGetStudentByIdParams{})
```

### updateStudent

`PATCH /v2p3/students/{id}`

Update a Student

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Request body** (application/json): `StudentsUpdateStudentRequest`

**Returns**: `StudentsUpdateStudentResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.students.updateStudent({ id: "id_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Students.UpdateStudent(context.TODO(), StudentsUpdateStudentParams{})
```

### archiveStudent

`PUT /v2p3/students/{id}/archive`

Archive a Student

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Request body** (application/json): `StudentsArchiveStudentRequest`

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.students.archiveStudent({ id: "id_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Students.ArchiveStudent(context.TODO(), StudentsArchiveStudentParams{})
```

### unarchiveStudent

`PUT /v2p3/students/{id}/unarchive`

Unarchive a Student

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.students.unarchiveStudent({ id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Students.UnarchiveStudent(context.TODO(), StudentsUnarchiveStudentParams{})
```

### sendStudentWelcomeEmail

`POST /v2p3/students/{id}/welcome_email`

Send Welcome Email to a Student

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.students.sendStudentWelcomeEmail({ id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Students.SendStudentWelcomeEmail(context.TODO(), StudentsSendStudentWelcomeEmailParams{})
```

## onlineAssessment

### updateOnlineAssessment

`PATCH /v2p3/tasks/{task_id}/online_assessments/{assess_prep_uid}`

Update an Online Assessment

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `task_id` | path | integer | yes |
| `assess_prep_uid` | path | string | yes |

**Request body** (application/json): `OnlineAssessmentUpdateOnlineAssessmentRequest`

**Returns**: `OnlineAssessmentUpdateOnlineAssessmentResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.onlineAssessment.updateOnlineAssessment({ taskId: "taskId_value", assessPrepUid: "assessPrepUid_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.OnlineAssessment.UpdateOnlineAssessment(context.TODO(), OnlineAssessmentUpdateOnlineAssessmentParams{})
```

## teachers

### updateTeacherAvatar

`PUT /v2p3/teachers/{id}/avatar`

Update Teacher Avatar

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Request body** (application/json): `TeachersUpdateTeacherAvatarRequest`

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.teachers.updateTeacherAvatar({ id: "id_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Teachers.UpdateTeacherAvatar(context.TODO(), TeachersUpdateTeacherAvatarParams{})
```

### deleteTeacherAvatar

`DELETE /v2p3/teachers/{id}/avatar`

Delete Teacher Avatar

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.teachers.deleteTeacherAvatar({ id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Teachers.DeleteTeacherAvatar(context.TODO(), TeachersDeleteTeacherAvatarParams{})
```

### listTeachers

`GET /v2p3/teachers`

Get all Teachers

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `ids[]` | query | integer[] | no |
| `archived` | query | boolean | no |
| `modified_since` | query | string | no |
| `page` | query | string | no |
| `per_page` | query | string | no |
| `deleted_since` | query | string | no |
| `q` | query | string | no |

**Returns**: `TeachersListTeachersResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.teachers.listTeachers();
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Teachers.ListTeachers(context.TODO())
```

### createTeacher

`POST /v2p3/teachers`

Create New Teacher

**Request body** (application/json): `TeachersCreateTeacherRequest`

**Returns**: `TeachersCreateTeacherResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.teachers.createTeacher({ body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Teachers.CreateTeacher(context.TODO(), TeachersCreateTeacherParams{})
```

### getTeacherById

`GET /v2p3/teachers/{id}`

Get a Teacher

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Returns**: `TeachersGetTeacherByIdResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.teachers.getTeacherById({ id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Teachers.GetTeacherById(context.TODO(), TeachersGetTeacherByIdParams{})
```

### updateTeacher

`PATCH /v2p3/teachers/{id}`

Update a Teacher

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Request body** (application/json): `TeachersUpdateTeacherRequest`

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.teachers.updateTeacher({ id: "id_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Teachers.UpdateTeacher(context.TODO(), TeachersUpdateTeacherParams{})
```

### archiveTeacher

`PUT /v2p3/teachers/{id}/archive`

Archive a Teacher

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.teachers.archiveTeacher({ id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Teachers.ArchiveTeacher(context.TODO(), TeachersArchiveTeacherParams{})
```

### unarchiveTeacher

`PUT /v2p3/teachers/{id}/unarchive`

Unarchive a Teacher

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.teachers.unarchiveTeacher({ id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Teachers.UnarchiveTeacher(context.TODO(), TeachersUnarchiveTeacherParams{})
```

### listTeacherClassesMemberships

`GET /v2p3/teachers/{id}/classes`

Get teacher Classes Memberships

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |
| `show_on_reports` | query | boolean | no |
| `archived` | query | boolean | no |

**Returns**: `TeachersListTeacherClassesMembershipsResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.teachers.listTeacherClassesMemberships({ id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Teachers.ListTeacherClassesMemberships(context.TODO(), TeachersListTeacherClassesMembershipsParams{})
```

### listTeacherGroupsMemberships

`GET /v2p3/teachers/{id}/groups`

Get teacher Groups Memberships

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |
| `archived` | query | boolean | no |

**Returns**: `TeachersListTeacherGroupsMembershipsResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.teachers.listTeacherGroupsMemberships({ id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Teachers.ListTeacherGroupsMemberships(context.TODO(), TeachersListTeacherGroupsMembershipsParams{})
```

### sendTeacherWelcomeEmail

`POST /v2p3/teachers/{id}/welcome_email`

Send Welcome Email to a Teacher

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.teachers.sendTeacherWelcomeEmail({ id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Teachers.SendTeacherWelcomeEmail(context.TODO(), TeachersSendTeacherWelcomeEmailParams{})
```

## unitClassAssignments

### listUnitClassAssignments

`GET /v2p3/unit-class-assignments`

List Unit-Class Assignments

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `modified_since` | query | string | no |
| `deleted_since` | query | string | no |
| `archived` | query | boolean | no |
| `page` | query | integer | no |
| `per_page` | query | integer | no |

**Returns**: `UnitClassAssignmentsListUnitClassAssignmentsResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.unitClassAssignments.listUnitClassAssignments();
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.UnitClassAssignments.ListUnitClassAssignments(context.TODO())
```

## units

### listUnits

`GET /v2p3/units`

Get all Units

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `modified_since` | query | string | no |
| `page` | query | string | no |
| `per_page` | query | string | no |
| `archived` | query | boolean | no |
| `class_ids` | query | string | no |

**Returns**: `UnitsListUnitsResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.units.listUnits();
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Units.ListUnits(context.TODO())
```

### getUnitById

`GET /v2p3/units/{id}`

Get a Unit

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Returns**: `UnitsGetUnitByIdResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.units.getUnitById({ id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Units.GetUnitById(context.TODO(), UnitsGetUnitByIdParams{})
```

## projects

### listYearGroupCasExperiencesStudents

`GET /v2p3/year-groups/{id}/projects/cas/experiences/students`

Get CAS Experiences for Students in a Year Group

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |
| `student_ids[]` | query | integer[] | no |
| `page` | query | integer | no |
| `per_page` | query | integer | no |

**Returns**: `CasExperiencesStudentsResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.projects.listYearGroupCasExperiencesStudents({ id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Projects.ListYearGroupCasExperiencesStudents(context.TODO(), ProjectsListYearGroupCasExperiencesStudentsParams{})
```

### getYearGroupCas

`GET /v2p3/year-groups/{id}/projects/cas`

Get CAS settings for a Year Group

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Returns**: `CasSettings`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.projects.getYearGroupCas({ id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Projects.GetYearGroupCas(context.TODO(), ProjectsGetYearGroupCasParams{})
```

### listYearGroupPblProposalStudentsDetails

`GET /v2p3/year-groups/{year_group_id}/projects/pbl/{project_id}/proposal/students`

Get Student Proposal Progress for a Year Group PBL

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `year_group_id` | path | integer | yes |
| `project_id` | path | integer | yes |
| `archived` | query | boolean | no |
| `include_archived_students` | query | boolean | no |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.projects.listYearGroupPblProposalStudentsDetails({ yearGroupId: "yearGroupId_value", projectId: "projectId_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Projects.ListYearGroupPblProposalStudentsDetails(context.TODO(), ProjectsListYearGroupPblProposalStudentsDetailsParams{})
```

### listYearGroupPblReflectionsStudentsDetails

`GET /v2p3/year-groups/{year_group_id}/projects/pbl/{project_id}/reflections/students`

Get Student Reflection Progress for a Year Group PBL

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `year_group_id` | path | integer | yes |
| `project_id` | path | integer | yes |
| `archived` | query | boolean | no |
| `include_archived_students` | query | boolean | no |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.projects.listYearGroupPblReflectionsStudentsDetails({ yearGroupId: "yearGroupId_value", projectId: "projectId_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Projects.ListYearGroupPblReflectionsStudentsDetails(context.TODO(), ProjectsListYearGroupPblReflectionsStudentsDetailsParams{})
```

### listYearGroupPblTodosStudentsDetails

`GET /v2p3/year-groups/{year_group_id}/projects/pbl/{project_id}/todos/students`

Get Student Personal Todos and Deadlines for a Year Group PBL

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `year_group_id` | path | integer | yes |
| `project_id` | path | integer | yes |
| `archived` | query | boolean | no |
| `include_archived_students` | query | boolean | no |
| `page` | query | integer | no |
| `per_page` | query | integer | no |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.projects.listYearGroupPblTodosStudentsDetails({ yearGroupId: "yearGroupId_value", projectId: "projectId_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Projects.ListYearGroupPblTodosStudentsDetails(context.TODO(), ProjectsListYearGroupPblTodosStudentsDetailsParams{})
```

### listYearGroupPblJournalStudentsDetails

`GET /v2p3/year-groups/{year_group_id}/projects/pbl/{project_id}/journal/students`

Get Student Journal Entries for a Year Group PBL

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `year_group_id` | path | integer | yes |
| `project_id` | path | integer | yes |
| `archived` | query | boolean | no |
| `include_archived_students` | query | boolean | no |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.projects.listYearGroupPblJournalStudentsDetails({ yearGroupId: "yearGroupId_value", projectId: "projectId_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Projects.ListYearGroupPblJournalStudentsDetails(context.TODO(), ProjectsListYearGroupPblJournalStudentsDetailsParams{})
```

### listYearGroupPblDocumentsStudentsDetails

`GET /v2p3/year-groups/{year_group_id}/projects/pbl/{project_id}/documents/students`

Get Student Documents for a Year Group PBL

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `year_group_id` | path | integer | yes |
| `project_id` | path | integer | yes |
| `archived` | query | boolean | no |
| `include_archived_students` | query | boolean | no |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.projects.listYearGroupPblDocumentsStudentsDetails({ yearGroupId: "yearGroupId_value", projectId: "projectId_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Projects.ListYearGroupPblDocumentsStudentsDetails(context.TODO(), ProjectsListYearGroupPblDocumentsStudentsDetailsParams{})
```

### listYearGroupPblPresentationStudentsDetails

`GET /v2p3/year-groups/{year_group_id}/projects/pbl/{project_id}/presentation/students`

Get Student Presentations for a Year Group PBL

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `year_group_id` | path | integer | yes |
| `project_id` | path | integer | yes |
| `archived` | query | boolean | no |
| `include_archived_students` | query | boolean | no |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.projects.listYearGroupPblPresentationStudentsDetails({ yearGroupId: "yearGroupId_value", projectId: "projectId_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Projects.ListYearGroupPblPresentationStudentsDetails(context.TODO(), ProjectsListYearGroupPblPresentationStudentsDetailsParams{})
```

### listYearGroupPblNotesAndInterviewsStudentsDetails

`GET /v2p3/year-groups/{year_group_id}/projects/pbl/{project_id}/notes_and_interviews/students`

Get Student Notes & Interviews for a Year Group PBL

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `year_group_id` | path | integer | yes |
| `project_id` | path | integer | yes |
| `archived` | query | boolean | no |
| `include_archived_students` | query | boolean | no |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.projects.listYearGroupPblNotesAndInterviewsStudentsDetails({ yearGroupId: "yearGroupId_value", projectId: "projectId_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Projects.ListYearGroupPblNotesAndInterviewsStudentsDetails(context.TODO(), ProjectsListYearGroupPblNotesAndInterviewsStudentsDetailsParams{})
```

### listYearGroupProjectBasedLearningTemplates

`GET /v2p3/year-groups/{id}/projects/pbl`

Get all Year Group Project Based Learning

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |
| `archived` | query | boolean | no |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.projects.listYearGroupProjectBasedLearningTemplates({ id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.Projects.ListYearGroupProjectBasedLearningTemplates(context.TODO(), ProjectsListYearGroupProjectBasedLearningTemplatesParams{})
```

## yearGroups

### listYearGroupServiceLearningCategoriesStudents

`GET /v2p3/year-groups/{id}/projects/sl/categories/students`

Get Service Learning Categories for Students in a Year Group

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |
| `student_ids[]` | query | integer[] | no |
| `page` | query | integer | no |
| `per_page` | query | integer | no |

**Returns**: `ServiceLearningCategoriesStudentsResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.yearGroups.listYearGroupServiceLearningCategoriesStudents({ id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.YearGroups.ListYearGroupServiceLearningCategoriesStudents(context.TODO(), YearGroupsListYearGroupServiceLearningCategoriesStudentsParams{})
```

### listYearGroupServiceLearningOutcomesStudents

`GET /v2p3/year-groups/{id}/projects/sl/outcomes/students`

Get Service Learning Outcomes for Students in a Year Group

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |
| `student_ids[]` | query | integer[] | no |
| `page` | query | integer | no |
| `per_page` | query | integer | no |

**Returns**: `ServiceLearningOutcomesStudentsResponse`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.yearGroups.listYearGroupServiceLearningOutcomesStudents({ id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.YearGroups.ListYearGroupServiceLearningOutcomesStudents(context.TODO(), YearGroupsListYearGroupServiceLearningOutcomesStudentsParams{})
```

### getYearGroupServiceLearning

`GET /v2p3/year-groups/{id}/projects/sl`

Get Service Learning settings for a Year Group

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Returns**: `ServiceLearningSettings`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.yearGroups.getYearGroupServiceLearning({ id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.YearGroups.GetYearGroupServiceLearning(context.TODO(), YearGroupsGetYearGroupServiceLearningParams{})
```

### listYearGroups

`GET /v2p3/year-groups`

Get all Year Groups

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `modified_since` | query | string | no |
| `page` | query | string | no |
| `per_page` | query | string | no |
| `archived` | query | boolean | no |
| `student_ids` | query | integer[] | no |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.yearGroups.listYearGroups();
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.YearGroups.ListYearGroups(context.TODO())
```

### listStudentsFromYearGroups

`GET /v2p3/year-groups/{id}/students`

Get Students for a Year Group

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |
| `page` | query | string | no |
| `per_page` | query | string | no |
| `student_ids` | query | integer[] | no |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.yearGroups.listStudentsFromYearGroups({ id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.YearGroups.ListStudentsFromYearGroups(context.TODO(), YearGroupsListStudentsFromYearGroupsParams{})
```

### addStudentToYearGroup

`POST /v2p3/year-groups/{id}/add_students`

Add Students to a Year Group

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Request body** (application/json): `YearGroupsAddStudentToYearGroupRequest`

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.yearGroups.addStudentToYearGroup({ id: "id_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.YearGroups.AddStudentToYearGroup(context.TODO(), YearGroupsAddStudentToYearGroupParams{})
```

### removeStudentToYearGroup

`POST /v2p3/year-groups/{id}/remove_students`

Remove Students from a Year Group

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Request body** (application/json): `YearGroupsRemoveStudentToYearGroupRequest`

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.yearGroups.removeStudentToYearGroup({ id: "id_value", body: { /* ... */ } });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.YearGroups.RemoveStudentToYearGroup(context.TODO(), YearGroupsRemoveStudentToYearGroupParams{})
```

### listAdvisorsFromYearGroup

`GET /v2p3/year-groups/{id}/advisors`

Get Advisors

| Parameter | In | Type | Required |
| --- | --- | --- | --- |
| `id` | path | integer | yes |

**Returns**: `void`

```ts
import { ManageBacPlus } from "@veritymedia/managebac-sdk";

const client = new ManageBacPlus();
const result = await client.yearGroups.listAdvisorsFromYearGroup({ id: "id_value" });
console.log(result);
```
```go
client := managebacplus.NewClient()
result, err := client.YearGroups.ListAdvisorsFromYearGroup(context.TODO(), YearGroupsListAdvisorsFromYearGroupParams{})
```
