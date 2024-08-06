import { CustomButton, ProfileAvatar } from "@/components";
import { Pen } from "lucide-react";

const EditAvatarPanel = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="text-title flex items-center gap-2.5 font-medium text-sm">
        <div className="bg-[#EFB7A4] w-3.5 h-5 rounded-sm "></div>
        Avatar
      </div>
      <div className="flex items-center gap-5">
        <div className='shrink-0 w-[70px] h-[70px]'>
          <ProfileAvatar wrapper={false} sizeWidth={70} sizeHeight={70}  />
        </div>

        <div className="w-full ">
          <CustomButton>
            <Pen
              strokeWidth={2.75}
              size={15}
            />
            Edit Avatar
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default EditAvatarPanel;
