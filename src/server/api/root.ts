// src/server/api/root.ts

import { postRouter } from "@/server/api/routers/post";

import { createTRPCRouter } from "@/server/api/trpc";

/**
 * The appRouter is a TRPC router that handles HTTP POST requests.
 * It is responsible for routing requests to the postRouter.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
});

export type AppRouter = typeof appRouter;
