import { DATA_TYPES } from "@/constants/data-types";
import { AVATAR_VARIANTS } from "@/constants/ui";
import { generateImage } from "@/utils/avatars";
import { pxToRem } from "@/utils/styles";
import { Avatar, Typography } from "@mui/material";
import { DynamicAvatarPropsI } from "../avatars.interface";
import { CommonTooltip } from "@/components/data-displays/common-tooltip";

export const DynamicAvatar = (props: DynamicAvatarPropsI) => {
  const {
    nameInitial,
    avatarSrc,
    tooltipTitle,
    customTooltipProps,
    backgroundColor = "primary.main",
    customStyles,
    padding,
    initialColor = "grey.800",
    nameInitialsSize = 14,
    width = 40,
    height = 40,
    variant = AVATAR_VARIANTS?.CIRCULAR,
    isCenter = false,
    boxShadow = 0,
  } = props;

  const nameInitialSize: number =
    typeof height === DATA_TYPES?.STRING
      ? nameInitialsSize
      : (((height as number) / 3) as number);

  return (
    <CommonTooltip title={tooltipTitle} isCapital {...customTooltipProps}>
      <Avatar
        sx={{
          backgroundColor,
          width: width,
          height: height,
          padding,
          margin: isCenter ? "auto" : "",
          boxShadow,
          ...customStyles,
        }}
        variant={variant}
        src={generateImage(avatarSrc)}
        alt={nameInitial}
      >
        {!!nameInitial && (
          <Typography
            sx={{
              fontSize: pxToRem(nameInitialSize),
              color: initialColor,
              textTransform: "uppercase",
            }}
          >
            {nameInitial}
          </Typography>
        )}
      </Avatar>
    </CommonTooltip>
  );
};
