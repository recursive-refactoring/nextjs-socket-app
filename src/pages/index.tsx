import { DashboardFeature } from "@/features/dashboard";
import { ProtectedLayout } from "@/layouts/protected-layout";

export default function Dashboard() {
  return <DashboardFeature />;
}

Dashboard.getLayout = function getLayout(page: any) {
  return <ProtectedLayout>{page}</ProtectedLayout>;
};
