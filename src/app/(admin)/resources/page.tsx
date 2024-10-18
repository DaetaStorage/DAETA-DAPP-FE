import ShowCard from "@/components/Fragment/ShowCard";

const Resources = () => {
  const contexts = [
    {
      title: "Usage Guidelines",
      content: <>Learn everything you need to know about DaeTa Usage</>,
    },
    {
      title: "Blogs",
      content: <>Access wealth of information, shares on our articles</>,
    },
    {
      title: "Still Need Help?",
      content: (
        <>
          Can&apos;t find what you&apos;re <br />
          looking for
        </>
      ),
    },
  ];

  return (
    // <div className='container mx-auto p-6'>
    <div className="bg-[#1C1C1C] px-7 pt-8 pb-[68px] rounded-lg shadow-sm mb-6">
      <h2 className="text-[#D9D9D9] text-2xl font-bold mb-6">Resources</h2>
      <ul className="grid items-center grid-cols-3 gap-y-5 gap-x-[20px]">
        {contexts.map((context, index) => (
          <ShowCard
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
