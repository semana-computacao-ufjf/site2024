import React from "react";

export default function Cover() {
  const thisYearLogo = "logo2024.png";
  return (
    <div className="flex items-center justify-around flex-wrap p-4">
      <div className="text-center">
        <h1 className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[6vw] font-bold leading-tight text-left">
          XXVI
        </h1>
        <h1 className="font-julius-sans-one text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] font-normal leading-tight text-left">
          <div>Semana da</div>
          <div>Computação</div>
        </h1>
        <h2 className="text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] font-normal leading-tight text-left mt-6 sm:mt-8 md:mt-10 lg:mt-12">
          Dias 25 a 29 de Novembro, 2024
        </h2>
        <div className="flex items-start justify-center flex-wrap mt-6 sm:mt-8 md:mt-10 lg:mt-12">
          <button className="bg-white text-black font-semibold py-2 px-4 rounded-lg border-2 border-white shadow-md hover:bg-transparent hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
            Saiba mais
          </button>
          <button className="bg-transparent text-white font-semibold py-2 px-4 rounded-lg border-2 border-white shadow-md hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-400 ml-4 sm:ml-6 md:ml-8 lg:ml-10">
            Dúvidas?
          </button>
        </div>
      </div>
      <img
        src={`/images/${thisYearLogo}`}
        alt="HomeImage"
        className="max-h-[350px] mt-6 sm:mt-8 md:mt-10 lg:mt-12"
      />
    </div>
  );
}
