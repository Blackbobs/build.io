import React from 'react'
import { IoCloseCircleOutline, IoCameraOutline } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import Image from 'next/image';

interface CreateTeamProps {
    setIsModalOpen: (isOpen: boolean) => void;
}

const CreateTeam: React.FC<CreateTeamProps> = ({setIsModalOpen}) => {
    const handleCloseModal = () => {
        setIsModalOpen(false)
    }
  return (
    
    <article className='w-full h-full max-w-[500px] flex items-center p-2'>
        <div className='bg-slate-900 p-3 rounded-lg h-fit w-full shadow'>
        <div className='flex items-center justify-between p-3 text-primary'>
            <h1 className='capitalize font-medium text-[22px]'>create a team</h1>
            <button onClick={handleCloseModal}><IoCloseCircleOutline size={35}/></button>
        </div>
        <div className='flex items-center justify-center m-2 flex-col'>
            {/* <Image src='' priority alt="team-logo" className='w-[150px] h-[150px] rounded-full bg-gray-100' /> */}
            <button className='flex items-center justify-center gap-3 capitalize font-medium text-[18px] p-2 text-primary border border-brand rounded-md my-2'><IoCameraOutline size={30}/> <span>upload team logo</span> </button>
        </div>
        <div>
            <form>
            <div>
                <label htmlFor="teamName" className='hidden'>Team Name</label>
                <input type="text" id='teamName' placeholder='Team Name' className='bg-transparent border border-brand rounded-md w-full my-2 p-2 focus:outline-none' />
            </div>
            <div>
                <label htmlFor="description" className='hidden'>Description</label>
                <textarea id='description' placeholder='Team Description' className='bg-transparent border border-brand rounded-md w-full my-2 p-2 focus:outline-none' />
            </div>
            <div>
                <button disabled={true} type="submit" className='flex items-center justify-center gap-3 capitalize font-medium text-[18px] bg-brand p-2 text-white rounded-md w-full my-2 cursor-pointer'><AiOutlineTeam size={30}/> <span>create team</span></button>
            </div>
            </form>
        </div>
        </div>
    </article>
  )
}

export default CreateTeam