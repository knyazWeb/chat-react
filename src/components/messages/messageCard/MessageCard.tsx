import { MessageCardAvatar } from "@/components";


interface MessageCardProps {
  name: string;
  lastMessage: string;
  lastMessageTime: string;
}


const MessageCard = ({name, lastMessage, lastMessageTime}: MessageCardProps) => {
  return (
    <div className="w-full flex p-2 pl-3 justify-between items-center gap-2 shadow-md shadow-slate-300 bg-white border-t-slate-200 rounded-lg cursor-pointer hover:bg-slate-100 duration-200 ease-in-out">
      <div className="flex items-center justify-start gap-2">
        <MessageCardAvatar />
        <div className="flex flex-col justify-center items-start">
          <span className="text-title text-sm">{name}</span>
          <span className="text-body text-xs">{lastMessage}</span>
        </div>
      </div>
    </div>
  );
}

export default MessageCard