import { PAGINATION } from "@/configs/pagination";
import { useState } from "react";

export const useUsersFeature = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(PAGINATION?.INITIAL_PAGE);
  const [isPortalOpen, setIsPortalOpen] = useState({
    isOpen: false,
    action: "",
  });

  return {
    search,
    page,
    setPage,
    setSearch,
    isPortalOpen,
    setIsPortalOpen,
  };
};
