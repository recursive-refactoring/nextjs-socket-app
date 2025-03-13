import CommonDialog from "@/components/dialogs/common-dialog";
import { FormGrid } from "@/components/grids/form-grid";
import { CustomFormProvider } from "@/providers/custom-form-provider";
import { useUpsertUser } from "./use-upsert-user";

const UpsertUser = (props: any) => {
  const { isPortalOpen } = props;

  const {
    methods,
    handleSubmit,
    addUserSubmit,
    closePortal,
    upsertUserFormFields,
    apiCallInProgress,
  } = useUpsertUser(props);

  return (
    <CommonDialog
      isPortalOpen={isPortalOpen?.isOpen}
      closePortal={closePortal}
      dialogTitle={isPortalOpen?.action}
      submitButtonText={isPortalOpen?.action}
      showSubmitLoader={apiCallInProgress}
      showCancelButton={false}
      handleSubmitButton={handleSubmit(addUserSubmit)}
      dialogMaxWidth="md"
    >
      <CustomFormProvider methods={methods}>
        <FormGrid formFieldsList={upsertUserFormFields} />
      </CustomFormProvider>
    </CommonDialog>
  );
};

export default UpsertUser;
