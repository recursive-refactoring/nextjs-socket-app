import { SvgLogoImage } from "@/assets/images/logos";
import Image from "next/image";

export const LogoAvatar = (props: any) => {
  const { width = "100%", height = "3rem" } = props;
  return (
    <div
      style={{
        position: "relative",
        width,
        height,
      }}
    >
      <Image
        src={SvgLogoImage}
        alt="app-logo"
        priority
        objectFit="cover"
        fill
      />
    </div>
  );
};
