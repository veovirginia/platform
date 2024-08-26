import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col p-6 py-8 md:py-16">
      {children}
    </section>
  );
};

export default Section;
