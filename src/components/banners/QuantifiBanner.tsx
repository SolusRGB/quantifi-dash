import Image from "next/image";

export default function QuantifiBanner() {
  return (
    <div className="relative border-x border-[#e6e6e6]/5 bg-[#242424]">
      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <Image
          src="/hero.png"
          alt=""
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="absolute inset-0 bg-[#242424]/60 mix-blend-overlay"></div>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-lg font-semibold text-white/90">
            Join 5k+ Smarter Investors
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white/95 sm:text-4xl">
            Our Discord Is Open
          </p>
          <p className="mt-4 text-lg text-white/70">
            Let&apos;s face it, researching NFT projects is time-consuming and
            it&apos;s hard to find good projects when information is scarce.
          </p>
          <p className="mt-3 text-lg text-white/70">
            We think it&apos;s time that changed. Our NFT experts are writing
            detailed breakdowns on some of the best projects right now.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href=""
                className="inline-flex items-center justify-center rounded-xl border border-transparent bg-sunray px-5 py-3 text-base font-medium text-gray-900 hover:brightness-110"
              >
                Enter The Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
