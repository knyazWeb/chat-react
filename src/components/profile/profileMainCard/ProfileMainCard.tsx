import { CustomButton, ProfileAvatar } from "@/components";
import { useAppSelector } from "@/hooks";
import { Pen } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ProfileMainCard = () => {
  const { userName, userEmail } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div
      className="w-full shadow-customLight bg-white rounded-2xl pt-10 px-5 pb-5 flex flex-col items-center justify-start
      mb-4 dark:bg-darkCard dark:shadow-darkCustomLight sm:max-w-[640px]"
    >
      <div className="mb-4 w-[85px] h-[85px]">
        <ProfileAvatar wrapper={true} />
      </div>
      <div className="text-title text-xl font-semibold dark:text-white">{userName}</div>
      <div className="text-secondary text-xs brightness-90 mb-5 dark:text-gray-200">{userEmail}</div>
      <div className="flex justify-center w-full">
        <CustomButton
          type="button"
          onClick={() => navigate("edit")}
        >
          <Pen
            strokeWidth={2.75}
            size={15}
          />
          {t("Edit Profile")}
        </CustomButton>
      </div>
    </div>
  );
};

export default ProfileMainCard;
