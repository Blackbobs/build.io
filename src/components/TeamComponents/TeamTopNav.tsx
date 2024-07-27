'use client'
import React from 'react'
import { IoIosCall, IoIosVideocam } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const TeamTopNav = () => {
  const router = useRouter()
  
  return (
    <nav className='flex justify-between p-2 border-b-2 border-[#192a40]'>
      <div className='flex gap-3 flex-1'>
        <button className='cursor-pointer' onClick={() => {
          router.push('/');
          // console.log('clicked')
        }}>
          <FaArrowLeft size={20}/>
        </button>
        <div className='flex gap-3'>
        <div className="w-[50px] h-[50px] rounded-full object-cover bg-gray-300 border-2 border-[#1F2937]"></div>
        <div className='leading-5'>
        <h3 className="font-medium text-[18px]">BuildBridge</h3>
        <small>Emmy, Segatoo, ...</small>
        </div>
        </div>
      </div>
      <div className='flex items-center space-x-3'>
        <button className='text-primary cursor-pointer'>
          <IoIosCall size={30}/>
        </button>
        <button className='text-primary cursor-pointer'>
          <IoIosVideocam size={30}/>
        </button>
        <button className='cursor-pointer'>
          <HiOutlineDotsVertical size={20}/>
        </button>
      </div>
    </nav>
  )
}

export default TeamTopNav