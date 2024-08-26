import Section from "../ui/section";
import ContactRow from "./ContactRow";

const Hero = () => {
  return (
    <Section>
      <div className="flex justify-center">
        <h1 className="font-serif text-5xl leading-tight text-black antialiased md:text-7xl lg:text-8xl">
          Empowering <span className="italic">Student</span> Founders
        </h1>
      </div>
      <ContactRow />
    </Section>
  );
};

export default Hero;
