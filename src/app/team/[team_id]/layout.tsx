import { Sidebar } from "@/components/SidebarComponents";

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
        <div className="flex-1">{children}</div>
      </div>
  );
}
