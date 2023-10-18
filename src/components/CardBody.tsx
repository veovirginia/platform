import { type ReactNode } from "react";

interface CardBodyProps {
  children: ReactNode;
}

const CardBody = ({ children }: CardBodyProps) => {
  return (
    <section className="h-full space-y-6 rounded-lg bg-card p-6 shadow shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.085)]">
      {children}
    </section>
  );
};

export default CardBody;
