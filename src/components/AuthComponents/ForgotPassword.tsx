'use client'
import { resetPassword } from '@/utils/request/auth';
import React, {useState} from 'react'
import { useForm } from 'react-hook-form';
import { FaLock } from "react-icons/fa";
import Loader from '../BasicComponents/Loader/Loader';
import Link from 'next/link';
import { emailType } from '@/utils/types';
import { emailSchema } from '@/utils/schema';
import { zodResolver } from '@hookform/resolvers/zod';

const ForgotPassword: React.FC = () => {
  const [email,setEmail] = useState<emailType>('')
  const [isLoading, setIsLoading] = useState(true)

      const handleResetEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
          const response = await resetPassword(email);
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <section className='w-full md:max-w-[500px] text-white p-2'>
<div className='my-3'><h1 className='logo_gradient text-2xl font-bold'>build.io</h1></div>
<form onSubmit={handleResetEmail}>
    <div className='flex items-center gap-2'>
        <FaLock size={30}/>
        <h2 className='text-[18px] font-medium capitalize'>Reset your password</h2>
    </div>
    <div className="my-3">
            <label className="block capitalize" htmlFor="email">
              email <sup className="text-red-600">*</sup>
            </label>
            <input
              className="bg-slate-900 p-2 border border-slate-600 rounded-md focus:outline-none w-full"
              type="email"
              name='email'
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <div>
              {errors.email && (
                <small className="text-red-500">{`${errors.email.message}`}</small>
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
              <span>send email</span>
            )}
          </button>
          <small className="text-slate-500">
            Don&apos;t have an account?{" "}
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