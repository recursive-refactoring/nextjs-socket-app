import { useFormLib } from "@/hooks/use-form-lib";
import { errorSnackbar, successSnackbar } from "@/libs/snackbar.lib";
import { useMemo } from "react";
import {
  signupFormDefaultValues,
  signupFormFieldsDynamic,
  signupFormValidationSchema,
} from "./signup.data";
import { useUserSignupMutation } from "@/services/admin/auth";

export const useSignup = () => {
  const [signupTrigger, { isLoading }] = useUserSignupMutation();
  const formLibProps = useMemo(
    () => ({
      defaultValues: signupFormDefaultValues,
      validationSchema: signupFormValidationSchema,
    }),
    [],
  );

  const { methods, handleSubmit } = useFormLib(formLibProps);

  const submitSignup = async (formData: any) => {
    const apiDataParameter = {
      body: {
        email: formData?.email,
      },
    };
    try {
      await signupTrigger(apiDataParameter)?.unwrap();
      successSnackbar("successfully");
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
  };

  const signupFormFields = useMemo(() => signupFormFieldsDynamic?.(), []);

  return {
    methods,
    handleSubmit,
    submitSignup,
    signupFormFields,
    isLoading,
  };
};
