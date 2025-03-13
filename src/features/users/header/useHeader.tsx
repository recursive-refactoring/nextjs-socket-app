import { PAGINATION } from "@/configs/pagination";
import { USER_PORTAL_ACTIONS } from "../users.data";

export const useHeader = (props: any) => {
  const { setSearch, setPage, setIsPortalOpen } = props;

  const handleSearch = (searchQuery: any) => {
    setSearch(searchQuery);
    setPage(PAGINATION?.INITIAL_PAGE);
  };

  const setAddPortalOpen = () =>
    setIsPortalOpen?.({
      isOpen: true,
      action: USER_PORTAL_ACTIONS?.ADD_USER,
    });

  return {
    handleSearch,
    setAddPortalOpen,
  };
};
