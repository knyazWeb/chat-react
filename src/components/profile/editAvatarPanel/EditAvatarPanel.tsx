import { CustomButton, CustomInputAvatarFile, DropdownMenu, ProfileAvatar } from "@/components";
import { useOnClickOutside } from "@/hooks";
import { Pen } from "lucide-react";
import { useRef, useState } from "react";

const EditAvatarPanel = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
   
  useOnClickOutside(dropdownRef, () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  });
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="text-title flex items-center gap-2.5 font-medium text-sm">
        <div className="bg-[#EFB7A4] w-3.5 h-5 rounded-sm "></div>
        Avatar
      </div>
      <div className="flex items-center gap-5">
        <div className="shrink-0 w-[70px] h-[70px]">
          <ProfileAvatar
            wrapper={false}
         
          />
        </div>

        <div
          className="w-full relative"
          ref={dropdownRef}
        >
          <CustomButton
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            type="button"
          >
            <Pen
              strokeWidth={2.75}
              size={15}
            />
            Edit Avatar
          </CustomButton>
          <DropdownMenu
            isDropdownActive={isDropdownOpen}
            setIsDropdownActive={setIsDropdownOpen}
          >
            <button className="hover:bg-stroke px-2 py-1 rounded-md duration-200 ease-in-out w-full text-start">
              Delete Avatar
            </button>
            <CustomInputAvatarFile closeDropdown={() => setIsDropdownOpen(false)} text="Upload Avatar" />
            <button className="hover:bg-stroke px-2 py-1 rounded-md duration-200 ease-in-out w-full text-start">
              Take a Photo
            </button>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default EditAvatarPanel;
