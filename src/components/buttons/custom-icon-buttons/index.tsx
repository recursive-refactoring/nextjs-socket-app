import { IconButton } from "@mui/material";

export const CustomIconButton = (props: any) => {
  const {
    children,
    color = "default",
    disabled = false,
    size = "medium",
    customStyles = {},
  } = props;

  return (
    <IconButton
      disableFocusRipple
      disableRipple
      color={color}
      size={size}
      sx={customStyles}
      disabled={disabled}
    >
      {children}
    </IconButton>
  );
};
