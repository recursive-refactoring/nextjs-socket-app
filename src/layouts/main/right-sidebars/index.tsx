import { IconAvatar } from "@/components/avatars/icon-avatar";
import { LogoAvatar } from "@/components/avatars/logo-avatar";
import { Box, Drawer, Typography } from "@mui/material";

export const RightSidebar = () => {
  const menuLinks: any = [];
  return (
    <Drawer>
      <Box>
        <LogoAvatar />
        {menuLinks?.map((item: any) => (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconAvatar>{item?.icon}</IconAvatar>
            <Typography>{item?.name}</Typography>
          </Box>
        ))}
      </Box>
    </Drawer>
  );
};
