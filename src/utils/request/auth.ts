import { supabase } from "../../supabase/client";
import { userType } from "../types";
import { successToast, errorToast } from "../Toaster/toast";
import { FieldValues } from "react-hook-form";
import { redirect } from "next/navigation";


// sb-upfolnilgpezclmgwdmi-auth-token

export async function createUser(data: userType) {
  const { username, email, password } = data;
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          username: username,
        },
      },
    });
    if(error){
      errorToast(error.message)
      return
    }
    if(data && !error){
      // localStorage.setItem("token", JSON.stringify(data?.session?.access_token))
      // localStorage.setItem("user", JSON.stringify(data?.user?.user_metadata))
      successToast("Account Created Successfully");
      // redirect('/')
    }
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
    if(error){
      errorToast(error.message)
      return
    }
    if(data && !error){
      // localStorage.setItem("token", JSON.stringify(data?.session?.access_token))
      // localStorage.setItem("user", JSON.stringify(data?.user?.user_metadata))
      successToast("Login Successful");
      // redirect('/')
    }
    
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

export async function getCurrentLoggedInUser() {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  } catch (error) {
    errorToast(error);
    console.log(error);
  }
}
