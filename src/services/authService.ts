import { SignupResponseI } from "@/components/forms/interfaces";
import { supabase } from "@/helpers";
import { LoginFormI, SignupFormI } from "@/components";
import axios from "axios";

export async function loginUser(loginFormData: LoginFormI) {
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
