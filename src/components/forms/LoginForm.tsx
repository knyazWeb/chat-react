import { ILoginForm } from "@/pages/login/interfaces";
import { regExpEmail } from "@/shared/regExp/regExpEmail";
import { Input, Button } from "antd";
import { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { supabase } from "@/helpers/supabaseClient";
import { useAppDispatch } from "@/hooks/redux";
import { login } from "@/store/slices/authSlice";

const LoginForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    control,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();

  const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
    setLoading(true);

    const loginFormData = {
      email: data.email,
      password: data.password,
    };
    console.log("loginFormData", loginFormData);
    await loginUser(loginFormData);
    setLoading(false);
  };

  async function loginUser(loginFormData: ILoginForm) {
    const loginData = await supabase.auth.signInWithPassword({
      email: loginFormData.email,
      password: loginFormData.password,
    });
    if (loginData.error) {
      toast.error(loginData.error.message);
      resetField("email");
      resetField("password");
    } else if (loginData.data.user.id && loginData.data.user.email && loginData.data.user.user_metadata.first_name) {
      dispatch(login({
        userId: loginData.data.user.id,
        userEmail: loginData.data.user.email,
        userName: loginData.data.user.user_metadata.full_name,
        isAuth: true,
      }));
      toast.success("User logged in successfully");
      navigate("/", {replace: true});
    }
  }

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
              placeholder="Email"
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
              placeholder="Password"
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          )}
        />
        {errors.password && <span className="text-blue-500 text-xs">{errors.password.message}</span>}
      </div>

      <Button
        disabled={loading}
        htmlType="submit"
        className="w-fit mx-auto px-5 mt-3"
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
