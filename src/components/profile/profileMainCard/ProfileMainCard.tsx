import CustomButton from "@/components/ui/customButton/CustomButton";
import ProfileAvatar from "@/components/ui/profileAvatar/ProfileAvatar";
import { useAppSelector } from "@/hooks/redux";
import { Pen } from "lucide-react";
interface ProfileMainCardProps {}

const ProfileMainCard = () => {
  const { userName, userEmail } = useAppSelector((state) => state.auth);
  return (
    <div
      
      className="w-full shadow-customLight bg-white rounded-2xl pt-10 px-5 pb-5 flex flex-col items-center justify-start"
    >
      <div className="mb-4">
        <ProfileAvatar />
      </div>
      <div className="text-title text-xl font-semibold">{userName}</div>
      <div className="text-secondary text-xs brightness-90 mb-5">{userEmail}</div>
      <div className="w-full">
        <CustomButton>
          <Pen
            strokeWidth={2.75}
            size={15}
          />
          Edit Profile
        </CustomButton>
      </div>
    </div>
  );
};

export default ProfileMainCard;
