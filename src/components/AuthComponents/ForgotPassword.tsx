'use client'
import { resetPassword } from '@/utils/request/auth';
import React from 'react'
import { useForm } from 'react-hook-form';
import { FaLock } from "react-icons/fa";
import Loader from '../BasicComponents/Loader/Loader';
import Link from 'next/link';

const ForgotPassword: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
      } = useForm();

    //   const handleResetEmail = async (data) => {
    //     try {
    //       const response = await resetPassword(data);
    //       console.log(response);
    //       reset();
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
  return (
    <section className='w-full md:max-w-[500px] text-white p-2'>
<div className='my-3'><h1 className='logo_gradient text-2xl font-bold'>build.io</h1></div>
<form>
    <div className='flex items-center gap-3'>
        <FaLock className='text-brand' size={30}/>
        <h2 className='text-[18px] font-medium capitalize'>Reset your password</h2>
    </div>
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
          <div className="my-5 w-full">
          <button
            disabled
            className="p-2 bg-brand rounded-md capitalize w-full focus:outline-none font-medium"
            type="submit"
          >
            {" "}
            {isSubmitting ? (
              <div>
                <Loader />
              </div>
            ) : (
              <span>send email</span>
            )}
          </button>
          <small className="text-slate-500">
            Don't have an account?{" "}
            <Link className="text-secondary font-medium" href={"/signup"}>
              signup
            </Link>
          </small>
        </div>
</form>
    </section>
  )
}

export default ForgotPassword