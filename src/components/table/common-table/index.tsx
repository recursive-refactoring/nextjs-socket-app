import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useCommonTable } from "./use-common-table";
import { CommonTablePropsI } from "../table.interface";
import { flexRender } from "@tanstack/react-table";
import { pxToRem } from "@/utils/styles";
import CommonPagination from "@/components/navigation/common-pagination";
import { PAGINATION } from "@/configs/pagination";
import { CommonArrowDownIcon, CommonUpDownIcon } from "@/assets/icons/common";
import { API_MESSAGES } from "@/constants/messages";
import { TableRequestFlow } from "../table-request-flow";

const CommonTable = (props: CommonTablePropsI) => {
  const {
    ariaLabelTable = "main-table",
    minWidth = 1000,
    stickyHeader = false,
    totalPages = PAGINATION?.TOTAL_PAGES,
    rowsPerPageOptions = PAGINATION?.ROWS_PER_PAGE_OPTIONS,
    pageLimit = PAGINATION?.PAGE_LIMIT,
    currentPage = PAGINATION?.INITIAL_PAGE,
    totalRecords = PAGINATION?.TOTAL_RECORDS,
    setPage,
    setPageLimit,
    hasPagination = true,
    showLoader = false,
    refreshApi = undefined,
    hasError = false,
    noDataMessage = API_MESSAGES?.NO_DATA_FOUND,
  } = props;

  const { table } = useCommonTable(props);

  return (
    <Box>
      <TableContainer>
        <Table
          stickyHeader={stickyHeader}
          sx={{ minWidth: pxToRem(minWidth) }}
          aria-label={ariaLabelTable}
        >
          <TableHead>
            {table?.getHeaderGroups()?.map((headerGroup: any) => (
              <TableRow
                sx={{
                  backgroundColor: "primary.light",
                  textTransform: "capitalize",
                  borderRadius: 1,
                }}
                key={headerGroup?.id}
              >
                {headerGroup?.headers?.map((header: any) => (
                  <TableCell
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: "fontWeightBold",
                      borderBottom: "primary.light",
                    }}
                    key={header?.id}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {header?.isPlaceholder
                        ? null
                        : flexRender(
                            header?.column?.columnDef?.header,
                            header?.getContext(),
                          )}
                      {header?.column?.columnDef?.isSortable && (
                        <Box
                          display={"flex"}
                          flexDirection={"column"}
                          marginLeft={"4px"}
                          gap={"2px"}
                          {...{
                            onClick: header?.column?.getToggleSortingHandler(),
                          }}
                        >
                          <CommonUpDownIcon
                            sx={{
                              fontSize: "medium",
                              color:
                                (header?.column?.getIsSorted() as string) ===
                                "desc"
                                  ? "common.black"
                                  : "",
                            }}
                          />
                          <CommonArrowDownIcon
                            sx={{
                              fontSize: "medium",
                              color:
                                (header?.column?.getIsSorted() as string) ===
                                "asc"
                                  ? "common.black"
                                  : "",
                            }}
                          />
                        </Box>
                      )}
                    </Box>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>

          <TableRequestFlow
            showSkeleton={showLoader}
            hasError={hasError}
            refreshApi={refreshApi}
            hasNoData={!table?.getRowModel()?.rows?.length}
            noDataMessage={noDataMessage}
            errorHeight={"40vh"}
          >
            <TableBody>
              {table?.getRowModel()?.rows?.map((row: any) => (
                <TableRow key={row?.id}>
                  {row?.getVisibleCells()?.map((cell: any) => (
                    <TableCell
                      sx={{
                        textTransform: "capitalize",
                      }}
                      key={cell?.id}
                    >
                      {flexRender(
                        cell?.column?.columnDef?.cell,
                        cell?.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </TableRequestFlow>
        </Table>
      </TableContainer>
      {hasPagination && (
        <Box>
          <CommonPagination
            count={totalPages}
            pageLimit={pageLimit}
            currentPage={currentPage}
            totalRecords={totalRecords}
            rowsPerPageOptions={rowsPerPageOptions}
            setPage={setPage}
            setPageLimit={setPageLimit}
            disabled={showLoader}
          />
        </Box>
      )}
    </Box>
  );
};

export default CommonTable;
