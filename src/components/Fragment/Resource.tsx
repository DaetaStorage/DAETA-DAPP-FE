const ResourceCard = (props: {
  type: string;
  total: number;
  used: number;
  color?: string;
}) => {
  return (
    <div className="bg-[#212121] pt-[10px] pb-[15px] pl-[14px] pr-[25px] rounded-md">
      <div className="flex justify-between items-center">
        <span
          className={`text-[#D9D9D9] flex items-center text-[16px] font-bold`}
        >
          {props.type}
        </span>
        <span className="text-[#D9D9D9] text-[16px] font-bold">
          {props.total}GB
        </span>
      </div>
      <div className="w-full progressbar mt-[23px]">
        <div
          className={`bg-[#F7FF98] h-full rounded-[2px]`}
          style={{ width: `${(props.used / (1024 * props.total)) * 100}%` }}
        ></div>
      </div>
      <span className="text-[#D9D9D9] text-[10px] mt-[5px] block text-start font-normal">
        {props.used} MB Used
      </span>
    </div>
  );
};

export default ResourceCard;
