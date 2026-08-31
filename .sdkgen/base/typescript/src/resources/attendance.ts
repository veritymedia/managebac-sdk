import type { ApiClient, RequestOptions } from "../core.js";
import type { SetAttendanceSettingsRequest } from "../types/set_attendance_settings_request.js";
import type { AttendanceListCategoriesResponse } from "../types/attendance_list_categories_response.js";
import type { AttendanceGetDateExcusalsResponse } from "../types/attendance_get_date_excusals_response.js";
import type { AttendanceGetStudentExcusalsResponse } from "../types/attendance_get_student_excusals_response.js";
import type { CreateAttendanceExcusalRequest } from "../types/create_attendance_excusal_request.js";
import type { AttendanceExcusalsResponse } from "../types/attendance_excusals_response.js";


export interface AttendanceSetAttendanceSettingsParams {
  classId: number;
  academicYearId: number;
  body: SetAttendanceSettingsRequest;
}

export interface AttendanceGetClassTimetableParams {
  classId: number;
  includeDisabled?: boolean;
}

export interface AttendanceGetAttendanceForClassParams {
  id: number;
  termId: number;
  archivedStudents?: boolean;
  studentIds?: number[];
}

export interface AttendanceGetClassAttendanceForDateParams {
  id: number;
  date: string;
  studentIds?: number[];
}

export interface AttendanceGetDateExcusalsParams {
  date: string;
  page?: string;
  perPage?: string;
  studentIds?: number[];
}

export interface AttendanceGetAttendanceForYearGroupByTermParams {
  yearGroupId: number;
  termId: number;
  archivedStudents?: boolean;
  studentIds?: number[];
}

export interface AttendanceGetAttendanceForYearGroupByDateParams {
  yearGroupId: number;
  date: string;
  studentIds?: number[];
}

export interface AttendanceGetAttendanceAdjustmentsForYearGroupByTermParams {
  yearGroupId: number;
  termId: number;
}

export interface AttendanceGetStudentExcusalsParams {
  studentId: number;
  appliesOn?: string;
  page?: string;
  perPage?: string;
}

export interface AttendanceCreateStudentExcusalParams {
  studentId: number;
  body?: CreateAttendanceExcusalRequest;
}

export class AttendanceResource {

  constructor(private readonly client: ApiClient) {

  }

  async setAttendanceSettings(params: AttendanceSetAttendanceSettingsParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("put", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/academic-years/${encodeURIComponent(String(params.academicYearId))}/attendance/settings`, {
      ...options,
      query: undefined,
      body: params.body,
      requestType: "SetAttendanceSettingsRequest",
    });
  }

  async listCategories(academicYearId: string, options: RequestOptions = {}): Promise<AttendanceListCategoriesResponse> {
    return this.client.request<AttendanceListCategoriesResponse>("get", `/v2p3/school/academic-years/${encodeURIComponent(String(academicYearId))}/attendance_categories`, {
      ...options,
      query: undefined,
      body: undefined,
      responseType: "AttendanceListCategoriesResponse",
    });
  }

  async getClassTimetable(params: AttendanceGetClassTimetableParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/timetable`, {
      ...options,
      query: {
        "include_disabled": params.includeDisabled,
      },
      body: undefined,
    });
  }

