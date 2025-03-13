import { AuthGuardI } from "../guards.interface";

// import LogoLoader from "@/components/loaders/logo-loader";
// import { LOCAL_STORAGE_KEYS } from "@/constants/browser-storage";
// import { DATA_TYPES } from "@/constants/data-types";
// import { AUTH_ROUTES } from "@/constants/routes";
// import { useAppDispatch } from "@/store";
// import { setAuthUserInfoReducer } from "@/store/auth/slice";
// import { getDataFromLocalStorage } from "@/utils/browser-storage";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

export const AuthGuard = (props: AuthGuardI) => {
  const { children } = props;
  // const router = useRouter();
  // const dispatch = useAppDispatch();

  // const [isLoading, setIsLoading] = useState(true);
  // const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  //TODO: will be used after BE integration
  // useEffect(() => {
  //   const getToken = getDataFromLocalStorage(LOCAL_STORAGE_KEYS?.AUTH_INFO);
  //   if (!getToken?.authToken) router?.push(AUTH_ROUTES?.SIGNIN);
  //   dispatch(setAuthUserInfoReducer(getToken));
  //   setIsAuthenticated(!!getToken?.authToken);
  //   setIsLoading(false);
  // }, []);

  return <>{children}</>;

  // if (isLoading) return <LogoLoader />;

  // return isAuthenticated === DATA_TYPES?.NULL ? (
  //   <LogoLoader />
  // ) : (
  //   <>{children}</>
  // );
};
