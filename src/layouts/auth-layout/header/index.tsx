import { LogoAvatar } from "@/components/avatars/logo-avatar";
import { FlexLayout } from "@/components/layouts/flex-layout";

const Header = () => {
  return (
    <>
      <FlexLayout justifyContent="center">
        <LogoAvatar isWhite={false} />
      </FlexLayout>
    </>
  );
};

export default Header;
