import type { AcademicsGetAllTermReportsResponseTermReportsItem } from "./academics_get_all_term_reports_response_term_reports_item.js";
import type { AcademicsGetAllTermReportsResponseMeta } from "./academics_get_all_term_reports_response_meta.js";

export interface AcademicsGetAllTermReportsResponse {
  termReports?: AcademicsGetAllTermReportsResponseTermReportsItem[];
  meta?: AcademicsGetAllTermReportsResponseMeta;
}
