import { LogInfoPropsI } from "../data-displays.interface";
import { BodyText } from "@/components/text/body-text";
import { FlexLayout } from "@/components/layouts/flex-layout";

export const LogInfo = (props: LogInfoPropsI) => {
  const { logType, log, logColor = "text.secondary" } = props;

  return (
    <FlexLayout>
      <BodyText isCapital color="text.secondary" fontWeight={"fontWeightBold"}>
        {logType?.toLowerCase()}:
      </BodyText>
      <BodyText
        component={"div"}
        fontWeight={"fontWeightNormal"}
        variant="body2"
        color={logColor}
      >
        {log}
      </BodyText>
    </FlexLayout>
  );
};
