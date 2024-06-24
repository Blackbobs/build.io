import React from 'react'
import { RxAvatar } from "react-icons/rx";

const Nav: React.FC = () => {
  return (
    <nav className='nav shadow-md'>
        <h1 className='logo_gradient text-2xl font-bold'>build.io</h1>
        <div className='flex items-center gap-3'>
        {/* <button className='bg-brand text-white capitalize p-2 rounded font-medium text-xl'>donate</button> */}
        {/* user profile */}
        <button className='text-brand'>
        <RxAvatar size={40}/>
        </button>
        </div>
    </nav>
  )
}

export default Nav