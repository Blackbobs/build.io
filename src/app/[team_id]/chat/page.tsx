import {
    TeamBottomNav,
    TeamRoom,
    TeamTopNav,
  } from "@/components/TeamComponents";
  export default function page() {
    return (
      <>
        <div className="max-w-full">
          <div>
            <TeamTopNav />
          </div>
          <div>
            <TeamRoom />
          </div>
          <div className="fixed bottom-0 right-0 z-20 xPadding bg-white width">
            <TeamBottomNav />
          </div>
        </div>
      </>
    );
  }
  