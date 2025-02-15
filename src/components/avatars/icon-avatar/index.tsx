import { Avatar } from "@mui/material";

export const IconAvatar = (props: any) => {
  const { children } = props;
  return (
    <Avatar sx={{ width: "10px", height: "10px" }} variant="circular">
      {children}
    </Avatar>
  );
};
