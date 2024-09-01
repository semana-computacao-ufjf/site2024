import React from "react";
import { thisYearLogo } from "@/util/logos";
import Image from "next/image";

export default function Cover() {
  return (
    <div className="flex items-center justify-center flex-wrap p-4 mt-20">
      <div className="text-center font-gotham text-[#DCDFE5]">
        <h1 className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[6vw] text-left">
          XXVI
        </h1>
        <h1 className=" text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] leading-tight text-left">
          <div>Semana da</div>
          <div>Computação</div>
        </h1>
        <h2 className="text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] leading-tight text-left mt-6 sm:mt-8 md:mt-10 lg:mt-12">
          25 a 29 de Novembro, 2024
        </h2>
        <div className="flex items-start flex-wrap mt-6 sm:mt-8 md:mt-10 lg:mt-12">
          <button className="bg-[#FF7506] font-bold text-black text-2xl py-4 px-8 rounded-[32px] border-2 border-[#FF7506] hover:bg-transparent hover:text-[#FF7506] button-transition">
            Inscreva-se Já
          </button>

          {/* <button className="bg-transparent text-white py-2 px-4 rounded-lg border-2 border-white shadow-md hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-400 ml-4 sm:ml-6 md:ml-8 lg:ml-10">
            Dúvidas?
          </button> */}
        </div>
      </div>
      <Image
        width={500}
        height={500}
        loading="eager"
        src={`/images/${thisYearLogo}`}
        alt="HomeImage"
        className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 ml-24"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </div>
  );
}
