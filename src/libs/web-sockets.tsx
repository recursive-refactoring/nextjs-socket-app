import { BACKEND_BASE_URL } from "@/configs/env";
import { io } from "socket.io-client";

let socket: any = null;

export const initSocket = () => {
  if (!socket) {
    socket = io(BACKEND_BASE_URL, {
      autoConnect: false,
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 2000,
    });

    socket?.connect();
  }

  return socket;
};

export const getSocket = () => socket;
