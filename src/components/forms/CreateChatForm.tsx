import { regExpEmail } from "@/shared";
import { Button, Input } from "antd";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { CreateChatFormI } from "./interfaces";
import { createChat } from "@/services";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useTranslation } from "react-i18next";
import { fetchChats } from "@/store";

const CreateChatForm = () => {
  const userSession = useAppSelector((state) => state.auth);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
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
      const loginData = await createChat({
        creatorEmail: userSession.userEmail as string,
        friendEmail: createChatFormData.email as string,
      });
      toast.success(t("Chat created successfully"));
      await dispatch(fetchChats(userSession.userId as string));
      navigate("/messages");
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
              className={
                "dark:bg-darkBg dark:text-white dark:placeholder-gray-400 dark:focus:bg-darkBg dark:hover:bg-darkBg dark:active:bg-darkBg dark:selection:bg-gray-300"
              }
              {...field}
              size="large"
              placeholder={t("Friend's email")}
            />
          )}
        />
        {errors.email && <span className="text-blue-500 text-xs">{errors.email.message}</span>}
      </div>
      <Button
        disabled={loading}
        htmlType="submit"
        className={`w-fit mx-auto px-5 mt-3 bg-pblue dark:border-none text-white ${loading ? "opacity-50" : ""}`}
      >
        {t("Create chat")}
      </Button>
    </form>
  );
};

export default CreateChatForm;
