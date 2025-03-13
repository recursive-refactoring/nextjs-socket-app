import { FormGrid } from "@/components/grids/form-grid";
import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { FlexLayout } from "@/components/layouts/flex-layout";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";
import { Box } from "@mui/material";
import { useSignup } from "./use-signup";
import { CustomFormProvider } from "@/providers/custom-form-provider";
import { ActionsLoadingButton } from "@/components/buttons/actions-loading-button";
import { CustomText } from "@/components/text/custom-text";

const SignupFeature = () => {
  const { methods, handleSubmit, submitSignup, signupFormFields, isLoading } =
    useSignup();

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
              Before We Start
            </CustomText>
            <CustomText
              color="primary.main"
              variant="extraHeading2"
              fontWeight="fontWeightBold"
            >
              Please Share
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
            <CustomFormProvider
              methods={methods}
              onSubmit={handleSubmit(submitSignup)}
            >
              <FormGrid formFieldsList={signupFormFields} />
              <ActionsLoadingButton
                hasCancelButton={false}
                hasBorder={false}
                submitFullWidth
                showSubmitLoader={isLoading}
              />
            </CustomFormProvider>
          </Box>
        </ItemGridLayout>
      </ContainerGridLayout>
    </Box>
  );
};

export default SignupFeature;
