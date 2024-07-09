
import React from "react";
import { AllTeamsDisplay, TeamRoom } from "../TeamComponents";
import { Sidebar } from "../SidebarComponents";

export default function Layout() {
 

  return (
    <main>
        <div className="layout">
        <div className="w-full md:max-w-[300px] sticky top-0 left-0 max-h-dvh overflow-y-scroll">
          <Sidebar/>
        </div>

        <div className="hidden md:block flex-1">
          <TeamRoom/>
        </div>
      </div>
    </main>
  );
}
