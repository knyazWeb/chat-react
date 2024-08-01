import { createContext, useContext, useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";

export interface SocketContextType {
  socket: Socket | null;
}

export const SocketContext = createContext<SocketContextType>({ socket: null });



const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    socketRef.current = io(`${import.meta.env.VITE_SERVER_URL}`);
    
    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  return <SocketContext.Provider value={{ socket: socketRef.current }}>{children}</SocketContext.Provider>;
};

export default SocketProvider;
