/**
 * Pagination metadata included in all list (index) responses.
 */
export interface Meta {
  /**
   * The page number of the current result set, starting from 1.
   */
  currentPage?: number;
  /**
   * The total number of pages available for this query.
   */
  totalPages?: number;
  /**
   * The total number of records matching the query across all pages.
   */
  totalCount?: number;
  /**
   * The number of records returned per page. Defaults to 100; can be overridden with the per_page query parameter (max 200).
   */
  perPage?: number;
}
