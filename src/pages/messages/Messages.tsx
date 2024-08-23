import { MessageCard } from "@/components";
import TopBar from "@/components/topBar/TopBar";
import { useAppSelector } from "@/hooks";
import { useTranslation } from "react-i18next";

const Messages = () => {
  const chats = useAppSelector((state) => state.chats);
  const { t } = useTranslation();
  
  return (
    <div className=" pt-[70px] flex flex-col items-center justify-start pb-[110px] sm:max-w-[640px] sm:mx-auto">
      <TopBar>{t("Messages")}</TopBar>
      <div className="flex flex-col items-center justify-center w-full h-full">
        {chats.length &&
          chats.map((item, index) => {
            return (
              <div
                className="w-full mb-5"
                key={index}
              >
                <MessageCard
                  partnerID={item.partnerID}
                  chatId={item.id}
                  name={item.name}
                  lastMessage={item.lastMessage}
                  lastMessageTime="21:00"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Messages;
