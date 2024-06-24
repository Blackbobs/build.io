"use client";
import React, { useState, useEffect } from "react";
import { AllTeamsDisplay, TeamRoom } from "../TeamComponents";
import { Nav } from "../NavComponents";

export default function Layout() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <main>
      {width < 768 ? (
        <>
          <div>
            <Nav />
          </div>

          <div>
            <AllTeamsDisplay />
          </div>
        </>
      ) : (
        <>
        <div>
          <Nav/>
        </div>
        <div>
        
          <div>
            <TeamRoom />
          </div>
        </div>
        </>
      )}
    </main>
  );
}
