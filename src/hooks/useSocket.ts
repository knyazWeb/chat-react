import { SocketContext, SocketContextType } from "@/shared";
import { useContext } from "react";

export const useSocket = (): SocketContextType => {
  return useContext(SocketContext);
};
