import { ProfileMainCard, ProfileSettingsCard } from "@/components";
import TopBar from "@/components/topBar/TopBar";

const Profile = () => {
  return (
    <div className="pt-[70px] flex flex-col items-center justify-start pb-[110px] dark:bg-gray-400">
      <TopBar>Profile and Settings</TopBar>
      <ProfileMainCard />
      <ProfileSettingsCard />
    </div>
  );
};

export default Profile;
