import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { type ProjectData } from "@/types/projectTypes";
import { AiOutlineArrowRight } from "react-icons/ai";

const HomeTableTest = () => {
  const [latestProjects, setLatestProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/api/projects");
      const projects: ProjectData[] = await response.json(); // Explicitly type projects as ProjectData[]
      if (projects.length > 0) {
        setLatestProjects(projects);
      } else {
        console.error("Failed to load projects");
      }
    };

    void fetchProjects(); // Remove the 'await' keyword here
  }, []);

  return (
    <>
      <div className="flex flex-col lg:py-8">
        <div className="flex w-full flex-wrap px-8 pb-0 sm:items-center">
          <div className="mr-auto space-y-4">
            <h1 className="text-2xl font-medium text-white/70">
              Testing DB routing
            </h1>
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
                          <div className="flex items-center">
                            <div className="h-10 w-10">
                              <Image
                                className="rounded-full"
                                src={
                                  project.image
                                    ? `data:image/jpeg;base64,${project.image.toString(
                                        "base64",
                                      )}`
                                    : "/path/to/default/image.jpg"
                                }
                                alt="Project Icon"
                                width={43}
                                height={43}
                                priority
                              />
                            </div>
                            <div className="ml-6">
                              <div className="flex text-lg font-medium tracking-wide text-white">
                                <span className="pr-6">{project.name}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td className="hidden whitespace-nowrap border-t border-[#e6e6e6]/5 py-4 text-white/80 lg:table-cell">
                        {project.assessDate}
                      </td>
                      <td className="hidden whitespace-nowrap border-t border-[#e6e6e6]/5 py-4 text-white/80 lg:table-cell">
                        {project.score ?? "--"}
                      </td>
                      <td className="hidden whitespace-nowrap border-t border-[#e6e6e6]/5 py-4 text-base font-medium tracking-wide text-white/80 lg:table-cell">
                        {project.mintDate}
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
      </div>
    </>
  );
};

export default HomeTableTest;
