import { cn } from "@/lib/clientUtils";
import { type FC } from "react";
import { stepAtom } from "../atoms/onboardFormAtom";
import { useAtom } from "jotai";
import { AnimatePresence, motion } from "framer-motion";
import HeadingTwo from "../ui/headingTwo";
import Paragraph from "../ui/paragraph";

interface OnboardStep {
  text: string;
  description: string;
}

const ONBOARD_STEPS: OnboardStep[] = [
  {
    text: "Tell us about yourself",
    description: "Help us get to know you better.",
  },
  {
    text: "Schedule a coffee chat",
    description: "Select a member to chat with.",
  },
];

const headingVariants = {
  enter: {
    transition: {
      duration: 0.12,
      staggerChildren: 0.14,
      delayChildren: 0.05,
    },
  },
  center: {
    transition: {
      duration: 0.12,
      staggerChildren: 0.14,
      delayChildren: 0.05,
    },
  },
  exit: {
    transition: {
      duration: 0.12,
      staggerChildren: 0.14,
      delayChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const headingItem = {
  enter: { opacity: 0, y: 10 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};

const OnboardHeader: FC = () => {
  const [[step, direction]] = useAtom(stepAtom);

  return (
    <div>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={step}
          variants={headingVariants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <motion.div variants={headingItem}>
            <HeadingTwo className="mb-0 scroll-m-0 pb-0 font-heading font-bold">
              {ONBOARD_STEPS[step - 1]?.text}
            </HeadingTwo>
          </motion.div>
          <motion.div variants={headingItem}>
            <Paragraph className="pb-6 pt-1">
              {ONBOARD_STEPS[step - 1]?.description}
            </Paragraph>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <div className="h-10">
        <p className="flex items-center space-x-1 pb-2 text-sm font-medium tracking-wide text-muted-foreground">
          Step {step} of {ONBOARD_STEPS.length}
        </p>
        <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
          {ONBOARD_STEPS.slice(0, 2).map((_, i) => {
            i += 1;
            return (
              <div key={i}>
                <div
                  className={cn(
                    "relative h-1 w-full rounded-full bg-secondary",
                  )}
                >
                  <motion.div
                    className={`absolute left-0 top-0 h-full w-full rounded-full bg-ring`}
                    initial={{ width: 0 }}
                    animate={{ width: step >= i ? "100%" : 0 }}
                    exit={{ width: 0 }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OnboardHeader;
