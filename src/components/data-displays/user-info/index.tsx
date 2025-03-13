import { DynamicAvatar } from "@/components/avatars/dynamic-avatar";
import { FlexLayout } from "@/components/layouts/flex-layout";
import { fullNameInitial } from "@/utils/avatars";
import { fullName } from "@/utils/string-transformation";
import { Box, Typography } from "@mui/material";
import { useMemo } from "react";

export const UserInfo = (props: any) => {
  const {
    color = "common.white",
    variant = "body1",
    avatarBackgroundColor = color,
    isRight = true,
    firstName,
    lastName,
    avatarSrc,
  } = props;

  const { name, nameInitial } = useMemo(() => {
    const name = fullName(firstName, lastName);
    const nameInitial = fullNameInitial(firstName, lastName);
    return { name, nameInitial };
  }, [firstName, lastName]);

  return (
    <FlexLayout>
      {isRight && (
        <Box>
          <Typography variant={variant} sx={{ color }}>
            {name}
          </Typography>
        </Box>
      )}

      <DynamicAvatar
        avatarSrc={avatarSrc}
        nameInitial={nameInitial}
        backgroundColor={avatarBackgroundColor}
      />
      {!isRight && (
        <Box>
          <Typography variant={variant} sx={{ color }}>
            {name}
          </Typography>
        </Box>
      )}
    </FlexLayout>
  );
};
