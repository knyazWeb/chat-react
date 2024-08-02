import { useAppSelector } from "@/hooks";
import { Input, Button } from "antd";
import { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { SendMessageFormI } from "./interfaces";
import { Send } from "lucide-react";

const SendMessageForm = () => {
  const userSession = useAppSelector((state) => state.auth);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const {
    control,
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm<SendMessageFormI>();

  const onSubmit: SubmitHandler<SendMessageFormI> = async (data) => {
    setLoading(true);
    try {
    } catch (e) {
      toast.error(`${e}`);
      console.error(e);
    }
    setLoading(false);
  };
  return (
    <form
      className="flex"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <input
          type="text"
          {...register("message")}
          className="border-none bg-bg outline-none text-sm"
          placeholder="Type here..."
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`w-fit bg-transparent border-none shadow-none hover:bg-transparent `}
      >
        <Send className="text-pblue" />
      </button>
    </form>
  );
};

export default SendMessageForm;
