import { SignupResponseI } from "@/components/forms/interfaces";
import { supabase } from "@/helpers";
import { ILoginForm } from "@/pages/login/interfaces";
import { ISignupForm } from "@/pages/registration/interfaces";
import axios from "axios";

export async function loginUser(loginFormData: ILoginForm) {
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

export async function registrationUser(signupFormData: ISignupForm): Promise<SignupResponseI > {
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
