import { useFormLib } from "@/hooks/use-form-lib";
import { errorSnackbar, successSnackbar } from "@/libs/snackbar.lib";
import { useMemo } from "react";
import {
  setPasswordFormDefaultValues,
  setPasswordFormFieldsDynamic,
  setPasswordFormValidationSchema,
} from "./set-password.data";
import { useUserSetPasswordMutation } from "@/services/admin/auth";

export const useSetPassword = () => {
  const [setPasswordTrigger, { isLoading }] = useUserSetPasswordMutation();
  const formLibProps = useMemo(
    () => ({
      defaultValues: setPasswordFormDefaultValues,
      validationSchema: setPasswordFormValidationSchema,
    }),
    [],
  );

  const { methods, handleSubmit } = useFormLib(formLibProps);

  const submitSetPassword = async (formData: any) => {
    const apiDataParameter = {
      body: {
        email: formData?.email,
      },
    };
    try {
      await setPasswordTrigger(apiDataParameter)?.unwrap();
      successSnackbar("successfully");
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
  };

  const setPasswordFormFields = useMemo(
    () => setPasswordFormFieldsDynamic?.(),
    [],
  );

  return {
    methods,
    handleSubmit,
    submitSetPassword,
    setPasswordFormFields,
    isLoading,
  };
};
