export interface Page<T> {
  currentPage: number;
  perPage: number;
  totalPages: number;
  total: number;
  items: T[];
}
