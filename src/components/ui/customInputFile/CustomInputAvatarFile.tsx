import { supabase } from "@/helpers";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { updateAvatar } from "@/store";
import { useRef } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

interface CustomInputImageFileProps {
  text: string;
  closeDropdown?: () => void;
}

const CustomInputAvatarFile = ({ text, closeDropdown }: CustomInputImageFileProps) => {
  const userSession = useAppSelector((state) => state.auth);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const {t} = useTranslation();

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const toastId = toast.loading(t("Uploading avatar..."));
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
        toast.error(t("Failed to upload avatar"), { id: toastId });
      } else {
        toast.success(t("Avatar uploaded successfully"), { id: toastId });
      }
    }
  };
  return (
    <label className=" cursor-pointer hover:bg-stroke px-2 py-1 rounded-md duration-200 ease-in-out w-full text-start dark:hover:bg-zinc-600">
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
