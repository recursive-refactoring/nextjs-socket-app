import { AuthGuard } from "@/guards/auth-guard";
import { MainLayout } from "../main-layout";

export const ProtectedLayout = (props: any) => {
  const { children } = props;

  return (
    <AuthGuard>
      <MainLayout>{children}</MainLayout>
    </AuthGuard>
  );
};
