import { createSlice } from "@reduxjs/toolkit";
import { authReducers } from "./reducers";

const authInitialState = {
  user: {},
  authToken: "",
  refreshToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: authReducers,
});

export const {
  setAuthUserInfoReducer,
  resetAuthUserInfoReducer,
  updateAuthUserInfoReducer,
} = authSlice?.actions;

export default authSlice?.reducer;
