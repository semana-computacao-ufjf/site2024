import Link from "next/link";

export default function NavBar() {
  return (
    <section
      className="
    flex justify-between items-center
    font-viga text-xl leading-loose
    px-4 py-2 md:px-8 md:py-2
    h-[125px]
    "
    >
      <img
        src="/images/semanaComputacaoLogo.png"
        alt="Logo"
        className="brightness-0 invert h-full mr-5"
      />
      <nav>
        <ul className="flex flex-wrap gap-4">
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
            <Link href="/about">
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
      <img src="/images/ufjfLogo.png" alt="UFJF" className="h-1/2 mr-5" />
    </section>
  );
}
