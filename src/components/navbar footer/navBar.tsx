"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="w-full m-0 p-0">
      <section
        className="
          flex flex-col md:flex-row items-center justify-center
          font-viga text-2xl leading-loose
          px-4 py-2 md:px-7 md:py-4 
          shadow-[0px_3px_10px_0px_rgba(0,0,0,0.25)]
          h-auto md:h-[125px]
          w-full
        "
      >
        <div className="flex items-center w-full max-w-7xl justify-between md:justify-center">
          <div className="flex items-center gap-4">
            <img
              src="/images/semanaComputacaoLogo.png"
              alt="Logo"
              className="max-h-20 lg:max-h-32 brightness-0 invert h-full"
            />
            <div className="md:hidden lg:hidden sm:flex items-center gap-4">
              <img
                src="/images/ufjfLogo.png"
                alt="UFJF"
                className="max-h-10 md:max-h-20"
              />
            </div>
          </div>
          <nav className="flex-grow px-4 relative">
            <ul className="hidden md:flex flex-wrap gap-6 justify-center">
              <li>
                <Link href="/">
                  <span className="hover:underline m-1">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/presentation">
                  <span className="hover:underline m-1">Apresentação</span>
                </Link>
              </li>
              <li>
                <Link href="/schedule">
                  <span className="hover:underline m-1">Programação</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="hover:underline m-1">Patrocinadores</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="hover:underline m-1">Contato</span>
                </Link>
              </li>
              <li>
                <Link href="/schedule">
                  <span className="hover:underline m-1">Code JR</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="hover:underline m-1">Palestrantes</span>
                </Link>
              </li>
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
                <li>
                  <Link href="/">
                    <span className="m-1">Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/presentation">
                    <span className="m-1">Apresentação</span>
                  </Link>
                </li>
                <li>
                  <Link href="/schedule">
                    <span className="m-1">Programação</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <span className="m-1">Patrocinadores</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <span className="m-1">Contato</span>
                  </Link>
                </li>
                <li>
                  <Link href="/schedule">
                    <span className="m-1">Code JR</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <span className="m-1">Palestrantes</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="hidden md:flex lg:flex sm:hidden items-center gap-4">
            <img
              src="/images/ufjfLogo.png"
              alt="UFJF"
              className="max-h-10 md:max-h-20"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
