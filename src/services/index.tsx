import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Mutex } from "async-mutex";
import { LOCAL_STORAGE_KEYS } from "@/constants/browser-storage";
import {
  getDataFromLocalStorage,
  removeDataFromLocalStorage,
} from "@/utils/browser-storage";
import { API_ENDPOINTS } from "@/constants/api-endpoints";
import { BACKEND_BASE_URL } from "@/configs/env";
import { RootState } from "@/store";
import { API_TAGS } from "@/constants/api-tags";
import { setAuthUserInfoReducer } from "@/store/auth/slice";

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: BACKEND_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState)?.authSliceReducer?.authToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const customFetchBase = async (args: any, api: any, extraOptions: any) => {
  await mutex?.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (!!(result?.error && result?.error?.status === 401)) {
    if (!mutex?.isLocked()) {
      const release = await mutex.acquire();

      try {
        const token = getDataFromLocalStorage(
          LOCAL_STORAGE_KEYS?.AUTH_USER_INFO,
        );
        const body = {
          userId: token?.user?.userId,
          refreshToken: token?.refreshToken,
        };
        const refreshResult: any = await baseQuery(
          { url: API_ENDPOINTS?.REFRESH_TOKEN, method: "PUT", body },
          api,
          extraOptions,
        );
        const formatData = refreshResult?.data?.data;
        const newToken = {
          authToken: formatData?.authToken,
          refreshToken: formatData?.refreshToken,
        };
        api?.dispatch(setAuthUserInfoReducer<any>(newToken));
        if (refreshResult?.data) {
          result = await baseQuery(args, api, extraOptions);
        } else {
          removeDataFromLocalStorage(LOCAL_STORAGE_KEYS?.AUTH_USER_INFO);
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

export const baseAPI = createApi({
  reducerPath: "api",
  baseQuery: customFetchBase,
  tagTypes: API_TAGS,
  endpoints: () => ({}),
});
