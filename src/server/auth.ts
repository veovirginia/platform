import { PrismaAdapter } from "@auth/prisma-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
  type Session,
} from "next-auth";
import { type AdapterUser, type Adapter } from "next-auth/adapters";
import Email from "next-auth/providers/email";

import { env } from "@/env";
import { db } from "@/server/db";
import { type JWT } from "next-auth/jwt";
import { SEVEN_DAYS_IN_SECONDS } from "@/lib/constants";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      email: string;
      name: string;
      avatar: string;
      onboarded: boolean;
      verified: boolean;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    email: string;
    name: string;
    avatar: string;
    onboarded: boolean;
    verified: boolean;
  }
}

const EmailProvider = Email({
  server: {
    host: env.EMAIL_HOST,
    port: Number(env.EMAIL_PORT),
    auth: {
      user: env.EMAIL_USER,
      pass: env.EMAIL_PASSWORD,
    },
  },
  from: `Virginia Entrepreneurship Organization <${env.EMAIL_FROM}>`,
});

interface SessionCallbackParams {
  session: Session;
  token: JWT;
  user: AdapterUser;
  newSession: unknown;
  trigger: "update";
}

const session = ({ session, user }: SessionCallbackParams) => {
  if (session.user) {
    session.user = { ...user };
  }
  return session;
};

const authOptions: NextAuthOptions = {
  callbacks: {
    session,
  },
  adapter: PrismaAdapter(db) as Adapter,
  providers: [EmailProvider],
  pages: {
    signIn: "/signin",
    newUser: "/platform/onboard",
  },
  secret: env.NEXTAUTH_SECRET,
  session: {
    strategy: "database",
    maxAge: SEVEN_DAYS_IN_SECONDS,
    updateAge: SEVEN_DAYS_IN_SECONDS,
  },
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
