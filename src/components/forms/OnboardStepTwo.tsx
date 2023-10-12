import { useState } from "react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { cn, getMajorClassname } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const MEMBERS = [
  {
    name: "John Doe",
    majors: ["Computer Science"],
    graduation: "2025",
    picture:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/45/45034c9c01c6178c96a5c6fc047f5ef659fc2a60.jpg",
    link: "https://cal.com",
  },
  {
    name: "John Doe",
    majors: ["Computer Science", "Math"],
    graduation: "2025",
    picture:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/45/45034c9c01c6178c96a5c6fc047f5ef659fc2a60.jpg",
    link: "https://cal.com",
  },
  {
    name: "John Doe",
    majors: ["Computer Science", "Statistics"],
    graduation: "2025",
    picture:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/45/45034c9c01c6178c96a5c6fc047f5ef659fc2a60.jpg",
    link: "https://cal.com",
  },
  {
    name: "John Doe",
    majors: ["English"],
    graduation: "2025",
    picture:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/45/45034c9c01c6178c96a5c6fc047f5ef659fc2a60.jpg",
    link: "https://cal.com",
  },
];

const OnboardStepTwo = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <div className="">
      <ScrollArea className="h-[20rem] w-full">
        <div className="space-y-2">
          {MEMBERS.map(({ name, majors, graduation, picture }, i) => (
            <button
              key={name}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "relative flex w-full items-center justify-between rounded-lg border p-3 text-left transition-colors",
                {
                  "border-primary/50": active === i,
                  "border-border": active !== i,
                },
              )}
            >
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute left-0 top-0 h-full w-full bg-primary/[15%]"
                  />
                )}
              </AnimatePresence>
              <div className="flex w-full items-center gap-3">
                <div
                  className={cn(
                    "flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border transition-colors",
                    {
                      "border-transparent bg-ring": active === i,
                      "border-border bg-input": active !== i,
                    },
                  )}
                >
                  <AnimatePresence>
                    {active === i && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="h-2.5 w-2.5 rounded-full bg-white"
                      />
                    )}
                  </AnimatePresence>
                </div>
                <div className="h-10 w-10 flex-shrink-0 rounded-full bg-blue-500" />
                <div className="text-sm">
                  <p className="flex items-baseline space-x-2 font-medium">
                    <span>{name}</span>
                    <span className="text-muted-foreground">
                      Class of {graduation}
                    </span>
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {/* <span className="rounded-full border border-border bg-muted px-1.5 py-0.5 text-xs text-paragraph">
                      Class of {graduation}
                    </span> */}
                    {majors.map((major) => {
                      const majorClassname = getMajorClassname(major);
                      return (
                        <span
                          key={major}
                          className={cn(
                            "rounded-full border px-1.5 py-0.5 text-xs",
                            majorClassname,
                          )}
                        >
                          {major}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default OnboardStepTwo;
