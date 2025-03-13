import { CommonEmailIcon, CommonKeyIcon } from "@/assets/icons/common";
import SingleCheckboxFormField from "@/components/form-fields/single-checkbox-form-field";
import TextFormFields from "@/components/form-fields/text-form-field";
import { object, string } from "yup";

export const signinFormValidationSchema = object({
  email: string()
    ?.email("enter valid email")
    ?.typeError("invalid email")
    ?.required("Email is required"),
  password: string()?.required("Password is required"),
});

export const signinFormDefaultValues = (data?: any) => ({
  email: data?.email ?? "",
  password: data?.password ?? "",
  rememberMe: data?.rememberMe ?? false,
});

export const signinFormFieldsDynamic = () => {
  return [
    {
      _id: 1,
      componentProps: {
        name: "email",
        label: "Email",
        required: true,
        startIcon: <CommonEmailIcon />,
      },
      component: TextFormFields,
    },
    {
      _id: 2,
      componentProps: {
        name: "password",
        label: "Password",
        required: true,
        startIcon: <CommonKeyIcon />,
      },
      component: TextFormFields,
    },
    {
      _id: 3,
      componentProps: {
        name: "rememberMe",
        label: "Remember Me",
      },
      component: SingleCheckboxFormField,
    },
  ];
};
