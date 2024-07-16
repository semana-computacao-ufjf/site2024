import Link from "next/link";

export default function NavBar() {
  return (
    <section className="font-viga text-lg">
      <span>
        <Link href="/about">
          <span>Home</span>
        </Link>
      </span>
      <span>
        <Link href="/about">
          <span> Apresentação </span>
        </Link>
      </span>
      <span>
        <Link href="/about">
          <span> Programação </span>
        </Link>
      </span>
      <span>
        <Link href="/about">
          <span> Patrocinadores </span>
        </Link>
      </span>
      <span>
        <Link href="/about">
          <span> Contato </span>
        </Link>
      </span>
      <span>
        <Link href="/about">
          <span> Code JR </span>
        </Link>
      </span>
      <span>
        <Link href="/about">
          <span> Palestrantes </span>
        </Link>
      </span>
      <span>
        <Link href="/about">
          <span> Como Chegar?</span>
        </Link>
      </span>
    </section>
  );
}
