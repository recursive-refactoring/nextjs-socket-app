import TextFormFields from "@/components/form-fields/text-form-field";
import { object, ref, string } from "yup";

export const setPasswordFormValidationSchema = object({
  newPassword: string()?.trim()?.required("New password is required"),
  confirmPassword: string()
    ?.trim()
    ?.required("Confirm password is required")
    ?.oneOf([ref("newPassword")]),
});

export const setPasswordFormDefaultValues = {
  newPassword: "",
  confirmPassword: "",
};

export const setPasswordFormFieldsDynamic = () => {
  return [
    {
      _id: 1,
      componentProps: {
        name: "newPassword",
        label: "New Password",
        placeholder: "Enter New Password",
        required: true,
      },
      component: TextFormFields,
    },
    {
      _id: 2,
      componentProps: {
        name: "confirmPassword",
        label: "Confirm Password",
        placeholder: "Enter Confirm Password",
        required: true,
      },
      component: TextFormFields,
    },
  ];
};
