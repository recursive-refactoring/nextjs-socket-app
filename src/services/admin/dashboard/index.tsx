import { API_ENDPOINTS } from "@/constants/api-endpoints";
import { baseAPI } from "@/services";

export const userDashboardAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getUserDashboardActivity: builder?.query({
      query: () => ({
        url: API_ENDPOINTS?.DASHBOARD_ACTIVITY,
        method: "GET",
      }),
    }),
    getUserDashboardUserActivity: builder?.query({
      query: () => ({
        url: API_ENDPOINTS?.DASHBOARD_USER_ACTIVITY,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetUserDashboardActivityQuery,
  useGetUserDashboardUserActivityQuery,
} = userDashboardAPI;
