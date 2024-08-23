import { EditProfileForm } from "@/components";
import { useTranslation } from "react-i18next";

const EditInformationPanel = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col gap-5 sm:max-w-[640px]">
      <div className="text-title flex items-center gap-2.5 font-medium text text-sm dark:text-white">
        <div className="bg-[#A3C2FB] w-3.5 h-5 rounded-sm "></div>
        {t("Personal Information")}
      </div>
      <div className="flex items-center gap-5">
        <EditProfileForm />
      </div>
    </div>
  );
};

export default EditInformationPanel;
