import React from "react";
import { AllTeamsDisplay } from "../TeamComponents";
import { Nav } from "../NavComponents";

const Sidebar: React.FC = () => {
  return (
    <aside className="sticky top-0 left-0 min-h-dvh border-r-4 border-brand">
      <div>
        <Nav />
      </div>
      <div>
        <AllTeamsDisplay />
      </div>
    </aside>
  );
};

export default Sidebar;
