import Head from "next/head";
import Link from "next/link";
import { IndexLayout } from "../layout/Layout";

/**
 * This is the custom 404 page for the application.
 * It is displayed when a user navigates to a page that does not exist.
 * @returns {JSX.Element} - The 404 page.
 */
export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page not found.</title>
        <meta name="Quantifi" content="404 not found" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-[calc(100vh-218px)] items-center justify-center">
        <main className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/70">
            404 error
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Page not found.
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
