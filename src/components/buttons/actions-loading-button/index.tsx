import { Box } from "@mui/material";
import { CommonLoadingButton } from "../common-loading-button";
import { ActionsLoadingButtonPropsI } from "../buttons.interface";

export const ActionsLoadingButton = (props: ActionsLoadingButtonPropsI) => {
  const {
    handleSubmitButton,
    handleCancelButton,
    cancelButtonText = "Cancel",
    submitButtonText = "Submit",
    showSubmitLoader = false,
    disabledSubmitButton = showSubmitLoader,
    disabledCancelButton = showSubmitLoader,
    hasBorder = true,
    justifyContent = "flex-end",
    hasCancelButton = true,
    cancelFullWidth = false,
    submitFullWidth = false,
  } = props;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent,
        gap: 1,
        py: 2,
        mt: 2,
        borderTop: hasBorder ? "1px solid" : "none",
        borderColor: "custom.off_white_three",
      }}
    >
      {hasCancelButton && (
        <CommonLoadingButton
          primary={false}
          onClick={handleCancelButton}
          disabled={disabledCancelButton}
          fullWidth={cancelFullWidth}
        >
          {cancelButtonText}
        </CommonLoadingButton>
      )}

      <CommonLoadingButton
        type="submit"
        loading={showSubmitLoader}
        disabled={disabledSubmitButton}
        onClick={handleSubmitButton}
        fullWidth={submitFullWidth}
      >
        {submitButtonText}
      </CommonLoadingButton>
    </Box>
  );
};
