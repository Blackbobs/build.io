"use client";
import { errorToast } from "@/utils/Toaster/toast";
import { useRouter } from "next/navigation";
import React, {
  useEffect,
  useState,
  PropsWithChildren,
  useLayoutEffect,
} from "react";
import { getCurrentLoggedInUser } from "@/utils/request/auth";
import { User } from "@supabase/supabase-js";

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [show, setShow] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User>();
  const router = useRouter();

  useEffect(() => {
    // const fetchToken = async () => {
    //   try {
    //     // const user = await getCurrentLoggedInUser()
    //     const response = localStorage.getItem(
    //       "sb-upfolnilgpezclmgwdmi-auth-token"
    //     );

    //     if (response) {
    //       const parsedResponse = await JSON.parse(response);
    //       if (parsedResponse?.access_token) {
    //         setToken(parsedResponse.access_token);
    //       } else {
    //         console.error("Invalid token format:", parsedResponse);
    //       }
    //     } else {
    //       console.log(
    //         "No item found in localStorage for sb-upfolnilgpezclmgwdmi-auth-token"
    //       );
    //     }
    //   } catch (error) {
    //     console.error("Error parsing JSON or fetching token:", error);
    //   }
    // };

    // fetchToken();

    const fetchUser = async () => {
      const userDetails = await getCurrentLoggedInUser();
      if (userDetails) {
        setUser(userDetails);
        // console.log(userDetails)
      } else {
        console.error("Invalid user data:", userDetails);
      }
    };

    fetchUser()
  }, []);

  useEffect(() => {
    const checkAuth = async () => {
      let route = window.location.pathname;
      if (user !== null) {
        if (user && route === "/login") {
          router.replace("/");
        }
        else if (
          user &&
          (route === "/forgot-password" ||
            route === "/update-password" ||
            route === "/signup")
        ) {
          router.replace("/");
        } else {
          setShow(true);
        }
      } else if (!user && route === "/") {
        router.replace("/login");
        errorToast("You're not Authorized");
      }
    }

    checkAuth()
  }, [user]);

  return <>{children}</>;
};

export default AuthProvider;
