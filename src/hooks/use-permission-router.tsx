import { useRouter } from "next/router";

export const usePermissionRouter = () => {
  const router = useRouter();

  const permissionRouter = (pathname: string) =>
    router?.push({
      pathname,
      query: { hasPermission: true },
    });

  return {
    permissionRouter,
  };
};
