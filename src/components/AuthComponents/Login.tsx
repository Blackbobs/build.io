"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { login } from "@/utils/request/auth";
import { userSchema } from "@/utils/schema";
import { userType } from "@/utils/types";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import Loader from "../BasicComponents/Loader/Loader";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<userType>({
    resolver: zodResolver(userSchema),
  });

  const handleLogin = async (data: userType) => {
    try {
      console.log(123)
      const response = await login(data);
      console.log(response);
      reset();
      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full md:max-w-[500px] text-white p-2">
      <div className="my-3">
        <h1 className="logo_gradient text-2xl font-bold">build.io</h1>
      </div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="leading-5 my-3">
          <h2 className="mt-3 font-medium">Welcome back</h2>
          <small className="text-slate-500">
            Start collaborating with your team today
          </small>
        </div>
        <div>
          <div className="my-3">
            <label className="block capitalize" htmlFor="email">
              email <sup className="text-red-600">*</sup>
            </label>
            <input
              {...register("email")}
              className="bg-slate-900 p-2 border border-slate-600 rounded-md focus:outline-none w-full"
              type="email"
              placeholder="email"
            />
            <div>
              {errors.email && (
                <small className="text-red-500">{`${errors.email.message}`}</small>
              )}
            </div>
          </div>
          <div className="my-3">
            <label className="block capitalize" htmlFor="password">
              password <sup className="text-red-600">*</sup>
            </label>
            <input
              {...register("password")}
              className="bg-slate-900 p-2 border border-slate-600 rounded-md focus:outline-none w-full"
              type="password"
              placeholder="password"
            />
            <div>
              {errors.password && (
                <small className="text-red-500">{`${errors.password.message}`}</small>
              )}
            </div>
            <small>
              <Link
                className="text-primary mx-2 my-5"
                href={"/forgot-password"}
              >
                forgot password?
              </Link>
            </small>
          </div>
        </div>
        <div className="my-5 w-full">
          <button className="p-2 bg-brand rounded-md capitalize w-full focus:outline-none font-medium text-center cursor-pointer">
            {" "}
            {isSubmitting ? (
              <div>
                <Loader />
              </div>
            ) : (
              <span>login</span>
            )}
          </button>
          <small className="text-slate-500 my-5">
            Don&apos;t have an account?{" "}
            <Link className="text-secondary font-medium my-3" href={"/signup"}>
              signup
            </Link>
          </small>
        </div>
      </form>
    </section>
  );
};

export default Login;
