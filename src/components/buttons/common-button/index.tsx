import { Button } from "@mui/material";
import { CommonButtonPropsI } from "../buttons.interface";

export const CommonButton = (props: CommonButtonPropsI) => {
  const {
    children,
    onClick,
    primary = false,
    variant = primary ? "contained" : "outlined",
    color = primary ? "primary" : "secondary",
    disabled = false,
    className = "small",
    fullWidth = false,
    customStyles,
    type = "button",
    startIcon = undefined,
    endIcon = undefined,
  } = props;

  return (
    <Button
      disableElevation
      variant={variant}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      disabled={disabled}
      className={className}
      fullWidth={fullWidth}
      sx={customStyles}
      type={type}
    >
      {children}
    </Button>
  );
};
