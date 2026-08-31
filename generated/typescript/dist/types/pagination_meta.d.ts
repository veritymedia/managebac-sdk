export interface PaginationMeta {
    currentPage?: number;
    nextPage?: number | null;
    prevPage?: number | null;
    totalPages?: number;
    totalCount?: number;
    perPage?: number;
}
