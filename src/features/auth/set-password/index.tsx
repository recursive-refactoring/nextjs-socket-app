import { FormGrid } from "@/components/grids/form-grid";
import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { FlexLayout } from "@/components/layouts/flex-layout";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";
import { Box } from "@mui/material";
import { CustomFormProvider } from "@/providers/custom-form-provider";
import { ActionsLoadingButton } from "@/components/buttons/actions-loading-button";
import { CustomText } from "@/components/text/custom-text";
import { useSetPassword } from "./use-set-password";

const SetPasswordFeature = () => {
  const {
    methods,
    handleSubmit,
    submitSetPassword,
    setPasswordFormFields,
    isLoading,
  } = useSetPassword();

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
              Let&rsquo;s Set
            </CustomText>
            <CustomText
              color="primary.main"
              variant="extraHeading2"
              fontWeight="fontWeightBold"
            >
              A New Password
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
              onSubmit={handleSubmit(submitSetPassword)}
            >
              <FormGrid formFieldsList={setPasswordFormFields} />
              <ActionsLoadingButton
                hasCancelButton={false}
                hasBorder={false}
                submitFullWidth
                showSubmitLoader={isLoading}
                submitButtonText="Update Password"
              />
            </CustomFormProvider>
          </Box>
        </ItemGridLayout>
      </ContainerGridLayout>
    </Box>
  );
};

export default SetPasswordFeature;
