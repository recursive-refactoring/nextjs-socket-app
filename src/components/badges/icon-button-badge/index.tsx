import { CommonIconButton } from "@/components/buttons/common-icon-button";
import { Badge } from "@mui/material";
import { IconButtonBadgePropsI } from "../badges.interface";

export const IconButtonBadge = (props: IconButtonBadgePropsI) => {
  const { children, onClick = undefined, Icon = undefined } = props;

  return (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      badgeContent={
        <CommonIconButton
          customStyles={{ backgroundColor: "primary.main", borderRadius: 2 }}
          onClick={onClick}
        >
          {Icon}
        </CommonIconButton>
      }
    >
      {children}
    </Badge>
  );
};
