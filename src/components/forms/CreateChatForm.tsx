import { regExpEmail } from "@/shared";
import { Button, Input } from "antd";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { CreateChatFormI } from "./interfaces";
import { createChat } from "@/services";
import { useAppSelector } from "@/hooks";

const CreateChatForm = () => {
  const userSession = useAppSelector((state) => state.auth);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const {
    control,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateChatFormI>();

  const onSubmit: SubmitHandler<CreateChatFormI> = async (data) => {
    setLoading(true);
    const createChatFormData = {
      email: data.email,
    };
    try {
      const loginData = createChat({
        creatorEmail: userSession.userEmail as string,
        friendEmail: createChatFormData.email as string,
      });
      //FIXME: вылазит положительный результат даже когда ответ с ошибкой
      //TODO: нужно обработать когда такая комната уже существует
      toast.success("Chat created successfully");
      navigate("/");
    } catch (e) {
      resetField("email");
      toast.error(`${e}`);
      console.error(e);
    }
    setLoading(false);
  };
  return (
    <form
      className="flex flex-col gap-3 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: regExpEmail,
              message: "Invalid email",
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              size="large"
              placeholder="Friend's email"
            />
          )}
        />
        {errors.email && <span className="text-blue-500 text-xs">{errors.email.message}</span>}
      </div>

      <Button
        disabled={loading}
        htmlType="submit"
        className="w-fit mx-auto px-5 mt-3 bg-pblue text-white"
      >
        Create chat
      </Button>
    </form>
  );
};

export default CreateChatForm;
