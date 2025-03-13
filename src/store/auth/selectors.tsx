import { RootState } from "..";

export const authRefreshTokenSelector = (state: RootState) =>
  state?.authSliceReducer?.refreshToken;

export const authAccessTokenSelector = (state: RootState) =>
  state?.authSliceReducer?.authToken;

export const authUserInfoSelector = (state: RootState) =>
  state?.authSliceReducer?.user;
