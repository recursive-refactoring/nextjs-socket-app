import { CommonErrorIcon } from "@/assets/icons/common/error-icon";
import { CommonIcon } from "@/components/icons/common-icon/common-icon";
import { FlexLayout } from "@/components/layouts/flex-layout";
import { BodyText } from "@/components/text/body-text";

export const ErrorMessageField = (props: any) => {
  const { children = "Required" } = props;
  return (
    <FlexLayout component={"span"}>
      <CommonIcon Icon={CommonErrorIcon} />
      <BodyText
        variant="caption"
        color="error.main"
        fontWeight="fontWeightMedium"
        component="span"
      >
        {children}
      </BodyText>
    </FlexLayout>
  );
};
