import { cn } from "@/lib/utils";
import { type FC } from "react";
import { stepAtom } from "../atoms/onboardFormAtom";
import { useAtom } from "jotai";
import { motion } from "framer-motion";

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
            <span className="flex items-center space-x-2 pb-2">
              <span
                className={cn({
                  "text-[#30E3CA]": step > i,
                })}
              >
                <div
                  className={cn(
                    "h-3 w-3 rounded-full border-2 bg-transparent",
                    {
                      "border-neutral-200": step === i,
                      "border-[#30E3CA]": step > i,
                      "border-neutral-600": step < i,
                    },
                  )}
                ></div>
              </span>
              <span
                className={cn("font-medium", {
                  "text-neutral-200": step === i,
                  "text-[#30E3CA]": step > i,
                })}
              >
                {stepTitle}
              </span>
            </span>
            <div className={cn("relative h-1 w-full rounded-full bg-muted")}>
              <motion.div
                className="absolute left-0 top-0 h-full w-full rounded-full bg-[#30E3CA]"
                animate={{ width: step > i ? "100%" : 0 }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OnboardHeader;
