import { API_ENDPOINTS } from "@/constants/api-endpoints";
import { baseAPI } from "@/services";

export const userAuthAPI = baseAPI?.injectEndpoints({
  endpoints: (builder) => ({
    userSignup: builder?.mutation({
      query: (apiDataParameter: any) => ({
        url: API_ENDPOINTS?.SIGNUP,
        method: "POST",
        body: apiDataParameter?.body,
      }),
    }),
    userVerifyOTP: builder?.mutation({
      query: (apiDataParameter: any) => ({
        url: API_ENDPOINTS?.VERIFY_OTP,
        method: "POST",
        body: apiDataParameter?.body,
      }),
    }),
    userSetPassword: builder?.mutation({
      query: (apiDataParameter: any) => ({
        url: API_ENDPOINTS?.SET_PASSWORD,
        method: "POST",
        body: apiDataParameter?.body,
      }),
    }),
    userSignin: builder?.mutation({
      query: (apiDataParameter: any) => ({
        url: API_ENDPOINTS?.SIGNIN,
        method: "POST",
        body: apiDataParameter?.body,
      }),
    }),
    userTwoFactorAuthentication: builder?.mutation({
      query: (apiDataParameter: any) => ({
        url: API_ENDPOINTS?.VERIFY_TWO_FACTOR_AUTHENTICATION,
        method: "POST",
        body: apiDataParameter?.body,
      }),
    }),
  }),
});

export const {
  useUserSigninMutation,
  useUserSignupMutation,
  useUserTwoFactorAuthenticationMutation,
  useUserVerifyOTPMutation,
  useUserSetPasswordMutation,
} = userAuthAPI;
