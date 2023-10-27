import { type ReactNode } from "react";

interface CardBodyProps {
  children: ReactNode;
}

const CardBody = ({ children }: CardBodyProps) => {
  return (
    <section className="h-full space-y-6 rounded-xl bg-card p-6 shadow">
      {children}
    </section>
  );
};

export default CardBody;
