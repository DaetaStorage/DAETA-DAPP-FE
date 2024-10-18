"use client";

import VaultSvg from "@/components/svg/vault";
import ThreeDotsSvg from "@/components/svg/threeDots";

import { useState } from "react";
import { useSelector } from "react-redux";

import Modal from "../Modal/Modal";
import CreateVault from "./CreateVault";

const Vaults = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateModal, setIsCreateModal] = useState(false);
  const [vaultId, setVaultId] = useState(null);

  const user = useSelector((state: any) => state.UserReducer.user);

  const closeModal = () => setIsModalOpen(false);
  const closeCreateModal = () => setIsCreateModal(false);

  let vaultContent;
  if (user && user.vaults) {
    vaultContent = user.vaults.map((item, idx) => {
      return (
        <tr
          key={idx}
          className="bg-[#262626] hover:bg-gray-700 cursor-pointer transition-all ease-in-out duration-300"
          onClick={() => {
            setVaultId(item.vault._id);
            setIsModalOpen(true);
          }}
        >
          <td className="py-5 px-6">
            <div className="flex items-center space-x-2">
              <div className="w-[44px] h-[44px] flex items-center justify-center rounded-full bg-[rgba(135,203,245,0.2)] border border-gray-300">
                <VaultSvg width={24} height={24} color={"white"} />
              </div>
              <p className="text-white">{item.vault.name}</p>
            </div>
          </td>
          <td className="py-2 px-4">{item.vault.size} GB</td>
          <td className="py-2 px-4">
            {item.vault.progress ? item.vault.progress : "0.00"} GB
          </td>
          <td className="py-2 px-4">{item.vault.files.length}</td>
          <td className="py-2 px-4">0</td>
          <td className="py-2 px-4">
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }).format(new Date(item.vault.created_at).getTime())}
          </td>
          <td className="py-2 px-4">
            <button className="text-gray-600 hover:text-gray-900">
              <ThreeDotsSvg />
            </button>
          </td>
        </tr>
      );
    });
  }

  return (
    <div className="bg-[#1C1C1C] pt-8 px-7 pb-6 rounded-2xl flex flex-col gap-6">
      <h1 className="text-[#D9D9D9] text-2xl font-bold">Vaults</h1>
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search"
          className="w-1/2 px-4 py-[14px] border dashboard-content-border rounded-md bg-[#262626] focus:outline-none focus:ring-2 focus:ring-slate-500"
        />
        <button
          onClick={() => setIsCreateModal(true)}
          className="bg-[#F7FF98] w-fit text-[#262626] py-[15px] px-[22px] rounded-md hover:bg-[#1C1C1C] hover:text-[#F7FF98] transition-colors text-[16px] font-bold tracking-[0.3px] border border-[#F7FF98] hover:border-[#F7FF98]"
        >
          Create Vault
        </button>
      </div>
      <table className="w-full bg-[#262626] rounded-lg overflow-hidden border dashboard-content-border">
        <thead className="bg-[#262626] border-t dashboard-content-border text-[#D9D9D9]">
          <tr>
            <th className="py-4 pl-6 text-left">Name</th>
            <th className="py-4 px-4 text-left">Storage</th>
            <th className="py-4 px-4 text-left">Egress</th>
            <th className="py-4 px-4 text-left">Objects</th>
            <th className="py-4 px-4 text-left">Segments</th>
            <th className="py-4 px-4 text-left">Date Added</th>
            <th className="py-4 px-4"></th>
          </tr>
        </thead>
        <tbody>{vaultContent}</tbody>
      </table>
      <Modal isOpen={isModalOpen} onClose={closeModal} vaultId={vaultId} />
      <CreateVault isOpen={isCreateModal} onClose={closeCreateModal} />
    </div>
  );
};

export default Vaults;
