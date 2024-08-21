"use client";

import { Faq } from "@/types/faq";
import { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";

interface FaqModelProps {
  faq: Faq;
}
export default function FaqModel({ faq }: FaqModelProps) {
  const [isQuestionOpen, setIsQuestionOpen] = useState(false);

  return (
    <div
      className={
        "font-inter text-[#D7D7D7] flex flex-col border-b  border-[#D7D7D7]"
      }
    >
      <div
        className="flex justify-between cursor-pointer lg:p-12 md:p-6 p-4"
        onClick={() => setIsQuestionOpen(!isQuestionOpen)}
      >
        <h1 className="lg:text-2xl md:text-xl text-base">{faq.question}</h1>
        <button className="lg:text-5xl text-3xl">
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
