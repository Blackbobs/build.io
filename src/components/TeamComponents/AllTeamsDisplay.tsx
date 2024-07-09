'use client'
import React, {useState} from "react";
import { IoSearch } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import CreateTeam from "./CreateTeam";
import Link from "next/link";

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
      <section className="w-full h-full">
        <div>
          {Teams.length ? (
            Teams.map((team, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-2 p-2"
              >
                <div className="w-[45px] h-[45px] rounded-full object-cover bg-gray-200"></div>
                <Link href={`/${i}/chat`} className="flex-1 leading-5">
                  <p className="font-medium text-[15px]">{team.teamName}</p>
                  <small className="italic text-gray-400 text-[10px]">
                    {team.message.length > 35 ? `${team.message.substring(0, 35)}...` : team.message}
                  </small>
                </Link>
              </div>
            ))
          ) : (
            <div>
              <p className="text-center text-xl font-medium p-3">
                Oops, seems you are new...
              </p>
              <div className="text-center">
                <button onClick={handleOpenModal} className="bg-brand p-3 rounded text-white font-bold cursor-pointer">
                  Create a Team
                </button>
              </div>
            </div>
          )}
        </div>
          {/* Create team CTA */}
          
        <div className="sticky bottom-3 right-0 ml-auto m-2 bg-brand p-2 rounded-full text-white w-[50px] h-[50px] text-center">
          <button onClick={handleOpenModal} className="flex items-center justify-center w-full h-full font-bold">
            <AiOutlineTeam size={40} />
          </button>
        </div>
      </section>

          {/* Create team modal */}
      <div className={`${isModalOpen ? 'block bg_overlay duration-1000 flex items-center justify-center' : 'hidden duration-1000'} `}>
        <CreateTeam setIsModalOpen={setIsModalOpen} />
      </div>
    </>
  );
};

export default AllTeamsDisplay;
