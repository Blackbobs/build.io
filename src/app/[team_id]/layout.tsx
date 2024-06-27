import { Sidebar } from "@/components/SidebarComponents";
import { TeamBottomNav, TeamTopNav } from "@/components/TeamComponents";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="layout">
        <div className="w-full md:max-w-[300px] hidden md:block">
          <Sidebar />
        </div>
        <div className="flex-1 w-full">
        <div>
            <TeamTopNav />
          </div>
          {children}
          <div className="fixed bottom-0 right-0 z-10 bg-slate-800 width">
            <TeamBottomNav />
          </div>
          </div>
      </div>
  );
}
