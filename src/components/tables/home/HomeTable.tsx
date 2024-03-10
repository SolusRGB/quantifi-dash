import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import solanaIcon from "../../../../public/icons/solana-logo.svg";

const latestProjects = [
  {
    name: "Utility Ape",
    assessDate: "OCT 7",
    score: "--",
    mintDate: "OCT 14",
    image: "/icons/utility-ape.jpg",
    href: "/projects/utility-ape",
    chain: "solana",
  },
  {
    name: "Busy Boars",
    assessDate: "OCT 1",
    score: 83,
    mintDate: "MINTED",
    image: "/icons/busy-boars.jpg",
    href: "/projects/busy-boars",
    chain: "solana",
  },
  {
    name: "Fearless Bulls",
    assessDate: "AUG 25",
    score: 70,
    mintDate: "MINTED",
    image: "/icons/fearless-bulls.png",
    href: "/projects/fearless-bulls",
    chain: "solana",
  },
  {
    name: "Satori",
    assessDate: "AUG 5",
    score: 83,
    mintDate: "MINTED",
    image: "/icons/satori.png",
    href: "/projects/satori",
    chain: "solana",
  },
];

const HomeTableTitle = () => {
  return (
    <div className="flex w-full flex-wrap px-8 pb-0 sm:items-center">
      <div className="mr-auto space-y-4">
        <h1 className="text-2xl font-medium text-white/70">Top Projects</h1>
      </div>
      <div className="flex place-content-center sm:mt-auto sm:flex-none">
        <Link href="/projects">
          <div className="group inline-flex items-center font-medium text-white/70">
            View All Projects{" "}
            <h1 className="pl-3 duration-150 group-hover:translate-x-1">
              &rarr;
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export function HomeTable() {
  return (
    <>
      <div className="flex flex-col lg:py-8">
        <HomeTableTitle />
        <div className="overflow-x-auto lg:mt-6">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden border border-[#e6e6e6]/5 bg-[#242424] py-2 lg:rounded-t-3xl">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-medium text-[#e6e6e6]/80 sm:px-12 sm:py-6"
                    >
                      NFT PROJECT
                    </th>
                    <th
                      scope="col"
                      className="hidden py-3.5 text-left text-sm font-medium text-[#e6e6e6]/80 lg:table-cell"
                    >
                      ASSESSED ON
                    </th>
                    <th
                      scope="col"
                      className="hidden py-3.5 text-left text-sm font-medium text-[#e6e6e6]/80 lg:table-cell"
                    >
                      SCORE
                    </th>
                    <th
                      scope="col"
                      className="hidden py-3.5 text-left text-sm font-medium text-[#e6e6e6]/80 lg:table-cell"
                    >
                      MINTS
                    </th>
                    <th scope="col" className="relative py-3.5">
                      <span className="sr-only">EDIT</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {latestProjects.map((project) => (
                    <tr key={project.name}>
                      <td className="whitespace-nowrap border-t border-[#e6e6e6]/5 py-6 pl-4 pr-14 text-sm sm:pl-12">
                        <Link href={project.href}>
                          <div>
                            <div className="flex items-center">
                              <div className="h-10 w-10">
                                <Image
                                  className="rounded-full"
                                  src={project.image}
                                  alt="Project Icon"
                                  width={43}
                                  height={43}
                                  priority
                                />
                              </div>
                              <div className="ml-6">
                                <div className="flex text-lg font-medium tracking-wide text-white">
                                  <span className="pr-6">{project.name}</span>
                                  {project.chain === "solana" ? (
                                    <>
                                      <Image
                                        alt="Solana"
                                        src={solanaIcon as string}
                                        width={16}
                                        height={16}
                                        style={{
                                          maxWidth: "100%",
                                          height: "auto",
                                        }}
                                      />
                                    </>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td className="hidden whitespace-nowrap border-t border-[#e6e6e6]/5 py-4 text-white/80 lg:table-cell">
                        <Link href={project.href}>
                          <div>
                            <div className="text-base font-medium tracking-wide">
                              {project.assessDate}
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td className="hidden whitespace-nowrap border-t border-[#e6e6e6]/5 py-4 text-white/80 lg:table-cell">
                        <Link href={project.href}>
                          <div>
                            <span className="inline-flex text-base font-medium tracking-wide">
                              {project.score}
                            </span>
                          </div>
                        </Link>
                      </td>
                      <td className="hidden whitespace-nowrap border-t border-[#e6e6e6]/5 py-4 text-base font-medium tracking-wide text-white/80 lg:table-cell">
                        <Link href={project.href}>
                          <div>{project.mintDate}</div>
                        </Link>
                      </td>
                      <td className="relative whitespace-nowrap border-t border-[#e6e6e6]/5 py-2">
                        <Link href={project.href}>
                          <button
                            type="button"
                            className="inline-flex items-center rounded-full border border-[#e6e6e6]/5 bg-sunray p-2 text-gunmetal shadow-lg focus:outline-none focus:ring-2 focus:ring-lightGrey focus:ring-offset-2"
                          >
                            <AiOutlineArrowRight
                              className="h-4 w-4"
                              aria-hidden="true"
                            />
                            <span className="sr-only">, {project.name}</span>
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden border border-[#e6e6e6]/5 bg-[#242424] py-2 lg:rounded-b-3xl"></div>
          </div>
        </div>
      </div>
    </>
  );
}
