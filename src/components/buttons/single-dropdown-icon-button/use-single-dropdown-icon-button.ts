import { useState } from "react";
import { SingleDropdownButtonCloseMenuType } from "../buttons.interface";

export const useSingleDropdownIconButton = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open: boolean = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event?.stopPropagation();
    setAnchorEl(event?.currentTarget);
  };

  const handleClose: SingleDropdownButtonCloseMenuType = (
    event: React.MouseEvent<HTMLElement>,
  ) => {
    event?.stopPropagation();
    setAnchorEl(null);
  };

  return {
    anchorEl,
    open,
    handleClick,
    handleClose,
  };
};
