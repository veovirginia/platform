import { appRouter } from "@/server/api/root";
import { createInnerTRPCContext } from "@/server/api/trpc";
import { createServerSideHelpers } from "@trpc/react-query/server";
import { type Session } from "next-auth";
import superjson from "superjson";

/**
 * Next.js Server Side Helpers
 *
 * If you want to use TRPC procedures in getServerSideProps, call the helpers in the function.
 *
 * @param session User session
 * @returns TRPC helpers for server side actions
 */
export const trpcHelpers = (session: Session) => {
  return createServerSideHelpers({
    router: appRouter,
    ctx: createInnerTRPCContext({ session }),
    transformer: superjson,
  });
};
