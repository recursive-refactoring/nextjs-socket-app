import SetPasswordFeature from "@/features/auth/set-password";
import { AuthLayout } from "@/layouts/auth-layout";

export default function SetPasswordPage() {
  return (
    <AuthLayout>
      <SetPasswordFeature />;
    </AuthLayout>
  );
}
