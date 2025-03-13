import { useFormLib } from "@/hooks/use-form-lib";
import { errorSnackbar, successSnackbar } from "@/libs/snackbar.lib";
import { useMemo } from "react";
import {
  signinFormDefaultValues,
  signinFormFieldsDynamic,
  signinFormValidationSchema,
} from "./signin.data";
import { useUserSigninMutation } from "@/services/admin/auth";
import { saveDataToLocalStorage } from "@/utils/browser-storage";
import { LOCAL_STORAGE_KEYS } from "@/constants/browser-storage";
import { useAppDispatch } from "@/store";
import {
  setAuthUserInfoReducer,
  updateAuthUserInfoReducer,
} from "@/store/auth/slice";
import { useRouter } from "next/navigation";

export const useSignin = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [signinTrigger, { isLoading }] = useUserSigninMutation();

  const formLibProps = useMemo(
    () => ({
      defaultValues: signinFormDefaultValues?.(),
      validationSchema: signinFormValidationSchema,
    }),
    [],
  );

  const { methods, handleSubmit } = useFormLib(formLibProps);

  const submitSignin = async (data: any) => {
    const body = {
      email: data?.email,
      password: data?.password,
    };
    const apiDataParameter = { body };
    try {
      const response = await signinTrigger(apiDataParameter)?.unwrap();
      successSnackbar("Password updated successfully");
      if (data?.rememberMe) {
        saveDataToLocalStorage(
          LOCAL_STORAGE_KEYS?.REMEMBER_ME_INFO,
          apiDataParameter,
        );
      }
      const authData = {
        authToken: response?.data?.accessToken,
        refreshToken: response?.data?.refreshToken,
      };
      const userData = {
        user: response?.data?.user,
      };
      saveDataToLocalStorage(LOCAL_STORAGE_KEYS?.AUTH_USER_INFO, userData);
      saveDataToLocalStorage(LOCAL_STORAGE_KEYS?.AUTH_INFO, authData);
      dispatch(setAuthUserInfoReducer<any>(authData));
      dispatch(updateAuthUserInfoReducer<any>(userData));
      router?.push("/");
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
  };

  const signinFormFields = useMemo(() => signinFormFieldsDynamic?.(), []);

  return {
    methods,
    handleSubmit,
    submitSignin,
    signinFormFields,
    isLoading,
  };
};
