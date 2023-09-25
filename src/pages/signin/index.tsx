import { type NextPage, type GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import SigninForm from "@/components/forms/SigninForm";

const Signin: NextPage = () => {
  return (
    <DefaultLayout>
      <div className="flex w-full flex-1 justify-center pt-24 lg:pt-48">
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
