import { MessageCloud, SendMessageForm, TopBar } from "@/components";


interface ChatProps {

}


const Chat = () => {
  return (
    <div className="pt-[70px] flex flex-col items-center justify-start pb-[110px]">
      <TopBar>Messages</TopBar>
      <div className="flex flex-col justify-center w-full h-full">
       <MessageCloud isOwner={false} message="Hello, my name is Demid, What about you?" time="12:02"/>
       <SendMessageForm/>
      </div>
    </div>
  );
}

export default Chat