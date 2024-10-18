"use client";
import Sidebar from "@/Layouts/NavBarLeft";
import TopBar from "@/Layouts/NavBarTop";
import useAuth from "@/Hooks/useAuth";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useAuth();

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="flex-1 pt-8 bg-[#262626] px-6 pb-[50px]">
          <div className="container mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
