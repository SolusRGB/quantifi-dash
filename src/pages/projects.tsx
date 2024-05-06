import Head from "next/head";

import { IndexLayout } from "../layout/Layout";
import MagicEdenTable from "@/components/tables/magic-eden/MagicEdenTable";
import SolanaPriceInfo from "@/components/tokens/SolanaPriceInfo";

/**
 * This is the projects page for the application.
 * It is displayed when a user navigates to the /projects URL.
 * @returns {JSX.Element} - The projects page.
 */

export default function Projects() {
  return (
    <>
      <Head>
        <title>Quantifi - Projects</title>
        <meta name="Quantifi" content="404 not found" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex">
          <SolanaPriceInfo />
        </div>
        <MagicEdenTable />
      </main>
    </>
  );
}

Projects.PageLayout = IndexLayout;
