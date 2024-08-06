import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {Button, Input} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone, UserOutlined} from "@ant-design/icons";
import {regExpEmail} from "@/shared";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {EditFormI} from "@/components";
import toast from "react-hot-toast";
import {useAppSelector} from "@/hooks";


const EditProfileForm = () => {

  const [loading, setLoading] = useState<boolean>(false);
  const userSession = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const {
    control,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm<EditFormI>(
    {
      defaultValues: {
        name: userSession.userName ?? "",
        email: userSession.userEmail ?? "",
        password: "",
      },
    }
  );

  const onSubmit: SubmitHandler<EditFormI> = async (data) => {
    setLoading(true);

    const EditFormData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    try {
      //TODO: create loading state in toast while waiting registration response

    } catch (e) {
      resetField("name");
      resetField("email");
      resetField("password");
      toast.error("Registration was failed");
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
          render={({field}) => (
            <Input
              {...field}
              className="dark:bg-gray-200"
              size="large"
              placeholder="Name"
              prefix={<UserOutlined/>}
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
          render={({field}) => (
            <Input
              className="dark:bg-gray-200"
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
          name="currentPassword"
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
          render={({field}) => (
            <Input.Password
              {...field}
              className="dark:bg-gray-200"
              size="large"
              placeholder="Current password"
              iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
            />
          )}
        />
        {errors.password && <span className="text-blue-500 text-xs">{errors.password.message}</span>}
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
          render={({field}) => (
            <Input.Password
              {...field}
              className="dark:bg-gray-200"
              size="large"
              placeholder="New password"
              iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
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
        Save changes
      </Button>
    </form>
  );
};

export default EditProfileForm;