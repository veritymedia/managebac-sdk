import type { AcademicsGetTermReportResponseTermReportType } from "./academics_get_term_report_response_term_report_type.js";
export interface AcademicsGetTermReportResponseTermReport {
    id?: number;
    title?: string;
    type?: AcademicsGetTermReportResponseTermReportType;
    program?: string;
    academicTermId?: number;
    academicTermName?: string;
    nextGen?: boolean;
    pdfUrl?: string;
    individualReportsUrl?: string;
    termGradesUrl?: string;
    createdAt?: string;
    updatedAt?: string;
    releasedOn?: string;
}
