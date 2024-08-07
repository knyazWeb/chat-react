import { CustomButton, ProfileAvatar } from "@/components";
import { useAppSelector } from "@/hooks";
import { Pen } from "lucide-react";
import { useNavigate } from "react-router-dom";
interface ProfileMainCardProps {}

const ProfileMainCard = () => {
  const { userName, userEmail } = useAppSelector((state) => state.auth);
  const navigate = useNavigate()
  return (
    <div
      
      className="w-full shadow-customLight bg-white rounded-2xl pt-10 px-5 pb-5 flex flex-col items-center justify-start
      mb-4 dark:bg-darkCard dark:shadow-darkCustomLight"
    >
      <div className="mb-4">
        <ProfileAvatar wrapper={true} sizeWidth={85} sizeHeight={85} />
      </div>
      <div className="text-title text-xl font-semibold dark:text-white">{userName}</div>
      <div className="text-secondary text-xs brightness-90 mb-5 dark:text-gray-200">{userEmail}</div>
      <div className="w-full">
        <CustomButton type="button" onClick={() => navigate('edit')}>
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
