import { useEffect, useState } from "react";
import avatar from "/avatar.png";
import { supabase } from "@/helpers";

interface MessageCardAvatarProps {
  partnerID: string;
}

const MessageCardAvatar = ({ partnerID }: MessageCardAvatarProps) => {
  const [partnerAvatarUrl, setPartnerAvatarUrl] = useState<string | null>(null);
  useEffect(() => {
    const fetchPartnerAvatar = async () => {
      const { data: avatarData } = await supabase.storage
        .from("avatars")
        .download(`${partnerID}/avatar`);
      setPartnerAvatarUrl(avatarData ? URL.createObjectURL(avatarData) : null);
    };

    fetchPartnerAvatar();
  }, []);
  return (
    <div className="rounded-full select-none w-[50px] h-[50px] ">
      <img
        className="w-full h-full rounded-full"
        src={partnerAvatarUrl || avatar}
        alt=""
      />
    </div>
  );
};

export default MessageCardAvatar;
