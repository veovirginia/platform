import { cn } from "@/lib/utils";
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
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
    >
      {children}
    </h1>
  );
};

export default HeadingOne;
