import { Nav } from "@/components/NavComponents";
import { AllTeamsDisplay, TeamRoom } from "@/components/TeamComponents";
// import Layout from "@/components/Layout";


export default function Home() {
  return (
    <>
      {/* <Layout/> */}
      <div>
        <Nav/>
      </div>

      <div className="layout">
        <div>
          <AllTeamsDisplay/>
        </div>

        <div className="hidden md:block flex-1">
          <TeamRoom/>
        </div>
      </div>
    </>
  );
}
