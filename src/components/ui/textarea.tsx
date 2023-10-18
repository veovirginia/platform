import * as React from "react";

import { cn } from "@/lib/clientUtils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[6rem] w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-input-text shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.085)] shadow-sm outline-none ring-offset-background transition-all duration-150 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-input-placeholder focus:border-ring focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
