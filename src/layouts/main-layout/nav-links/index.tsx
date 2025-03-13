import { Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLinks = (props: any) => {
  const { link = "#", name = "" } = props;
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <Link href={link}>
      <Typography
        variant="body2"
        sx={{
          color: isActive ? "text.secondary" : "common.border",
          fontWeight: isActive ? "fontWeightBold" : "fontWeightNormal",
          cursor: "pointer",
        }}
      >
        {name}
      </Typography>
    </Link>
  );
};
