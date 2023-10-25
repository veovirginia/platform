import React, { type FC, useMemo } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import Image from "next/image";
import { initials } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";

interface UserAvatarProps {
  avatar: string;
  previewImage?: string;
  name: string;
  className: string;
}

const UserAvatar: FC<UserAvatarProps> = ({
  avatar,
  previewImage,
  name,
  className,
}: UserAvatarProps) => {
  const generatedAvatar = useMemo(() => {
    return createAvatar(initials, {
      seed: name,
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
  }, [name]);

  return (
    <Avatar>
      <AvatarImage
        src={previewImage ?? avatar}
        alt={name}
        className={className}
      />
      <AvatarFallback>
        <Image
          src={previewImage ?? generatedAvatar}
          alt={name}
          className={className}
          width={48}
          height={48}
        />
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
