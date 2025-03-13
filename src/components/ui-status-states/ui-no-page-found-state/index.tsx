import { UI_MESSAGES } from "@/constants/messages";
import { Box, Typography } from "@mui/material";
import { StaticAvatar } from "@/components/avatars/static-avatar";
import { UiNoPageFoundStatePropsI } from "../ui-status-states.interface";
import { LinkButton } from "@/components/buttons/link-button";
import { CommonUIStatesRestrictedAccessImage } from "@/assets/images/common/ui-states";

const UiNoPageFoundState = (props: UiNoPageFoundStatePropsI) => {
  const {
    hasImage = true,
    image = hasImage ? CommonUIStatesRestrictedAccessImage : "",
    message = UI_MESSAGES?.NO_PAGE_FOUND,
    children,
    height = "70vh",
    buttonLink = "#",
    hasButton = false,
    buttonText = "Go To Home",
  } = props;

  return (
    <Box
      height={height}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
    >
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
    </Box>
  );
};

export default UiNoPageFoundState;
