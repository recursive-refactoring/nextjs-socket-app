import { IconAvatar } from "@/components/avatars/icon-avatar";
import { FlexContainer } from "@/components/containers/flex-container";
import { Typography } from "@mui/material";

export const LabelledIcon = (props: any) => {
  const { icon = null, name, opacity = 1, color = "main" } = props;

  return (
    <FlexContainer>
      <IconAvatar customStyles={{ opacity }}>{icon}</IconAvatar>
      <Typography sx={{ color }}>{name}</Typography>
    </FlexContainer>
  );
};
