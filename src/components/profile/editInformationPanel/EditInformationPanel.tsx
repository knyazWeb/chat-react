import { EditProfileForm } from "@/components";


const EditInformationPanel = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="text-title flex items-center gap-2.5 font-medium text-sm">
        <div className="bg-[#A3C2FB] w-3.5 h-5 rounded-sm "></div>
        Personal Information
      </div>
      <div className="flex items-center gap-5">
        <EditProfileForm />
      </div>
    </div>
  );
};

export default EditInformationPanel;
