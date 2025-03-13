import { FormGrid } from "@/components/grids/form-grid";
import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { FlexLayout } from "@/components/layouts/flex-layout";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";
import { Box } from "@mui/material";
import { useSignin } from "./use-signin";
import { CustomFormProvider } from "@/providers/custom-form-provider";
import { ActionsLoadingButton } from "@/components/buttons/actions-loading-button";
import { CustomText } from "@/components/text/custom-text";

const SigninFeature = () => {
  const { methods, handleSubmit, submitSignin, signinFormFields, isLoading } =
    useSignin();

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
        <ItemGridLayout lg={5}>
          <FlexLayout justifyContent="center" minHeight="85%">
            <CustomText
              color="primary.main"
              variant="extraHeading"
              fontWeight="fontWeightBold"
            >
              Sign In
            </CustomText>
          </FlexLayout>
        </ItemGridLayout>
        <ItemGridLayout lg={7}>
          <Box
            sx={{
              backgroundColor: "primary.light",
              padding: 2,
              borderRadius: 2,
            }}
          >
            <CustomFormProvider
              methods={methods}
              onSubmit={handleSubmit(submitSignin)}
            >
              <FormGrid formFieldsList={signinFormFields} />
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

export default SigninFeature;
