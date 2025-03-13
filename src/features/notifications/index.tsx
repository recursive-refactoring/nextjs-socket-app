import { CommonDrawer } from "@/components/dialogs/common-drawer";
import { useNotificationsFeature } from "./use-notifications";
import { NotificationsList } from "./notifications-list";

const NotificationsFeature = (props: any) => {
  const { isPortalOpen } = props;
  const { closePortal } = useNotificationsFeature(props);

  return (
    <>
      <CommonDrawer
        isPortalOpen={isPortalOpen?.isOpen}
        closePortal={closePortal}
        drawerTitle="Notifications"
      >
        <NotificationsList />
      </CommonDrawer>
    </>
  );
};

export default NotificationsFeature;
