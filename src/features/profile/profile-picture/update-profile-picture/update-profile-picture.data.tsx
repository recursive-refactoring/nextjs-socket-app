import { SingleFileUploadFormField } from "@/components/form-fields/file-upload-fields";
import { mixed, object } from "yup";

export const updateProfilePictureFormValidationSchema = object({
  profilePicture: mixed()?.nullable()?.required("Picture is required"),
});

export const updateProfilePictureFormDefaultValues = (data?: any) => {
  return {
    profilePicture: data?.profilePicture ?? null,
  };
};

export const updateProfilePictureFormFieldsDynamic = () => {
  return [
    {
      _id: 1,
      componentProps: {
        name: "profilePicture",
      },
      component: SingleFileUploadFormField,
    },
  ];
};
