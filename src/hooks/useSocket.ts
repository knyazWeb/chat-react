import { SocketContext, SocketContextType } from "@/shared";
import { useContext } from "react";

export const useSocket = (): SocketContextType["socket"] => {
  const { socket } = useContext(SocketContext);
  return socket;
};
