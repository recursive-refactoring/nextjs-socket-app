import { useGetUserDashboardActivityQuery } from "@/services/admin/dashboard";
import { activityTrackerDataDynamic } from "./activity-tracker.data";

export const useActivityTracker = () => {
  const { data, isLoading, isFetching, isError, refetch } =
    useGetUserDashboardActivityQuery(null, {
      refetchOnMountOrArgChange: true,
    });

  const activityTrackerData = activityTrackerDataDynamic(data?.data);
  const showLoader = isLoading || isFetching;

  return {
    data,
    isLoading,
    isFetching,
    isError,
    refetch,
    showLoader,
    activityTrackerData,
  };
};
