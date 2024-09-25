"use client";

import { thisYearLogo } from "@/util/logos";
import { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";

interface NavBarProps {
  sections: {
    name: string;
    ref: React.RefObject<HTMLDivElement>;
  }[];
}

export default function NavBar({ sections }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="w-full m-0 p-0">
      <section
        className="
        font-inter text-[#E67119]
        flex items-center justify-center
        h-[6.5em] lg:h-[8em] w-full
        fixed top-0 z-10
        bg-[#121212] border-b border-[#2E2E2E]
      "
      >
        <div className="flex items-center w-full max-w-7xl justify-between">
          <div className="flex items-center lg:hidden">
            <FaBars
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer text-2xl ml-4"
            />
          </div>
          <div className="flex items-center justify-end w-full lg:justify-start">
            <img
              src={`/images/${thisYearLogo}`}
              alt="2024 Logo"
              className="max-h-20 lg:max-h-32 h-full mr-4 lg:mr-0"
            />
          </div>
          <nav className="hidden lg:flex flex-grow px-4">
            <ul className="flex gap-6 justify-center w-full">
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
          </nav>
          <div
            ref={menuRef}
            className={`absolute top-full left-0 bg-[#2E2E2E] shadow-md rounded-md z-10 overflow-hidden transition-max-height duration-500 ease-in-out ${
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
        </div>
      </section>
    </div>
  );
}
