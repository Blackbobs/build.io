'use client'
import React from 'react'
import { FcOk } from "react-icons/fc";

const VerifyEmail:React.FC = () => {
  return (
    <article>
        <div className='text-center leading-8'>
          <FcOk size={70} className='mx-auto' />
            <p className='text-slate-400'>Account created successfully</p>
        <h2 className='text-2xl font-bold text-white'>An Email verification Link has been sent to your email</h2>
        <button onClick={() => window.location.href = 'mailto:ayodejiayodele350@gmail.com'}  className='bg-brand text-white p-2 m-3 font-medium capitalize rounded'>Check your email</button>
        </div>
    </article>
  )
}

export default VerifyEmail