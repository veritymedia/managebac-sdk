#!/usr/bin/env node
import http from "node:http";
import { createHash } from "node:crypto";
import { pathToFileURL } from "node:url";

const routes = [
  {
    "id": "listGradesForClass",
    "method": "GET",
    "path": "/v2p3/classes/{class_id}/assessments/term/{term_id}/grades",
    "regex": "^/v2p3/classes/[^/]+/assessments/term/[^/]+/grades$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listTermGradesForClass",
    "method": "GET",
    "path": "/v2p3/classes/{class_id}/assessments/term/{term_id}/term-grades",
    "regex": "^/v2p3/classes/[^/]+/assessments/term/[^/]+/term-grades$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "SetAttendanceSettings",
    "method": "PUT",
    "path": "/v2p3/classes/{class_id}/academic-years/{academic_year_id}/attendance/settings",
    "regex": "^/v2p3/classes/[^/]+/academic-years/[^/]+/attendance/settings$",
    "status": 204,
    "requestBody": {
      "settings": [
        {
          "period": 1,
          "day": 1,
          "location": "string"
        }
      ]
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listCategories",
    "method": "GET",
    "path": "/v2p3/school/academic-years/{academic_year_id}/attendance_categories",
    "regex": "^/v2p3/school/academic-years/[^/]+/attendance_categories$",
    "status": 200,
    "body": {
      "categories": [
        {
          "categories": [
            {
              "id": null,
              "status": 1,
              "label": "string",
              "abbreviation": "string",
              "enabled": null,
              "color_code": "string"
            }
          ]
        }
      ]
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listTokenResources",
    "method": "GET",
    "path": "/v2p3/auth/permissions",
    "regex": "^/v2p3/auth/permissions$",
    "status": 200,
    "body": {
      "permissions": [
        "string"
      ]
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "createOAuthToken",
    "method": "POST",
    "path": "/oauth/token",
    "regex": "^/oauth/token$",
    "status": 200,
    "body": {
      "access_token": "string",
      "token_type": "Bearer",
      "expires_in": 1,
      "scope": "string",
      "created_at": 1
    },
    "requestBody": {
      "grant_type": "client_credentials",
      "client_id": "string",
      "client_secret": "string",
      "scope": "string"
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "showAvatarByID",
    "method": "GET",
    "path": "/v2p3/avatars/{id}",
    "regex": "^/v2p3/avatars/[^/]+$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "ping",
    "method": "GET",
    "path": "/v2p3/ping",
    "regex": "^/v2p3/ping$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listBehaviorNotes",
    "method": "GET",
    "path": "/v2p3/behavior/notes",
    "regex": "^/v2p3/behavior/notes$",
    "status": 200,
    "body": {
      "behavior_notes": [
        {
          "id": "mock_id",
          "student_id": "string",
          "email": "dev@example.com",
          "first_name": "string",
          "last_name": "string",
          "grade": "string",
          "incident_time": "string",
          "behavior_type": "string",
          "notes": "string",
          "next_step": "string",
          "next_step_date": "string",
          "reported_by": "string",
          "homeroom_advisor": "string"
        }
      ],
      "meta": {
        "current_page": 1,
        "total_pages": 1,
        "total_count": 1,
        "per_page": 1
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listCriteriaforClass",
    "method": "GET",
    "path": "/v2p3/classes/{id}/criteria",
    "regex": "^/v2p3/classes/[^/]+/criteria$",
    "status": 200,
    "body": {
      "criteria": [
        {
          "id": "mock_id",
          "title": "string",
          "descriptors": [
            {
              "value": "string",
              "descriptor": "string"
            }
          ]
        }
      ]
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "getStudentsForClass",
    "method": "GET",
    "path": "/v2p3/classes/{class_id}/students",
    "regex": "^/v2p3/classes/[^/]+/students$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "bulkUpdateStudentsFromClass",
    "method": "PATCH",
    "path": "/v2p3/classes/{class_id}/students",
    "regex": "^/v2p3/classes/[^/]+/students$",
    "status": 204,
    "requestBody": {
      "students": [
        {
          "id": "mock_id",
          "level": "HL"
        }
      ]
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listClassTaskCategories",
    "method": "GET",
    "path": "/v2p3/classes/{id}/task_categories",
    "regex": "^/v2p3/classes/[^/]+/task_categories$",
    "status": 200,
    "body": {
      "task_categories": [
        {
          "id": "mock_id",
          "name": "string",
          "background_color": "string",
          "color": "string",
          "weight": 1
        }
      ]
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "downloadSubmissionFile",
    "method": "GET",
    "path": "/v2p3/classes/{class_id}/tasks/{task_id}/submissions/{student_id}/files/{asset_id}",
    "regex": "^/v2p3/classes/[^/]+/tasks/[^/]+/submissions/[^/]+/files/[^/]+$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listTaskSubmissions",
    "method": "GET",
    "path": "/v2p3/classes/{class_id}/tasks/{task_id}/submissions",
    "regex": "^/v2p3/classes/[^/]+/tasks/[^/]+/submissions$",
    "status": 200,
    "body": {
      "submissions": [
        {
          "id": "mock_id",
          "task_id": 1,
          "student_id": 1,
          "mechanism": "dropbox",
          "submitted_at": null,
          "updated_at": "string",
          "locked": true,
          "status": null,
          "files": [
            {
              "id": "mock_id",
              "filename": "string",
              "file_size": 1,
              "content_type": "string",
              "uploaded_at": "string",
              "turnitin_score": null,
              "download_path": "string"
            }
          ]
        }
      ],
      "meta": {
        "current_page": 1,
        "total_pages": 1,
        "total_count": 1,
        "per_page": 1
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "getTaskSubmission",
    "method": "GET",
    "path": "/v2p3/classes/{class_id}/tasks/{task_id}/submissions/{student_id}",
    "regex": "^/v2p3/classes/[^/]+/tasks/[^/]+/submissions/[^/]+$",
    "status": 200,
    "body": {
      "submission": {
        "id": "mock_id",
        "task_id": 1,
        "student_id": 1,
        "mechanism": "dropbox",
        "submitted_at": null,
        "updated_at": "string",
        "locked": true,
        "status": null,
        "files": [
          {
            "id": "mock_id",
            "filename": "string",
            "file_size": 1,
            "content_type": "string",
            "uploaded_at": "string",
            "turnitin_score": null,
            "download_path": "string"
          }
        ]
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listTasksforClass",
    "method": "GET",
    "path": "/v2p3/classes/{id}/tasks",
    "regex": "^/v2p3/classes/[^/]+/tasks$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "getTasksByIDforClass",
    "method": "GET",
    "path": "/v2p3/classes/{class_id}/tasks/{id}",
    "regex": "^/v2p3/classes/[^/]+/tasks/[^/]+$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "updateTaskforClass",
    "method": "PUT",
    "path": "/v2p3/classes/{class_id}/tasks/{id}",
    "regex": "^/v2p3/classes/[^/]+/tasks/[^/]+$",
    "status": 204,
    "requestBody": {
      "core_task": {
        "author_id": 1,
        "name": "string",
        "due_date": "2026-05-25T00:00:00.000Z",
        "assessment_type_id": 1,
        "task_category_id": 1,
        "notify_group": true,
        "notify_parents": true,
        "unit_id": 1,
        "lesson_experience_id": 1,
        "hl": true,
        "sl": true,
        "notes": "string",
        "enable_dropbox": true,
        "enable_turnitin": true,
        "dropbox_opening_days": 1,
        "assigned_student_ids": [
          1
        ],
        "draft": true,
        "hide_assessment_results": true,
        "phase": 1,
        "assessments": {
          "criteria": {
            "enabled": true,
            "criterion_ids": [
              1
            ]
          },
          "points": {
            "enabled": true,
            "max_points": 1
          },
          "binary": {
            "enabled": true
          },
          "comment": {
            "enabled": true
          }
        }
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "partialUpdateTaskforClass",
    "method": "PATCH",
    "path": "/v2p3/classes/{class_id}/tasks/{id}",
    "regex": "^/v2p3/classes/[^/]+/tasks/[^/]+$",
    "status": 200,
    "body": {
      "task": {}
    },
    "requestBody": {
      "core_task": {
        "author_id": 1,
        "name": "string",
        "due_date": "2026-05-25T00:00:00.000Z",
        "assessment_type_id": 1,
        "task_category_id": 1,
        "notify_group": true,
        "notify_parents": true,
        "unit_id": 1,
        "lesson_experience_id": 1,
        "hl": true,
        "sl": true,
        "notes": "string",
        "enable_dropbox": true,
        "enable_turnitin": true,
        "dropbox_opening_days": 1,
        "assigned_student_ids": [
          1
        ],
        "draft": true,
        "hide_assessment_results": true,
        "phase": 1,
        "assessments": {
          "criteria": {
            "enabled": true,
            "criterion_ids": [
              1
            ]
          },
          "points": {
            "enabled": true,
            "max_points": 1
          },
          "binary": {
            "enabled": true
          },
          "comment": {
            "enabled": true
          }
        }
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "deleteTaskforClass",
    "method": "DELETE",
    "path": "/v2p3/classes/{class_id}/tasks/{id}",
    "regex": "^/v2p3/classes/[^/]+/tasks/[^/]+$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listStudentAssessmentResultsForClassTask",
    "method": "GET",
    "path": "/v2p3/classes/{class_id}/tasks/{id}/students",
    "regex": "^/v2p3/classes/[^/]+/tasks/[^/]+/students$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "getClassTimetable",
    "method": "GET",
    "path": "/v2p3/classes/{class_id}/timetable",
    "regex": "^/v2p3/classes/[^/]+/timetable$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listClasses",
    "method": "GET",
    "path": "/v2p3/classes",
    "regex": "^/v2p3/classes$",
    "status": 200,
    "body": {
      "classes": [
        {
          "id": "mock_id",
          "name": "string",
          "description": "string",
          "language": "string",
          "uniq_id": "string",
          "class_section": "string",
          "start_term_id": 1,
          "end_term_id": 1,
          "created_at": "string",
          "updated_at": "string",
          "grade": "string",
          "grade_number": 1,
          "applicable_levels": [
            "string"
          ],
          "program": "string",
          "program_code": "string",
          "subject_id": 1,
          "subject_name": "string",
          "subject_group": "string",
          "subject_option": "string",
          "lock_memberships": "string",
          "archived": true,
          "subjects": [
            {
              "id": "mock_id",
              "name": "string",
              "subject_group_id": 1,
              "subject_group": "string"
            }
          ],
          "teachers": [
            {
              "teacher_id": 1,
              "show_on_reports": true,
              "teacher_archived": true
            }
          ]
        }
      ],
      "meta": {
        "current_page": 1,
        "total_pages": 1,
        "total_count": 1,
        "per_page": 1
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "createClass",
    "method": "POST",
    "path": "/v2p3/classes",
    "regex": "^/v2p3/classes$",
    "status": 200,
    "body": {
      "id": "mock_id",
      "name": "string",
      "description": "string",
      "language": "string",
      "uniq_id": "string",
      "class_section": "string",
      "start_term_id": 1,
      "end_term_id": 1,
      "created_at": "string",
      "updated_at": "string",
      "grade": "string",
      "grade_number": 1,
      "applicable_levels": [
        "string"
      ],
      "program": "string",
      "program_code": "string",
      "subject_id": 1,
      "subject_name": "string",
      "subject_group": "string",
      "subject_option": "string",
      "lock_memberships": "string",
      "archived": true,
      "subjects": [
        {
          "id": "mock_id",
          "name": "string",
          "subject_group_id": 1,
          "subject_group": "string"
        }
      ],
      "teachers": [
        {
          "teacher_id": 1,
          "show_on_reports": true,
          "teacher_archived": true
        }
      ]
    },
    "requestBody": {
      "start_term_id": 1,
      "end_term_id": 1,
      "subject_id": 1,
      "program": "string",
      "grade_number": 1,
      "name": "string",
      "description": "string",
      "language": "string",
      "uniq_id": "string",
      "class_section": "string",
      "subject_ids": [
        1
      ],
      "sl": true,
      "hl": true,
      "subject_option": "string",
      "lock_memberships": "string"
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "upsertClasses",
    "method": "PATCH",
    "path": "/v2p3/classes",
    "regex": "^/v2p3/classes$",
    "status": 200,
    "body": [
      {
        "index": 1,
        "errors": {},
        "status": "string"
      }
    ],
    "requestBody": {
      "classes": [
        {
          "id": "mock_id",
          "archived": true,
          "name": "string",
          "description": "string",
          "language": "string",
          "uniq_id": "string",
          "class_section": "string",
          "subject_ids": [
            1
          ],
          "sl": true,
          "hl": true,
          "subject_option": "string",
          "lock_memberships": "string"
        }
      ]
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "getClassByID",
    "method": "GET",
    "path": "/v2p3/classes/{id}",
    "regex": "^/v2p3/classes/[^/]+$",
    "status": 200,
    "body": {
      "class": {
        "id": "mock_id",
        "name": "string",
        "description": "string",
        "language": "string",
        "uniq_id": "string",
        "class_section": "string",
        "start_term_id": 1,
        "end_term_id": 1,
        "created_at": "string",
        "updated_at": "string",
        "grade": "string",
        "grade_number": 1,
        "applicable_levels": [
          "string"
        ],
        "program": "string",
        "program_code": "string",
        "subject_id": 1,
        "subject_name": "string",
        "subject_group": "string",
        "subject_option": "string",
        "lock_memberships": "string",
        "archived": true,
        "subjects": [
          {
            "id": "mock_id",
            "name": "string",
            "subject_group_id": 1,
            "subject_group": "string"
          }
        ],
        "teachers": [
          {
            "teacher_id": 1,
            "show_on_reports": true,
            "teacher_archived": true
          }
        ]
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "updateClass",
    "method": "PATCH",
    "path": "/v2p3/classes/{id}",
    "regex": "^/v2p3/classes/[^/]+$",
    "status": 200,
    "body": {
      "id": "mock_id",
      "name": "string",
      "description": "string",
      "language": "string",
      "uniq_id": "string",
      "class_section": "string",
      "start_term_id": 1,
      "end_term_id": 1,
      "created_at": "string",
      "updated_at": "string",
      "grade": "string",
      "grade_number": 1,
      "applicable_levels": [
        "string"
      ],
      "program": "string",
      "program_code": "string",
      "subject_id": 1,
      "subject_name": "string",
      "subject_group": "string",
      "subject_option": "string",
      "lock_memberships": "string",
      "archived": true,
      "subjects": [
        {
          "id": "mock_id",
          "name": "string",
          "subject_group_id": 1,
          "subject_group": "string"
        }
      ],
      "teachers": [
        {
          "teacher_id": 1,
          "show_on_reports": true,
          "teacher_archived": true
        }
      ]
    },
    "requestBody": {
      "archived": true,
      "name": "string",
      "description": "string",
      "language": "string",
      "uniq_id": "string",
      "class_section": "string",
      "subject_ids": [
        1
      ],
      "sl": true,
      "hl": true,
      "subject_option": "string",
      "lock_memberships": "string"
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "addStudentsToClass",
    "method": "POST",
    "path": "/v2p3/classes/{id}/add_students",
    "regex": "^/v2p3/classes/[^/]+/add_students$",
    "status": 204,
    "requestBody": {
      "student_ids": [
        1
      ]
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "removeStudentsFromClass",
    "method": "POST",
    "path": "/v2p3/classes/{id}/remove_students",
    "regex": "^/v2p3/classes/[^/]+/remove_students$",
    "status": 204,
    "requestBody": {
      "student_ids": [
        1
      ]
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "getAttendanceForClass",
    "method": "GET",
    "path": "/v2p3/classes/{id}/attendance/term/{term_id}",
    "regex": "^/v2p3/classes/[^/]+/attendance/term/[^/]+$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "getClassAttendanceForDate",
    "method": "GET",
    "path": "/v2p3/classes/{id}/attendance/date/{date}",
    "regex": "^/v2p3/classes/[^/]+/attendance/date/[^/]+$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "setClassAttendanceForStudents",
    "method": "PUT",
    "path": "/v2p3/classes/{id}/attendance",
    "regex": "^/v2p3/classes/[^/]+/attendance$",
    "status": 204,
    "requestBody": {
      "attendances": [
        {
          "student_id": 1,
          "date": "2026-05-25",
          "period": 1,
          "status": 1,
          "notes": "string"
        }
      ]
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "getClassTerms",
    "method": "GET",
    "path": "/v2p3/classes/{id}/terms",
    "regex": "^/v2p3/classes/[^/]+/terms$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "getDateExcusals",
    "method": "GET",
    "path": "/v2p3/students/excusals/{date}",
    "regex": "^/v2p3/students/excusals/[^/]+$",
    "status": 200,
    "body": {
      "excusals": [
        {
          "excusals": [
            {
              "id": "mock_id",
              "student_id": 1,
              "parent_id": 1,
              "start_date": "2026-05-25",
              "end_date": "2026-05-25",
              "duration": 1,
              "comment": "string",
              "created_at": "string",
              "updated_at": "string"
            }
          ]
        }
      ],
      "meta": {
        "current_page": 1,
        "total_pages": 1,
        "total_count": 1,
        "per_page": 1
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "getAttendanceForYearGroupByTerm",
    "method": "GET",
    "path": "/v2p3/year-groups/{year_group_id}/homeroom/attendance/term/{term_id}",
    "regex": "^/v2p3/year-groups/[^/]+/homeroom/attendance/term/[^/]+$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "getAttendanceForYearGroupByDate",
    "method": "GET",
    "path": "/v2p3/year-groups/{year_group_id}/homeroom/attendance/date/{date}",
    "regex": "^/v2p3/year-groups/[^/]+/homeroom/attendance/date/[^/]+$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "getAttendanceAdjustmentsForYearGroupByTerm",
    "method": "GET",
    "path": "/v2p3/year-groups/{year_group_id}/homeroom/attendance/term/{term_id}/adjustments",
    "regex": "^/v2p3/year-groups/[^/]+/homeroom/attendance/term/[^/]+/adjustments$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listMemberships",
    "method": "GET",
    "path": "/v2p3/memberships",
    "regex": "^/v2p3/memberships$",
    "status": 200,
    "body": {
      "memberships": [
        {
          "id": "mock_id",
          "user_id": 1,
          "level": 0,
          "created_at": "string",
          "updated_at": "string",
          "class_id": 1,
          "user_email": "dev@example.com",
          "uniq_class_id": "string",
          "uniq_student_id": "string",
          "role": "string"
        }
      ],
      "meta": {
        "current_page": 1,
        "total_pages": 1,
        "total_count": 1,
        "per_page": 1
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listOfParentChildrenRelationships",
    "method": "GET",
    "path": "/v2p3/parents/{parent_id}/children",
    "regex": "^/v2p3/parents/[^/]+/children$",
    "status": 200,
    "body": {
      "children": [
        {
          "id": "mock_id",
          "relationship": null
        }
      ],
      "meta": {
        "current_page": 1,
        "total_pages": 1,
        "total_count": 1,
        "per_page": 1
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "createParentChildRelationship",
    "method": "POST",
    "path": "/v2p3/parents/{parent_id}/children",
    "regex": "^/v2p3/parents/[^/]+/children$",
    "status": 200,
    "body": {
      "child": {
        "id": "mock_id",
        "relationship": null
      }
    },
    "requestBody": {
      "child": {
        "id": "mock_id",
        "relationship": null
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "bulkUpdateParentChildrenRelationships",
    "method": "PUT",
    "path": "/v2p3/parents/{parent_id}/children",
    "regex": "^/v2p3/parents/[^/]+/children$",
    "status": 200,
    "body": {
      "children": [
        {
          "id": "mock_id",
          "relationship": null
        }
      ]
    },
    "requestBody": {
      "children": [
        {
          "id": "mock_id",
          "relationship": null
        }
      ]
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "getParentChildRelationship",
    "method": "GET",
    "path": "/v2p3/parents/{parent_id}/children/{id}",
    "regex": "^/v2p3/parents/[^/]+/children/[^/]+$",
    "status": 200,
    "body": {
      "child": {
        "id": "mock_id",
        "relationship": null
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "updateParentChildRelationship",
    "method": "PUT",
    "path": "/v2p3/parents/{parent_id}/children/{id}",
    "regex": "^/v2p3/parents/[^/]+/children/[^/]+$",
    "status": 200,
    "body": {
      "child": {
        "id": "mock_id",
        "relationship": null
      }
    },
    "requestBody": {
      "child": {
        "relationship": "Mother"
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "deleteParentChildRelationship",
    "method": "DELETE",
    "path": "/v2p3/parents/{parent_id}/children/{id}",
    "regex": "^/v2p3/parents/[^/]+/children/[^/]+$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listParents",
    "method": "GET",
    "path": "/v2p3/parents",
    "regex": "^/v2p3/parents$",
    "status": 200,
    "body": {
      "parents": [
        {
          "email": "dev@example.com",
          "first_name": "string",
          "middle_name": "string",
          "password": "string",
          "last_name": "string",
          "nickname": "string",
          "other_name": "string",
          "identifier": "string",
          "gender": "string",
          "birthday": "string",
          "phone_number": "string",
          "mobile_phone_number": "string",
          "street_address": "string",
          "street_address_ii": "string",
          "city": "string",
          "state": "string",
          "zipcode": "string",
          "country": "string",
          "nationalities": [
            "string"
          ],
          "languages": [
            "string"
          ],
          "account_uid": "string",
          "timezone": "string"
        }
      ],
      "meta": {
        "current_page": 1,
        "total_pages": 1,
        "total_count": 1,
        "per_page": 1
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "createParent",
    "method": "POST",
    "path": "/v2p3/parents",
    "regex": "^/v2p3/parents$",
    "status": 200,
    "body": {
      "parent": {
        "email": "dev@example.com",
        "first_name": "string",
        "middle_name": "string",
        "password": "string",
        "last_name": "string",
        "nickname": "string",
        "other_name": "string",
        "identifier": "string",
        "gender": "string",
        "birthday": "string",
        "phone_number": "string",
        "mobile_phone_number": "string",
        "street_address": "string",
        "street_address_ii": "string",
        "city": "string",
        "state": "string",
        "zipcode": "string",
        "country": "string",
        "nationalities": [
          "string"
        ],
        "languages": [
          "string"
        ],
        "account_uid": "string",
        "timezone": "string"
      },
      "options": {
        "welcome_email": "dev@example.com"
      }
    },
    "requestBody": {
      "parent": {},
      "options": {
        "send_welcome_email": "dev@example.com"
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "getParentByID",
    "method": "GET",
    "path": "/v2p3/parents/{id}",
    "regex": "^/v2p3/parents/[^/]+$",
    "status": 200,
    "body": {
      "parent": {
        "email": "dev@example.com",
        "first_name": "string",
        "middle_name": "string",
        "password": "string",
        "last_name": "string",
        "nickname": "string",
        "other_name": "string",
        "identifier": "string",
        "gender": "string",
        "birthday": "string",
        "phone_number": "string",
        "mobile_phone_number": "string",
        "street_address": "string",
        "street_address_ii": "string",
        "city": "string",
        "state": "string",
        "zipcode": "string",
        "country": "string",
        "nationalities": [
          "string"
        ],
        "languages": [
          "string"
        ],
        "account_uid": "string",
        "timezone": "string"
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "updateParent",
    "method": "PATCH",
    "path": "/v2p3/parents/{id}",
    "regex": "^/v2p3/parents/[^/]+$",
    "status": 200,
    "body": {
      "parent": {
        "email": "dev@example.com",
        "first_name": "string",
        "middle_name": "string",
        "password": "string",
        "last_name": "string",
        "nickname": "string",
        "other_name": "string",
        "identifier": "string",
        "gender": "string",
        "birthday": "string",
        "phone_number": "string",
        "mobile_phone_number": "string",
        "street_address": "string",
        "street_address_ii": "string",
        "city": "string",
        "state": "string",
        "zipcode": "string",
        "country": "string",
        "nationalities": [
          "string"
        ],
        "languages": [
          "string"
        ],
        "account_uid": "string",
        "timezone": "string"
      }
    },
    "requestBody": {
      "parent": {}
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "archiveParent",
    "method": "PUT",
    "path": "/v2p3/parents/{id}/archive",
    "regex": "^/v2p3/parents/[^/]+/archive$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "unarchiveParent",
    "method": "PUT",
    "path": "/v2p3/parents/{id}/unarchive",
    "regex": "^/v2p3/parents/[^/]+/unarchive$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "sendParentWelcomeEmail",
    "method": "POST",
    "path": "/v2p3/parents/{id}/welcome_email",
    "regex": "^/v2p3/parents/[^/]+/welcome_email$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "createAcademicTerm",
    "method": "POST",
    "path": "/v2p3/school/programs/{program_code}/academic-years/{academic_year_id}/academic-terms",
    "regex": "^/v2p3/school/programs/[^/]+/academic-years/[^/]+/academic-terms$",
    "status": 200,
    "body": {
      "academic_term": {
        "id": "mock_id",
        "academic_year_id": 1,
        "name": "string",
        "starts_on": "string",
        "ends_on": "string",
        "locked": true,
        "exam_grade": true,
        "updated_at": "string"
      }
    },
    "requestBody": {
      "academic_term": {
        "name": "string",
        "starts_on": "string",
        "ends_on": "string",
        "locked": true,
        "enable_exam_grade": true
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "updateAcademicTerm",
    "method": "PATCH",
    "path": "/v2p3/school/programs/{program_code}/academic-years/{academic_year_id}/academic-terms/{id}",
    "regex": "^/v2p3/school/programs/[^/]+/academic-years/[^/]+/academic-terms/[^/]+$",
    "status": 200,
    "body": {
      "academic_term": {
        "id": "mock_id",
        "academic_year_id": 1,
        "name": "string",
        "starts_on": "string",
        "ends_on": "string",
        "locked": true,
        "exam_grade": true,
        "updated_at": "string"
      }
    },
    "requestBody": {
      "academic_term": {
        "name": "string",
        "starts_on": "string",
        "ends_on": "string",
        "locked": true,
        "enable_exam_grade": true
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "deleteAcademicTerm",
    "method": "DELETE",
    "path": "/v2p3/school/programs/{program_code}/academic-years/{academic_year_id}/academic-terms/{id}",
    "regex": "^/v2p3/school/programs/[^/]+/academic-years/[^/]+/academic-terms/[^/]+$",
    "status": 200,
    "body": {
      "academic_term": {
        "id": "mock_id",
        "academic_year_id": 1,
        "name": "string",
        "starts_on": "string",
        "ends_on": "string",
        "locked": true,
        "exam_grade": true,
        "updated_at": "string"
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "get_v2p3_school_programs_program_code_academic_years_id",
    "method": "GET",
    "path": "/v2p3/school/programs/{program_code}/academic-years/{id}",
    "regex": "^/v2p3/school/programs/[^/]+/academic-years/[^/]+$",
    "status": 200,
    "body": {
      "academic_year": {
        "id": "mock_id",
        "name": "string",
        "starts_on": "string",
        "ends_on": "string",
        "updated_at": "string",
        "program": "string",
        "academic_terms": [
          {
            "id": "mock_id",
            "academic_year_id": 1,
            "name": "string",
            "starts_on": "string",
            "ends_on": "string",
            "locked": true,
            "exam_grade": true,
            "updated_at": "string"
          }
        ]
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "createAcademicYear",
    "method": "POST",
    "path": "/v2p3/school/programs/{program_code}/academic-years",
    "regex": "^/v2p3/school/programs/[^/]+/academic-years$",
    "status": 200,
    "body": {
      "academic_year": {
        "id": "mock_id",
        "name": "string",
        "starts_on": "string",
        "ends_on": "string",
        "updated_at": "string",
        "program": "string",
        "academic_terms": [
          {
            "id": "mock_id",
            "academic_year_id": 1,
            "name": "string",
            "starts_on": "string",
            "ends_on": "string",
            "locked": true,
            "exam_grade": true,
            "updated_at": "string"
          }
        ]
      }
    },
    "requestBody": {
      "academic_year": {
        "terms_attributes": [
          {
            "name": "string",
            "starts_on": "string",
            "ends_on": "string",
            "locked": true,
            "enable_exam_grade": true
          }
        ]
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "getAssessmentTypes",
    "method": "GET",
    "path": "/v2p3/school/programs/{program_code}/assessment_types",
    "regex": "^/v2p3/school/programs/[^/]+/assessment_types$",
    "status": 200,
    "body": {
      "assessment_type": {
        "id": "mock_id",
        "kind": "string",
        "name": "string",
        "color_code": "string",
        "available_assessments": [
          "string"
        ],
        "required_assessments": [
          "string"
        ]
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "get_v2p3_school_programs_program_code_academic_years_academic_year_id_calendar",
    "method": "GET",
    "path": "/v2p3/school/programs/{program_code}/academic-years/{academic_year_id}/calendar",
    "regex": "^/v2p3/school/programs/[^/]+/academic-years/[^/]+/calendar$",
    "status": 200,
    "body": {
      "calendar": {
        "start_date": "2026-05-25",
        "end_date": "2026-05-25",
        "calendar_type": "string",
        "rotation_cycle": 1,
        "ignore_holidays": true,
        "days_off": [
          1
        ],
        "dates": [
          {
            "date": "2026-05-25",
            "rotation_day": 1
          }
        ]
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "GetAllTermReports",
    "method": "GET",
    "path": "/v2p3/school/programs/{program}/reports",
    "regex": "^/v2p3/school/programs/[^/]+/reports$",
    "status": 200,
    "body": {
      "term_reports": [
        {
          "id": "mock_id",
          "title": "string",
          "type": "final",
          "program": "string",
          "academic_term_id": 1,
          "academic_term_name": "string",
          "next_gen": true,
          "pdf_url": "string",
          "individual_reports_url": "string",
          "term_grades_url": "string",
          "created_at": "2026-05-25T00:00:00.000Z",
          "updated_at": "2026-05-25T00:00:00.000Z",
          "released_on": "2026-05-25"
        }
      ],
      "meta": {
        "current_page": 1,
        "total_pages": 1,
        "total_count": 1,
        "per_page": 1
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "getTermReport",
    "method": "GET",
    "path": "/v2p3/school/programs/{program}/reports/{id}",
    "regex": "^/v2p3/school/programs/[^/]+/reports/[^/]+$",
    "status": 200,
    "body": {
      "term_report": {
        "id": "mock_id",
        "title": "string",
        "type": "final",
        "program": "string",
        "academic_term_id": 1,
        "academic_term_name": "string",
        "next_gen": true,
        "pdf_url": "string",
        "individual_reports_url": "string",
        "term_grades_url": "string",
        "created_at": "2026-05-25T00:00:00.000Z",
        "updated_at": "2026-05-25T00:00:00.000Z",
        "released_on": "2026-05-25"
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "downloadTermReportFile",
    "method": "GET",
    "path": "/v2p3/school/programs/{program}/reports/{id}/download/{kind}",
    "regex": "^/v2p3/school/programs/[^/]+/reports/[^/]+/download/[^/]+$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "getSubjectGroups",
    "method": "GET",
    "path": "/v2p3/school/programs/{program_code}/subject-groups",
    "regex": "^/v2p3/school/programs/[^/]+/subject-groups$",
    "status": 200,
    "body": {
      "meta": {
        "current_page": 1,
        "total_pages": 1,
        "total_count": 1,
        "per_page": 1
      },
      "subject_groups": [
        {
          "id": "mock_id",
          "name": "string",
          "max_phase": "string",
          "program": "string",
          "updated_at": "string"
        }
      ]
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "createSubjectGroup",
    "method": "POST",
    "path": "/v2p3/school/programs/{program_code}/subject-groups",
    "regex": "^/v2p3/school/programs/[^/]+/subject-groups$",
    "status": 200,
    "body": {
      "subject_group": {
        "id": "mock_id",
        "name": "string",
        "custom": true,
        "max_phase": "string",
        "program": "string",
        "updated_at": "string"
      }
    },
    "requestBody": {
      "subject_group": {
        "name": "string",
        "max_phase": "string"
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "getSubjectGroup",
    "method": "GET",
    "path": "/v2p3/school/programs/{program_code}/subject-groups/{id}",
    "regex": "^/v2p3/school/programs/[^/]+/subject-groups/[^/]+$",
    "status": 200,
    "body": {
      "subject_group": {
        "id": "mock_id",
        "name": "string",
        "custom": true,
        "max_phase": "string",
        "program": "string",
        "updated_at": "string"
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "updateSubjectGroup",
    "method": "PATCH",
    "path": "/v2p3/school/programs/{program_code}/subject-groups/{id}",
    "regex": "^/v2p3/school/programs/[^/]+/subject-groups/[^/]+$",
    "status": 200,
    "body": {
      "subject_group": {
        "id": "mock_id",
        "name": "string",
        "custom": true,
        "max_phase": "string",
        "program": "string",
        "updated_at": "string"
      }
    },
    "requestBody": {
      "subject_group": {
        "name": "string",
        "max_phase": "string"
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "destroySubjectGroup",
    "method": "DELETE",
    "path": "/v2p3/school/programs/{program_code}/subject-groups/{id}",
    "regex": "^/v2p3/school/programs/[^/]+/subject-groups/[^/]+$",
    "status": 200,
    "body": {
      "subject_group": {
        "id": "mock_id",
        "name": "string",
        "custom": true,
        "max_phase": "string",
        "program": "string",
        "updated_at": "string"
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "getSubjects",
    "method": "GET",
    "path": "/v2p3/school/programs/{program_code}/subjects",
    "regex": "^/v2p3/school/programs/[^/]+/subjects$",
    "status": 200,
    "body": {
      "meta": {
        "current_page": 1,
        "total_pages": 1,
        "total_count": 1,
        "per_page": 1
      },
      "subjects": [
        {
          "id": "mock_id",
          "subject_group_id": 1,
          "custom": true,
          "name": "string",
          "title": "string",
          "sl": true,
          "hl": true,
          "sl_code": "string",
          "hl_code": "string",
          "description": "string",
          "scope_and_sequence_based_on": "string",
          "updated_at": "string",
          "self_taught": true,
          "phases": [
            "string"
          ],
          "levels": [
            "string"
          ],
          "enabled": true
        }
      ]
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "createSubject",
    "method": "POST",
    "path": "/v2p3/school/programs/{program_code}/subjects",
    "regex": "^/v2p3/school/programs/[^/]+/subjects$",
    "status": 200,
    "body": {
      "subject": {
        "id": "mock_id",
        "subject_group_id": 1,
        "custom": true,
        "name": "string",
        "title": "string",
        "sl": true,
        "hl": true,
        "code": "string",
        "description": "string",
        "scope_and_sequence_based_on": "string",
        "updated_at": "string",
        "self_taught": true,
        "phases": [
          "string"
        ],
        "levels": [
          "string"
        ],
        "enabled": true
      }
    },
    "requestBody": {
      "subject": {
        "subject_group_id": 1,
        "name": "string",
        "title": "string",
        "description": "string",
        "scope_and_sequence_based_on": "string",
        "sl": true,
        "hl": true,
        "enabled": true,
        "code": "string"
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "getSubject",
    "method": "GET",
    "path": "/v2p3/school/programs/{program_code}/subjects/{id}",
    "regex": "^/v2p3/school/programs/[^/]+/subjects/[^/]+$",
    "status": 200,
    "body": {
      "subject": {
        "id": "mock_id",
        "subject_group_id": 1,
        "custom": true,
        "name": "string",
        "title": "string",
        "sl": true,
        "hl": true,
        "code": "string",
        "description": "string",
        "scope_and_sequence_based_on": "string",
        "updated_at": "string",
        "self_taught": true,
        "phases": [
          "string"
        ],
        "levels": [
          "string"
        ],
        "enabled": true
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "updateSubject",
    "method": "PUT",
    "path": "/v2p3/school/programs/{program_code}/subjects/{id}",
    "regex": "^/v2p3/school/programs/[^/]+/subjects/[^/]+$",
    "status": 200,
    "body": {
      "subject": {
        "id": "mock_id",
        "subject_group_id": 1,
        "custom": true,
        "name": "string",
        "title": "string",
        "sl": true,
        "hl": true,
        "code": "string",
        "description": "string",
        "scope_and_sequence_based_on": "string",
        "updated_at": "string",
        "self_taught": true,
        "phases": [
          "string"
        ],
        "levels": [
          "string"
        ],
        "enabled": true
      }
    },
    "requestBody": {
      "subject": {
        "subject_group_id": 1,
        "name": "string",
        "title": "string",
        "description": "string",
        "scope_and_sequence_based_on": "string",
        "sl": true,
        "hl": true,
        "enabled": true,
        "code": "string"
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "deleteSubject",
    "method": "DELETE",
    "path": "/v2p3/school/programs/{program_code}/subjects/{id}",
    "regex": "^/v2p3/school/programs/[^/]+/subjects/[^/]+$",
    "status": 200,
    "body": {
      "subject": {
        "id": "mock_id",
        "subject_group_id": 1,
        "custom": true,
        "name": "string",
        "title": "string",
        "sl": true,
        "hl": true,
        "code": "string",
        "description": "string",
        "scope_and_sequence_based_on": "string",
        "updated_at": "string",
        "self_taught": true,
        "phases": [
          "string"
        ],
        "levels": [
          "string"
        ],
        "enabled": true
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "bulkEnableSubjects",
    "method": "POST",
    "path": "/v2p3/school/programs/{program_code}/subjects/bulk-enable",
    "regex": "^/v2p3/school/programs/[^/]+/subjects/bulk-enable$",
    "status": 200,
    "body": {
      "subject_ids": [
        1
      ]
    },
    "requestBody": {
      "subject_ids": [
        1
      ]
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "bulkDisableSubjects",
    "method": "POST",
    "path": "/v2p3/school/programs/{program_code}/subjects/bulk-disable",
    "regex": "^/v2p3/school/programs/[^/]+/subjects/bulk-disable$",
    "status": 200,
    "body": {
      "subject_ids": [
        1
      ]
    },
    "requestBody": {
      "subject_ids": [
        1
      ]
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "getSchool",
    "method": "GET",
    "path": "/v2p3/school",
    "regex": "^/v2p3/school$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listAcademicYears",
    "method": "GET",
    "path": "/v2p3/school/academic-years",
    "regex": "^/v2p3/school/academic-years$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listGrades",
    "method": "GET",
    "path": "/v2p3/school/grades",
    "regex": "^/v2p3/school/grades$",
    "status": 200,
    "body": {
      "school": {
        "programs": [
          {
            "name": "string",
            "short_name": "string",
            "uid": 1,
            "code": "string",
            "grades": [
              {
                "grade_number": 1,
                "uid": 1,
                "name": "string",
                "enabled": true,
                "program": "string"
              }
            ]
          }
        ]
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listSubjects",
    "method": "GET",
    "path": "/v2p3/school/subjects",
    "regex": "^/v2p3/school/subjects$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listSchoolTermGradeScales",
    "method": "GET",
    "path": "/v2p3/school/term-grade-scales",
    "regex": "^/v2p3/school/term-grade-scales$",
    "status": 200,
    "body": {
      "school": {
        "term_grade_scales": [
          {
            "score": 1.23,
            "mark": "string",
            "program_code": "string"
          }
        ]
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listTermRubrics",
    "method": "GET",
    "path": "/v2p3/school/term-rubrics",
    "regex": "^/v2p3/school/term-rubrics$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "updateStudentAvatar",
    "method": "PUT",
    "path": "/v2p3/students/{id}/avatar",
    "regex": "^/v2p3/students/[^/]+/avatar$",
    "status": 200,
    "body": {
      "status": "string"
    },
    "requestBody": {
      "avatar": {
        "remote_file_url": "string"
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "deleteStudentAvatar",
    "method": "DELETE",
    "path": "/v2p3/students/{id}/avatar",
    "regex": "^/v2p3/students/[^/]+/avatar$",
    "status": 200,
    "body": {
      "status": "string"
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "getStudentExcusals",
    "method": "GET",
    "path": "/v2p3/students/{student_id}/excusals",
    "regex": "^/v2p3/students/[^/]+/excusals$",
    "status": 200,
    "body": {
      "excusals": [
        {
          "excusals": [
            {
              "id": "mock_id",
              "student_id": 1,
              "parent_id": 1,
              "start_date": "2026-05-25",
              "end_date": "2026-05-25",
              "duration": 1,
              "comment": "string",
              "created_at": "string",
              "updated_at": "string"
            }
          ]
        }
      ],
      "meta": {
        "current_page": 1,
        "total_pages": 1,
        "total_count": 1,
        "per_page": 1
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "createStudentExcusal",
    "method": "POST",
    "path": "/v2p3/students/{student_id}/excusals",
    "regex": "^/v2p3/students/[^/]+/excusals$",
    "status": 200,
    "body": {
      "excusals": [
        {
          "id": "mock_id",
          "student_id": 1,
          "parent_id": 1,
          "start_date": "2026-05-25",
          "end_date": "2026-05-25",
          "duration": 1,
          "comment": "string",
          "created_at": "string",
          "updated_at": "string"
        }
      ]
    },
    "requestBody": {
      "excusal": {
        "parent_id": 1,
        "start_date": "2026-05-25",
        "end_date": "2026-05-25",
        "comment": "string"
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "updateStudentExcusal",
    "method": "PATCH",
    "path": "/v2p3/students/{student_id}/excusals/{id}",
    "regex": "^/v2p3/students/[^/]+/excusals/[^/]+$",
    "status": 200,
    "body": {
      "excusals": [
        {
          "id": "mock_id",
          "student_id": 1,
          "parent_id": 1,
          "start_date": "2026-05-25",
          "end_date": "2026-05-25",
          "duration": 1,
          "comment": "string",
          "created_at": "string",
          "updated_at": "string"
        }
      ]
    },
    "requestBody": {
      "excusal": {
        "end_date": "2026-05-25",
        "comment": "string"
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "deleteStudentExcusal",
    "method": "DELETE",
    "path": "/v2p3/students/{student_id}/excusals/{id}",
    "regex": "^/v2p3/students/[^/]+/excusals/[^/]+$",
    "status": 200,
    "body": {
      "excusals": [
        {
          "id": "mock_id",
          "student_id": 1,
          "parent_id": 1,
          "start_date": "2026-05-25",
          "end_date": "2026-05-25",
          "duration": 1,
          "comment": "string",
          "created_at": "string",
          "updated_at": "string"
        }
      ]
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listStudents",
    "method": "GET",
    "path": "/v2p3/students",
    "regex": "^/v2p3/students$",
    "status": 200,
    "body": {
      "students": [
        {
          "email": "dev@example.com",
          "first_name": "string",
          "middle_name": "string",
          "password": "string",
          "last_name": "string",
          "nickname": "string",
          "other_name": "string",
          "identifier": "string",
          "gender": "string",
          "birthday": "string",
          "phone_number": "string",
          "mobile_phone_number": "string",
          "street_address": "string",
          "street_address_ii": "string",
          "city": "string",
          "state": "string",
          "zipcode": "string",
          "country": "string",
          "nationalities": [
            "string"
          ],
          "languages": [
            "string"
          ],
          "account_uid": "string",
          "timezone": "string"
        }
      ],
      "meta": {
        "current_page": 1,
        "total_pages": 1,
        "total_count": 1,
        "per_page": 1
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "createStudent",
    "method": "POST",
    "path": "/v2p3/students",
    "regex": "^/v2p3/students$",
    "status": 200,
    "body": {
      "student": {
        "email": "dev@example.com",
        "first_name": "string",
        "middle_name": "string",
        "password": "string",
        "last_name": "string",
        "nickname": "string",
        "other_name": "string",
        "identifier": "string",
        "gender": "string",
        "birthday": "string",
        "phone_number": "string",
        "mobile_phone_number": "string",
        "street_address": "string",
        "street_address_ii": "string",
        "city": "string",
        "state": "string",
        "zipcode": "string",
        "country": "string",
        "nationalities": [
          "string"
        ],
        "languages": [
          "string"
        ],
        "account_uid": "string",
        "timezone": "string"
      },
      "options": {
        "welcome_email": "dev@example.com"
      }
    },
    "requestBody": {
      "student": {},
      "options": {
        "send_welcome_email": "dev@example.com"
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "getStudentByID",
    "method": "GET",
    "path": "/v2p3/students/{id}",
    "regex": "^/v2p3/students/[^/]+$",
    "status": 200,
    "body": {
      "student": {
        "email": "dev@example.com",
        "first_name": "string",
        "middle_name": "string",
        "password": "string",
        "last_name": "string",
        "nickname": "string",
        "other_name": "string",
        "identifier": "string",
        "gender": "string",
        "birthday": "string",
        "phone_number": "string",
        "mobile_phone_number": "string",
        "street_address": "string",
        "street_address_ii": "string",
        "city": "string",
        "state": "string",
        "zipcode": "string",
        "country": "string",
        "nationalities": [
          "string"
        ],
        "languages": [
          "string"
        ],
        "account_uid": "string",
        "timezone": "string"
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "updateStudent",
    "method": "PATCH",
    "path": "/v2p3/students/{id}",
    "regex": "^/v2p3/students/[^/]+$",
    "status": 200,
    "body": {
      "student": {
        "email": "dev@example.com",
        "first_name": "string",
        "middle_name": "string",
        "password": "string",
        "last_name": "string",
        "nickname": "string",
        "other_name": "string",
        "identifier": "string",
        "gender": "string",
        "birthday": "string",
        "phone_number": "string",
        "mobile_phone_number": "string",
        "street_address": "string",
        "street_address_ii": "string",
        "city": "string",
        "state": "string",
        "zipcode": "string",
        "country": "string",
        "nationalities": [
          "string"
        ],
        "languages": [
          "string"
        ],
        "account_uid": "string",
        "timezone": "string"
      }
    },
    "requestBody": {
      "student": {}
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "archiveStudent",
    "method": "PUT",
    "path": "/v2p3/students/{id}/archive",
    "regex": "^/v2p3/students/[^/]+/archive$",
    "status": 204,
    "requestBody": {
      "withdrawn_on": "string"
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "unarchiveStudent",
    "method": "PUT",
    "path": "/v2p3/students/{id}/unarchive",
    "regex": "^/v2p3/students/[^/]+/unarchive$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "getStudentMemberships",
    "method": "GET",
    "path": "/v2p3/students/{id}/memberships",
    "regex": "^/v2p3/students/[^/]+/memberships$",
    "status": 200,
    "body": {
      "memberships": {
        "classes": [
          {
            "id": "mock_id",
            "uniq_id": "string",
            "name": "string",
            "archived": true,
            "start_term_id": 1,
            "end_term_id": 1
          }
        ],
        "groups": [
          {
            "id": "mock_id",
            "name": "string",
            "archived": true
          }
        ],
        "year_groups": [
          {
            "id": "mock_id",
            "name": "string",
            "program": "string",
            "archived": true
          }
        ]
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "set_student_homeroom_attendance",
    "method": "PUT",
    "path": "/v2p3/students/{id}/set_homeroom_attendance",
    "regex": "^/v2p3/students/[^/]+/set_homeroom_attendance$",
    "status": 204,
    "requestBody": {
      "date": "2026-05-25",
      "status": 0,
      "notes": "string"
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "sendStudentWelcomeEmail",
    "method": "POST",
    "path": "/v2p3/students/{id}/welcome_email",
    "regex": "^/v2p3/students/[^/]+/welcome_email$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "updateOnlineAssessment",
    "method": "PATCH",
    "path": "/v2p3/tasks/{task_id}/online_assessments/{assess_prep_uid}",
    "regex": "^/v2p3/tasks/[^/]+/online_assessments/[^/]+$",
    "status": 200,
    "body": {
      "online_assessment": {
        "id": "mock_id",
        "user_id": 1,
        "title": "string",
        "mode": "online",
        "points": 1,
        "duration": 1,
        "assess_prep_uid": "string",
        "assess_prep_uuid": "string",
        "start_at": "string",
        "created_at": "string",
        "updated_at": "string",
        "task_id": 1,
        "email": "dev@example.com",
        "program_code": "string",
        "grade_code": "string",
        "role": "string",
        "subject": "string",
        "subject_group": "string"
      }
    },
    "requestBody": {
      "online_assessment": {
        "assess_prep_uid": "string",
        "title": "string",
        "mode": "online",
        "questions_count": 1,
        "points": 1,
        "duration": 1,
        "start_at": "string",
        "status": "draft",
        "video_monitoring": true,
        "criteria_labels": [
          {
            "label": "string",
            "title": "string",
            "descriptors": [
              {
                "level": "string",
                "descriptor": "string"
              }
            ]
          }
        ]
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "UpdateStudentTaskGrades",
    "method": "PATCH",
    "path": "/v2p3/tasks/{task_id}/students/{student_id}",
    "regex": "^/v2p3/tasks/[^/]+/students/[^/]+$",
    "status": 200,
    "body": {
      "author_id": 1,
      "points": 1,
      "comment": "string",
      "binary": true,
      "criterion_grades": [
        {
          "label": "string",
          "criterion": "string",
          "score": 1
        }
      ]
    },
    "requestBody": {
      "task_grade": {
        "author_id": 1,
        "points": 1,
        "comment": "string",
        "binary": true,
        "criterion_grades": [
          {
            "label": "string",
            "criterion": "string",
            "score": 1
          }
        ]
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "BulkUpdateStudentTaskGrades",
    "method": "PATCH",
    "path": "/v2p3/tasks/{task_id}/students",
    "regex": "^/v2p3/tasks/[^/]+/students$",
    "status": 200,
    "body": [
      {
        "id": "mock_id",
        "status": "string",
        "error": {}
      }
    ],
    "requestBody": {
      "students": [
        {
          "id": "mock_id",
          "task_grade": {
            "author_id": 1,
            "points": 1,
            "comment": "string",
            "binary": true,
            "criterion_grades": [
              {
                "label": "string",
                "criterion": "string",
                "score": 1
              }
            ]
          }
        }
      ]
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "BulkResetStudentsTaskGrades",
    "method": "DELETE",
    "path": "/v2p3/tasks/{task_id}/students",
    "regex": "^/v2p3/tasks/[^/]+/students$",
    "status": 200,
    "body": [
      {
        "id": "mock_id",
        "status": "string",
        "error": {}
      }
    ],
    "requestBody": {
      "student_ids": [
        1
      ]
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "updateTeacherAvatar",
    "method": "PUT",
    "path": "/v2p3/teachers/{id}/avatar",
    "regex": "^/v2p3/teachers/[^/]+/avatar$",
    "status": 204,
    "requestBody": {
      "avatar": {
        "remote_file_url": "string"
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "deleteTeacherAvatar",
    "method": "DELETE",
    "path": "/v2p3/teachers/{id}/avatar",
    "regex": "^/v2p3/teachers/[^/]+/avatar$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listTeachers",
    "method": "GET",
    "path": "/v2p3/teachers",
    "regex": "^/v2p3/teachers$",
    "status": 200,
    "body": {
      "teachers": [
        {
          "email": "dev@example.com",
          "first_name": "string",
          "middle_name": "string",
          "password": "string",
          "last_name": "string",
          "nickname": "string",
          "other_name": "string",
          "identifier": "string",
          "gender": "string",
          "birthday": "string",
          "phone_number": "string",
          "mobile_phone_number": "string",
          "street_address": "string",
          "street_address_ii": "string",
          "city": "string",
          "state": "string",
          "zipcode": "string",
          "country": "string",
          "nationalities": [
            "string"
          ],
          "languages": [
            "string"
          ],
          "account_uid": "string",
          "timezone": "string"
        }
      ],
      "meta": {
        "current_page": 1,
        "total_pages": 1,
        "total_count": 1,
        "per_page": 1
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "createTeacher",
    "method": "POST",
    "path": "/v2p3/teachers",
    "regex": "^/v2p3/teachers$",
    "status": 200,
    "body": {
      "teacher": {
        "email": "dev@example.com",
        "first_name": "string",
        "middle_name": "string",
        "password": "string",
        "last_name": "string",
        "nickname": "string",
        "other_name": "string",
        "identifier": "string",
        "gender": "string",
        "birthday": "string",
        "phone_number": "string",
        "mobile_phone_number": "string",
        "street_address": "string",
        "street_address_ii": "string",
        "city": "string",
        "state": "string",
        "zipcode": "string",
        "country": "string",
        "nationalities": [
          "string"
        ],
        "languages": [
          "string"
        ],
        "account_uid": "string",
        "timezone": "string"
      },
      "options": {
        "welcome_email": "dev@example.com"
      }
    },
    "requestBody": {
      "teacher": {
        "email": "dev@example.com",
        "first_name": "string",
        "middle_name": "string",
        "password": "string",
        "last_name": "string",
        "nickname": "string",
        "other_name": "string",
        "identifier": "string",
        "gender": "string",
        "birthday": "string",
        "phone_number": "string",
        "mobile_phone_number": "string",
        "street_address": "string",
        "street_address_ii": "string",
        "city": "string",
        "state": "string",
        "zipcode": "string",
        "country": "string",
        "nationalities": [
          "string"
        ],
        "languages": [
          "string"
        ],
        "account_uid": "string",
        "timezone": "string"
      },
      "options": {
        "send_welcome_email": "dev@example.com"
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "getTeacherByID",
    "method": "GET",
    "path": "/v2p3/teachers/{id}",
    "regex": "^/v2p3/teachers/[^/]+$",
    "status": 200,
    "body": {
      "teacher": {
        "email": "dev@example.com",
        "first_name": "string",
        "middle_name": "string",
        "password": "string",
        "last_name": "string",
        "nickname": "string",
        "other_name": "string",
        "identifier": "string",
        "gender": "string",
        "birthday": "string",
        "phone_number": "string",
        "mobile_phone_number": "string",
        "street_address": "string",
        "street_address_ii": "string",
        "city": "string",
        "state": "string",
        "zipcode": "string",
        "country": "string",
        "nationalities": [
          "string"
        ],
        "languages": [
          "string"
        ],
        "account_uid": "string",
        "timezone": "string"
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "updateTeacher",
    "method": "PATCH",
    "path": "/v2p3/teachers/{id}",
    "regex": "^/v2p3/teachers/[^/]+$",
    "status": 204,
    "requestBody": {
      "teacher": {
        "email": "dev@example.com",
        "first_name": "string",
        "middle_name": "string",
        "password": "string",
        "last_name": "string",
        "nickname": "string",
        "other_name": "string",
        "identifier": "string",
        "gender": "string",
        "birthday": "string",
        "phone_number": "string",
        "mobile_phone_number": "string",
        "street_address": "string",
        "street_address_ii": "string",
        "city": "string",
        "state": "string",
        "zipcode": "string",
        "country": "string",
        "nationalities": [
          "string"
        ],
        "languages": [
          "string"
        ],
        "account_uid": "string",
        "timezone": "string"
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "archiveTeacher",
    "method": "PUT",
    "path": "/v2p3/teachers/{id}/archive",
    "regex": "^/v2p3/teachers/[^/]+/archive$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "unarchiveTeacher",
    "method": "PUT",
    "path": "/v2p3/teachers/{id}/unarchive",
    "regex": "^/v2p3/teachers/[^/]+/unarchive$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listTeacherClassesMemberships",
    "method": "GET",
    "path": "/v2p3/teachers/{id}/classes",
    "regex": "^/v2p3/teachers/[^/]+/classes$",
    "status": 200,
    "body": {
      "classes": [
        {
          "id": "mock_id",
          "uniq_id": null,
          "name": "string",
          "archived": true,
          "start_term_id": null,
          "end_term_id": null,
          "show_on_reports": true
        }
      ]
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listTeacherGroupsMemberships",
    "method": "GET",
    "path": "/v2p3/teachers/{id}/groups",
    "regex": "^/v2p3/teachers/[^/]+/groups$",
    "status": 200,
    "body": {
      "groups": [
        {
          "id": "mock_id",
          "name": "string",
          "archived": true,
          "group_advisor": true,
          "primary_group_advisor": true
        }
      ]
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "sendTeacherWelcomeEmail",
    "method": "POST",
    "path": "/v2p3/teachers/{id}/welcome_email",
    "regex": "^/v2p3/teachers/[^/]+/welcome_email$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listUnitClassAssignments",
    "method": "GET",
    "path": "/v2p3/unit-class-assignments",
    "regex": "^/v2p3/unit-class-assignments$",
    "status": 200,
    "body": {
      "unit_class_assignments": [
        {
          "id": "mock_id",
          "unit_id": 1,
          "class_id": 1,
          "status": "active",
          "created_at": "string",
          "updated_at": "string",
          "deleted_at": "string"
        }
      ],
      "meta": {
        "current_page": 1,
        "total_pages": 1,
        "total_count": 1,
        "per_page": 1
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listUnits",
    "method": "GET",
    "path": "/v2p3/units",
    "regex": "^/v2p3/units$",
    "status": 200,
    "body": {
      "units": [
        {
          "id": "mock_id",
          "title": "string",
          "description": null,
          "archived": true,
          "idu_unit": null,
          "month": null,
          "week": null,
          "duration_in_weeks": null,
          "hours": null,
          "sl": null,
          "hl": null,
          "language_level": null,
          "language_b_phases": null,
          "subject": null,
          "grade": "string",
          "grade_number": 1,
          "class_ids": [
            1
          ],
          "start_date": null,
          "end_date": null,
          "central_idea": null,
          "guiding_questions": null,
          "formative_assessment": null,
          "summative_assessment": null,
          "peer_self_assessment": null,
          "standardization_and_moderation": null,
          "methods": null,
          "prior_learning_experiences": null,
          "student_expectations": null,
          "pedagogical_approaches": null,
          "teaching_strategies": null,
          "feedback": null,
          "dispositions": null,
          "international_mindedness": null,
          "academic_honesty": null,
          "information_communication_technology": null,
          "language_and_literacy_development": null,
          "cross_curricular_links": null,
          "co_curricular_links": null,
          "differentiation": null,
          "content": null,
          "skills": null,
          "learning_process": null,
          "metacognition": null,
          "unit_activities": null,
          "support_materials": null,
          "concepts": null,
          "misunderstandings": null,
          "transfer_goals": null,
          "lines_of_inquiry": null,
          "student_questions": null,
          "teacher_questions": null,
          "learner_profiles": null,
          "key_concepts": null,
          "related_concepts": null,
          "specified_concepts": null,
          "statement_of_inquiry": null,
          "conceptual_understandings": null,
          "contextual_lens": null,
          "community_engagement": null,
          "approaches_to_learning": null,
          "criteria": null,
          "global_contexts": null,
          "transdisciplinary_theme": null,
          "standards": null,
          "academic_integrity": null,
          "agency": null,
          "action": null,
          "student_self_assessment": null,
          "success_criteria": null,
          "ongoing_assessment": null,
          "attitudes": null,
          "aims": null,
          "objectives": null,
          "syllabus": null,
          "scope_sequence": null,
          "created_at": "string",
          "updated_at": "string"
        }
      ],
      "meta": {
        "current_page": 1,
        "total_pages": 1,
        "total_count": 1,
        "per_page": 1
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "getUnitByID",
    "method": "GET",
    "path": "/v2p3/units/{id}",
    "regex": "^/v2p3/units/[^/]+$",
    "status": 200,
    "body": {
      "unit": {
        "id": "mock_id",
        "title": "string",
        "description": null,
        "archived": true,
        "idu_unit": null,
        "month": null,
        "week": null,
        "duration_in_weeks": null,
        "hours": null,
        "sl": null,
        "hl": null,
        "language_level": null,
        "language_b_phases": null,
        "subject": null,
        "grade": "string",
        "grade_number": 1,
        "class_ids": [
          1
        ],
        "start_date": null,
        "end_date": null,
        "central_idea": null,
        "guiding_questions": null,
        "formative_assessment": null,
        "summative_assessment": null,
        "peer_self_assessment": null,
        "standardization_and_moderation": null,
        "methods": null,
        "prior_learning_experiences": null,
        "student_expectations": null,
        "pedagogical_approaches": null,
        "teaching_strategies": null,
        "feedback": null,
        "dispositions": null,
        "international_mindedness": null,
        "academic_honesty": null,
        "information_communication_technology": null,
        "language_and_literacy_development": null,
        "cross_curricular_links": null,
        "co_curricular_links": null,
        "differentiation": null,
        "content": null,
        "skills": null,
        "learning_process": null,
        "metacognition": null,
        "unit_activities": null,
        "support_materials": null,
        "concepts": null,
        "misunderstandings": null,
        "transfer_goals": null,
        "lines_of_inquiry": null,
        "student_questions": null,
        "teacher_questions": null,
        "learner_profiles": null,
        "key_concepts": null,
        "related_concepts": null,
        "specified_concepts": null,
        "statement_of_inquiry": null,
        "conceptual_understandings": null,
        "contextual_lens": null,
        "community_engagement": null,
        "approaches_to_learning": null,
        "criteria": null,
        "global_contexts": null,
        "transdisciplinary_theme": null,
        "standards": null,
        "academic_integrity": null,
        "agency": null,
        "action": null,
        "student_self_assessment": null,
        "success_criteria": null,
        "ongoing_assessment": null,
        "attitudes": null,
        "aims": null,
        "objectives": null,
        "syllabus": null,
        "scope_sequence": null,
        "created_at": "string",
        "updated_at": "string"
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listYearGroupCasExperiencesStudents",
    "method": "GET",
    "path": "/v2p3/year-groups/{id}/projects/cas/experiences/students",
    "regex": "^/v2p3/year-groups/[^/]+/projects/cas/experiences/students$",
    "status": 200,
    "body": {
      "students": [
        {
          "id": "mock_id",
          "identifier": null,
          "aims_and_goals": "string",
          "overall_progress": "excellent",
          "component": {
            "items": [
              {
                "id": "mock_id",
                "name": "string",
                "status": {
                  "post_approved": true,
                  "pre_approved": true,
                  "progress": {
                    "title": "approved"
                  }
                },
                "status_annotations": {
                  "incomplete": true,
                  "rejected": true,
                  "reviewed": true
                },
                "supervisor": {
                  "name": "string",
                  "email": "dev@example.com",
                  "title": "string",
                  "contact_number": "string"
                },
                "cas_project": true,
                "creativity": true,
                "creativity_hours": 1.23,
                "activity": true,
                "activity_hours": 1.23,
                "service": true,
                "service_hours": 1.23,
                "service_action_type": null,
                "ongoing_approach": true,
                "school_based_approach": true,
                "community_based_approach": true,
                "individual_approach": true,
                "start_date": null,
                "end_date": null,
                "slug": "string"
              }
            ]
          }
        }
      ],
      "meta": {
        "current_page": 1,
        "next_page": null,
        "prev_page": null,
        "total_pages": 1,
        "total_count": 1,
        "per_page": 1
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "getYearGroupCas",
    "method": "GET",
    "path": "/v2p3/year-groups/{id}/projects/cas",
    "regex": "^/v2p3/year-groups/[^/]+/projects/cas$",
    "status": 200,
    "body": {
      "cas": {
        "components": [
          {
            "slug": "string",
            "label": "string",
            "track_hours": true,
            "show_hours_chart": true,
            "cas_total_hours": 1,
            "show_aims_and_goals": true,
            "optional_question": null,
            "activity_description_title": "string"
          }
        ]
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listYearGroupPblProposalStudentsDetails",
    "method": "GET",
    "path": "/v2p3/year-groups/{year_group_id}/projects/pbl/{project_id}/proposal/students",
    "regex": "^/v2p3/year-groups/[^/]+/projects/pbl/[^/]+/proposal/students$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listYearGroupPblReflectionsStudentsDetails",
    "method": "GET",
    "path": "/v2p3/year-groups/{year_group_id}/projects/pbl/{project_id}/reflections/students",
    "regex": "^/v2p3/year-groups/[^/]+/projects/pbl/[^/]+/reflections/students$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listYearGroupPblTodosStudentsDetails",
    "method": "GET",
    "path": "/v2p3/year-groups/{year_group_id}/projects/pbl/{project_id}/todos/students",
    "regex": "^/v2p3/year-groups/[^/]+/projects/pbl/[^/]+/todos/students$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listYearGroupPblJournalStudentsDetails",
    "method": "GET",
    "path": "/v2p3/year-groups/{year_group_id}/projects/pbl/{project_id}/journal/students",
    "regex": "^/v2p3/year-groups/[^/]+/projects/pbl/[^/]+/journal/students$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listYearGroupPblDocumentsStudentsDetails",
    "method": "GET",
    "path": "/v2p3/year-groups/{year_group_id}/projects/pbl/{project_id}/documents/students",
    "regex": "^/v2p3/year-groups/[^/]+/projects/pbl/[^/]+/documents/students$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listYearGroupPblPresentationStudentsDetails",
    "method": "GET",
    "path": "/v2p3/year-groups/{year_group_id}/projects/pbl/{project_id}/presentation/students",
    "regex": "^/v2p3/year-groups/[^/]+/projects/pbl/[^/]+/presentation/students$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listYearGroupPblNotesAndInterviewsStudentsDetails",
    "method": "GET",
    "path": "/v2p3/year-groups/{year_group_id}/projects/pbl/{project_id}/notes_and_interviews/students",
    "regex": "^/v2p3/year-groups/[^/]+/projects/pbl/[^/]+/notes_and_interviews/students$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listYearGroupProjectBasedLearningTemplates",
    "method": "GET",
    "path": "/v2p3/year-groups/{id}/projects/pbl",
    "regex": "^/v2p3/year-groups/[^/]+/projects/pbl$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listYearGroupServiceLearningCategoriesStudents",
    "method": "GET",
    "path": "/v2p3/year-groups/{id}/projects/sl/categories/students",
    "regex": "^/v2p3/year-groups/[^/]+/projects/sl/categories/students$",
    "status": 200,
    "body": {
      "students": [
        {
          "id": "mock_id",
          "identifier": null,
          "component": {
            "items": [
              {
                "id": "mock_id",
                "name": "string",
                "status": {
                  "post_approved": true,
                  "pre_approved": true,
                  "progress": {
                    "title": "approved"
                  }
                },
                "status_annotations": {
                  "incomplete": true,
                  "rejected": true,
                  "reviewed": true
                },
                "supervisor": {
                  "name": "string",
                  "email": "dev@example.com",
                  "title": "string",
                  "contact_number": "string"
                },
                "activity_type": "string",
                "start_date": null,
                "end_date": null,
                "learning_outcomes": [
                  {
                    "id": "mock_id",
                    "name": "string",
                    "description": "string"
                  }
                ],
                "slug": "string"
              }
            ]
          }
        }
      ],
      "meta": {
        "current_page": 1,
        "next_page": null,
        "prev_page": null,
        "total_pages": 1,
        "total_count": 1,
        "per_page": 1
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listYearGroupServiceLearningOutcomesStudents",
    "method": "GET",
    "path": "/v2p3/year-groups/{id}/projects/sl/outcomes/students",
    "regex": "^/v2p3/year-groups/[^/]+/projects/sl/outcomes/students$",
    "status": 200,
    "body": {
      "students": [
        {
          "id": "mock_id",
          "identifier": null,
          "status": "string",
          "overall_progress": "excellent",
          "component": {
            "items": [
              {
                "id": "mock_id",
                "title": "string",
                "description": "string",
                "completed": true,
                "experiences_with_reflection": 1,
                "total_experiences": 1,
                "slug": "string"
              }
            ]
          }
        }
      ],
      "meta": {
        "current_page": 1,
        "next_page": null,
        "prev_page": null,
        "total_pages": 1,
        "total_count": 1,
        "per_page": 1
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "getYearGroupServiceLearning",
    "method": "GET",
    "path": "/v2p3/year-groups/{id}/projects/sl",
    "regex": "^/v2p3/year-groups/[^/]+/projects/sl$",
    "status": 200,
    "body": {
      "service_learning": {
        "title": null,
        "description": null,
        "abbreviation": null,
        "components": [
          {
            "slug": "string",
            "label": "string",
            "types": null,
            "outcomes": null
          }
        ]
      }
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listYearGroups",
    "method": "GET",
    "path": "/v2p3/year-groups",
    "regex": "^/v2p3/year-groups$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listStudentsFromYearGroups",
    "method": "GET",
    "path": "/v2p3/year-groups/{id}/students",
    "regex": "^/v2p3/year-groups/[^/]+/students$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "addStudentToYearGroup",
    "method": "POST",
    "path": "/v2p3/year-groups/{id}/add_students",
    "regex": "^/v2p3/year-groups/[^/]+/add_students$",
    "status": 204,
    "requestBody": {
      "student_ids": [
        1
      ]
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "removeStudentToYearGroup",
    "method": "POST",
    "path": "/v2p3/year-groups/{id}/remove_students",
    "regex": "^/v2p3/year-groups/[^/]+/remove_students$",
    "status": 204,
    "requestBody": {
      "student_ids": [
        1
      ]
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "listAdvisorsFromYearGroup",
    "method": "GET",
    "path": "/v2p3/year-groups/{id}/advisors",
    "regex": "^/v2p3/year-groups/[^/]+/advisors$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "getTeacherMemberships",
    "method": "GET",
    "path": "/v2p3/classes/{class_id}/teachers",
    "regex": "^/v2p3/classes/[^/]+/teachers$",
    "status": 204,
    "multipart": false,
    "streaming": null
  },
  {
    "id": "bulkUpdateTeacherMemberships",
    "method": "PUT",
    "path": "/v2p3/classes/{class_id}/teachers",
    "regex": "^/v2p3/classes/[^/]+/teachers$",
    "status": 204,
    "requestBody": {
      "teachers": [
        {
          "id": "mock_id",
          "show_on_reports": true
        }
      ]
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "addTeachersToClass",
    "method": "POST",
    "path": "/v2p3/classes/{class_id}/teachers/add_teachers",
    "regex": "^/v2p3/classes/[^/]+/teachers/add_teachers$",
    "status": 204,
    "requestBody": {
      "teacher_ids": [
        1
      ]
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "removeTeachersFromClass",
    "method": "DELETE",
    "path": "/v2p3/classes/{class_id}/teachers/remove_teachers",
    "regex": "^/v2p3/classes/[^/]+/teachers/remove_teachers$",
    "status": 204,
    "requestBody": {
      "teacher_ids": [
        1
      ]
    },
    "multipart": false,
    "streaming": null
  },
  {
    "id": "createTaskforClass",
    "method": "POST",
    "path": "/v2p3/classes/{class_id}/tasks",
    "regex": "^/v2p3/classes/[^/]+/tasks$",
    "status": 204,
    "requestBody": {
      "core_task": {
        "author_id": 1,
        "name": "string",
        "due_date": "2026-05-25T00:00:00.000Z",
        "assessment_type_id": 1,
        "task_category_id": 1,
        "notify_group": true,
        "notify_parents": true,
        "unit_id": 1,
        "lesson_experience_id": 1,
        "hl": true,
        "sl": true,
        "notes": "string",
        "enable_dropbox": true,
        "enable_turnitin": true,
        "dropbox_opening_days": 1,
        "assigned_student_ids": [
          1
        ],
        "draft": true,
        "hide_assessment_results": true,
        "phase": 1,
        "assessments": {
          "criteria": {
            "enabled": true,
            "criterion_ids": [
              1
            ]
          },
          "points": {
            "enabled": true,
            "max_points": 1
          },
          "binary": {
            "enabled": true
          },
          "comment": {
            "enabled": true
          }
        }
      }
    },
    "multipart": false,
    "streaming": null
  }
];
const wsRoutes = [];

function sendWsFrame(socket, text) {
  const payload = Buffer.from(text, "utf8");
  const length = payload.length;
  const header = length < 126 ? Buffer.from([0x81, length]) : Buffer.from([0x81, 126, (length >> 8) & 0xff, length & 0xff]);
  socket.write(Buffer.concat([header, payload]));
}

function handleUpgrade(request, socket) {
  const url = new URL(request.url ?? "/", "http://127.0.0.1");
  const route = wsRoutes.find((candidate) => new RegExp(candidate.regex).test(url.pathname));
  const key = request.headers["sec-websocket-key"];
  if (!route || !key) {
    socket.destroy();
    return;
  }
  const accept = createHash("sha1").update(key + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11").digest("base64");
  socket.write("HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: " + accept + "\r\n\r\n");
  for (let index = 0; index < 2; index += 1) {
    sendWsFrame(socket, JSON.stringify({ ...route.event, index }));
  }
  socket.on("data", () => {});
  socket.on("error", () => {});
  setTimeout(() => { try { socket.end(); } catch { /* closed */ } }, 250);
}

export function createMockServer() {
  const server = http.createServer(async (request, response) => {
    const url = new URL(request.url ?? "/", "http://127.0.0.1");
    const route = routes.find((candidate) => candidate.method === request.method && new RegExp(candidate.regex).test(url.pathname));
    if (!route) {
      sendJson(response, 404, { error: "No mock route matched", method: request.method, path: url.pathname });
      return;
    }

    await drain(request);
    response.setHeader("x-sdkgen-mock-route", route.id);

    const accept = String(request.headers["accept"] ?? "");
    if (route.streaming && accept.includes("text/event-stream")) {
      sendStream(response, route.streaming);
      return;
    }

    if (route.status === 204) {
      response.writeHead(204, { "connection": "close" });
      response.end();
      return;
    }
    sendJson(response, route.status, route.body);
  });
  server.on("upgrade", handleUpgrade);
  return server;
}

function sendStream(response, streaming) {
  response.writeHead(200, {
    "content-type": streaming.sse ? "text/event-stream" : "application/x-ndjson",
    "cache-control": "no-store",
    "connection": "close",
  });
  for (let index = 0; index < 2; index += 1) {
    const payload = JSON.stringify({ ...streaming.event, index });
    response.write(streaming.sse ? `data: ${payload}\n\n` : `${payload}\n`);
  }
  if (streaming.done) {
    response.write(streaming.sse ? `data: ${streaming.done}\n\n` : `${streaming.done}\n`);
  }
  response.end();
}

async function drain(request) {
  for await (const _chunk of request) {
    // Drain the request body so clients can reuse connections during tests.
  }
}

function sendJson(response, status, body) {
  response.writeHead(status, {
    "content-type": "application/json",
    "cache-control": "no-store",
    "connection": "close",
  });
  response.end(JSON.stringify(body ?? null));
}

function samplePath(path) {
  return path.replace(/\{[^}]+\}/g, "test");
}

async function selfTest() {
  const server = createMockServer();
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const address = server.address();
  const port = typeof address === "object" && address ? address.port : 0;
  try {
    for (const route of routes) {
      const response = await fetch(`http://127.0.0.1:${port}${samplePath(route.path)}`, {
        method: route.method,
        headers: route.requestBody ? { "content-type": "application/json" } : undefined,
        body: route.requestBody && route.method !== "GET" && route.method !== "HEAD" ? JSON.stringify(route.requestBody) : undefined,
      });
      if (response.status !== route.status) {
        throw new Error(`${route.method} ${route.path} returned ${response.status}, expected ${route.status}`);
      }
      if (route.status !== 204) {
        JSON.parse(await response.text());
      }
    }
    console.log(`mock self-test passed (${routes.length} routes)`);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
}

async function main() {
  if (process.argv.includes("--check")) {
    console.log(`mock server contains ${routes.length} routes`);
    return;
  }
  if (process.argv.includes("--self-test")) {
    await selfTest();
    return;
  }

  const portIndex = process.argv.indexOf("--port");
  const port = portIndex === -1 ? 4010 : Number(process.argv[portIndex + 1] ?? "4010");
  const server = createMockServer();
  server.listen(port, "127.0.0.1", () => {
    const address = server.address();
    const actualPort = typeof address === "object" && address ? address.port : port;
    console.log(`mock server listening on http://127.0.0.1:${actualPort}`);
  });
  // Safety auto-shutdown so a conformance run that is killed before it can stop the
  // server never leaves an orphaned process lingering on the machine.
  const lifetime = Number(process.env.SDKGEN_MOCK_LIFETIME_MS ?? "60000");
  if (lifetime > 0) setTimeout(() => process.exit(0), lifetime).unref();
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}
