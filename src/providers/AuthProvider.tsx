"use client";
import { errorToast } from "@/utils/Toaster/toast";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, PropsWithChildren } from "react";

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  let func = async () => {
    let route: any = window.location.pathname;
    let token = localStorage.getItem("token");
    // console.log(route);

    if (token && route === "/login") {
      // setShow(true);
      router.replace("/");
    } else if (!token && route === "/") {
      router.replace("/login");
      errorToast("You're not Authorized");
    } else if (token && route === "/forgot-password") {
      router.replace("/");
      // errorToast('You\'re not Authorized');
    } else if (token && route === "/update-password") {
      router.replace("/");
      // errorToast('You\'re not Authorized');
    } else if (token && route === "/signup") {
      router.replace("/");
      // errorToast('You\'re not Authorized');
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    func();
  }, []); // Re-run func on route changes

  return <>{children}</>;
};

export default AuthProvider;
