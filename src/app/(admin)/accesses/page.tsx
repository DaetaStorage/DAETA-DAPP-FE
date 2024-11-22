"use client";
import PlusSvg from "@/components/svg/plus";
import SearchSvg from "@/components/svg/search";

const Accesses = () => {
  return (
    <div className="flex flex-col">
      {/* accesses */}
      <div className="pl-7 py-[22px] rounded-2xl bg-[#1C1C1C]">
        <p className="text-[#D9D9D9] text-[24px] font-bold">Accesses</p>
        <div className="w-fit mt-8 border rounded-lg border-[#F7FF98] bg-[#262626] py-[26px] px-6 pr-7">
          <p className="text-[#D9D9D9] text-[24px] font-bold">S3 Credentials</p>
          <p className="text-[#D9D9D9] mt-3">
            Gives access through S3 compatible tools <br /> and services via our
            hosted Gateway MT.
          </p>
          <button
            className="mt-8 rounded-lg py-[12px] px-7 bg-[#3A3A3A] text-[#A5A5A5] border border-[#3A3A3A] cursor-not-allowed transition-all duration-300 ease-in-out font-bold leading-7 flex flex-row justify-center items-center"
            disabled
          >
            Coming Soon
          </button>
        </div>
        <div className="mt-8 flex flex-row items-center">
          <PlusSvg width={16} height={16} color="#D9D9D9" />
          <p className="ml-4 text-white">
            How to connect DÆTA with my project?{" "}
          </p>
        </div>
      </div>

      {/* my accesses */}
      <div className="mt-6">
        <div className="rounded-2xl bg-[#1C1C1C] pl-6 pt-[22px] pr-8 pb-7">
          <p className="text-[#D9D9D9] text-[24px] font-bold">Accesses</p>
          <div className="relative mt-6 w-1/2">
            <input
              placeholder="Search"
              className="w-full py-[13px] pl-4 pr-5 border border-[rgba(255,255,255,0.09)] bg-[#262626] rounded-lg text-[#D9D9D9]"
            ></input>
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <SearchSvg width={20} height={20} color="#D9D9D9" />
            </span>
          </div>
          <div className="mt-6">
            <div className="rounded-[8px] bg-[#262626]">
              <table className="table-auto w-full">
                <thead>
                  <tr className="border-b border-b-[#3A3A3A]">
                    <th className="pl-7 pt-[18px] pb-4 text-left text-[#D9D9D9]">
                      Name
                    </th>
                    <th className="pl-7 pt-[18px] pb-4 text-left text-[#D9D9D9]">
                      Date Created
                    </th>
                  </tr>
                </thead>
                {/* <tbody>
                  <tr>
                    <td className="pl-7 pt-5 pb-4 text-[#D9D9D9]">
                      Techfinite
                    </td>
                    <td className="pl-7 pt-5 pb-4 text-[#D9D9D9]">
                      10/4/2024, 4:26:10 PM UTC
                    </td>
                  </tr>
                </tbody> */}
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* 1 access grants */}
      {/* <div className="mt-6 pl-7">
        <p className="text-[#D9D9D9]">1 access grants</p>
      </div> */}
    </div>
  );
};

export default Accesses;
