import VerifyOTPFeature from "@/features/auth/verify-otp";
import { AuthLayout } from "@/layouts/auth-layout";

export default function VerifyOTPPage() {
  return (
    <AuthLayout>
      <VerifyOTPFeature />;
    </AuthLayout>
  );
}
