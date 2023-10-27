import { cn } from "@/lib/clientUtils";
import { type FC, type ReactNode } from "react";

interface HeadingOneProps {
  className?: string;
  children: ReactNode;
}

const HeadingOne: FC<HeadingOneProps> = ({
  className,
  children,
}: HeadingOneProps) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 font-heading text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
    >
      {children}
    </h1>
  );
};

export default HeadingOne;
