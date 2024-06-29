import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <section className='w-full md:max-w-[500px] text-white p-2'>
        <div className='my-3'><h1 className='logo_gradient text-2xl font-bold'>build.io</h1></div>
        <form>
            <div className='leading-5 my-3'>
                <h2 className='mt-3 font-medium'>Welcome back</h2>
                <small className='text-slate-500'>Start collaborating today with your team</small>
            </div>
            <div>
                
                <div className='my-3'>
                    <label className='block capitalize' htmlFor="email">email <sup className='text-red-600'>*</sup></label>
                    <input className='bg-slate-900 p-2 border border-slate-600 rounded-md focus:outline-none w-full' type="email" placeholder='email' />
                </div>
                <div className='my-3'>
                    <label className='block capitalize' htmlFor="password">password <sup className='text-red-600'>*</sup></label>
                    <input className='bg-slate-900 p-2 border border-slate-600 rounded-md focus:outline-none w-full' type="password" placeholder='password' />
                </div>
            </div>
            <div className='my-5 w-full'>
                <button disabled className='p-2 bg-brand rounded-md capitalize w-full focus:outline-none font-medium' type="submit">login</button>
                <small className='text-slate-500'>Don't have an account? <Link className='text-secondary font-medium' href={'/signup'}>signup</Link></small>
            </div>
           
        </form>
    </section>
  )
}

export default Login