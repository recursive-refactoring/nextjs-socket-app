import { baseAPI } from "@/services";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authSliceReducer from "./auth/slice";

const store = configureStore({
  reducer: {
    [baseAPI.reducerPath]: baseAPI?.reducer,
    authSliceReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()?.concat(baseAPI?.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
