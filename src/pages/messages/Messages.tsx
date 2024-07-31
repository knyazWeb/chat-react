import { MessageCard } from "@/components";
import TopBar from "@/components/topBar/TopBar";
import { useAppSelector } from "@/hooks";
import { getAllChats } from "@/services";
import { useEffect, useState } from "react";

const Messages = () => {
  const userSession = useAppSelector((state) => state.auth);
  const [chats, setChats] = useState([]);
  useEffect(() => {
    const getUserChats = async () => {
      try {
        const chats = await getAllChats(userSession.userId as string);
        if (chats) {
          setChats(chats.rooms);
        }
      } catch (e) {
        console.error(e);
      }
    };
    getUserChats();
  }, []);

  return (
    <div className="pt-[70px] flex flex-col items-center justify-start pb-[110px]">
      <TopBar>Messages</TopBar>
      <div className="flex flex-col items-center justify-center w-full h-full">
        {chats.length && chats.map((item: any, index) => {
          return (
            <div className="w-full mb-5" key={index}>
              <MessageCard
                name={item.name}
                lastMessage="test test test test test"
                lastMessageTime="21:00"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Messages;
