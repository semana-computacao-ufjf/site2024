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
    <div className="flex flex-col border lg:p-16 md:p-12 p-8 border-black">
      <div className="flex justify-between">
        <h1 className="lg:text-2xl md:text-xl text-base font-semibold">
          {faq.question}
        </h1>
        <button
          onClick={() => setIsQuestionOpen(!isQuestionOpen)}
          className="lg:text-5xl text-3xl font-bold"
        >
          {isQuestionOpen ? (
            <IoMdArrowDropup />
          ) : (
            <IoMdArrowDropup className="rotate-180" />
          )}
        </button>
      </div>

      <span
        className={`lg:text-2xl md:text-xl text-base overflow-x-auto  duration-300 transition-max-height  ${
          isQuestionOpen ? "max-h-screen mt-10" : "max-h-0"
        }`}
        dangerouslySetInnerHTML={{ __html: faq.answer }}
      ></span>
    </div>
  );
}
