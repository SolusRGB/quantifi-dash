import prisma from "../src/tests/setup";

describe("Db test", () => {
  test("Test database query", async () => {
    const user = await prisma.user.findUnique({
      where: { id: "user-id" },
    });

    expect(user).toBeDefined();
  });
});
