const PlanCard = (props: {
  title: string;
  size: string;
  unit: string;
  content: JSX.Element;
  price: number;
}) => {
  return (
    <div className="list-none font-normal text-base leading-6 text-white flex flex-col h-full justify-between">
      <div className="h-full flex flex-col justify-between gap-x-[50px] pt-8 px-7 pb-[18px] bg-[#262626] rounded-lg border hover:border-[#F7FF98] border-[rgba(255,255,255,0.09)] transition-all duration-500 ease-in-out hover:-translate-y-1 group">
        <div className="h-full flex flex-col gap-3">
          <h3 className="text-[#D9D9D9] text-[24px] leading-normal font-bold transition-colors duration-300 ease-in-out responsive-text">
            {props.title}
          </h3>
          <div className="text-[52px] text-[#D9D9D9] font-bold kode-mono">
            {props.size}
            <span className="font-bold text-[#D9D9D9] inline-block text-[16px] ml-2">
              {props.unit}
            </span>
          </div>
          <div className="text-[#D9D9D9] text-[16px] w-full flex flex-col gap-2">
            {props.content}
          </div>
        </div>
        <div className="mt-3 text-[28px] kode-mono font-bold text-[#D9D9D9]">
          ${props.price}
          <span className="space-mono text-bold text-[#D9D9D9] text-[12px] ml-2">
            USD/per month
          </span>
        </div>
        <button className="rounded-lg py-[15px] w-full bg-[#F7FF98] text-[#262626] border border-[#F7FF98] hover:bg-transparent hover:text-[#D9D9D9] transition-all duration-300 ease-in-out font-bold leading-7 mt-10 flex flex-row justify-center items-center">
          Upgrade(coming soon)
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
