import avatar from "/avatar.png";

const MessageCardAvatar = () => {
  return (
    <div className="rounded-full select-none w-[50px] h-[50px]">
      <img
        className="w-full h-full rounded-full"
        src={avatar}
        alt=""
      />
    </div>
  );
};

export default MessageCardAvatar;
