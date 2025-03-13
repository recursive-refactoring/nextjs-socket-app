import { AlertDialog } from "@/components/dialogs/alert-dialog";
import { useDeleteUser } from "./use-delete-user";

const DeleteUser = (props: any) => {
  const { isPortalOpen } = props;
  const { deleteUserSubmit, closeModal, isLoading } = useDeleteUser(props);

  return (
    <AlertDialog
      message="Are you sure want to delete this user?"
      isPortalOpen={isPortalOpen?.isOpen as boolean}
      closePortal={closeModal}
      handleSubmitBtn={deleteUserSubmit}
      loading={isLoading}
      disableCancelBtn={isLoading}
    />
  );
};

export default DeleteUser;
