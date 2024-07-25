import { Button, Input } from "antd";
import { UserOutlined, EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ISignupForm } from "@/pages/registration/interfaces";
import { regExpEmail } from "@/shared/regExp/regExpEmail";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { registrationUser } from "@/services/authService";

const RegistrationForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const {
    control,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignupForm>();

  const onSubmit: SubmitHandler<ISignupForm> = async (data) => {
    setLoading(true);

    const signupFormData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    try {
      const signupData = await registrationUser(signupFormData);
      if (signupData.error) {
        toast.error(signupData.error.message);
        resetField("email");
        resetField("password");
      } else if (signupData.data.user) {
        toast.success("User created successfully");
        navigate("/login");
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
          name="name"
          control={control}
          rules={{
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Min length is 3 characters",
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              size="large"
              placeholder="Name"
              prefix={<UserOutlined />}
            />
          )}
        />
        {errors.name && <span className="text-blue-500 text-xs">{errors.name.message}</span>}
      </div>
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
        className="w-fit mx-auto px-5 mt-3 bg-pblue text-white"
      >
        Registration
      </Button>
    </form>
  );
};

export default RegistrationForm;
