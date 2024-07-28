import { MessageCardAvatar } from "@/components";


interface MessageCardProps {
  name: string;
  lastMessage: string;
  lastMessageTime: string;
}


const MessageCard = ({name, lastMessage, lastMessageTime}: MessageCardProps) => {
  return (
    <div className="w-full flex justify-between items-center gap-2">
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