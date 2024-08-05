import { MessageCloud, SendMessageForm, TopBar } from "@/components";
import { useAppDispatch, useAppSelector, useSocket } from "@/hooks";
import { getAllChatMessages, MessageI } from "@/services";
import { changeLastMessage } from "@/store";
import { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";

interface ChatProps {}

const Chat = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const socket = useSocket();
  const userSession = useAppSelector((state) => state.auth);
  const params = useParams();
  const chatId = params.chatId ? +params.chatId : null;
  const allChats = useAppSelector((state) => state.chats);
  const currentChatName = useMemo(() => {
    return allChats.find((chat) => chat.id === chatId)?.name;
  }, [chatId, allChats]);
  const [messages, setMessages] = useState<MessageI[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch()
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "instant", block: "end" });
  };

  useEffect(() => {
    setLoading(true);
    socket?.emit("join", {
      authId: userSession.userId,
      roomId: chatId,
    });

    socket?.on("message", (message: MessageI) => {
      setMessages((currentMessages) => [...currentMessages, message]);
      dispatch(changeLastMessage({ chatId: chatId, lastMessage: message.text }));
    });

    const getHistory = async () => {
      try {
        const historyResponse = await getAllChatMessages(chatId as number);
        setMessages(historyResponse.messages);
      } catch (error) {
        throw new Error("Failed to get messages");
      } finally {
        setLoading(false);
      }
    };
    getHistory();

    return () => {
      socket?.emit("leave", {
        authId: userSession.userId,
        roomId: chatId,
      });
      socket?.off("message");
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (loading) {
    return <div className="text-title">Loading...</div>;
  }
  return (
    <>
      <div
        ref={messagesEndRef}
        className="pt-[70px] flex flex-col items-center justify-start pb-[110px] "
      >
        <TopBar>{currentChatName || "Chat"}</TopBar>
        <div className="flex flex-col gap-4 justify-center w-full h-full">
          {messages.map((message) => (
            <MessageCloud
              key={message.id}
              message={message.text}
              isOwner={message.authId === userSession.userId}
              time={message.createdAt}
            />
          ))}
        </div>
      </div>
      <div className="h-[70px] px-7 flex items-center justify-center bg-white w-full fixed bottom-0 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out z-10 shadow-navBar dark:bg-darkCard dark:shadow-darkNavBar">
        <SendMessageForm roomId={chatId as number} />
      </div>
    </>
  );
};

export default Chat;
