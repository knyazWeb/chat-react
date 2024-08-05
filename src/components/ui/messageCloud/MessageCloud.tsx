import avatarD from "/avatar.png";

interface MessageCloudProps {
  isOwner: boolean;
  message: string;
  time: string;
  avatar?: string;
}

const MessageCloud = ({ isOwner, message, time, avatar }: MessageCloudProps) => {
  const messageTime = new Date(time).toLocaleString('ru-RU' ,{ hour: "numeric", minute: "numeric" });
  return (
    <div className={`flex  items-center ${isOwner ? "justify-end" : "justify-end flex-row-reverse"} gap-1.5 w-full`}>
      {/*TODO: ADD TIME DIV */}
      <div className="text-body text-xs dark:text-gray-300">{messageTime}</div>
      <div
        className={`px-4 py-3 text-sm w-fit max-w-[65vw] shadow-md ${
          isOwner
            ? "bg-pblue text-white rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl dark:shadow-gray-800"
            : "bg-white text-title rounded-tr-3xl rounded-tl-3xl rounded-br-3xl dark:bg-darkCard dark:text-white dark:shadow-neutral-700"
        }`}
      >
        {message}
      </div>
      {!isOwner && !avatar && (
        <div className="w-[32px] h-[32px] rounded-full flex-shrink-0 self-end ">
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
