import Head from "next/head";

import { IndexLayout } from "../layout/Layout";
import MagicEdenTable from "@/components/tables/magic-eden/MagicEdenTable";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Quantifi - Projects</title>
        <meta name="Quantifi" content="404 not found" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MagicEdenTable />
      </main>
    </>
  );
}

Projects.PageLayout = IndexLayout;
