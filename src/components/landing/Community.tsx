import Section from "../ui/section";

const Community = () => {
  return (
    <Section>
      <div className="grid w-full grid-cols-3 gap-2">
        <div className="col-span-3 md:col-span-1">
          <h2 className="font-sans text-xl font-bold text-slate-800 md:text-2xl">
            Community
          </h2>
        </div>
        <div className="col-span-3 flex flex-col gap-4 text-balance text-lg leading-relaxed text-slate-600 md:col-span-2">
          <p className="">
            We welcome any student interested in entrepreneurship to join. We
            host speaker events, workshops, and build sessions hosted by
            students to encourage everyone to create.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Community;
