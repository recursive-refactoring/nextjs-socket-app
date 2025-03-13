import { io } from "socket.io-client";

let socket: any = null;

export const initSocket = () => {
  if (!socket) {
    socket = io("https://your-socket-server.com", {
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
