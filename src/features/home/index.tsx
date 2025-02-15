"use client";
import { LogoAvatar } from "@/components/avatars/logo-avatar";
import * as io from "socket.io-client";
import {
  AppBar,
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  CssBaseline,
  useTheme,
  List,
  Collapse,
  Typography,
  Skeleton,
  Grid2,
  Button,
} from "@mui/material";

export const HomeFeature = () => {
  var socket: any;
  socket = io.io();
  console.log(socket);
  const theme = useTheme();
  return (
    <>
      <LogoAvatar />
      <Button sx={{ color: theme?.palette?.primary?.main }} />
      <AppBar />
      <Box />
      <Button />
      <Collapse />
      <CssBaseline />
      <Drawer />
      <List />
      <ListItem />
      <ListItemButton />
      <ListItemIcon />
      <Skeleton />
      <Toolbar />
      <Typography />
    </>
  );
};
