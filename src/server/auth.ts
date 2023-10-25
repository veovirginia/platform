import { requestWrapper } from "@/pages/api/auth/[...nextauth]";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

export const getServerAuthSession = async (ctx: {
  req: NextApiRequest;
  res: NextApiResponse;
}) => {
  return await getServerSession(...requestWrapper(ctx.req, ctx.res));
};
