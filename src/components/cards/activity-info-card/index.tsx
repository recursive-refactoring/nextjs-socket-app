import { BodyText } from "@/components/text/body-text";
import { CommonCard } from "../common-card";
import { HeadingText } from "@/components/text/heading-text";
import { ActivityInfoCardPropsI } from "../cards.interface";
import { Box } from "@mui/material";

const ActivityInfoCard = (props: ActivityInfoCardPropsI) => {
  const { name, info, infoColor, extraInfo } = props;
  return (
    <CommonCard>
      <BodyText color="primary.main">{name}</BodyText>
      <Box sx={{ textAlign: "end" }}>
        <HeadingText color={infoColor}>
          {info}
          <BodyText color={infoColor} component="span" isCapital={false}>
            {extraInfo}
          </BodyText>
        </HeadingText>
      </Box>
    </CommonCard>
  );
};

export default ActivityInfoCard;
