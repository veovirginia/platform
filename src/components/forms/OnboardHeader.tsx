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

const variants = {
  enter: (direction: number) => {
    return {
      // y: direction > 0 ? 50 : -50,
      // y: 10,
      // opacity: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    };
  },
  center: {
    // zIndex: 1,
    // y: 0,
    // opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: (direction: number) => {
    return {
      // zIndex: 0,
      // y: -10,
      // y: direction < 0 ? 50 : -50,
      // opacity: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        staggerDirection: -1,
      },
    };
  },
};

const item = {
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
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <motion.div variants={item}>
            <HeadingTwo className="mb-0 scroll-m-0 pb-0 font-heading font-bold">
              {ONBOARD_STEPS[step - 1]?.text}
            </HeadingTwo>
          </motion.div>
          <motion.div variants={item}>
            <Paragraph className="pb-6 pt-1">
              {ONBOARD_STEPS[step - 1]?.description}
            </Paragraph>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <div className="h-10">
        <p className="pb-2 text-sm font-medium tracking-wide text-muted-foreground">
          Step {step} of {ONBOARD_STEPS.length}
        </p>

        <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
          {ONBOARD_STEPS.slice(0, 2).map((item, i) => {
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
