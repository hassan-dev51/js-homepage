"use client";

import { useState } from "react";

const links: string[] = ["All", "React", "Html", "Next", "Full Stack"];
const Filter = () => {
  const [active, setActive] = useState("All");
  const handleFilter = (link: string) => {
    setActive(link);
  };
  return (
    <div>
      <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
        {links.map((link, ind) => (
          <button
            key={ind}
            onClick={() => handleFilter(link)}
            className={`${
              active === link ? " gradient_blue-purple" : ""
            } whitespace-nowrap rounded-lg capitalize px-8 py-2.5 `}
          >
            {link}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
