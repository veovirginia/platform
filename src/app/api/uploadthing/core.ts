import { getServerAuthSession } from "@/server/auth";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

import { UTApi } from "uploadthing/server";

const f = createUploadthing();

export const fileRouter = {
  imageUpload: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(async () => {
      const session = await getServerAuthSession();

      if (!session) throw new UploadThingError("Unauthorized");

      console.log("auth:", session);

      return {
        userEmail: session?.user?.email,
      };
    })
    .onUploadComplete(({ metadata, file }) => {
      console.log("uploaded with the following metadata:", metadata);

      console.log(
        `${metadata.userEmail ?? ""} successfully uploaded file:`,
        file,
      );
      return { uploadedBy: metadata.userEmail };
    }),
} satisfies FileRouter;

export type ImageFileRouter = typeof fileRouter;

export const utapi = new UTApi();
