import React from 'react'
import { IoIosCall, IoIosVideocam } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaArrowLeft } from "react-icons/fa";

const TeamTopNav = () => {
  return (
    <nav className='flex justify-between p-2 border-b-2 border-slate-800'>
      <div className='flex gap-3'>
        <button>
          <FaArrowLeft size={20}/>
        </button>
        <div className='flex gap-3'>
        <div className="w-[50px] h-[50px] rounded-full object-cover bg-gray-300 border-2 border-brand"></div>
        <div className='leading-5'>
        <h3 className="font-medium text-[18px]">BuildBridge</h3>
        <small>Emmy, Segatoo, ...</small>
        </div>
        </div>
      </div>
      <div>
        <button>
          <IoIosCall/>
        </button>
        <button>
          <IoIosVideocam/>
        </button>
        <button>
          <HiOutlineDotsVertical/>
        </button>
      </div>
    </nav>
  )
}

export default TeamTopNav