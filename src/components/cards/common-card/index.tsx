import { Box } from "@mui/material";

export const CommonCard = (props: any) => {
  const {
    backgroundColor = "common.white",
    children,
    borderRadius = 2,
    paddingX = 2,
    paddingY = 2,
    height = "auto",
  } = props;

  return (
    <Box
      sx={{
        backgroundColor,
        borderRadius,
        paddingX,
        paddingY,
        boxShadow: 25,
        height,
      }}
    >
      {children}
    </Box>
  );
};
