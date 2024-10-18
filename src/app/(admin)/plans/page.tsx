import PlanCard from "@/components/Fragment/PlanCard";

export default function PricingPlans() {
  const contexts = [
    {
      title: "Basic",
      size: "20",
      content: (
        <>
          <div className="mb-[2px]">End to end encryption</div>
          <div className="mb-[2px]">Private file sharing</div>
          <div className="mb-[2px]">50 GB Bandwidth</div>
        </>
      ),
      price: 9.99,
    },
    {
      title: "Professional",
      size: "50",
      content: (
        <>
          <div className="mb-[2px]">End to end encryption</div>
          <div className="mb-[2px]">Private file sharing</div>
          <div className="mb-[2px]">50 GB Bandwidth</div>
        </>
      ),
      price: 9.99,
    },
    {
      title: "Small Business",
      size: "100",
      content: (
        <>
          <div className="mb-[2px]">End to end encryption</div>
          <div className="mb-[2px]">Private file sharing</div>
          <div className="mb-[2px]">50 GB Bandwidth</div>
        </>
      ),
      price: 9.99,
    },
  ];

  return (
    <div className="bg-[#1C1C1C] pt-8 px-7 pb-6 rounded-[16px]">
      <h2 className="text-2xl font-bold mb-3 text-[#D9D9D9]">Pricing Plans</h2>
      <div className="flex flex-row justify-between items-center">
        <p className="text-[#D9D9D9] text-[14px]">
          Find a plan that works best for you. We also accept payment in DAETA
          Tokens.
        </p>
        <div className="flex items-center space-x-4">
          <span className="text-[rgba(217,217,217,0.55)] text-[14px] font-bold">
            Individual
          </span>
          <div className="relative">
            <input
              className="mr-2 mt-[0.3rem] h-6 w-12 appearance-none rounded-[43px] bg-[#F7FF98] after:absolute after:z-[2] after:ml-[0.18rem] after:mt-[0.15rem] 
              after:h-5 after:w-5 after:rounded-full after:border-none after:bg-[#262626] after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)]
               after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2]
                checked:after:mt-[0.15rem] checked:after:ml-[1.625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none
               checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)]
                checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
          <span className="text-[#D9D9D9] text-[14px] font-bold">
            Enterprise
          </span>
        </div>
      </div>
      <div className="flex justify-center mt-[67px]"></div>
      <ul className="grid items-center grid-cols-3 gap-y-5 gap-x-[20px]">
        {contexts.map((context, index) => (
          <PlanCard
            key={index}
            title={context.title}
            size={context.size}
            content={context.content}
            price={context.price}
          />
        ))}
      </ul>
    </div>
  );
}