  async getAttendanceForClass(params: AttendanceGetAttendanceForClassParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", `/v2p3/classes/${encodeURIComponent(String(params.id))}/attendance/term/${encodeURIComponent(String(params.termId))}`, {
      ...options,
      query: {
        "archived_students": params.archivedStudents,
        "student_ids": params.studentIds,
      },
      body: undefined,
    });
  }

  async getClassAttendanceForDate(params: AttendanceGetClassAttendanceForDateParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", `/v2p3/classes/${encodeURIComponent(String(params.id))}/attendance/date/${encodeURIComponent(String(params.date))}`, {
      ...options,
      query: {
        "student_ids": params.studentIds,
      },
      body: undefined,
    });
  }

  async getDateExcusals(params: AttendanceGetDateExcusalsParams, options: RequestOptions = {}): Promise<AttendanceGetDateExcusalsResponse> {
    return this.client.request<AttendanceGetDateExcusalsResponse>("get", `/v2p3/students/excusals/${encodeURIComponent(String(params.date))}`, {
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

  async getAttendanceForYearGroupByTerm(params: AttendanceGetAttendanceForYearGroupByTermParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/homeroom/attendance/term/${encodeURIComponent(String(params.termId))}`, {
      ...options,
      query: {
        "archived_students": params.archivedStudents,
        "student_ids": params.studentIds,
      },
      body: undefined,
    });
  }

  async getAttendanceForYearGroupByDate(params: AttendanceGetAttendanceForYearGroupByDateParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/homeroom/attendance/date/${encodeURIComponent(String(params.date))}`, {
      ...options,
      query: {
        "student_ids": params.studentIds,
      },
      body: undefined,
    });
  }

  async getAttendanceAdjustmentsForYearGroupByTerm(params: AttendanceGetAttendanceAdjustmentsForYearGroupByTermParams, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/homeroom/attendance/term/${encodeURIComponent(String(params.termId))}/adjustments`, {
      ...options,
      query: undefined,
      body: undefined,
    });
  }

  async getStudentExcusals(params: AttendanceGetStudentExcusalsParams, options: RequestOptions = {}): Promise<AttendanceGetStudentExcusalsResponse> {
    return this.client.request<AttendanceGetStudentExcusalsResponse>("get", `/v2p3/students/${encodeURIComponent(String(params.studentId))}/excusals`, {
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

  async createStudentExcusal(params: AttendanceCreateStudentExcusalParams, options: RequestOptions = {}): Promise<AttendanceExcusalsResponse> {
    return this.client.request<AttendanceExcusalsResponse>("post", `/v2p3/students/${encodeURIComponent(String(params.studentId))}/excusals`, {
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
      setAttendanceSettings: (params: AttendanceSetAttendanceSettingsParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("put", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/academic-years/${encodeURIComponent(String(params.academicYearId))}/attendance/settings`, { ...options, query: undefined, body: params.body, requestType: "SetAttendanceSettingsRequest", }),
      listCategories: (academicYearId: string, options: RequestOptions = {}): Promise<{ data: AttendanceListCategoriesResponse; response: globalThis.Response }> =>
        this.client.requestRaw<AttendanceListCategoriesResponse>("get", `/v2p3/school/academic-years/${encodeURIComponent(String(academicYearId))}/attendance_categories`, { ...options, query: undefined, body: undefined, responseType: "AttendanceListCategoriesResponse", }),
      getClassTimetable: (params: AttendanceGetClassTimetableParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", `/v2p3/classes/${encodeURIComponent(String(params.classId))}/timetable`, { ...options, query: {
      "include_disabled": params.includeDisabled,
    }, body: undefined, }),
      getAttendanceForClass: (params: AttendanceGetAttendanceForClassParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", `/v2p3/classes/${encodeURIComponent(String(params.id))}/attendance/term/${encodeURIComponent(String(params.termId))}`, { ...options, query: {
      "archived_students": params.archivedStudents,
      "student_ids": params.studentIds,
    }, body: undefined, }),
      getClassAttendanceForDate: (params: AttendanceGetClassAttendanceForDateParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", `/v2p3/classes/${encodeURIComponent(String(params.id))}/attendance/date/${encodeURIComponent(String(params.date))}`, { ...options, query: {
      "student_ids": params.studentIds,
    }, body: undefined, }),
      getDateExcusals: (params: AttendanceGetDateExcusalsParams, options: RequestOptions = {}): Promise<{ data: AttendanceGetDateExcusalsResponse; response: globalThis.Response }> =>
        this.client.requestRaw<AttendanceGetDateExcusalsResponse>("get", `/v2p3/students/excusals/${encodeURIComponent(String(params.date))}`, { ...options, query: {
      "page": params.page,
      "per_page": params.perPage,
      "student_ids": params.studentIds,
    }, body: undefined, responseType: "AttendanceGetDateExcusalsResponse", }),
      getAttendanceForYearGroupByTerm: (params: AttendanceGetAttendanceForYearGroupByTermParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/homeroom/attendance/term/${encodeURIComponent(String(params.termId))}`, { ...options, query: {
      "archived_students": params.archivedStudents,
      "student_ids": params.studentIds,
    }, body: undefined, }),
      getAttendanceForYearGroupByDate: (params: AttendanceGetAttendanceForYearGroupByDateParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/homeroom/attendance/date/${encodeURIComponent(String(params.date))}`, { ...options, query: {
      "student_ids": params.studentIds,
    }, body: undefined, }),
      getAttendanceAdjustmentsForYearGroupByTerm: (params: AttendanceGetAttendanceAdjustmentsForYearGroupByTermParams, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", `/v2p3/year-groups/${encodeURIComponent(String(params.yearGroupId))}/homeroom/attendance/term/${encodeURIComponent(String(params.termId))}/adjustments`, { ...options, query: undefined, body: undefined, }),
      getStudentExcusals: (params: AttendanceGetStudentExcusalsParams, options: RequestOptions = {}): Promise<{ data: AttendanceGetStudentExcusalsResponse; response: globalThis.Response }> =>
        this.client.requestRaw<AttendanceGetStudentExcusalsResponse>("get", `/v2p3/students/${encodeURIComponent(String(params.studentId))}/excusals`, { ...options, query: {
      "applies_on": params.appliesOn,
      "page": params.page,
      "per_page": params.perPage,
    }, body: undefined, responseType: "AttendanceGetStudentExcusalsResponse", }),
      createStudentExcusal: (params: AttendanceCreateStudentExcusalParams, options: RequestOptions = {}): Promise<{ data: AttendanceExcusalsResponse; response: globalThis.Response }> =>
        this.client.requestRaw<AttendanceExcusalsResponse>("post", `/v2p3/students/${encodeURIComponent(String(params.studentId))}/excusals`, { ...options, query: undefined, body: params.body, responseType: "AttendanceExcusalsResponse", requestType: "CreateAttendanceExcusalRequest", }),
    };
  }

}
