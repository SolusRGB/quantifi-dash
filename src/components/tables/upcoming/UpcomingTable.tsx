/* This example requires Tailwind CSS v2.0+ */
import { CheckCircleIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import upcomingTableData from "./data/UpcomingTableData.json";

type UpcomingTableProps = {
  projects: {
    name: string;
    chain: string;
    imageUrl: string;
  };
  mintDate: string;
  stage: string;
  href?: string;
};

export function UpcomingTable({}: UpcomingTableProps) {
  return (
    <div className="bg-lightGrey mt-10 overflow-hidden rounded-[3rem] shadow-xl">
      <ul role="list" className="divide-battleshipGrey divide-y">
        {upcomingTableData.map((upcomingTable) => (
          <li key={upcomingTable.project.chain}>
            <Link href={upcomingTable.href}>
              <div className="hover:bg-gunmetal block duration-500">
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="flex min-w-0 flex-1 items-center">
                    <div className="flex-shrink-0">
                      <Image
                        className="rounded-full"
                        src={upcomingTable.project.imageUrl}
                        alt="Project Icon"
                        width={43}
                        height={43}
                        priority />
                    </div>

                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-platinum text-md truncate font-bold">
                          {upcomingTable.project.name}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-300">
                          <Image src="/solana-logo.svg" alt="Solana Logo" width={15} height={15} priority />
                          <span className="ml-1 truncate">
                            {upcomingTable.project.chain}
                          </span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-md text-platinum font-bold">
                            Mints on <time>{upcomingTable.mintDate}</time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-300">
                            <CheckCircleIcon
                              className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                              aria-hidden="true"
                            />
                            {upcomingTable.stage}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ChevronRightIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
