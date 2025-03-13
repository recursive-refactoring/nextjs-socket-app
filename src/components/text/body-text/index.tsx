import { Typography } from "@mui/material";
import { BodyTextPropsI } from "../text.interface";

export const BodyText = (props: BodyTextPropsI) => {
  const {
    variant = "body2",
    color = "text.primary",
    fontWeight = "fontWeightNormal",
    component = "p",
    isCapital = false,
    children,
    marginTop = 0,
    marginBottom = 0,
  } = props;

  return (
    <Typography
      variant={variant}
      sx={{
        color,
        fontWeight,
        textTransform: isCapital ? "capitalize" : "none",
        marginTop,
        marginBottom,
      }}
      component={component}
    >
      {children}
    </Typography>
  );
};
