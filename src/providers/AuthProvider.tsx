"use client";
import { errorToast } from "@/utils/Toaster/toast";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, PropsWithChildren } from "react";

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [show, setShow] = useState(false);
  const [token, setToken] = useState<string | null>(null); 

  const router = useRouter();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = localStorage.getItem("sb-upfolnilgpezclmgwdmi-auth-token");

        if (response) {
          const parsedResponse = JSON.parse(response);
          if (parsedResponse?.access_token) {
            setToken(parsedResponse.access_token);
          } else {
            console.error("Invalid token format:", parsedResponse);
          }
        } else {
          console.log("No item found in localStorage for sb-upfolnilgpezclmgwdmi-auth-token");
        }
      } catch (error) {
        console.error("Error parsing JSON or fetching token:", error);
      }
    };

    fetchToken();
  }, []); 

  useEffect(() => {
    let route = window.location.pathname;
    if (token !== null) {


      if (token && route === "/login") {
        router.replace("/");
      } 
      // else if (!token && route === "/") {
      //   router.replace("/login");
      //   errorToast("You're not Authorized");
      // }
       else if (token && (route === "/forgot-password" || route === "/update-password" || route === "/signup")) {
        router.replace("/");
      } else {
        setShow(true);
      }
    }else if(!token && route === "/"){
      router.replace("/login");
      errorToast("You're not Authorized");
    }
  }, [token]); 

  return <>{children}</>;
};

export default AuthProvider;
