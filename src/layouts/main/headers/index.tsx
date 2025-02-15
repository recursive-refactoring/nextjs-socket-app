import { CustomIconButton } from "@/components/buttons/custom-icon-buttons";
import { Search } from "@mui/icons-material";
import { Box } from "@mui/material";

export const Header = () => {
  return (
    <Box>
      <Box>
        <CustomIconButton>
          <Search />
        </CustomIconButton>
      </Box>
    </Box>
  );
};
