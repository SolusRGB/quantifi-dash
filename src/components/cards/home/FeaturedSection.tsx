import featuredData from "./data/FeaturedData.json";
import Image from "next/image";
import Link from "next/link";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

type FeaturedCardsProp = {
  path: string;
  name: string;
  header: string;
  label: string;
};

const FeaturedCards = ({ path, name, header, label }: FeaturedCardsProp) => {
  return (
    <div>
      <Link href={path} target="_blank" rel="noopener noreferrer">
        <div className="aspect-w-1 aspect-h-1 relative overflow-hidden duration-100 hover:brightness-110 lg:rounded-3xl">
          <Image
            alt={name}
            src={header}
            priority
            fill
            sizes="100vw"
            style={{
              objectFit: "cover"
            }} />
        </div>
        <div className="flex">
          <div className="inline-flex items-center px-4 pt-3 text-xs font-medium text-white/80 xl:text-lg">
            {name}
          </div>
        </div>
      </Link>
      <div className="px-auto flex cursor-default flex-wrap gap-1 px-2 pt-2">
        {label ? (
          <div className="inline-flex items-center rounded-full border border-[#e6e6e6]/5 bg-[#242424]/30 px-3 py-1 text-xs font-medium text-white/80">
            {label}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export function FeaturedSection() {
  return (
    <div className="mt-12 w-full">
      <div className="flex flex-wrap px-8 pb-0 sm:items-center">
        <div className="mr-auto space-y-4">
          <h1 className="text-2xl font-medium text-white/70">
            Featured Projects
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:my-6 lg:gap-6 ">
        {featuredData.map((featured) => (
          <FeaturedCards {...featured} key={featured.name} />
        ))}
      </div>
    </div>
  );
}
