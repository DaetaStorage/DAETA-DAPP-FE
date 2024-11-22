import ShowCard from "@/components/Fragment/ShowCard";

const Resources = () => {
  const contexts = [
    {
      title: "Docs",
      content: (
        <>
          Access detailed guides and insights to effectively use the DÆTA
          platform.
        </>
      ),
      link: "https://docs.daeta.xyz/",
    },
    {
      title: "Medium",
      content: (
        <>Stay updated with articles and developments on the DÆTA ecosystem.</>
      ),
      link: "https://daetastorage.medium.com/",
    },
    {
      title: "Discord",
      content: (
        <>Connect with our community for support and discussions on Discord.</>
      ),
      link: "https://discord.gg/DaetaStorage",
    },
  ];

  return (
    // <div className='container mx-auto p-6'>
    <div className="bg-[#1C1C1C] px-7 pt-8 pb-[68px] rounded-lg shadow-sm mb-6">
      <h2 className="text-[#D9D9D9] text-2xl font-bold mb-6">Resources</h2>
      <ul className="grid items-center grid-cols-3 gap-y-5 gap-x-[20px]">
        {contexts.map((context, index) => (
          <ShowCard
            link={context.link}
            key={index}
            title={context.title}
            content={context.content}
          />
        ))}
      </ul>
    </div>
  );
};

export default Resources;
