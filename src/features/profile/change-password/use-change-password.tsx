import { useFormLib } from "@/hooks/use-form-lib";
import {
  changePasswordFormDefaultValues,
  changePasswordFormFieldsDynamic,
} from "./change-password.data";
import { errorSnackbar, successSnackbar } from "@/libs/snackbar.lib";
import { useMemo } from "react";
import { useUserChangePasswordMutation } from "@/services/admin/profile";

export const useChangePassword = (props: any) => {
  const { setIsPortalOpen } = props;
  const [changeUserPasswordTrigger, { isLoading }] =
    useUserChangePasswordMutation();
  const formLibProps = useMemo(
    () => ({
      defaultValues: changePasswordFormDefaultValues?.(),
    }),
    [],
  );

  const { methods, handleSubmit } = useFormLib({ formLibProps });

  const closePortal = () =>
    setIsPortalOpen({
      isOpen: false,
      action: "",
    });

  const submitChangePassword = async (formData: any) => {
    const apiDataParameter = {
      body: {
        currentPassword: formData?.currentPassword,
        newPassword: formData?.newPassword,
      },
    };
    try {
      await changeUserPasswordTrigger?.(apiDataParameter)?.unwrap();
      successSnackbar("Password updated successfully");
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
  };

  const changePasswordFormFields = useMemo(
    () => changePasswordFormFieldsDynamic?.(),
    [],
  );

  return {
    methods,
    handleSubmit,
    submitChangePassword,
    closePortal,
    changePasswordFormFields,
    isLoading,
  };
};
