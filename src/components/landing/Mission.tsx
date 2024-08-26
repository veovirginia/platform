import Section from "../ui/section";

const Mission = () => {
  return (
    <Section>
      <div className="grid w-full grid-cols-3 gap-2">
        <div className="col-span-3 md:col-span-1">
          <h2 className="font-sans text-xl font-bold text-slate-800 md:text-2xl">
            Mission
          </h2>
        </div>
        <div className="col-span-3 flex flex-col gap-4 text-balance text-base leading-relaxed text-slate-600 md:col-span-2 md:text-lg">
          <p className="">
            The guiding principle of the Virginia Entrepreneurship Community is
            to foster a culture of{" "}
            <span className="font-bold">innovation and entrepreneurship</span>{" "}
            at the University of Virginia.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Mission;
