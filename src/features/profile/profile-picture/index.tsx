import { DynamicAvatar } from "@/components/avatars/dynamic-avatar";
import { IconButtonBadge } from "@/components/badges/icon-button-badge";
import LazyLoadingFlow from "@/components/lazy-loading-flow";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import { useProfilePicture } from "./use-profile-picture";
import { PROFILE_PORTAL_ACTIONS } from "../profile.data";
import { CommonCameraIcon } from "@/assets/icons/common";

const UpdateProfilePicture = dynamic(() => import("./update-profile-picture"), {
  ssr: false,
  loading: (options: any) => (
    <LazyLoadingFlow
      name="approvals"
      isLoading={options?.isLoading}
      error={options?.error}
    />
  ),
});

export const ProfilePicture = (props: any) => {
  const { avatarSrc, nameInitial } = props;
  const {
    isProfilePicturePortalOpen,
    setIsProfilePicturePortalOpen,
    openUpdateProfilePicturePortal,
  } = useProfilePicture();

  return (
    <>
      <Box sx={{ textAlign: "center", py: 2.5 }}>
        <IconButtonBadge
          onClick={openUpdateProfilePicturePortal}
          Icon={<CommonCameraIcon />}
        >
          <DynamicAvatar
            isCenter
            avatarSrc={avatarSrc}
            width={200}
            height={200}
            padding={1}
            backgroundColor="common.white"
            boxShadow={26}
            nameInitial={nameInitial}
          />
        </IconButtonBadge>
      </Box>
      {isProfilePicturePortalOpen?.isOpen &&
        isProfilePicturePortalOpen?.action ===
          PROFILE_PORTAL_ACTIONS?.UPDATE_PROFILE && (
          <UpdateProfilePicture
            isPortalOpen={isProfilePicturePortalOpen}
            setIsPortalOpen={setIsProfilePicturePortalOpen}
          />
        )}
    </>
  );
};
