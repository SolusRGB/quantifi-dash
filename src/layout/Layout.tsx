import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  MagnifyingGlassCircleIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import { PAccessCard } from "../components/cards/home/PAccessCard";
import { FolderIcon, BellIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Latest", href: "/", icon: FolderIcon },
  { name: "Projects", href: "/projects", icon: FolderIcon },
  { name: "Charts", href: "/charts", icon: BellIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function IndexLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const router = useRouter();

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-40 flex lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="-translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="-translate-x-0"
              leaveTo="translate-x-full"
            >
              {/* MOBILE MENU */}
              <div className="absolute flex w-full flex-1 flex-col bg-black/80 backdrop-blur-lg">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="flex justify-between border-b border-[#e6e6e6]/5 px-6 py-4">
                    <Link href="/">
                      <div>
                        {/* Mobile quantifi Logo */}
                        <svg
                          id="b"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 1141.3 223.8"
                          width="100px"
                          height="18px"
                          fill="#e6e6e6"
                        >
                          <g id="c">
                            <g>
                              <path
                                className="d"
                                d="M0,111.9C0,47.3,47.4,0,114.6,0s101.1,34.9,111.9,85.9h-56.3c-8.5-22-28.6-36.5-55.6-36.5s-60.6,26.4-60.6,62.5,24.1,62.5,60.6,62.5,47.1-14.5,55.6-36.5h56.3c-10.9,51-54.3,85.9-111.9,85.9C47.4,223.9,0,176.5,0,111.9Z"
                              />
                              <path
                                className="d"
                                d="M275.9,130.4L197.2,4.3h62.9l42.4,75.7L345,4.3h61.6l-77.4,124.5v90.8h-53.3v-89.3h0Z"
                              />
                              <path
                                className="d"
                                d="M408,30l16.3-25.7h68.4c58.6,0,84.6,32,84.6,75.7s-26,76.1-84.6,76.1h-31.3v63.5h-53.3V30h0Zm85.7,76.6c22.8,0,29.6-11.2,29.6-26.7s-6.9-26.4-29.6-26.4h-32.2v53h32.2Z"
                              />
                              <path
                                className="d"
                                d="M589.7,4.3h53.3V85.7h80.6V4.3h53.3V219.6h-53.3v-84.6h-80.6v84.6h-53.3V4.3Z"
                              />
                              <path
                                className="d"
                                d="M791,4.3h159V53.7h-105.7v35.2h86.6v42.8h-86.6v38.6h105.7v49.4h-159V4.3h0Z"
                              />
                              <path
                                className="d"
                                d="M963.9,4.3h87.2c56.9,0,82.3,30.9,82.3,73.8s-12.8,55-40.5,66.5l48.4,75h-63.3l-38.2-67.5h-22.8v67.5h-53.3V4.3h0Zm87.8,98.4c21.4,0,27.7-10.5,27.7-24.7s-6.2-24.3-27.7-24.3h-34.5v49h34.5Z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </Link>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-md text-[#e6e6e6] focus:outline-none"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <MagnifyingGlassCircleIcon
                        className="h-6 w-6 text-platinum"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="min-h-screen w-full overflow-y-auto">
                  <nav className="mt-12 flex flex-col ">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <div
                          className={classNames(
                            router.route === item.href
                              ? "border-l-2 border-white bg-[#3e3e3e]/50 text-white"
                              : "text-white hover:bg-[#3e3e3e]/20 hover:bg-opacity-75",
                            "flex items-center justify-center py-3 text-2xl font-semibold",
                          )}
                          aria-current={
                            router.route === item.href ? "page" : undefined
                          }
                        >
                          <item.icon
                            className="mr-4 h-5 w-5 text-white"
                            aria-hidden="true"
                          />
                          {item.name}
                        </div>
                      </Link>
                    ))}
                    <div className="absolute bottom-14 w-full">
                      <div className="flex flex-wrap-reverse items-center justify-center space-x-4 border-y border-[#e6e6e6]/5 py-6">
                        {isAuthenticated && (
                          <>
                            <button
                              className="my-1 flex rounded-full bg-sunray px-8 py-2 text-lg font-semibold text-black focus:outline-none"
                              onClick={() => signOut()}
                            >
                              Disconnect
                            </button>
                            <div className="my-1 bg-sunray bg-clip-text px-10 py-2 text-lg font-semibold text-transparent">
                              Wallet: {formattedAccount}
                            </div>
                          </>
                        )}

                        {!isAuthenticated && (
                          <button
                            className="mt-10 flex max-w-10 cursor-pointer items-center justify-center rounded-full bg-sunray px-8 py-2 font-semibold text-white drop-shadow-xl transition duration-150 ease-out hover:bg-gradient-to-bl hover:drop-shadow-2xl focus:outline-none focus:ring-2 focus:ring-yellow-300 dark:focus:ring-yellow-800"
                            onClick={() => connectWallet()}
                          >
                            Login
                          </button>
                        )}
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" aria-hidden="true">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Fixed sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:h-full lg:w-80 lg:flex-col">
          {/* CHANGE SIDEBAR COLOR HERE */}
          <div className="flex min-h-0 flex-1 flex-col border-r border-[#e6e6e6]/5 bg-[#242424]">
            <div className="hidden flex-1 flex-col overflow-y-auto pb-4 md:flex">
              <div className="flex flex-shrink-0 justify-center border-b border-[#e6e6e6]/5 py-6">
                <Link href="/">
                  <div>
                    <Image
                      src="/quantifi.svg"
                      alt="Quantifi Logo"
                      width={150}
                      height={50}
                    />
                  </div>
                </Link>
              </div>
              <nav className="flex-0 mx-0 my-7">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <div
                      className={classNames(
                        router.route === item.href
                          ? "border-l-2 border-[#e6e6e6] bg-[#3e3e3e]/20 text-[#f3f3f3]/90 hover:bg-[#3e3e3e]"
                          : "bg-[#3e3e3e]/0 text-[#f3f3f3]/70 hover:bg-[#3e3e3e]/60",
                        "group flex items-center px-20 py-3 text-lg font-medium",
                      )}
                      aria-current={
                        router.route === item.href ? "page" : undefined
                      }
                    >
                      <item.icon
                        aria-hidden="true"
                        className={classNames(
                          router.route === item.href
                            ? "text-[#e6e6e6]/90"
                            : "text-[#e6e6e6]/70",
                          "mr-4 h-5 flex-shrink-0",
                        )}
                        aria-current={
                          router.route === item.href ? "page" : undefined
                        }
                      />
                      {item.name}
                    </div>
                  </Link>
                ))}
              </nav>
              <div className="mt-16">
                <PAccessCard />
              </div>
            </div>
            {/* Sidebar Footer */}
            <Link href="https://www.tradingview.com/">
              <div className="bottom-0 flex h-20 w-full items-center justify-center border-t border-[#e6e6e6]/5 text-white/80">
                <span className="mr-3 text-sm">Back To Trading View</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:ml-80">
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#e6e6e6]/5 bg-[#242424] px-6 py-4 lg:hidden">
            <Link href="/">
              <div>
                {/* Mobile quantifi Logo */}
                <svg
                  id="b"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1141.3 223.8"
                  width="100px"
                  height="18px"
                  fill="#e6e6e6"
                >
                  <g id="c">
                    <g>
                      <path
                        className="d"
                        d="M0,111.9C0,47.3,47.4,0,114.6,0s101.1,34.9,111.9,85.9h-56.3c-8.5-22-28.6-36.5-55.6-36.5s-60.6,26.4-60.6,62.5,24.1,62.5,60.6,62.5,47.1-14.5,55.6-36.5h56.3c-10.9,51-54.3,85.9-111.9,85.9C47.4,223.9,0,176.5,0,111.9Z"
                      />
                      <path
                        className="d"
                        d="M275.9,130.4L197.2,4.3h62.9l42.4,75.7L345,4.3h61.6l-77.4,124.5v90.8h-53.3v-89.3h0Z"
                      />
                      <path
                        className="d"
                        d="M408,30l16.3-25.7h68.4c58.6,0,84.6,32,84.6,75.7s-26,76.1-84.6,76.1h-31.3v63.5h-53.3V30h0Zm85.7,76.6c22.8,0,29.6-11.2,29.6-26.7s-6.9-26.4-29.6-26.4h-32.2v53h32.2Z"
                      />
                      <path
                        className="d"
                        d="M589.7,4.3h53.3V85.7h80.6V4.3h53.3V219.6h-53.3v-84.6h-80.6v84.6h-53.3V4.3Z"
                      />
                      <path
                        className="d"
                        d="M791,4.3h159V53.7h-105.7v35.2h86.6v42.8h-86.6v38.6h105.7v49.4h-159V4.3h0Z"
                      />
                      <path
                        className="d"
                        d="M963.9,4.3h87.2c56.9,0,82.3,30.9,82.3,73.8s-12.8,55-40.5,66.5l48.4,75h-63.3l-38.2-67.5h-22.8v67.5h-53.3V4.3h0Zm87.8,98.4c21.4,0,27.7-10.5,27.7-24.7s-6.2-24.3-27.7-24.3h-34.5v49h34.5Z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </Link>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md text-[#e6e6e6] focus:outline-none"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <LifebuoyIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <main className="mx-auto w-full">
            <div className="hidden backdrop-blur-md lg:sticky lg:top-0 lg:z-50 lg:mb-6 lg:block lg:w-full lg:border-b lg:border-[#e6e6e6]/5 lg:bg-[#121212]/75 lg:py-[1.3rem]">
              <div className="mx-auto md:max-w-7xl md:px-8">
                <Header />
              </div>
            </div>
            <div className="mx-auto md:max-w-5xl lg:max-w-7xl lg:px-8">
              {/* Replace with our nested layout content */}
              {children}
            </div>
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}
function connectWallet(): void {
  throw new Error("Function not implemented.");
}

function signOut(): void {
  throw new Error("Function not implemented.");
}

const isAuthenticated = true;
const formattedAccount = "HR3....D3YW";
