import { type FC, type ReactNode } from "react";
import Sidebar from "../sidebar/Sidebar";
import VerifiedWrapper from "../VerifiedWrapper";
import MobileSidebar from "../MobileSidebar";

interface PlatformLayoutProps {
  children: ReactNode;
}

const PlatformLayout: FC<PlatformLayoutProps> = ({
  children,
}: PlatformLayoutProps) => {
  return (
    <div className="relative flex min-h-screen w-full flex-1 flex-col bg-background">
      <div className="flex h-full w-full flex-1">
        <main className="w-full flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[280px_minmax(0,1fr)]">
          <Sidebar />
          <section className="relative h-full w-full">
            {/* <Header /> */}
            <MobileSidebar />
            <VerifiedWrapper>{children}</VerifiedWrapper>
          </section>
        </main>
      </div>
    </div>
  );
};

export default PlatformLayout;
