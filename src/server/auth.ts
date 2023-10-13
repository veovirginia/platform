import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
  type Session,
} from "next-auth";

import { env } from "@/env.mjs";
import { db } from "@/server/db";
import Email from "next-auth/providers/email";
import { type AdapterUser } from "next-auth/adapters";
import { type JWT } from "next-auth/jwt";
import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      id: string;
      email: string;
      name: string;
      image: string;
      onboarded: boolean;
      verified: boolean;
    };
  }

  interface User {
    id: string;
    email: string;
    name: string;
    image: string;
    onboarded: boolean;
    verified: boolean;
  }
}

export const SEVEN_DAYS_IN_SECONDS = 604800;

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

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    session,
  },
  adapter: PrismaAdapter(db),
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
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
