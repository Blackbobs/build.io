import {
  TeamBottomNav,
  TeamRoom,
  TeamTopNav,
} from "@/components/TeamComponents";
export default function page() {
  return (
    <>
      <div className="">
        <div>
          <TeamTopNav />
        </div>
        <div className="flex-1">
        <TeamRoom />
        </div>
        <div className="xPadding">
          <TeamBottomNav />
        </div>
      </div>
    </>
  );
}
