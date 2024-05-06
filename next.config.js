await import("./src/env.js");

/**
 * This is used for the Next.js configuration.
 * I have added line 16-22 to enable the ability to use images from Discord's CDN. (For profile pics)
 */

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: false,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        port: "",
      },
    ],
  },
};

export default config;
