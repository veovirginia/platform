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
      emailVerified: Date | null;
      onboarded: string;
      name: string;
      bio: string;
      image: string;
      phone: string;
      graduation: string;
      major: string;
      idea: string;
    };
  }

  interface User {
    id: string;
    email: string;
    emailVerified: Date | null;
    onboarded: string;
    name: string;
    bio: string;
    image: string;
    phone: string;
    graduation: string;
    major: string;
    idea: string;
  }
}

export const SEVEN_DAYS_IN_SECONDS = 604800;

function text({ url, host }: Record<"url" | "host", string>) {
  const urlBuffer = Buffer.from(encodeURIComponent(url));
  const base64URL = urlBuffer.toString("base64");
  const emailURL = `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/signin/${base64URL}`;
  return `Sign in to ${host}\n${emailURL}\n\n`;
}

function html({ url, host, email }: Record<"url" | "host" | "email", string>) {
  const escapedEmail = `${email.replace(/\./g, "&#8203;.")}`;
  const escapedHost = `${host.replace(/\./g, "&#8203;.")}`;

  const backgroundColor = "#030303";

  const textColor = "#d4d4d8";
  const mainBackgroundColor = "#121212";
  const buttonBackgroundColor = "#fafafa";
  const buttonBorderColor = "#fafafa";
  const buttonTextColor = "#030303";

  const urlBuffer = Buffer.from(encodeURIComponent(url));
  const base64URL = urlBuffer.toString("base64");
  const emailURL = `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/access/${base64URL}`;

  return `
  <body style="background: ${backgroundColor};">
 <table width="100%" border="0" cellspacing="0" cellpadding="0">
   <tr>
     <td align="center" style="padding: 10px 0px 20px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
       <strong>${escapedHost}</strong>
     </td>
   </tr>
 </table>
 <table width="100%" border="0" cellspacing="20" cellpadding="0" style="background: ${mainBackgroundColor}; max-width: 600px; margin: auto; border-radius: 10px;">
   <tr>
     <td align="center" style="padding: 10px 0px 0px 0px; font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
       Sign in as <strong>${escapedEmail}</strong>
     </td>
   </tr>
   <tr>
     <td align="center" style="padding: 20px 0;">
       <table border="0" cellspacing="0" cellpadding="0">
         <tr>
           <td align="center" style="border-radius: 5px;" bgcolor="${buttonBackgroundColor}"><a href="${emailURL}" target="_blank" style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${buttonTextColor}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${buttonBorderColor}; display: inline-block; font-weight: bold;">Sign in</a></td>
         </tr>
       </table>
     </td>
   </tr>
   <tr>
     <td align="center" style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
       If you did not request this email you can safely ignore it.
     </td>
   </tr>
 </table>
</body>
`;
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
  async sendVerificationRequest({
    identifier: email,
    url,
    provider: { server, from },
  }) {
    const { host } = new URL(url);
    console.log("host", host);
    const transport = nodemailer.createTransport(server as SMTPTransport);
    await transport.sendMail({
      to: email,
      from,
      subject: `Sign in to ${host}`,
      text: text({ url, host }),
      html: html({ url, host, email }),
    });
  },
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
    newUser: "/onboard",
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
