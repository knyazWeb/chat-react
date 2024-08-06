import avatar from "/avatar.png";

interface ProfileAvatarProps {
  wrapper: boolean;
  sizeWidth: number;
  sizeHeight: number;
}

const ProfileAvatar = ({ wrapper, sizeHeight, sizeWidth }: ProfileAvatarProps) => {
  return (
    <div
      className={`relative ${wrapper ? "bg-gradient-to-br from-[#AE6DDD] to-[#4E1BB4] p-[3px]" : ""} rounded-full select-none w-[${sizeWidth}px] h-[${sizeHeight}px]`}
    >
      <div>
        <img
          className="w-full h-full rounded-full"
          src={avatar}
          alt=""
        />
      </div>
    </div>
  );
};

export default ProfileAvatar;
