import FaqModel from "./faq-model";
import { Faq } from "@prisma/client";

export default function FAQSection({ faqs }: { faqs: Faq[] }) {
  const leftCorner = "/images/left-corner.png";
  const rightCorner = "/images/right-corner.png";
  return (
    <div className="relative overflow-hidden">
      <img
        src={leftCorner}
        alt="vectors"
        className="absolute bottom-0 left-0 translate-y-[-55%] translate-x-[-40%] -z-5"
      />

      <div className="">
        <h1 className="font-gotham text-white text-7xl text-center font-bold ml-[168px] mb-12 pt-28 relative">
          Perguntas Frequentes
        </h1>
      </div>
      <div className="relative  mb-36">
        {faqs?.map((faq) => (
          <FaqModel faq={faq} key={faq.question} />
        ))}
      </div>
      <img
        src={rightCorner}
        alt="vectors"
        className="absolute bottom-0 left-0 translate-y-[15%] translate-x-[870%] -z-5"
      />
    </div>
  );
}
