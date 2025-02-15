import { LabelledIcon } from "@/components/data-display/icon-item";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLinks = (props: any) => {
  const { icon, name, link = "#" } = props;

  const path = usePathname();

  const isActive = link === path;

  return (
    <Link href={link}>
      <LabelledIcon
        icon={icon}
        name={name}
        opacity={isActive ? 1 : 0.4}
        color={isActive ? "black" : "grey"}
      />
    </Link>
  );
};
