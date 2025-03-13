import ApiErrorState from "@/components/api-request-states/api-error-state";
import ApiNoDataState from "@/components/api-request-states/api-no-data-state";
import BarSkeleton from "@/components/skeletons/bar-skeleton";
import { TableBody, TableCell, TableRow } from "@mui/material";
import { TableRequestFlowPropsI } from "../table.interface";

export const TableRequestFlow = (props: TableRequestFlowPropsI) => {
  const {
    showSkeleton = false,
    hasError = false,
    refreshApi,
    noDataMessage,
    errorMessage,
    errorHeight,
    noDataHeight = errorHeight,
    hasNoData = false,
    children,
  } = props;

  if (showSkeleton)
    return (
      <TableBody>
        <TableRow>
          <TableCell
            colSpan={100}
            sx={{
              textAlign: "center",
            }}
          >
            <BarSkeleton length={4} />
          </TableCell>
        </TableRow>
      </TableBody>
    );

  if (hasError)
    return (
      <TableBody>
        <TableRow>
          <TableCell
            colSpan={100}
            sx={{
              textAlign: "center",
            }}
          >
            <ApiErrorState
              message={errorMessage}
              canRefresh
              refresh={refreshApi}
              height={errorHeight}
            />
          </TableCell>
        </TableRow>
      </TableBody>
    );

  if (hasNoData)
    return (
      <TableBody>
        <TableRow>
          <TableCell
            colSpan={100}
            sx={{
              textAlign: "center",
            }}
          >
            <ApiNoDataState message={noDataMessage} height={noDataHeight} />
          </TableCell>
        </TableRow>
      </TableBody>
    );

  return <>{children}</>;
};
