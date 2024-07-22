import Footer from "@/components/Footer";

import Navbar from "@/components/navBar";

export default function Home() {
  const backgroundImage = "/images/fundoPostEscuro.png";
  return (
    <>
      <div
        className="h-screen w-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Navbar />

        <div>
          <h1>XXVI</h1>
          <h1>Semana da Computação</h1>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
