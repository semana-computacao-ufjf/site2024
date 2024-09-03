import React from "react";
import { thisYearHalfLogo } from "@/util/logos";
import Image from "next/image";

export default function Cover() {
  return (
    <>
      <div className="grid grid-cols-4 items-center p-4 mt-40 gap-4">
        <div className="col-span-1 max-w-64 ml-24">
          <Image
            width={250}
            height={500}
            loading="eager"
            src={`/images/${thisYearHalfLogo}`}
            alt="Logo2024"
            className="w-full"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className="col-span-3 text-center font-gotham text-[#DCDFE5]">
          <h1 className="font-bold text-7xl">Semana da computação</h1>
          <h2 className="text-3xl text-left mx-12 my-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </h2>
          <div className="grid col-span-3">
            <button className="bg-[#E67119] font-bold text-white text-5xl text-center rounded-[13px] border-2 border-[#E67119] hover:bg-transparent hover:text-[#E67119] button-transition ml-12 mr-2 p-3">
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
  const cardsTitleClasses = "font-gotham font-bold text-[#DCDFE5] text-7xl";
  const cardsDescriptionClasses =
    "font-inter text-[#D7D7D7] lg:text-[24px] md:text-[20px] text-[16px] leading-6 sm:leading-7";

  return (
    <>
      <div className="text-black flex flex-col sectionBreak:flex-row justify-around text-center px-6 gap-6 items-center sectionBreak:items-stretch mb-5">
        <div className="bg-[#2C2B2B] w-full sm:w-1/3 p-5 rounded-[20px] overflow-hidden">
          <img
            src={vector}
            alt="vectors"
            className="inline-block mb-2 bottom-0 translate-y-[-65%] w-full"
          />
          <p className={cardsTitleClasses}>
            <span>Público</span>
          </p>
          <p className={cardsDescriptionClasses}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
        <div className="bg-[#2C2B2B] w-full sm:w-1/3 p-5 rounded-[20px] overflow-hidden">
          <img
            src={vector}
            alt="vectors"
            className="inline-block mb-2 bottom-0 translate-y-[-65%] w-full"
          />
          <p className={cardsTitleClasses}>
            <span>Cursos</span>
          </p>
          <p className={cardsDescriptionClasses}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
        <div className="bg-[#2C2B2B] w-full sm:w-1/3 p-5 rounded-[20px] overflow-hidden">
          <img
            src={vector}
            alt="vectors"
            className="inline-block mb-2 bottom-0 translate-y-[-65%] w-full"
          />
          <p className={cardsTitleClasses}>
            <span>Palestras</span>
          </p>
          <p className={cardsDescriptionClasses}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
      </div>
    </>
  );
};
