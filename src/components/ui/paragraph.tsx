import { cn } from "@/lib/clientUtils";
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
    <p className={cn("leading-7 text-paragraph", className)}>{children}</p>
  );
};

export default Paragraph;
