import { useFormLib } from "@/hooks/use-form-lib";
import {
  updateProfileFormDefaultValues,
  updateProfileFormFieldsDynamic,
  updateUserFormValidationSchema,
} from "./update-profile.data";
import { errorSnackbar, successSnackbar } from "@/libs/snackbar.lib";
import { useMemo } from "react";
import { useUpdateUserProfileMutation } from "@/services/admin/profile";
import { LOCAL_STORAGE_KEYS } from "@/constants/browser-storage";
import {
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from "@/utils/browser-storage";
import { useAppDispatch, useAppSelector } from "@/store";
import { authUserInfoSelector } from "@/store/auth/selectors";
import { updateAuthUserInfoReducer } from "@/store/auth/slice";

export const useUpdateProfile = (props: any) => {
  const [updateUserProfileTrigger, { isLoading }] =
    useUpdateUserProfileMutation();
  const dispatch = useAppDispatch();
  const userRedux = useAppSelector(authUserInfoSelector);

  const userDetails = useMemo(() => {
    const userInfo = getDataFromLocalStorage(
      LOCAL_STORAGE_KEYS?.AUTH_USER_INFO,
    );
    return userInfo?.user;
  }, [userRedux]);

  const { setIsPortalOpen } = props;

  const formLibProps = useMemo(
    () => ({
      defaultValues: updateProfileFormDefaultValues?.(userDetails),
      validationSchema: updateUserFormValidationSchema,
    }),
    [],
  );

  const { methods, handleSubmit } = useFormLib(formLibProps);

  const closePortal = () =>
    setIsPortalOpen({
      isOpen: false,
      action: "",
    });

  const submitUpdateProfile = async (formData: any) => {
    const apiDataParameter = {
      pathParams: {
        id: userDetails?._id,
      },
      body: {
        firstName: formData?.firstName,
        lastName: formData?.lastName,
        phoneNumber: formData?.phoneNumber,
      },
    };
    try {
      const response =
        await updateUserProfileTrigger(apiDataParameter)?.unwrap();

      const authData = {
        user: response?.data,
      };

      saveDataToLocalStorage(LOCAL_STORAGE_KEYS?.AUTH_USER_INFO, authData);

      dispatch(updateAuthUserInfoReducer<any>(authData));
      successSnackbar("Profile updated successfully");
      closePortal?.();
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
  };

  const updateProfileFormFields = useMemo(
    () => updateProfileFormFieldsDynamic?.(),
    [],
  );

  return {
    methods,
    handleSubmit,
    submitUpdateProfile,
    closePortal,
    updateProfileFormFields,
    isLoading,
  };
};
