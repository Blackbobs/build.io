import { Sidebar } from "@/components/SidebarComponents";
import { TeamBottomNav, TeamTopNav } from "@/components/TeamComponents";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="layout bg-gray-900 text-primary">
        <div className="w-full md:max-w-[300px] hidden md:block sticky top-0 left-0 max-h-dvh overflow-y-scroll">
          <Sidebar />
        </div>
        <div className="flex-1 w-full">
        <div className="sticky top-0 right-0 z-10 bg-gray-900">
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
