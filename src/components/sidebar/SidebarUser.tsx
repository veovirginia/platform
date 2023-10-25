import { type FC } from "react";
import UserAvatar from "../UserAvatar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { Button } from "../ui/button";
import { LogOut, MoreHorizontal } from "lucide-react";
import { signOut } from "next-auth/react";

interface SidebarUserProps {
  avatar: string;
  name: string;
  email: string;
}

const SidebarAvatar: FC<SidebarUserProps> = ({
  avatar,
  name,
  email,
}: SidebarUserProps) => {
  return (
    <Popover>
      <PopoverTrigger className="w-full text-left">
        <div className="flex w-full items-center justify-center gap-2 rounded-lg p-3 transition-colors hover:bg-fill-quaternary">
          <div className="flex w-full items-center gap-2">
            <UserAvatar avatar={avatar} name={name} className="h-10 w-10" />
            <div className="truncate">
              <h1 className="flex-shrink-0 overflow-hidden text-ellipsis text-sm">
                {name}
              </h1>
              <p className="flex-shrink-0 overflow-hidden text-ellipsis pt-0.5 text-xs text-muted-foreground">
                {email}
              </p>
            </div>
          </div>
          <MoreHorizontal className="h-6 w-6 flex-shrink-0 text-muted-foreground" />
        </div>
      </PopoverTrigger>

      <PopoverContent className="w-[calc(75vw-1.5rem)] rounded-xl border border-border bg-popover p-2 shadow-md md:w-[calc(280px-1.5rem)]">
        <Button
          type="button"
          size="sm"
          variant="ghost"
          className="w-full justify-normal gap-3 font-normal hover:bg-secondary"
          onClick={() => void signOut()}
        >
          <span>
            <LogOut className="h-5 w-5 text-gray-4" />
          </span>
          <span>Sign out</span>
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default SidebarAvatar;
