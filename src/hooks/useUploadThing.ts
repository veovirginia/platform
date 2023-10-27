import { type ImageFileRouter } from "@/server/uploadthing";
import { generateReactHelpers } from "@uploadthing/react/hooks";

export const { useUploadThing, uploadFiles } =
  generateReactHelpers<ImageFileRouter>();
