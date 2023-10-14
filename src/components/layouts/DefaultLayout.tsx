import { type FC, type ReactNode } from "react";
import Navbar from "../global/Navbar";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({
  children,
}: DefaultLayoutProps) => {
  return (
    <div className="relative flex min-h-screen w-full flex-1 flex-col bg-background bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.09)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
      <Navbar />
      <main className="mx-auto flex w-full max-w-body flex-1">{children}</main>
    </div>
  );
};

export default DefaultLayout;
