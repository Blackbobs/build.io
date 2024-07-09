'use client'
import React from 'react'
import { FcOk } from "react-icons/fc";
import { useRouter } from 'next/navigation';
import { successToast } from '@/utils/Toaster/toast';

const VerifyEmail:React.FC = () => {
  const router = useRouter()
  return (
    <article>
        <div className='text-center leading-8'>
          <FcOk size={70} className='mx-auto' />
            <p className='text-slate-400'>Account created successfully</p>
        <h2 className='text-2xl font-semibold text-white'>Please verify your email</h2>
        <button onClick={() => {
          successToast('Email verified successfully')
          router.replace('/')

        } }  className='bg-brand text-white p-2 m-3 font-medium capitalize rounded cursor-pointer'>verify email</button>
        </div>
    </article>
  )
}

export default VerifyEmail