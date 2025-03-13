import { useMemo, useState } from "react";

import { useGetUserProductsLogListsQuery } from "@/services/admin/products";
import { PAGINATION } from "@/configs/pagination";
import { usersListColumnsDynamic } from "./users-list.data";
import { USER_DROPDOWN_MENU_LIST, USER_PORTAL_ACTIONS } from "../users.data";

export const useUsersListFeature = (props: any) => {
  const { page, search, setIsPortalOpen } = props;

  const [pageLimit, setPageLimit] = useState(PAGINATION?.PAGE_LIMIT);

  const apiDataParameter = useMemo(
    () => ({
      queryParams: {
        page,
        limit: pageLimit,
        search,
      },
    }),
    [page, pageLimit, search],
  );

  const setPortalActions = (action: string) => {
    setIsPortalOpen({
      isOpen: true,
      action,
    });
  };
  const { data, isLoading, isFetching, isError, refetch } =
    useGetUserProductsLogListsQuery(apiDataParameter, {
      refetchOnMountOrArgChange: true,
    });

  const handleDropdownItemsClick = (closeMenu: any, itemName: string) => {
    if (itemName === USER_DROPDOWN_MENU_LIST?.DELETE) {
      setPortalActions?.(USER_PORTAL_ACTIONS?.DELETE_USER);
      closeMenu();
      return;
    }
    if (itemName === USER_DROPDOWN_MENU_LIST?.EDIT) {
      setPortalActions?.(USER_PORTAL_ACTIONS?.EDIT_USER);
      closeMenu();
      return;
    }
    if (itemName === USER_DROPDOWN_MENU_LIST?.ROLES_AND_RIGHT) {
      closeMenu();
      return;
    }
  };

  const usersListColumns = useMemo(
    () => usersListColumnsDynamic(handleDropdownItemsClick),
    [],
  );

  const { userListData, metaData } = useMemo(() => {
    const userListData = data?.data?.articles;
    const metaData = data?.data?.meta;
    return { userListData, metaData };
  }, [data]);

  const showLoader = isLoading || isFetching;

  return {
    usersListColumns,
    userListData,
    showLoader,
    isError,
    refetch,
    setPageLimit,
    metaData,
    page,
    pageLimit,
  };
};
