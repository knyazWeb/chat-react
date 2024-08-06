import TopBar from "../../../components/topBar/TopBar.tsx";
import { EditAvatarPanel, EditInformationPanel } from "@/components";

const Edit = () => {
  return (
    <div className="pt-[70px] flex flex-col items-center justify-start pb-[110px]">
      <TopBar>Edit Profile</TopBar>
      <div className="w-full flex flex-col gap-8">
        <EditAvatarPanel />
        <EditInformationPanel />
      </div>
    </div>
  );
};

export default Edit;
