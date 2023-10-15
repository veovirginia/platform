import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppProps, type AppType } from "next/app";
import { Inter, Manrope } from "next/font/google";
import { api } from "@/utils/api";
import "@/styles/globals.css";
import { cn } from "@/lib/clientUtils";
import { type ReactElement, type ReactNode } from "react";
import { type NextPage } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SessionProvider session={session as Session}>
      <div className={cn(`${inter.variable} ${manrope.variable} font-sans`)}>
        {getLayout(<Component {...pageProps} />)}
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
