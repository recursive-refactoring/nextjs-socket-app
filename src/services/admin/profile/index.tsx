import { API_ENDPOINTS } from "@/constants/api-endpoints";
import { baseAPI } from "@/services";

export const userProfileAPI = baseAPI?.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder?.query({
      query: () => ({
        url: API_ENDPOINTS?.GET_USER_PROFILE,
        method: "GET",
      }),
    }),

    updateUserProfile: builder?.mutation({
      query: (apiDataParameter: any) => ({
        url: `${API_ENDPOINTS?.UPDATE_USER_PROFILE}/${apiDataParameter?.pathParams?.id}`,
        method: "PATCH",
        body: apiDataParameter?.body,
      }),
    }),

    updateUserProfileAvatar: builder?.mutation({
      query: (apiDataParameter: any) => ({
        url: `${API_ENDPOINTS?.UPDATE_USER_PROFILE_AVATAR}/${apiDataParameter?.pathParams?.id}/avatar`,
        method: "PATCH",
        body: apiDataParameter?.body,
        params: apiDataParameter?.queryParams,
      }),
    }),

    userChangePassword: builder?.mutation({
      query: (apiDataParameter: any) => ({
        url: API_ENDPOINTS?.CHANGE_PASSWORD,
        method: "POST",
        body: apiDataParameter,
      }),
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useUpdateUserProfileAvatarMutation,
  useUpdateUserProfileMutation,
  useUserChangePasswordMutation,
} = userProfileAPI;
