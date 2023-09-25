import { cn } from "@/lib/utils";
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
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h3>
  );
};

export default HeadingThree;
