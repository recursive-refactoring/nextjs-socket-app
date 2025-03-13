import { AddNewItemButton } from "@/components/buttons/add-new-item-button";
import { SearchField } from "@/components/input-fields/search-field";
import { FlexLayout } from "@/components/layouts/flex-layout";
import { Box } from "@mui/material";
import { useHeader } from "./useHeader";
import dynamic from "next/dynamic";
import LazyLoadingFlow from "@/components/lazy-loading-flow";
import { USER_PORTAL_ACTIONS } from "../users.data";

const AddUser = dynamic(() => import("@/features/users/upsert-user"), {
  ssr: false,
  loading: (options: any) => (
    <LazyLoadingFlow
      name="approvals"
      isLoading={options?.isLoading}
      error={options?.error}
    />
  ),
});

export const Header = (props: any) => {
  const { search, isPortalOpen, setIsPortalOpen } = props;
  const { handleSearch, setAddPortalOpen } = useHeader(props);

  return (
    <>
      <FlexLayout justifyContent="flex-end">
        <Box>
          <SearchField setSearch={handleSearch} search={search} />
        </Box>
        <AddNewItemButton
          onClick={setAddPortalOpen}
          hasStartIcon={false}
          hasEndIcon
        >
          Add New User
        </AddNewItemButton>
      </FlexLayout>
      {isPortalOpen?.isOpen &&
        isPortalOpen?.action === USER_PORTAL_ACTIONS?.ADD_USER && (
          <AddUser
            isPortalOpen={isPortalOpen}
            setIsPortalOpen={setIsPortalOpen}
          />
        )}
    </>
  );
};
