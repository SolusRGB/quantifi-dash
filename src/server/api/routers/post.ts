import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

/**
 * Router for handling POST requests.
 */
export const postRouter = createTRPCRouter({
  /**
   * Retrieves a greeting message based on the provided text.
   * @param input - The input object containing the text.
   * @returns An object with the greeting message.
   */
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello, ${input.text}`,
      };
    }),

  /**
   * Creates a new post.
   * @param input - The input object containing the name of the post.
   * @returns The created post object.
   */
  // this is a protected measure, which means it requires authentication this is taking the user name when it was created and updated then returns this
  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.post.create({
        data: {
          name: input.name,
          createdBy: { connect: { id: ctx.session.user.id } },
          updatedAt: new Date(), // Add the updatedAt property
        },
      });
    }),

  /**
   * Retrieves the latest post created by the authenticated user.
   * @returns The latest post object.
   */
  getLatest: protectedProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: ctx.session.user.id } },
    });
  }),

  /**
   * Retrieves a secret message for the authenticated user.
   * @returns The secret message.
   */
  getSecretMessage: protectedProcedure.query(() => {
    return "Authenticated ";
  }),
});
