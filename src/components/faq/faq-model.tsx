"use client";

import { Faq } from "@prisma/client";
import { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";

export default function FaqModel({ faq }: { faq: Faq }) {
  const [isQuestionOpen, setIsQuestionOpen] = useState(false);

  return (
    <div
      className={
        "font-inter text-[#D7D7D7] text-3xl flex flex-col border-b-2 border-[#E67119] max-w-[85%] sm:max-w-[60%] mt-6 sm:mt-0 mx-auto"
      }
    >
      <div
        className="flex justify-between cursor-pointer sm:mt-7 sm:p-1"
        onClick={() => setIsQuestionOpen(!isQuestionOpen)}
      >
        <h1 className="text-xl sm:text-2xl pb-4 sm:pb-0 sm:ml-3">
          {faq.question}
        </h1>
        <button className="lg:text-5xl">
          {isQuestionOpen ? (
            <IoMdArrowDropup />
          ) : (
            <IoMdArrowDropup className="rotate-180" />
          )}
        </button>
      </div>
      <span
        className={`lg:text-2xl md:text-xl text-base overflow-x-auto lg:px-16 md:px-12 px-8 duration-300 transition-max-height  ${
          isQuestionOpen ? "max-h-screen lg:mb-16 md:mb-6 mb-4 " : "max-h-0"
        }`}
        dangerouslySetInnerHTML={{ __html: faq.answer }}
      ></span>
    </div>
  );
}
