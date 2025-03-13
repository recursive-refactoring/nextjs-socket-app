import { ReactNode } from "react";

export interface CommonTablePropsI {
  columns: any[];
  data: any[];
  ariaLabelTable?: string;
  minWidth?: number;
  stickyHeader?: boolean;
  totalPages?: number;
  pageLimit?: number;
  currentPage?: number;
  totalRecords?: number;
  rowsPerPageOptions?: number[];
  setPage?: any;
  setPageLimit?: any;
  hasPagination?: boolean;
  showLoader: boolean;
  refreshApi?: any;
  hasError: boolean;
  noDataMessage: string;
}

export interface TableRequestFlowPropsI {
  showSkeleton: boolean;
  hasError: boolean;
  refreshApi: any;
  noDataMessage: string;
  errorMessage?: string;
  errorHeight?: number | string;
  noDataHeight?: number | string;
  hasNoData?: boolean;
  children: ReactNode;
}
