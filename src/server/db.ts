import { PrismaClient } from "@prisma/client";

import { env } from "@/env";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

/**
 * The database instance used for interacting with the database.
 * If `globalForPrisma.prisma` is defined, it is used as the database instance.
 * Otherwise, a new instance of `PrismaClient` is created.
 *
 * @remarks
 * The logging behavior of the database instance depends on the `NODE_ENV` environment variable.
 * In development mode, the database instance logs queries, errors, and warnings.
 * In other environments, only errors are logged.
 */
export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;
