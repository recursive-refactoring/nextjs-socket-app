import { useMemo, useState } from "react";
import { PROFILE_PORTAL_ACTIONS } from "./profile.data";
import { useAppSelector } from "@/store";
import { authUserInfoSelector } from "@/store/auth/selectors";
import { LOCAL_STORAGE_KEYS } from "@/constants/browser-storage";
import { getDataFromLocalStorage } from "@/utils/browser-storage";

export const useProfile = (props: any) => {
  const { setIsPortalOpen } = props;

  const userRedux = useAppSelector(authUserInfoSelector);

  const userDetails = useMemo(() => {
    const userInfo = getDataFromLocalStorage(
      LOCAL_STORAGE_KEYS?.AUTH_USER_INFO,
    );
    return userInfo?.user;
  }, [userRedux]);

  const closePortal = () => setIsPortalOpen(false);

  const [isProfilePortalOpen, setIsProfilePortalOpen] = useState({
    isOpen: true,
    action: "",
  });

  const setPortalAction = (action: string) => {
    setIsProfilePortalOpen({
      isOpen: true,
      action,
    });
  };

  const openUpdateProfilePortal = () =>
    setPortalAction(PROFILE_PORTAL_ACTIONS?.UPDATE_PROFILE);

  const openChangePasswordPortal = () =>
    setPortalAction(PROFILE_PORTAL_ACTIONS?.CHANGE_PASSWORD);

  return {
    closePortal,
    openUpdateProfilePortal,
    openChangePasswordPortal,
    isProfilePortalOpen,
    setIsProfilePortalOpen,
    userDetails,
  };
};
