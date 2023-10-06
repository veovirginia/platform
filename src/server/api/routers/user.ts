import { z } from "zod";
import _ from "lodash";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { isValidPhoneNumber } from "react-phone-number-input";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { TRPCError } from "@trpc/server";
import { type User } from "@prisma/client";

interface PickedUser {
  name: string;
  phone: string;
  graduation: string;
  major: string;
  idea: string;
}

export const userRoute = createTRPCRouter({
  updateUser: protectedProcedure
    .input(
      z.object({
        name: z
          .string()
          .min(2, "Must be at least 2 characters.")
          .max(128, "Can not exceed 128 characters."),
        phone: z
          .string({
            required_error: "Can not be empty.",
            invalid_type_error: "Can not be empty.",
          })
          .refine(
            (phone) => isValidPhoneNumber(phone),
            "Must be a valid phone number.",
          ),
        graduation: z
          .string()
          .regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/g, "Must be a valid date."),
        major: z
          .string()
          .min(4, "Must be at least 4 characters.")
          .max(128, "Can not exceed 32 characters.")
          .regex(/^[a-zA-Z- ]+$/, "Must be a valid major"),
        idea: z.string().max(128, "Can not exceed 128 characters."),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.db.user.update({
          where: {
            id: ctx.session.user.id,
          },
          data: {
            ...input,
          },
        });
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          // TODO: Add logger for errors
          console.error(error);
        } else {
          console.error(error);
        }
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Unable to update user.",
        });
      }
    }),

  getUser: protectedProcedure.query(async ({ ctx }) => {
    try {
      const user: User | null = await ctx.db.user.findUnique({
        where: {
          id: ctx.session.user.id,
        },
      });

      if (!user) return null;
      return _.pick(
        user,
        "name",
        "phone",
        "graduation",
        "major",
        "idea",
      ) as PickedUser;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        // TODO: Add logger for errors
        console.error(error);
      } else {
        console.error(error);
      }
    }
  }),
});
