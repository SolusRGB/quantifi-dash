import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import AuthShowcase from "./auth/AuthShowcase";

export function Header() {
  return (
    <div className="flex w-full justify-between">
      <div className="hidden w-full flex-shrink-0 items-center rounded-3xl border border-[#e6e6e6]/5 bg-[#3e3e3e]/50 duration-300 hover:brightness-110 md:max-w-xs xl:max-w-sm">
        <AiOutlineSearch className="mx-6 text-2xl text-[#f3f3f3]" />
        <div className="w-full py-2 text-lg text-[#f3f3f3] ">
          <input
            placeholder="Search Projects"
            className="w-full bg-transparent outline-none"
          />
        </div>
      </div>

      <div className="ml-10 hidden items-center gap-8 sm:mt-5 md:flex md:flex-1 lg:mt-0 lg:justify-end">
        <AuthShowcase />
      </div>
    </div>
  );
}
