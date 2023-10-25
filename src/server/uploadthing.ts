import { createUploadthing } from "uploadthing/next-legacy";
import type { FileRouter } from "uploadthing/next-legacy";

import { getServerAuthSession } from "./auth";
import { UTApi } from "uploadthing/server";

const f = createUploadthing();

export const uploadRouter = {
  imageUpload: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(async ({ req, res }) => {
      const session = await getServerAuthSession({ req, res });

      if (!session) throw new Error("Unauthorized");

      console.log("auth:", session);

      return {
        userEmail: session?.user?.email,
        otherProperty: "hello" as const,
      };
    })
    .onUploadComplete(({ metadata, file }) => {
      console.log("uploaded with the following metadata:", metadata);

      console.log(
        `${metadata.userEmail ?? ""} successfully uploaded file:`,
        file,
      );
      file;
    }),
} satisfies FileRouter;

export type ImageFileRouter = typeof uploadRouter;

export const utapi = new UTApi();
