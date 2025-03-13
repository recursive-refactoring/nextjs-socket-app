import { FormGrid } from "@/components/grids/form-grid";
import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { FlexLayout } from "@/components/layouts/flex-layout";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";
import { Box } from "@mui/material";
import { CustomFormProvider } from "@/providers/custom-form-provider";
import { ActionsLoadingButton } from "@/components/buttons/actions-loading-button";
import { CustomText } from "@/components/text/custom-text";
import { useVerifyOTP } from "./use-verify-otp";
import { BodyText } from "@/components/text/body-text";

const VerifyOTPFeature = () => {
  const {
    methods,
    handleSubmit,
    submitVerifyOtp,
    verifyOtpFormFields,
    isLoading,
  } = useVerifyOTP();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "90vh",
        maxWidth: "xl",
        margin: "auto",
      }}
    >
      <ContainerGridLayout>
        <ItemGridLayout lg={6}>
          <FlexLayout
            flexDirection="column"
            justifyContent="center"
            minHeight="85%"
          >
            <CustomText
              color="primary.main"
              variant="extraHeading"
              fontWeight="fontWeightThin"
            >
              Verification
            </CustomText>
            <CustomText
              color="primary.main"
              variant="extraHeading2"
              fontWeight="fontWeightBold"
            >
              Is Important
            </CustomText>
          </FlexLayout>
        </ItemGridLayout>
        <ItemGridLayout lg={6}>
          <Box
            sx={{
              backgroundColor: "primary.light",
              padding: 2,
              borderRadius: 2,
            }}
          >
            <BodyText variant="body1" marginBottom={1}>
              A One Time Password (OTP) has been shared to the email you
              provided. Please enter the OTP code to verify your identity.
            </BodyText>
            <CustomFormProvider
              methods={methods}
              onSubmit={handleSubmit(submitVerifyOtp)}
            >
              <FormGrid formFieldsList={verifyOtpFormFields} />
              <ActionsLoadingButton
                hasCancelButton={false}
                hasBorder={false}
                submitFullWidth
                showSubmitLoader={isLoading}
                submitButtonText="Verify"
              />
            </CustomFormProvider>
          </Box>
        </ItemGridLayout>
      </ContainerGridLayout>
    </Box>
  );
};

export default VerifyOTPFeature;
