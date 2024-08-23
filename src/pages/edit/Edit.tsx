import { useTranslation } from "react-i18next";
import { EditAvatarPanel, EditInformationPanel, TopBar } from "@/components";

const Edit = () => {
  const { t } = useTranslation();
  return (
    <div className="pt-[70px] flex flex-col items-center justify-start pb-[110px]">
      <TopBar>{t("Edit Profile")}</TopBar>
      <div className="w-full flex flex-col gap-8 items-center justify-start">
        <EditAvatarPanel />
        <EditInformationPanel />
      </div>
    </div>
  );
};

export default Edit;
