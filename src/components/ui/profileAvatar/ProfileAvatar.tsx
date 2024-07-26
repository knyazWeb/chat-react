import avatar from "/avatar.png";

interface ProfileAvatarProps {}

const ProfileAvatar = () => {
  return (
    <div className="relative bg-gradient-to-br  from-[#AE6DDD] to-[#4E1BB4] p-[3px] rounded-full select-none w-[85px] h-[85px]">
      <div>
        <img
        className="w-full h-full"
          src={avatar}
          alt=""
        />
      </div>
    </div>
  );
};

export default ProfileAvatar;
