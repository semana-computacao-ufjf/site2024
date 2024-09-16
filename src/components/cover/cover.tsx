import React from "react";
import { thisYearHalfLogo } from "@/util/logos";
import Image from "next/image";

export default function Cover() {
  return (
    <>
      <div className="flex flex-col sm:grid sm:grid-cols-4 items-center p-4 mt-28 sm:mt-40 gap-4">
        <div className="flex flex-row items-center sm:flex-col col-start-2 justify-center sm:col-span-1 sm:max-w-64 sm:ml-28">
          <Image
            width={250}
            height={500}
            loading="eager"
            src={`/images/${thisYearHalfLogo}`}
            alt="Logo2024"
            className="w-[12%] mr-6 sm:w-full"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
          <div className="font-bold text-3xl sm:hidden">
            <h1>Semana da</h1>
            <h1>Computação</h1>
          </div>
        </div>
        <div className="sm:col-span-3 sm:text-center font-gotham text-white sm:mr-14">
          <h1 className="font-bold text-7xl hidden sm:block">
            Semana da computação
          </h1>
          <h2 className="w-4/5 text-start mx-auto sm:text-3xl sm:text-left sm:w-full sm:mx-12 my-2 sm:my-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident
          </h2>
          <div className="flex justify-center sm:grid sm:col-span-3 sm:justify-normal">
            <button className="bg-[#E67119] w-4/5 sm:w-full font-bold text-white text-xl sm:text-5xl text-center rounded-[13px] border-2 border-[#E67119] hover:bg-transparent hover:text-[#E67119] button-transition mx-auto sm:ml-12 sm:mr-2 mt-5 mb-6 sm:my-0 p-2 sm:p-3">
              Inscrever
            </button>
          </div>
        </div>
      </div>
      <Cards />
    </>
  );
}

const Cards = () => {
  const vector = "/images/vectors.png";

  const cardsData = [
    {
      title: "Público",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      title: "Cursos",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      title: "Palestras",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
  ];

  const cardsTitleClasses =
    "font-gotham mx-5 font-bold text-white text-3xl sm:text-7xl";
  const cardsDescriptionClasses =
    "font-inter mx-5 text-[#D7D7D7] text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] leading-5 sm:leading-6 md:leading-7 pb-5 pt-2 sm:py-7";

  return (
    <div className="text-black flex justify-center mx-auto w-11/12 sm:w-full flex-col sm:flex-row sm:justify-around text-center px-4 gap-6 items-center mb-20 sm:mb-28 mt-2 sm:mt-28">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="bg-[#2C2B2B] w-full sm:w-1/3 p-1 sm:p-5 rounded-[20px] overflow-hidden text-start"
        >
          <img
            src={vector}
            alt={card.title}
            className="inline-block bottom-0 -mb-36 sm:-mb-16 translate-y-[-100%] translate-x-[12%] sm:translate-y-[-65%] sm:translate-x-[0%] sm:w-full"
          />
          <p className={cardsTitleClasses}>
            <span>{card.title}</span>
          </p>
          <p className={cardsDescriptionClasses}>{card.description}</p>
        </div>
      ))}
    </div>
  );
};
