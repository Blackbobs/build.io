import React from "react";
import { AllTeamsDisplay } from "../TeamComponents";
import { Nav } from "../NavComponents";

const Sidebar: React.FC = () => {
  return (
    <aside>
      <div className="sticky top-0 left-0 w-full z-10 bg-gray-900">
        <Nav />
      </div>
      <div className="w-full min-h-full">
        <AllTeamsDisplay />
      </div>
    </aside>
  );
};

export default Sidebar;
