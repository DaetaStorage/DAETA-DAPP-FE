"use client";
import ResourceCard from "@/components/Fragment/Resource";
import DashboardSvg from "@/components/svg/dashboard";
import VaultSvg from "@/components/svg/vault";
import ResourceSvg from "@/components/svg/resource";
import DividerSvg from "@/components/svg/divider";
import LogoutSvg from "@/components/svg/logout";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import LogoutModal from "@/components/Auth/LogoutModal";

const Sidebar = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState("/dashboard");

  const user = useSelector((state: any) => state.UserReducer.user);

  let totalSize = 0;
  if (user && user.vaults && user.vaults.length > 0) {
    const files = user.vaults[0].vault.files;
    for (let i = 0; i < files.length; i++) {
      totalSize += files[i].size;
    }
  }

  const handleNavigate = (url: string) => {
    router.push(`${url}`);
    setActiveLink(`${url}`);
  };

  const handleLogOut = (e) => {
    e.preventDefault();

    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-[#1C1C1C] w-64 min-h-screen flex flex-col flex-start justify-between">
      <div className="relative">
        <div className="absolute top-0 left-0">
          <img src="/testnet.png" alt="testnetLogo" />
        </div>
        <div
          id="logo"
          onClick={() => router.push("/dashboard")}
          className="flex justify-center items-center pt-10 cursor-pointer"
        >
          <Image
            src="/DaeTaLogo.svg"
            width={100}
            height={71.19}
            alt="logoImg"
          />
        </div>
        <div className="pl-5 pr-4 pt-5 pb-[14px] mt-5">
          <nav className="flex flex-col gap-y-2 w-full text-gray-600">
            <div
              onClick={() => handleNavigate("/dashboard")}
              className={`flex font-bold items-center pl-7 py-[14px] rounded-md cursor-pointer gap-5 transition-all ease-in duration-300 ${
                activeLink === "/dashboard"
                  ? "bg-[#E0DECF] text-[#1C1C1C]"
                  : "text-[#D9D9D9] hover:bg-[#262626]"
              }`}
            >
              <DashboardSvg
                width={20}
                height={21.6}
                color={`${activeLink === "/dashboard" ? "#1C1C1C" : "#D9D9D9"}`}
              />
              Dashboard
            </div>
            <div
              onClick={() => handleNavigate("/vaults/management")}
              className={`flex font-bold items-center pl-7 py-[14px] rounded-md cursor-pointer gap-5 transition-all ease-in duration-300 ${
                activeLink === "/vaults/management"
                  ? "bg-[#E0DECF] text-[#1C1C1C]"
                  : "text-[#D9D9D9] hover:bg-[#262626]"
              }`}
            >
              <VaultSvg
                width={20}
                height={21.6}
                color={`${
                  activeLink === "/vaults/management" ? "#1C1C1C" : "#D9D9D9"
                }`}
              />
              Vaults
              <span className="ml-auto mr-8 text-xs bg-red-500 text-white rounded-full mt-[1px] h-5 w-5 flex items-center justify-center">
                {user && user.vaults && user.vaults.length
                  ? user.vaults.length
                  : 0}
              </span>
            </div>
            <div
              onClick={() => handleNavigate("/resources")}
              className={`flex font-bold items-center pl-7 py-[14px] rounded-md cursor-pointer gap-5 transition-all ease-in duration-300 ${
                activeLink === "/resources"
                  ? "bg-[#E0DECF] text-[#1C1C1C]"
                  : "text-[#D9D9D9] hover:bg-[#262626]"
              }`}
            >
              <ResourceSvg
                width={20}
                height={21.6}
                color={`${activeLink === "/resources" ? "#1C1C1C" : "#D9D9D9"}`}
              />
              Resources
            </div>
          </nav>
        </div>
        <DividerSvg />
        <div className="px-5 mt-7">
          <div className="w-full text-center flex flex-col gap-4 ">
            <ResourceCard type="Bandwidth" total={1} used={20} color="blue" />
            <ResourceCard
              type="Storage"
              total={1}
              used={Number((totalSize / 1024 / 1024).toFixed(4))}
              color="blue"
            />
          </div>
          <div
            onClick={() => handleNavigate("/plans")}
            className="mt-7 bg-[#F7FF98] w-full text-[#262626] py-[15px] px-[22px] flex flex-row items-center justify-center rounded-md hover:bg-[#1C1C1C] hover:text-[#F7FF98] transition-colors duration-300 ease-in-out text-[16px] font-bold tracking-[0.3px] border border-[#F7FF98] hover:border-[#F7FF98] cursor-pointer"
          >
            Upgrade
          </div>
        </div>
      </div>

      <div className="select-none">
        <DividerSvg />
        <div className="pl-5 pr-4" onClick={handleLogOut}>
          <div className="flex flex-row items-center justify-center gap-[26px] py-[14px] px-7 mb-4 mt-4 hover:rounded-md hover:bg-[#262626] hover:cursor-pointer">
            <LogoutSvg width={20} height={20} color="#D9D9D9" />
            <p className="text-[#D9D9D9] text-[16px] font-bold">Log Out</p>
          </div>
        </div>
      </div>
      <LogoutModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Sidebar;
