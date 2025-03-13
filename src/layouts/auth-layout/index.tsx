import { FlexLayout } from "@/components/layouts/flex-layout";
import { Box } from "@mui/material";
import Header from "./header";

export const AuthLayout = (props: any) => {
  const { children } = props;
  return (
    <FlexLayout
      flexDirection="column"
      alignItems="flex-start"
      minHeight="100vh"
    >
      <Box sx={{ width: "100%", position: "fixed", top: 0, zIndex: 999, p: 1 }}>
        <Header />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          width: "99%",
          margin: "auto",
          marginBottom: 1,
          paddingX: 2,
          paddingTop: 3,
        }}
      >
        {children}
      </Box>
    </FlexLayout>
  );
};
