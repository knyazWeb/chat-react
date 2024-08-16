import { MessageCardAvatar } from "@/components";
import { useNavigate } from "react-router-dom";


interface MessageCardProps {
  name: string;
  lastMessage: string;
  lastMessageTime: string;
  chatId: number;
  partnerID: string;
}


const MessageCard = ({ name, lastMessage, lastMessageTime, chatId, partnerID }: MessageCardProps) => {
  const navigate = useNavigate();

  const navigateUserToChat = () => {
    navigate(`/messages/${chatId}`);
  };
  return (
    <div
      onClick={navigateUserToChat}
      className="w-full flex p-2 pl-3 justify-between items-center gap-2 shadow-md shadow-slate-300 bg-white border-t-slate-200 rounded-lg cursor-pointer hover:bg-slate-100 duration-200 ease-in-out dark:bg-darkCard dark:hover:bg-neutral-700 dark:shadow-neutral-600"
    >
      <div className="flex items-center justify-start gap-2">
        <MessageCardAvatar partnerID={partnerID} />
        <div className="flex flex-col justify-center items-start">
          <span className="text-title text-sm dark:text-white">{name}</span>
          <span className="text-body text-xs dark:text-gray-400">{lastMessage}</span>
        </div>
      </div>
    </div>
  );
};

export default MessageCard