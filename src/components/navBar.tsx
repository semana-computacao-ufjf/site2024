import Link from "next/link";

export default function NavBar() {
  return (
    <main>
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
        className="mr-16 brightness-0 invert max-h-20 md:max-h-40 mr-4"
      />
      <nav>
        <ul className="flex flex-wrap gap-4">
          <li>
            <Link href="/">
              <span className="hover:underline">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="hover:underline">Apresentação</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="hover:underline">Programação</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="hover:underline">Patrocinadores</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="hover:underline">Contato</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="hover:underline">Code JR</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="hover:underline">Palestrantes</span>
            </Link>
          </li>
        </ul>
      </nav>
      <img
        src="/images/ufjfLogo.png"
        alt="UFJF"
        className="max-h-10 md:max-h-20 ml-10"
      />
    </section>
    </main>
  );
}
