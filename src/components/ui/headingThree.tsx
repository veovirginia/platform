import { cn } from "@/lib/clientUtils";
import { type FC, type ReactNode } from "react";

interface HeadingThreeProps {
  className?: string;
  children: ReactNode;
}

const HeadingThree: FC<HeadingThreeProps> = ({
  className,
  children,
}: HeadingThreeProps) => {
  return (
    <h3
      className={cn(
        "scroll-m-20 font-heading text-2xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h3>
  );
};

export default HeadingThree;
