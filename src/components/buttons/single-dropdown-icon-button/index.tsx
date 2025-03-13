import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton, Typography } from "@mui/material";
import { Fragment } from "react";
import {
  SingleDropdownIconButtonPropsI,
  SingleDropdownOptionI,
} from "../buttons.interface";
import { useSingleDropdownIconButton } from "./use-single-dropdown-icon-button";
import { CommonMoreVertical } from "@/assets/icons/common";

export const SingleDropdownIconButton = (
  props: SingleDropdownIconButtonPropsI,
) => {
  const {
    dropdownOptions,
    disabled,
    dropdownName = <CommonMoreVertical />,
    menuSxProps,
    buttonLabel = `action`,
    handleSingleClick,
  } = props;

  const { anchorEl, open, handleClick, handleClose } =
    useSingleDropdownIconButton();

  return (
    <>
      <IconButton
        className="small"
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="secondary"
        disabled={disabled}
        aria-label={buttonLabel}
        sx={{ textTransform: "capitalize" }}
      >
        {dropdownName}
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ padding: 2, ...menuSxProps }}
      >
        {dropdownOptions?.map((singleOption: SingleDropdownOptionI) => (
          <Fragment key={singleOption?.id}>
            <MenuItem
              disabled={singleOption?.disabled}
              onClick={(event: any) => {
                event?.stopPropagation();
                handleSingleClick?.(handleClose, singleOption?.title);
              }}
              sx={{
                cursor: "pointer",
                "&.MuiMenuItem-root": {
                  marginBottom: { md: 0.5 },
                  marginX: { md: 0.5 },
                },
              }}
            >
              <Typography
                variant="body2"
                fontWeight={"fontWeightMedium"}
                sx={singleOption?.titleSx}
              >
                {singleOption?.title}
              </Typography>
            </MenuItem>
          </Fragment>
        ))}
      </Menu>
    </>
  );
};
