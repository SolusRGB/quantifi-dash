import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

/**
 * This is the environment configuration for the application. It is used to validate the environment variables
 * This comes from the `@t3-oss/env-nextjs` package.
 * You can define the environment variables schema here.
 */

/**
 * Represents the environment configuration for the application.
 *
 * @typedef {Object} EnvConfig
 * @property {Object} server - Server-side environment variables schema.
 * @property {string} server.DATABASE_URL - The URL of the database.
 * @property {string} server.NODE_ENV - The environment mode (development, test, production).
 * @property {string} server.NEXTAUTH_SECRET - The secret key for NextAuth.js.
 * @property {string} server.NEXTAUTH_URL - The URL for NextAuth.js.
 * @property {string} server.DISCORD_CLIENT_ID - The Discord client ID.
 * @property {string} server.DISCORD_CLIENT_SECRET - The Discord client secret.
 * @property {Object} client - Client-side environment variables schema.
 * @property {Object} runtimeEnv - Runtime environment variables.
 * @property {boolean} skipValidation - Flag to skip environment validation.
 * @property {boolean} emptyStringAsUndefined - Flag to treat empty strings as undefined.
 */

/**
 * Creates the environment configuration object.
 *
 * @param {EnvConfig} config - The configuration object.
 * @returns {Object} The environment configuration object.
 */
export const env = createEnv({
  /**
   * to ensure the app isn't built with invalid env vars.
   */
  server: {
    DATABASE_URL: z
      .string()
      .url()
      .refine(
        (str) => !str.includes("YOUR_MYSQL_URL_HERE"),
        "You forgot to change the default URL",
      ),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    NEXTAUTH_SECRET:
      process.env.NODE_ENV === "production"
        ? z.string()
        : z.string().optional(),
    NEXTAUTH_URL: z.preprocess(
      // This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
      // Since NextAuth.js automatically uses the VERCEL_URL if present.
      (str) => process.env.VERCEL_URL ?? str,
      // VERCEL_URL doesn't include `https` so it cant be validated as a URL
      process.env.VERCEL ? z.string() : z.string().url(),
    ),
    DISCORD_CLIENT_ID: z.string(),
    DISCORD_CLIENT_SECRET: z.string(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
    DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
