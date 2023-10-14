import { useEffect, useMemo } from "react";
import { cn } from "@/lib/clientUtils";
import { motion } from "framer-motion";
import { getCalApi } from "@calcom/embed-react";
import { useHydrateAtoms } from "jotai/utils";
import { calMeetingAtom } from "../atoms/onboardFormAtom";
import { shuffle } from "radash";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import CalItem from "../dashboard/CalItem";
import { useRouter } from "next/router";
import { api } from "@/utils/api";

const MEMBERS = [
  {
    name: "Michael Fatemi",
    majors: ["Computer Science", "Math"],
    graduation: "2026",
    picture:
      "https://res.cloudinary.com/dblodzwva/image/upload/v1676328034/jason_photo.png",
    calId: "michael-fatemi-vnsw6q/veo-onboard-meeting",
  },
  {
    name: "David Xiang",
    majors: ["Computer Science", "Statistics"],
    graduation: "2025",
    picture:
      "https://res.cloudinary.com/dblodzwva/image/upload/v1676318501/david_photo.png",
    calId: "davidxiang/veo-onboard-meeting",
  },
  {
    name: "Jason He",
    majors: ["Computer Science", "Commerce"],
    graduation: "2025",
    picture:
      "https://res.cloudinary.com/dblodzwva/image/upload/v1676328034/jason_photo.png",
    calId: "jasonjche/veo-onboard-meeting",
  },
  {
    name: "Clara Grimmelbein",
    majors: ["Computer Science", "Commerce"],
    graduation: "2026",
    picture:
      "https://res.cloudinary.com/dblodzwva/image/upload/v1676318421/clara_photo.png",
    calId: "claragrimmelbein/veo-onboard-meeting",
  },
  {
    name: "Shaurya Bedi",
    majors: ["Computer Science", "Economics"],
    graduation: "2025",
    picture:
      "https://res.cloudinary.com/dblodzwva/image/upload/v1693523118/shaurya_photo.png",
    calId: "shaurya-bedi/veo-onboard-meeting",
  },
  {
    name: "Anthony Wang",
    majors: ["Computer Science"],
    graduation: "2026",
    picture:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/45/45034c9c01c6178c96a5c6fc047f5ef659fc2a60.jpg",
    calId: "anthony-wang-1hrxmj/veo-onboard-meeting",
  },
  {
    name: "Maya Gearin-Virga",
    majors: ["English"],
    graduation: "2026",
    picture:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/45/45034c9c01c6178c96a5c6fc047f5ef659fc2a60.jpg",
    calId: "mayagearinvirga/veo-onboard-meeting",
  },
  {
    name: "Drew Zhou",
    majors: ["English"],
    graduation: "2026",
    picture:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/45/45034c9c01c6178c96a5c6fc047f5ef659fc2a60.jpg",
    calId: "drewz/veo-onboard-meeting",
  },
  {
    name: "Tony Tran",
    majors: ["Computer Science"],
    graduation: "2026",
    picture:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/45/45034c9c01c6178c96a5c6fc047f5ef659fc2a60.jpg",
    calId: "tony-tran/onboard-meeting",
  },
];

const OnboardStepTwo = () => {
  useHydrateAtoms([[calMeetingAtom, ""]]);
  const router = useRouter();

  const { mutateAsync: updateUser } = api.user.updateUser.useMutation();

  const container = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  useEffect(() => {
    void (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#121212" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      cal("on", {
        action: "bookingSuccessful",
        callback: (_event) => {
          void (async () => {
            await updateUser({ onboarded: true });
            void router.push("/platform");
          })();
        },
      });
    })();
  }, [router, updateUser]);

  const shuffledMembers = useMemo(() => shuffle(MEMBERS), []);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
      transition={{ duration: 0.28, delay: 0.45 }}
    >
      <div className="w-full">
        <ScrollArea.Root className="h-[20rem] rounded">
          <ScrollArea.Viewport className="h-full w-full p-2">
            <div className="space-y-2">
              {shuffledMembers.map((member) => (
                <CalItem key={member.name} {...member} />
              ))}
            </div>
            <ScrollArea.ScrollAreaScrollbar
              className={cn(
                "flex h-full w-2.5 touch-none select-none border-l border-l-transparent p-[1px] transition-colors",
              )}
            >
              <ScrollArea.ScrollAreaThumb
                className={cn("relative flex-1 rounded-full bg-border")}
              />
            </ScrollArea.ScrollAreaScrollbar>
          </ScrollArea.Viewport>
        </ScrollArea.Root>
      </div>
    </motion.div>
  );
};

export default OnboardStepTwo;
