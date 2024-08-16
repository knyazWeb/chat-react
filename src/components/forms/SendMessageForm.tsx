import { useAppSelector, useSocket } from "@/hooks";
import { Input } from "antd";
import { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import { SendMessageFormI } from "./interfaces";
import { Send } from "lucide-react";

interface SendMessageFormProps {
  roomId: number;
}

const SendMessageForm = ({roomId}: SendMessageFormProps) => {
  const userSession = useAppSelector((state) => state.auth);
  const [loading, setLoading] = useState<boolean>(false);
  const socket = useSocket();
  const { control, resetField, handleSubmit } = useForm<SendMessageFormI>();

  const onSubmit: SubmitHandler<SendMessageFormI> = async (data) => {
    setLoading(true);
    resetField("message");
    try {
      socket?.emit("sendMessage", {
        text: data.message,
        roomId: roomId,
        authId: userSession.userId,
      });
    } catch (e) {
      toast.error(`${e}`);
      console.error(e);
    }
    setLoading(false);
  };
  return (
    <form
      className="flex w-full justify-center gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full">
        <Controller
          name="message"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <Input
              {...field}
              className="text-title text-sm w-full selection:text-title selection:bg-gray-200 active:bg-bg placeholder:text-sm hover:bg-bg  focus:bg-bg  py-1.5 px-3 rounded-xl bg-bg dark:bg-darkBg dark:text-white dark:placeholder-gray-400 dark:focus:bg-darkBg dark:hover:bg-darkBg dark:active:bg-darkBg dark:selection:bg-gray-300"
              autoComplete="off"
              placeholder="Type here..."
            />
          )}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`w-fit bg-transparent border-none shadow-none hover:bg-transparent `}
      >
        <Send
          className="text-pblue hover:brightness-90 duration-200 ease-in-out"
          size={20}
          strokeWidth={2.5}
        />
      </button>
    </form>
  );
};

export default SendMessageForm;
