import { RecordCountChip } from "@/components/chips/record-count-chip";
import { CommonCard } from "../common-card";
import { ItemAvatarCountCardPropsI } from "../cards.interface";
import { DynamicAvatar } from "@/components/avatars/dynamic-avatar";
import { Box } from "@mui/material";
import { AVATAR_VARIANTS } from "@/constants/ui";

const ItemAvatarCountCard = (props: ItemAvatarCountCardPropsI) => {
  const { name, avatarSrc, count } = props;
  return (
    <CommonCard height="100%">
      <RecordCountChip name={name} totalCount={count} />
      <br />
      <Box sx={{ my: 1 }}>
        <DynamicAvatar
          avatarSrc={avatarSrc}
          variant={AVATAR_VARIANTS?.ROUNDED}
          width="100%"
        />
      </Box>
    </CommonCard>
  );
};

export default ItemAvatarCountCard;
