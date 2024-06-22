'use client'
import React, {useState} from "react";
import { IoSearch } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import CreateTeam from "./CreateTeam";

interface Team {
  teamName: string;
  message: string;
}

const AllTeamsDisplay: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const Teams: Team[] = [
    {
      teamName: "Developers",
      message: "I've created a PR",
    },
    {
      teamName: "Designers",
      message: "I just edited the mobile design on figma and I don't know what to do next",
    },
    {
      teamName: "Agile Team",
      message: "Is everyone done with their task",
    },
  ];

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev)
  }


  return (
    <>
      <aside className="p-3">
        <div>
          {Teams.length ? (
            Teams.map((team, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-2 p-2"
              >
                <div className="w-[60px] h-[60px] rounded-full object-cover bg-gray-300"></div>
                <div className="flex-1">
                  <p className="font-medium text-[20px]">{team.teamName}</p>
                  <p className="text-[14px] italic text-gray-500">
                    {team.message.length > 45 ? `${team.message.substring(0, 45)}...` : team.message}
                  </p>
                </div>
                <div>
                  <small className="font-bold text-2xl">...</small>
                </div>
              </div>
            ))
          ) : (
            <div>
              <p className="text-center text-xl font-medium p-3">
                No Teams To Display
              </p>
              <div className="text-center">
                <button disabled={true} className="bg-brand p-3 rounded text-white font-bold cursor-pointer">
                  Create a Team
                </button>
              </div>
            </div>
          )}
        </div>
          {/* Create team CTA */}
        <div className="fixed bottom-10 right-5 bg-brand p-2 rounded-full text-white w-[60px] h-[60px] text-center">
          <button onClick={handleOpenModal} className="flex items-center justify-center w-full h-full font-bold">
            <AiOutlineTeam size={40} />
          </button>
        </div>
      </aside>

          {/* Create team modal */}
      <div className={`${isModalOpen ? 'block bg_overlay duration-1000' : 'hidden duration-1000'} `}>
        <CreateTeam setIsModalOpen={setIsModalOpen} />
      </div>
    </>
  );
};

export default AllTeamsDisplay;
