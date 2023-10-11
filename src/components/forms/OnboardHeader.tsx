import { cn } from "@/lib/utils";
import { type FC } from "react";
import { stepAtom } from "../atoms/onboardFormAtom";
import { useAtom } from "jotai";
import { motion } from "framer-motion";
import HeadingTwo from "../ui/headingTwo";

interface OnboardStep {
  text: string;
  color: string;
}

const ONBOARD_STEPS: OnboardStep[] = [
  {
    text: "Tell us about yourself",
    color: "#687EFF",
  },
  {
    text: "Choose a member to meet with",
    color: "blue-500",
  },
  {
    text: "Schedule a coffee chat",
    color: "indigo-500",
  },
  {
    text: "Await verification",
    color: "purple-500",
  },
];

const OnboardHeader: FC = () => {
  const [step] = useAtom(stepAtom);
  return (
    <div>
      <div className="grid grid-cols-4 gap-2 pb-6 text-sm text-muted-foreground">
        {ONBOARD_STEPS.map((item, i) => {
          i += 1;
          return (
            <div key={i}>
              <div className={cn("relative h-1 w-full rounded-full bg-muted")}>
                <motion.div
                  className={`absolute left-0 top-0 h-full w-full rounded-full bg-[#30E3CA]`}
                  initial={{ width: 0 }}
                  animate={{ width: step > i ? "100%" : 0 }}
                  exit={{ width: 0 }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <p className="pb-2 font-mono text-sm font-medium tracking-wide text-[#30E3CA]">
        {step - 1}/{ONBOARD_STEPS.length}
      </p>
      <HeadingTwo className="font-heading pb-8 font-bold">
        {ONBOARD_STEPS[step - 1]?.text}
      </HeadingTwo>
    </div>
  );
};

export default OnboardHeader;
