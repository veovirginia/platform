import { type Dispatch, type SetStateAction, type FC } from "react";
import UserAvatar from "./UserAvatar";
import UploadAvatarDialog from "./dialogs/UploadAvatarDialog";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";

interface UploadAvatarProps {
  imageFiles: File[];
  setImageFiles: Dispatch<SetStateAction<File[]>>;
  setCurrentImage: Dispatch<SetStateAction<string | undefined>>;
  setImageDirty: Dispatch<SetStateAction<boolean>>;
}

const UploadAvatar: FC<UploadAvatarProps> = ({
  imageFiles,
  setImageFiles,
  setCurrentImage,
  setImageDirty,
}: UploadAvatarProps) => {
  const { data: session } = useSession();
  const user = session?.user;

  const removeAvatar = () => {
    setImageFiles([]);
    setImageDirty(true);
    if (user) {
      setCurrentImage(user.avatar ?? "");
      user.avatar = "";
    }
  };

  console.log("remount");

  return (
    <div className="col-span-4 flex items-center">
      <div className="flex-shrink-0">
        <UserAvatar
          avatar={user?.avatar ?? ""}
          previewImage={
            imageFiles[0] ? URL.createObjectURL(imageFiles[0]) : undefined
          }
          name={user?.name ?? ""}
          className="h-16 w-16"
        />
      </div>
      <div className="space-y-3 pl-4">
        <p className="text-sm font-medium leading-none text-input-text ">
          Profile Picture
        </p>
        <div className="flex items-center gap-2">
          <UploadAvatarDialog setImageFiles={setImageFiles} />
          <Button
            type="button"
            size="sm"
            variant="ghost"
            onClick={removeAvatar}
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UploadAvatar;
