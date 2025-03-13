import { Button } from "@mui/material";
import Link from "next/link";
import { LinkButtonPropsI } from "../buttons.interface";

export const LinkButton = (props: LinkButtonPropsI) => {
  const {
    link = "#",
    children,
    color = "primary",
    variant = "contained",
    customStyles,
  } = props;

  return (
    <Link href={link}>
      <Button
        disableElevation
        className="small"
        sx={customStyles}
        color={color}
        variant={variant}
      >
        {children}
      </Button>
    </Link>
  );
};
