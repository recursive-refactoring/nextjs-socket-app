import { Box } from "@mui/material";

export const FlexContainer = (props: any) => {
  const {
    children,
    alignItems = "center",
    justifyContent = "flex-start",
    gap = 2,
    flexDirection = "row",
    flexWrap = "wrap",
  } = props;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems,
        justifyContent,
        gap,
        flexDirection,
        flexWrap,
      }}
    >
      {children}
    </Box>
  );
};
