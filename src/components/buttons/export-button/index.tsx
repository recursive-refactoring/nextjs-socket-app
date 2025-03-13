import { Typography, Button, Menu, MenuItem } from "@mui/material";
import { useExportButton } from "./use-export-button";
import { ExportButtonPropsI } from "../buttons.interface";

export const ExportButton = (props: ExportButtonPropsI) => {
  const {
    handleCsvExport,
    handleExcelExport,
    btnVariant = "outlined",
    btnText = "Export",
  } = props;

  const { anchorEl, open, theme, handleClick, handleClose } = useExportButton();

  return (
    <div>
      <Button
        variant={btnVariant}
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        // startIcon={<ExportIcon />}
        color="secondary"
        size="medium"
        className="small"
      >
        {btnText}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          key={1}
          onClick={() => {
            handleCsvExport?.();
            handleClose?.();
          }}
        >
          <Typography
            variant="body2"
            fontWeight={500}
            color={theme?.palette?.grey?.[600]}
          >
            CSV
          </Typography>
        </MenuItem>
        <MenuItem
          key={2}
          onClick={() => {
            handleExcelExport?.();
            handleClose?.();
          }}
          sx={{
            "&.MuiMenuItem-root": {
              paddingRight: 4,
            },
          }}
        >
          <Typography
            variant="body2"
            fontWeight={500}
            color={theme?.palette.grey?.[600]}
          >
            Excel
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};
