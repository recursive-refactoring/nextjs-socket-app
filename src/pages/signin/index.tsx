import SigninFeature from "@/features/auth/signin";
import { AuthLayout } from "@/layouts/auth-layout";

export default function SigninPage() {
  return <SigninFeature />;
}

SigninPage.getLayout = function getLayout(page: any) {
  return <AuthLayout>{page}</AuthLayout>;
};
