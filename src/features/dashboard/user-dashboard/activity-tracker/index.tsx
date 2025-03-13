import { ListGrid } from "@/components/grids/list-grid";
import { BodyText } from "@/components/text/body-text";
import ActivityInfoCard from "@/components/cards/activity-info-card";
import { useActivityTracker } from "./use-activity-tracker";
import { ApiRequestFlow } from "@/components/api-request-states/api-request-flow";

export const ActivityTracker = () => {
  const { isError, refetch, showLoader, activityTrackerData } =
    useActivityTracker();

  return (
    <>
      <BodyText variant="body1" marginBottom={1}>
        User Info
      </BodyText>
      <ApiRequestFlow
        showSkeleton={showLoader}
        hasError={isError}
        refreshApi={refetch}
        errorHeight="18vh"
      >
        <ListGrid
          list={activityTrackerData}
          render={(item: any) => (
            <ActivityInfoCard
              key={item?._id}
              name={item?.name}
              infoColor={item?.infoColor}
              info={item?.info}
              extraInfo={item?.extraInfo}
            />
          )}
        />
      </ApiRequestFlow>
    </>
  );
};
