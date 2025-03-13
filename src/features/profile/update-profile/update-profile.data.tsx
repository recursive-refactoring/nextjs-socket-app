import TextFormFields from "@/components/form-fields/text-form-field";
import { object, string } from "yup";

export const updateUserFormValidationSchema = object({
  firstName: string()?.trim()?.required("Email is required"),
  lastName: string()?.trim()?.required("lastName is required"),
  email: string()
    ?.trim()
    ?.email("Enter valid email")
    ?.required("Email is required"),
  phoneNumber: string()?.trim()?.required("Enter valid phone number"),
  role: string(),
  userId: string(),
});

export const updateProfileFormDefaultValues = (data?: any) => {
  return {
    firstName: data?.firstName ?? "",
    lastName: data?.lastName ?? "",
    email: data?.email ?? "",
    phoneNumber: data?.phoneNumber ?? "",
    role: data?.role ?? "",
    userId: data?.userId ?? "",
  };
};

export const updateProfileFormFieldsDynamic = () => {
  return [
    {
      _id: 1,
      lg: 6,
      componentProps: {
        name: "firstName",
        label: "First Name",
        required: true,
      },
      component: TextFormFields,
    },
    {
      _id: 2,
      lg: 6,
      componentProps: {
        name: "lastName",
        label: "Last Name",
        required: true,
      },
      component: TextFormFields,
    },
    {
      _id: 3,
      lg: 6,
      componentProps: {
        name: "email",
        label: "Email",
        required: true,
        disabled: true,
      },
      component: TextFormFields,
    },
    {
      _id: 4,
      lg: 6,
      componentProps: {
        name: "phoneNumber",
        label: "Phone Number",
        required: true,
      },
      component: TextFormFields,
    },
    {
      _id: 5,
      lg: 6,
      componentProps: {
        name: "role",
        label: "Role",
        disabled: true,
      },
      component: TextFormFields,
    },
    {
      _id: 6,
      lg: 6,
      componentProps: {
        name: "userId",
        label: "User Id",
        disabled: true,
      },
      component: TextFormFields,
    },
  ];
};
