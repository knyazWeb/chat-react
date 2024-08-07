import { supabase } from "@/helpers";
import { useAppSelector } from "@/hooks";
import { useRef } from "react";

interface CustomInputImageFileProps {
  text: string;
}

const CustomInputAvatarFile = ({ text }: CustomInputImageFileProps) => {
  const userSession = useAppSelector((state) => state.auth);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log(file);

      const { data, error } = await supabase.storage.from("avatars").upload(`${userSession.userId}/avatar`, file, {
        upsert: true,
      });

      if (error) {
        console.error("Error uploading file:", error);
      } else {
        console.log("File uploaded successfully:", data);
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
