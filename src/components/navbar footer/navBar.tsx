import Link from "next/link";

export default function NavBar() {
  return (
    <main className="w-full m-0 p-0">
      <section
        className="
          flex items-center justify-center
          font-viga text-2xl leading-loose
          px-4 py-2 md:px-7 md:py-4 
          shadow-[0px_3px_10px_0px_rgba(0,0,0,0.25)]
          h-[125px]
          w-full
        "
      >
        <div className="flex items-center w-full max-w-7xl justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/images/semanaComputacaoLogo.png"
              alt="Logo"
              className="max-h-20 lg:max-h-32 brightness-0 invert h-full"
            />
          </div>
          <nav className="flex-grow px-4">
            <ul className="flex flex-wrap gap-6 justify-center">
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
          </nav>
          <div className="flex items-center gap-4">
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
