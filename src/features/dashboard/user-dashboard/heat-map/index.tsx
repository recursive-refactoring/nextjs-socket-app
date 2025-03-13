import { CommonChart } from "@/components/charts/common-chart";
import { useHeatMap } from "./use-heat-map";
import { Box } from "@mui/material";
import { BodyText } from "@/components/text/body-text";
import { CommonCard } from "@/components/cards/common-card";

export const HeatMap = () => {
  const { options } = useHeatMap();
  return (
    <Box sx={{ height: "100%" }}>
      <BodyText variant="body1" marginBottom={1}>
        Heat Map
      </BodyText>
      <CommonCard height="100%">
        <BodyText variant="body2" marginBottom={1} color="primary.main">
          Daily Active Hours
        </BodyText>
        <CommonChart options={options} series={[]} type={"line"} height={348} />
      </CommonCard>
    </Box>
  );
};
