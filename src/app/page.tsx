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
        <div className="bg-[rgba(24,20,38,1)] shadow-[0px_3px_10px_0px_rgba(0,0,0,0.25)]">
          <Navbar />
        </div>
        <Cover />
      </div>
      <Footer />
    </>
  );
}

const Cover = () => {
  return (
    <div className="flex items-center justify-around flex-wrap">
      <div>
        <h1 className="font-viga text-[90px] font-normal leading-[120.96px] text-left">
          XXVI
        </h1>
        {/* {TODO: instalar a fonte julius sans one} */}
        <h1 className="font-julius-sans-one text-[90px] font-normal leading-[98.19px] text-left">
          <div>Semana da</div>
          <div>Computação</div>
        </h1>
        <h2 className="font-viga text-[24px] font-normal leading-[32.26px] text-left mt-12">
          Dias 25 a 29 de Novembro, 2024
        </h2>
        <div className="flex items-start justify-start flex-wrap mt-10">
          <button className="bg-white text-black font-semibold py-2 px-4 rounded-lg border-2 border-white shadow-md hover:bg-transparent hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
            Saiba mais
          </button>
          <button className="bg-transparent text-white font-semibold py-2 px-4 rounded-lg border-2 border-white shadow-md hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-400 ml-[32px]">
            Dúvidas?
          </button>
        </div>
      </div>
      <img
        src="/images/homeImage.png"
        alt="HomeImage"
        className="max-h-[350px] mt-10"
      />
    </div>
  );
};
