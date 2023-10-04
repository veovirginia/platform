import OnboardStepOneForm from "@/components/forms/OnboardStepOneForm";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import { type NextPage, type GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";

const Onboard: NextPage = () => {
  return (
    <DefaultLayout>
      <div className="flex w-full flex-1 justify-center pt-12">
        <OnboardStepOneForm />
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
  return {
    props: {},
  };
}
