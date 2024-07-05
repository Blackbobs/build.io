import { Toaster } from "react-hot-toast";
import { PropsWithChildren } from "react";

const ToastProvider = ({children}: PropsWithChildren) => {
  return (
    <>
    <Toaster/>
    {children}
    </>
  )
};

export default ToastProvider;
