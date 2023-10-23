import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ImageUploader from "../ImageUploader";
import { type FC, type Dispatch, type SetStateAction, useState } from "react";

interface UploadAvatarDialogProps {
  setImageFiles: Dispatch<SetStateAction<File[]>>;
}

const UploadAvatarDialog: FC<UploadAvatarDialogProps> = ({
  setImageFiles,
}: UploadAvatarDialogProps) => {
  const [tempImages, setTempImages] = useState<File[]>([]);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" size="sm" variant="secondary">
          Upload avatar
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="">Upload avatar</DialogTitle>
          <DialogDescription>
            Add a new image for your avatar.
          </DialogDescription>
        </DialogHeader>
        <div className="">
          <ImageUploader
            imageFiles={tempImages}
            setImageFiles={setTempImages}
            maxSize={4000000}
            type="avatar"
            description="At least 800x800 px recommended."
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="ghost" size="sm">
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="submit"
            size="sm"
            disabled={tempImages.length <= 0}
            onClick={() => setImageFiles(tempImages)}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UploadAvatarDialog;
