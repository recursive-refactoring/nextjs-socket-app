import { API_ENDPOINTS } from "@/constants/api-endpoints";
import { API_TAGS_MAPPED } from "@/constants/api-tags";
import { baseAPI } from "@/services";

const TAG = API_TAGS_MAPPED?.ADD_USER_LIST;

export const usersAPI = baseAPI?.injectEndpoints({
  endpoints: (builder) => ({
    getUserManagementProductUserLists: builder?.query({
      query: (apiDataParameter: any) => ({
        url: API_ENDPOINTS?.USERS,
        method: "GET",
        params: apiDataParameter?.queryParams,
      }),
      providesTags: [TAG],
    }),
    getUserManagementSingleProductUserDetails: builder?.query({
      query: (apiDataParameter: any) => ({
        url: `${API_ENDPOINTS?.USERS}/${apiDataParameter?.pathParams?.id}`,
        method: "GET",
      }),
    }),
    addUserManagementSingleProductUser: builder?.mutation({
      query: (apiDataParameter: any) => ({
        url: API_ENDPOINTS?.USERS,
        method: "POST",
        body: apiDataParameter?.body,
      }),
      invalidatesTags: [TAG],
    }),
    updateUserManagementSingleProductUser: builder?.mutation({
      query: (apiDataParameter: any) => ({
        url: `${API_ENDPOINTS?.USERS}/${apiDataParameter?.pathParams?.id}`,
        method: "PATCH",
        body: apiDataParameter?.body,
      }),
      invalidatesTags: [TAG],
    }),
    deleteUserManagementMultipleProductUsers: builder?.mutation({
      query: (apiDataParameter: any) => ({
        url: API_ENDPOINTS?.USERS,
        method: "DELETE",
        body: apiDataParameter?.body,
      }),
    }),
  }),
});

export const {
  useLazyGetUserManagementProductUserListsQuery,
  useGetUserManagementSingleProductUserDetailsQuery,
  useAddUserManagementSingleProductUserMutation,
  useUpdateUserManagementSingleProductUserMutation,
  useDeleteUserManagementMultipleProductUsersMutation,
} = usersAPI;
