#!/usr/bin/env node
/*
 * Generated MCP server for API V2P3. Zero-dependency: newline-delimited JSON-RPC 2.0
 * over stdio plus a streamable-HTTP transport. Protocol revision 2025-06-18.
 *
 * Tool modes (default: dynamic; override with --tools):
 *   typed    one strongly-typed tool per endpoint (schemas from the API spec)
 *   dynamic  three meta-tools: list_api_endpoints, get_api_endpoint_schema, invoke_api_endpoint
 *   code     execute (constrained HTTP) + search_docs, for agents that write code
 *
 * Flags:
 *   --transport stdio|http        transport (default stdio)
 *   --port <n>                    HTTP port (default 3000)
 *   --tools typed|dynamic|code    tool mode
 *   --tool <name>                 (repeatable) mount only these tools
 *   --scope read|write|<tag>      (repeatable) filter tools by class or OpenAPI tag
 *   --allowed-methods <regex>     (repeatable) only allow commands matching these
 *   --blocked-methods <regex>     (repeatable) block commands matching these
 *   --allow-http-gets             permit GETs from the code/execute tool
 *   --oauth-client-id <id>        OAuth2 client id (else env)
 *   --oauth-client-secret <s>     OAuth2 client secret (else env)
 *   --self-test                   boot, validate every mode offline, exit
 */
