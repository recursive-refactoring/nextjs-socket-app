import { useFormLib } from "@/hooks/use-form-lib";
import { errorSnackbar, successSnackbar } from "@/libs/snackbar.lib";
import { useMemo } from "react";
import { useUpdateUserProfileMutation } from "@/services/admin/profile";
import {
  upsertUserFormDefaultValues,
  upsertUserFormFieldsDynamic,
  upsertUserFormValidationSchema,
} from "./upsert-user.data";
import { USER_PORTAL_ACTIONS } from "../users.data";

export const useUpsertUser = (props: any) => {
  const [addUserTrigger, addUserStatus] = useUpdateUserProfileMutation();
  const [updateUserTrigger, updateUserStatus] = useUpdateUserProfileMutation();

  const { setIsPortalOpen, isPortalOpen } = props;

  const formLibProps = useMemo(
    () => ({
      defaultValues: upsertUserFormDefaultValues?.(),
      validationSchema: upsertUserFormValidationSchema,
    }),
    [],
  );

  const { methods, handleSubmit } = useFormLib(formLibProps);

  const closePortal = () =>
    setIsPortalOpen({
      isOpen: false,
      action: "",
    });

  const addUserSubmit = async (formData: any) => {
    const body = {
      firstName: formData?.firstName,
      lastName: formData?.lastName,
      phoneNumber: formData?.phoneNumber,
      email: formData?.email,
      role: formData?.role,
      userId: formData?.userId,
    };

    if (isPortalOpen?.data?._id) {
      updateUserSubmit?.(body);
      return;
    }
    const apiDataParameter = { body };

    try {
      await addUserTrigger(apiDataParameter)?.unwrap();
      successSnackbar("user added successfully");
      closePortal?.();
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
  };

  const updateUserSubmit = async (formData: any) => {
    const body = {
      firstName: formData?.firstName,
      lastName: formData?.lastName,
      email: formData?.email,
    };
    const apiDataParameter = { body };

    try {
      await updateUserTrigger(apiDataParameter)?.unwrap();
      successSnackbar("user added successfully");
      closePortal?.();
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
  };
  const isEditMode = isPortalOpen?.action === USER_PORTAL_ACTIONS?.EDIT_USER;

  const upsertUserFormFields = useMemo(
    () => upsertUserFormFieldsDynamic?.(isEditMode),
    [isEditMode],
  );

  const apiCallInProgress =
    addUserStatus?.isLoading || updateUserStatus?.isLoading;

  return {
    methods,
    handleSubmit,
    addUserSubmit,
    closePortal,
    upsertUserFormFields,
    apiCallInProgress,
  };
};
