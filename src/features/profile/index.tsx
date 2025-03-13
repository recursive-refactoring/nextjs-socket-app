import { CommonDrawer } from "@/components/dialogs/common-drawer";
import { FlexLayout } from "@/components/layouts/flex-layout";
import { BodyText } from "@/components/text/body-text";
import { HeadingText } from "@/components/text/heading-text";
import { Box } from "@mui/material";
import { useProfile } from "./use-profile";
import { ProfilePicture } from "./profile-picture";
import { CommonEditIcon, CommonKeyIcon } from "@/assets/icons/common";
import LazyLoadingFlow from "@/components/lazy-loading-flow";
import dynamic from "next/dynamic";
import { PROFILE_PORTAL_ACTIONS } from "./profile.data";
import { CommonButton } from "@/components/buttons/common-button";
import CommonLogOutIcon from "@/assets/icons/common/log-out-icon";
import { fullName } from "@/utils/string-transformation";
import { fullNameInitial } from "@/utils/avatars";

const UpdateProfile = dynamic(() => import("./update-profile"), {
  ssr: false,
  loading: (options: any) => (
    <LazyLoadingFlow
      name="approvals"
      isLoading={options?.isLoading}
      error={options?.error}
    />
  ),
});

const ChangePassword = dynamic(() => import("./change-password"), {
  ssr: false,
  loading: (options: any) => (
    <LazyLoadingFlow
      name="approvals"
      isLoading={options?.isLoading}
      error={options?.error}
    />
  ),
});

const ProfileFeature = (props: any) => {
  const { isPortalOpen } = props;
  const {
    closePortal,
    openUpdateProfilePortal,
    openChangePasswordPortal,
    isProfilePortalOpen,
    setIsProfilePortalOpen,
    userDetails,
  } = useProfile(props);

  return (
    <>
      <CommonDrawer
        isPortalOpen={isPortalOpen?.isOpen}
        closePortal={closePortal}
        drawerTitle="Profile"
      >
        <Box display="flex" flexDirection="column" minHeight="100%">
          <Box>
            <ProfilePicture
              avatarSrc={userDetails?.avatar?.url}
              nameInitial={fullNameInitial(
                userDetails?.firstName,
                userDetails?.lastName,
              )}
            />
            <Box sx={{ my: 2 }}>
              <FlexLayout justifyContent="center">
                <HeadingText variant="h6" color="text.secondary">
                  {fullName(userDetails?.firstName, userDetails?.lastName)}
                </HeadingText>
                <Box
                  onClick={openUpdateProfilePortal}
                  sx={{ cursor: "pointer" }}
                >
                  <FlexLayout justifyContent="center">
                    <CommonEditIcon />
                  </FlexLayout>
                </Box>
              </FlexLayout>
            </Box>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ my: 2 }}>
              <BodyText fontWeight="fontWeightBold" color="text.secondary">
                Email:
              </BodyText>
              <BodyText variant="body1" marginTop={0.5} color="text.secondary">
                {userDetails?.email}
              </BodyText>
            </Box>
            {!!userDetails?.phoneNumber && (
              <Box sx={{ my: 2 }}>
                <BodyText
                  fontWeight="fontWeightBold"
                  color="text.secondary"
                  variant="body2"
                >
                  Phone:
                </BodyText>
                <BodyText
                  variant="body1"
                  marginTop={0.5}
                  color="text.secondary"
                >
                  {userDetails?.phoneNumber}
                </BodyText>
              </Box>
            )}
            <Box sx={{ textAlign: "center", my: 2 }}>
              <CommonButton
                onClick={openChangePasswordPortal}
                endIcon={<CommonKeyIcon />}
                variant="text"
                primary
                fullWidth
              >
                Change Password
              </CommonButton>
            </Box>
          </Box>
          <CommonButton startIcon={<CommonLogOutIcon />} fullWidth>
            {" "}
            Sign Out
          </CommonButton>
        </Box>
      </CommonDrawer>

      {isProfilePortalOpen?.isOpen &&
        isProfilePortalOpen?.action ===
          PROFILE_PORTAL_ACTIONS?.UPDATE_PROFILE && (
          <UpdateProfile
            isPortalOpen={isProfilePortalOpen}
            setIsPortalOpen={setIsProfilePortalOpen}
          />
        )}
      {isProfilePortalOpen?.isOpen &&
        isProfilePortalOpen?.action ===
          PROFILE_PORTAL_ACTIONS?.CHANGE_PASSWORD && (
          <ChangePassword
            isPortalOpen={isProfilePortalOpen}
            setIsPortalOpen={setIsProfilePortalOpen}
          />
        )}
    </>
  );
};

export default ProfileFeature;
