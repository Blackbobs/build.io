import React from 'react'
import { IoChatboxOutline,IoChatboxSharp, IoCalendarClearOutline, IoCalendarClearSharp } from "react-icons/io5";
import { IoIosList, IoIosListBox, IoMdSend, IoMdImages } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";

const TeamBottomNav: React.FC = () => {
  const navItems = [
    {
      name: 'chat',
      icon: <IoChatboxOutline size={25}/>,
      iconFill: <IoChatboxSharp size={25}/>
    },
    {
      name: 'task',
      icon: <IoIosList size={25}/>,
      iconFill: <IoIosListBox size={25}/>
    },
    {
      name: 'calendar',
      icon: <IoCalendarClearOutline size={25}/>,
      iconFill: <IoCalendarClearSharp size={25}/>
    },
  ]
  return (
    <nav className='flex items-center justify-between w-full gap-3 border-t-2 border-slate-800 p-2 sticky bottom-0'>
        {
          navItems.map((item, i) => (
            <div key={i} className='flex flex-col items-center gap-2'>
              <button>{item.icon}</button>
              <small className='capitalize text-[18px] font-medium'>{item.name}</small>
            </div>
          ) )
        }
    </nav>
  )
}

export default TeamBottomNav