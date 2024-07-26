import SelectSettingCard from "@/components/ui/selectSettingCard/SelectSettingCard";
import ToggleSettingCard from "@/components/ui/toggleSettingCard/ToggleSettingCard";
import { Clock } from "lucide-react";
import { Languages } from "lucide-react";
import { Eclipse } from "lucide-react";

const ProfileSettingsCard = () => {
  return (
    <div className="w-full shadow-customLight bg-white rounded-2xl p-5 flex flex-col justify-start gap-4">
      <SelectSettingCard
        Image={Clock}
        defaultValue="Default"
        bgColor="bg-pblue bg-opacity-15"
        iconColor="text-pblue"
        children="Timezone"
      />
      <SelectSettingCard
        Image={Languages}
        defaultValue="English"
        bgColor="bg-green bg-opacity-15"
        iconColor="text-green"
        children="Language"
      />
      <ToggleSettingCard
        Image={Eclipse}
        defaultToggleValue={false}
        bgColor="bg-skyblue bg-opacity-15"
        iconColor="text-skyblue"
        children="Dark Mode"
      />
    </div>
  );
};

export default ProfileSettingsCard;
