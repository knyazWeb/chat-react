import avatar from "/avatar.png";
import { useAppSelector } from "@/hooks";

interface ProfileAvatarProps {
  wrapper: boolean;
}

const ProfileAvatar = ({ wrapper }: ProfileAvatarProps) => {
  const userSession = useAppSelector((state) => state.auth);

  return (
    <div
      className={`h-full w-full ${
        wrapper ? "bg-gradient-to-br from-[#AE6DDD] to-[#4E1BB4] p-[3px]" : ""
      } rounded-full select-none  overflow-hidden`}
    >
      <img
        className={` w-full h-full object-fill rounded-full`}
        src={userSession.avatarUrl || avatar}
        alt=""
      />
    </div>
  );
};

export default ProfileAvatar;
