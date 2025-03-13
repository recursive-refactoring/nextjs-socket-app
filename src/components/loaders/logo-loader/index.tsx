import React from "react";
import { Box } from "@mui/material";
import { LogoLoaderPropsI } from "../loaders.interface";
import { LogoAvatar } from "@/components/avatars/logo-avatar";
import style from "./logo-loader.module.css";

const LogoLoader = (props: LogoLoaderPropsI) => {
  const { height = "50vh" } = props;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height,
      }}
    >
      <Box className={style?.logoLoader}>
        <LogoAvatar />
      </Box>
    </Box>
  );
};

export default LogoLoader;
