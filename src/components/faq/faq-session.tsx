import { getAllFaqs } from "@/app/api/faq/faq.question";
import Image from "next/image";
import FaqModel from "./faq-model";
export default async function FAQSession() {
  const faqs = getAllFaqs();
  return (
    <div className="w-full min-h-screen bg-white text-black flex flex-col py-10 gap-y-20">
      <div className="flex lg:gap-x-8 md:gap-x-4 w-full justify-center items-center">
        <Image
          width={70}
          height={70}
          alt="Semana da Computação"
          src={"/images/semanaCompLogo2024.png"}
          className="md:scale-90 scale-75"
        />
        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-[1.35rem]">
          Perguntas Frequentes
        </h1>
        <Image
          width={70}
          height={70}
          alt="Semana da Computação"
          src={"/images/semanaCompLogo2024.png"}
          className="md:scale-90 scale-75"
        />
      </div>
      <div className="lg:px-52 md:px-32 px-10">
        {faqs?.map((faq) => (
          <FaqModel faq={faq} key={faq.question} />
        ))}
      </div>
    </div>
  );
}
