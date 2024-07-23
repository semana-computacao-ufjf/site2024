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
    <div className="flex flex-col border  border-black">
      <div
        className="flex justify-between cursor-pointer lg:p-16 md:p-12 p-8"
        onClick={() => setIsQuestionOpen(!isQuestionOpen)}
      >
        <h1 className="lg:text-2xl md:text-xl text-base font-semibold">
          {faq.question}
        </h1>
        <button className="lg:text-5xl text-3xl font-bold">
          {isQuestionOpen ? (
            <IoMdArrowDropup />
          ) : (
            <IoMdArrowDropup className="rotate-180" />
          )}
        </button>
      </div>

      <span
        className={`lg:text-2xl md:text-xl text-base overflow-x-auto lg:px-16 md:px-12 px-8 duration-300 transition-max-height  ${
          isQuestionOpen
            ? "max-h-screen lg:-mt-8 md:-mt-6 -mt-4 lg:py-16 md:py-12 py-8"
            : "max-h-0"
        }`}
        dangerouslySetInnerHTML={{ __html: faq.answer }}
      ></span>
    </div>
  );
}
