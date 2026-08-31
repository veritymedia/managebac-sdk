import type { AcademicsGetAllTermReportsResponseTermReportsItemType } from "./academics_get_all_term_reports_response_term_reports_item_type.js";

export interface AcademicsGetAllTermReportsResponseTermReportsItem {
  id?: number;
  title?: string;
  type?: AcademicsGetAllTermReportsResponseTermReportsItemType;
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
