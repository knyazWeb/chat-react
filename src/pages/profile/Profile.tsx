import { ProfileMainCard, ProfileSettingsCard, TopBar } from "@/components";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t } = useTranslation();
  return (
    <div className="pt-[70px] flex flex-col items-center justify-start pb-[110px]">
      <TopBar>{t("Profile and Settings")}</TopBar>
      <ProfileMainCard />
      <ProfileSettingsCard />
    </div>
  );
};

export default Profile;
