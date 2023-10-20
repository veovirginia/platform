import { type FC } from "react";
import UserAvatar from "../UserAvatar";

interface SidebarUserProps {
  image: string;
  name: string;
  email: string;
}

const SidebarAvatar: FC<SidebarUserProps> = ({
  image,
  name,
  email,
}: SidebarUserProps) => {
  return (
    <div className="flex max-w-full items-center gap-2 p-3">
      <UserAvatar
        image={image}
        name={name}
        email={email}
        width={48}
        height={48}
      />
      <div className="truncate">
        <h1 className="flex-shrink-0 overflow-hidden text-ellipsis text-sm">
          {name}
        </h1>
        <p className="flex-shrink-0 overflow-hidden text-ellipsis pt-0.5 text-xs text-muted-foreground">
          {email}
        </p>
      </div>
    </div>
  );
};

export default SidebarAvatar;
