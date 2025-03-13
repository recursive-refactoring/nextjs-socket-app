import { Box } from "@mui/material";
import { ActivityCardPropsI } from "../cards.interface";
import { LogInfo } from "@/components/data-displays/log-info";
import { BodyText } from "@/components/text/body-text";
import { formatRelativeDate } from "@/libs/date-time";

export const ActivityCard = (props: ActivityCardPropsI) => {
  const {
    activityType,
    activityInfo,
    activityDate,
    hasBorderBottom,
    paddingX = 1.5,
    isActive = false,
  } = props;

  return (
    <Box
      sx={{
        backgroundColor: isActive ? "primary.light" : "common.white",
        borderBottom: hasBorderBottom ? "1px solid" : "",
        paddingX,
        py: 1.5,
        marginY: 1,
        borderRadius: 2,
      }}
    >
      <BodyText
        marginBottom={0.5}
        color={"text.secondary"}
        component={"p"}
        variant="caption"
        fontWeight="fontWeightBold"
      >
        {formatRelativeDate(activityDate)}
      </BodyText>
      <LogInfo logType={activityType?.toLowerCase()} log={activityInfo} />
    </Box>
  );
};
