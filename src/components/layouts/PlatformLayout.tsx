import { type FC, type ReactNode } from "react";
import Sidebar from "../sidebar/Sidebar";
import { getSession, useSession } from "next-auth/react";
import VerifiedWrapper from "../VerifiedWrapper";
import { type GetServerSidePropsContext } from "next";
import MobileSidebar from "../MobileSidebar";

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
      <div className="flex h-full w-full flex-1">
        <main className="w-full flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[280px_minmax(0,1fr)]">
          <Sidebar session={session} />
          <section className="relative h-full w-full">
            {/* <Header /> */}
            <MobileSidebar session={session} />
            <VerifiedWrapper session={session}>{children}</VerifiedWrapper>
          </section>
        </main>
      </div>
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
