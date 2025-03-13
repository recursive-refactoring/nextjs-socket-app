import CommonDialog from "@/components/dialogs/common-dialog";
import { FormGrid } from "@/components/grids/form-grid";
import { CustomFormProvider } from "@/providers/custom-form-provider";
import { useUpdateProfilePicture } from "./use-update-profile-picture";

const UpdateProfilePicture = (props: any) => {
  const { isPortalOpen } = props;

  const {
    updateProfilePictureFormFields,
    submitUpdateProfilePicture,
    methods,
    handleSubmit,
    closePortal,
    isLoading,
  } = useUpdateProfilePicture(props);

  return (
    <CommonDialog
      isPortalOpen={isPortalOpen?.isOpen}
      closePortal={closePortal}
      dialogTitle={isPortalOpen?.action}
      submitButtonText="Update"
      showSubmitLoader={isLoading}
      showCancelButton={false}
      handleSubmitButton={handleSubmit(submitUpdateProfilePicture)}
    >
      <CustomFormProvider methods={methods}>
        <FormGrid spacing={1} formFieldsList={updateProfilePictureFormFields} />
      </CustomFormProvider>
    </CommonDialog>
  );
};

export default UpdateProfilePicture;
