import Image from "next/image";

// Define the TypeScript interface for the props
interface ProfileProps {
  name: string;
  avatar: string;
}

// Modify the ProfileBanner to accept props
const ProfileBanner: React.FC<ProfileProps> = ({ name, avatar }) => {
  return (
    <div>
      <div>
        <Image
          width={1950}
          height={500}
          className="h-32 w-full object-cover lg:h-48"
          src={"/banner.gif"}
          alt="Some default thing"
        />
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <Image
              width={128}
              height={128}
              className="h-24 w-24 rounded-full ring-4 ring-gray-800 sm:h-32 sm:w-32"
              src={avatar}
              alt="Profile avatar"
            />
          </div>
          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
              <h1 className="cursor-default truncate text-2xl font-medium text-sunray hover:brightness-110">
                {name}
              </h1>
            </div>
            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0"></div>
          </div>
        </div>
        <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
          <h1 className="truncate text-2xl font-bold text-gray-900">{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
