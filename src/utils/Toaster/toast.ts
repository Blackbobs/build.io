import toast from "react-hot-toast";

export const successToast = (message: string) => {
  toast.success(message || "success");
};

export const errorToast = (message: string | any) => {
  toast.error(message || "An error occurred");
};
