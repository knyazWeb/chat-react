import { EditFormI, EditFormResponseI, SignupResponseI } from "@/components/forms/interfaces";
import { supabase } from "@/helpers";
import { LoginFormI, SignupFormI } from "@/components";
import axios, { AxiosError } from "axios";
import { AuthTokenResponsePassword } from "@supabase/supabase-js";

export async function loginUser(loginFormData: LoginFormI): Promise<AuthTokenResponsePassword> {
  try {
    const loginData = await supabase.auth.signInWithPassword({
      email: loginFormData.email,
      password: loginFormData.password,
    });
    return loginData;
  } catch {
    throw new Error("SignIn was failed");
  }
}

export async function registrationUser(signupFormData: SignupFormI): Promise<SignupResponseI> {
  try {
    const authResponse = await axios({
      method: "post",
      url: `${import.meta.env.VITE_SERVER_URL}/api/auth/register`,
      data: {
        username: signupFormData.name,
        email: signupFormData.email,
        password: signupFormData.password,
      },
    });
    return authResponse.data;
  } catch {
    throw new Error("Registration was failed");
  }
}

export async function updateUser(currentEmail: string, updateFormData: EditFormI): Promise<EditFormResponseI> {
  try {
    const updateResponse = await axios({
      method: "put",
      url: `${import.meta.env.VITE_SERVER_URL}/api/auth/update`,
      data: {
        currentEmail,
        password: updateFormData.currentPassword,
        username: updateFormData.name,
        email: updateFormData.email,
      },
    });
    return updateResponse.data;
  } catch (error: AxiosError | any) {
    if (error.response?.data?.error) {
      throw new Error(error.response.data.error);
    }
    throw new Error("Update was failed");
  }
}
