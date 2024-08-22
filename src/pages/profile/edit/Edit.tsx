import { useTranslation } from "react-i18next";
import TopBar from "../../../components/topBar/TopBar.tsx";
import { EditAvatarPanel, EditInformationPanel } from "@/components";

const Edit = () => {
  const { t } = useTranslation();
  return (
    <div className="pt-[70px] flex flex-col items-center justify-start pb-[110px]">
      <TopBar>{t("Edit Profile")}</TopBar>
      <div className="w-full flex flex-col gap-8">
        <EditAvatarPanel />
        <EditInformationPanel />
      </div>
    </div>
  );
};

export default Edit;
