"use client";
import React from "react";
import EyeSvg from "@/components/svg/eye";
import ComputerSvg from "@/components/svg/computer";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginVault } from "@/Hooks/vaultAPI";
import { store } from "@/Store/store";
import { setVault } from "@/Store/reducers/UserReducer";
import { useSelector } from "react-redux";

const Modal = (props: {
  isOpen: boolean;
  vaultId: string | null;
  onClose: () => void;
}) => {
  const router = useRouter();

  const handleOverlayClick = (e: any) => {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  };

  const user = useSelector((state: any) => state.UserReducer.user);
  const vault = user
    ? user.vaults.filter((item: any) => item.vault._id === props.vaultId)
    : null;

  const [isPhraseVisible, setIsPhraseVisible] = useState(false);
  const [passcode, setPasscode] = useState("");

  if (!props.isOpen) return null;

  const togglePhraseVisibility = () => {
    setIsPhraseVisible(!isPhraseVisible);
  };

  const handleVerifyVault = async (e) => {
    e.preventDefault();

    if (!props.vaultId) return;

    const vaultData = {
      id: props.vaultId,
      passcode,
    };

    const isVerified = await loginVault(vaultData);
    if (isVerified) {
      store.dispatch(setVault(vault[0].vault));
      router.push("/vaults/upload");
    } else props.onClose();
  };

  console.log("Passcode:", passcode);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-[#1C1C1C] modal-shadow rounded-[6px] max-w-[573px] py-12 px-[52px] relative">
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <ComputerSvg />
          </div>
          <h2 className="text-2xl font-bold text-[#D9D9D9] mt-[18px] mb-3">
            Enter Passphrase
          </h2>
          <p className="text-[#E0DECF] mb-10 text-center">
            Enter your encryption passphrase to access your data.
          </p>
          <div className="text-left w-full">
            <p className="text-[#D9D9D9] mb-4 font-bold">Remember:</p>
            <ul className="text-[#E0DECF] list-disc list-inside">
              <li>Your passphrase cannot be reset or recovered.</li>
              <li>Copy and securely store your passphrase.</li>
              <li>Verify your passphrase before uploading files.</li>
            </ul>
          </div>
          <div className="mt-10 flex items-center w-full space-x-2">
            <div className="relative w-full flex-8">
              {passcode && (
                <span
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={togglePhraseVisibility}
                  style={{ zIndex: 1 }}
                >
                  <EyeSvg width={20} height={20} isOff={!isPhraseVisible} />
                </span>
              )}
              <input
                type={isPhraseVisible ? "text" : "password"}
                value={passcode}
                placeholder="Enter a passphrase here"
                onChange={(e) => setPasscode(e.target.value)}
                className="text-start w-full px-10 py-[10px] text-[#E0DECF] bg-transparent border border-[#D9D9D9] rounded-[8px] focus:outline-none focus:ring-1 focus:ring-blue-200"
              />
            </div>
            <button className="text-white bg-red-500 p-2 rounded-lg hover:bg-red-600 flex items-center justify-center min-h-12 min-w-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M17.6441 6.72986L9.70954 14.6644C9.5488 14.8251 9.33082 14.9154 9.10354 14.9154C8.87626 14.9154 8.65828 14.8251 8.49754 14.6644L4.3584 10.5253"
                  stroke="#E0DECF"
                  strokeWidth="1.28571"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="mt-10 flex justify-between w-full">
            <button
              onClick={props.onClose}
              className="bg-[#262626] borderorder-gray-300 text-[#D9D9D9] hover:text-[#262626] font-bold py-[10px] px-10 rounded-lg hover:bg-[#D9D9D9] border border-[#262626] transition-colors ease-in-out duration-300"
            >
              Cancel
            </button>
            <button
              className="bg-[#F7FF98] text-[#1C1C1C] font-bold py-[10px] px-10 rounded-lg hover:bg-transparent hover:text-[#F7FF98] border border-[#F7FF98] hover:border-[#F7FF98] cursor-pointer transition-all ease-in-out duration-300"
              onClick={handleVerifyVault}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
