import React, { type FC, useMemo } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import Image from "next/image";
import { notionists } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";

interface UserAvatarProps {
  image: string;
  previewImage?: string;
  name: string;
  email: string;
  className: string;
}

const UserAvatar: FC<UserAvatarProps> = ({
  image,
  previewImage,
  name,
  email,
  className,
}: UserAvatarProps) => {
  const generatedAvatar = useMemo(() => {
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
    <Avatar>
      <AvatarImage src={image} alt={name} />
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
