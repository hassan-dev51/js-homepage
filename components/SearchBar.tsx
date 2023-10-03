"use client";

import { useState } from "react";

import Image from "next/image";
import { Input } from "./ui/input";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <form className="flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5">
        <label className="flex-center w-full relative max-w-3xl">
          <Image
            src="/magnifying-glass.svg"
            alt="search-icon"
            width={32}
            height={32}
            className="absolute left-8"
          />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-black-400 !ring-0 !ring-offset-0 border-0 base-regular h-fit py-6 pl-20 pr-8  text-white-800 placeholder:text-white-800"
            placeholder="Search"
          />
        </label>
      </form>
    </div>
  );
};

export default SearchBar;
