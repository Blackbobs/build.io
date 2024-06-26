"use client";
import React from "react";
import { usePathname } from "next/navigation";
import TeamTopNav from "./TeamTopNav";
import TeamBottomNav from "./TeamBottomNav";
// import workspace from '/workspace.svg'

const NewMember = () => {
  console.log(123);
  return (
    <>
      {/* <img src={workspace} alt="workspace" className='w-[200px] h-[' /> */}
      <p className="text-4xl">Start Collaborating</p>
    </>
  );
};

const TeamRoom = () => {
  const pathname = usePathname();
  // console.log(pathname)

  if (pathname === "/") return <NewMember />;
  return (
    <>
      <div className="relative top-0 bottom-0 right-0 w-full">
        {/* <div>
          <TeamTopNav />
        </div> */}
        <section>
          <h1>TeamRoom</h1>
        </section>
        {/* <div className="w-full relative">
          <TeamBottomNav />
        </div> */}
      </div>
    </>
  );
};

export default TeamRoom;
