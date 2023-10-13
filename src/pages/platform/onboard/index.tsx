import DefaultLayout from "@/components/layouts/DefaultLayout";
import {
  type NextPage,
  type GetServerSidePropsContext,
  type InferGetServerSidePropsType,
} from "next";
import { getSession } from "next-auth/react";
import {
  stepAtom,
  stepOneValuesAtom,
} from "@/components/atoms/onboardFormAtom";
import OnboardForm from "@/components/forms/OnboardForm";
import { useHydrateAtoms } from "jotai/utils";
import { api } from "@/utils/api";
import { trpcHelpers } from "@/lib/serverUtils";

const Onboard: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (_props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data: user } = api.user.getOnboardUser.useQuery();

  useHydrateAtoms([
    [stepAtom, 1],
    [
      stepOneValuesAtom,
      user ?? { name: "", phone: "", graduation: "", major: "", idea: "" },
    ],
  ]);

  return (
    <DefaultLayout>
      <div className="flex w-full flex-1 justify-center">
        <div className="mx-auto w-full max-w-xl pt-20">
          <OnboardForm />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Onboard;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: true,
      },
    };
  }

  if (session.user.onboarded) {
    return {
      redirect: {
        destination: "/platform",
        permanent: true,
      },
    };
  }

  const helpers = trpcHelpers(session);

  await helpers.user.getOnboardUser.prefetch();
  return {
    props: {
      trpcState: helpers.dehydrate(),
    },
  };
}
