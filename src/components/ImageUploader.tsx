import { useDropzone } from "@uploadthing/react/hooks";
import type { FileWithPath } from "@uploadthing/react";
import { useCallback, type FC, useEffect } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import HeadingFour from "./ui/headingFour";
import { UploadCloud } from "lucide-react";
import Paragraph from "./ui/paragraph";
import { Button } from "./ui/button";

type ImageUploaderProps = {
  imageFiles: File[];
  setImageFiles: (files: File[]) => void;
  maxSize: number;
  type: "avatar" | "cover";
  description?: string;
};

type ImagePreviewProps = {
  type: "avatar" | "cover";
  url: string;
};

const ImagePreview: FC<ImagePreviewProps> = ({ type, url }) => {
  switch (type) {
    case "avatar":
      return (
        <Avatar className="h-16 w-16 overflow-hidden">
          <AvatarImage src={url} className="rounded-full" />
        </Avatar>
      );
    default:
      return null;
  }
};

const ImageUploader: FC<ImageUploaderProps> = ({
  imageFiles,
  setImageFiles,
  maxSize,
  type,
  description,
}) => {
  const onDrop = useCallback(
    (acceptedFile: FileWithPath[]) => {
      setImageFiles(acceptedFile);
      console.log(acceptedFile);
    },
    [setImageFiles],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/jpg": [".jpg"],
      "image/png": [".png"],
      "image/jpeg": [".jpeg"],
    },
    multiple: false,
    maxSize,
  });

  useEffect(() => {
    setImageFiles([]);
  }, []);

  return (
    <div
      {...getRootProps()}
      className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl border-2 border-dashed bg-background p-6 transition-colors hover:border-input"
    >
      <input {...getInputProps()} />
      {imageFiles.length <= 0 ? (
        <div className="flex flex-col items-center">
          <UploadCloud className="h-10 w-10 text-muted-foreground" />
          <HeadingFour className="mt-2.5 text-base">
            Choose images or drag and drop
          </HeadingFour>
          {description && (
            <Paragraph className="pt-1 text-center text-sm">
              {description}
            </Paragraph>
          )}
        </div>
      ) : (
        imageFiles[0] && (
          <div className="flex flex-col items-center space-y-3">
            <ImagePreview
              type={type}
              url={URL.createObjectURL(imageFiles[0])}
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                setImageFiles([]);
              }}
            >
              Remove
            </Button>
          </div>
        )
      )}
    </div>
  );
};

export default ImageUploader;
