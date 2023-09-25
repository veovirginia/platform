import { type FC, type ReactNode } from "react";
import Navbar from "../global/Navbar";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({
  children,
}: DefaultLayoutProps) => {
  return (
    <div className="flex min-h-screen w-full flex-1 flex-col bg-background">
      <Navbar />
      <main className="max-w-body mx-auto flex w-full flex-1">{children}</main>
    </div>
  );
};

export default DefaultLayout;
