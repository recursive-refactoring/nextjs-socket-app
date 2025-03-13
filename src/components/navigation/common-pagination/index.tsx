import { FlexLayout } from "@/components/layouts/flex-layout";
import { PAGINATION } from "@/configs/pagination";
import { Pagination, TablePagination } from "@mui/material";
import { useCallback } from "react";
import { CommonPaginationPropsI } from "../navigation.interface";

const CommonPagination = (props: CommonPaginationPropsI) => {
  const {
    count = PAGINATION?.TOTAL_PAGES,
    rowsPerPageOptions = PAGINATION?.ROWS_PER_PAGE_OPTIONS,
    pageLimit = PAGINATION?.PAGE_LIMIT,
    currentPage = PAGINATION?.INITIAL_PAGE,
    totalRecords = PAGINATION?.TOTAL_RECORDS,
    setPage,
    setPageLimit,
    disabled = false,
  } = props;

  const handleChangeRowsPerPage = useCallback(
    (event: any) => {
      const newPageLimit = parseInt(event.target.value, 10);
      setPageLimit?.(newPageLimit);
      setPage?.(PAGINATION?.INITIAL_PAGE);
    },
    [setPage, setPageLimit],
  );

  const handleChangePage = useCallback(
    (_: any, page: number) => {
      setPage?.(page);
    },
    [setPage],
  );

  return (
    <FlexLayout justifyContent="space-between">
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={totalRecords}
        rowsPerPage={pageLimit}
        page={currentPage <= 0 ? 0 : currentPage - 1}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        showFirstButton={false}
        disabled={disabled}
        sx={{
          "& .MuiTablePagination-actions": {
            display: "none",
          },
        }}
        slotProps={{
          select: {
            inputProps: {
              "aria-label": "rows per page",
            },
          },
        }}
      />
      <Pagination
        shape="rounded"
        count={count}
        page={currentPage}
        boundaryCount={1}
        siblingCount={1}
        onChange={handleChangePage}
        color="primary"
        disabled={disabled}
      />
    </FlexLayout>
  );
};

export default CommonPagination;
