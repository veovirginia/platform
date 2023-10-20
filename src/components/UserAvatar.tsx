import React, { type FC, useMemo } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import Image from "next/image";
import { notionists } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";

interface UserAvatarProps {
  image: string;
  name: string;
  email: string;
  width: number;
  height: number;
}

const UserAvatar: FC<UserAvatarProps> = ({
  image,
  name,
  email,
  width,
  height,
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
        <Image src={generatedAvatar} alt={name} width={width} height={height} />
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
