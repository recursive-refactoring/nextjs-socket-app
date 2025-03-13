import { useMemo, useState } from "react";
import { MAIN_LAYOUT_PORTAL_ACTIONS } from "../main-layout.data";
import { useAppSelector } from "@/store";
import { authUserInfoSelector } from "@/store/auth/selectors";
import { getDataFromLocalStorage } from "@/utils/browser-storage";
import { LOCAL_STORAGE_KEYS } from "@/constants/browser-storage";

export const useHeader = () => {
  const userRedux = useAppSelector(authUserInfoSelector);
  const userDetails = useMemo(() => {
    const userInfo = getDataFromLocalStorage(
      LOCAL_STORAGE_KEYS?.AUTH_USER_INFO,
    );
    return userInfo?.user;
  }, [userRedux]);

  const [isPortalOpen, setIsPortalOpen] = useState({
    isOpen: false,
    action: "",
  });

  const setPortalAction = (action: string) => {
    setIsPortalOpen({
      isOpen: true,
      action,
    });
  };

  const openProfilePortal = () =>
    setPortalAction(MAIN_LAYOUT_PORTAL_ACTIONS?.PROFILE);

  const openNotificationPortal = () =>
    setPortalAction(MAIN_LAYOUT_PORTAL_ACTIONS?.NOTIFICATION);

  return {
    isPortalOpen,
    setIsPortalOpen,
    openProfilePortal,
    openNotificationPortal,
    userDetails,
  };
};
