import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "font-sans inline-flex items-center justify-center text-sm shadow-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.085)] text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.085)] text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-border shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.085)] bg-transparent hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.085)] text-secondary-foreground hover:bg-secondary/75 border-secondary-border border",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2 rounded-lg",
        xs: "h-8 rounded px-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-11 rounded-lg px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
