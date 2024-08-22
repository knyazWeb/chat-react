import { Input, Button } from "antd";
import { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { loginUser } from "@/services";
import { regExpEmail } from "@/shared";
import { LoginFormI } from "./interfaces";
import { useTranslation } from "react-i18next";

const LoginForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const {
    control,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormI>();

  const onSubmit: SubmitHandler<LoginFormI> = async (data) => {
    setLoading(true);
    const loginFormData = {
      email: data.email,
      password: data.password,
    };
    try {
      const loginData = await loginUser(loginFormData);
      if (loginData.error) {
        toast.error(loginData.error.message);
        resetField("email");
        resetField("password");
      } else if (loginData.data.user) {
        toast.success(t("User logged in successfully"));
        navigate("/", { replace: true });
      }
    } catch (e) {
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
              className="dark:bg-gray-200"
              {...field}
              size="large"
              placeholder={t("Email")}
            />
          )}
        />
        {errors.email && <span className="text-blue-500 text-xs">{errors.email.message}</span>}
      </div>
      <div>
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Min length is 6 characters",
            },
            maxLength: {
              value: 20,
              message: "Max length is 32 characters",
            },
          }}
          render={({ field }) => (
            <Input.Password
              {...field}
              size="large"
              className="dark:bg-gray-200"
              autoComplete="password"
              placeholder={t("Password")}
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          )}
        />
        {errors.password && <span className="text-blue-500 text-xs">{errors.password.message}</span>}
      </div>

      <Button
        disabled={loading}
        htmlType="submit"
        className="w-fit mx-auto px-5 mt-3 bg-pblue text-white dark:border-none"
      >
        {t("Login")}
      </Button>
    </form>
  );
};

export default LoginForm;
