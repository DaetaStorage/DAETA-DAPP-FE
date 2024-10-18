import Link from "next/link";
import RightArrow from "@/components/svg/rightArrow";

const ShowCard = (props: { title: string; content: JSX.Element }) => {
  return (
    <Link
      href="/usage-guidelines"
      className="list-none font-normal text-base leading-6 text-white flex flex-col h-full justify-between"
    >
      <div className="h-full flex flex-col justify-between gap-x-[50px] p-6 rounded-lg border hover:border-[#F7FF98] border-[rgba(255,255,255,0.09)] transition-all duration-500 ease-in-out hover:-translate-y-1 group">
        <div className="h-full flex flex-col gap-3">
          <h3 className="text-white text-[20px] leading-[30px] font-medium mb-[5px] transition-colors duration-300 ease-in-out min-h-[60px] responsive-text">
            {props.title}
          </h3>
          <p className="text-gray-300 w-full">{props.content}</p>
        </div>
        <button className="rounded-lg py-[10px] px-5 bg-[#F7FF98] text-[#1C1C1C] font-bold leading-7 mt-[42px] flex flex-row w-fit items-center gap-[10px]">
          Learn More
          <RightArrow width={16} height={16} />
        </button>
      </div>
    </Link>
  );
};

export default ShowCard;
