import CommonTextFields from "../common-text-field";
import { useMemo } from "react";
import { SEARCH_FIELD_CATEGORY } from "@/constants/ui";
import { SEARCH_FIELD_CATEGORY_STYLES } from "@/constants/styles";
import { CommonSearchIcon } from "@/assets/icons/common/search-icon";
import { useTheme } from "@mui/material";
import { CommonIcon } from "@/components/icons/common-icon/common-icon";

export const SearchField = (props: any) => {
  const {
    setSearch,
    search,
    placeholder = "Search here",
    fullWidth = true,
    searchVariant = SEARCH_FIELD_CATEGORY?.BASIC,
  } = props;

  const theme: any = useTheme();

  const handleSearch = (e: any) => {
    setSearch?.(e?.target?.value);
  };

  const styles = useMemo(
    () => SEARCH_FIELD_CATEGORY_STYLES?.[searchVariant] ?? {},
    [searchVariant],
  );

  const [color1, color2]: any = styles?.iconColor?.split(".") as any;

  const iconColor: any =
    styles?.iconColor !== undefined
      ? theme?.palette?.[color1]?.[color2]
      : undefined;

  return (
    <CommonTextFields
      fullWidth={fullWidth}
      label=""
      onChange={handleSearch}
      value={search}
      endIcon={<CommonIcon Icon={CommonSearchIcon} color={iconColor} />}
      placeholder={placeholder}
      backgroundColor={styles?.backgroundColor}
      borderRadius={2}
      border={styles?.border}
      color={styles?.color}
      borderColor={styles?.borderColor}
    />
  );
};
