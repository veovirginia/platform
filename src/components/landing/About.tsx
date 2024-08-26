import Section from "../ui/section";

const About = () => {
  return (
    <Section>
      <div className="grid w-full grid-cols-3 gap-2">
        <div className="col-span-3 md:col-span-1">
          <h2 className="font-sans text-xl font-bold text-slate-800 sm:text-2xl">
            About Us
          </h2>
        </div>
        <div className="col-span-3 flex flex-col gap-4 text-balance text-base leading-relaxed text-slate-600 md:col-span-2 md:text-lg">
          <p className="">
            Founded in 2022, the Virginia Entrepreneurship Organization is a
            student-run community of builders at the University of Virginia.
          </p>
          <p className="">
            We partner with the University of Virginia, local venture capital
            firms, founders, and startups to host events and create
            opportunities for students to explore entrepreneurship.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
