import { useMemo, type FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import { notionists } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";

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
  const avatar = useMemo(() => {
    if (!image) {
      return createAvatar(notionists, {
        seed: email,
        backgroundColor: [
          "b6e3f4",
          "c0aede",
          "d1d4f9",
          "ffd5dc",
          "ffdfbf",
          "b6cdf4",
          "#b0f7b8",
          "#eff7b0",
        ],
      }).toDataUriSync();
    } else {
      return "";
    }
  }, [image, email]);
  return (
    <div className="flex max-w-full items-center gap-2 p-3">
      <Avatar>
        <AvatarImage src={image} alt={name} />
        <AvatarFallback>
          <Image src={avatar} alt={name} width={48} height={48} />
        </AvatarFallback>
      </Avatar>
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
