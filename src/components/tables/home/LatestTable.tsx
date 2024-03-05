import Image from "next/legacy/image";
import Link from "next/link";

import { AiOutlineArrowRight } from "react-icons/ai";

const latestProjects = [
  {
    id: 1,
    name: "Utility Ape",
    assessDate: "OCT 7 2022",
    discord: "https://discord.gg/myKetMYX",
    twitter: "https://twitter.com/suteki_nft?s=21&t=ExMjOHfyOt8gMH_SSSh8tw",
    score: 83,
    mintDate: "GEN 2 | OCT 14",
    image: "/icons/utility-ape.jpg",
    href: "/projects/utility-ape",
  },
  {
    id: 2,
    name: "Busy Boars",
    assessDate: "OCT 1 2022",
    discord: "https://discord.gg/myKetMYX",
    twitter: "https://twitter.com/suteki_nft?s=21&t=ExMjOHfyOt8gMH_SSSh8tw",
    score: 83,
    mintDate: "MINTED",
    image: "/icons/busy-boars.jpg",
    href: "/projects/busy-boars",
  },
  {
    id: 3,
    name: "Fearless Bulls",
    assessDate: "AUG 25 2022",
    discord: "https://discord.gg/sKEgbev5",
    twitter: "https://twitter.com/fearless_bulls?s=21&t=ExMjOHfyOt8gMH_SSSh8tw",
    score: 70,
    mintDate: "MINTED",
    image: "/icons/fearless-bulls.png",
    href: "/projects/fearless-bulls",
  },
  {
    id: 4,
    name: "Satori",
    assessDate: "AUG 05 2022",
    discord: "https://t.co/oNdspRLsW1",
    twitter: "",
    score: 83,
    mintDate: "MINTED",
    image: "/icons/satori.png",
    href: "/projects/satori",
  },
  {
    id: 5,
    name: "Crowdsurf",
    assessDate: "AUG 01 2022",
    discord: "https://t.co/u0GYHZZGzo",
    twitter: "https://twitter.com/crowdsurfnft?s=21&t=ExMjOHfyOt8gMH_SSSh8tw",
    score: 82,
    mintDate: "MINTED",
    image: "/icons/crowdsurf.png",
    href: "/projects/crowdsurf",
  },
  {
    id: 6,
    name: "Beneath",
    assessDate: "AUG 01 2022",
    discord: "https://t.co/u0GYHZZGzo",
    twitter: "https://twitter.com/crowdsurfnft?s=21&t=ExMjOHfyOt8gMH_SSSh8tw",
    score: 82,
    mintDate: "MINTED",
    image: "/icons/beneath.jpg",
    href: "/projects/beneath",
  },
  {
    id: 7,
    name: "Secret Llama Agency",
    assessDate: "AUG 01 2022",
    discord: "https://t.co/u0GYHZZGzo",
    twitter: "https://twitter.com/crowdsurfnft?s=21&t=ExMjOHfyOt8gMH_SSSh8tw",
    score: 82,
    mintDate: "MINTED",
    image: "/icons/secret-llama-agency.jpg",
    href: "/projects/secret-llama-agency",
  },
  {
    id: 8,
    name: "Suteki",
    assessDate: "MAY 27 2022",
    discord: "https://discord.gg/myKetMYX",
    twitter: "https://twitter.com/suteki_nft?s=21&t=ExMjOHfyOt8gMH_SSSh8tw",
    score: 83,
    mintDate: "MINTED",
    image: "/icons/suteki.png",
    href: "/projects/suteki",
  },
];

//! set up typescript restrictions

type projectsProps = {
  id: number;
  name: string;
  assessDate: string;
  discord: string;
  twitter: string;
  score: number;
  mintDate: string;
  image: string;
};

export function LatestTable() {
  return (
    <>
      <div className="w-full overflow-auto rounded-3xl bg-[#242424] py-4">
        <table className="table-auto">
          <thead className="border-b border-[#e6e6e6]/5">
            <tr>
              <th
                scope="col"
                className="py-5 pl-12 text-left text-sm font-medium text-[#e6e6e6]/90"
              >
                PROJECT
              </th>
              <th
                scope="col"
                className="py-5 text-left text-sm font-medium text-[#e6e6e6]/90"
              >
                CERTIFIED
              </th>
              <th
                scope="col"
                className="py-5 text-left text-sm font-medium text-[#e6e6e6]/90"
              >
                SCORE
              </th>
              <th
                scope="col"
                className="py-5 text-left text-sm font-medium text-[#e6e6e6]/90"
              >
                MINT
              </th>
              <th
                scope="col"
                className="py-5 text-left text-sm font-medium text-[#e6e6e6]/90"
              >
                <span className="sr-only">Select project</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {latestProjects.map((project) => (
              <tr key={project.id} className="border-b border-[#e6e6e6]/5">
                <td className="whitespace-nowrap py-4 pl-12 text-sm font-medium text-[#e6e6e6]">
                  <Link key={project.id} href={project.href}>
                    <div>
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <Image
                            className="rounded-full"
                            src={project.image}
                            alt="Project Icon"
                            width={43}
                            height={43}
                            layout="fixed"
                            priority
                          />
                        </div>
                        <div className="ml-6">
                          <div className="text-base font-semibold tracking-wide text-white">
                            {project.name}
                          </div>

                          <div className="grid-row-1 flex">
                            <Link href={project.discord}>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="22"
                                  fill="currentColor"
                                  className="text-[#e6e6e6]"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                                </svg>
                              </div>
                            </Link>

                            <Link href={project.twitter}>
                              <div>
                                {/* <Twitter
                                  sx={{
                                    color: grey[300],
                                    ":hover": {
                                      color: grey[400],
                                    },
                                    fontSize: 18,
                                    ml: 1.5,
                                  }}
                                /> */}
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </td>
                <td className="whitespace-nowrap py-4 text-sm font-light text-[#e6e6e6]">
                  <Link key={project.id} href={project.href}>
                    <div>{project.assessDate}</div>
                  </Link>
                </td>
                <td className="whitespace-nowrap py-4 text-sm font-light text-[#e6e6e6]">
                  <Link key={project.id} href={project.href}>
                    <div>{project.score}</div>
                  </Link>
                </td>
                <td className="whitespace-nowrap py-4 text-sm font-light text-[#e6e6e6]">
                  <Link key={project.id} href={project.href}>
                    <div>{project.mintDate}</div>
                  </Link>
                </td>
                <td className="whitespace-nowrap py-4 text-sm font-light text-[#e6e6e6]">
                  <Link href={project.href}>
                    <button
                      type="button"
                      className="text-gunmetal bg-maxBlueGreen focus:ring-lightGrey inline-flex items-center rounded-full border border-transparent p-3 shadow-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2"
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
    </>
  );
}
