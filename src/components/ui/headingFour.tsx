import { cn } from "@/lib/clientUtils";
import { type FC, type ReactNode } from "react";

interface HeadingFourProps {
  className?: string;
  children: ReactNode;
}

const HeadingFour: FC<HeadingFourProps> = ({
  className,
  children,
}: HeadingFourProps) => {
  return (
    <h3
      className={cn(
        "text-text-primary scroll-m-20 font-heading text-xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h3>
  );
};

export default HeadingFour;
