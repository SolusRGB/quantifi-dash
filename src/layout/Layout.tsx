import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useSession } from "next-auth/react";
import { LifebuoyIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import { PAccessCard } from "../components/cards/home/PAccessCard";
import {
  FolderIcon,
  BellIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import AuthShowcase from "@/components/auth/AuthShowcase";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function IndexLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data: sessionData } = useSession();
  const router = useRouter();

  const navigation = [
    { name: "Latest", href: "/", icon: FolderIcon },
    { name: "Projects", href: "/projects", icon: FolderIcon },
    { name: "Charts", href: "/charts", icon: BellIcon },
    {
      name: "Profile",
      href: sessionData?.user
        ? `/users/${sessionData.user.id}`
        : "/api/auth/signin",
      icon: UserCircleIcon,
    },
  ];

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
                        <Image
                          src="/quantifi.svg"
                          alt="Quantifi Logo"
                          width={150}
                          height={50}
                          style={{
                            maxWidth: "70%",
                            height: "auto",
                          }}
                        />
                      </div>
                    </Link>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-md text-[#e6e6e6] focus:outline-none"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <LifebuoyIcon
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
                      <div className="flex flex-wrap-reverse items-center justify-center space-x-4 border-y border-[#e6e6e6]/5 p-20 py-6">
                        {isAuthenticated && (
                          <>
                            <AuthShowcase />
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
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
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
                <Image
                  src="/quantifi.svg"
                  alt="Quantifi Logo"
                  width={150}
                  height={50}
                  style={{
                    maxWidth: "70%",
                    height: "auto",
                  }}
                />
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
              <div className="md:max-w-8xl mx-auto md:px-8">
                <Header />
              </div>
            </div>
            <div className="mx-auto md:max-w-5xl lg:max-w-7xl lg:px-1">
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
