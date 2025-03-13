const setAuthUserInfoReducer = (state: any, action: any) => {
  state.user = action?.payload?.user;
  state.refreshToken = action?.payload?.refreshToken;
  state.authToken = action?.payload?.authToken;
};

const updateAuthUserInfoReducer = (state: any, action: any) => {
  state.user = action?.payload?.user;
};

const resetAuthUserInfoReducer = (state: any) => {
  state.user = {};
  state.refreshToken = "";
  state.authToken = "";
};

export const authReducers = {
  setAuthUserInfoReducer,
  resetAuthUserInfoReducer,
  updateAuthUserInfoReducer,
};
