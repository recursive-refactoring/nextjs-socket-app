import CommonDialog from "@/components/dialogs/common-dialog";
import { FormGrid } from "@/components/grids/form-grid";
import { CustomFormProvider } from "@/providers/custom-form-provider";
import { useUpdateProfile } from "./use-update-profile";

const UpdateProfile = (props: any) => {
  const { isPortalOpen } = props;

  const {
    methods,
    handleSubmit,
    submitUpdateProfile,
    closePortal,
    updateProfileFormFields,
    isLoading,
  } = useUpdateProfile(props);

  return (
    <CommonDialog
      isPortalOpen={isPortalOpen?.isOpen}
      closePortal={closePortal}
      dialogTitle={isPortalOpen?.action}
      submitButtonText="Update"
      showSubmitLoader={isLoading}
      showCancelButton={false}
      handleSubmitButton={handleSubmit(submitUpdateProfile)}
      dialogMaxWidth="md"
    >
      <CustomFormProvider methods={methods}>
        <FormGrid formFieldsList={updateProfileFormFields} />
      </CustomFormProvider>
    </CommonDialog>
  );
};

export default UpdateProfile;
