import PlatformLayout from "@/components/layouts/PlatformLayout";
import { type ReactElement } from "react";
import { type NextPageWithLayout } from "../_app";
import ProfileForm from "@/components/forms/ProfileForm";
import Paragraph from "@/components/ui/paragraph";
import HeadingFour from "@/components/ui/headingFour";
import CardBody from "@/components/CardBody";
import { type GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { trpcHelpers } from "@/lib/serverUtils";
import { api } from "@/utils/api";

const Profile: NextPageWithLayout = () => {
  const { data: user } = api.user.getProfile.useQuery();

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
              <ProfileForm profile={user} />
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
  const session = await getSession(ctx);
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

  const helpers = trpcHelpers(session);

  await helpers.user.getProfile.prefetch();
  return {
    props: {
      trpcState: helpers.dehydrate(),
    },
  };
}

export default Profile;
