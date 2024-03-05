import Head from "next/head";
import { IndexLayout } from "@/layout/Layout";
import Dashboard from "./home";

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
