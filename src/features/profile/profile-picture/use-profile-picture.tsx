import { useState } from "react";
import { PROFILE_PORTAL_ACTIONS } from "../profile.data";

export const useProfilePicture = () => {
  const [isProfilePicturePortalOpen, setIsProfilePicturePortalOpen] = useState({
    isOpen: true,
    action: "",
  });

  const setPortalAction = (action: string) => {
    setIsProfilePicturePortalOpen({
      isOpen: true,
      action,
    });
  };

  const openUpdateProfilePicturePortal = () =>
    setPortalAction(PROFILE_PORTAL_ACTIONS?.UPDATE_PROFILE);

  return {
    isProfilePicturePortalOpen,
    setIsProfilePicturePortalOpen,
    openUpdateProfilePicturePortal,
  };
};
