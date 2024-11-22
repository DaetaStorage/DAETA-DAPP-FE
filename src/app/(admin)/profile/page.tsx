"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const Profile = () => {
  const router = useRouter();
  const user = useSelector((state: any) => state.UserReducer.user);
  console.log("User Info:", user);

  return (
    <>
      <div className="flex flex-col bg-[#1C1C1C] rounded-2xl pt-8 pb-6 pl-7 pr-10">
        <p className="text-[#D9D9D9] text-[24px] font-bold">Account Settings</p>
        <form className="mt-7 w-full">
          <div className="flex flex-row gap-8 w-full">
            <input
              className="w-full py-3 pl-[42px] bg-transparent rounded-lg border border-[#D9D9D9] focus-within:border-[#F7FF98] text-[#D9D9D9] font-bold"
              placeholder="Full Name"
            ></input>
            <input
              className="w-full py-3 pl-[42px] bg-transparent rounded-lg border border-[#D9D9D9] focus:border-[#F7FF98] text-[#D9D9D9] font-bold"
              placeholder="Email"
            ></input>
          </div>
          <div className="flex flex-row gap-8 w-full mt-8">
            <input
              className="w-full py-3 pl-[42px] bg-transparent rounded-lg border border-[#D9D9D9] focus:border-[#F7FF98] text-[#D9D9D9] font-bold"
              placeholder="Phone Number"
            ></input>
            <input
              placeholder="Location"
              className="w-full py-3 pl-[42px] bg-transparent rounded-lg border border-[#D9D9D9] focus:border-[#F7FF98] text-[#D9D9D9] font-bold"
            ></input>
          </div>
          <textarea
            placeholder="Bio/About"
            className="mt-6 min-h-[150px] w-full pt-3 pl-[42px] bg-transparent rounded-lg border border-[#D9D9D9] focus:border-[#F7FF98] text-[#D9D9D9] font-bold"
          ></textarea>
        </form>

        <div className="mt-8 flex flex-row justify-end items-center">
          <button className="rounded-md py-[12px] px-7 bg-[#F7FF98] text-[#262626] border border-[#F7FF98] hover:bg-transparent hover:text-[#F7FF98] transition-all duration-300 ease-in-out font-bold leading-7 flex flex-row justify-center items-center">
            Update
          </button>
          <button className="ml-5 bg-[#262626] text-[#D9D9D9] hover:text-[#262626] font-bold py-[14px] px-7 rounded-lg hover:bg-[#D9D9D9] border border-[#262626] transition-colors ease-in-out duration-300">
            Cancel
          </button>
        </div>
      </div>
      <div className="mt-6 flex flex-row gap-6">
        <div className="rounded-[16px] bg-[#1C1C1C] pt-8 pl-7 pb-7 px-5 flex flex-col w-1/2">
          <p className="text-[#D9D9D9] text-[24px] font-bold">Password</p>
          <input
            className="mt-7 w-4/5 rounded-[8px] border border-[#D9D9D9] pl-[42px] py-3 bg-transparent text-[#D9D9D9] font-bold"
            placeholder="Current Password"
          ></input>
          <input
            className="mt-8 w-4/5 rounded-[8px] border border-[#D9D9D9] pl-[42px] py-3 bg-transparent text-[#D9D9D9] font-bold"
            placeholder="New Password"
          ></input>
          <input
            className="mt-6 w-4/5 rounded-[8px] border border-[#D9D9D9] pl-[42px] py-3 bg-transparent text-[#D9D9D9] font-bold"
            placeholder="Confirm Password"
          ></input>
          <div
            onClick={() => router.push("/forgot-password")}
            className="mt-3 text-[#FF4141] text-[12px] font-bold cursor-pointer hover:underline"
          >
            Forgot Password?
          </div>
        </div>
        {/* <div className="rounded-[16px] bg-[#1C1C1C] pt-8 pl-7 pb-7 flex flex-col w-full">
          <p className="text-[#D9D9D9] text-[24px] font-bold">
            Help and Support
          </p>

          <div className="mt-7">
            <div>
              <p className="text-[#D9D9D9] text-[16px]">
                Looking for more information about us?
              </p>
              <p className="text-[#3B7DFF] text-[12px]">Learn More.</p>
            </div>

            <div className="mt-5">
              <p className="text-[#D9D9D9] text-[16px]">
                Tips on how to use this site
              </p>
              <p className="text-[#3B7DFF] text-[12px]">Learn More.</p>
            </div>
          </div>
          <div className="mt-5">
            <p className="text-[#D9D9D9] font-bold">Need something else?</p>
            <div className="mt-[14px] flex flex-row items-center justify-start gap-3">
              <EarphoneSvg width={20} height={20} color="#D9D9D9" />
              <p className="text-[#3B7DFF]">Support</p>
            </div>
            <div
              onClick={() => router.push("/faq")}
              className="mt-[14px] flex flex-row items-center justify-start gap-3"
            >
              <FaqSvg width={20} height={20} color="#D9D9D9" />
              <p className="text-[#3B7DFF]">FAQs</p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Profile;
