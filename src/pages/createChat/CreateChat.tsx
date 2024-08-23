import { CreateChatForm, TopBar } from "@/components";
import { Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";

const CreateChat = () => {
  const { t } = useTranslation();
  return (
    <div className="pt-[70px] flex flex-col items-center justify-center pb-[110px]">
      <TopBar>{t("Create a new chat")}</TopBar>

      <div className="shadow-lg shadow-slate-300 w-full p-5 flex flex-col items-center justify-start rounded-lg border-t-slate-200 border bg-white dark:bg-darkCard dark:border-none dark:shadow-neutral-600 sm:max-w-[640px] sm:mx-auto">
        <div className="p-8  bg-pblue bg-opacity-15 rounded-full mb-7 dark:bg-opacity-30">
          <Rocket
            className="text-pblue"
            size={64}
          />
        </div>
        <div>
          <p className="text-center text-sm text-title mb-2 dark:text-white">{t("Write friend's email to create a chat")}</p>
        </div>
        <CreateChatForm />
      </div>
    </div>
  );
};

export default CreateChat;
