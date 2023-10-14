import * as React from "react";
import PhoneNumberInput from "react-phone-number-input/react-hook-form-input";
import type { E164Number } from "libphonenumber-js/core";
import {
  type InputAttributes,
  PatternFormat,
  type PatternFormatProps,
} from "react-number-format";
import { cn } from "@/lib/clientUtils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-10 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-input-text shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.085)] shadow-sm outline-none ring-offset-background transition-all duration-150 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-input-placeholder focus:border-ring focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50",
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
            "flex h-10 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-input-text shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.085)] shadow-sm outline-none ring-offset-background transition-all duration-150 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-input-placeholder focus:border-ring focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50",
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
          "flex h-10 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-input-text shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.085)] shadow-sm outline-none ring-offset-background transition-all duration-150 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-input-placeholder focus:border-ring focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);
PatternInput.displayName = "PatternInput";

export { Input, PhoneInput, PatternInput };
