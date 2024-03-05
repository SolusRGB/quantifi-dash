import Image from "next/image";

import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

export function PAccessCard() {
  return (
    <div className="mx-6 grid grid-rows-1 items-center justify-center rounded-3xl border border-[#e6e6e6]/5 bg-[#3e3e3e]/20">
      <div className="absolute w-[43%] -translate-y-[7rem] justify-self-center">
        <Image
          src="/PAccessSeal.png"
          width={300}
          height={300}
          alt="Ice cold premium seal."
          priority
          style={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "contain"
          }} />
      </div>
      <div className="relative z-10 mt-16 rounded-b-3xl bg-[#3e3e3e]/60 lg:p-4">
        <div className="content-center items-center justify-center text-center ">
          <h3 className="my-2 text-xl font-medium text-white/70">
            Sign up now
          </h3>
          <h3 className="-mb-1 text-sm text-white/60">
            Gain exclusive access to alpha and tools with our cNFT.
          </h3>
        </div>
        <div className="flex content-center justify-center">
          <Link
            href={"https://magiceden.io/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="text-gunmetal bg-sunray focus:ring-lightGrey inline-flex translate-y-7 items-center rounded-full border border-[#e6e6e6]/5 p-3 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              <AiOutlineArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
