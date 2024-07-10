import { supabase } from "../../supabase/client";
import { userType } from "../types";
import { successToast, errorToast } from "../Toaster/toast";
import { FieldValues } from "react-hook-form";

export async function createUser(data: userType) {
  const { email, password } = data;
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: "http://localhost:3000/verify-email",
      },
    });
    successToast("Account Created Successfully");
    console.log(data, error);
    return { data, error };
  } catch (error) {
    errorToast(error);
    console.log(error);
  }
}

export async function login(data: userType) {
  const { email, password } = data;
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    successToast("Login Successful");
    console.log(data, error);
    return { data, error };
  } catch (error) {
    errorToast(error);
    console.log(error);
  }
}

export async function resetPassword(email: string) {
  try {
    const response = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "/update-password",
    });
    successToast("Reset Code Sent Successfully");
    return response;
  } catch (error) {
    errorToast(error);
    console.log(error);
  }
}

export async function updatePassword(password: string) {
  try {
    const response = await supabase.auth.updateUser({ password });
    successToast("Password Updated  Successfully");
    return response;
  } catch (error) {
    errorToast(error);
    console.log(error);
  }
}

export async function logout() {
  try {
    const { error } = await supabase.auth.signOut({ scope: "local" });
    successToast("Logout successful");
    return error;
  } catch (error) {
    errorToast(error);
    console.log(error);
  }
}
