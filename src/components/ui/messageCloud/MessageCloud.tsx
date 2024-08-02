import avatarD from "/avatar.png";

interface MessageCloudProps {
  isOwner: boolean;
  message: string;
  time?: string;
  avatar?: string;
}

const MessageCloud = ({ isOwner, message, time, avatar }: MessageCloudProps) => {
  return (
    <div className={`flex  items-center ${isOwner ? "justify-end" : "justify-end flex-row-reverse"} gap-1.5 w-full`}>
      {/*TODO: ADD TIME DIV */}
      <div className="text-body text-xs">12:02</div>
      <div
        className={`px-4 py-3 text-sm w-full max-w-[65vw] shadow-md ${
          isOwner
            ? "bg-pblue text-white rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl"
            : "bg-white text-title rounded-tr-3xl rounded-tl-3xl rounded-br-3xl"
        }`}
      >
        {message}
      </div>
      {!isOwner && !avatar && (
        <div className="w-[32px] h-[32px] rounded-full flex-shrink-0 self-end">
          <img
            src={avatarD}
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default MessageCloud;
