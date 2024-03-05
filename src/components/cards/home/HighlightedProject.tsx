import Image from "next/image";

export default function HighlightedProjects() {
  return (
    <div className="w-full">
      <div className="overflow-hidden md:grid md:grid-cols-2 lg:gap-4">
        <div className="px-6 pb-12 pt-10 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:px-20 xl:py-20">
          <div className="lg:self-center">
            <h2 className="text-4xl font-bold tracking-tight text-white xl:text-5xl">
              <span className="block">NFT Highlight:</span>
              <span className="text-sunray block">Utility Ape</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-white/70">
              This weeks highlight just sold out their highly anticipated 2nd
              Generation.
            </p>
            <a
              href="#"
              className="bg-sunray mt-8 inline-flex items-center rounded-xl border border-transparent px-8 py-2.5 text-base font-medium text-black hover:brightness-110"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="hidden w-full items-center justify-center md:flex">
          <div className="group relative md:h-60 md:w-60 xl:h-80 xl:w-80">
            <Image
              src="/featured/utility-ape-stacked.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              className="-translate-x-6 -translate-y-2 scale-75 rounded-3xl duration-700 ease-in-out group-hover:-translate-y-8"
            />
            <Image
              src="/featured/utility-ape.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              className="translate-x-6 translate-y-2 scale-75 rounded-3xl delay-100 duration-700 ease-in-out group-hover:translate-y-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
