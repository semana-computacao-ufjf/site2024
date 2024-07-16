import Link from "next/link";

export default function NavBar() {
  return (
    <section
      className="
    flex justify-between items-center
    font-viga text-xl leading-loose
    px-4 py-2 md:px-8 md:py-4
    "
    >
      <img
        src="/images/semanaComputacaoLogo.png"
        alt="Logo"
        className="brightness-0 invert max-h-20 md:max-h-40 mr-4"
      />
      <nav>
        <ul className="flex flex-wrap gap-4">
          <li>
            <Link href="/about">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span>Apresentação</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span>Programação</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span>Patrocinadores</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span>Contato</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span>Code JR</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span>Palestrantes</span>
            </Link>
          </li>
        </ul>
      </nav>
      <img
        src="/images/ufjfLogo.png"
        alt="UFJF"
        className="max-h-10 md:max-h-20"
      />
    </section>
  );
}
