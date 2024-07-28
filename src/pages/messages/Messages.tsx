import { MessageCard } from "@/components";
import TopBar from "@/components/topBar/TopBar";


interface MessagesProps {

}


const Messages = () => {
  return (
    <div className="pt-[70px] flex flex-col items-center justify-start pb-[110px]">
      <TopBar>Messages</TopBar>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <MessageCard
          name="Demid"
          lastMessage="test test test test test"
          lastMessageTime="21:00"
        />
      </div>
    </div>
  );
}

export default Messages