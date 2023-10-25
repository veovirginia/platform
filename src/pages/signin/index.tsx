import { type NextPage, type GetServerSidePropsContext } from "next";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import SigninForm from "@/components/forms/SigninForm";
import { getServerAuthSession } from "../api/auth/[...nextauth]";

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
  const session = await getServerAuthSession(ctx);
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
