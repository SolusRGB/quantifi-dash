import Head from "next/head";
import Link from "next/link";
import { IndexLayout } from "../layout/Layout";

/**
 * This is the custom 500 page for the application.
 * It is displayed when a server error occurs.
 * @returns {JSX.Element} - The 500 page.
 */
export default function NotFound() {
  return (
    <>
      <Head>
        <title>Internal server error.</title>
        <meta name="Quantifi" content="500 server error" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-[calc(100vh-218px)] items-center justify-center">
        <main className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/70">
            500 error
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Internal server error.
          </h1>
          <div className="mt-6">
            <Link href={"/"}>
              <div className="text-base font-medium text-sunray hover:brightness-110">
                Go back home
                <span aria-hidden="true"> &rarr;</span>
              </div>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}

NotFound.PageLayout = IndexLayout;
