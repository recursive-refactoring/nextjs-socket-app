import { CustomIconButton } from "@/components/buttons/custom-icon-buttons";
import { FlexContainer } from "@/components/containers/flex-container";
import { Search } from "@mui/icons-material";
import { Box } from "@mui/material";

export const Header = () => {
  return (
    <FlexContainer>
      <Box>
        <CustomIconButton>
          <Search />
        </CustomIconButton>
      </Box>
    </FlexContainer>
  );
};
