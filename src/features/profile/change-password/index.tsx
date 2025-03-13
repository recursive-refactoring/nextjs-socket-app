import CommonDialog from "@/components/dialogs/common-dialog";
import { FormGrid } from "@/components/grids/form-grid";
import { CustomFormProvider } from "@/providers/custom-form-provider";
import { useChangePassword } from "./use-change-password";

const ChangePassword = (props: any) => {
  const { isPortalOpen } = props;

  const {
    methods,
    handleSubmit,
    submitChangePassword,
    closePortal,
    changePasswordFormFields,
    isLoading,
  } = useChangePassword(props);

  return (
    <CommonDialog
      isPortalOpen={isPortalOpen?.isOpen}
      closePortal={closePortal}
      dialogTitle={isPortalOpen?.action}
      submitButtonText="Update"
      showSubmitLoader={isLoading}
      showCancelButton={false}
      handleSubmitButton={handleSubmit(submitChangePassword)}
      submitBtnFull
    >
      <CustomFormProvider methods={methods}>
        <FormGrid formFieldsList={changePasswordFormFields} />
      </CustomFormProvider>
    </CommonDialog>
  );
};

export default ChangePassword;
