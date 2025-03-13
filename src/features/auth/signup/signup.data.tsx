import TextFormFields from "@/components/form-fields/text-form-field";
import { object, string } from "yup";

export const signupFormValidationSchema = object({
  email: string()
    ?.email("enter valid email")
    ?.typeError("invalid email")
    ?.required("Email is required"),
});

export const signupFormDefaultValues = {
  email: "",
};

export const signupFormFieldsDynamic = () => {
  return [
    {
      _id: 1,
      componentProps: {
        name: "email",
        label: "Email",
        required: true,
      },
      component: TextFormFields,
    },
  ];
};
