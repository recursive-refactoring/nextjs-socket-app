import { API_ENDPOINTS } from "@/constants/api-endpoints";
import { baseAPI } from "@/services";

export const userProductsAPI = baseAPI?.injectEndpoints({
  endpoints: (builder) => ({
    getUserProductsLogLists: builder?.query({
      query: (apiDataParameter: any) => ({
        url: API_ENDPOINTS?.GET_PRODUCTS_LOG_LIST,
        method: "GET",
        params: apiDataParameter?.queryParams,
      }),
    }),
  }),
});

export const { useGetUserProductsLogListsQuery } = userProductsAPI;
