import * as React from "react";
import { type ChangeEvent } from "react";
import { cn } from "@/lib/utils";
import { PatternFormat } from "react-number-format";

export interface PatternInputProps {
  className: string | null | undefined;
  format: string;
  patternChar?: string;
  allowEmptyFormatting?: boolean;
  mask?: string;
  type: "password" | "tel" | "text" | undefined;
  defaultValue: string | number | null | undefined;
  value: string | number | null | undefined;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onValueChange: (value: string) => void;
}

const Input = React.forwardRef<HTMLInputElement, PatternInputProps>(
  (
    {
      className,
      format,
      patternChar,
      allowEmptyFormatting,
      mask,
      type,
      defaultValue,
      value,
      required,
      disabled,
      placeholder,
      onValueChange,
      ...props
    },
    ref,
  ) => {
    return (
      <PatternFormat
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        // ref={ref}
        type={type}
        value={value}
        format={format}
        patternChar={patternChar}
        allowEmptyFormatting={allowEmptyFormatting}
        mask={mask}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const target = event.target as HTMLInputElement;
          if (target) {
            onValueChange(event.target?.value);
          }
        }}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
