import TextFormFields from "@/components/form-fields/text-form-field";
import { object, string } from "yup";

export const verifyOtpFormValidationSchema = object({
  otp: string()?.trim()?.required("OTP is required"),
  authCode: string()?.trim()?.required("Code is required"),
});

export const verifyOtpFormDefaultValues = {
  otp: "",
  authCode: "",
};

export const verifyOtpFormFieldsDynamic = () => {
  return [
    {
      _id: 1,
      componentProps: {
        name: "otp",
        label: "Enter OTP",
        placeholder: "Enter OTP",
        required: true,
      },
      component: TextFormFields,
    },
    {
      _id: 2,
      componentProps: {
        name: "authCode",
        label: "Code",
        placeholder: "Enter Code here",
        required: true,
      },
      component: TextFormFields,
    },
  ];
};
