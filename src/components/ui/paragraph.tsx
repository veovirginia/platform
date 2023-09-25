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
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  );
};

export default Paragraph;
