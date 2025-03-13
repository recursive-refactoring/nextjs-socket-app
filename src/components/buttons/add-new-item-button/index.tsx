import { Button } from "@mui/material";
import { AddNewItemButtonPropsI } from "../buttons.interface";
import { CommonAddCircleIcon } from "@/assets/icons/common";

const mappedIcon: any = {
  circle: CommonAddCircleIcon,
};

export const AddNewItemButton = (props: AddNewItemButtonPropsI) => {
  const {
    disabled = false,
    variant = "contained",
    color = "primary",
    onClick = undefined,
    hasStartIcon = true,
    hasEndIcon = false,
    iconType = "circle",
    size = "medium",
    customStyles = {},
    children,
  } = props;

  const MapIcon = mappedIcon?.[iconType];

  return (
    <Button
      variant={variant}
      color={color}
      disableElevation
      disabled={disabled}
      className="small"
      size={size}
      startIcon={hasStartIcon && <MapIcon />}
      endIcon={hasEndIcon && <MapIcon />}
      onClick={onClick}
      sx={{
        "& .MuiButton-startIcon": {
          ...(!!children ? {} : { marginRight: 0, marginLeft: 0 }),
        },
        ...customStyles,
      }}
    >
      {children}
    </Button>
  );
};
