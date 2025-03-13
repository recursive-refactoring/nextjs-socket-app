import { LogoAvatar } from "@/components/avatars/logo-avatar";
import { UserInfo } from "@/components/data-displays/user-info";
import { SearchField } from "@/components/input-fields/search-field";
import { FlexLayout } from "@/components/layouts/flex-layout";
import LazyLoadingFlow from "@/components/lazy-loading-flow";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import { useHeader } from "./use-header";
import { MAIN_LAYOUT_PORTAL_ACTIONS } from "../main-layout.data";
import { CommonNotificationIcon } from "@/assets/icons/common";
import { SEARCH_FIELD_CATEGORY } from "@/constants/ui";
import { CommonIcon } from "@/components/icons/common-icon/common-icon";

const ProfileFeature = dynamic(() => import("@/features/profile"), {
  ssr: false,
  loading: (options: any) => (
    <LazyLoadingFlow
      name="profile"
      isLoading={options?.isLoading}
      error={options?.error}
    />
  ),
});

const NotificationsFeature = dynamic(() => import("@/features/notifications"), {
  ssr: false,
  loading: (options: any) => (
    <LazyLoadingFlow
      name="notifications"
      isLoading={options?.isLoading}
      error={options?.error}
    />
  ),
});

const Header = () => {
  const {
    isPortalOpen,
    setIsPortalOpen,
    openProfilePortal,
    openNotificationPortal,
    userDetails,
  } = useHeader();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "primary.main",
          alignItems: "center",
          paddingX: 2,
          paddingY: 1,
          flexWrap: "wrap",
          gap: 2,
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box>
          <LogoAvatar />
        </Box>
        <Box>
          <SearchField searchVariant={SEARCH_FIELD_CATEGORY?.PRIMARY} />
        </Box>
        <FlexLayout gap={2}>
          <CommonIcon
            Icon={CommonNotificationIcon}
            hasAction
            onClick={openNotificationPortal}
          />
          <Box sx={{ cursor: "pointer" }} onClick={openProfilePortal}>
            <UserInfo
              firstName={userDetails?.firstName}
              lastName={userDetails?.lastName}
              avatarSrc={userDetails?.avatar?.url}
            />
          </Box>
        </FlexLayout>
      </Box>
      {isPortalOpen &&
        isPortalOpen?.action === MAIN_LAYOUT_PORTAL_ACTIONS?.PROFILE && (
          <ProfileFeature
            isPortalOpen={isPortalOpen}
            setIsPortalOpen={setIsPortalOpen}
          />
        )}
      {isPortalOpen &&
        isPortalOpen?.action === MAIN_LAYOUT_PORTAL_ACTIONS?.NOTIFICATION && (
          <NotificationsFeature
            isPortalOpen={isPortalOpen}
            setIsPortalOpen={setIsPortalOpen}
          />
        )}
    </>
  );
};

export default Header;
