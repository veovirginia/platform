import { useAtom } from "jotai";
import { calMeetingAtom } from "../atoms/onboardFormAtom";
import { type FC } from "react";
import { cn, getMajorClassname } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface CalItemProps {
  name: string;
  majors: string[];
  graduation: string;
  picture: string;
  calId: string;
}

const CalItem: FC<CalItemProps> = ({
  name,
  majors,
  graduation,
  picture,
  calId,
}: CalItemProps) => {
  const [calMeetingId, setCalMeetingId] = useAtom(calMeetingAtom);
  const [firstName, lastName] = name.split(" ");

  const isItemSelected = calMeetingId === calId;

  return (
    <button
      type="button"
      onClick={() => setCalMeetingId(calId)}
      className={cn(
        "relative flex w-full items-center justify-between rounded-lg border p-3 text-left shadow transition-colors hover:bg-white/[2%]",
        {
          "border-primary ring-4 ring-ring/20": isItemSelected,
          "border-border": !isItemSelected,
        },
      )}
    >
      <div className="flex w-full items-center gap-3">
        <div
          className={cn(
            "flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border transition-colors",
            {
              "border-transparent bg-ring": isItemSelected,
              "border-border bg-input": !isItemSelected,
            },
          )}
        >
          <AnimatePresence>
            {isItemSelected && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="h-2.5 w-2.5 rounded-full bg-white"
              />
            )}
          </AnimatePresence>
        </div>
        <Avatar>
          <AvatarImage src={picture} alt={name} />
          <AvatarFallback>
            {firstName?.charAt(0)}
            {lastName?.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="text-sm">
          <p className="flex items-baseline space-x-2 font-medium">
            <span>{name}</span>
            <span className="font-normal text-muted-foreground">
              Class of {graduation}
            </span>
          </p>
          <div className="flex flex-wrap gap-2 pt-1.5">
            {majors.map((major) => (
              <span
                key={major}
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-xs",
                  getMajorClassname(major),
                )}
              >
                {major}
              </span>
            ))}
          </div>
        </div>
      </div>
    </button>
  );
};

export default CalItem;
