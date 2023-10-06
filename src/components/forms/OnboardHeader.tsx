import { cn } from "@/lib/utils";
import { type FC } from "react";
import { stepAtom } from "../atoms/onboardFormAtom";
import { useAtom } from "jotai";

const ONBOARD_STEPS = [
  "Tell us about yourself",
  "Schedule a coffee chat",
  "Await verification",
];

const OnboardHeader: FC = () => {
  const [step] = useAtom(stepAtom);
  return (
    <div className="grid grid-cols-3 gap-2 pb-8 text-sm text-muted-foreground">
      {ONBOARD_STEPS.map((stepTitle, i) => {
        i += 1;
        return (
          <div key={stepTitle}>
            <p className="pb-2">
              <span
                className={cn({
                  "text-[#30E3CA]": step > i,
                })}
              >
                {i + 1}.{" "}
              </span>
              <span
                className={cn("font-medium", {
                  "text-neutral-200": step === i,
                  "text-[#30E3CA]": step > i,
                })}
              >
                {stepTitle}
              </span>
            </p>
            <div
              className={cn("h-1 w-full rounded-full", {
                "bg-[#30E3CA]": step > i,
                "bg-muted": step <= i,
              })}
            />
          </div>
        );
      })}
    </div>
  );
};

export default OnboardHeader;
