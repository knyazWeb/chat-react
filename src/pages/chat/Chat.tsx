import { MessageCloud, SendMessageForm, TopBar } from "@/components";
import { useAppSelector, useSocket } from "@/hooks";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


interface ChatProps {

}


const Chat = () => {
  const socket = useSocket()
  const userSession = useAppSelector((state) => state.auth);
  const params = useParams()
  const chatId = params.chatId ? +params.chatId : null
  const allChats = (useAppSelector((state) => state.chats));
  const currentChatName = allChats.find(chat => chat.id === chatId)?.name 
  
  useEffect(() => {
      socket?.emit("join", {
        authId: userSession.userId,
        roomId: chatId,
      });
  }, [])
  
  return (
    <>
      <div className="pt-[70px] flex flex-col items-center justify-start pb-[110px]">
        <TopBar>{currentChatName || 'Chat'}</TopBar>
        <div className="flex flex-col justify-center w-full h-full">
          Messages
        </div>
      </div>
      <div className="h-[70px] px-7 flex items-center justify-center bg-white w-full fixed bottom-0 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out z-10">
        <SendMessageForm roomId={chatId as number} />
      </div>
    </>
  );
}

export default Chat