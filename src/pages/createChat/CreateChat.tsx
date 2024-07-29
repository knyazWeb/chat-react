import { CreateChatForm, TopBar } from "@/components";
import { Rocket } from "lucide-react";
interface CreateChatProps {}

const CreateChat = () => {
  return (
    <div className="pt-[70px] flex flex-col items-center justify-center pb-[110px]">
      <TopBar>Create a new chat</TopBar>

      <div className="shadow-lg shadow-slate-300 w-full p-5 flex flex-col items-center justify-start rounded-lg border-t-slate-200 border bg-white">
        <div className="p-8  bg-pblue bg-opacity-15 rounded-full mb-7">
          <Rocket
            className="text-pblue"
            size={64}
          />
        </div>
        <div>
          <p className="text-center text-sm text-title mb-2">Write friend's email to create a chat</p>
        </div>
        <CreateChatForm />
      </div>
    </div>
  );
};

export default CreateChat;
