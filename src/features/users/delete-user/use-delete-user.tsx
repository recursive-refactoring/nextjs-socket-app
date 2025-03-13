import { PAGINATION } from "@/configs/pagination";
import { errorSnackbar, successSnackbar } from "@/libs/snackbar.lib";
import { useUpdateUserProfileMutation } from "@/services/admin/profile";

export const useDeleteUser = (props: any) => {
  const {
    setIsPortalOpen,
    isPortalOpen,
    page,
    setPage,
    totalRecords,
    handleGetUser,
  } = props;

  const [deleteUserTrigger, { isLoading }] = useUpdateUserProfileMutation();

  const closeModal = () => {
    setIsPortalOpen?.({ isOpen: false, action: "" });
  };

  const refetchApi = async () => {
    const newPage =
      totalRecords === PAGINATION?.INITIAL_PAGE
        ? PAGINATION?.INITIAL_PAGE
        : page;
    setPage?.(newPage);
    await handleGetUser?.(newPage);
  };

  const deleteUserSubmit = async () => {
    const apiDataParameter = {
      queryParams: {
        id: isPortalOpen?.data?._id,
      },
    };

    try {
      await deleteUserTrigger(apiDataParameter);
      successSnackbar("User(s) deleted successfully");
      closeModal?.();
      await refetchApi();
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
  };

  return {
    deleteUserSubmit,
    closeModal,
    isLoading,
  };
};
