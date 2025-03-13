import { initSocket } from "@/libs/web-sockets";
import { useEffect } from "react";

export const useSocket = (event: string, callback: any) => {
  useEffect(() => {
    const socket = initSocket();

    if (event && callback) {
      socket?.on(event, callback);
    }

    return () => {
      if (event) socket?.off(event, callback);
    };
  }, [event, callback]);
};
