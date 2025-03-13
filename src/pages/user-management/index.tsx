import UsersManagementFeature from "@/features/user-management";
import { ProtectedLayout } from "@/layouts/protected-layout";

export default function UserManagementPage() {
  return <UsersManagementFeature />;
}

UserManagementPage.getLayout = function getLayout(page: any) {
  return <ProtectedLayout>{page}</ProtectedLayout>;
};
