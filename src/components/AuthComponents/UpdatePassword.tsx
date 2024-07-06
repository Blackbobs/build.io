'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaLock } from "react-icons/fa";
import Loader from '../BasicComponents/Loader/Loader';
import Link from 'next/link';
import { updatePassword } from '@/utils/request/auth';

const UpdatePassword: React.FC = () => {
  const [password,setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const handleUpdatePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await updatePassword(password);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className='w-full md:max-w-[500px] text-white p-2'>
    <div className='my-3'><h1 className='logo_gradient text-2xl font-bold'>build.io</h1></div>
    <form onSubmit={handleUpdatePassword}>
        <div className='flex items-center gap-2'>
            <FaLock size={30}/>
            <h2 className='text-[18px] font-medium capitalize'>Update your password</h2>
        </div>
        <div className="my-3">
                <label className="block capitalize" htmlFor="password">
                  password <sup className="text-red-600">*</sup>
                </label>
                <input
          name='password'
                  className="bg-slate-900 p-2 border border-slate-600 rounded-md focus:outline-none w-full"
                  type="password"
                  placeholder="Enter your new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* <div>
                  {errors.password && (
                    <small className="text-red-500">{`${errors.password.message}`}</small>
                  )}
                </div> */}
              </div>
              <div className="my-5 w-full">
              <button
                disabled
                className="p-2 bg-brand rounded-md capitalize w-full focus:outline-none font-medium"
                type="submit"
              >
                {" "}
                {isLoading ? (
                  <div>
                    <Loader />
                  </div>
                ) : (
                  <span>reset password</span>
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

export default UpdatePassword