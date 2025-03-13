import { useFormLib } from "@/hooks/use-form-lib";
import { errorSnackbar, successSnackbar } from "@/libs/snackbar.lib";
import { useMemo } from "react";
import {
  verifyOtpFormDefaultValues,
  verifyOtpFormFieldsDynamic,
  verifyOtpFormValidationSchema,
} from "./verify-otp.data";
import { useUserVerifyOTPMutation } from "@/services/admin/auth";

export const useVerifyOTP = () => {
  const [verifyOtpTrigger, { isLoading }] = useUserVerifyOTPMutation();
  const formLibProps = useMemo(
    () => ({
      defaultValues: verifyOtpFormDefaultValues,
      validationSchema: verifyOtpFormValidationSchema,
    }),
    [],
  );

  const { methods, handleSubmit } = useFormLib(formLibProps);

  const submitVerifyOtp = async (formData: any) => {
    const apiDataParameter = {
      body: {
        email: formData?.email,
      },
    };
    try {
      await verifyOtpTrigger(apiDataParameter)?.unwrap();
      successSnackbar("successfully");
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
  };

  const verifyOtpFormFields = useMemo(() => verifyOtpFormFieldsDynamic?.(), []);

  return {
    methods,
    handleSubmit,
    submitVerifyOtp,
    verifyOtpFormFields,
    isLoading,
  };
};
