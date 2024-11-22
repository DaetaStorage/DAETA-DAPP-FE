import { convertTimestampToDate } from "@/utils/formatDate";
import { useSelector } from "react-redux";

const DashboardSummary = () => {
  const user = useSelector((state: any) => state.UserReducer.user);

  return (
    <div className="bg-[#1C1C1C] p-6 rounded-[16px]">
      <h2 className="text-[#D9D9D9] text-2xl font-bold mb-6">
        {user?.username} Dashboard
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#262626] border border-[#F7FF98] rounded-lg px-[18px] py-4 flex flex-col hover:scale-105 transition-all duration-300 ease-in cursor-pointer">
          <span className="text-xl font-semibold select-none">
            {user && user.vaults ? user.vaults.length : 0}
          </span>
          <span className="text-gray-300 select-none">Vaults</span>
          <span className="text-gray-200 text-xs mt-2 select-none">
            Last update{" "}
            {convertTimestampToDate(
              user && user.vaults && user.vaults[0]
                ? user.vaults[0].vault.updated_at
                : user?.updated_at
            )}
          </span>
          <div className="h-7 w-7 flex items-center justify-center rounded bg-[#1C1C1C] mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <path
                d="M5.83333 4.16667V0H4.16667V4.16667H0V5.83333H4.16667V10H5.83333V5.83333H10V4.16667H5.83333Z"
                fill="#D9D9D9"
              />
            </svg>
          </div>
        </div>
        <div className="bg-[#262626] dashboard-content-border rounded-lg px-[18px] py-4 flex flex-col hover:scale-105 transition-all duration-300 ease-in cursor-pointer">
          <span className="text-xl font-semibold select-none">2</span>
          <span className="text-gray-300 select-none">Access Grants</span>
          <span className="text-gray-200 text-xs mt-2 select-none">
            Coming Soon
          </span>
          <div className="h-7 w-7 flex items-center justify-center rounded bg-[#1C1C1C] mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <path
                d="M5.83333 4.16667V0H4.16667V4.16667H0V5.83333H4.16667V10H5.83333V5.83333H10V4.16667H5.83333Z"
                fill="#D9D9D9"
              />
            </svg>
          </div>
        </div>
        <div className="bg-[#262626] dashboard-content-border rounded-lg px-[18px] py-4 flex flex-col hover:scale-105 transition-all duration-300 ease-in cursor-pointer">
          <span className="text-xl font-semibold select-none">3</span>
          <span className="text-gray-300 select-none">Billing</span>
          <span className="text-gray-200 text-xs mt-2 select-none">
            Free Account
          </span>

          <div className="h-7 w-7 flex items-center justify-center rounded bg-[#1C1C1C] mt-2">
            <svg
              width="11"
              height="9"
              viewBox="0 0 11 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="01 align center">
                <path
                  id="Vector"
                  d="M3.57513 8.40955C3.39461 8.40988 3.2158 8.37454 3.04897 8.30556C2.88214 8.23658 2.73058 8.13531 2.60301 8.00759L0.0395508 5.44459L0.687634 4.79605L3.25109 7.3595C3.33704 7.44543 3.4536 7.4937 3.57513 7.4937C3.69667 7.4937 3.81323 7.44543 3.89918 7.3595L10.3126 0.946045L10.9607 1.59413L4.54726 8.00759C4.41968 8.13531 4.26813 8.23658 4.1013 8.30556C3.93447 8.37454 3.75566 8.40988 3.57513 8.40955Z"
                  fill="#D9D9D9"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSummary;
