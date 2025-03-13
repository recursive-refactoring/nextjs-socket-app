import { pxToRem } from "@/utils/styles";
import { Skeleton } from "@mui/material";
import { BarSkeletonPropsI } from "../skeletons.interface";

const BarSkeleton = (props: BarSkeletonPropsI) => {
  const { length } = props;
  return Array?.from({ length })?.map((item: any, index: any) => (
    <Skeleton
      key={` skeleton ${index}`}
      animation="wave"
      width="100%"
      height={pxToRem(30)}
      variant="rectangular"
      sx={{ my: 2 }}
    />
  ));
};

export default BarSkeleton;
