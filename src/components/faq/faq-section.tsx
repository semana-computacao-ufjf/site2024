import FaqModel from "./faq-model";
import { Faq } from "@prisma/client";

export default function FAQSection({ faqs }: { faqs: Faq[] }) {
  const leftCorner = "/images/left-corner.png";
  const rightCorner = "/images/right-corner.png";
  return (
    <div className="relative overflow-hidden">
      <img
        src={leftCorner}
        alt="Left Corner"
        className="absolute bottom-0 left-0 translate-y-[-25%] translate-x-[-25%] -z-5"
      />

      <div className="">
        <h1 className="font-gotham text-white text-3xl sm:text-7xl text-center font-bold mx-auto mb-8 sm:mb-12 pt-16 sm:pt-28 relative">
          Perguntas Frequentes
        </h1>
      </div>
      <div className="relative mb-24 sm:mb-32">
        {faqs?.map((faq) => (
          <FaqModel faq={faq} key={faq.question} />
        ))}
      </div>
      <img
        src={rightCorner}
        alt="Right Corner"
        className="absolute bottom-0 left-0 translate-y-[15%] translate-x-[870%] -z-5"
      />
    </div>
  );
}
