import type { AcademicYearCalendarResponseCalendarDatesItem } from "./academic_year_calendar_response_calendar_dates_item.js";
export interface AcademicYearCalendarResponseCalendar {
    startDate?: string;
    endDate?: string;
    calendarType?: string;
    rotationCycle?: number;
    ignoreHolidays?: boolean;
    daysOff?: number[];
    dates?: AcademicYearCalendarResponseCalendarDatesItem[];
}
