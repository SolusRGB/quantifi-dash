import { createNextApiHandler } from "@trpc/server/adapters/next";
import { env } from "@/env";
import { appRouter } from "@/server/api/root";
import { createTRPCContext } from "@/server/api/trpc";

// Create and export the tRPC API handler
export default createNextApiHandler({
  // Specify the app router
  router: appRouter,
  // Specify the function to create the tRPC context
  createContext: createTRPCContext,
  // Specify the error handling behavior based on the environment
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          // In development environment, log the error with the path and error message
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`,
          );
        }
      : undefined, // In production environment, don't log errors
});
