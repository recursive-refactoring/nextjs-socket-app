import CommonTable from "@/components/table/common-table";
import { useUsersListFeature } from "./use-users-list";
import { USER_PORTAL_ACTIONS } from "../users.data";
import LazyLoadingFlow from "@/components/lazy-loading-flow";
import dynamic from "next/dynamic";

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

const DeleteUser = dynamic(() => import("@/features/users/delete-user"), {
  ssr: false,
  loading: (options: any) => (
    <LazyLoadingFlow
      name="approvals"
      isLoading={options?.isLoading}
      error={options?.error}
    />
  ),
});

const UsersListFeature = (props: any) => {
  const {
    showPagination = true,
    page,
    setPage,
    isPortalOpen,
    setIsPortalOpen,
  } = props;
  const {
    usersListColumns,
    userListData,
    showLoader,
    isError,
    refetch,
    setPageLimit,
    metaData,
    pageLimit,
  } = useUsersListFeature(props);

  return (
    <>
      <CommonTable
        columns={usersListColumns}
        data={userListData}
        setPage={setPage}
        setPageLimit={setPageLimit}
        currentPage={page}
        pageLimit={pageLimit}
        totalPages={metaData?.pages}
        totalRecords={metaData?.total}
        showLoader={showLoader}
        hasError={isError}
        refreshApi={refetch}
        noDataMessage="No azure services log found"
        hasPagination={showPagination}
      />
      {isPortalOpen?.isOpen &&
        isPortalOpen?.action === USER_PORTAL_ACTIONS?.EDIT_USER && (
          <AddUser
            isPortalOpen={isPortalOpen}
            setIsPortalOpen={setIsPortalOpen}
          />
        )}
      {isPortalOpen?.isOpen &&
        isPortalOpen?.action === USER_PORTAL_ACTIONS?.DELETE_USER && (
          <DeleteUser
            isPortalOpen={isPortalOpen}
            setIsPortalOpen={setIsPortalOpen}
          />
        )}
    </>
  );
};

export default UsersListFeature;
