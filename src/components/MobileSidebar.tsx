import { PanelRightOpen } from "lucide-react";
import { useState, type FC, useEffect } from "react";
import VEOLogo from "./VEOLogo";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { SIDEBAR_LINKS, SIDEBAR_GROUPS } from "@/lib/clientUtils";
import SidebarLink from "./sidebar/SidebarLink";
import SidebarUser from "./sidebar/SidebarUser";
import { type Session } from "next-auth";
import { useSession } from "next-auth/react";

const MobileSidebar: FC = () => {
  const { data: session } = useSession();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!session) return null;

  const {
    user: { verified, name, avatar, email },
  } = session;

  return (
    <div className="sticky left-0 top-0 z-50 flex h-14 w-full items-center justify-between border-b border-border bg-card px-3 md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="rounded-lg"
          >
            <PanelRightOpen className="rotate-180 text-muted-foreground" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-3">
          <SheetHeader>
            <SheetTitle>
              <div className="flex items-center space-x-2 p-3 font-heading text-base font-medium">
                <VEOLogo />
                <span className="font-bold">Platform</span>
              </div>
            </SheetTitle>
            <ul className="space-y-1 text-sm">
              {SIDEBAR_LINKS.map((link) => (
                <SidebarLink key={link.title} {...link} verified={verified} />
              ))}
            </ul>
            <div className="text-sm">
              {SIDEBAR_GROUPS.map(({ title, children }) => (
                <div key={title} className="pt-6 first:pt-0">
                  <h2 className="px-3 pb-2 text-left font-sans font-semibold text-muted-foreground">
                    {title}
                  </h2>
                  <ul className="space-y-1">
                    {children.map((link) => (
                      <SidebarLink
                        key={link.title}
                        {...link}
                        verified={verified}
                      />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-auto flex w-full items-center">
              <SidebarUser avatar={avatar} name={name} email={email} />
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default MobileSidebar;
