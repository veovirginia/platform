import { type FC, type ReactNode } from "react";
import Sidebar from "../Sidebar";
import { getSession, useSession } from "next-auth/react";
import VerifiedWrapper from "../VerifiedWrapper";
import { type GetServerSidePropsContext } from "next";

interface PlatformLayoutProps {
  children: ReactNode;
}

const PlatformLayout: FC<PlatformLayoutProps> = ({
  children,
}: PlatformLayoutProps) => {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <div className="relative flex min-h-screen w-full flex-1 flex-col bg-background">
      <main className="mx-auto flex h-full w-full flex-1">
        <Sidebar session={session} />
        <VerifiedWrapper session={session}>{children}</VerifiedWrapper>
      </main>
    </div>
  );
};

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
  if (!session.user.onboarded) {
    return {
      redirect: {
        destination: "/platform/onboard",
        permanent: true,
      },
    };
  }
  return {
    props: {},
  };
}

export default PlatformLayout;
