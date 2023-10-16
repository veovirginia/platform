import { type FC, type ReactNode } from "react";
import Sidebar from "../Sidebar";
import { getSession, useSession } from "next-auth/react";
import VerifiedWrapper from "../VerifiedWrapper";
import { type GetServerSidePropsContext } from "next";
import { Button } from "../ui/button";
import { SiSubstack, SiGithub } from "react-icons/si";

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
          <section className="relative w-full">
            <header className="flex h-14 w-full items-center justify-between gap-6 border-b border-border px-6 py-2">
              <div className="">
                <h2 className="font-heading text-lg font-semibold">Profile</h2>
              </div>
              <div className="flex items-center ">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => console.log("das")}
                >
                  <SiSubstack className="" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => console.log("das")}
                >
                  <SiGithub className="" />
                </Button>
              </div>
            </header>
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
