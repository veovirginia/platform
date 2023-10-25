import { type Session } from "next-auth";
import VEOLogo from "../VEOLogo";
import SidebarLink from "./SidebarLink";
import SidebarUser from "./SidebarUser";
import { type FC } from "react";
import { SIDEBAR_GROUPS, SIDEBAR_LINKS } from "@/lib/clientUtils";

interface SidebarProps {
  session: Session;
}

const Sidebar: FC<SidebarProps> = ({ session }: SidebarProps) => {
  const {
    user: { verified, name, email, avatar },
  } = session;

  return (
    <aside className="fixed top-0 z-30 hidden h-screen w-full shrink-0 gap-6 border-r border-border bg-card p-3 md:sticky md:flex md:flex-col">
      <h1 className="flex items-center space-x-3 p-3 pb-0 font-heading text-lg font-medium">
        <VEOLogo />
        <span className="font-bold">Platform</span>
      </h1>
      <ul className="space-y-1 text-sm">
        {SIDEBAR_LINKS.map((link) => (
          <SidebarLink key={link.title} {...link} verified={verified} />
        ))}
      </ul>
      <div className="text-sm">
        {SIDEBAR_GROUPS.map(({ title, children }) => (
          <div key={title} className="pt-6 first:pt-0">
            <h2 className="px-3 pb-2 font-sans font-semibold text-muted-foreground">
              {title}
            </h2>
            <ul className="space-y-1">
              {children.map((link) => (
                <SidebarLink key={link.title} {...link} verified={verified} />
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-auto flex w-full items-center">
        <SidebarUser avatar={avatar} name={name} email={email} />
      </div>
    </aside>
  );
};

export default Sidebar;
