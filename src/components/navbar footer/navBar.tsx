"use client";

import { thisYearLogo } from "@/util/logos";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

interface NavBarProps {
  sections: {
    name: string;
    ref: React.RefObject<HTMLDivElement>;
  }[];
}

export default function NavBar({ sections }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="w-full m-0 p-0">
      <section
        className="
        font-inter text-[#FF7506]
        flex flex-row items-center justify-center
        px-0 py-0 h-[6.5em] md:h-auto w-full
        fixed top-0 z-10
        bg-[#121212] border-b border-[#2E2E2E]
"
      >
        <div className="flex items-center w-full max-w-7xl justify-between md:justify-center">
          <div className="flex items-center gap-4">
            <img
              src={`/images/${thisYearLogo}`}
              alt="Logo"
              className="max-h-20 lg:max-h-32 h-full"
            />
          </div>
          <nav className="flex-grow px-4 relative">
            <ul className="hidden md:flex flex-wrap gap-6 justify-center">
              {sections.map((section, index) => (
                <li key={index}>
                  <span
                    className="text-3xl hover:text-[#D7D7D7] transition-colors duration-300 m-1 cursor-pointer"
                    onClick={() => handleScroll(section.ref)}
                  >
                    {section.name}
                  </span>
                </li>
              ))}
            </ul>
            <div className="md:hidden flex items-center justify-end">
              <FaBars
                onClick={() => setMenuOpen(!menuOpen)}
                className="cursor-pointer"
              />
            </div>
            <div
              className={`absolute top-full left-0 right-0 bg-[#181426] shadow-md rounded-md z-50 overflow-hidden transition-max-height duration-500 ease-in-out ${
                menuOpen ? "max-h-screen" : "max-h-0"
              }`}
            >
              <ul className="flex flex-col gap-2 mt-4 p-4">
                {sections.map((section, index) => (
                  <li key={index}>
                    <span
                      className="m-1 cursor-pointer"
                      onClick={() => handleScroll(section.ref)}
                    >
                      {section.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </main>
  );
}
