import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import { Analytics } from "@vercel/analytics/react";

import { api } from "@/utils/api";

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType<{ children: React.ReactNode }>;
  };
};

/**
 * This is where the entire application runs from.
 * It wraps the entire application with the SessionProvider to provide session data to all components.
 * It also includes the Analytics component from Vercel to track page views.
 * @param {AppProps} param0 - The AppProps object containing the Component and pageProps.
 * @returns {JSX.Element} - The application component.
 */

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: ComponentWithPageLayout & { pageProps: { session?: Session | null } }) {
  return (
    <SessionProvider session={session as Session}>
      {" "}
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
          <Analytics />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

export default api.withTRPC(MyApp);
