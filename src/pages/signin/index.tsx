import { type NextPage, type GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import SigninForm from "@/components/forms/SigninForm";

const Signin: NextPage = () => {
  return (
    <DefaultLayout>
      <div className="flex w-full flex-1 flex-col items-center pt-8 md:pt-20">
        <SigninForm />
      </div>
    </DefaultLayout>
  );
};

export default Signin;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getSession(ctx);
  if (session) {
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
