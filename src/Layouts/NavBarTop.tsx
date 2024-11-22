"use client";

import { useState, useEffect, useRef } from "react";
import UserSvg from "@/components/svg/user";
import BillingSvg from "@/components/svg/billing";
import AccessSvg from "@/components/svg/access";
import LogoutSvg from "@/components/svg/logout";
import SettingSvg from "@/components/svg/gear";
import LogoutModal from "@/components/Auth/LogoutModal";
import setAuthToken from "@/Hooks/setAuthToken";
import { store } from "@/Store/store";
import { setToken } from "@/Store/reducers/UserReducer";
import { useRouter } from "next/navigation";
import { getCurrentUser } from "@/Hooks/authAPI";
import "../app/globals.css";

const TopBar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogoutHovered, setIsLogoutHovered] = useState(false);
  const [isAccessHovered, setIsAccessHovered] = useState(false);
  const [isBillHovered, setIsBillHovered] = useState(false);
  const [isAccountHovered, setIsAccountHovered] = useState(false);

  const closeModal = () => setIsModalOpen(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const redirectHandler = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      // Set Auth Token
      setAuthToken(localStorage.getItem("token"));
    }

    store.dispatch(setToken(localStorage.getItem("token")));

    getCurrentUser();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleLogOut = (e) => {
    e.preventDefault();

    setIsModalOpen(true);
    setIsOpen(false);
  };

  return (
    <div className="bg-[#262626] w-full px-6">
      <div className="flex items-center justify-end border-b-[2px] top-board-color pt-6 pb-3">
        <div className="flex items-center space-x-4">
          <div className="relative" ref={dropdownRef}>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className={`group flex items-center justify-center w-10 h-10 rounded-[4px] transition-all duration-300 ease-in-out ${
                !isOpen ? "user-bg-color" : "bg-[#F7FF98]"
              } hover:bg-[#F7FF98] border border-[#F7FF98] cursor-pointer`}
            >
              <UserSvg
                width={16}
                height={20}
                color={`${!isOpen ? "#D9D9D9" : "#262626"}`}
              />
            </div>
            {isOpen && (
              <div className="absolute right-0 mt-3 rounded-md bg-[#1C1C1C] modal-shadow z-10">
                <div className="px-9 py-[50px] gap-6 flex flex-col">
                  <div
                    onClick={() => redirectHandler("/billing")}
                    onMouseEnter={() => setIsBillHovered(true)}
                    onMouseLeave={() => setIsBillHovered(false)}
                    className="flex items-center w-full group cursor-pointer"
                  >
                    <BillingSvg
                      width={20}
                      height={20}
                      color={!isBillHovered ? "#D9D9D9" : "#F7FF98"}
                    />
                    <div className="text-[20px] text-[#E0DECF] ml-4 group-hover:text-[#F7FF98] transition-all ease-in-out duration-[3000]">
                      Billing
                    </div>
                  </div>
                  <div
                    onClick={() => redirectHandler("/accesses")}
                    onMouseEnter={() => setIsAccessHovered(true)}
                    onMouseLeave={() => setIsAccessHovered(false)}
                    className="flex items-center w-full group cursor-pointer"
                  >
                    <AccessSvg
                      width={20}
                      height={20}
                      color={!isAccessHovered ? "#D9D9D9" : "#F7FF98"}
                    />
                    <div className="text-[20px] text-[#E0DECF] ml-4 group-hover:text-[#F7FF98] transition-all ease-in-out duration-[3000]">
                      Accesses
                    </div>
                  </div>
                  <div
                    onClick={() => redirectHandler("/profile")}
                    onMouseEnter={() => setIsAccountHovered(true)}
                    onMouseLeave={() => setIsAccountHovered(false)}
                    className="flex items-center w-full group cursor-pointer"
                  >
                    <SettingSvg
                      width={20}
                      height={20}
                      color={!isAccountHovered ? "#D9D9D9" : "#F7FF98"}
                    />
                    <div className="text-[20px] text-[#E0DECF] ml-4 whitespace-nowrap text-nowrap group-hover:text-[#f7ff98] transition-all ease-in-out duration-[3000]">
                      Account Settings
                    </div>
                  </div>

                  <div
                    onClick={handleLogOut}
                    onMouseEnter={() => setIsLogoutHovered(true)}
                    onMouseLeave={() => setIsLogoutHovered(false)}
                    className="flex items-center w-full group cursor-pointer"
                  >
                    <LogoutSvg
                      width={20}
                      height={20}
                      color={!isLogoutHovered ? "#D9D9D9" : "#F7FF98"}
                    />
                    <div className="text-[20px] text-[#E0DECF] ml-4 group-hover:text-[#F7FF98] transition-all ease-in-out duration-[3000]">
                      Logout
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <LogoutModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default TopBar;
