import * as React from "react";
import PhoneNumberInput from "react-phone-number-input/react-hook-form-input";
import type { E164Number } from "libphonenumber-js/core";
import {
  type InputAttributes,
  PatternFormat,
  type PatternFormatProps,
} from "react-number-format";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "text-input-text flex h-10 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm shadow-sm outline-none ring-offset-background transition-all duration-150 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-ring focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export type PhoneInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  value: E164Number;
};

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, value, onBlur, ...props }, ref) => {
    return (
      <>
        <PhoneNumberInput
          className={cn(
            "text-input-text flex h-10 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm shadow-sm outline-none ring-offset-background transition-all duration-150 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-ring focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          defaultCountry="US"
          value={value}
          name={props.name ?? ""}
          placeholder="+## (###) ###-####"
          onBlur={onBlur}
        />
      </>
    );
  },
);
PhoneInput.displayName = "PhoneInput";

export type PatternInputProps = PatternFormatProps<InputAttributes> & {
  className?: string;
};

const PatternInput = React.forwardRef<HTMLInputElement, PatternInputProps>(
  ({ className, ...props }, _ref) => {
    return (
      <PatternFormat
        className={cn(
          "text-input-text flex h-10 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm shadow-sm outline-none ring-offset-background transition-all duration-150 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-ring focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);
PatternInput.displayName = "PatternInput";

export { Input, PhoneInput, PatternInput };
