import { supabase } from "@/helpers/supabaseClient";
import { ILoginForm } from "@/pages/login/interfaces";
import { ISignupForm } from "@/pages/registration/interfaces";

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

export async function registrationUser(signupFormData: ISignupForm) {
  try {
    const authData = await supabase.auth.signUp({
      email: signupFormData.email,
      password: signupFormData.password,
      options: {
        data: {
          first_name: signupFormData.name,
        },
      },
    });
    return authData;
  } catch {
    throw new Error("Registration was failed");
  }
}
