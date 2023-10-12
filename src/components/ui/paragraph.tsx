import { cn } from "@/lib/utils";
import { type FC, type ReactNode } from "react";

interface ParagraphProps {
  className?: string;
  children: ReactNode;
}

const Paragraph: FC<ParagraphProps> = ({
  className,
  children,
}: ParagraphProps) => {
  return (
    <p className={cn("text-paragraph leading-7", className)}>{children}</p>
  );
};

export default Paragraph;
