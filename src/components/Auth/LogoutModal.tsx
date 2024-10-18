import { logOut } from "@/Hooks/authAPI";
import { FC } from "react";

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LogoutModal: FC<LogoutModalProps> = ({ isOpen, onClose }) => {
  const logoutHandler = async () => {
    await logOut();
  };
  const handleOverlayClick = (e: any) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-[#1C1C1C] rounded-lg py-10 px-[90px] modal-shadow flex flex-col gap-10">
        <div className="text-[#F7FF98] text-center font-bold text-[36px]">
          Logout
        </div>
        <div className="text-[#E0DECF] font-bold">
          <p className="text-[#E0DECF] font-bold text-center">Hello user!</p>
          <p className="text-[#E0DECF] font-bold text-center">
            Are you sure you want to logout from Daeta?
          </p>
        </div>
        <div className="flex flex-row items-center justify-around">
          <button
            onClick={onClose}
            className=" bg-[#262626] text-[#D9D9D9] hover:text-[#262626] font-bold py-[11px] px-10 rounded-lg hover:bg-[#D9D9D9] border border-[#262626] transition-colors ease-in-out duration-300"
          >
            No
          </button>
          <button
            onClick={logoutHandler}
            className="ml-15 rounded-md py-[9px] px-10 bg-[#F7FF98] text-[#262626] border border-[#F7FF98] hover:bg-transparent hover:text-[#F7FF98] transition-all duration-300 ease-in-out font-bold leading-7 flex flex-row justify-center items-center"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
