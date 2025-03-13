import { useUsersFeature } from "./use-users";
import { Header } from "./header";
import UsersListFeature from "./users-list";

const UsersFeature = () => {
  const { search, page, setPage, setSearch, isPortalOpen, setIsPortalOpen } =
    useUsersFeature();

  return (
    <>
      <Header
        setSearch={setSearch}
        search={search}
        setPage={setPage}
        isPortalOpen={isPortalOpen}
        setIsPortalOpen={setIsPortalOpen}
      />
      <br />
      <UsersListFeature
        page={page}
        setPage={setPage}
        search={search}
        isPortalOpen={isPortalOpen}
        setIsPortalOpen={setIsPortalOpen}
      />
    </>
  );
};

export default UsersFeature;
