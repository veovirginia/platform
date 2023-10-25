import PlatformLayout from "@/components/layouts/PlatformLayout";
import { useState, type ReactElement } from "react";
import { type NextPageWithLayout } from "../_app";
import ProfileForm from "@/components/forms/ProfileForm";
import Paragraph from "@/components/ui/paragraph";
import HeadingFour from "@/components/ui/headingFour";
import CardBody from "@/components/CardBody";
import { type GetServerSidePropsContext } from "next";
import { getServerAuthSession } from "../api/auth/[...nextauth]";
import UploadAvatar from "@/components/UploadAvatar";

const Profile: NextPageWithLayout = () => {
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [isImageDirty, setImageDirty] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string | undefined>("");

  return (
    <div className="flex w-full flex-1 gap-6 p-3 md:p-6">
      <div className="w-full">
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full flex-col gap-6">
            <div className="col-span-1">
              <HeadingFour>Profile</HeadingFour>
              <Paragraph>
                Manage settings for your VEO Platform profile.
              </Paragraph>
            </div>
            <CardBody>
              <UploadAvatar
                imageFiles={imageFiles}
                setImageDirty={setImageDirty}
                setCurrentImage={setCurrentImage}
                setImageFiles={setImageFiles}
              />
              <ProfileForm
                imageFiles={imageFiles}
                isImageDirty={isImageDirty}
                currentImage={currentImage}
                setImageDirty={setImageDirty}
              />
            </CardBody>
          </div>
        </div>
      </div>
    </div>
  );
};

Profile.getLayout = (page: ReactElement) => {
  return <PlatformLayout>{page}</PlatformLayout>;
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getServerAuthSession(ctx);
  if (!session)
    return {
      redirect: {
        destination: "/signin",
        permanent: true,
      },
    };

  if (!session.user.onboarded) {
    return {
      redirect: {
        destination: "/platform/onboard",
        permanent: true,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default Profile;
