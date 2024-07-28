import ContactSession from "@/components/contact-session";
import Footer from "@/components/Footer";
import NavBar from "@/components/navBar";

export default function Home() {
  const backgroundImage = "/images/fundoPostEscuro.png";
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[181426]">
      <div className="text-2xl">
      </div>
      <NavBar />
      <ContactSession />
      <Footer />
    </main>
  );
}
