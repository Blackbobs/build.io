import { Nav } from "@/components/NavComponents";
import { AllTeamsDisplay } from "@/components/TeamComponents";


export default function Home() {
  return (
    <>
      <div>
        <Nav/>
      </div>

      <div>
        <AllTeamsDisplay/>
      </div>
    </>
  );
}
