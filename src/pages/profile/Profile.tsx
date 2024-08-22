import { ProfileMainCard, ProfileSettingsCard } from "@/components";
import TopBar from "@/components/topBar/TopBar";
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
