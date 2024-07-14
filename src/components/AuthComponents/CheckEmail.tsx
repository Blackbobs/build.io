// 'use client'
// import { useRouter } from 'next/navigation'
import React from 'react'
import { FcOk } from 'react-icons/fc'

const CheckEmail = () => {
    // const router = useRouter()
  return (
    <article className='bg-primary p-10 rounded-lg'>
    <div className='text-center leading-8'>
      <FcOk size={70} className='mx-auto' />
        <p className='text-slate-900'>Account created successfully</p>
    <h2 className='text-2xl font-semibold text-slate-900'>Please verify your email</h2>
    {/* <button className='bg-brand text-white p-2 m-3 font-medium capitalize rounded cursor-pointer'>verify email</button> */}
    </div>
</article>
  )
}

export default CheckEmail