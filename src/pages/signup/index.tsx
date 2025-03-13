import SignupFeature from "@/features/auth/signup";
import { AuthLayout } from "@/layouts/auth-layout";

export default function SignupPage() {
  return (
    <AuthLayout>
      <SignupFeature />;
    </AuthLayout>
  );
}
