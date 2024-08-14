import { supabase } from "@/helpers";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { updateAvatar } from "@/store";
import { useRef } from "react";
import toast from "react-hot-toast";

interface CustomInputImageFileProps {
  text: string;
  closeDropdown?: () => void;
}

const CustomInputAvatarFile = ({ text, closeDropdown }: CustomInputImageFileProps) => {
  const userSession = useAppSelector((state) => state.auth);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const toastId = toast.loading("Uploading avatar...");
    const file = event.target.files?.[0];
    if (file) {
      closeDropdown && closeDropdown();

      const objectURL = URL.createObjectURL(file);
      const { data, error } = await supabase.storage.from("avatars").upload(`${userSession.userId}/avatar`, file, {
        upsert: true,
      });
      if (data && !error) {
        dispatch(updateAvatar({ avatarUrl: objectURL }));
      }

      if (error) {
        toast.error("Failed to upload avatar", { id: toastId });
      } else {
        toast.success("Avatar uploaded successfully", { id: toastId });
      }
    }
  };
  return (
    <label className=" cursor-pointer hover:bg-stroke px-2 py-1 rounded-md duration-200 ease-in-out w-full text-start">
      {text}
      <input
        className="hidden"
        type="file"
        multiple={false}
        accept="image/*"
        onChange={handleFileChange}
        ref={fileInputRef}
      />
    </label>
  );
};

export default CustomInputAvatarFile;