import { createInterface } from "node:readline";
import { createServer } from "node:http";
const PROTOCOL_VERSION = "2025-06-18";
const SERVER = { name: "API V2P3 MCP", version: "v2p3" };
const DEFAULT_MODE = "dynamic";
const ENABLE_DOCS_TOOL = true;
const ENABLE_CODE_TOOL = true;
const DEFAULT_PERMISSIONS = { "allow_http_gets": false, "allowed_methods": [], "blocked_methods": [] };
const endpoints = [
    {
        "name": "coursework_listGradesForClass",
        "command": "coursework.listGradesForClass",
        "operationId": "listGradesForClass",
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
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get all Grades for a Class during an Academic Term",
        "tags": [
            "Coursework"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "class_id": {
                    "type": "integer",
                    "description": "Unique identifier for the class."
                },
                "term_id": {
                    "type": "integer",
                    "description": "Unique identifier for the academic term."
                },
                "student_ids": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "description": "Filter results to specific students. Accepts repeated params or a comma-separated string."
                },
                "include_archived_students": {
                    "type": "boolean",
                    "description": "When true, includes students who have been archived (graduated or withdrawn). Defaults to false."
                }
            },
            "required": [
                "class_id",
                "term_id"
            ]
        }
    },
    {
        "name": "coursework_listTermGradesForClass",
        "command": "coursework.listTermGradesForClass",
        "operationId": "listTermGradesForClass",
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
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Term Grades for a Class",
        "tags": [
            "Coursework"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "class_id": {
                    "type": "integer",
                    "description": "Unique identifier for the class."
                },
                "term_id": {
                    "type": "integer",
                    "description": "Unique identifier for the academic term."
                },
                "student_ids": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "description": "Filter results to specific students. Accepts repeated params or a comma-separated string."
                },
                "include_archived_students": {
                    "type": "boolean",
                    "description": "When true, includes students who have been archived (graduated or withdrawn). Defaults to false."
                },
                "unenrolled_only": {
                    "type": "boolean",
                    "description": "When true, returns only term grades for students who are no longer enrolled in the class but still have grade records. Useful for retrieving historical data after student transfers."
                }
            },
            "required": [
                "class_id",
                "term_id"
            ]
        }
    },
    {
        "name": "attendance_setAttendanceSettings",
        "command": "attendance.setAttendanceSettings",
        "operationId": "SetAttendanceSettings",
        "httpMethod": "PUT",
        "path": "/v2p3/classes/{class_id}/academic-years/{academic_year_id}/attendance/settings",
        "pathParams": [
            "class_id",
            "academic_year_id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Set or Update an Attendance Settings for a Class in an Academic Year",
        "tags": [
            "Attendance"
        ],
        "readOnly": false,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "class_id": {
                    "type": "integer",
                    "description": "Unique identifier for class"
                },
                "academic_year_id": {
                    "type": "integer",
                    "description": "Academic Year (Term Set) ID"
                },
                "body": {
                    "type": "object",
                    "title": "SetAttendanceSettingsRequest",
                    "properties": {
                        "settings": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "title": "SetAttendanceSettingsRequestSettingsItem",
                                "properties": {
                                    "period": {
                                        "type": "integer",
                                        "description": "Attendance period number."
                                    },
                                    "day": {
                                        "type": "integer",
                                        "description": "Day of the week or rotation day number."
                                    },
                                    "location": {
                                        "type": "string",
                                        "description": "Lesson location."
                                    }
                                },
                                "required": [
                                    "period",
                                    "day"
                                ]
                            }
                        }
                    },
                    "required": [
                        "settings"
                    ],
                    "description": "JSON request body"
                }
            },
            "required": [
                "class_id",
                "academic_year_id",
                "body"
            ]
        }
    },
    {
        "name": "attendance_listCategories",
        "command": "attendance.listCategories",
        "operationId": "listCategories",
        "httpMethod": "GET",
        "path": "/v2p3/school/academic-years/{academic_year_id}/attendance_categories",
        "pathParams": [
            "academic_year_id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Attendance Categories",
        "tags": [
            "Attendance"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "academic_year_id": {
                    "type": "string",
                    "description": "Academic Year ID"
                }
            },
            "required": [
                "academic_year_id"
            ]
        }
    },
    {
        "name": "authentication_listTokenResources",
        "command": "authentication.listTokenResources",
        "operationId": "listTokenResources",
        "httpMethod": "GET",
        "path": "/v2p3/auth/permissions",
        "pathParams": [],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get all Permissions",
        "tags": [
            "Authentication"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {}
        }
    },
    {
        "name": "authentication_createOauthToken",
        "command": "authentication.createOauthToken",
        "operationId": "createOAuthToken",
        "httpMethod": "POST",
        "path": "/oauth/token",
        "pathParams": [],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Obtain an Access Token",
        "tags": [
            "Authentication"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "body": {
                    "type": "object",
                    "title": "OauthTokenRequest",
                    "properties": {
                        "grant_type": {
                            "type": "string",
                            "enum": [
                                "client_credentials"
                            ],
                            "title": "OauthTokenRequestGrantType",
                            "description": "The OAuth 2.0 grant type. Only `client_credentials` is supported for server-to-server API access."
                        },
                        "client_id": {
                            "type": "string",
                            "description": "The `client_id` (Application ID) of your OAuth application."
                        },
                        "client_secret": {
                            "type": "string",
                            "description": "The `client_secret` of your OAuth application."
                        },
                        "scope": {
                            "type": "string",
                            "description": "A space-separated list of scopes to request. Must be a subset of the scopes configured on the application. If omitted, all scopes defined on client creation will be granted."
                        }
                    },
                    "required": [
                        "grant_type",
                        "client_id",
                        "client_secret"
                    ],
                    "description": "JSON request body"
                }
            }
        }
    },
    {
        "name": "utilities_showAvatarById",
        "command": "utilities.showAvatarById",
        "operationId": "showAvatarByID",
        "httpMethod": "GET",
        "path": "/v2p3/avatars/{id}",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Avatar",
        "tags": [
            "Utilities"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for user."
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "utilities_ping",
        "command": "utilities.ping",
        "operationId": "ping",
        "httpMethod": "GET",
        "path": "/v2p3/ping",
        "pathParams": [],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Ping",
        "tags": [
            "Utilities"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {}
        }
    },
    {
        "name": "behaviorNotes_listBehaviorNotes",
        "command": "behaviorNotes.listBehaviorNotes",
        "operationId": "listBehaviorNotes",
        "httpMethod": "GET",
        "path": "/v2p3/behavior/notes",
        "pathParams": [],
        "queryParams": [
            "modified_since",
            "page",
            "per_page",
            "student_ids"
        ],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get all behavior notes",
        "tags": [
            "Behavior Notes"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "modified_since": {
                    "type": "string",
                    "description": "A timestamp to filter the modification date of results."
                },
                "page": {
                    "type": "string",
                    "description": "An integer defining which page to display."
                },
                "per_page": {
                    "type": "string",
                    "description": "An integer defining the number of records to display per page."
                },
                "student_ids": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "description": "List of student ids. Accepts repeated params or a comma-separated string."
                }
            }
        }
    },
    {
        "name": "coursework_listCriteriaforClass",
        "command": "coursework.listCriteriaforClass",
        "operationId": "listCriteriaforClass",
        "httpMethod": "GET",
        "path": "/v2p3/classes/{id}/criteria",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Criteria for a Class",
        "tags": [
            "Coursework"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for class."
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "memberships_getStudentsForClass",
        "command": "memberships.getStudentsForClass",
        "operationId": "getStudentsForClass",
        "httpMethod": "GET",
        "path": "/v2p3/classes/{class_id}/students",
        "pathParams": [
            "class_id"
        ],
        "queryParams": [
            "include_archived_students",
            "student_ids"
        ],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Students for a Class",
        "tags": [
            "Memberships"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "class_id": {
                    "type": "integer",
                    "description": "Unique identifier for class."
                },
                "include_archived_students": {
                    "type": "boolean",
                    "description": "query parameter"
                },
                "student_ids": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "description": "List of student ids. Accepts repeated params or a comma-separated string."
                }
            },
            "required": [
                "class_id"
            ]
        }
    },
    {
        "name": "extendedApis_bulkUpdateStudentsFromClass",
        "command": "extendedApis.bulkUpdateStudentsFromClass",
        "operationId": "bulkUpdateStudentsFromClass",
        "httpMethod": "PATCH",
        "path": "/v2p3/classes/{class_id}/students",
        "pathParams": [
            "class_id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Bulk update Students from a Class",
        "tags": [
            "Extended APIs",
            "Classes"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "class_id": {
                    "type": "integer",
                    "description": "Unique identifier for class."
                },
                "body": {
                    "type": "object",
                    "title": "BulkUpdateStudents",
                    "properties": {
                        "students": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "title": "BulkUpdateStudentsStudentsItem",
                                "properties": {
                                    "id": {
                                        "type": "integer",
                                        "description": "Student ID"
                                    },
                                    "level": {
                                        "type": "string",
                                        "enum": [
                                            "HL",
                                            "SL"
                                        ],
                                        "title": "BulkUpdateStudentsStudentsItemLevel",
                                        "description": "Student level."
                                    }
                                }
                            },
                            "description": "An array of student IDs to add or update in the class."
                        }
                    },
                    "required": [
                        "students"
                    ],
                    "description": "JSON request body"
                }
            },
            "required": [
                "class_id"
            ]
        }
    },
    {
        "name": "coursework_listClassTaskCategories",
        "command": "coursework.listClassTaskCategories",
        "operationId": "listClassTaskCategories",
        "httpMethod": "GET",
        "path": "/v2p3/classes/{id}/task_categories",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Task Categories for Class",
        "tags": [
            "Coursework"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for class."
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "coursework_downloadSubmissionFile",
        "command": "coursework.downloadSubmissionFile",
        "operationId": "downloadSubmissionFile",
        "httpMethod": "GET",
        "path": "/v2p3/classes/{class_id}/tasks/{task_id}/submissions/{student_id}/files/{asset_id}",
        "pathParams": [
            "class_id",
            "task_id",
            "student_id",
            "asset_id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Download a Submission File",
        "tags": [
            "Coursework"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "class_id": {
                    "type": "integer",
                    "description": "Unique identifier for the class."
                },
                "task_id": {
                    "type": "integer",
                    "description": "Unique identifier for the task."
                },
                "student_id": {
                    "type": "integer",
                    "description": "Unique identifier for the student."
                },
                "asset_id": {
                    "type": "integer",
                    "description": "Unique identifier for the file."
                }
            },
            "required": [
                "class_id",
                "task_id",
                "student_id",
                "asset_id"
            ]
        }
    },
    {
        "name": "coursework_listTaskSubmissions",
        "command": "coursework.listTaskSubmissions",
        "operationId": "listTaskSubmissions",
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
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "List Student Submissions for a Task",
        "tags": [
            "Coursework"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "class_id": {
                    "type": "integer",
                    "description": "Unique identifier for the class."
                },
                "task_id": {
                    "type": "integer",
                    "description": "Unique identifier for the task."
                },
                "modified_since": {
                    "type": "string",
                    "description": "ISO 8601 timestamp; returns only submissions whose underlying file or task work was updated strictly after this time."
                },
                "page": {
                    "type": "integer",
                    "description": "Page number (default 1)."
                },
                "per_page": {
                    "type": "integer",
                    "description": "Items per page (default 100, min 1, max 500)."
                }
            },
            "required": [
                "class_id",
                "task_id"
            ]
        }
    },
    {
        "name": "coursework_getTaskSubmission",
        "command": "coursework.getTaskSubmission",
        "operationId": "getTaskSubmission",
        "httpMethod": "GET",
        "path": "/v2p3/classes/{class_id}/tasks/{task_id}/submissions/{student_id}",
        "pathParams": [
            "class_id",
            "task_id",
            "student_id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get a Single Student Submission",
        "tags": [
            "Coursework"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "class_id": {
                    "type": "integer",
                    "description": "Unique identifier for the class."
                },
                "task_id": {
                    "type": "integer",
                    "description": "Unique identifier for the task."
                },
                "student_id": {
                    "type": "integer",
                    "description": "Unique identifier for the student."
                }
            },
            "required": [
                "class_id",
                "task_id",
                "student_id"
            ]
        }
    },
    {
        "name": "coursework_listTasksforClass",
        "command": "coursework.listTasksforClass",
        "operationId": "listTasksforClass",
        "httpMethod": "GET",
        "path": "/v2p3/classes/{id}/tasks",
        "pathParams": [
            "id"
        ],
        "queryParams": [
            "term_id"
        ],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Tasks for a Class",
        "tags": [
            "Coursework"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for class."
                },
                "term_id": {
                    "type": "integer",
                    "description": "Unique identifier for term."
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "coursework_getTasksByIdforClass",
        "command": "coursework.getTasksByIdforClass",
        "operationId": "getTasksByIDforClass",
        "httpMethod": "GET",
        "path": "/v2p3/classes/{class_id}/tasks/{id}",
        "pathParams": [
            "id",
            "class_id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get a Task for a Class",
        "tags": [
            "Coursework"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for task."
                },
                "class_id": {
                    "type": "integer",
                    "description": "Unique identifier for class."
                }
            },
            "required": [
                "id",
                "class_id"
            ]
        }
    },
    {
        "name": "coursework_updateTaskforClass",
        "command": "coursework.updateTaskforClass",
        "operationId": "updateTaskforClass",
        "httpMethod": "PUT",
        "path": "/v2p3/classes/{class_id}/tasks/{id}",
        "pathParams": [
            "class_id",
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Update a Task for a Class",
        "tags": [
            "Coursework"
        ],
        "readOnly": false,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "class_id": {
                    "type": "integer",
                    "description": "Unique identifier for class."
                },
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for task."
                },
                "body": {
                    "type": "object",
                    "title": "CourseworkUpdateTaskforClassRequest",
                    "properties": {
                        "core_task": {
                            "type": "object",
                            "title": "CoreTaskAttributes",
                            "properties": {
                                "author_id": {
                                    "type": "integer"
                                },
                                "name": {
                                    "type": "string"
                                },
                                "due_date": {
                                    "type": "string",
                                    "format": "date-time"
                                },
                                "assessment_type_id": {
                                    "type": "integer"
                                },
                                "task_category_id": {
                                    "type": "integer"
                                },
                                "notify_group": {
                                    "type": "boolean"
                                },
                                "notify_parents": {
                                    "type": "boolean"
                                },
                                "unit_id": {
                                    "type": "integer"
                                },
                                "lesson_experience_id": {
                                    "type": "integer"
                                },
                                "hl": {
                                    "type": "boolean"
                                },
                                "sl": {
                                    "type": "boolean"
                                },
                                "notes": {
                                    "type": "string"
                                },
                                "enable_dropbox": {
                                    "type": "boolean"
                                },
                                "enable_turnitin": {
                                    "type": "boolean"
                                },
                                "dropbox_opening_days": {
                                    "type": "integer"
                                },
                                "assigned_student_ids": {
                                    "type": "array",
                                    "items": {
                                        "type": "integer"
                                    }
                                },
                                "draft": {
                                    "type": "boolean"
                                },
                                "hide_assessment_results": {
                                    "type": "boolean",
                                    "description": "When true, assessment results are hidden from students and parents."
                                },
                                "phase": {
                                    "type": "integer"
                                },
                                "assessments": {
                                    "type": "object",
                                    "title": "CoreTaskAttributesAssessments",
                                    "properties": {
                                        "criteria": {
                                            "type": "object",
                                            "title": "CoreTaskAttributesAssessmentsCriteria",
                                            "properties": {
                                                "enabled": {
                                                    "type": "boolean"
                                                },
                                                "criterion_ids": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "integer"
                                                    }
                                                }
                                            }
                                        },
                                        "points": {
                                            "type": "object",
                                            "title": "CoreTaskAttributesAssessmentsPoints",
                                            "properties": {
                                                "enabled": {
                                                    "type": "boolean"
                                                },
                                                "max_points": {
                                                    "type": "integer"
                                                }
                                            }
                                        },
                                        "binary": {
                                            "type": "object",
                                            "title": "CoreTaskAttributesAssessmentsBinary",
                                            "properties": {
                                                "enabled": {
                                                    "type": "boolean"
                                                }
                                            }
                                        },
                                        "comment": {
                                            "type": "object",
                                            "title": "CoreTaskAttributesAssessmentsComment",
                                            "properties": {
                                                "enabled": {
                                                    "type": "boolean"
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            "required": [
                                "author_id",
                                "name",
                                "due_date",
                                "assessment_type_id"
                            ]
                        }
                    },
                    "required": [
                        "core_task"
                    ],
                    "description": "JSON request body"
                }
            },
            "required": [
                "class_id",
                "id",
                "body"
            ]
        }
    },
    {
        "name": "coursework_partialUpdateTaskforClass",
        "command": "coursework.partialUpdateTaskforClass",
        "operationId": "partialUpdateTaskforClass",
        "httpMethod": "PATCH",
        "path": "/v2p3/classes/{class_id}/tasks/{id}",
        "pathParams": [
            "class_id",
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Partially Update a Task for a Class",
        "tags": [
            "Coursework"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "class_id": {
                    "type": "integer",
                    "description": "Unique identifier for class."
                },
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for task."
                },
                "body": {
                    "type": "object",
                    "title": "CourseworkPartialUpdateTaskforClassRequest",
                    "properties": {
                        "core_task": {
                            "type": "object",
                            "title": "CoreTaskPatchAttributes",
                            "properties": {
                                "author_id": {
                                    "type": "integer"
                                },
                                "name": {
                                    "type": "string"
                                },
                                "due_date": {
                                    "type": "string",
                                    "format": "date-time"
                                },
                                "assessment_type_id": {
                                    "type": "integer"
                                },
                                "task_category_id": {
                                    "type": "integer"
                                },
                                "notify_group": {
                                    "type": "boolean"
                                },
                                "notify_parents": {
                                    "type": "boolean"
                                },
                                "unit_id": {
                                    "type": "integer"
                                },
                                "lesson_experience_id": {
                                    "type": "integer"
                                },
                                "hl": {
                                    "type": "boolean"
                                },
                                "sl": {
                                    "type": "boolean"
                                },
                                "notes": {
                                    "type": "string"
                                },
                                "enable_dropbox": {
                                    "type": "boolean"
                                },
                                "enable_turnitin": {
                                    "type": "boolean"
                                },
                                "dropbox_opening_days": {
                                    "type": "integer"
                                },
                                "assigned_student_ids": {
                                    "type": "array",
                                    "items": {
                                        "type": "integer"
                                    }
                                },
                                "draft": {
                                    "type": "boolean"
                                },
                                "hide_assessment_results": {
                                    "type": "boolean",
                                    "description": "When true, assessment results are hidden from students and parents."
                                },
                                "phase": {
                                    "type": "integer"
                                },
                                "assessments": {
                                    "type": "object",
                                    "title": "CoreTaskPatchAttributesAssessments",
                                    "properties": {
                                        "criteria": {
                                            "type": "object",
                                            "title": "CoreTaskPatchAttributesAssessmentsCriteria",
                                            "properties": {
                                                "enabled": {
                                                    "type": "boolean"
                                                },
                                                "criterion_ids": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "integer"
                                                    }
                                                }
                                            }
                                        },
                                        "points": {
                                            "type": "object",
                                            "title": "CoreTaskPatchAttributesAssessmentsPoints",
                                            "properties": {
                                                "enabled": {
                                                    "type": "boolean"
                                                },
                                                "max_points": {
                                                    "type": "integer"
                                                }
                                            }
                                        },
                                        "binary": {
                                            "type": "object",
                                            "title": "CoreTaskPatchAttributesAssessmentsBinary",
                                            "properties": {
                                                "enabled": {
                                                    "type": "boolean"
                                                }
                                            }
                                        },
                                        "comment": {
                                            "type": "object",
                                            "title": "CoreTaskPatchAttributesAssessmentsComment",
                                            "properties": {
                                                "enabled": {
                                                    "type": "boolean"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "required": [
                        "core_task"
                    ],
                    "description": "JSON request body"
                }
            },
            "required": [
                "class_id",
                "id",
                "body"
            ]
        }
    },
    {
        "name": "coursework_deleteTaskforClass",
        "command": "coursework.deleteTaskforClass",
        "operationId": "deleteTaskforClass",
        "httpMethod": "DELETE",
        "path": "/v2p3/classes/{class_id}/tasks/{id}",
        "pathParams": [
            "class_id",
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Delete a Task for a Class",
        "tags": [
            "Coursework"
        ],
        "readOnly": false,
        "idempotent": true,
        "destructive": true,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "class_id": {
                    "type": "integer",
                    "description": "Unique identifier for class."
                },
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for task."
                }
            },
            "required": [
                "class_id",
                "id"
            ]
        }
    },
    {
        "name": "coursework_listStudentAssessmentResultsForClassTask",
        "command": "coursework.listStudentAssessmentResultsForClassTask",
        "operationId": "listStudentAssessmentResultsForClassTask",
        "httpMethod": "GET",
        "path": "/v2p3/classes/{class_id}/tasks/{id}/students",
        "pathParams": [
            "id",
            "class_id"
        ],
        "queryParams": [
            "student_ids"
        ],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Student Assessment Results for a Task and Class",
        "tags": [
            "Coursework"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for task."
                },
                "class_id": {
                    "type": "integer",
                    "description": "Unique identifier for class."
                },
                "student_ids": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "description": "List of student ids. Accepts repeated params or a comma-separated string."
                }
            },
            "required": [
                "id",
                "class_id"
            ]
        }
    },
    {
        "name": "attendance_getClassTimetable",
        "command": "attendance.getClassTimetable",
        "operationId": "getClassTimetable",
        "httpMethod": "GET",
        "path": "/v2p3/classes/{class_id}/timetable",
        "pathParams": [
            "class_id"
        ],
        "queryParams": [
            "include_disabled"
        ],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Class timetable",
        "tags": [
            "Attendance"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "class_id": {
                    "type": "integer",
                    "description": "Unique identifier for class."
                },
                "include_disabled": {
                    "type": "boolean",
                    "description": "Configure response to include or exclude disabled slots."
                }
            },
            "required": [
                "class_id"
            ]
        }
    },
    {
        "name": "classes_listClasses",
        "command": "classes.listClasses",
        "operationId": "listClasses",
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
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get all Classes",
        "tags": [
            "Classes"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "modified_since": {
                    "type": "string",
                    "description": "A timestamp to filter the modification date of results."
                },
                "deleted_since": {
                    "type": "string",
                    "description": "A timestamp to filter the deleted date of results."
                },
                "page": {
                    "type": "string",
                    "description": "An integer defining which page to display."
                },
                "per_page": {
                    "type": "string",
                    "description": "An integer defining the number of records to display per page."
                },
                "archived": {
                    "type": "boolean",
                    "description": "A boolean that, if set to True, returns only archived classes."
                }
            }
        }
    },
    {
        "name": "classes_createClass",
        "command": "classes.createClass",
        "operationId": "createClass",
        "httpMethod": "POST",
        "path": "/v2p3/classes",
        "pathParams": [],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Create a class",
        "tags": [
            "Classes"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "body": {
                    "type": "object",
                    "title": "CreateClass",
                    "properties": {
                        "start_term_id": {
                            "type": "integer",
                            "description": "Academic term ID."
                        },
                        "end_term_id": {
                            "type": "integer",
                            "description": "Academic term ID."
                        },
                        "subject_id": {
                            "type": "integer",
                            "description": "Subject’s unique ID."
                        },
                        "program": {
                            "type": "string",
                            "description": "Program code."
                        },
                        "grade_number": {
                            "type": "integer",
                            "description": "Grade number."
                        },
                        "name": {
                            "type": "string",
                            "description": "Class Name."
                        },
                        "description": {
                            "type": "string",
                            "description": "Class description."
                        },
                        "language": {
                            "type": "string",
                            "description": "Language of Instruction. Receives a language code."
                        },
                        "uniq_id": {
                            "type": "string",
                            "description": "Unique ID in ManageBac."
                        },
                        "class_section": {
                            "type": "string",
                            "description": "Identifier for a duplicated class/grade."
                        },
                        "subject_ids": {
                            "type": "array",
                            "items": {
                                "type": "integer"
                            },
                            "description": "Subjects unique IDs."
                        },
                        "sl": {
                            "type": "boolean",
                            "description": "SL level"
                        },
                        "hl": {
                            "type": "boolean",
                            "description": "HL level"
                        },
                        "subject_option": {
                            "title": "CreateClassSubjectOption",
                            "anyOf": [
                                {
                                    "type": "string"
                                },
                                {
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                }
                            ],
                            "description": "Subject option."
                        },
                        "lock_memberships": {
                            "type": "string",
                            "description": "Lock Memberships."
                        }
                    },
                    "description": "JSON request body"
                }
            },
            "required": [
                "body"
            ]
        }
    },
    {
        "name": "extendedApis_upsertClasses",
        "command": "extendedApis.upsertClasses",
        "operationId": "upsertClasses",
        "httpMethod": "PATCH",
        "path": "/v2p3/classes",
        "pathParams": [],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Upsert many classes",
        "tags": [
            "Extended APIs",
            "Classes"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "body": {
                    "type": "object",
                    "title": "UpsertClasses",
                    "properties": {
                        "classes": {
                            "type": "array",
                            "items": {
                                "title": "UpsertClassesClassesItem",
                                "anyOf": [
                                    {
                                        "type": "object",
                                        "title": "UpsertClassesClassesItemVariant1",
                                        "properties": {
                                            "id": {
                                                "type": "integer",
                                                "description": "Unique ID in ManageBac."
                                            },
                                            "archived": {
                                                "type": "boolean",
                                                "description": "Archive Class."
                                            },
                                            "name": {
                                                "type": "string",
                                                "description": "Class Name."
                                            },
                                            "description": {
                                                "type": "string",
                                                "description": "Class description."
                                            },
                                            "language": {
                                                "type": "string",
                                                "description": "Language of Instruction. Receives a language code."
                                            },
                                            "uniq_id": {
                                                "type": "string",
                                                "description": "Unique ID in ManageBac."
                                            },
                                            "class_section": {
                                                "type": "string",
                                                "description": "Identifier for a duplicated class/grade."
                                            },
                                            "subject_ids": {
                                                "type": "array",
                                                "items": {
                                                    "type": "integer"
                                                },
                                                "description": "Subjects unique IDs."
                                            },
                                            "sl": {
                                                "type": "boolean",
                                                "description": "SL level"
                                            },
                                            "hl": {
                                                "type": "boolean",
                                                "description": "HL level"
                                            },
                                            "subject_option": {
                                                "title": "UpsertClassesClassesItemVariant1SubjectOption",
                                                "anyOf": [
                                                    {
                                                        "type": "string"
                                                    },
                                                    {
                                                        "type": "array",
                                                        "items": {
                                                            "type": "string"
                                                        }
                                                    }
                                                ],
                                                "description": "Subject option."
                                            },
                                            "lock_memberships": {
                                                "type": "string",
                                                "description": "Lock Memberships."
                                            }
                                        }
                                    },
                                    {
                                        "type": "object",
                                        "title": "CreateClass",
                                        "properties": {
                                            "start_term_id": {
                                                "type": "integer",
                                                "description": "Academic term ID."
                                            },
                                            "end_term_id": {
                                                "type": "integer",
                                                "description": "Academic term ID."
                                            },
                                            "subject_id": {
                                                "type": "integer",
                                                "description": "Subject’s unique ID."
                                            },
                                            "program": {
                                                "type": "string",
                                                "description": "Program code."
                                            },
                                            "grade_number": {
                                                "type": "integer",
                                                "description": "Grade number."
                                            },
                                            "name": {
                                                "type": "string",
                                                "description": "Class Name."
                                            },
                                            "description": {
                                                "type": "string",
                                                "description": "Class description."
                                            },
                                            "language": {
                                                "type": "string",
                                                "description": "Language of Instruction. Receives a language code."
                                            },
                                            "uniq_id": {
                                                "type": "string",
                                                "description": "Unique ID in ManageBac."
                                            },
                                            "class_section": {
                                                "type": "string",
                                                "description": "Identifier for a duplicated class/grade."
                                            },
                                            "subject_ids": {
                                                "type": "array",
                                                "items": {
                                                    "type": "integer"
                                                },
                                                "description": "Subjects unique IDs."
                                            },
                                            "sl": {
                                                "type": "boolean",
                                                "description": "SL level"
                                            },
                                            "hl": {
                                                "type": "boolean",
                                                "description": "HL level"
                                            },
                                            "subject_option": {
                                                "title": "CreateClassSubjectOption",
                                                "anyOf": [
                                                    {
                                                        "type": "string"
                                                    },
                                                    {
                                                        "type": "array",
                                                        "items": {
                                                            "type": "string"
                                                        }
                                                    }
                                                ],
                                                "description": "Subject option."
                                            },
                                            "lock_memberships": {
                                                "type": "string",
                                                "description": "Lock Memberships."
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "description": "JSON request body"
                }
            },
            "required": [
                "body"
            ]
        }
    },
    {
        "name": "classes_getClassById",
        "command": "classes.getClassById",
        "operationId": "getClassByID",
        "httpMethod": "GET",
        "path": "/v2p3/classes/{id}",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get a Class",
        "tags": [
            "Classes"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for class."
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "classes_updateClass",
        "command": "classes.updateClass",
        "operationId": "updateClass",
        "httpMethod": "PATCH",
        "path": "/v2p3/classes/{id}",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Update a class",
        "tags": [
            "Classes"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for class."
                },
                "body": {
                    "type": "object",
                    "title": "UpdateClass",
                    "properties": {
                        "archived": {
                            "type": "boolean",
                            "description": "Archive Class."
                        },
                        "name": {
                            "type": "string",
                            "description": "Class Name."
                        },
                        "description": {
                            "type": "string",
                            "description": "Class description."
                        },
                        "language": {
                            "type": "string",
                            "description": "Language of Instruction. Receives a language code."
                        },
                        "uniq_id": {
                            "type": "string",
                            "description": "Unique ID in ManageBac."
                        },
                        "class_section": {
                            "type": "string",
                            "description": "Identifier for a duplicated class/grade."
                        },
                        "subject_ids": {
                            "type": "array",
                            "items": {
                                "type": "integer"
                            },
                            "description": "Subjects unique IDs."
                        },
                        "sl": {
                            "type": "boolean",
                            "description": "SL level"
                        },
                        "hl": {
                            "type": "boolean",
                            "description": "HL level"
                        },
                        "subject_option": {
                            "title": "UpdateClassSubjectOption",
                            "anyOf": [
                                {
                                    "type": "string"
                                },
                                {
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                }
                            ],
                            "description": "Subject option."
                        },
                        "lock_memberships": {
                            "type": "string",
                            "description": "Lock Memberships."
                        }
                    },
                    "description": "JSON request body"
                }
            },
            "required": [
                "id",
                "body"
            ]
        }
    },
    {
        "name": "classes_addStudentsToClass",
        "command": "classes.addStudentsToClass",
        "operationId": "addStudentsToClass",
        "httpMethod": "POST",
        "path": "/v2p3/classes/{id}/add_students",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Add Students to a Class",
        "tags": [
            "Classes"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for class."
                },
                "body": {
                    "type": "object",
                    "title": "ClassesAddStudentsToClassRequest",
                    "properties": {
                        "student_ids": {
                            "type": "array",
                            "items": {
                                "type": "integer"
                            },
                            "description": "An array of student IDs to add to the class."
                        }
                    },
                    "required": [
                        "student_ids"
                    ],
                    "description": "JSON request body"
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "classes_removeStudentsFromClass",
        "command": "classes.removeStudentsFromClass",
        "operationId": "removeStudentsFromClass",
        "httpMethod": "POST",
        "path": "/v2p3/classes/{id}/remove_students",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Remove Students from a Class",
        "tags": [
            "Classes"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for class."
                },
                "body": {
                    "type": "object",
                    "title": "ClassesRemoveStudentsFromClassRequest",
                    "properties": {
                        "student_ids": {
                            "type": "array",
                            "items": {
                                "type": "integer"
                            },
                            "description": "An array of student IDs to remove from the class."
                        }
                    },
                    "required": [
                        "student_ids"
                    ],
                    "description": "JSON request body"
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "attendance_getAttendanceForClass",
        "command": "attendance.getAttendanceForClass",
        "operationId": "getAttendanceForClass",
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
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Attendance for a Class during an Academic Term",
        "tags": [
            "Attendance"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for class."
                },
                "term_id": {
                    "type": "integer",
                    "description": "Unique identifier for academic term."
                },
                "archived_students": {
                    "type": "boolean",
                    "description": "Filter students by archived status"
                },
                "student_ids": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "description": "List of student ids. Accepts repeated params or a comma-separated string."
                }
            },
            "required": [
                "id",
                "term_id"
            ]
        }
    },
    {
        "name": "attendance_getClassAttendanceForDate",
        "command": "attendance.getClassAttendanceForDate",
        "operationId": "getClassAttendanceForDate",
        "httpMethod": "GET",
        "path": "/v2p3/classes/{id}/attendance/date/{date}",
        "pathParams": [
            "id",
            "date"
        ],
        "queryParams": [
            "student_ids"
        ],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Class Attendance for a Date",
        "tags": [
            "Attendance"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for class."
                },
                "date": {
                    "type": "string",
                    "description": "A date string to define required day as yyyy-mm-dd."
                },
                "student_ids": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "description": "List of student ids. Accepts repeated params or a comma-separated string."
                }
            },
            "required": [
                "id",
                "date"
            ]
        }
    },
    {
        "name": "extendedApis_setClassAttendanceForStudents",
        "command": "extendedApis.setClassAttendanceForStudents",
        "operationId": "setClassAttendanceForStudents",
        "httpMethod": "PUT",
        "path": "/v2p3/classes/{id}/attendance",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Set or Update a Class Attendance for Students",
        "tags": [
            "Extended APIs",
            "Attendance"
        ],
        "readOnly": false,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for class."
                },
                "body": {
                    "type": "object",
                    "title": "BulkUpdateAttendance",
                    "properties": {
                        "attendances": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "title": "BulkUpdateAttendanceAttendancesItem",
                                "properties": {
                                    "student_id": {
                                        "type": "integer",
                                        "description": "Student ID."
                                    },
                                    "date": {
                                        "type": "string",
                                        "format": "date",
                                        "description": "Date of attendance."
                                    },
                                    "period": {
                                        "type": "integer",
                                        "description": "Attendance period number."
                                    },
                                    "status": {
                                        "type": "integer",
                                        "description": "Attendance status ID."
                                    },
                                    "notes": {
                                        "type": "string",
                                        "description": "Teacher notes."
                                    }
                                }
                            },
                            "description": "An array of Attendances data."
                        }
                    },
                    "required": [
                        "attendances"
                    ],
                    "description": "JSON request body"
                }
            },
            "required": [
                "id",
                "body"
            ]
        }
    },
    {
        "name": "classes_getClassTerms",
        "command": "classes.getClassTerms",
        "operationId": "getClassTerms",
        "httpMethod": "GET",
        "path": "/v2p3/classes/{id}/terms",
        "pathParams": [
            "id"
        ],
        "queryParams": [
            "academic_year_id",
            "active_only"
        ],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Class terms details",
        "tags": [
            "Classes"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for class."
                },
                "academic_year_id": {
                    "type": "integer",
                    "description": "Filter results by unique identifier for an academic year."
                },
                "active_only": {
                    "type": "boolean",
                    "description": "Filter results by active academic terms only."
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "attendance_getDateExcusals",
        "command": "attendance.getDateExcusals",
        "operationId": "getDateExcusals",
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
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get all Attendance Excusals for a date",
        "tags": [
            "Attendance"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "date": {
                    "type": "string",
                    "description": "A date string to define required day as yyyy-mm-dd."
                },
                "page": {
                    "type": "string",
                    "description": "An integer defining which page to display."
                },
                "per_page": {
                    "type": "string",
                    "description": "An integer defining the number of records to display per page."
                },
                "student_ids": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "description": "List of student ids. Accepts repeated params or a comma-separated string."
                }
            },
            "required": [
                "date"
            ]
        }
    },
    {
        "name": "attendance_getAttendanceForYearGroupByTerm",
        "command": "attendance.getAttendanceForYearGroupByTerm",
        "operationId": "getAttendanceForYearGroupByTerm",
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
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Homeroom Attendance for a Year Group and Term",
        "tags": [
            "Attendance"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "year_group_id": {
                    "type": "integer",
                    "description": "Unique identifier for year group."
                },
                "term_id": {
                    "type": "integer",
                    "description": "Unique identifier for academic term."
                },
                "archived_students": {
                    "type": "boolean",
                    "description": "Filter students by archived status"
                },
                "student_ids": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "description": "List of student ids. Accepts repeated params or a comma-separated string."
                }
            },
            "required": [
                "year_group_id",
                "term_id"
            ]
        }
    },
    {
        "name": "attendance_getAttendanceForYearGroupByDate",
        "command": "attendance.getAttendanceForYearGroupByDate",
        "operationId": "getAttendanceForYearGroupByDate",
        "httpMethod": "GET",
        "path": "/v2p3/year-groups/{year_group_id}/homeroom/attendance/date/{date}",
        "pathParams": [
            "year_group_id",
            "date"
        ],
        "queryParams": [
            "student_ids"
        ],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Homeroom Attendance for a Year Group by Date",
        "tags": [
            "Attendance"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "year_group_id": {
                    "type": "integer",
                    "description": "Unique identifier for year group."
                },
                "date": {
                    "type": "string",
                    "description": "A date string"
                },
                "student_ids": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "description": "List of student ids. Accepts repeated params or a comma-separated string."
                }
            },
            "required": [
                "year_group_id",
                "date"
            ]
        }
    },
    {
        "name": "attendance_getAttendanceAdjustmentsForYearGroupByTerm",
        "command": "attendance.getAttendanceAdjustmentsForYearGroupByTerm",
        "operationId": "getAttendanceAdjustmentsForYearGroupByTerm",
        "httpMethod": "GET",
        "path": "/v2p3/year-groups/{year_group_id}/homeroom/attendance/term/{term_id}/adjustments",
        "pathParams": [
            "year_group_id",
            "term_id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Homeroom Attendance Adjustments for a Year Group and Term",
        "tags": [
            "Attendance"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "year_group_id": {
                    "type": "integer",
                    "description": "Unique identifier for year group."
                },
                "term_id": {
                    "type": "integer",
                    "description": "Unique identifier for academic term."
                }
            },
            "required": [
                "year_group_id",
                "term_id"
            ]
        }
    },
    {
        "name": "memberships_listMemberships",
        "command": "memberships.listMemberships",
        "operationId": "listMemberships",
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
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get all Memberships",
        "tags": [
            "Memberships"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "class_ids[]": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "description": "The list of class IDs to select membership for"
                },
                "modified_since": {
                    "type": "string",
                    "description": "A timestamp to filter the modification date of results."
                },
                "deleted_since": {
                    "type": "string",
                    "description": "A timestamp to filter the deletion date of results."
                },
                "page": {
                    "type": "string",
                    "description": "An integer defining which page to display."
                },
                "per_page": {
                    "type": "string",
                    "description": "An integer defining the number of records to display per page."
                },
                "user_ids[]": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "description": "An integer list of users ids to filter by."
                },
                "user_ids": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "description": "An integer list of users ids to filter by."
                },
                "class_happens_on": {
                    "type": "string",
                    "format": "date",
                    "description": "A date param to filter by start term and end term date range."
                },
                "student_ids": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "description": "List of student ids. Accepts repeated params or a comma-separated string."
                }
            }
        }
    },
    {
        "name": "relationships_listOfParentChildrenRelationships",
        "command": "relationships.listOfParentChildrenRelationships",
        "operationId": "listOfParentChildrenRelationships",
        "httpMethod": "GET",
        "path": "/v2p3/parents/{parent_id}/children",
        "pathParams": [
            "parent_id"
        ],
        "queryParams": [
            "page",
            "per_page"
        ],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "List of parent-children relationships",
        "tags": [
            "Relationships"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "parent_id": {
                    "type": "string",
                    "description": "The unique numeric identifier of the parent record."
                },
                "page": {
                    "type": "string",
                    "description": "An integer defining which page to display. Defaults to 1."
                },
                "per_page": {
                    "type": "string",
                    "description": "An integer defining the number of records to display per page. Defaults to 100."
                }
            },
            "required": [
                "parent_id"
            ]
        }
    },
    {
        "name": "relationships_createParentChildRelationship",
        "command": "relationships.createParentChildRelationship",
        "operationId": "createParentChildRelationship",
        "httpMethod": "POST",
        "path": "/v2p3/parents/{parent_id}/children",
        "pathParams": [
            "parent_id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Create a parent-child relationship",
        "tags": [
            "Relationships"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "parent_id": {
                    "type": "string",
                    "description": "The unique numeric identifier of the parent record."
                },
                "body": {
                    "type": "object",
                    "title": "RelationshipsCreateParentChildRelationshipRequest",
                    "properties": {
                        "child": {
                            "type": "object",
                            "title": "ChildRelation",
                            "properties": {
                                "id": {
                                    "type": "integer",
                                    "description": "ManageBac ID of the child (student) record."
                                },
                                "relationship": {
                                    "type": [
                                        "string",
                                        "null"
                                    ],
                                    "enum": [
                                        "Mother",
                                        "Father",
                                        "Stepmother",
                                        "Stepfather",
                                        "Legal Guardian",
                                        "Grandmother",
                                        "Grandfather",
                                        "Sister",
                                        "Brother",
                                        "Uncle",
                                        "Aunt",
                                        "Other Guardian",
                                        "Consultant Recruiter"
                                    ],
                                    "title": "ChildRelationRelationship",
                                    "description": "The relationship of the parent/guardian to the child. Null if not specified."
                                }
                            },
                            "description": "Represents the link between a parent/guardian and a student, including the relationship type."
                        }
                    },
                    "required": [
                        "child"
                    ],
                    "description": "JSON request body"
                }
            },
            "required": [
                "parent_id"
            ]
        }
    },
    {
        "name": "relationships_bulkUpdateParentChildrenRelationships",
        "command": "relationships.bulkUpdateParentChildrenRelationships",
        "operationId": "bulkUpdateParentChildrenRelationships",
        "httpMethod": "PUT",
        "path": "/v2p3/parents/{parent_id}/children",
        "pathParams": [
            "parent_id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Bulk update a parent-children relationships",
        "tags": [
            "Relationships"
        ],
        "readOnly": false,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "parent_id": {
                    "type": "string",
                    "description": "The unique numeric identifier of the parent record."
                },
                "body": {
                    "type": "object",
                    "title": "RelationshipsBulkUpdateParentChildrenRelationshipsRequest",
                    "properties": {
                        "children": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "title": "RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItem",
                                "properties": {
                                    "id": {
                                        "type": "integer",
                                        "description": "ManageBac ID of the child (student) record."
                                    },
                                    "relationship": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "Mother",
                                            "Father",
                                            "Stepmother",
                                            "Stepfather",
                                            "Legal Guardian",
                                            "Grandmother",
                                            "Grandfather",
                                            "Sister",
                                            "Brother",
                                            "Uncle",
                                            "Aunt",
                                            "Other Guardian",
                                            "Consultant Recruiter"
                                        ],
                                        "title": "RelationshipsBulkUpdateParentChildrenRelationshipsRequestChildrenItemRelationship",
                                        "description": "The relationship of the parent/guardian to the child. Null if not specified."
                                    }
                                }
                            }
                        }
                    },
                    "required": [
                        "children"
                    ],
                    "description": "JSON request body"
                }
            },
            "required": [
                "parent_id"
            ]
        }
    },
    {
        "name": "relationships_getParentChildRelationship",
        "command": "relationships.getParentChildRelationship",
        "operationId": "getParentChildRelationship",
        "httpMethod": "GET",
        "path": "/v2p3/parents/{parent_id}/children/{id}",
        "pathParams": [
            "parent_id",
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get parent-child relationship",
        "tags": [
            "Relationships"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "parent_id": {
                    "type": "string",
                    "description": "The unique numeric identifier of the parent record."
                },
                "id": {
                    "type": "string",
                    "description": "The unique numeric identifier of the child (student) record."
                }
            },
            "required": [
                "parent_id",
                "id"
            ]
        }
    },
    {
        "name": "relationships_updateParentChildRelationship",
        "command": "relationships.updateParentChildRelationship",
        "operationId": "updateParentChildRelationship",
        "httpMethod": "PUT",
        "path": "/v2p3/parents/{parent_id}/children/{id}",
        "pathParams": [
            "parent_id",
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Update parent-child relationship",
        "tags": [
            "Relationships"
        ],
        "readOnly": false,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "parent_id": {
                    "type": "string",
                    "description": "The unique numeric identifier of the parent record."
                },
                "id": {
                    "type": "string",
                    "description": "The unique numeric identifier of the child (student) record."
                },
                "body": {
                    "type": "object",
                    "title": "RelationshipsUpdateParentChildRelationshipRequest",
                    "properties": {
                        "child": {
                            "type": "object",
                            "title": "RelationshipsUpdateParentChildRelationshipRequestChild",
                            "properties": {
                                "relationship": {
                                    "type": "string",
                                    "enum": [
                                        "Mother",
                                        "Father",
                                        "Stepmother",
                                        "Stepfather",
                                        "Legal Guardian",
                                        "Grandmother",
                                        "Grandfather",
                                        "Sister",
                                        "Brother",
                                        "Uncle",
                                        "Aunt",
                                        "Other Guardian",
                                        "Consultant Recruiter"
                                    ],
                                    "title": "RelationshipsUpdateParentChildRelationshipRequestChildRelationship"
                                }
                            }
                        }
                    },
                    "required": [
                        "child"
                    ],
                    "description": "JSON request body"
                }
            },
            "required": [
                "parent_id",
                "id"
            ]
        }
    },
    {
        "name": "relationships_deleteParentChildRelationship",
        "command": "relationships.deleteParentChildRelationship",
        "operationId": "deleteParentChildRelationship",
        "httpMethod": "DELETE",
        "path": "/v2p3/parents/{parent_id}/children/{id}",
        "pathParams": [
            "parent_id",
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Remove parent-child relationship",
        "tags": [
            "Relationships"
        ],
        "readOnly": false,
        "idempotent": true,
        "destructive": true,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "parent_id": {
                    "type": "string",
                    "description": "The unique numeric identifier of the parent record."
                },
                "id": {
                    "type": "string",
                    "description": "The unique numeric identifier of the child (student) record."
                }
            },
            "required": [
                "parent_id",
                "id"
            ]
        }
    },
    {
        "name": "parents_listParents",
        "command": "parents.listParents",
        "operationId": "listParents",
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
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get all Parents",
        "tags": [
            "Parents"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "ids[]": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "description": "Return only records with the given IDs."
                },
                "archived": {
                    "type": "boolean",
                    "description": "Return only archived (1) or only active (0) parents. If value is not specified, all parents are returned."
                },
                "modified_since": {
                    "type": "string",
                    "description": "An ISO 8601 timestamp to filter parents modified on or after this date."
                },
                "page": {
                    "type": "string",
                    "description": "An integer defining which page to display. Defaults to 1."
                },
                "per_page": {
                    "type": "string",
                    "description": "An integer defining the number of records to display per page. Defaults to 100."
                },
                "deleted_since": {
                    "type": "string",
                    "description": "An ISO 8601 timestamp to filter parents deleted on or after this date. Returns soft-deleted records."
                },
                "q": {
                    "type": "string",
                    "description": "A search string matched against parent name, email, and other fields."
                }
            }
        }
    },
    {
        "name": "parents_createParent",
        "command": "parents.createParent",
        "operationId": "createParent",
        "httpMethod": "POST",
        "path": "/v2p3/parents",
        "pathParams": [],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Create New Parent",
        "tags": [
            "Parents"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "body": {
                    "type": "object",
                    "title": "ParentsCreateParentRequest",
                    "properties": {
                        "parent": {
                            "type": "object",
                            "title": "ParentsCreateParentRequestParent",
                            "properties": {}
                        },
                        "options": {
                            "type": "object",
                            "title": "ParentsCreateParentRequestOptions",
                            "properties": {
                                "send_welcome_email": {
                                    "type": "boolean",
                                    "description": "If true, a welcome email is enqueued for the newly created parent."
                                }
                            },
                            "description": "Request directives applied during the create operation."
                        }
                    },
                    "required": [
                        "parent"
                    ],
                    "description": "JSON request body"
                }
            }
        }
    },
    {
        "name": "parents_getParentById",
        "command": "parents.getParentById",
        "operationId": "getParentByID",
        "httpMethod": "GET",
        "path": "/v2p3/parents/{id}",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get a Parent",
        "tags": [
            "Parents"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "The unique numeric identifier of the parent record."
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "parents_updateParent",
        "command": "parents.updateParent",
        "operationId": "updateParent",
        "httpMethod": "PATCH",
        "path": "/v2p3/parents/{id}",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Update a Parent",
        "tags": [
            "Parents"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "The unique numeric identifier of the parent record."
                },
                "body": {
                    "type": "object",
                    "title": "ParentsUpdateParentRequest",
                    "properties": {
                        "parent": {
                            "type": "object",
                            "title": "ParentsUpdateParentRequestParent",
                            "properties": {}
                        }
                    },
                    "required": [
                        "parent"
                    ],
                    "description": "JSON request body"
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "parents_archiveParent",
        "command": "parents.archiveParent",
        "operationId": "archiveParent",
        "httpMethod": "PUT",
        "path": "/v2p3/parents/{id}/archive",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Archive a Parent",
        "tags": [
            "Parents"
        ],
        "readOnly": false,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "The unique numeric identifier of the parent record to archive."
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "parents_unarchiveParent",
        "command": "parents.unarchiveParent",
        "operationId": "unarchiveParent",
        "httpMethod": "PUT",
        "path": "/v2p3/parents/{id}/unarchive",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Unarchive a Parent",
        "tags": [
            "Parents"
        ],
        "readOnly": false,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "The unique numeric identifier of the parent record to unarchive."
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "parents_sendParentWelcomeEmail",
        "command": "parents.sendParentWelcomeEmail",
        "operationId": "sendParentWelcomeEmail",
        "httpMethod": "POST",
        "path": "/v2p3/parents/{id}/welcome_email",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Send Welcome Email to a Parent",
        "tags": [
            "Parents"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for a parent."
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "academics_createAcademicTerm",
        "command": "academics.createAcademicTerm",
        "operationId": "createAcademicTerm",
        "httpMethod": "POST",
        "path": "/v2p3/school/programs/{program_code}/academic-years/{academic_year_id}/academic-terms",
        "pathParams": [
            "program_code",
            "academic_year_id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Create Academic Term",
        "tags": [
            "Academics"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "program_code": {
                    "type": "string",
                    "description": "Program scope"
                },
                "academic_year_id": {
                    "type": "string",
                    "description": "Academic Year ID"
                },
                "body": {
                    "type": "object",
                    "title": "AcademicTermRequest",
                    "properties": {
                        "academic_term": {
                            "type": "object",
                            "title": "AcademicTerm",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "description": "Display name for this term (e.g. \"Semester 1\", \"Term 2\"). Required on create."
                                },
                                "starts_on": {
                                    "type": "string",
                                    "description": "First day of the term in yyyy-mm-dd format. Required on create."
                                },
                                "ends_on": {
                                    "type": "string",
                                    "description": "Last day of the term in yyyy-mm-dd format. Required on create."
                                },
                                "locked": {
                                    "type": "boolean",
                                    "description": "When true, teachers cannot edit term grades for this term. Typically locked after grades are finalized and published."
                                },
                                "enable_exam_grade": {
                                    "type": "boolean",
                                    "description": "When true, an additional exam grade column is available alongside the regular term grade. Used in IB Diploma for predicted vs exam grades."
                                }
                            },
                            "required": [
                                "name",
                                "starts_on",
                                "ends_on"
                            ],
                            "description": "A term (semester/trimester/quarter) within an academic year. Terms define the time periods for which term grades are recorded."
                        }
                    },
                    "description": "JSON request body"
                }
            },
            "required": [
                "program_code",
                "academic_year_id"
            ]
        }
    },
    {
        "name": "academics_updateAcademicTerm",
        "command": "academics.updateAcademicTerm",
        "operationId": "updateAcademicTerm",
        "httpMethod": "PATCH",
        "path": "/v2p3/school/programs/{program_code}/academic-years/{academic_year_id}/academic-terms/{id}",
        "pathParams": [
            "program_code",
            "academic_year_id",
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Update Academic Term",
        "tags": [
            "Academics"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "program_code": {
                    "type": "string",
                    "description": "Program scope"
                },
                "academic_year_id": {
                    "type": "string",
                    "description": "Academic Year ID"
                },
                "id": {
                    "type": "string",
                    "description": "Academic Term ID"
                },
                "body": {
                    "type": "object",
                    "title": "AcademicTermRequest",
                    "properties": {
                        "academic_term": {
                            "type": "object",
                            "title": "AcademicTerm",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "description": "Display name for this term (e.g. \"Semester 1\", \"Term 2\"). Required on create."
                                },
                                "starts_on": {
                                    "type": "string",
                                    "description": "First day of the term in yyyy-mm-dd format. Required on create."
                                },
                                "ends_on": {
                                    "type": "string",
                                    "description": "Last day of the term in yyyy-mm-dd format. Required on create."
                                },
                                "locked": {
                                    "type": "boolean",
                                    "description": "When true, teachers cannot edit term grades for this term. Typically locked after grades are finalized and published."
                                },
                                "enable_exam_grade": {
                                    "type": "boolean",
                                    "description": "When true, an additional exam grade column is available alongside the regular term grade. Used in IB Diploma for predicted vs exam grades."
                                }
                            },
                            "required": [
                                "name",
                                "starts_on",
                                "ends_on"
                            ],
                            "description": "A term (semester/trimester/quarter) within an academic year. Terms define the time periods for which term grades are recorded."
                        }
                    },
                    "description": "JSON request body"
                }
            },
            "required": [
                "program_code",
                "academic_year_id",
                "id"
            ]
        }
    },
    {
        "name": "academics_deleteAcademicTerm",
        "command": "academics.deleteAcademicTerm",
        "operationId": "deleteAcademicTerm",
        "httpMethod": "DELETE",
        "path": "/v2p3/school/programs/{program_code}/academic-years/{academic_year_id}/academic-terms/{id}",
        "pathParams": [
            "program_code",
            "academic_year_id",
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Delete Academic Term",
        "tags": [
            "Academics"
        ],
        "readOnly": false,
        "idempotent": true,
        "destructive": true,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "program_code": {
                    "type": "string",
                    "description": "Program scope"
                },
                "academic_year_id": {
                    "type": "integer",
                    "description": "Academic Year ID"
                },
                "id": {
                    "type": "integer",
                    "description": "Academic Term ID"
                }
            },
            "required": [
                "program_code",
                "academic_year_id",
                "id"
            ]
        }
    },
    {
        "name": "academics_retrieve",
        "command": "academics.retrieve",
        "operationId": "get_v2p3_school_programs_program_code_academic_years_id",
        "httpMethod": "GET",
        "path": "/v2p3/school/programs/{program_code}/academic-years/{id}",
        "pathParams": [
            "program_code",
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Retrieve Academic Year",
        "tags": [
            "Academics"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "program_code": {
                    "type": "string",
                    "description": "Program code"
                },
                "id": {
                    "type": "integer",
                    "description": "Unique ID in ManageBac."
                }
            },
            "required": [
                "program_code",
                "id"
            ]
        }
    },
    {
        "name": "academics_createAcademicYear",
        "command": "academics.createAcademicYear",
        "operationId": "createAcademicYear",
        "httpMethod": "POST",
        "path": "/v2p3/school/programs/{program_code}/academic-years",
        "pathParams": [
            "program_code"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Create Academic Year",
        "tags": [
            "Academics"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "program_code": {
                    "type": "string",
                    "description": "Program code"
                },
                "body": {
                    "type": "object",
                    "title": "AcademicYearRequest",
                    "properties": {
                        "academic_year": {
                            "type": "object",
                            "title": "AcademicYearRequestAcademicYear",
                            "properties": {
                                "terms_attributes": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "title": "AcademicTerm",
                                        "properties": {
                                            "name": {
                                                "type": "string",
                                                "description": "Display name for this term (e.g. \"Semester 1\", \"Term 2\"). Required on create."
                                            },
                                            "starts_on": {
                                                "type": "string",
                                                "description": "First day of the term in yyyy-mm-dd format. Required on create."
                                            },
                                            "ends_on": {
                                                "type": "string",
                                                "description": "Last day of the term in yyyy-mm-dd format. Required on create."
                                            },
                                            "locked": {
                                                "type": "boolean",
                                                "description": "When true, teachers cannot edit term grades for this term. Typically locked after grades are finalized and published."
                                            },
                                            "enable_exam_grade": {
                                                "type": "boolean",
                                                "description": "When true, an additional exam grade column is available alongside the regular term grade. Used in IB Diploma for predicted vs exam grades."
                                            }
                                        },
                                        "required": [
                                            "name",
                                            "starts_on",
                                            "ends_on"
                                        ],
                                        "description": "A term (semester/trimester/quarter) within an academic year. Terms define the time periods for which term grades are recorded."
                                    },
                                    "description": "Academic Terms."
                                }
                            }
                        }
                    },
                    "description": "JSON request body"
                }
            },
            "required": [
                "program_code"
            ]
        }
    },
    {
        "name": "academics_getAssessmentTypes",
        "command": "academics.getAssessmentTypes",
        "operationId": "getAssessmentTypes",
        "httpMethod": "GET",
        "path": "/v2p3/school/programs/{program_code}/assessment_types",
        "pathParams": [
            "program_code"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Retrieves Assessment Types",
        "tags": [
            "Academics"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "program_code": {
                    "type": "string",
                    "description": "The short code identifying the program (e.g. \"ibpyp\", \"diploma\", \"igcse\")."
                }
            },
            "required": [
                "program_code"
            ]
        }
    },
    {
        "name": "academics_list",
        "command": "academics.list",
        "operationId": "get_v2p3_school_programs_program_code_academic_years_academic_year_id_calendar",
        "httpMethod": "GET",
        "path": "/v2p3/school/programs/{program_code}/academic-years/{academic_year_id}/calendar",
        "pathParams": [
            "program_code",
            "academic_year_id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Academic Year Calendar",
        "tags": [
            "Academics"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "program_code": {
                    "type": "string",
                    "description": "The short code identifying the program (e.g. \"diploma\", \"ibpyp\")."
                },
                "academic_year_id": {
                    "type": "integer",
                    "description": "The unique numeric identifier of the academic year."
                }
            },
            "required": [
                "program_code",
                "academic_year_id"
            ]
        }
    },
    {
        "name": "academics_getAllTermReports",
        "command": "academics.getAllTermReports",
        "operationId": "GetAllTermReports",
        "httpMethod": "GET",
        "path": "/v2p3/school/programs/{program}/reports",
        "pathParams": [
            "program"
        ],
        "queryParams": [
            "academic_term_id",
            "type"
        ],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get All Term Reports",
        "tags": [
            "Academics"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "program": {
                    "type": "string",
                    "description": "Program code (e.g. diploma, myp, pyp, cp)"
                },
                "academic_term_id": {
                    "type": "integer",
                    "description": "Filter by academic term ID"
                },
                "type": {
                    "type": "string",
                    "description": "Filter by report type: final or interim:\n * `final` \n * `interim` \n "
                }
            },
            "required": [
                "program"
            ]
        }
    },
    {
        "name": "academics_getTermReport",
        "command": "academics.getTermReport",
        "operationId": "getTermReport",
        "httpMethod": "GET",
        "path": "/v2p3/school/programs/{program}/reports/{id}",
        "pathParams": [
            "program",
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Term Report",
        "tags": [
            "Academics"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "program": {
                    "type": "string",
                    "description": "Program code"
                },
                "id": {
                    "type": "integer",
                    "description": "Term report ID"
                }
            },
            "required": [
                "program",
                "id"
            ]
        }
    },
    {
        "name": "academics_downloadTermReportFile",
        "command": "academics.downloadTermReportFile",
        "operationId": "downloadTermReportFile",
        "httpMethod": "GET",
        "path": "/v2p3/school/programs/{program}/reports/{id}/download/{kind}",
        "pathParams": [
            "program",
            "id",
            "kind"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Download Term Report File",
        "tags": [
            "Academics"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "program": {
                    "type": "string",
                    "description": "Program code (e.g. diploma, myp, pyp, cp)"
                },
                "id": {
                    "type": "integer",
                    "description": "Term report ID"
                },
                "kind": {
                    "type": "string",
                    "description": "File type to download:\n * `pdf` \n * `individual_reports` \n * `term_grades` \n "
                }
            },
            "required": [
                "program",
                "id",
                "kind"
            ]
        }
    },
    {
        "name": "academics_getSubjectGroups",
        "command": "academics.getSubjectGroups",
        "operationId": "getSubjectGroups",
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
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Retrieves Subject Groups",
        "tags": [
            "Academics"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "program_code": {
                    "type": "string",
                    "description": "Program scope"
                },
                "page": {
                    "type": "string",
                    "description": "An integer defining which page to display."
                },
                "per_page": {
                    "type": "string",
                    "description": "An integer defining the number of records to display per page."
                },
                "modified_since": {
                    "type": "string",
                    "description": "A timestamp to filter the modification date of results."
                }
            },
            "required": [
                "program_code"
            ]
        }
    },
    {
        "name": "academics_createSubjectGroup",
        "command": "academics.createSubjectGroup",
        "operationId": "createSubjectGroup",
        "httpMethod": "POST",
        "path": "/v2p3/school/programs/{program_code}/subject-groups",
        "pathParams": [
            "program_code"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Create Subject Group",
        "tags": [
            "Academics"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "program_code": {
                    "type": "string",
                    "description": "Program scope"
                },
                "body": {
                    "type": "object",
                    "title": "SubjectGroupRequest",
                    "properties": {
                        "subject_group": {
                            "type": "object",
                            "title": "SubjectGroupRequestSubjectGroup",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "description": "Subject Group name."
                                },
                                "max_phase": {
                                    "type": "string",
                                    "description": "Phases Range (only allowed in the IB PYP program). Possible values are '4' or '5'. The default value is '5'."
                                }
                            }
                        }
                    },
                    "description": "JSON request body"
                }
            },
            "required": [
                "program_code"
            ]
        }
    },
    {
        "name": "academics_getSubjectGroup",
        "command": "academics.getSubjectGroup",
        "operationId": "getSubjectGroup",
        "httpMethod": "GET",
        "path": "/v2p3/school/programs/{program_code}/subject-groups/{id}",
        "pathParams": [
            "program_code",
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Subject Group",
        "tags": [
            "Academics"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "program_code": {
                    "type": "string",
                    "description": "Program scope"
                },
                "id": {
                    "type": "integer",
                    "description": "Unique ID for Subject Group in ManageBac."
                }
            },
            "required": [
                "program_code",
                "id"
            ]
        }
    },
    {
        "name": "academics_updateSubjectGroup",
        "command": "academics.updateSubjectGroup",
        "operationId": "updateSubjectGroup",
        "httpMethod": "PATCH",
        "path": "/v2p3/school/programs/{program_code}/subject-groups/{id}",
        "pathParams": [
            "program_code",
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Update Subject Group",
        "tags": [
            "Academics"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "program_code": {
                    "type": "string",
                    "description": "Program scope"
                },
                "id": {
                    "type": "integer",
                    "description": "Subject Group ID"
                },
                "body": {
                    "type": "object",
                    "title": "SubjectGroupRequest",
                    "properties": {
                        "subject_group": {
                            "type": "object",
                            "title": "SubjectGroupRequestSubjectGroup",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "description": "Subject Group name."
                                },
                                "max_phase": {
                                    "type": "string",
                                    "description": "Phases Range (only allowed in the IB PYP program). Possible values are '4' or '5'. The default value is '5'."
                                }
                            }
                        }
                    },
                    "description": "JSON request body"
                }
            },
            "required": [
                "program_code",
                "id"
            ]
        }
    },
    {
        "name": "academics_destroySubjectGroup",
        "command": "academics.destroySubjectGroup",
        "operationId": "destroySubjectGroup",
        "httpMethod": "DELETE",
        "path": "/v2p3/school/programs/{program_code}/subject-groups/{id}",
        "pathParams": [
            "program_code",
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Remove Subject Group",
        "tags": [
            "Academics"
        ],
        "readOnly": false,
        "idempotent": true,
        "destructive": true,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "program_code": {
                    "type": "string",
                    "description": "Program scope"
                },
                "id": {
                    "type": "integer",
                    "description": "Subject Group ID"
                }
            },
            "required": [
                "program_code",
                "id"
            ]
        }
    },
    {
        "name": "academics_getSubjects",
        "command": "academics.getSubjects",
        "operationId": "getSubjects",
        "httpMethod": "GET",
        "path": "/v2p3/school/programs/{program_code}/subjects",
        "pathParams": [
            "program_code"
        ],
        "queryParams": [
            "page",
            "per_page"
        ],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Retrieves Subjects",
        "tags": [
            "Academics"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "program_code": {
                    "type": "string",
                    "description": "Program scope"
                },
                "page": {
                    "type": "string",
                    "description": "An integer defining which page to display."
                },
                "per_page": {
                    "type": "string",
                    "description": "An integer defining the number of records to display per page."
                }
            },
            "required": [
                "program_code"
            ]
        }
    },
    {
        "name": "academics_createSubject",
        "command": "academics.createSubject",
        "operationId": "createSubject",
        "httpMethod": "POST",
        "path": "/v2p3/school/programs/{program_code}/subjects",
        "pathParams": [
            "program_code"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Creates Subject",
        "tags": [
            "Academics"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "program_code": {
                    "type": "string",
                    "description": "Program scope"
                },
                "body": {
                    "type": "object",
                    "title": "SubjectRequest",
                    "properties": {
                        "subject": {
                            "type": "object",
                            "title": "SubjectRequestSubject",
                            "properties": {
                                "subject_group_id": {
                                    "type": "integer",
                                    "description": "Unique ID for subject group in ManageBac."
                                },
                                "name": {
                                    "type": "string",
                                    "description": "Subject name."
                                },
                                "title": {
                                    "type": "string",
                                    "description": "Subject title."
                                },
                                "description": {
                                    "type": "string",
                                    "description": "Subject description."
                                },
                                "scope_and_sequence_based_on": {
                                    "type": "string",
                                    "description": "Subject Scope & Sequence based on value."
                                },
                                "sl": {
                                    "type": "boolean",
                                    "description": "Subject SL level."
                                },
                                "hl": {
                                    "type": "boolean",
                                    "description": "Subject HL level."
                                },
                                "enabled": {
                                    "type": "boolean",
                                    "description": "Enable/disable school subject."
                                },
                                "code": {
                                    "type": "string",
                                    "description": "Subject custom code"
                                }
                            }
                        }
                    },
                    "description": "JSON request body"
                }
            },
            "required": [
                "program_code"
            ]
        }
    },
    {
        "name": "academics_getSubject",
        "command": "academics.getSubject",
        "operationId": "getSubject",
        "httpMethod": "GET",
        "path": "/v2p3/school/programs/{program_code}/subjects/{id}",
        "pathParams": [
            "program_code",
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Retrieves Subject",
        "tags": [
            "Academics"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "program_code": {
                    "type": "string",
                    "description": "Program scope"
                },
                "id": {
                    "type": "integer",
                    "description": "Unique ID for Subject in ManageBac."
                }
            },
            "required": [
                "program_code",
                "id"
            ]
        }
    },
    {
        "name": "academics_updateSubject",
        "command": "academics.updateSubject",
        "operationId": "updateSubject",
        "httpMethod": "PUT",
        "path": "/v2p3/school/programs/{program_code}/subjects/{id}",
        "pathParams": [
            "program_code",
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Updates Subject",
        "tags": [
            "Academics"
        ],
        "readOnly": false,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "program_code": {
                    "type": "string",
                    "description": "Program scope"
                },
                "id": {
                    "type": "integer",
                    "description": "Unique ID for Subject in ManageBac."
                },
                "body": {
                    "type": "object",
                    "title": "SubjectRequest",
                    "properties": {
                        "subject": {
                            "type": "object",
                            "title": "SubjectRequestSubject",
                            "properties": {
                                "subject_group_id": {
                                    "type": "integer",
                                    "description": "Unique ID for subject group in ManageBac."
                                },
                                "name": {
                                    "type": "string",
                                    "description": "Subject name."
                                },
                                "title": {
                                    "type": "string",
                                    "description": "Subject title."
                                },
                                "description": {
                                    "type": "string",
                                    "description": "Subject description."
                                },
                                "scope_and_sequence_based_on": {
                                    "type": "string",
                                    "description": "Subject Scope & Sequence based on value."
                                },
                                "sl": {
                                    "type": "boolean",
                                    "description": "Subject SL level."
                                },
                                "hl": {
                                    "type": "boolean",
                                    "description": "Subject HL level."
                                },
                                "enabled": {
                                    "type": "boolean",
                                    "description": "Enable/disable school subject."
                                },
                                "code": {
                                    "type": "string",
                                    "description": "Subject custom code"
                                }
                            }
                        }
                    },
                    "description": "JSON request body"
                }
            },
            "required": [
                "program_code",
                "id"
            ]
        }
    },
    {
        "name": "academics_deleteSubject",
        "command": "academics.deleteSubject",
        "operationId": "deleteSubject",
        "httpMethod": "DELETE",
        "path": "/v2p3/school/programs/{program_code}/subjects/{id}",
        "pathParams": [
            "program_code",
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Delete Subject",
        "tags": [
            "Academics"
        ],
        "readOnly": false,
        "idempotent": true,
        "destructive": true,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "program_code": {
                    "type": "string",
                    "description": "Program scope"
                },
                "id": {
                    "type": "integer",
                    "description": "Unique ID for Subject in ManageBac."
                }
            },
            "required": [
                "program_code",
                "id"
            ]
        }
    },
    {
        "name": "extendedApis_bulkEnableSubjects",
        "command": "extendedApis.bulkEnableSubjects",
        "operationId": "bulkEnableSubjects",
        "httpMethod": "POST",
        "path": "/v2p3/school/programs/{program_code}/subjects/bulk-enable",
        "pathParams": [
            "program_code"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Bulk Enable Subjects",
        "tags": [
            "Extended APIs",
            "Academics"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "program_code": {
                    "type": "string",
                    "description": "Program scope"
                },
                "body": {
                    "type": "object",
                    "title": "ToggleSchoolSubjectsRequest",
                    "properties": {
                        "subject_ids": {
                            "type": "array",
                            "items": {
                                "type": "integer"
                            }
                        }
                    },
                    "description": "JSON request body"
                }
            },
            "required": [
                "program_code"
            ]
        }
    },
    {
        "name": "extendedApis_bulkDisableSubjects",
        "command": "extendedApis.bulkDisableSubjects",
        "operationId": "bulkDisableSubjects",
        "httpMethod": "POST",
        "path": "/v2p3/school/programs/{program_code}/subjects/bulk-disable",
        "pathParams": [
            "program_code"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Bulk Disable Subjects",
        "tags": [
            "Extended APIs",
            "Academics"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "program_code": {
                    "type": "string",
                    "description": "Program scope"
                },
                "body": {
                    "type": "object",
                    "title": "ToggleSchoolSubjectsRequest",
                    "properties": {
                        "subject_ids": {
                            "type": "array",
                            "items": {
                                "type": "integer"
                            }
                        }
                    },
                    "description": "JSON request body"
                }
            },
            "required": [
                "program_code"
            ]
        }
    },
    {
        "name": "academics_getSchool",
        "command": "academics.getSchool",
        "operationId": "getSchool",
        "httpMethod": "GET",
        "path": "/v2p3/school",
        "pathParams": [],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get School Details",
        "tags": [
            "Academics"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {}
        }
    },
    {
        "name": "academics_listAcademicYears",
        "command": "academics.listAcademicYears",
        "operationId": "listAcademicYears",
        "httpMethod": "GET",
        "path": "/v2p3/school/academic-years",
        "pathParams": [],
        "queryParams": [
            "program_code",
            "active"
        ],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Academic Years",
        "tags": [
            "Academics"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "program_code": {
                    "type": "string",
                    "description": "Filter by program code (e.g. 'diploma', 'myp', 'hs'). Omit to return all programs."
                },
                "active": {
                    "type": "boolean",
                    "description": "Filter by active status. When true, returns only currently active academic years."
                }
            }
        }
    },
    {
        "name": "academics_listGrades",
        "command": "academics.listGrades",
        "operationId": "listGrades",
        "httpMethod": "GET",
        "path": "/v2p3/school/grades",
        "pathParams": [],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get School Grades",
        "tags": [
            "Academics"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {}
        }
    },
    {
        "name": "academics_listSubjects",
        "command": "academics.listSubjects",
        "operationId": "listSubjects",
        "httpMethod": "GET",
        "path": "/v2p3/school/subjects",
        "pathParams": [],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get School Subjects",
        "tags": [
            "Academics"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {}
        }
    },
    {
        "name": "academics_listSchoolTermGradeScales",
        "command": "academics.listSchoolTermGradeScales",
        "operationId": "listSchoolTermGradeScales",
        "httpMethod": "GET",
        "path": "/v2p3/school/term-grade-scales",
        "pathParams": [],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get School Term Grade Scales",
        "tags": [
            "Academics"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {}
        }
    },
    {
        "name": "academics_listTermRubrics",
        "command": "academics.listTermRubrics",
        "operationId": "listTermRubrics",
        "httpMethod": "GET",
        "path": "/v2p3/school/term-rubrics",
        "pathParams": [],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get School Term Grade Rubrics",
        "tags": [
            "Academics"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {}
        }
    },
    {
        "name": "students_updateStudentAvatar",
        "command": "students.updateStudentAvatar",
        "operationId": "updateStudentAvatar",
        "httpMethod": "PUT",
        "path": "/v2p3/students/{id}/avatar",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Update Student Avatar",
        "tags": [
            "Students"
        ],
        "readOnly": false,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for a student."
                },
                "body": {
                    "type": "object",
                    "title": "StudentsUpdateStudentAvatarRequest",
                    "properties": {
                        "avatar": {
                            "title": "StudentsUpdateStudentAvatarRequestAvatar",
                            "anyOf": [
                                {
                                    "type": "object",
                                    "title": "StudentsUpdateStudentAvatarRequestAvatarVariant1",
                                    "properties": {
                                        "remote_file_url": {
                                            "type": "string",
                                            "description": "Avatar URL to upload"
                                        }
                                    },
                                    "required": [
                                        "remote_file_url"
                                    ]
                                },
                                {
                                    "type": "object",
                                    "title": "StudentsUpdateStudentAvatarRequestAvatarVariant2",
                                    "properties": {
                                        "file": {
                                            "type": "string",
                                            "format": "binary",
                                            "description": "Avatar file data"
                                        }
                                    },
                                    "required": [
                                        "file"
                                    ]
                                }
                            ]
                        }
                    },
                    "description": "JSON request body"
                }
            },
            "required": [
                "id",
                "body"
            ]
        }
    },
    {
        "name": "students_deleteStudentAvatar",
        "command": "students.deleteStudentAvatar",
        "operationId": "deleteStudentAvatar",
        "httpMethod": "DELETE",
        "path": "/v2p3/students/{id}/avatar",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Delete Student Avatar",
        "tags": [
            "Students"
        ],
        "readOnly": false,
        "idempotent": true,
        "destructive": true,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for a student."
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "attendance_getStudentExcusals",
        "command": "attendance.getStudentExcusals",
        "operationId": "getStudentExcusals",
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
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get all Attendance Excusals for a student",
        "tags": [
            "Attendance"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "student_id": {
                    "type": "integer",
                    "description": "Unique identifier for a student."
                },
                "applies_on": {
                    "type": "string",
                    "description": "A date string to define required day as yyyy-mm-dd."
                },
                "page": {
                    "type": "string",
                    "description": "An integer defining which page to display."
                },
                "per_page": {
                    "type": "string",
                    "description": "An integer defining the number of records to display per page."
                }
            },
            "required": [
                "student_id"
            ]
        }
    },
    {
        "name": "attendance_createStudentExcusal",
        "command": "attendance.createStudentExcusal",
        "operationId": "createStudentExcusal",
        "httpMethod": "POST",
        "path": "/v2p3/students/{student_id}/excusals",
        "pathParams": [
            "student_id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Create Excusal for a Student",
        "tags": [
            "Attendance"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "student_id": {
                    "type": "integer",
                    "description": "Unique identifier for a student."
                },
                "body": {
                    "type": "object",
                    "title": "CreateAttendanceExcusalRequest",
                    "properties": {
                        "excusal": {
                            "type": "object",
                            "title": "CreateAttendanceExcusalRequestExcusal",
                            "properties": {
                                "parent_id": {
                                    "type": "integer",
                                    "description": "Unique ID for the parent."
                                },
                                "start_date": {
                                    "type": "string",
                                    "format": "date",
                                    "description": "Start date of the excusal."
                                },
                                "end_date": {
                                    "type": "string",
                                    "format": "date",
                                    "description": "End date of the excusal."
                                },
                                "comment": {
                                    "type": "string",
                                    "description": "Comment or reason for the excusal."
                                }
                            }
                        }
                    },
                    "description": "JSON request body"
                }
            },
            "required": [
                "student_id"
            ]
        }
    },
    {
        "name": "extendedApis_updateStudentExcusal",
        "command": "extendedApis.updateStudentExcusal",
        "operationId": "updateStudentExcusal",
        "httpMethod": "PATCH",
        "path": "/v2p3/students/{student_id}/excusals/{id}",
        "pathParams": [
            "student_id",
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Update Excusal for a Student",
        "tags": [
            "Extended APIs",
            "Attendance"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "student_id": {
                    "type": "integer",
                    "description": "Unique identifier for a student."
                },
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for an excusal."
                },
                "body": {
                    "type": "object",
                    "title": "UpdateAttendanceExcusalRequest",
                    "properties": {
                        "excusal": {
                            "type": "object",
                            "title": "UpdateAttendanceExcusalRequestExcusal",
                            "properties": {
                                "end_date": {
                                    "type": "string",
                                    "format": "date",
                                    "description": "End date of the excusal."
                                },
                                "comment": {
                                    "type": "string",
                                    "description": "Comment or reason for the excusal."
                                }
                            }
                        }
                    },
                    "description": "JSON request body"
                }
            },
            "required": [
                "student_id",
                "id"
            ]
        }
    },
    {
        "name": "extendedApis_deleteStudentExcusal",
        "command": "extendedApis.deleteStudentExcusal",
        "operationId": "deleteStudentExcusal",
        "httpMethod": "DELETE",
        "path": "/v2p3/students/{student_id}/excusals/{id}",
        "pathParams": [
            "student_id",
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Delete Excusal for a Student",
        "tags": [
            "Extended APIs",
            "Attendance"
        ],
        "readOnly": false,
        "idempotent": true,
        "destructive": true,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "student_id": {
                    "type": "integer",
                    "description": "Unique identifier for a student."
                },
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for an excusal."
                }
            },
            "required": [
                "student_id",
                "id"
            ]
        }
    },
    {
        "name": "students_listStudents",
        "command": "students.listStudents",
        "operationId": "listStudents",
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
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get all Students",
        "tags": [
            "Students"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "ids[]": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "description": "Return only records with the given IDs."
                },
                "archived": {
                    "type": "boolean",
                    "description": "Return only archived (1) or only active (0) students. If value is not specified, all students are returned."
                },
                "status": {
                    "type": "string",
                    "description": "Return students by status. Available statuses: <code>enrolled</code>, <code>withdrawn</code>, <code>graduated</code>. If value is not specified, all students are returned."
                },
                "modified_since": {
                    "type": "string",
                    "description": "An ISO 8601 timestamp to filter results to only those modified on or after the given date. Useful for syncing changes since a previous request."
                },
                "year_group_ids": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "description": "An integer list of year group ids to filter by. Accepts comma-separated values."
                },
                "year_group_ids[]": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "description": "An integer list of year group ids to filter by. Accepts repeated query parameters."
                },
                "homeroom_advisor_ids": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "description": "An integer list of homeroom advisor (teacher) ids to filter by. Accepts comma-separated values."
                },
                "homeroom_advisor_ids[]": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "description": "An integer list of homeroom advisor (teacher) ids to filter by. Accepts repeated query parameters."
                },
                "page": {
                    "type": "string",
                    "description": "The page number to return. Defaults to 1."
                },
                "per_page": {
                    "type": "string",
                    "description": "The number of records per page. Defaults to 100."
                },
                "deleted_since": {
                    "type": "string",
                    "description": "An ISO 8601 timestamp to filter results to only those soft-deleted on or after the given date. Returns deleted student records for sync purposes."
                },
                "q": {
                    "type": "string",
                    "description": "A string to search across the following fields: <code>first_name</code>, <code>last_name</code>, <code>middle_name</code>, <code>nickname</code>, <code>other_name</code>, <code>email</code>, <code>student_id</code>."
                },
                "ids": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "description": "List of student ids. Accepts repeated params or a comma-separated string."
                }
            }
        }
    },
    {
        "name": "students_createStudent",
        "command": "students.createStudent",
        "operationId": "createStudent",
        "httpMethod": "POST",
        "path": "/v2p3/students",
        "pathParams": [],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Create New Student",
        "tags": [
            "Students"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "body": {
                    "type": "object",
                    "title": "StudentsCreateStudentRequest",
                    "properties": {
                        "student": {
                            "type": "object",
                            "title": "StudentsCreateStudentRequestStudent",
                            "properties": {}
                        },
                        "options": {
                            "type": "object",
                            "title": "StudentsCreateStudentRequestOptions",
                            "properties": {
                                "send_welcome_email": {
                                    "type": "boolean",
                                    "description": "If true, a welcome email is enqueued for the newly created student."
                                }
                            },
                            "description": "Request directives applied during the create operation."
                        }
                    },
                    "required": [
                        "student"
                    ],
                    "description": "JSON request body"
                }
            }
        }
    },
    {
        "name": "students_getStudentById",
        "command": "students.getStudentById",
        "operationId": "getStudentByID",
        "httpMethod": "GET",
        "path": "/v2p3/students/{id}",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get a Student",
        "tags": [
            "Students"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for a student."
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "students_updateStudent",
        "command": "students.updateStudent",
        "operationId": "updateStudent",
        "httpMethod": "PATCH",
        "path": "/v2p3/students/{id}",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Update a Student",
        "tags": [
            "Students"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for a student."
                },
                "body": {
                    "type": "object",
                    "title": "StudentsUpdateStudentRequest",
                    "properties": {
                        "student": {
                            "type": "object",
                            "title": "StudentsUpdateStudentRequestStudent",
                            "properties": {}
                        }
                    },
                    "description": "JSON request body"
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "students_archiveStudent",
        "command": "students.archiveStudent",
        "operationId": "archiveStudent",
        "httpMethod": "PUT",
        "path": "/v2p3/students/{id}/archive",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Archive a Student",
        "tags": [
            "Students"
        ],
        "readOnly": false,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for a student."
                },
                "body": {
                    "title": "StudentsArchiveStudentRequest",
                    "anyOf": [
                        {
                            "type": "object",
                            "title": "StudentsArchiveStudentRequestVariant1",
                            "properties": {
                                "withdrawn_on": {
                                    "type": "string",
                                    "description": "Withdrawal date in yyyy-mm-dd format"
                                }
                            }
                        },
                        {
                            "type": "object",
                            "title": "StudentsArchiveStudentRequestVariant2",
                            "properties": {
                                "graduated_on": {
                                    "type": "string",
                                    "description": "Graduation date in yyyy-mm-dd format"
                                }
                            }
                        }
                    ],
                    "description": "JSON request body"
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "students_unarchiveStudent",
        "command": "students.unarchiveStudent",
        "operationId": "unarchiveStudent",
        "httpMethod": "PUT",
        "path": "/v2p3/students/{id}/unarchive",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Unarchive a Student",
        "tags": [
            "Students"
        ],
        "readOnly": false,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for a student."
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "memberships_getStudentMemberships",
        "command": "memberships.getStudentMemberships",
        "operationId": "getStudentMemberships",
        "httpMethod": "GET",
        "path": "/v2p3/students/{id}/memberships",
        "pathParams": [
            "id"
        ],
        "queryParams": [
            "archived"
        ],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get a Student's memberships",
        "tags": [
            "Memberships"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier of a student."
                },
                "archived": {
                    "type": "boolean",
                    "description": "Filter memberships by archived status. When <code>false</code> (default), returns only active memberships. When <code>true</code>, returns only archived memberships."
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "extendedApis_setStudentHomeroomAttendance",
        "command": "extendedApis.setStudentHomeroomAttendance",
        "operationId": "set_student_homeroom_attendance",
        "httpMethod": "PUT",
        "path": "/v2p3/students/{id}/set_homeroom_attendance",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Set student homeroom attendance",
        "tags": [
            "Extended APIs",
            "Attendance"
        ],
        "readOnly": false,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for a student."
                },
                "body": {
                    "type": "object",
                    "title": "ExtendedApisSetStudentHomeroomAttendanceRequest",
                    "properties": {
                        "date": {
                            "type": "string",
                            "format": "date",
                            "description": "Attendance date in yyyy-mm-dd format"
                        },
                        "status": {
                            "type": "integer",
                            "enum": [
                                0,
                                1,
                                2,
                                3,
                                4,
                                5,
                                10,
                                11,
                                12,
                                13,
                                14,
                                15,
                                16,
                                17,
                                18
                            ],
                            "title": "ExtendedApisSetStudentHomeroomAttendanceRequestStatus",
                            "description": "Available statuses:  \n 0 - Absent  \n1 - Present  \n2 - Late  \n3 - Dress Code  \n4 - Late & Dress Code  \n5 - Dismissed  \n10 - Health  \n11 - Sports  \n12 - Fieldtrip  \n13 - Excused  \n14 - Other  \n15 - Custom 1  \n16 - Custom 2  \n17 - Custom 3  \n18 - Custom 4"
                        },
                        "notes": {
                            "type": "string",
                            "description": "Optional free-text notes for the attendance record"
                        }
                    },
                    "description": "JSON request body"
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "students_sendStudentWelcomeEmail",
        "command": "students.sendStudentWelcomeEmail",
        "operationId": "sendStudentWelcomeEmail",
        "httpMethod": "POST",
        "path": "/v2p3/students/{id}/welcome_email",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Send Welcome Email to a Student",
        "tags": [
            "Students"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for a student."
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "onlineAssessment_updateOnlineAssessment",
        "command": "onlineAssessment.updateOnlineAssessment",
        "operationId": "updateOnlineAssessment",
        "httpMethod": "PATCH",
        "path": "/v2p3/tasks/{task_id}/online_assessments/{assess_prep_uid}",
        "pathParams": [
            "task_id",
            "assess_prep_uid"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Update an Online Assessment",
        "tags": [
            "OnlineAssessment"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "task_id": {
                    "type": "integer",
                    "description": "Unique identifier for a task."
                },
                "assess_prep_uid": {
                    "type": "string",
                    "description": "Unique identifier for an AssessPrep task."
                },
                "body": {
                    "type": "object",
                    "title": "OnlineAssessmentUpdateOnlineAssessmentRequest",
                    "properties": {
                        "online_assessment": {
                            "type": "object",
                            "title": "UpdateOnlineAssessment",
                            "properties": {
                                "assess_prep_uid": {
                                    "type": "string",
                                    "description": "Unique identifier for an AssessPrep task"
                                },
                                "title": {
                                    "type": "string",
                                    "description": "New ManageBac task title"
                                },
                                "mode": {
                                    "type": "string",
                                    "enum": [
                                        "online",
                                        "online_secure",
                                        "offline"
                                    ],
                                    "title": "UpdateOnlineAssessmentMode",
                                    "description": "Online Assessment mode"
                                },
                                "questions_count": {
                                    "type": "integer",
                                    "description": "Questions count in online assessment"
                                },
                                "points": {
                                    "type": "integer",
                                    "description": "Max points for Diploma task with points assessment model or MYP task with local points assessment model"
                                },
                                "duration": {
                                    "type": "integer",
                                    "description": "Online Assessment duration in minutes"
                                },
                                "start_at": {
                                    "type": "string",
                                    "description": "ISO8601 datetime for Online Assessment due date & time."
                                },
                                "status": {
                                    "type": "string",
                                    "enum": [
                                        "draft",
                                        "published",
                                        "closed"
                                    ],
                                    "title": "UpdateOnlineAssessmentStatus"
                                },
                                "video_monitoring": {
                                    "type": "boolean",
                                    "description": "Switch to enable/disable video monitoring"
                                },
                                "criteria_labels": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "title": "UpdateOnlineAssessmentCriteriaLabelsItem",
                                        "properties": {
                                            "label": {
                                                "type": "string",
                                                "description": "Criteria name without label"
                                            },
                                            "title": {
                                                "type": "string",
                                                "description": "Criteria label"
                                            },
                                            "descriptors": {
                                                "type": "array",
                                                "items": {
                                                    "type": "object",
                                                    "title": "UpdateOnlineAssessmentCriteriaLabelsItemDescriptorsItem",
                                                    "properties": {
                                                        "level": {
                                                            "type": "string",
                                                            "description": "Descriptor level"
                                                        },
                                                        "descriptor": {
                                                            "type": "string",
                                                            "description": "Descriptor"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "description": "Criteria labels"
                                }
                            },
                            "required": [
                                "title",
                                "mode"
                            ]
                        }
                    },
                    "description": "JSON request body"
                }
            },
            "required": [
                "task_id",
                "assess_prep_uid"
            ]
        }
    },
    {
        "name": "extendedApis_updateStudentTaskGrades",
        "command": "extendedApis.updateStudentTaskGrades",
        "operationId": "UpdateStudentTaskGrades",
        "httpMethod": "PATCH",
        "path": "/v2p3/tasks/{task_id}/students/{student_id}",
        "pathParams": [
            "task_id",
            "student_id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Update or Create a Grade for a Student for a Task",
        "tags": [
            "Extended APIs",
            "Coursework"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "task_id": {
                    "type": "integer",
                    "description": "Unique identifier for a task."
                },
                "student_id": {
                    "type": "integer",
                    "description": "Unique identifier for a student."
                },
                "body": {
                    "type": "object",
                    "title": "ExtendedApisUpdateStudentTaskGradesRequest",
                    "properties": {
                        "task_grade": {
                            "title": "ExtendedApisUpdateStudentTaskGradesRequestTaskGrade",
                            "anyOf": [
                                {
                                    "type": "object",
                                    "title": "UpdateStudentTaskGrade",
                                    "properties": {
                                        "author_id": {
                                            "type": "integer",
                                            "description": "Unique identifier for an author in ManageBac"
                                        },
                                        "points": {
                                            "type": "integer",
                                            "description": "Grade points"
                                        },
                                        "comment": {
                                            "type": "string",
                                            "description": "Grade comment"
                                        },
                                        "binary": {
                                            "type": "boolean",
                                            "description": "Determines if task is completed or not"
                                        },
                                        "criterion_grades": {
                                            "type": "array",
                                            "items": {
                                                "type": "object",
                                                "title": "UpdateStudentTaskGradeCriterionGradesItem",
                                                "properties": {
                                                    "label": {
                                                        "type": "string",
                                                        "description": "Criterion letter, e.g. \"A\""
                                                    },
                                                    "criterion": {
                                                        "type": "string",
                                                        "description": "Criterion name (response only), e.g. \"Analysing\""
                                                    },
                                                    "score": {
                                                        "type": "integer",
                                                        "description": "Achievement level for the criterion (-1 marks it N/A)"
                                                    }
                                                }
                                            },
                                            "description": "Optional per-criterion achievement levels for MYP criteria-based tasks (summative, or formative with criteria). Providing it for a non-criteria task returns a 422. A score of -1 marks the criterion as N/A. On the response each entry also includes the criterion name under `criterion`."
                                        }
                                    }
                                },
                                {
                                    "type": "object",
                                    "title": "UpdateStudentAssessPrepTaskGrade",
                                    "properties": {
                                        "assess_prep_uuid": {
                                            "type": "string",
                                            "description": "Unique AssessPrep task UUID"
                                        },
                                        "assess_prep_uid": {
                                            "type": "string",
                                            "description": "Unique identifier for an AssessPrep task"
                                        },
                                        "author_id": {
                                            "type": "integer",
                                            "description": "Unique identifier for an author in ManageBac"
                                        },
                                        "assessment_file_url": {
                                            "type": "string",
                                            "description": "Submission PDF file"
                                        },
                                        "points": {
                                            "type": "integer",
                                            "description": "Grade points"
                                        },
                                        "comment": {
                                            "type": "string",
                                            "description": "Grade comment"
                                        },
                                        "submission_id": {
                                            "type": "integer",
                                            "description": "Unique identifier for an AssessPrep Submission"
                                        },
                                        "is_late": {
                                            "type": "boolean",
                                            "description": "Determines if submission is late"
                                        }
                                    }
                                }
                            ]
                        }
                    },
                    "description": "JSON request body"
                }
            },
            "required": [
                "task_id",
                "student_id"
            ]
        }
    },
    {
        "name": "extendedApis_bulkUpdateStudentTaskGrades",
        "command": "extendedApis.bulkUpdateStudentTaskGrades",
        "operationId": "BulkUpdateStudentTaskGrades",
        "httpMethod": "PATCH",
        "path": "/v2p3/tasks/{task_id}/students",
        "pathParams": [
            "task_id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Bulk Update or Create Grades for Students for a Task",
        "tags": [
            "Extended APIs",
            "Coursework"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "task_id": {
                    "type": "integer",
                    "description": "Unique identifier for a task."
                },
                "body": {
                    "type": "object",
                    "title": "BulkUpdateStudentTaskGradeRequest",
                    "properties": {
                        "students": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "title": "BulkUpdateStudentTaskGradeRequestStudentsItem",
                                "properties": {
                                    "id": {
                                        "type": "integer",
                                        "description": "Unique identifier for a student in ManageBac"
                                    },
                                    "task_grade": {
                                        "title": "BulkUpdateStudentTaskGradeRequestStudentsItemTaskGrade",
                                        "anyOf": [
                                            {
                                                "type": "object",
                                                "title": "UpdateStudentTaskGrade",
                                                "properties": {
                                                    "author_id": {
                                                        "type": "integer",
                                                        "description": "Unique identifier for an author in ManageBac"
                                                    },
                                                    "points": {
                                                        "type": "integer",
                                                        "description": "Grade points"
                                                    },
                                                    "comment": {
                                                        "type": "string",
                                                        "description": "Grade comment"
                                                    },
                                                    "binary": {
                                                        "type": "boolean",
                                                        "description": "Determines if task is completed or not"
                                                    },
                                                    "criterion_grades": {
                                                        "type": "array",
                                                        "items": {
                                                            "type": "object",
                                                            "title": "UpdateStudentTaskGradeCriterionGradesItem",
                                                            "properties": {
                                                                "label": {
                                                                    "description": "Criterion letter, e.g. \"A\""
                                                                },
                                                                "criterion": {
                                                                    "description": "Criterion name (response only), e.g. \"Analysing\""
                                                                },
                                                                "score": {
                                                                    "description": "Achievement level for the criterion (-1 marks it N/A)"
                                                                }
                                                            }
                                                        },
                                                        "description": "Optional per-criterion achievement levels for MYP criteria-based tasks (summative, or formative with criteria). Providing it for a non-criteria task returns a 422. A score of -1 marks the criterion as N/A. On the response each entry also includes the criterion name under `criterion`."
                                                    }
                                                }
                                            },
                                            {
                                                "type": "object",
                                                "title": "UpdateStudentAssessPrepTaskGrade",
                                                "properties": {
                                                    "assess_prep_uuid": {
                                                        "type": "string",
                                                        "description": "Unique AssessPrep task UUID"
                                                    },
                                                    "assess_prep_uid": {
                                                        "type": "string",
                                                        "description": "Unique identifier for an AssessPrep task"
                                                    },
                                                    "author_id": {
                                                        "type": "integer",
                                                        "description": "Unique identifier for an author in ManageBac"
                                                    },
                                                    "assessment_file_url": {
                                                        "type": "string",
                                                        "description": "Submission PDF file"
                                                    },
                                                    "points": {
                                                        "type": "integer",
                                                        "description": "Grade points"
                                                    },
                                                    "comment": {
                                                        "type": "string",
                                                        "description": "Grade comment"
                                                    },
                                                    "submission_id": {
                                                        "type": "integer",
                                                        "description": "Unique identifier for an AssessPrep Submission"
                                                    },
                                                    "is_late": {
                                                        "type": "boolean",
                                                        "description": "Determines if submission is late"
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                }
                            }
                        }
                    },
                    "description": "JSON request body"
                }
            },
            "required": [
                "task_id"
            ]
        }
    },
    {
        "name": "coursework_bulkResetStudentsTaskGrades",
        "command": "coursework.bulkResetStudentsTaskGrades",
        "operationId": "BulkResetStudentsTaskGrades",
        "httpMethod": "DELETE",
        "path": "/v2p3/tasks/{task_id}/students",
        "pathParams": [
            "task_id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Bulk Delete Grades for Students for a Task",
        "tags": [
            "Coursework"
        ],
        "readOnly": false,
        "idempotent": true,
        "destructive": true,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "task_id": {
                    "type": "integer",
                    "description": "Unique identifier for a task."
                },
                "body": {
                    "type": "object",
                    "title": "BulkDestroyStudentTaskGradeRequest",
                    "properties": {
                        "student_ids": {
                            "type": "array",
                            "items": {
                                "type": "integer"
                            },
                            "description": "List of student IDs whose grades and submissions will be reset"
                        }
                    },
                    "description": "JSON request body"
                }
            },
            "required": [
                "task_id"
            ]
        }
    },
    {
        "name": "teachers_updateTeacherAvatar",
        "command": "teachers.updateTeacherAvatar",
        "operationId": "updateTeacherAvatar",
        "httpMethod": "PUT",
        "path": "/v2p3/teachers/{id}/avatar",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Update Teacher Avatar",
        "tags": [
            "Teachers"
        ],
        "readOnly": false,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for a teacher."
                },
                "body": {
                    "type": "object",
                    "title": "TeachersUpdateTeacherAvatarRequest",
                    "properties": {
                        "avatar": {
                            "title": "TeachersUpdateTeacherAvatarRequestAvatar",
                            "anyOf": [
                                {
                                    "type": "object",
                                    "title": "TeachersUpdateTeacherAvatarRequestAvatarVariant1",
                                    "properties": {
                                        "remote_file_url": {
                                            "type": "string",
                                            "description": "Avatar URL to upload"
                                        }
                                    },
                                    "required": [
                                        "remote_file_url"
                                    ]
                                },
                                {
                                    "type": "object",
                                    "title": "TeachersUpdateTeacherAvatarRequestAvatarVariant2",
                                    "properties": {
                                        "file": {
                                            "type": "string",
                                            "format": "binary",
                                            "description": "Avatar file data"
                                        }
                                    },
                                    "required": [
                                        "file"
                                    ]
                                }
                            ]
                        }
                    },
                    "description": "JSON request body"
                }
            },
            "required": [
                "id",
                "body"
            ]
        }
    },
    {
        "name": "teachers_deleteTeacherAvatar",
        "command": "teachers.deleteTeacherAvatar",
        "operationId": "deleteTeacherAvatar",
        "httpMethod": "DELETE",
        "path": "/v2p3/teachers/{id}/avatar",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Delete Teacher Avatar",
        "tags": [
            "Teachers"
        ],
        "readOnly": false,
        "idempotent": true,
        "destructive": true,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for a teacher."
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "teachers_listTeachers",
        "command": "teachers.listTeachers",
        "operationId": "listTeachers",
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
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get all Teachers",
        "tags": [
            "Teachers"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "ids[]": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "description": "Return only records with the given IDs."
                },
                "archived": {
                    "type": "boolean",
                    "description": "Return only archived (1) or only active (0) teachers. If value is not specified, all teachers are returned."
                },
                "modified_since": {
                    "type": "string",
                    "description": "An ISO 8601 timestamp to filter results by modification date. Only records updated at or after this time are returned."
                },
                "page": {
                    "type": "string",
                    "description": "An integer defining which page to display. Defaults to 1."
                },
                "per_page": {
                    "type": "string",
                    "description": "An integer defining the number of records to display per page. Defaults to 100."
                },
                "deleted_since": {
                    "type": "string",
                    "description": "An ISO 8601 timestamp to filter by deletion date. Returns soft-deleted records removed at or after this time."
                },
                "q": {
                    "type": "string",
                    "description": "A search string matched against first name, last name, middle name, nickname, other name, and email."
                }
            }
        }
    },
    {
        "name": "teachers_createTeacher",
        "command": "teachers.createTeacher",
        "operationId": "createTeacher",
        "httpMethod": "POST",
        "path": "/v2p3/teachers",
        "pathParams": [],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Create New Teacher",
        "tags": [
            "Teachers"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "body": {
                    "type": "object",
                    "title": "TeachersCreateTeacherRequest",
                    "properties": {
                        "teacher": {
                            "type": "object",
                            "title": "TeachersCreateTeacherRequestTeacher",
                            "properties": {
                                "email": {
                                    "type": "string",
                                    "description": "User’s primary email address. Used for login and notifications. Required on create."
                                },
                                "first_name": {
                                    "type": "string",
                                    "description": "User’s first given name."
                                },
                                "middle_name": {
                                    "type": "string",
                                    "description": "User’s additional name."
                                },
                                "password": {
                                    "type": "string",
                                    "description": "Minimum 6-character password. Only used on POST (create) and PATCH (update). Never returned in GET responses. If omitted on create, a random password is generated and the user receives a welcome email.\n"
                                },
                                "last_name": {
                                    "type": "string",
                                    "description": "User’s surname."
                                },
                                "nickname": {
                                    "type": "string",
                                    "description": "User’s handle (may differ to given name)."
                                },
                                "other_name": {
                                    "type": "string",
                                    "description": "User’s additional names or variant in a different language."
                                },
                                "identifier": {
                                    "type": "string",
                                    "description": "School’s own unique ID for user."
                                },
                                "gender": {
                                    "type": "string",
                                    "description": "The user's gender. Accepts \"Male\", \"Female\", or other values depending on school configuration."
                                },
                                "birthday": {
                                    "type": "string",
                                    "description": "User’s dob; yyyy-mm-dd."
                                },
                                "phone_number": {
                                    "type": "string",
                                    "description": "User’s home number."
                                },
                                "mobile_phone_number": {
                                    "type": "string",
                                    "description": "User’s mobile number."
                                },
                                "street_address": {
                                    "type": "string",
                                    "description": "First line of user’s home address."
                                },
                                "street_address_ii": {
                                    "type": "string",
                                    "description": "Second (optional) line of user’s home address."
                                },
                                "city": {
                                    "type": "string",
                                    "description": "City of user’s home address."
                                },
                                "state": {
                                    "type": "string",
                                    "description": "State of user’s home address."
                                },
                                "zipcode": {
                                    "type": "string",
                                    "description": "Postal/zip code of user’s home address."
                                },
                                "country": {
                                    "type": "string",
                                    "description": "Country of user’s home address."
                                },
                                "nationalities": {
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    },
                                    "description": "One or more nationalities of the user."
                                },
                                "languages": {
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    },
                                    "description": "Fluent language/s of the user."
                                },
                                "account_uid": {
                                    "type": "string",
                                    "description": "A user's Portal Account UID"
                                },
                                "timezone": {
                                    "type": "string",
                                    "description": "The time zone of the user."
                                }
                            }
                        },
                        "options": {
                            "type": "object",
                            "title": "TeachersCreateTeacherRequestOptions",
                            "properties": {
                                "send_welcome_email": {
                                    "type": "boolean",
                                    "description": "If true, a welcome email is enqueued for the newly created teacher."
                                }
                            },
                            "description": "Request directives applied during the create operation."
                        }
                    },
                    "required": [
                        "teacher"
                    ],
                    "description": "JSON request body"
                }
            }
        }
    },
    {
        "name": "teachers_getTeacherById",
        "command": "teachers.getTeacherById",
        "operationId": "getTeacherByID",
        "httpMethod": "GET",
        "path": "/v2p3/teachers/{id}",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get a Teacher",
        "tags": [
            "Teachers"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for a teacher."
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "teachers_updateTeacher",
        "command": "teachers.updateTeacher",
        "operationId": "updateTeacher",
        "httpMethod": "PATCH",
        "path": "/v2p3/teachers/{id}",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Update a Teacher",
        "tags": [
            "Teachers"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for the teacher to update."
                },
                "body": {
                    "type": "object",
                    "title": "TeachersUpdateTeacherRequest",
                    "properties": {
                        "teacher": {
                            "type": "object",
                            "title": "TeachersUpdateTeacherRequestTeacher",
                            "properties": {
                                "email": {
                                    "type": "string",
                                    "description": "User’s primary email address. Used for login and notifications. Required on create."
                                },
                                "first_name": {
                                    "type": "string",
                                    "description": "User’s first given name."
                                },
                                "middle_name": {
                                    "type": "string",
                                    "description": "User’s additional name."
                                },
                                "password": {
                                    "type": "string",
                                    "description": "Minimum 6-character password. Only used on POST (create) and PATCH (update). Never returned in GET responses. If omitted on create, a random password is generated and the user receives a welcome email.\n"
                                },
                                "last_name": {
                                    "type": "string",
                                    "description": "User’s surname."
                                },
                                "nickname": {
                                    "type": "string",
                                    "description": "User’s handle (may differ to given name)."
                                },
                                "other_name": {
                                    "type": "string",
                                    "description": "User’s additional names or variant in a different language."
                                },
                                "identifier": {
                                    "type": "string",
                                    "description": "School’s own unique ID for user."
                                },
                                "gender": {
                                    "type": "string",
                                    "description": "The user's gender. Accepts \"Male\", \"Female\", or other values depending on school configuration."
                                },
                                "birthday": {
                                    "type": "string",
                                    "description": "User’s dob; yyyy-mm-dd."
                                },
                                "phone_number": {
                                    "type": "string",
                                    "description": "User’s home number."
                                },
                                "mobile_phone_number": {
                                    "type": "string",
                                    "description": "User’s mobile number."
                                },
                                "street_address": {
                                    "type": "string",
                                    "description": "First line of user’s home address."
                                },
                                "street_address_ii": {
                                    "type": "string",
                                    "description": "Second (optional) line of user’s home address."
                                },
                                "city": {
                                    "type": "string",
                                    "description": "City of user’s home address."
                                },
                                "state": {
                                    "type": "string",
                                    "description": "State of user’s home address."
                                },
                                "zipcode": {
                                    "type": "string",
                                    "description": "Postal/zip code of user’s home address."
                                },
                                "country": {
                                    "type": "string",
                                    "description": "Country of user’s home address."
                                },
                                "nationalities": {
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    },
                                    "description": "One or more nationalities of the user."
                                },
                                "languages": {
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    },
                                    "description": "Fluent language/s of the user."
                                },
                                "account_uid": {
                                    "type": "string",
                                    "description": "A user's Portal Account UID"
                                },
                                "timezone": {
                                    "type": "string",
                                    "description": "The time zone of the user."
                                }
                            }
                        }
                    },
                    "required": [
                        "teacher"
                    ],
                    "description": "JSON request body"
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "teachers_archiveTeacher",
        "command": "teachers.archiveTeacher",
        "operationId": "archiveTeacher",
        "httpMethod": "PUT",
        "path": "/v2p3/teachers/{id}/archive",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Archive a Teacher",
        "tags": [
            "Teachers"
        ],
        "readOnly": false,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for the teacher to archive."
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "teachers_unarchiveTeacher",
        "command": "teachers.unarchiveTeacher",
        "operationId": "unarchiveTeacher",
        "httpMethod": "PUT",
        "path": "/v2p3/teachers/{id}/unarchive",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Unarchive a Teacher",
        "tags": [
            "Teachers"
        ],
        "readOnly": false,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for the teacher to unarchive."
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "teachers_listTeacherClassesMemberships",
        "command": "teachers.listTeacherClassesMemberships",
        "operationId": "listTeacherClassesMemberships",
        "httpMethod": "GET",
        "path": "/v2p3/teachers/{id}/classes",
        "pathParams": [
            "id"
        ],
        "queryParams": [
            "show_on_reports",
            "archived"
        ],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get teacher Classes Memberships",
        "tags": [
            "Teachers"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for the teacher."
                },
                "show_on_reports": {
                    "type": "boolean",
                    "description": "Filter by whether the teacher is shown on reports for each class. Defaults to true."
                },
                "archived": {
                    "type": "boolean",
                    "description": "Filter by class archived status. Defaults to false (active classes only)."
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "teachers_listTeacherGroupsMemberships",
        "command": "teachers.listTeacherGroupsMemberships",
        "operationId": "listTeacherGroupsMemberships",
        "httpMethod": "GET",
        "path": "/v2p3/teachers/{id}/groups",
        "pathParams": [
            "id"
        ],
        "queryParams": [
            "archived"
        ],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get teacher Groups Memberships",
        "tags": [
            "Teachers"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for the teacher."
                },
                "archived": {
                    "type": "boolean",
                    "description": "Filter by group archived status. Defaults to false (active groups only)."
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "teachers_sendTeacherWelcomeEmail",
        "command": "teachers.sendTeacherWelcomeEmail",
        "operationId": "sendTeacherWelcomeEmail",
        "httpMethod": "POST",
        "path": "/v2p3/teachers/{id}/welcome_email",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Send Welcome Email to a Teacher",
        "tags": [
            "Teachers"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for a teacher."
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "unitClassAssignments_listUnitClassAssignments",
        "command": "unitClassAssignments.listUnitClassAssignments",
        "operationId": "listUnitClassAssignments",
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
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "List Unit-Class Assignments",
        "tags": [
            "Unit-Class Assignments"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "modified_since": {
                    "type": "string",
                    "description": "ISO 8601 timestamp; returns only assignments updated strictly after this time. Mutually exclusive with `deleted_since`."
                },
                "deleted_since": {
                    "type": "string",
                    "description": "ISO 8601 timestamp; returns only assignments deleted strictly after this time. Mutually exclusive with `modified_since`. Records returned in this mode include `deleted_at` and omit `status` / `updated_at`."
                },
                "archived": {
                    "type": "boolean",
                    "description": "When true, returns assignments tied to archived units; when false or omitted, returns assignments tied to non-archived units. Mirrors the same parameter on `GET /v2/units`. **Applies to `modified_since` mode only** — `deleted_since` always returns every soft-deleted assignment (including orphans whose underlying unit was hard-deleted) regardless of this parameter, so clients can clean up local storage."
                },
                "page": {
                    "type": "integer",
                    "description": "Page number (default 1)."
                },
                "per_page": {
                    "type": "integer",
                    "description": "Items per page (default 100, min 1, max 500)."
                }
            }
        }
    },
    {
        "name": "units_listUnits",
        "command": "units.listUnits",
        "operationId": "listUnits",
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
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get all Units",
        "tags": [
            "Units"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "modified_since": {
                    "type": "string",
                    "description": "A timestamp to filter the modification date of results."
                },
                "page": {
                    "type": "string",
                    "description": "An integer defining which page to display."
                },
                "per_page": {
                    "type": "string",
                    "description": "An integer defining the number of records to display per page."
                },
                "archived": {
                    "type": "boolean",
                    "description": "A boolean that, if set to True, returns only archived units."
                },
                "class_ids": {
                    "type": "string",
                    "description": "A comma-separated list of class IDs to filter units by."
                }
            }
        }
    },
    {
        "name": "units_getUnitById",
        "command": "units.getUnitById",
        "operationId": "getUnitByID",
        "httpMethod": "GET",
        "path": "/v2p3/units/{id}",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get a Unit",
        "tags": [
            "Units"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for unit."
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "projects_listYearGroupCasExperiencesStudents",
        "command": "projects.listYearGroupCasExperiencesStudents",
        "operationId": "listYearGroupCasExperiencesStudents",
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
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get CAS Experiences for Students in a Year Group",
        "tags": [
            "Projects"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "The unique numeric identifier of the year group."
                },
                "student_ids[]": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "description": "Filter by student IDs"
                },
                "page": {
                    "type": "integer",
                    "description": "Page number for pagination"
                },
                "per_page": {
                    "type": "integer",
                    "description": "Number of results per page (max 500)"
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "projects_getYearGroupCas",
        "command": "projects.getYearGroupCas",
        "operationId": "getYearGroupCas",
        "httpMethod": "GET",
        "path": "/v2p3/year-groups/{id}/projects/cas",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get CAS settings for a Year Group",
        "tags": [
            "Projects"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "The unique numeric identifier of the year group."
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "projects_listYearGroupPblProposalStudentsDetails",
        "command": "projects.listYearGroupPblProposalStudentsDetails",
        "operationId": "listYearGroupPblProposalStudentsDetails",
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
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Student Proposal Progress for a Year Group PBL",
        "tags": [
            "Projects"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "year_group_id": {
                    "type": "integer",
                    "description": "A Year Group ID."
                },
                "project_id": {
                    "type": "integer",
                    "description": "A PBL Project ID."
                },
                "archived": {
                    "type": "boolean",
                    "description": "A boolean parameter to filter archived or active Year Groups"
                },
                "include_archived_students": {
                    "type": "boolean",
                    "description": "A boolean parameter to specify that specifies if archived students are included in response"
                }
            },
            "required": [
                "year_group_id",
                "project_id"
            ]
        }
    },
    {
        "name": "projects_listYearGroupPblReflectionsStudentsDetails",
        "command": "projects.listYearGroupPblReflectionsStudentsDetails",
        "operationId": "listYearGroupPblReflectionsStudentsDetails",
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
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Student Reflection Progress for a Year Group PBL",
        "tags": [
            "Projects"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "year_group_id": {
                    "type": "integer",
                    "description": "A Year Group ID."
                },
                "project_id": {
                    "type": "integer",
                    "description": "A PBL Project ID."
                },
                "archived": {
                    "type": "boolean",
                    "description": "A boolean parameter to filter archived or active Year Groups"
                },
                "include_archived_students": {
                    "type": "boolean",
                    "description": "A boolean parameter to specify that specifies if archived students are included in response"
                }
            },
            "required": [
                "year_group_id",
                "project_id"
            ]
        }
    },
    {
        "name": "projects_listYearGroupPblTodosStudentsDetails",
        "command": "projects.listYearGroupPblTodosStudentsDetails",
        "operationId": "listYearGroupPblTodosStudentsDetails",
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
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Student Personal Todos and Deadlines for a Year Group PBL",
        "tags": [
            "Projects"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "year_group_id": {
                    "type": "integer",
                    "description": "A Year Group ID."
                },
                "project_id": {
                    "type": "integer",
                    "description": "A PBL Project ID."
                },
                "archived": {
                    "type": "boolean",
                    "description": "A boolean parameter to filter archived or active Year Groups"
                },
                "include_archived_students": {
                    "type": "boolean",
                    "description": "A boolean parameter to specify that specifies if archived students are included in response"
                },
                "page": {
                    "type": "integer",
                    "description": "Page number for pagination"
                },
                "per_page": {
                    "type": "integer",
                    "description": "Number of results per page"
                }
            },
            "required": [
                "year_group_id",
                "project_id"
            ]
        }
    },
    {
        "name": "projects_listYearGroupPblJournalStudentsDetails",
        "command": "projects.listYearGroupPblJournalStudentsDetails",
        "operationId": "listYearGroupPblJournalStudentsDetails",
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
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Student Journal Entries for a Year Group PBL",
        "tags": [
            "Projects"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "year_group_id": {
                    "type": "integer",
                    "description": "A Year Group ID."
                },
                "project_id": {
                    "type": "integer",
                    "description": "A PBL Project ID."
                },
                "archived": {
                    "type": "boolean",
                    "description": "A boolean parameter to filter archived or active Year Groups"
                },
                "include_archived_students": {
                    "type": "boolean",
                    "description": "A boolean parameter to specify that specifies if archived students are included in response"
                }
            },
            "required": [
                "year_group_id",
                "project_id"
            ]
        }
    },
    {
        "name": "projects_listYearGroupPblDocumentsStudentsDetails",
        "command": "projects.listYearGroupPblDocumentsStudentsDetails",
        "operationId": "listYearGroupPblDocumentsStudentsDetails",
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
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Student Documents for a Year Group PBL",
        "tags": [
            "Projects"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "year_group_id": {
                    "type": "integer",
                    "description": "A Year Group ID."
                },
                "project_id": {
                    "type": "integer",
                    "description": "A PBL Project ID."
                },
                "archived": {
                    "type": "boolean",
                    "description": "A boolean parameter to filter archived or active Year Groups"
                },
                "include_archived_students": {
                    "type": "boolean",
                    "description": "A boolean parameter to specify that specifies if archived students are included in response"
                }
            },
            "required": [
                "year_group_id",
                "project_id"
            ]
        }
    },
    {
        "name": "projects_listYearGroupPblPresentationStudentsDetails",
        "command": "projects.listYearGroupPblPresentationStudentsDetails",
        "operationId": "listYearGroupPblPresentationStudentsDetails",
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
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Student Presentations for a Year Group PBL",
        "tags": [
            "Projects"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "year_group_id": {
                    "type": "integer",
                    "description": "A Year Group ID."
                },
                "project_id": {
                    "type": "integer",
                    "description": "A PBL Project ID."
                },
                "archived": {
                    "type": "boolean",
                    "description": "A boolean parameter to filter archived or active Year Groups"
                },
                "include_archived_students": {
                    "type": "boolean",
                    "description": "A boolean parameter to specify that specifies if archived students are included in response"
                }
            },
            "required": [
                "year_group_id",
                "project_id"
            ]
        }
    },
    {
        "name": "projects_listYearGroupPblNotesAndInterviewsStudentsDetails",
        "command": "projects.listYearGroupPblNotesAndInterviewsStudentsDetails",
        "operationId": "listYearGroupPblNotesAndInterviewsStudentsDetails",
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
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Student Notes & Interviews for a Year Group PBL",
        "tags": [
            "Projects"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "year_group_id": {
                    "type": "integer",
                    "description": "A Year Group ID."
                },
                "project_id": {
                    "type": "integer",
                    "description": "A PBL Project ID."
                },
                "archived": {
                    "type": "boolean",
                    "description": "A boolean parameter to filter archived or active Year Groups"
                },
                "include_archived_students": {
                    "type": "boolean",
                    "description": "A boolean parameter to specify that specifies if archived students are included in response"
                }
            },
            "required": [
                "year_group_id",
                "project_id"
            ]
        }
    },
    {
        "name": "projects_listYearGroupProjectBasedLearningTemplates",
        "command": "projects.listYearGroupProjectBasedLearningTemplates",
        "operationId": "listYearGroupProjectBasedLearningTemplates",
        "httpMethod": "GET",
        "path": "/v2p3/year-groups/{id}/projects/pbl",
        "pathParams": [
            "id"
        ],
        "queryParams": [
            "archived"
        ],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get all Year Group Project Based Learning",
        "tags": [
            "Projects"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "A Year Group ID."
                },
                "archived": {
                    "type": "boolean",
                    "description": "A boolean parameter to filter archived or active Year Groups"
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "yearGroups_listYearGroupServiceLearningCategoriesStudents",
        "command": "yearGroups.listYearGroupServiceLearningCategoriesStudents",
        "operationId": "listYearGroupServiceLearningCategoriesStudents",
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
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Service Learning Categories for Students in a Year Group",
        "tags": [
            "Year Groups",
            "Projects",
            "Service Learning"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "The unique numeric identifier of the year group."
                },
                "student_ids[]": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "description": "Filter by student IDs"
                },
                "page": {
                    "type": "integer",
                    "description": "Page number for pagination"
                },
                "per_page": {
                    "type": "integer",
                    "description": "Number of results per page (max 500)"
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "yearGroups_listYearGroupServiceLearningOutcomesStudents",
        "command": "yearGroups.listYearGroupServiceLearningOutcomesStudents",
        "operationId": "listYearGroupServiceLearningOutcomesStudents",
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
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Service Learning Outcomes for Students in a Year Group",
        "tags": [
            "Year Groups",
            "Projects",
            "Service Learning"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "The unique numeric identifier of the year group."
                },
                "student_ids[]": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "description": "Filter by student IDs"
                },
                "page": {
                    "type": "integer",
                    "description": "Page number for pagination"
                },
                "per_page": {
                    "type": "integer",
                    "description": "Number of results per page (max 500)"
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "yearGroups_getYearGroupServiceLearning",
        "command": "yearGroups.getYearGroupServiceLearning",
        "operationId": "getYearGroupServiceLearning",
        "httpMethod": "GET",
        "path": "/v2p3/year-groups/{id}/projects/sl",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Service Learning settings for a Year Group",
        "tags": [
            "Year Groups",
            "Projects",
            "Service Learning"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "The unique numeric identifier of the year group."
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "yearGroups_listYearGroups",
        "command": "yearGroups.listYearGroups",
        "operationId": "listYearGroups",
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
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get all Year Groups",
        "tags": [
            "Year Groups"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "modified_since": {
                    "type": "string",
                    "description": "A timestamp to filter results by modification date."
                },
                "page": {
                    "type": "string",
                    "description": "An integer defining which page to display."
                },
                "per_page": {
                    "type": "string",
                    "description": "An integer defining the number of records to display per page."
                },
                "archived": {
                    "type": "boolean",
                    "description": "A boolean that, if set to true, returns only archived groups."
                },
                "student_ids": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "description": "List of student ids. Accepts repeated params or a comma-separated string."
                }
            }
        }
    },
    {
        "name": "yearGroups_listStudentsFromYearGroups",
        "command": "yearGroups.listStudentsFromYearGroups",
        "operationId": "listStudentsFromYearGroups",
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
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Students for a Year Group",
        "tags": [
            "Year Groups"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for year group."
                },
                "page": {
                    "type": "string",
                    "description": "An integer defining which page to display."
                },
                "per_page": {
                    "type": "string",
                    "description": "An integer defining the number of records to display per page."
                },
                "student_ids": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "description": "query parameter"
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "yearGroups_addStudentToYearGroup",
        "command": "yearGroups.addStudentToYearGroup",
        "operationId": "addStudentToYearGroup",
        "httpMethod": "POST",
        "path": "/v2p3/year-groups/{id}/add_students",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Add Students to a Year Group",
        "tags": [
            "Year Groups"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for year group."
                },
                "body": {
                    "type": "object",
                    "title": "YearGroupsAddStudentToYearGroupRequest",
                    "properties": {
                        "student_ids": {
                            "type": "array",
                            "items": {
                                "type": "integer"
                            },
                            "description": "An array of student IDs to be added to a year group"
                        }
                    },
                    "required": [
                        "student_ids"
                    ],
                    "description": "JSON request body"
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "yearGroups_removeStudentToYearGroup",
        "command": "yearGroups.removeStudentToYearGroup",
        "operationId": "removeStudentToYearGroup",
        "httpMethod": "POST",
        "path": "/v2p3/year-groups/{id}/remove_students",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Remove Students from a Year Group",
        "tags": [
            "Year Groups"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for year group."
                },
                "body": {
                    "type": "object",
                    "title": "YearGroupsRemoveStudentToYearGroupRequest",
                    "properties": {
                        "student_ids": {
                            "type": "array",
                            "items": {
                                "type": "integer"
                            },
                            "description": "An array of Student IDs to remove from the Year Group"
                        }
                    },
                    "required": [
                        "student_ids"
                    ],
                    "description": "JSON request body"
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "yearGroups_listAdvisorsFromYearGroup",
        "command": "yearGroups.listAdvisorsFromYearGroup",
        "operationId": "listAdvisorsFromYearGroup",
        "httpMethod": "GET",
        "path": "/v2p3/year-groups/{id}/advisors",
        "pathParams": [
            "id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Advisors",
        "tags": [
            "Year Groups"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Unique identifier for year group."
                }
            },
            "required": [
                "id"
            ]
        }
    },
    {
        "name": "memberships_getTeacherMemberships",
        "command": "memberships.getTeacherMemberships",
        "operationId": "getTeacherMemberships",
        "httpMethod": "GET",
        "path": "/v2p3/classes/{class_id}/teachers",
        "pathParams": [
            "class_id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": false,
        "multipart": false,
        "summary": "Get Teachers for a Class",
        "tags": [
            "Memberships"
        ],
        "readOnly": true,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "class_id": {
                    "type": "integer",
                    "description": "The unique numeric identifier of the class."
                }
            },
            "required": [
                "class_id"
            ]
        }
    },
    {
        "name": "extendedApis_bulkUpdateTeacherMemberships",
        "command": "extendedApis.bulkUpdateTeacherMemberships",
        "operationId": "bulkUpdateTeacherMemberships",
        "httpMethod": "PUT",
        "path": "/v2p3/classes/{class_id}/teachers",
        "pathParams": [
            "class_id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Set Teacher memberships for a Class",
        "tags": [
            "Extended APIs",
            "Classes"
        ],
        "readOnly": false,
        "idempotent": true,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "class_id": {
                    "type": "integer",
                    "description": "The unique numeric identifier of the class."
                },
                "body": {
                    "type": "object",
                    "title": "BulkUpdateTeachers",
                    "properties": {
                        "teachers": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "title": "BulkUpdateTeachersTeachersItem",
                                "properties": {
                                    "id": {
                                        "type": "integer",
                                        "description": "Teacher ID"
                                    },
                                    "show_on_reports": {
                                        "type": "boolean",
                                        "description": "Show Teacher on Reports"
                                    }
                                }
                            },
                            "description": "An array of teacher IDs to add or update in the class."
                        }
                    },
                    "required": [
                        "teachers"
                    ],
                    "description": "JSON request body"
                }
            },
            "required": [
                "class_id"
            ]
        }
    },
    {
        "name": "classes_addTeachersToClass",
        "command": "classes.addTeachersToClass",
        "operationId": "addTeachersToClass",
        "httpMethod": "POST",
        "path": "/v2p3/classes/{class_id}/teachers/add_teachers",
        "pathParams": [
            "class_id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Add Teachers to a Class",
        "tags": [
            "Classes"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "class_id": {
                    "type": "integer",
                    "description": "The unique numeric identifier of the class."
                },
                "body": {
                    "type": "object",
                    "title": "ClassesAddTeachersToClassRequest",
                    "properties": {
                        "teacher_ids": {
                            "type": "array",
                            "items": {
                                "type": "integer"
                            },
                            "description": "An array of teacher IDs to add to the class."
                        }
                    },
                    "required": [
                        "teacher_ids"
                    ],
                    "description": "JSON request body"
                }
            },
            "required": [
                "class_id"
            ]
        }
    },
    {
        "name": "memberships_removeTeachersFromClass",
        "command": "memberships.removeTeachersFromClass",
        "operationId": "removeTeachersFromClass",
        "httpMethod": "DELETE",
        "path": "/v2p3/classes/{class_id}/teachers/remove_teachers",
        "pathParams": [
            "class_id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Remove Teachers from a Class",
        "tags": [
            "Memberships"
        ],
        "readOnly": false,
        "idempotent": true,
        "destructive": true,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "class_id": {
                    "type": "integer",
                    "description": "The unique numeric identifier of the class."
                },
                "body": {
                    "type": "object",
                    "title": "MembershipsRemoveTeachersFromClassRequest",
                    "properties": {
                        "teacher_ids": {
                            "type": "array",
                            "items": {
                                "type": "integer"
                            },
                            "description": "An array of teacher IDs to remove from the class."
                        }
                    },
                    "required": [
                        "teacher_ids"
                    ],
                    "description": "JSON request body"
                }
            },
            "required": [
                "class_id"
            ]
        }
    },
    {
        "name": "coursework_createTaskforClass",
        "command": "coursework.createTaskforClass",
        "operationId": "createTaskforClass",
        "httpMethod": "POST",
        "path": "/v2p3/classes/{class_id}/tasks",
        "pathParams": [
            "class_id"
        ],
        "queryParams": [],
        "headerParams": [],
        "hasBody": true,
        "multipart": false,
        "summary": "Create a Task for a Class",
        "tags": [
            "Coursework"
        ],
        "readOnly": false,
        "idempotent": false,
        "destructive": false,
        "paginated": false,
        "inputSchema": {
            "type": "object",
            "properties": {
                "class_id": {
                    "type": "integer",
                    "description": "Unique identifier for class."
                },
                "body": {
                    "type": "object",
                    "title": "CourseworkCreateTaskforClassRequest",
                    "properties": {
                        "core_task": {
                            "type": "object",
                            "title": "CoreTaskAttributes",
                            "properties": {
                                "author_id": {
                                    "type": "integer"
                                },
                                "name": {
                                    "type": "string"
                                },
                                "due_date": {
                                    "type": "string",
                                    "format": "date-time"
                                },
                                "assessment_type_id": {
                                    "type": "integer"
                                },
                                "task_category_id": {
                                    "type": "integer"
                                },
                                "notify_group": {
                                    "type": "boolean"
                                },
                                "notify_parents": {
                                    "type": "boolean"
                                },
                                "unit_id": {
                                    "type": "integer"
                                },
                                "lesson_experience_id": {
                                    "type": "integer"
                                },
                                "hl": {
                                    "type": "boolean"
                                },
                                "sl": {
                                    "type": "boolean"
                                },
                                "notes": {
                                    "type": "string"
                                },
                                "enable_dropbox": {
                                    "type": "boolean"
                                },
                                "enable_turnitin": {
                                    "type": "boolean"
                                },
                                "dropbox_opening_days": {
                                    "type": "integer"
                                },
                                "assigned_student_ids": {
                                    "type": "array",
                                    "items": {
                                        "type": "integer"
                                    }
                                },
                                "draft": {
                                    "type": "boolean"
                                },
                                "hide_assessment_results": {
                                    "type": "boolean",
                                    "description": "When true, assessment results are hidden from students and parents."
                                },
                                "phase": {
                                    "type": "integer"
                                },
                                "assessments": {
                                    "type": "object",
                                    "title": "CoreTaskAttributesAssessments",
                                    "properties": {
                                        "criteria": {
                                            "type": "object",
                                            "title": "CoreTaskAttributesAssessmentsCriteria",
                                            "properties": {
                                                "enabled": {
                                                    "type": "boolean"
                                                },
                                                "criterion_ids": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "integer"
                                                    }
                                                }
                                            }
                                        },
                                        "points": {
                                            "type": "object",
                                            "title": "CoreTaskAttributesAssessmentsPoints",
                                            "properties": {
                                                "enabled": {
                                                    "type": "boolean"
                                                },
                                                "max_points": {
                                                    "type": "integer"
                                                }
                                            }
                                        },
                                        "binary": {
                                            "type": "object",
                                            "title": "CoreTaskAttributesAssessmentsBinary",
                                            "properties": {
                                                "enabled": {
                                                    "type": "boolean"
                                                }
                                            }
                                        },
                                        "comment": {
                                            "type": "object",
                                            "title": "CoreTaskAttributesAssessmentsComment",
                                            "properties": {
                                                "enabled": {
                                                    "type": "boolean"
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            "required": [
                                "author_id",
                                "name",
                                "due_date",
                                "assessment_type_id"
                            ]
                        }
                    },
                    "required": [
                        "core_task"
                    ],
                    "description": "JSON request body"
                }
            },
            "required": [
                "class_id",
                "body"
            ]
        }
    }
];
const API_DOCS = "# API V2P3 — MCP tool reference\n\n## coursework.listGradesForClass\n`GET /v2p3/classes/{class_id}/assessments/term/{term_id}/grades`\nGet all Grades for a Class during an Academic Term\n(read-only · tags: Coursework)\n\n## coursework.listTermGradesForClass\n`GET /v2p3/classes/{class_id}/assessments/term/{term_id}/term-grades`\nGet Term Grades for a Class\n(read-only · tags: Coursework)\n\n## attendance.setAttendanceSettings\n`PUT /v2p3/classes/{class_id}/academic-years/{academic_year_id}/attendance/settings`\nSet or Update an Attendance Settings for a Class in an Academic Year\n(write · tags: Attendance)\n\n## attendance.listCategories\n`GET /v2p3/school/academic-years/{academic_year_id}/attendance_categories`\nGet Attendance Categories\n(read-only · tags: Attendance)\n\n## authentication.listTokenResources\n`GET /v2p3/auth/permissions`\nGet all Permissions\n(read-only · tags: Authentication)\n\n## authentication.createOauthToken\n`POST /oauth/token`\nObtain an Access Token\n(write · tags: Authentication)\n\n## utilities.showAvatarById\n`GET /v2p3/avatars/{id}`\nGet Avatar\n(read-only · tags: Utilities)\n\n## utilities.ping\n`GET /v2p3/ping`\nPing\n(read-only · tags: Utilities)\n\n## behaviorNotes.listBehaviorNotes\n`GET /v2p3/behavior/notes`\nGet all behavior notes\n(read-only · tags: Behavior Notes)\n\n## coursework.listCriteriaforClass\n`GET /v2p3/classes/{id}/criteria`\nGet Criteria for a Class\n(read-only · tags: Coursework)\n\n## memberships.getStudentsForClass\n`GET /v2p3/classes/{class_id}/students`\nGet Students for a Class\n(read-only · tags: Memberships)\n\n## extendedApis.bulkUpdateStudentsFromClass\n`PATCH /v2p3/classes/{class_id}/students`\nBulk update Students from a Class\n(write · tags: Extended APIs, Classes)\n\n## coursework.listClassTaskCategories\n`GET /v2p3/classes/{id}/task_categories`\nGet Task Categories for Class\n(read-only · tags: Coursework)\n\n## coursework.downloadSubmissionFile\n`GET /v2p3/classes/{class_id}/tasks/{task_id}/submissions/{student_id}/files/{asset_id}`\nDownload a Submission File\n(read-only · tags: Coursework)\n\n## coursework.listTaskSubmissions\n`GET /v2p3/classes/{class_id}/tasks/{task_id}/submissions`\nList Student Submissions for a Task\n(read-only · tags: Coursework)\n\n## coursework.getTaskSubmission\n`GET /v2p3/classes/{class_id}/tasks/{task_id}/submissions/{student_id}`\nGet a Single Student Submission\n(read-only · tags: Coursework)\n\n## coursework.listTasksforClass\n`GET /v2p3/classes/{id}/tasks`\nGet Tasks for a Class\n(read-only · tags: Coursework)\n\n## coursework.getTasksByIdforClass\n`GET /v2p3/classes/{class_id}/tasks/{id}`\nGet a Task for a Class\n(read-only · tags: Coursework)\n\n## coursework.updateTaskforClass\n`PUT /v2p3/classes/{class_id}/tasks/{id}`\nUpdate a Task for a Class\n(write · tags: Coursework)\n\n## coursework.partialUpdateTaskforClass\n`PATCH /v2p3/classes/{class_id}/tasks/{id}`\nPartially Update a Task for a Class\n(write · tags: Coursework)\n\n## coursework.deleteTaskforClass\n`DELETE /v2p3/classes/{class_id}/tasks/{id}`\nDelete a Task for a Class\n(write · tags: Coursework)\n\n## coursework.listStudentAssessmentResultsForClassTask\n`GET /v2p3/classes/{class_id}/tasks/{id}/students`\nGet Student Assessment Results for a Task and Class\n(read-only · tags: Coursework)\n\n## attendance.getClassTimetable\n`GET /v2p3/classes/{class_id}/timetable`\nGet Class timetable\n(read-only · tags: Attendance)\n\n## classes.listClasses\n`GET /v2p3/classes`\nGet all Classes\n(read-only · tags: Classes)\n\n## classes.createClass\n`POST /v2p3/classes`\nCreate a class\n(write · tags: Classes)\n\n## extendedApis.upsertClasses\n`PATCH /v2p3/classes`\nUpsert many classes\n(write · tags: Extended APIs, Classes)\n\n## classes.getClassById\n`GET /v2p3/classes/{id}`\nGet a Class\n(read-only · tags: Classes)\n\n## classes.updateClass\n`PATCH /v2p3/classes/{id}`\nUpdate a class\n(write · tags: Classes)\n\n## classes.addStudentsToClass\n`POST /v2p3/classes/{id}/add_students`\nAdd Students to a Class\n(write · tags: Classes)\n\n## classes.removeStudentsFromClass\n`POST /v2p3/classes/{id}/remove_students`\nRemove Students from a Class\n(write · tags: Classes)\n\n## attendance.getAttendanceForClass\n`GET /v2p3/classes/{id}/attendance/term/{term_id}`\nGet Attendance for a Class during an Academic Term\n(read-only · tags: Attendance)\n\n## attendance.getClassAttendanceForDate\n`GET /v2p3/classes/{id}/attendance/date/{date}`\nGet Class Attendance for a Date\n(read-only · tags: Attendance)\n\n## extendedApis.setClassAttendanceForStudents\n`PUT /v2p3/classes/{id}/attendance`\nSet or Update a Class Attendance for Students\n(write · tags: Extended APIs, Attendance)\n\n## classes.getClassTerms\n`GET /v2p3/classes/{id}/terms`\nGet Class terms details\n(read-only · tags: Classes)\n\n## attendance.getDateExcusals\n`GET /v2p3/students/excusals/{date}`\nGet all Attendance Excusals for a date\n(read-only · tags: Attendance)\n\n## attendance.getAttendanceForYearGroupByTerm\n`GET /v2p3/year-groups/{year_group_id}/homeroom/attendance/term/{term_id}`\nGet Homeroom Attendance for a Year Group and Term\n(read-only · tags: Attendance)\n\n## attendance.getAttendanceForYearGroupByDate\n`GET /v2p3/year-groups/{year_group_id}/homeroom/attendance/date/{date}`\nGet Homeroom Attendance for a Year Group by Date\n(read-only · tags: Attendance)\n\n## attendance.getAttendanceAdjustmentsForYearGroupByTerm\n`GET /v2p3/year-groups/{year_group_id}/homeroom/attendance/term/{term_id}/adjustments`\nGet Homeroom Attendance Adjustments for a Year Group and Term\n(read-only · tags: Attendance)\n\n## memberships.listMemberships\n`GET /v2p3/memberships`\nGet all Memberships\n(read-only · tags: Memberships)\n\n## relationships.listOfParentChildrenRelationships\n`GET /v2p3/parents/{parent_id}/children`\nList of parent-children relationships\n(read-only · tags: Relationships)\n\n## relationships.createParentChildRelationship\n`POST /v2p3/parents/{parent_id}/children`\nCreate a parent-child relationship\n(write · tags: Relationships)\n\n## relationships.bulkUpdateParentChildrenRelationships\n`PUT /v2p3/parents/{parent_id}/children`\nBulk update a parent-children relationships\n(write · tags: Relationships)\n\n## relationships.getParentChildRelationship\n`GET /v2p3/parents/{parent_id}/children/{id}`\nGet parent-child relationship\n(read-only · tags: Relationships)\n\n## relationships.updateParentChildRelationship\n`PUT /v2p3/parents/{parent_id}/children/{id}`\nUpdate parent-child relationship\n(write · tags: Relationships)\n\n## relationships.deleteParentChildRelationship\n`DELETE /v2p3/parents/{parent_id}/children/{id}`\nRemove parent-child relationship\n(write · tags: Relationships)\n\n## parents.listParents\n`GET /v2p3/parents`\nGet all Parents\n(read-only · tags: Parents)\n\n## parents.createParent\n`POST /v2p3/parents`\nCreate New Parent\n(write · tags: Parents)\n\n## parents.getParentById\n`GET /v2p3/parents/{id}`\nGet a Parent\n(read-only · tags: Parents)\n\n## parents.updateParent\n`PATCH /v2p3/parents/{id}`\nUpdate a Parent\n(write · tags: Parents)\n\n## parents.archiveParent\n`PUT /v2p3/parents/{id}/archive`\nArchive a Parent\n(write · tags: Parents)\n\n## parents.unarchiveParent\n`PUT /v2p3/parents/{id}/unarchive`\nUnarchive a Parent\n(write · tags: Parents)\n\n## parents.sendParentWelcomeEmail\n`POST /v2p3/parents/{id}/welcome_email`\nSend Welcome Email to a Parent\n(write · tags: Parents)\n\n## academics.createAcademicTerm\n`POST /v2p3/school/programs/{program_code}/academic-years/{academic_year_id}/academic-terms`\nCreate Academic Term\n(write · tags: Academics)\n\n## academics.updateAcademicTerm\n`PATCH /v2p3/school/programs/{program_code}/academic-years/{academic_year_id}/academic-terms/{id}`\nUpdate Academic Term\n(write · tags: Academics)\n\n## academics.deleteAcademicTerm\n`DELETE /v2p3/school/programs/{program_code}/academic-years/{academic_year_id}/academic-terms/{id}`\nDelete Academic Term\n(write · tags: Academics)\n\n## academics.retrieve\n`GET /v2p3/school/programs/{program_code}/academic-years/{id}`\nRetrieve Academic Year\n(read-only · tags: Academics)\n\n## academics.createAcademicYear\n`POST /v2p3/school/programs/{program_code}/academic-years`\nCreate Academic Year\n(write · tags: Academics)\n\n## academics.getAssessmentTypes\n`GET /v2p3/school/programs/{program_code}/assessment_types`\nRetrieves Assessment Types\n(read-only · tags: Academics)\n\n## academics.list\n`GET /v2p3/school/programs/{program_code}/academic-years/{academic_year_id}/calendar`\nGet Academic Year Calendar\n(read-only · tags: Academics)\n\n## academics.getAllTermReports\n`GET /v2p3/school/programs/{program}/reports`\nGet All Term Reports\n(read-only · tags: Academics)\n\n## academics.getTermReport\n`GET /v2p3/school/programs/{program}/reports/{id}`\nGet Term Report\n(read-only · tags: Academics)\n\n## academics.downloadTermReportFile\n`GET /v2p3/school/programs/{program}/reports/{id}/download/{kind}`\nDownload Term Report File\n(read-only · tags: Academics)\n\n## academics.getSubjectGroups\n`GET /v2p3/school/programs/{program_code}/subject-groups`\nRetrieves Subject Groups\n(read-only · tags: Academics)\n\n## academics.createSubjectGroup\n`POST /v2p3/school/programs/{program_code}/subject-groups`\nCreate Subject Group\n(write · tags: Academics)\n\n## academics.getSubjectGroup\n`GET /v2p3/school/programs/{program_code}/subject-groups/{id}`\nGet Subject Group\n(read-only · tags: Academics)\n\n## academics.updateSubjectGroup\n`PATCH /v2p3/school/programs/{program_code}/subject-groups/{id}`\nUpdate Subject Group\n(write · tags: Academics)\n\n## academics.destroySubjectGroup\n`DELETE /v2p3/school/programs/{program_code}/subject-groups/{id}`\nRemove Subject Group\n(write · tags: Academics)\n\n## academics.getSubjects\n`GET /v2p3/school/programs/{program_code}/subjects`\nRetrieves Subjects\n(read-only · tags: Academics)\n\n## academics.createSubject\n`POST /v2p3/school/programs/{program_code}/subjects`\nCreates Subject\n(write · tags: Academics)\n\n## academics.getSubject\n`GET /v2p3/school/programs/{program_code}/subjects/{id}`\nRetrieves Subject\n(read-only · tags: Academics)\n\n## academics.updateSubject\n`PUT /v2p3/school/programs/{program_code}/subjects/{id}`\nUpdates Subject\n(write · tags: Academics)\n\n## academics.deleteSubject\n`DELETE /v2p3/school/programs/{program_code}/subjects/{id}`\nDelete Subject\n(write · tags: Academics)\n\n## extendedApis.bulkEnableSubjects\n`POST /v2p3/school/programs/{program_code}/subjects/bulk-enable`\nBulk Enable Subjects\n(write · tags: Extended APIs, Academics)\n\n## extendedApis.bulkDisableSubjects\n`POST /v2p3/school/programs/{program_code}/subjects/bulk-disable`\nBulk Disable Subjects\n(write · tags: Extended APIs, Academics)\n\n## academics.getSchool\n`GET /v2p3/school`\nGet School Details\n(read-only · tags: Academics)\n\n## academics.listAcademicYears\n`GET /v2p3/school/academic-years`\nGet Academic Years\n(read-only · tags: Academics)\n\n## academics.listGrades\n`GET /v2p3/school/grades`\nGet School Grades\n(read-only · tags: Academics)\n\n## academics.listSubjects\n`GET /v2p3/school/subjects`\nGet School Subjects\n(read-only · tags: Academics)\n\n## academics.listSchoolTermGradeScales\n`GET /v2p3/school/term-grade-scales`\nGet School Term Grade Scales\n(read-only · tags: Academics)\n\n## academics.listTermRubrics\n`GET /v2p3/school/term-rubrics`\nGet School Term Grade Rubrics\n(read-only · tags: Academics)\n\n## students.updateStudentAvatar\n`PUT /v2p3/students/{id}/avatar`\nUpdate Student Avatar\n(write · tags: Students)\n\n## students.deleteStudentAvatar\n`DELETE /v2p3/students/{id}/avatar`\nDelete Student Avatar\n(write · tags: Students)\n\n## attendance.getStudentExcusals\n`GET /v2p3/students/{student_id}/excusals`\nGet all Attendance Excusals for a student\n(read-only · tags: Attendance)\n\n## attendance.createStudentExcusal\n`POST /v2p3/students/{student_id}/excusals`\nCreate Excusal for a Student\n(write · tags: Attendance)\n\n## extendedApis.updateStudentExcusal\n`PATCH /v2p3/students/{student_id}/excusals/{id}`\nUpdate Excusal for a Student\n(write · tags: Extended APIs, Attendance)\n\n## extendedApis.deleteStudentExcusal\n`DELETE /v2p3/students/{student_id}/excusals/{id}`\nDelete Excusal for a Student\n(write · tags: Extended APIs, Attendance)\n\n## students.listStudents\n`GET /v2p3/students`\nGet all Students\n(read-only · tags: Students)\n\n## students.createStudent\n`POST /v2p3/students`\nCreate New Student\n(write · tags: Students)\n\n## students.getStudentById\n`GET /v2p3/students/{id}`\nGet a Student\n(read-only · tags: Students)\n\n## students.updateStudent\n`PATCH /v2p3/students/{id}`\nUpdate a Student\n(write · tags: Students)\n\n## students.archiveStudent\n`PUT /v2p3/students/{id}/archive`\nArchive a Student\n(write · tags: Students)\n\n## students.unarchiveStudent\n`PUT /v2p3/students/{id}/unarchive`\nUnarchive a Student\n(write · tags: Students)\n\n## memberships.getStudentMemberships\n`GET /v2p3/students/{id}/memberships`\nGet a Student's memberships\n(read-only · tags: Memberships)\n\n## extendedApis.setStudentHomeroomAttendance\n`PUT /v2p3/students/{id}/set_homeroom_attendance`\nSet student homeroom attendance\n(write · tags: Extended APIs, Attendance)\n\n## students.sendStudentWelcomeEmail\n`POST /v2p3/students/{id}/welcome_email`\nSend Welcome Email to a Student\n(write · tags: Students)\n\n## onlineAssessment.updateOnlineAssessment\n`PATCH /v2p3/tasks/{task_id}/online_assessments/{assess_prep_uid}`\nUpdate an Online Assessment\n(write · tags: OnlineAssessment)\n\n## extendedApis.updateStudentTaskGrades\n`PATCH /v2p3/tasks/{task_id}/students/{student_id}`\nUpdate or Create a Grade for a Student for a Task\n(write · tags: Extended APIs, Coursework)\n\n## extendedApis.bulkUpdateStudentTaskGrades\n`PATCH /v2p3/tasks/{task_id}/students`\nBulk Update or Create Grades for Students for a Task\n(write · tags: Extended APIs, Coursework)\n\n## coursework.bulkResetStudentsTaskGrades\n`DELETE /v2p3/tasks/{task_id}/students`\nBulk Delete Grades for Students for a Task\n(write · tags: Coursework)\n\n## teachers.updateTeacherAvatar\n`PUT /v2p3/teachers/{id}/avatar`\nUpdate Teacher Avatar\n(write · tags: Teachers)\n\n## teachers.deleteTeacherAvatar\n`DELETE /v2p3/teachers/{id}/avatar`\nDelete Teacher Avatar\n(write · tags: Teachers)\n\n## teachers.listTeachers\n`GET /v2p3/teachers`\nGet all Teachers\n(read-only · tags: Teachers)\n\n## teachers.createTeacher\n`POST /v2p3/teachers`\nCreate New Teacher\n(write · tags: Teachers)\n\n## teachers.getTeacherById\n`GET /v2p3/teachers/{id}`\nGet a Teacher\n(read-only · tags: Teachers)\n\n## teachers.updateTeacher\n`PATCH /v2p3/teachers/{id}`\nUpdate a Teacher\n(write · tags: Teachers)\n\n## teachers.archiveTeacher\n`PUT /v2p3/teachers/{id}/archive`\nArchive a Teacher\n(write · tags: Teachers)\n\n## teachers.unarchiveTeacher\n`PUT /v2p3/teachers/{id}/unarchive`\nUnarchive a Teacher\n(write · tags: Teachers)\n\n## teachers.listTeacherClassesMemberships\n`GET /v2p3/teachers/{id}/classes`\nGet teacher Classes Memberships\n(read-only · tags: Teachers)\n\n## teachers.listTeacherGroupsMemberships\n`GET /v2p3/teachers/{id}/groups`\nGet teacher Groups Memberships\n(read-only · tags: Teachers)\n\n## teachers.sendTeacherWelcomeEmail\n`POST /v2p3/teachers/{id}/welcome_email`\nSend Welcome Email to a Teacher\n(write · tags: Teachers)\n\n## unitClassAssignments.listUnitClassAssignments\n`GET /v2p3/unit-class-assignments`\nList Unit-Class Assignments\n(read-only · tags: Unit-Class Assignments)\n\n## units.listUnits\n`GET /v2p3/units`\nGet all Units\n(read-only · tags: Units)\n\n## units.getUnitById\n`GET /v2p3/units/{id}`\nGet a Unit\n(read-only · tags: Units)\n\n## projects.listYearGroupCasExperiencesStudents\n`GET /v2p3/year-groups/{id}/projects/cas/experiences/students`\nGet CAS Experiences for Students in a Year Group\n(read-only · tags: Projects)\n\n## projects.getYearGroupCas\n`GET /v2p3/year-groups/{id}/projects/cas`\nGet CAS settings for a Year Group\n(read-only · tags: Projects)\n\n## projects.listYearGroupPblProposalStudentsDetails\n`GET /v2p3/year-groups/{year_group_id}/projects/pbl/{project_id}/proposal/students`\nGet Student Proposal Progress for a Year Group PBL\n(read-only · tags: Projects)\n\n## projects.listYearGroupPblReflectionsStudentsDetails\n`GET /v2p3/year-groups/{year_group_id}/projects/pbl/{project_id}/reflections/students`\nGet Student Reflection Progress for a Year Group PBL\n(read-only · tags: Projects)\n\n## projects.listYearGroupPblTodosStudentsDetails\n`GET /v2p3/year-groups/{year_group_id}/projects/pbl/{project_id}/todos/students`\nGet Student Personal Todos and Deadlines for a Year Group PBL\n(read-only · tags: Projects)\n\n## projects.listYearGroupPblJournalStudentsDetails\n`GET /v2p3/year-groups/{year_group_id}/projects/pbl/{project_id}/journal/students`\nGet Student Journal Entries for a Year Group PBL\n(read-only · tags: Projects)\n\n## projects.listYearGroupPblDocumentsStudentsDetails\n`GET /v2p3/year-groups/{year_group_id}/projects/pbl/{project_id}/documents/students`\nGet Student Documents for a Year Group PBL\n(read-only · tags: Projects)\n\n## projects.listYearGroupPblPresentationStudentsDetails\n`GET /v2p3/year-groups/{year_group_id}/projects/pbl/{project_id}/presentation/students`\nGet Student Presentations for a Year Group PBL\n(read-only · tags: Projects)\n\n## projects.listYearGroupPblNotesAndInterviewsStudentsDetails\n`GET /v2p3/year-groups/{year_group_id}/projects/pbl/{project_id}/notes_and_interviews/students`\nGet Student Notes & Interviews for a Year Group PBL\n(read-only · tags: Projects)\n\n## projects.listYearGroupProjectBasedLearningTemplates\n`GET /v2p3/year-groups/{id}/projects/pbl`\nGet all Year Group Project Based Learning\n(read-only · tags: Projects)\n\n## yearGroups.listYearGroupServiceLearningCategoriesStudents\n`GET /v2p3/year-groups/{id}/projects/sl/categories/students`\nGet Service Learning Categories for Students in a Year Group\n(read-only · tags: Year Groups, Projects, Service Learning)\n\n## yearGroups.listYearGroupServiceLearningOutcomesStudents\n`GET /v2p3/year-groups/{id}/projects/sl/outcomes/students`\nGet Service Learning Outcomes for Students in a Year Group\n(read-only · tags: Year Groups, Projects, Service Learning)\n\n## yearGroups.getYearGroupServiceLearning\n`GET /v2p3/year-groups/{id}/projects/sl`\nGet Service Learning settings for a Year Group\n(read-only · tags: Year Groups, Projects, Service Learning)\n\n## yearGroups.listYearGroups\n`GET /v2p3/year-groups`\nGet all Year Groups\n(read-only · tags: Year Groups)\n\n## yearGroups.listStudentsFromYearGroups\n`GET /v2p3/year-groups/{id}/students`\nGet Students for a Year Group\n(read-only · tags: Year Groups)\n\n## yearGroups.addStudentToYearGroup\n`POST /v2p3/year-groups/{id}/add_students`\nAdd Students to a Year Group\n(write · tags: Year Groups)\n\n## yearGroups.removeStudentToYearGroup\n`POST /v2p3/year-groups/{id}/remove_students`\nRemove Students from a Year Group\n(write · tags: Year Groups)\n\n## yearGroups.listAdvisorsFromYearGroup\n`GET /v2p3/year-groups/{id}/advisors`\nGet Advisors\n(read-only · tags: Year Groups)\n\n## memberships.getTeacherMemberships\n`GET /v2p3/classes/{class_id}/teachers`\nGet Teachers for a Class\n(read-only · tags: Memberships)\n\n## extendedApis.bulkUpdateTeacherMemberships\n`PUT /v2p3/classes/{class_id}/teachers`\nSet Teacher memberships for a Class\n(write · tags: Extended APIs, Classes)\n\n## classes.addTeachersToClass\n`POST /v2p3/classes/{class_id}/teachers/add_teachers`\nAdd Teachers to a Class\n(write · tags: Classes)\n\n## memberships.removeTeachersFromClass\n`DELETE /v2p3/classes/{class_id}/teachers/remove_teachers`\nRemove Teachers from a Class\n(write · tags: Memberships)\n\n## coursework.createTaskforClass\n`POST /v2p3/classes/{class_id}/tasks`\nCreate a Task for a Class\n(write · tags: Coursework)\n";
const authConfig = {
    "bearerEnv": "MANAGE_BAC_PLUS_API_KEY",
    "apiKeyHeader": null,
    "apiKeyQuery": null,
    "oauth2": null
};
const baseUrl = process.env.MANAGE_BAC_PLUS_BASE_URL ?? "https://api.managebac.com";
function parseFlags(argv) {
    const flags = {
        transport: "stdio",
        port: 3000,
        mode: DEFAULT_MODE,
        tools: [],
        scopes: [],
        allowed: DEFAULT_PERMISSIONS.allowed_methods.map(function (re) { return new RegExp(re); }),
        blocked: DEFAULT_PERMISSIONS.blocked_methods.map(function (re) { return new RegExp(re); }),
        allowHttpGets: DEFAULT_PERMISSIONS.allow_http_gets,
        selfTest: false,
    };
    for (let i = 0; i < argv.length; i += 1) {
        const arg = argv[i];
        if (arg === undefined)
            continue;
        const next = function () { i += 1; return argv[i] ?? ""; };
        if (arg === "--transport") {
            const v = next();
            flags.transport = v === "http" ? "http" : "stdio";
        }
        else if (arg === "--port") {
            flags.port = Number(next()) || 3000;
        }
        else if (arg === "--tools" || arg === "--mode") {
            const v = next();
            if (v === "typed" || v === "dynamic" || v === "code")
                flags.mode = v;
        }
        else if (arg === "--tool") {
            flags.tools.push(next());
        }
        else if (arg === "--scope") {
            flags.scopes.push(next());
        }
        else if (arg === "--allowed-methods") {
            flags.allowed.push(new RegExp(next()));
        }
        else if (arg === "--blocked-methods") {
            flags.blocked.push(new RegExp(next()));
        }
        else if (arg === "--allow-http-gets") {
            flags.allowHttpGets = true;
        }
        else if (arg === "--oauth-client-id") {
            flags.oauthClientId = next();
        }
        else if (arg === "--oauth-client-secret") {
            flags.oauthClientSecret = next();
        }
        else if (arg === "--self-test") {
            flags.selfTest = true;
        }
        else if (arg === "--transport=http") {
            flags.transport = "http";
        }
        else if (arg.startsWith("--port=")) {
            flags.port = Number(arg.slice(7)) || 3000;
        }
    }
    return flags;
}
function permitted(command, flags) {
    if (flags.blocked.some(function (re) { return re.test(command); }))
        return false;
    if (flags.allowed.length > 0 && !flags.allowed.some(function (re) { return re.test(command); }))
        return false;
    return true;
}
function inScope(endpoint, scope) {
    if (scope === "read")
        return endpoint.readOnly;
    if (scope === "write")
        return !endpoint.readOnly;
    return endpoint.tags.indexOf(scope) >= 0;
}
function activeEndpoints(flags) {
    return endpoints.filter(function (endpoint) {
        if (!permitted(endpoint.command, flags))
            return false;
        if (flags.scopes.length > 0 && !flags.scopes.some(function (scope) { return inScope(endpoint, scope); }))
            return false;
        if (flags.tools.length > 0 && flags.tools.indexOf(endpoint.name) < 0)
            return false;
        return true;
    });
}
function annotationsFor(endpoint) {
    return { title: endpoint.command, readOnlyHint: endpoint.readOnly, destructiveHint: endpoint.destructive, idempotentHint: endpoint.idempotent, openWorldHint: true };
}
// ----- auth -----
let tokenCache = null;
async function oauthToken(flags) {
    const oauth = authConfig.oauth2;
    if (!oauth)
        return null;
    const id = flags.oauthClientId ?? process.env[oauth.clientIdEnv];
    const secret = flags.oauthClientSecret ?? process.env[oauth.clientSecretEnv];
    if (!id || !secret)
        return null;
    const now = Date.now();
    if (tokenCache && tokenCache.expiresAt > now + 5000)
        return tokenCache.value;
    const tokenUrl = oauth.tokenUrl.indexOf("http") === 0 ? oauth.tokenUrl : baseUrl + oauth.tokenUrl;
    const headers = { "content-type": "application/x-www-form-urlencoded", accept: "application/json" };
    const params = new URLSearchParams({ grant_type: "client_credentials" });
    if (oauth.scopes.length > 0)
        params.set("scope", oauth.scopes.join(" "));
    if (oauth.authStyle === "basic")
        headers.authorization = "Basic " + Buffer.from(id + ":" + secret).toString("base64");
    else {
        params.set("client_id", id);
        params.set("client_secret", secret);
    }
    const response = await fetch(tokenUrl, { method: "POST", headers, body: params.toString() });
    const json = (await response.json());
    if (!json.access_token)
        return null;
    tokenCache = { value: json.access_token, expiresAt: now + (json.expires_in ?? 3600) * 1000 };
    return tokenCache.value;
}
async function applyAuth(headers, url, flags) {
    const token = await oauthToken(flags);
    if (token) {
        headers.authorization = "Bearer " + token;
        return;
    }
    if (authConfig.bearerEnv) {
        const key = process.env[authConfig.bearerEnv];
        if (key)
            headers.authorization = "Bearer " + key;
    }
    if (authConfig.apiKeyHeader) {
        const key = process.env[authConfig.apiKeyHeader.env];
        if (key)
            headers[authConfig.apiKeyHeader.name.toLowerCase()] = key;
    }
    if (authConfig.apiKeyQuery) {
        const key = process.env[authConfig.apiKeyQuery.env];
        if (key)
            url.searchParams.set(authConfig.apiKeyQuery.name, key);
    }
}
async function callEndpoint(endpoint, args, flags) {
    if (!permitted(endpoint.command, flags))
        return "Permission denied for " + endpoint.command;
    let path = endpoint.path;
    for (const param of endpoint.pathParams) {
        path = path.split("{" + param + "}").join(encodeURIComponent(String(args[param] ?? "")));
    }
    const url = new URL(baseUrl + path);
    for (const param of endpoint.queryParams) {
        if (args[param] !== undefined)
            url.searchParams.set(param, String(args[param]));
    }
    const headers = { accept: "application/json" };
    for (const param of endpoint.headerParams) {
        if (args[param] !== undefined)
            headers[param] = String(args[param]);
    }
    await applyAuth(headers, url, flags);
    let body;
    if (endpoint.hasBody && args.body !== undefined) {
        headers["content-type"] = "application/json";
        body = JSON.stringify(args.body);
    }
    const response = await fetch(url, { method: endpoint.httpMethod, headers, body });
    const text = await response.text();
    return response.ok ? text : "HTTP " + response.status + ": " + text;
}
// ----- raw execute (code mode) -----
async function rawExecute(args, flags) {
    const method = String(args.method ?? "GET").toUpperCase();
    const reqPath = String(args.path ?? "");
    const command = method + " " + reqPath;
    if (method === "GET" && !flags.allowHttpGets)
        return "GET requests require --allow-http-gets";
    if (!permitted(command, flags))
        return "Permission denied for " + command;
    const url = new URL(baseUrl + reqPath);
    const query = (args.query ?? {});
    for (const key of Object.keys(query))
        url.searchParams.set(key, String(query[key]));
    const headers = { accept: "application/json" };
    await applyAuth(headers, url, flags);
    let body;
    if (args.body !== undefined) {
        headers["content-type"] = "application/json";
        body = JSON.stringify(args.body);
    }
    const response = await fetch(url, { method, headers, body });
    const text = await response.text();
    return response.ok ? text : "HTTP " + response.status + ": " + text;
}
function searchDocs(query) {
    const lower = query.toLowerCase();
    const matches = endpoints.filter(function (endpoint) {
        return (endpoint.command + " " + endpoint.path + " " + endpoint.summary + " " + endpoint.tags.join(" ")).toLowerCase().indexOf(lower) >= 0;
    });
    if (matches.length === 0)
        return API_DOCS;
    return matches.map(function (endpoint) {
        return "## " + endpoint.command + "\n" + endpoint.httpMethod + " " + endpoint.path + "\n" + endpoint.summary;
    }).join("\n\n");
}
function docsTool() {
    return {
        name: "search_docs",
        title: "Search API docs",
        description: "Search " + SERVER.name + " endpoints and documentation by keyword.",
        inputSchema: { type: "object", properties: { query: { type: "string", description: "Search keyword" } }, required: ["query"] },
        annotations: { title: "Search API docs", readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false },
    };
}
function listTools(flags) {
    const active = activeEndpoints(flags);
    let tools = [];
    if (flags.mode === "typed") {
        tools = active.map(function (endpoint) {
            return {
                name: endpoint.name,
                title: endpoint.command,
                description: (endpoint.summary || endpoint.command) + " (" + endpoint.httpMethod + " " + endpoint.path + ")" + (endpoint.paginated ? " [paginated]" : ""),
                inputSchema: endpoint.inputSchema,
                annotations: annotationsFor(endpoint),
            };
        });
        if (ENABLE_DOCS_TOOL)
            tools.push(docsTool());
    }
    else if (flags.mode === "dynamic") {
        tools = [
            {
                name: "list_api_endpoints",
                title: "List API endpoints",
                description: "List available " + SERVER.name + " endpoints, optionally filtered by search text or tag.",
                inputSchema: { type: "object", properties: { search: { type: "string" }, tag: { type: "string" } } },
                annotations: { title: "List API endpoints", readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false },
            },
            {
                name: "get_api_endpoint_schema",
                title: "Get endpoint schema",
                description: "Get the full input schema for one endpoint by its command (resource.method).",
                inputSchema: { type: "object", properties: { command: { type: "string" } }, required: ["command"] },
                annotations: { title: "Get endpoint schema", readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false },
            },
            {
                name: "invoke_api_endpoint",
                title: "Invoke an endpoint",
                description: "Invoke an endpoint by command, passing its arguments object (see get_api_endpoint_schema).",
                inputSchema: { type: "object", properties: { command: { type: "string" }, arguments: { type: "object" } }, required: ["command"] },
                annotations: { title: "Invoke an endpoint", readOnlyHint: false, destructiveHint: false, idempotentHint: false, openWorldHint: true },
            },
        ];
        if (ENABLE_DOCS_TOOL)
            tools.push(docsTool());
    }
    else {
        if (ENABLE_CODE_TOOL) {
            tools.push({
                name: "execute",
                title: "Execute an API request",
                description: "Execute an HTTP request against " + SERVER.name + ". GETs require --allow-http-gets. Subject to method allow/block lists.",
                inputSchema: {
                    type: "object",
                    properties: {
                        method: { type: "string", enum: ["GET", "POST", "PUT", "PATCH", "DELETE"] },
                        path: { type: "string", description: "Request path, e.g. /v1/resource/{id}" },
                        query: { type: "object" },
                        body: { type: "object" },
                    },
                    required: ["method", "path"],
                },
                annotations: { title: "Execute an API request", readOnlyHint: false, destructiveHint: true, idempotentHint: false, openWorldHint: true },
            });
        }
        if (ENABLE_DOCS_TOOL)
            tools.push(docsTool());
    }
    if (flags.tools.length > 0)
        tools = tools.filter(function (tool) { return flags.tools.indexOf(tool.name) >= 0; });
    return tools;
}
async function callTool(name, args, flags) {
    if (name === "search_docs")
        return { text: searchDocs(String(args.query ?? "")) };
    if (name === "execute")
        return { text: await rawExecute(args, flags) };
    if (name === "list_api_endpoints") {
        const search = String(args.search ?? "").toLowerCase();
        const tag = String(args.tag ?? "");
        const rows = activeEndpoints(flags).filter(function (endpoint) {
            const matchSearch = !search || (endpoint.command + " " + endpoint.path + " " + endpoint.summary).toLowerCase().indexOf(search) >= 0;
            const matchTag = !tag || endpoint.tags.indexOf(tag) >= 0;
            return matchSearch && matchTag;
        }).map(function (endpoint) {
            return { command: endpoint.command, method: endpoint.httpMethod, path: endpoint.path, summary: endpoint.summary, read_only: endpoint.readOnly, paginated: endpoint.paginated, tags: endpoint.tags };
        });
        return { text: JSON.stringify({ count: rows.length, endpoints: rows }, null, 2) };
    }
    if (name === "get_api_endpoint_schema") {
        const command = String(args.command ?? "");
        const endpoint = endpoints.find(function (candidate) { return candidate.command === command || candidate.name === command; });
        if (!endpoint)
            return { text: "Unknown endpoint: " + command, isError: true };
        return { text: JSON.stringify({ command: endpoint.command, http: endpoint.httpMethod + " " + endpoint.path, input_schema: endpoint.inputSchema }, null, 2) };
    }
    if (name === "invoke_api_endpoint") {
        const command = String(args.command ?? "");
        const endpoint = endpoints.find(function (candidate) { return candidate.command === command || candidate.name === command; });
        if (!endpoint)
            return { text: "Unknown endpoint: " + command, isError: true };
        const inner = (args.arguments ?? {});
        return { text: await callEndpoint(endpoint, inner, flags) };
    }
    // typed mode: tool name == endpoint name
    const endpoint = endpoints.find(function (candidate) { return candidate.name === name; });
    if (!endpoint)
        return { text: "Unknown tool: " + name, isError: true };
    return { text: await callEndpoint(endpoint, args, flags) };
}
const RESOURCES = [
    { uri: "mcp://docs", name: "API reference", description: "Markdown reference for all endpoints.", mimeType: "text/markdown" },
    { uri: "mcp://endpoints", name: "Endpoint index", description: "JSON index of endpoints and metadata.", mimeType: "application/json" },
];
function readResource(uri) {
    if (uri === "mcp://docs")
        return API_DOCS;
    if (uri === "mcp://endpoints")
        return JSON.stringify(endpoints.map(function (endpoint) { return { command: endpoint.command, method: endpoint.httpMethod, path: endpoint.path, summary: endpoint.summary, tags: endpoint.tags }; }), null, 2);
    return null;
}
async function handle(message, flags) {
    const id = (message.id ?? null);
    const ok = function (result) { return { jsonrpc: "2.0", id, result }; };
    const err = function (code, msg) { return { jsonrpc: "2.0", id, error: { code, message: msg } }; };
    const method = message.method;
    if (method === "initialize") {
        return ok({ protocolVersion: PROTOCOL_VERSION, capabilities: { tools: { listChanged: false }, resources: { listChanged: false } }, serverInfo: SERVER });
    }
    if (method === "notifications/initialized" || method === "notifications/cancelled")
        return null;
    if (method === "ping")
        return ok({});
    if (method === "tools/list")
        return ok({ tools: listTools(flags) });
    if (method === "tools/call") {
        const params = message.params ?? {};
        const name = String(params.name ?? "");
        const args = (params.arguments ?? {});
        try {
            const result = await callTool(name, args, flags);
            return ok({ content: [{ type: "text", text: result.text }], isError: result.isError === true });
        }
        catch (error) {
            return ok({ content: [{ type: "text", text: error instanceof Error ? error.message : String(error) }], isError: true });
        }
    }
    if (method === "resources/list")
        return ok({ resources: RESOURCES });
    if (method === "resources/read") {
        const uri = String((message.params ?? {}).uri ?? "");
        const text = readResource(uri);
        if (text === null)
            return err(-32602, "Unknown resource: " + uri);
        const mime = uri === "mcp://endpoints" ? "application/json" : "text/markdown";
        return ok({ contents: [{ uri, mimeType: mime, text }] });
    }
    if (id === null)
        return null;
    return err(-32601, "Unknown method: " + String(method));
}
function runStdio(flags) {
    const reader = createInterface({ input: process.stdin });
    reader.on("line", function (line) {
        const trimmed = line.trim();
        if (!trimmed)
            return;
        let message;
        try {
            message = JSON.parse(trimmed);
        }
        catch {
            return;
        }
        void handle(message, flags).then(function (response) {
            if (response)
                process.stdout.write(JSON.stringify(response) + "\n");
        });
    });
    process.stderr.write("API V2P3 MCP server ready on stdio (mode " + flags.mode + ", " + listTools(flags).length + " tools)\n");
}
function runHttp(flags) {
    const httpServer = createServer(function (req, res) {
        if (req.method !== "POST") {
            res.writeHead(405, { allow: "POST" });
            res.end("Method Not Allowed");
            return;
        }
        let raw = "";
        req.on("data", function (chunk) { raw += chunk; });
        req.on("end", function () {
            let message;
            try {
                message = JSON.parse(raw);
            }
            catch {
                res.writeHead(400);
                res.end("Invalid JSON");
                return;
            }
            void handle(message, flags).then(function (response) {
                if (!response) {
                    res.writeHead(202);
                    res.end();
                    return;
                }
                const accept = String(req.headers.accept ?? "");
                if (accept.indexOf("text/event-stream") >= 0) {
                    res.writeHead(200, { "content-type": "text/event-stream", "cache-control": "no-cache" });
                    res.end("event: message\ndata: " + JSON.stringify(response) + "\n\n");
                }
                else {
                    res.writeHead(200, { "content-type": "application/json" });
                    res.end(JSON.stringify(response));
                }
            });
        });
    });
    httpServer.listen(flags.port, function () {
        process.stderr.write("API V2P3 MCP server on http://127.0.0.1:" + flags.port + "/ (streamable HTTP, mode " + flags.mode + ")\n");
    });
}
async function selfTest(flags) {
    const fail = function (cond, msg) { if (!cond) {
        throw new Error("mcp self-test: " + msg);
    } };
    const init = await handle({ jsonrpc: "2.0", id: 1, method: "initialize" }, flags);
    fail((init?.result?.protocolVersion) === PROTOCOL_VERSION, "bad protocol");
    for (const mode of ["typed", "dynamic", "code"]) {
        const modeFlags = { ...flags, mode };
        const tools = listTools(modeFlags);
        fail(tools.length > 0, mode + " produced no tools");
        for (const tool of tools) {
            fail(typeof tool.inputSchema === "object", "tool " + tool.name + " missing inputSchema");
            fail(typeof tool.annotations.title === "string", "tool " + tool.name + " missing annotation title");
        }
        if (mode === "dynamic") {
            const list = await callTool("list_api_endpoints", {}, modeFlags);
            fail(!list.isError, "list_api_endpoints errored");
            const first = endpoints[0];
            if (first) {
                const schema = await callTool("get_api_endpoint_schema", { command: first.command }, modeFlags);
                fail(!schema.isError, "get_api_endpoint_schema errored");
            }
        }
    }
    const docs = await callTool("search_docs", { query: "" }, { ...flags, mode: "code" });
    fail(docs.text.length > 0, "search_docs empty");
    const resources = await handle({ jsonrpc: "2.0", id: 2, method: "resources/list" }, flags);
    fail(((resources?.result?.resources) ?? []).length === RESOURCES.length, "resources/list mismatch");
    process.stdout.write("mcp self-test passed: modes typed/dynamic/code, protocol " + PROTOCOL_VERSION + "\n");
}
const flags = parseFlags(process.argv.slice(2));
if (flags.selfTest) {
    void selfTest(flags).catch(function (error) { process.stderr.write(String(error) + "\n"); process.exit(1); });
}
else if (flags.transport === "http") {
    runHttp(flags);
}
else {
    runStdio(flags);
}
