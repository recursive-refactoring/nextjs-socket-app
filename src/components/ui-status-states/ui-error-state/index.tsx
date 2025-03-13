import { CommonUIStatesRestrictedAccessImage } from "@/assets/images/common/ui-states";
import { StaticAvatar } from "@/components/avatars/static-avatar";
import { LinkButton } from "@/components/buttons/link-button";
import { FlexLayout } from "@/components/layouts/flex-layout";
import { UI_MESSAGES } from "@/constants/messages";
import { Box, Typography } from "@mui/material";

export const UIErrorState = (props: any) => {
  const {
    hasImage = true,
    image = hasImage ? CommonUIStatesRestrictedAccessImage : "",
    message = UI_MESSAGES?.ACCESS_RESTRICTED,
    children,
    height = "70vh",
    buttonLink = "#",
    hasButton = false,
    buttonText = "Go To Home",
  } = props;

  return (
    <FlexLayout flexDirection="column" minHeight={height}>
      {!!image && (
        <Box
          display={"grid"}
          sx={{
            placeItems: "center",
            placeContent: "center",
          }}
        >
          <StaticAvatar
            avatarSrc={image}
            alt="Not Found"
            width="100%"
            height="100%"
          />
        </Box>
      )}
      <Typography variant="h6" mb={2} mt={1}>
        {message}
      </Typography>
      {children}
      {hasButton && (
        <LinkButton variant="contained" link={buttonLink}>
          {buttonText}
        </LinkButton>
      )}
    </FlexLayout>
  );
};
