import NextAuth from "next-auth";

import { authOptions } from "@/server/auth";

/**
 * This file exports the default NextAuth instance with the provided authentication options.
 *
 * @param {object} authOptions - The authentication options for NextAuth.
 * @returns {object} - The NextAuth instance.
 */
export default NextAuth(authOptions);
