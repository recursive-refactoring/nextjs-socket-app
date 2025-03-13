import { CommonKeyIcon } from "@/assets/icons/common";
import TextFormFields from "@/components/form-fields/text-form-field";
import { object, ref, string } from "yup";

export const changePasswordFormValidationSchema = object({
  currentPassword: string()?.trim()?.required("Current password is required"),
  newPassword: string()?.trim()?.required("New password is required"),
  confirmPassword: string()
    ?.trim()
    ?.required("Confirm password is required")
    ?.oneOf([ref("newPassword")]),
});

export const changePasswordFormDefaultValues = (data?: any) => {
  return {
    currentPassword: data?.currentPassword ?? "",
    newPassword: data?.newPassword ?? "",
    confirmNewPassword: data?.confirmNewPassword ?? "",
  };
};

export const changePasswordFormFieldsDynamic = () => {
  return [
    {
      _id: 1,
      componentProps: {
        name: "currentPassword",
        label: "Current Password",
        startIcon: <CommonKeyIcon />,
      },
      component: TextFormFields,
    },
    {
      _id: 2,
      componentProps: {
        name: "newPassword",
        label: "New Password",
        startIcon: <CommonKeyIcon />,
      },
      component: TextFormFields,
    },
    {
      _id: 3,
      componentProps: {
        name: "confirmNewPassword",
        label: "Confirm New Password",
        startIcon: <CommonKeyIcon />,
      },
      component: TextFormFields,
    },
  ];
};
