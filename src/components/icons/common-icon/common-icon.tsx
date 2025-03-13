import { Box } from "@mui/material";

export const CommonIcon = (props: any) => {
  const { Icon = null, hasAction = false, onClick, color } = props;

  if (!Icon) return;

  return (
    <Box
      component={"span"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: hasAction ? "pointer" : "",
      }}
      onClick={onClick}
    >
      <Icon color={color} />
    </Box>
  );
};
