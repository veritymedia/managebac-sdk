export class AttendanceResource {
    client;
    constructor(client) {
        this.client = client;
    }
    async setAttendanceSettings(params, options = {}) {
        return this.client.request("put", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/academic-years/${encodeURIComponent(String(params.academicYearId))}/attendance/settings`, {
            ...options,
            query: undefined,
            body: params.body,
            requestType: "SetAttendanceSettingsRequest",
        });
    }
    async listCategories(academicYearId, options = {}) {
        return this.client.request("get", `/v2p3/school/academic-years/${encodeURIComponent(String(academicYearId))}/attendance_categories`, {
            ...options,
            query: undefined,
            body: undefined,
            responseType: "AttendanceListCategoriesResponse",
        });
    }
    async getClassTimetable(params, options = {}) {
        return this.client.request("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/timetable`, {
            ...options,
            query: {
                "include_disabled": params.includeDisabled,
            },
            body: undefined,
        });
    }
    async getAttendanceForClass(params, options = {}) {
        return this.client.request("get", `/v2p3/classes/${encodeURIComponent(String(params.id))}/attendance/term/${encodeURIComponent(String(params.termId))}`, {
            ...options,
            query: {
                "archived_students": params.archivedStudents,
                "student_ids": params.studentIds,
            },
            body: undefined,
        });
    }
    async getClassAttendanceForDate(params, options = {}) {
        return this.client.request("get", `/v2p3/classes/${encodeURIComponent(String(params.id))}/attendance/date/${encodeURIComponent(String(params.date))}`, {
            ...options,
            query: {
                "student_ids": params.studentIds,
            },
            body: undefined,
        });
    }
    async getDateExcusals(params, options = {}) {
        return this.client.request("get", `/v2p3/students/excusals/${encodeURIComponent(String(params.date))}`, {
            ...options,
            query: {
                "page": params.page,
                "per_page": params.perPage,
                "student_ids": params.studentIds,
            },
            body: undefined,
            responseType: "AttendanceGetDateExcusalsResponse",
        });
    }
    async getAttendanceForYearGroupByTerm(params, options = {}) {
        return this.client.request("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/homeroom/attendance/term/${encodeURIComponent(String(params.termId))}`, {
            ...options,
            query: {
                "archived_students": params.archivedStudents,
                "student_ids": params.studentIds,
            },
            body: undefined,
        });
    }
    async getAttendanceForYearGroupByDate(params, options = {}) {
        return this.client.request("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/homeroom/attendance/date/${encodeURIComponent(String(params.date))}`, {
            ...options,
            query: {
                "student_ids": params.studentIds,
            },
            body: undefined,
        });
    }
    async getAttendanceAdjustmentsForYearGroupByTerm(params, options = {}) {
        return this.client.request("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/homeroom/attendance/term/${encodeURIComponent(String(params.termId))}/adjustments`, {
            ...options,
            query: undefined,
            body: undefined,
        });
    }
    async getStudentExcusals(params, options = {}) {
        return this.client.request("get", `/v2p3/students/${encodeURIComponent(String(params.studentId))}/excusals`, {
            ...options,
            query: {
                "applies_on": params.appliesOn,
                "page": params.page,
                "per_page": params.perPage,
            },
            body: undefined,
            responseType: "AttendanceGetStudentExcusalsResponse",
        });
    }
    async createStudentExcusal(params, options = {}) {
        return this.client.request("post", `/v2p3/students/${encodeURIComponent(String(params.studentId))}/excusals`, {
            ...options,
            query: undefined,
            body: params.body,
            responseType: "AttendanceExcusalsResponse",
            requestType: "CreateAttendanceExcusalRequest",
        });
    }
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse() {
        return {
            setAttendanceSettings: (params, options = {}) => this.client.requestRaw("put", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/academic-years/${encodeURIComponent(String(params.academicYearId))}/attendance/settings`, { ...options, query: undefined, body: params.body, requestType: "SetAttendanceSettingsRequest", }),
            listCategories: (academicYearId, options = {}) => this.client.requestRaw("get", `/v2p3/school/academic-years/${encodeURIComponent(String(academicYearId))}/attendance_categories`, { ...options, query: undefined, body: undefined, responseType: "AttendanceListCategoriesResponse", }),
            getClassTimetable: (params, options = {}) => this.client.requestRaw("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/timetable`, { ...options, query: {
                    "include_disabled": params.includeDisabled,
                }, body: undefined, }),
            getAttendanceForClass: (params, options = {}) => this.client.requestRaw("get", `/v2p3/classes/${encodeURIComponent(String(params.id))}/attendance/term/${encodeURIComponent(String(params.termId))}`, { ...options, query: {
                    "archived_students": params.archivedStudents,
                    "student_ids": params.studentIds,
                }, body: undefined, }),
            getClassAttendanceForDate: (params, options = {}) => this.client.requestRaw("get", `/v2p3/classes/${encodeURIComponent(String(params.id))}/attendance/date/${encodeURIComponent(String(params.date))}`, { ...options, query: {
                    "student_ids": params.studentIds,
                }, body: undefined, }),
            getDateExcusals: (params, options = {}) => this.client.requestRaw("get", `/v2p3/students/excusals/${encodeURIComponent(String(params.date))}`, { ...options, query: {
                    "page": params.page,
                    "per_page": params.perPage,
                    "student_ids": params.studentIds,
                }, body: undefined, responseType: "AttendanceGetDateExcusalsResponse", }),
            getAttendanceForYearGroupByTerm: (params, options = {}) => this.client.requestRaw("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/homeroom/attendance/term/${encodeURIComponent(String(params.termId))}`, { ...options, query: {
                    "archived_students": params.archivedStudents,
                    "student_ids": params.studentIds,
                }, body: undefined, }),
            getAttendanceForYearGroupByDate: (params, options = {}) => this.client.requestRaw("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/homeroom/attendance/date/${encodeURIComponent(String(params.date))}`, { ...options, query: {
                    "student_ids": params.studentIds,
                }, body: undefined, }),
            getAttendanceAdjustmentsForYearGroupByTerm: (params, options = {}) => this.client.requestRaw("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/homeroom/attendance/term/${encodeURIComponent(String(params.termId))}/adjustments`, { ...options, query: undefined, body: undefined, }),
            getStudentExcusals: (params, options = {}) => this.client.requestRaw("get", `/v2p3/students/${encodeURIComponent(String(params.studentId))}/excusals`, { ...options, query: {
                    "applies_on": params.appliesOn,
                    "page": params.page,
                    "per_page": params.perPage,
                }, body: undefined, responseType: "AttendanceGetStudentExcusalsResponse", }),
            createStudentExcusal: (params, options = {}) => this.client.requestRaw("post", `/v2p3/students/${encodeURIComponent(String(params.studentId))}/excusals`, { ...options, query: undefined, body: params.body, responseType: "AttendanceExcusalsResponse", requestType: "CreateAttendanceExcusalRequest", }),
        };
    }
}
