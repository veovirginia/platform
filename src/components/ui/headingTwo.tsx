import { cn } from "@/lib/clientUtils";
import { type FC, type ReactNode } from "react";

interface HeadingTwoProps {
  className?: string;
  children: ReactNode;
}

const HeadingTwo: FC<HeadingTwoProps> = ({
  className,
  children,
}: HeadingTwoProps) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default HeadingTwo;
