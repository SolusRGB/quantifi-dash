import Head from "next/head";
import { IndexLayout } from "@/layout/Layout";
import Dashboard from "./home";

/**
 * This is the home page for the application.
 * It is displayed when a user navigates to the root URL.
 * @returns {JSX.Element} - The home page.
 */

export default function Home() {
  return (
    <>
      <Head>
        <title>Quantifi - Home</title>
        <meta name="Quantifi" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IndexLayout>
        <Dashboard />
      </IndexLayout>
    </>
  );
}
