import { useNotificationsList } from "./use-notifications-list";
import { ActivityCard } from "@/components/cards/activity-card";
import { Box } from "@mui/material";

export const NotificationsList = () => {
  const { notificationsData } = useNotificationsList();
  return (
    <Box>
      {notificationsData?.map((singleItem: any) => (
        <Box key={singleItem?._id}>
          <ActivityCard
            activityType={singleItem?.type}
            activityInfo={singleItem?.info}
          />
        </Box>
      ))}
    </Box>
  );
};
