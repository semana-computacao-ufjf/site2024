import ContactSession from "@/components/contact-session";
import Footer from "@/components/Footer";
import Navbar from "@/components/navBar";

export default function Home() {
  const backgroundImage = "/images/fundoPostEscuro.png";
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="text-2xl">
        <h1>Site Semana Comp UFJF 2024</h1>
      </div>

      <ContactSession />
    </main>
  );
}
