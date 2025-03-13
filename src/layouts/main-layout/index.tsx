import { FlexLayout } from "@/components/layouts/flex-layout";
import Header from "./header";
import { Box } from "@mui/material";
import MenuBar from "./menu-bar";
import { PageHeader } from "./page-header";
import { pxToRem } from "@/utils/styles";

export const MainLayout = (props: any) => {
  const { children } = props;

  return (
    <FlexLayout
      flexDirection="column"
      alignItems="flex-start"
      minHeight="100vh"
    >
      <Box sx={{ width: "100%", position: "fixed", top: 0, zIndex: 999 }}>
        <Header />
      </Box>
      <Box sx={{ height: pxToRem(60) }}></Box>
      {/* <Box sx={{ paddingX: 2 }}>
        <MenuBar />
      </Box> */}
      <Box
        sx={{
          flexGrow: 1,
          width: "99%",
          backgroundColor: "common.white",
          boxShadow: 25,
          borderRadius: 2,
          margin: "auto",
          marginBottom: 1,
          paddingX: 2,
          paddingTop: 3,
        }}
      >
        <Box sx={{ marginBottom: 2 }}>
          <PageHeader />
        </Box>
        {children}
      </Box>
    </FlexLayout>
  );
};
