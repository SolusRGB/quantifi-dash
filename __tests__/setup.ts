import { PrismaClient } from "@prisma/client";

/**
 * The Prisma client instance.
 */
const prisma = new PrismaClient();
export default prisma;

test("setup file", () => {
  expect(true).toBeTruthy();
});
