import { useFormLib } from "@/hooks/use-form-lib";
import { errorSnackbar, successSnackbar } from "@/libs/snackbar.lib";
import { useMemo } from "react";
import {
  updateProfilePictureFormDefaultValues,
  updateProfilePictureFormFieldsDynamic,
  updateProfilePictureFormValidationSchema,
} from "./update-profile-picture.data";
import { useUpdateUserProfileAvatarMutation } from "@/services/admin/profile";
import { useAppDispatch, useAppSelector } from "@/store";
import { authUserInfoSelector } from "@/store/auth/selectors";
import {
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from "@/utils/browser-storage";
import { LOCAL_STORAGE_KEYS } from "@/constants/browser-storage";
import { updateAuthUserInfoReducer } from "@/store/auth/slice";

export const useUpdateProfilePicture = (props: any) => {
  const { setIsPortalOpen } = props;

  const dispatch = useAppDispatch();
  const userRedux = useAppSelector(authUserInfoSelector);

  const userDetails = useMemo(() => {
    const userInfo = getDataFromLocalStorage(
      LOCAL_STORAGE_KEYS?.AUTH_USER_INFO,
    );
    return userInfo?.user;
  }, [userRedux]);

  const [updateProfileAvatarTrigger, { isLoading }] =
    useUpdateUserProfileAvatarMutation();

  const formLibProps = useMemo(
    () => ({
      defaultValues: updateProfilePictureFormDefaultValues?.(),
      validationSchema: updateProfilePictureFormValidationSchema,
    }),
    [],
  );

  const { methods, handleSubmit } = useFormLib(formLibProps);

  const closePortal = () =>
    setIsPortalOpen({
      isOpen: false,
      action: "",
    });

  const submitUpdateProfilePicture = async (formData: any) => {
    const avatarFormData = new FormData();
    avatarFormData?.append("avatar", formData?.profilePicture);

    const apiDataParameter = {
      pathParams: {
        id: userDetails?._id,
      },
      queryParams: {
        removeAvatar: false,
      },
      body: avatarFormData,
    };

    try {
      const response =
        await updateProfileAvatarTrigger?.(apiDataParameter)?.unwrap();
      const authData = {
        user: response?.data,
      };
      saveDataToLocalStorage(LOCAL_STORAGE_KEYS?.AUTH_USER_INFO, authData);
      dispatch(updateAuthUserInfoReducer<any>(authData));
      successSnackbar("profile picture updated successfully");
      closePortal?.();
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
  };

  const updateProfilePictureFormFields = useMemo(
    () => updateProfilePictureFormFieldsDynamic?.(),
    [],
  );

  return {
    updateProfilePictureFormFields,
    submitUpdateProfilePicture,
    methods,
    handleSubmit,
    closePortal,
    isLoading,
  };
};
