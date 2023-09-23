import { type NextPage, type GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";

const Platform: NextPage = () => {
  return <div className=""></div>;
};

export default Platform;

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
  return {
    props: {},
  };
}
