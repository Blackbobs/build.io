"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {useRouter} from 'next/navigation'
import { createUser } from "../../utils/request/auth";
import { userSchema } from "@/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { userType } from "@/utils/types";
import Loader from "../BasicComponents/Loader/Loader";
import { successToast, errorToast } from "@/utils/Toaster/toast";


const CreateAccount: React.FC = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<userType>({
    resolver: zodResolver(userSchema),
  });

  const handleSignUp = async (data: userType) => {
    try {
      const response = await createUser(data);
      console.log(response);
      reset();
      if(response?.data?.user){
        router.replace('/')
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full md:max-w-[500px] text-white p-2">
      <div className="my-3">
        <h1 className="logo_gradient text-2xl font-bold">build.io</h1>
      </div>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <div className="leading-5 my-3">
          <h2 className="mt-3 font-medium">Create your account</h2>
          <small className="text-slate-500">
            Start collaborating today - Sign up now for early access
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
          </div>
          <div className="my-3">
            <label className="block capitalize" htmlFor="username">
              username <sup className="text-red-600">*</sup>{" "}
            </label>
            <input
              {...register("username")}
              className="bg-slate-900 p-2 border border-slate-600 rounded-md focus:outline-none w-full"
              type="text"
              placeholder="username"
            />
          </div>
        </div>
        <div className="my-5 w-full">
          <button type="submit" className="p-2 bg-brand rounded-md capitalize w-full h-full focus:outline-none font-medium text-center cursor-pointer">
            {/* <Loader/> */}
            {isSubmitting ? (
              <div>
                <Loader />
              </div>
            ) : (
              <span>start collaborating</span>
            )}
          </button>
          <small className="text-slate-500 my-5">
            Already have an account?{" "}
            <Link className="text-secondary font-medium" href={"/login"}>
              login
            </Link>
          </small>
        </div>
      </form>

    </section>
  );
};

export default CreateAccount;
