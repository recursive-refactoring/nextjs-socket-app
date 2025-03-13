import { notificationsList } from "./notifications-list.data";

export const useNotificationsList = () => {
  const notificationsData = notificationsList;
  return {
    notificationsData,
  };
};
