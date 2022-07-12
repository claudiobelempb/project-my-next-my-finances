export type Spring<T> = {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  last: boolean;
  first: boolean;
  numberOffElements?: number;
  empty: boolean;
};
